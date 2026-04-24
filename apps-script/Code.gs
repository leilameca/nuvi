const DEFAULT_SHEET_NAME = 'Leads';
const DEFAULT_NOTIFY_EMAIL = 'angel.nunez@nuvird.com';
const DEFAULT_SOURCE = 'Web NUVI';

function doGet() {
  return asJson_({
    ok: true,
    service: 'nuvi-leads-endpoint',
    now: new Date().toISOString()
  });
}

function doPost(e) {
  try {
    const payload = normalizePayload_(e);
    validatePayload_(payload);

    const rowNumber = appendLeadRow_(payload);
    sendLeadEmail_(payload);

    return asJson_({
      ok: true,
      row: rowNumber,
      message: 'Lead registrado correctamente'
    });
  } catch (err) {
    console.error('[NUVI Script] Error procesando lead: ' + err);
    return asJson_({
      ok: false,
      error: String(err)
    });
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
    notifyEmail: (p.notifyEmail || DEFAULT_NOTIFY_EMAIL).trim()
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
  const to = payload.notifyEmail || DEFAULT_NOTIFY_EMAIL;
  if (!to) return;

  const subject = 'Nuevo lead web NUVI: ' + payload.nombre;
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
    subject: subject,
    htmlBody: htmlBody
  });
}

function asJson_(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}

function escapeHtml_(input) {
  return String(input || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}
