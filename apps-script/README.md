# Google Sheets + Correo (Apps Script)

Esta carpeta ya trae listo el script para que el formulario del sitio haga 2 cosas:

1. Guardar leads en un Google Sheet.
2. Enviar una notificacion por correo.

Si vas a crear un Google Sheet nuevo desde cero, sigue estos pasos.

## 1) Crear el Google Sheet nuevo

1. Entra a [Google Sheets](https://sheets.google.com).
2. Crea una hoja nueva en blanco.
3. Ponle un nombre facil de reconocer, por ejemplo: `Leads NUVI`.
4. Copia el ID del documento desde la URL.

Ejemplo:

```text
https://docs.google.com/spreadsheets/d/1AbCdEfGhIjKlMnOpQrStUvWxYz1234567890/edit#gid=0
```

En ese ejemplo, el `SPREADSHEET_ID` es:

```text
1AbCdEfGhIjKlMnOpQrStUvWxYz1234567890
```

No necesitas crear las columnas manualmente. El script las crea solo la primera vez si la hoja `Leads` no existe.

## 2) Crear el proyecto de Apps Script

1. Abre [script.new](https://script.new).
2. Borra el contenido que trae por defecto.
3. Abre [Code.gs](/c:/Users/seers/OneDrive/Escritorio/NUVI/apps-script/Code.gs).
4. Copia todo ese archivo y pegalo en Apps Script.
5. Guarda el proyecto con un nombre como `NUVI Leads`.

## 3) Configurar las propiedades del script

Dentro de Apps Script:

1. Ve a `Project Settings`.
2. Busca `Script Properties`.
3. Crea estas propiedades:

- `SPREADSHEET_ID` = el ID del Google Sheet nuevo
- `SHEET_NAME` = `Leads`

`SHEET_NAME` es opcional, pero conviene definirlo de forma explicita para que
la configuracion quede documentada en el proyecto publicado.

## 4) Autorizar el proyecto

Antes de publicarlo, hay que darle permisos al script:

1. En Apps Script, arriba, en el selector de funciones, elige `authorizeProject`.
2. Haz clic en `Run`.
3. Google te pedira permisos.
4. Acepta acceso a:

- Google Sheets
- Gmail / MailApp

Si quieres confirmar que quedo apuntando al archivo correcto:

1. Ejecuta la funcion `debugDestination`.
2. Revisa el resultado.
3. Debe mostrar el `spreadsheetId`, el nombre del archivo y la hoja donde se guardaran los leads.

## 5) Desplegar como Web App

1. Haz clic en `Deploy`.
2. Elige `New deployment`.
3. En tipo, selecciona `Web app`.
4. Configura:

- `Execute as`: `Me`
- `Who has access`: `Anyone`

5. Haz clic en `Deploy`.
6. Copia la URL final terminada en `/exec`.

Si luego cambias `Code.gs`, recuerda crear una nueva version y volver a desplegar.

## 6) Conectar el formulario del sitio

En este proyecto, el formulario ya esta preparado. Solo debes cambiar la URL del endpoint en [index.html](/c:/Users/seers/OneDrive/Escritorio/NUVI/index.html).

Busca este atributo:

```html
data-sheets-url="https://script.google.com/macros/s/.../exec"
```

Y reemplazalo por la URL nueva de tu deployment.

El correo que recibe las notificaciones se fija del lado del servidor en
`Code.gs`:

```javascript
const DEFAULT_NOTIFY_EMAIL = 'angelnunes@nuvingenieria.com';
```

El destinatario no se acepta desde el formulario para impedir que un visitante
pueda modificarlo en la version nueva del servidor.

## 7) Que datos se guardan

El formulario envia estos campos:

- `Nombre`
- `Telefono`
- `Email`
- `Servicio`
- `Mensaje`
- `Origen`
- `Pagina`
- `Fecha`

Si la hoja `Leads` no existe, el script la crea y agrega esos encabezados automaticamente.

## 8) Probar el flujo completo

1. Abre el sitio.
2. Envia una prueba desde el formulario.
3. Abre el Google Sheet nuevo.
4. Confirma que aparecio una fila nueva.
5. Revisa tambien `angelnunes@nuvingenieria.com` y confirma que llego la notificacion.

## 9) Errores comunes

### `403 Forbidden`

Casi siempre significa que el Web App no quedo publico.

Verifica:

- `Who has access` = `Anyone`
- que hayas desplegado una version nueva
- que el `data-sheets-url` apunte al deployment correcto

### `401 Unauthorized`

Normalmente significa que faltan permisos.

Prueba esto:

1. Ejecuta `authorizeProject` otra vez.
2. Acepta permisos.
3. Vuelve a desplegar el Web App.

### No aparece nada en el Sheet

Revisa:

1. que `SPREADSHEET_ID` sea correcto
2. que el formulario este apuntando al `/exec` correcto
3. que el deployment publicado sea el mas reciente

## Resumen rapido

1. Crear Google Sheet nuevo.
2. Copiar `Code.gs` a Apps Script.
3. Configurar `SPREADSHEET_ID`.
4. Ejecutar `authorizeProject`.
5. Desplegar como `Web app`.
6. Copiar la URL `/exec`.
7. Reemplazar `data-sheets-url` en `index.html`.
8. Enviar una prueba y validar la fila en el Sheet.
