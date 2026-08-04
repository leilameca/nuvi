const DEFAULT_SHEET_NAME = 'Leads';
const DEFAULT_NOTIFY_EMAIL = 'angel.nunez@nuvird.com';
const DEFAULT_SOURCE = 'Web NUVI';

function authorizeProject() {
  const ssId = PropertiesService.getScriptProperties().getProperty('SPREADSHEET_ID');
  if (!ssId) {
    throw new Error('Configura SPREADSHEET_ID en Script Properties antes de autorizar.');
  }
  SpreadsheetApp.openById(ssId).getName();
  getNotifyEmail_();
  MailApp.getRemainingDailyQuota();
  return 'Autorizacion completada';
}

function doGet() {
  return asJson_({
    ok: true,
    service: 'nuvi-leads-endpoint',
    now: new Date().toISOString()
  });
}

function debugDestination() {
  const sheet = getLeadsSheet_();
  return {
    spreadsheetId: sheet.getParent().getId(),
    spreadsheetName: sheet.getParent().getName(),
    sheetName: sheet.getName(),
    lastRow: sheet.getLastRow()
  };
}

function doPost(e) {
  let payload = null;
  try {
    payload = normalizePayload_(e);
    validatePayload_(payload);

    const rowNumber = appendLeadRow_(payload);
    sendLeadEmail_(payload);

    const response = {
      ok: true,
      row: rowNumber,
      message: 'Lead registrado correctamente'
    };

    return shouldRespondWithIframe_(payload)
      ? asIframeMessage_(payload, response)
      : asJson_(response);
  } catch (err) {
    console.error('[NUVI Script] Error procesando lead: ' + err);
    const response = {
      ok: false,
      error: String(err)
    };

    return shouldRespondWithIframe_(payload)
      ? asIframeMessage_(payload, response)
      : asJson_(response);
  }
}

function normalizePayload_(e) {
  const p = (e && e.parameter) ? e.parameter : {};
  return {
    submittedAt: p.submittedAt || new Date().toISOString(),
    nombre: (p.nombre || '').trim(),
    telefono: (p.telefono || '').trim(),
    email: (p.email || '').trim(),
    tipo: (p.tipo || '').trim(),
    mensaje: (p.mensaje || '').trim(),
    source: (p.source || DEFAULT_SOURCE).trim(),
    page: (p.page || '').trim(),
    parentOrigin: (p.parentOrigin || '').trim(),
    responseMode: (p.responseMode || '').trim()
  };
}

function validatePayload_(payload) {
  if (!payload.nombre || !payload.telefono || !payload.email) {
    throw new Error('Faltan campos obligatorios: nombre, telefono o email.');
  }
}

function appendLeadRow_(payload) {
  const sheet = getLeadsSheet_();
  const date = new Date(payload.submittedAt);

  sheet.appendRow([
    isNaN(date.getTime()) ? new Date() : date,
    payload.nombre,
    payload.telefono,
    payload.email,
    payload.tipo,
    payload.mensaje,
    payload.source,
    payload.page
  ]);

  return sheet.getLastRow();
}

function getLeadsSheet_() {
  const ssId = PropertiesService.getScriptProperties().getProperty('SPREADSHEET_ID');
  if (!ssId) {
    throw new Error('Configura SPREADSHEET_ID en Script Properties.');
  }

  const sheetName = PropertiesService.getScriptProperties().getProperty('SHEET_NAME') || DEFAULT_SHEET_NAME;
  const ss = SpreadsheetApp.openById(ssId);
  let sheet = ss.getSheetByName(sheetName);

  if (!sheet) {
    sheet = ss.insertSheet(sheetName);
    sheet.appendRow(['Fecha', 'Nombre', 'Telefono', 'Email', 'Servicio', 'Mensaje', 'Origen', 'Pagina']);
  }

  return sheet;
}

function sendLeadEmail_(payload) {
  // El destinatario se resuelve exclusivamente en el servidor. Nunca se toma
  // del formulario, porque un visitante podria modificar los campos enviados.
  const to = getNotifyEmail_();
  if (!to) return;

  const subject = 'Nuevo lead web NUVI: ' + payload.nombre;
  const plainBody = [
    'Nuevo lead desde el sitio web',
    '',
    'Nombre: ' + payload.nombre,
    'Telefono: ' + payload.telefono,
    'Email: ' + payload.email,
    'Servicio: ' + (payload.tipo || 'No especificado'),
    'Mensaje: ' + (payload.mensaje || 'Sin mensaje'),
    '',
    'Origen: ' + payload.source,
    'Pagina: ' + (payload.page || 'N/D'),
    'Fecha: ' + payload.submittedAt
  ].join('\n');

  const htmlBody = [
    '<h2>Nuevo lead desde el sitio web</h2>',
    '<p><strong>Nombre:</strong> ' + escapeHtml_(payload.nombre) + '</p>',
    '<p><strong>Telefono:</strong> ' + escapeHtml_(payload.telefono) + '</p>',
    '<p><strong>Email:</strong> ' + escapeHtml_(payload.email) + '</p>',
    '<p><strong>Servicio:</strong> ' + escapeHtml_(payload.tipo || 'No especificado') + '</p>',
    '<p><strong>Mensaje:</strong><br>' + escapeHtml_(payload.mensaje || 'Sin mensaje') + '</p>',
    '<hr>',
    '<p><strong>Origen:</strong> ' + escapeHtml_(payload.source) + '</p>',
    '<p><strong>Pagina:</strong> ' + escapeHtml_(payload.page || 'N/D') + '</p>',
    '<p><strong>Fecha:</strong> ' + escapeHtml_(payload.submittedAt) + '</p>'
  ].join('');

  MailApp.sendEmail({
    to: to,
    replyTo: payload.email,
    name: 'Formulario web NUVI',
    subject: subject,
    body: plainBody,
    htmlBody: htmlBody
  });
}

function getNotifyEmail_() {
  return (
    PropertiesService.getScriptProperties().getProperty('NOTIFY_EMAIL') ||
    DEFAULT_NOTIFY_EMAIL
  ).trim();
}

function asJson_(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}

function shouldRespondWithIframe_(payload) {
  return !!(payload && (payload.responseMode === 'iframe' || payload.parentOrigin));
}

function asIframeMessage_(payload, response) {
  const targetOrigin = sanitizeOrigin_(payload && payload.parentOrigin);
  const message = {
    source: 'nuvi-leads-endpoint',
    ok: !!(response && response.ok),
    row: response && response.row ? response.row : null,
    message: response && response.message ? response.message : '',
    error: response && response.error ? response.error : ''
  };

  const html = [
    '<!doctype html>',
    '<html><head><meta charset="utf-8"></head><body>',
    '<script>',
    '(function(){',
    'var message=' + serializeForScript_(message) + ';',
    'var targetOrigin=' + serializeForScript_(targetOrigin) + ';',
    'try {',
    '  if (window.parent && window.parent !== window) {',
    '    window.parent.postMessage(message, targetOrigin || "*");',
    '  }',
    '} catch (err) {}',
    'document.body.textContent = message.ok ? "OK" : "ERROR";',
    '})();',
    '<' + '/script>',
    '</body></html>'
  ].join('');

  return HtmlService
    .createHtmlOutput(html)
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function sanitizeOrigin_(origin) {
  if (!origin) return '*';

  const cleanOrigin = String(origin).trim();
  return /^https?:\/\/[^/]+$/i.test(cleanOrigin) ? cleanOrigin : '*';
}

function serializeForScript_(value) {
  return JSON.stringify(value).replace(/</g, '\\u003c');
}

function escapeHtml_(input) {
  return String(input || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}
