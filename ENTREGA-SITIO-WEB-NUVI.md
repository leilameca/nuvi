# Documento de entrega del sitio web

## Información general

- Proyecto: Sitio web corporativo de NUVI Ingeniería.
- Dominio: https://nuvingenieria.com/
- Fecha de entrega: 3 de agosto de 2026.
- Repositorio: https://github.com/leilameca/nuvi
- Rama de producción: `main`.
- Estado: terminado, revisado y publicado.

## Alcance entregado

El sitio presenta los servicios, cobertura, experiencia, proyectos, preguntas
frecuentes y medios de contacto de NUVI Ingeniería. Incluye:

- Diseño adaptable para computadoras, tabletas y celulares.
- Navegación principal y menú móvil.
- Catálogo de 13 servicios con filtros por categoría.
- Portada fotografica visible en cada tarjeta de servicio.
- Galería individual de dos o tres recursos para cada servicio.
- Reproducción de videos dentro de las galerías de impermeabilización y pintura.
- Sección de proyectos realizados.
- Botones de contacto por WhatsApp.
- Formulario conectado al flujo de Google Sheets y notificación configurado.
- Metadatos SEO, datos estructurados, `robots.txt`, sitemap de imagenes y dominio personalizado.

## Material fotografico y audiovisual

Se incorporaron y clasificaron fotografías y videos propios para servicios de
electromecánica, infraestructura eléctrica, iluminación, impermeabilización,
pintura, shutters, cortinas y remodelaciones.

Cuando no existía material propio, se utilizaron cinco fotografías de Pexels
relacionadas directamente con HVAC, bombeo, sistemas contra incendios,
plomería y seguridad. Pexels permite su uso en sitios comerciales. El detalle
de autores, enlaces y licencia se conserva en `images/STOCK-SOURCES.md`.

Las imágenes externas funcionan como referencia de la categoría y no se
presentan como proyectos ejecutados por NUVI Ingeniería. Se recomienda
reemplazarlas en el futuro cuando el cliente entregue fotografías propias.

## Optimización aplicada

- Fotografías convertidas a WebP cuando el formato produjo un archivo menor.
- Videos comprimidos en H.264 con carga progresiva para web.
- Portadas WebP generadas para evitar espacios vacios mientras cargan los videos.
- Carga diferida de imágenes fuera de pantalla.
- Encuadre uniforme mediante `object-fit` para conservar la cuadricula visual.
- Nombres de archivo normalizados para publicación web.

## Verificación de entrega

La revision final cubrio los siguientes puntos:

- 13 de 13 tarjetas de servicio renderizadas.
- 13 de 13 portadas asociadas a un contenido visual coherente con el servicio.
- 13 de 13 galerías abiertas y comprobadas.
- Entre dos y tres recursos disponibles en cada galeria.
- Cero referencias multimedia faltantes.
- Cero imágenes rotas dentro de las galerías.
- Cero errores JavaScript detectados en navegador.
- Videos de impermeabilización y pintura validados.
- Vista de escritorio verificada a 1440 px.
- Vista móvil verificada a 390 px, sin desbordamiento horizontal.
- Sintaxis JavaScript, rutas locales, formato del sitemap y estado de Git revisados.

## Canales configurados

- WhatsApp comercial: +1 829 910 6423.
- Correo de notificación del formulario: angel.nunez@nuvird.com.
- Captura de solicitudes: Google Apps Script / Google Sheets.

## Recomendaciones posteriores a la entrega

1. Confirmar periodicamente que las solicitudes del formulario llegan a la hoja y al correo esperado.
2. Mantener vigentes el dominio y los accesos al repositorio de GitHub.
3. Sustituir gradualmente las fotografías de stock por proyectos propios de NUVI.
4. Optimizar cualquier material nuevo antes de subirlo y conservar copias originales fuera del repositorio.
5. Revisar textos, precios orientativos y datos de contacto cuando cambie la oferta comercial.

## Aceptación

Con esta entrega se deja disponible el código fuente, el material optimizado,
la documentación de licencias y la versión publicada del sitio.

Nombre del cliente: ____________________________________

Firma de conformidad: __________________________________

Fecha: ________________________________________________
