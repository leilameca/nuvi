# Google Sheets + Correo (Apps Script)

Este archivo explica como dejar operativo el formulario para:

1. Guardar leads en Google Sheets.
2. Enviar notificacion al correo de la empresa.

## 1) Crear el proyecto de Apps Script

1. Abre [script.new](https://script.new).
2. Copia el contenido de `Code.gs` (en esta misma carpeta).
3. Guarda el proyecto.

## 2) Configurar propiedades del script

En Apps Script, ve a `Project Settings` -> `Script Properties` y crea:

- `SPREADSHEET_ID`: ID del Google Sheet donde guardaras leads.
- `SHEET_NAME`: (opcional) por defecto usa `Leads`.

Luego ejecuta manualmente la funcion `authorizeProject` una vez desde el editor de Apps Script y acepta permisos.
Tambien puedes ejecutar `debugDestination` para confirmar en que spreadsheet y hoja se estan guardando los leads.

## 3) Desplegar como Web App

1. `Deploy` -> `New deployment`.
2. Tipo: `Web app`.
3. `Execute as`: **Me**.
4. `Who has access`: **Anyone**.
5. Deploy y copia la URL terminada en `/exec`.
6. Si ya tenias un deployment anterior, crea una nueva version y vuelve a desplegar para que tome el `Code.gs` actualizado.

## 4) Conectar en el frontend

En `index.html`, el formulario ya tiene:

- `data-sheets-url=".../exec"`
- `data-notify-email="angel.nunez@nuvird.com"`

Solo reemplaza `data-sheets-url` por la nueva URL de tu despliegue.

El frontend ya no depende de `fetch(..., no-cors)`. Ahora envia el formulario a un `iframe` oculto y espera una confirmacion real con `postMessage` desde Apps Script.

Como compatibilidad, si el deployment activo todavia responde con JSON simple y no con `postMessage`, la web toma la carga correcta del `iframe` como exito para no dejar al usuario bloqueado. Aun asi, lo ideal sigue siendo redeployar el Web App despues de actualizar `Code.gs` para tener confirmacion explicita de exito o error.

## 5) Prueba rapida

1. Envia un formulario desde el sitio.
2. Verifica una nueva fila en el sheet.
3. Verifica correo en `angel.nunez@nuvird.com`.
4. Si ves el mensaje `No pudimos confirmar el envio`, revisa que la URL del formulario apunte al deployment correcto y que el Web App haya sido redeployado.

## Nota importante sobre errores 403

Si el endpoint devuelve `403 Forbidden`, casi siempre es por permisos del despliegue.
Revisa que el Web App este publicado como **Anyone** y vuelve a desplegar.

Si devuelve `401 Unauthorized`, normalmente falta autorizar el proyecto o el despliegue no es publico para POST.
