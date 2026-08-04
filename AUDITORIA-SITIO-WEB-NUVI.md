# Auditoría del sitio web de NUVI Ingeniería

## Resumen ejecutivo

- Fecha de auditoría: 4 de agosto de 2026.
- Sitio: https://nuvingenieria.com/
- Repositorio: https://github.com/leilameca/nuvi
- Estado general: aprobado para producción.
- Hallazgos críticos: ninguno.
- Errores de navegador detectados: ninguno.

La página cumple correctamente su función comercial, presenta una estructura
visual consistente y mantiene una experiencia adaptable. La navegación móvil
del catálogo fue mejorada mediante un carrusel táctil con filtros, contador,
vista parcial de la siguiente tarjeta y botones anterior/siguiente.

## Resultados Lighthouse

Auditoría móvil ejecutada con Lighthouse y Chrome en condiciones simuladas:

| Categoría | Puntuación | Resultado |
| --- | ---: | --- |
| Rendimiento | 83/100 | Mejorable, sin bloqueo crítico |
| Accesibilidad | 100/100 | Aprobado |
| Buenas prácticas | 100/100 | Aprobado |
| SEO | 100/100 | Aprobado |

Métricas principales:

| Métrica | Resultado |
| --- | ---: |
| First Contentful Paint | 1.8 s |
| Largest Contentful Paint | 4.7 s |
| Speed Index | 1.8 s |
| Total Blocking Time | 0 ms |
| Cumulative Layout Shift | 0.001 |
| Time to Interactive | 4.7 s |

Las puntuaciones de laboratorio pueden variar según la conexión, el equipo y
la disponibilidad de recursos externos como Google Fonts.

## Auditoría funcional

- Las 13 tarjetas de servicio se renderizan correctamente.
- Cada tarjeta presenta una portada relacionada con su servicio.
- Los filtros Todos, Electromecánico, Civil y Facility funcionan.
- El filtro Civil muestra correctamente cuatro servicios.
- El carrusel comienza en `1 de 13` y actualiza el contador al navegar.
- Los botones anterior y siguiente respetan los límites del carrusel.
- El carrusel vuelve a la primera tarjeta al cambiar de filtro.
- Es visible una parte de la siguiente tarjeta como indicación de deslizamiento.
- El gesto horizontal está habilitado mediante desplazamiento táctil y `scroll-snap`.
- Los botones Ver más y Solicitar información permanecen visibles.
- Los modales abren el servicio seleccionado y conservan sus galerías.
- El catálogo de escritorio mantiene su cuadrícula original.
- No existe desbordamiento horizontal de la página en 390 px ni en 1440 px.
- No se detectaron errores JavaScript durante las pruebas.

## Auditoría de accesibilidad

- Puntuación Lighthouse: 100/100.
- Jerarquía de encabezados corregida y validada.
- Contraste del pie de página mejorado.
- Texto auxiliar del carrusel con contraste suficiente.
- Botones de navegación con nombres accesibles.
- Contador del carrusel anunciado mediante `aria-live`.
- Controles deshabilitados correctamente al alcanzar los extremos.
- Enlaces que abren pestañas nuevas protegidos con `rel="noopener"`.
- No se detectaron identificadores HTML duplicados.

## Auditoría técnica y de integridad

- Sintaxis de `assets/app.js`: válida.
- Sitemap XML: válido.
- Referencias locales verificadas: 40.
- Referencias locales faltantes: 0.
- Identificadores HTML verificados: 48.
- Identificadores duplicados: 0.
- Enlaces `target="_blank"` inseguros: 0.
- Videos principales validados previamente en formato H.264.
- Imágenes optimizadas y portadas de video disponibles.
- Documentación de fotografías de stock disponible en `images/STOCK-SOURCES.md`.

## Auditoría SEO

- Puntuación Lighthouse: 100/100.
- Título y descripción principal configurados.
- Etiquetas Open Graph y Twitter configuradas.
- URL canónica y dominio personalizado configurados.
- Datos estructurados presentes.
- `robots.txt` y `sitemap.xml` disponibles.
- Sitemap actualizado al 4 de agosto de 2026.
- Textos alternativos disponibles en las imágenes del catálogo.

## Seguridad y buenas prácticas

- Puntuación Lighthouse: 100/100.
- El sitio se publica mediante HTTPS.
- No se detectaron errores de consola.
- Los enlaces externos utilizan las protecciones correspondientes.
- No se exponen credenciales privadas en la interfaz.
- El formulario conserva su integracion con Google Apps Script y fija el
  destinatario `angelnunez@nuvingenieria.com` del lado del servidor, evitando que
  pueda ser sustituido desde el navegador.

No se envió una solicitud real durante la auditoría para evitar generar un
registro comercial ficticio. Se recomienda realizar una prueba controlada con
datos autorizados del cliente después de la entrega.

## Oportunidades de mejora no críticas

1. Reducir adicionalmente el tiempo LCP optimizando la carga inicial del hero.
2. Evaluar una portada móvil más pequeña para el video principal.
3. Reducir o autoalojar variantes de Google Fonts para disminuir dependencias externas.
4. Minificar `assets/styles.css` en una futura fase de optimización.
5. Sustituir progresivamente las imágenes de stock por fotografías propias.

Estas recomendaciones no impiden la publicación ni afectan el funcionamiento
actual. La principal oportunidad futura es elevar el rendimiento móvil de
83/100 a la zona verde de Lighthouse, manteniendo el diseño actual.

## Conclusión

La versión auditada es estable, usable y apta para entrega al cliente. El
catálogo móvil ofrece ahora una navegación más rápida sin alterar la
experiencia de escritorio. Accesibilidad, buenas prácticas y SEO alcanzan la
puntuación máxima; no existen fallos críticos o referencias rotas.
