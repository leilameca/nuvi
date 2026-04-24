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

## 3) Desplegar como Web App

1. `Deploy` -> `New deployment`.
2. Tipo: `Web app`.
3. `Execute as`: **Me**.
4. `Who has access`: **Anyone**.
5. Deploy y copia la URL terminada en `/exec`.

## 4) Conectar en el frontend

En `index.html`, el formulario ya tiene:

- `data-sheets-url=".../exec"`
- `data-notify-email="angel.nunez@nuvird.com"`

Solo reemplaza `data-sheets-url` por la nueva URL de tu despliegue.

## 5) Prueba rapida

1. Envia un formulario desde el sitio.
2. Verifica una nueva fila en el sheet.
3. Verifica correo en `angel.nunez@nuvird.com`.

## Nota importante sobre errores 403

Si el endpoint devuelve `403 Forbidden`, casi siempre es por permisos del despliegue.
Revisa que el Web App este publicado como **Anyone** y vuelve a desplegar.

Si devuelve `401 Unauthorized`, normalmente falta autorizar el proyecto o el despliegue no es publico para POST.
