# SEO, SEM, GEO y AEO

> **Estado:** base técnica implementada en `web/` (2026-09-30). Lo demás es plan.  
> **Etiquetas:** FACT = comprobado en esta sesión · HYPOTHESIS = por validar con datos · RISK.

## 1. Qué son, en una línea

| Sigla | Qué es | Dónde se gana |
|-------|--------|---------------|
| **SEO** | Aparecer en los resultados de Google y Bing | Web técnicamente limpia + contenido + enlaces + ficha de Google |
| **SEM** | Anuncios de pago en buscadores (Google Ads) | Presupuesto + páginas de destino + medición |
| **GEO** | Que te citen los asistentes de IA (ChatGPT, Gemini, Perplexity) | Respuestas claras + datos estructurados + menciones en otros sitios |
| **AEO** | Ser la respuesta directa (fragmentos destacados, voz, IA) | Respuesta en las primeras líneas de cada sección |

## 2. Implementado en la web (FACT)

Lighthouse móvil en local con la web lista para indexar: **Rendimiento 100 · Accesibilidad 100 · Buenas prácticas 100 · SEO 100**, 109 KiB en total. Mientras dure el pre-lanzamiento el SEO marca 66 solo porque la página lleva `noindex` a propósito.

| Qué | Dónde | Notas |
|-----|-------|-------|
| Un solo `<h1>`, encabezados jerárquicos, `lang="es"` | `Hero.astro`, secciones | El H1 incluye «Solidum Digital · Webs, automatización e IA» y el titular de marca |
| Título ≤60 car. y descripción ≤155 | `site.ts` | Se pueden probar variantes |
| Canonical, Open Graph, Twitter Card, imagen 1200×630 | `Base.astro`, `public/og.png` | Regenerable con `scripts/brand-assets.mjs` |
| JSON-LD con `@id` enlazados: Organization, WebSite, WebPage, 6 Service, OfferCatalog, FAQPage; BreadcrumbList en `/presupuesto/` | `lib/seo.ts` | Sale de los mismos textos que se ven (no deriva). El teléfono no se publica mientras sea el de relleno |
| FAQ con respuestas de 40-70 palabras, respuesta primero | `home.ts` → `Faq.astro` | Acordeón sin JavaScript |
| Ficha de datos clave en `<dl>` | `Fact.astro` | Formato fácil de extraer por buscadores e IA |
| `robots.txt` generado: cerrado en pre-lanzamiento; abierto al lanzar, con los bots de IA nombrados | `pages/robots.txt.ts` | `site.prelaunch` lo controla |
| `sitemap.xml` con solo páginas indexables | `pages/sitemap.xml.ts` | Si añades páginas, añádelas a la lista |
| `llms.txt` y `llms-full.txt` generados | `pages/llms*.txt.ts` | Ver RISK más abajo |
| Fuentes autoalojadas (sin Google Fonts), sin JS de terceros salvo Turnstile, que se carga al acercarse al formulario | `global.css`, `scripts/turnstile.ts` | Mejor rendimiento y menos problemas de privacidad |
| Caché inmutable de `/_astro/*` y cabeceras de seguridad | `public/_headers` | |
| Atribución sin cookies: `ref` y `utm_*` viajan en los enlaces y llegan en el email | `scripts/attribution.ts`, `worker/index.ts` | Sirve para saber si un presupuesto viene de la postal, un colaborador o una campaña |

## 3. Antes de lanzar (checklist)

- [ ] Comprar el dominio y cambiar `site.url` en `web/src/content/site.ts` (hoy `example.com`: canonical, sitemap, JSON-LD y `llms.txt` apuntan ahí).
- [ ] Poner `prelaunch: false` en `site.ts`.
- [ ] Sustituir los `TODO` de `site.ts`: email, teléfono, WhatsApp, datos legales, clave de Turnstile.
- [ ] Volver a medir Lighthouse en producción y actualizar `proof` en `home.ts`.
- [ ] Alta en **Google Search Console** y **Bing Webmaster Tools**, y enviar `sitemap.xml`. Bing importa también para Copilot y, según las fuentes consultadas, para ChatGPT search.
- [ ] Validar los datos estructurados con la prueba de resultados enriquecidos de Google.
- [ ] Crear la **ficha de Google Business Profile** de Solidum (categoría «Diseñador de sitios web»), con el mismo nombre, web y email que en el sitio.
- [ ] Crear perfiles (LinkedIn, Instagram) con el mismo nombre y descripción, y añadirlos a `site.social` para que entren como `sameAs`.

## 4. SEO: siguiente fase

1. **Páginas por servicio**, cada una con su palabra clave principal y respuesta directa arriba: webs para negocios, automatización, asistentes de IA, SEO local. Enlazadas desde la home y entre sí.
2. **Páginas por sector** (`/webs-para-restaurantes/`, clínicas, reformas…) **solo cuando haya un caso o un dato real del sector**. Las páginas en masa con texto intercambiable son justo lo que Google y los asistentes de IA descartan.
3. **Blog/guías** con preguntas reales: «cuánto cuesta una web», «qué es GEO». Cada una con autor, fecha y fuentes.
4. **Enlaces y menciones:** directorios de agencias y freelancers, colaboradores (gestorías, fotógrafos), casos con enlace del cliente.
5. **SEO local:** la ficha de Google y las reseñas reales pesan más que la web para búsquedas con ciudad.

**Palabras clave de partida (HYPOTHESIS, sin datos de volumen):** «diseño web para negocios», «precio página web», «presupuesto web online», «landing page precio», «automatización para pymes». Validar con el Planificador de palabras clave de Google Ads (gratuito con una cuenta).

## 5. SEM

**Estado:** no hay anuncios ni etiquetas de anuncios en la web. Es deliberado: la web no usa cookies.

**Antes de gastar un euro:**
- Las etiquetas de conversión de Google Ads necesitan un **banner de consentimiento** y Consent Mode v2 para usuarios del EEE. Confirma los requisitos vigentes en la documentación de Google antes de lanzar (RISK: cambian).
- **Alternativa sin cookies, suficiente para empezar:** `utm_*` en los anuncios → llegan al email del presupuesto (`Origen:`). Se puede medir el coste por presupuesto a mano. Más adelante, añadir `gclid` a `attribution.ts` y al Worker para importar conversiones offline.
- Páginas de destino: una por grupo de anuncios (`/lp/<tema>/`, con `noindex`), con el mensaje del anuncio repetido en el titular y el configurador visible. Hoy el configurador `/presupuesto/` ya sirve de destino.

**Plan inicial (HYPOTHESIS):** campaña de búsqueda con concordancia de frase en 2-3 consultas, presupuesto bajo y fijo, palabras negativas desde el primer día («gratis», «plantilla», «curso», «trabajo»), ubicación y horario acotados. Medir **coste por presupuesto** y **coste por venta**; parar lo que no convierta en 2 semanas.

## 6. GEO y AEO

**En la web (hecho):** respuestas directas al inicio, ficha de datos, FAQ y JSON-LD desde la misma fuente, `robots.txt` que permite a los rastreadores de IA, `llms.txt`.

**Fuera de la web (lo que más pesa, según las fuentes consultadas):** los asistentes de IA citan sobre todo lo que otros dicen de ti y lo que aparece de forma coherente en varios sitios.
- Mismo nombre, descripción y datos en Google Business Profile, LinkedIn, directorios y web.
- Reseñas reales y menciones en medios o blogs del sector.
- Contenido con autor, fecha y fuentes.

**Medición (manual, mensual):** pregunta en ChatGPT, Gemini y Perplexity por consultas como «estudio de webs en [ciudad]» o «cuánto cuesta una web para un negocio» y anota si aparece Solidum, con qué texto y qué competidores salen.

| Fecha | Asistente | Pregunta | ¿Aparece? | Fuente citada | Competidores |
|-------|-----------|----------|-----------|---------------|--------------|

## 7. Riesgos y límites

- **RISK: `llms.txt`.** Es una convención emergente. Ningún gran buscador ha confirmado que la use. Cuesta cero mantenerla porque se genera sola; no le des más peso del que tiene.
- **RISK: FAQ en resultados enriquecidos.** Google limitó los resultados enriquecidos de FAQ a webs institucionales y de salud en 2023 (verifícalo en Search Central). Mantenemos el marcado `FAQPage` por su utilidad para otros lectores de máquina, no esperamos el desplegable en Google.
- **RISK: nadie garantiza posiciones ni citas.** La web lo dice así en la propia FAQ y no debe prometer lo contrario.
- **RISK: datos estructurados que no coinciden con el texto visible** se penalizan. Por eso salen de la misma fuente; si editas un precio o una pregunta, edítalo en `home.ts`/`pricing.ts`, nunca en el JSON-LD.
- **Pre-lanzamiento:** `robots.txt` bloquea todo y las páginas llevan `noindex`. No hace falta hacer nada más hasta lanzar.
