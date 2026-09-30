# Diseño y narrativa de la home

> **Estado:** implementado en `web/` (2026-09-30). Decisión: P-12.  
> **Objetivo:** una home que convierta visitas en presupuestos, con historia propia y sin aspecto de web generada por IA.

## 1. Qué investigamos y qué sacamos

| Fuente | Qué nos llevamos |
|--------|------------------|
| [21st.dev: cómo evitar que una web parezca de IA](https://21st.dev/blog/website-not-look-ai-generated) | Las 5 señales (degradado violeta, texto genérico, tarjetas iguales, stock, falta de concreción) y 6 arreglos por orden de prioridad: mostrar el producto, una frase específica, paleta propia, tipografía deliberada, romper la simetría, añadir autoría. Prueba: tapa el logo y lee el texto; si sirve para la competencia, falta personalizar |
| [925 Studios: guía de "AI slop"](https://www.925studios.co/blog/ai-slop-web-design-guide) | Inter como tipografía por defecto, radio y padding uniformes, animación genérica de aparición, texto con muletillas |
| [Awwwards: agencias](https://www.awwwards.com/websites/design-agencies/), [Bare Creative](https://www.barecreative.co.uk/), [TARQ](https://www.tarqstudio.com/) | Orden de secciones (intro, servicios, trabajos, prueba, contacto), tono directo de una frase por idea, "cuéntanos y te decimos si somos los adecuados" como llamada |
| [Behance: tendencias 2026](https://www.behance.net/gallery/239027109/Design-Trends-2026) | Tipografía grande y expresiva, asimetría, grano, "calidez humana frente a lo pulido por IA". Solo vi resúmenes de tendencias, no abrí proyectos individuales |
| Repo [krishna-404/astro-seo-geo-template](https://github.com/krishna-404/astro-seo-geo-template) | `robots.txt` generado con los bots de IA nombrados, FAQ y JSON-LD desde la misma fuente, acordeón sin JS con `<details name>`, reglas anti-IA en el texto, restricciones de diseño medibles. Su regla de "nada de crema y latón ni degradado violeta a azul" nos hizo descartar nuestra primera idea |
| Repos [jdevalk/seo-graph](https://github.com/jdevalk/seo-graph), [agonist/astro-speedrun-seo](https://github.com/agonist/astro-speedrun-seo) | Grafo JSON-LD con `@id` enlazados, `llms.txt` generado en el build |

**Limitación:** el navegador del entorno no confía en el proxy TLS, así que no pude hacer capturas de los sitios de referencia. Leí su contenido como texto. Conviene que tú mires 3 o 4 de ellos para afinar el gusto.

## 2. Lo que descartamos a propósito

| Descartado | Por qué |
|------------|---------|
| Crema + serif + terracota | Es hoy la paleta por defecto de las webs generadas por IA |
| Degradado violeta o teal, tarjetas idénticas, emojis como iconos | Las señales más reconocibles |
| Inter y la tipografía del sistema | "Se lee como un valor por defecto, no como una decisión" |
| Fotos de stock e ilustraciones de IA | Sustituidas por tipografía, el ticket de presupuesto y formas propias |
| Reseñas, logos de clientes y cifras inventadas | No los tenemos. Lo decimos con honestidad en la propia web («Estamos empezando») |

## 3. Dirección: industrial-editorial

**Tres palabras:** sólido, directo, exacto. Coherente con el nombre (*solidum*: lo firme, lo entero).

| Elemento | Decisión |
|----------|----------|
| Tipografía | **Archivo variable** (ejes de peso y **ancho**), autoalojada y subconjunto latino (90 KB). Titulares anchos y pesados; etiquetas en monoespaciada del sistema |
| Color | Una sola marca: naranja señal `#ff5b1f`. Base hormigón `#ecede8`, tinta `#121411`, piedra `#d9dbd3`. Sin negro puro |
| Regla de contraste | El naranja nunca va como texto sobre hormigón (2,6:1). Va de relleno con texto tinta (6,0:1) o como texto sobre tinta (6,0:1). Tinta sobre hormigón 15,7:1; texto secundario 6,5:1 |
| Forma | Esquinas casi rectas (2 px), líneas finas de 2 px, sombra desplazada en botones. Sin radio uniforme |
| Textura | Grano SVG muy sutil sobre el fondo |
| Asimetría | Titular a todo el ancho con el ticket desplazado a la derecha; pasos del proceso en escalera (eco del logotipo); una fila destacada en naranja dentro de la escena |
| Movimiento | Solo CSS, solo `transform`/`opacity`, solo con `prefers-reduced-motion: no-preference`. Aparición escalonada del titular y revelado al desplazar |
| Jugada propia | **El presupuesto como ticket con borde dentado** que se recalcula en la propia portada. Es el producto real, no una ilustración |
| Logotipo | Dos cuadrados desplazados (naranja y tinta). **Provisional**: sirve para lanzar, no es una identidad diseñada |

## 4. Narrativa

Estructura StoryBrand (cliente como protagonista, nosotros como guía) sobre un hilo propio: **encontrar, entender, escribir**. Es el titular, la estructura de servicios y el cierre.

| # | Sección | Qué debe sentir/creer quien lee | Recurso |
|---|---------|----------------------------------|---------|
| 1 | Portada | «Esto es para mí y me dice el precio» | Titular en tres golpes + ticket en vivo |
| 2 | La escena (banda oscura) | Reconocimiento y tensión: «me pasa a mí» | Escena de las 22:40, tres resultados, el tercero se lleva al cliente |
| 3 | Qué hacemos | Claridad: tres cosas, en este orden | Filas editoriales con numerales grandes |
| 4 | Quiénes somos | Confianza | Origen del nombre (*in solidum*), cuatro compromisos concretos, honestidad sobre ser nuevos |
| 5 | Cómo funciona | Sin fricción, sin reuniones | Escalera de 4 pasos con plazos |
| 6 | Precios (banda oscura) | Transparencia | Tabla real desde `pricing.ts` |
| 7 | La primera prueba | Verificable | Cifras Lighthouse medidas, enlace para comprobarlas |
| 8 | Datos clave y preguntas | Respuestas directas | Ficha `<dl>` y 10 preguntas |
| 9 | Empieza por el precio (naranja) | Compromiso de un paso | Un botón |
| 10 | Escríbenos | Alternativa tranquila | Formulario mínimo |

## 5. Reglas de texto

Se comprueban en cada `npm run build` con `web/scripts/check-copy.mjs`:
- Sin emojis.
- Sin clichés («holístico», «sinergia», «soluciones integrales», «llevar tu negocio al siguiente nivel»).
- Sin afirmaciones que no podamos probar («líderes en», «los mejores», «clientes satisfechos», «resultados garantizados»).
- Voz en plural, frases concretas, cifras solo si las hemos medido.
- Respuestas de la FAQ en 40-70 palabras, con la respuesta primero.

## 6. Pendiente

- [ ] **Presencia humana.** Es la mejora que más aporta a la credibilidad: nombre, foto y una nota de fundación. Hace falta tu decisión.
- [ ] **Casos reales** con permiso escrito, en cuanto haya el primero. Sustituirán a «Estamos empezando».
- [ ] **Volver a medir** Lighthouse en producción (las cifras actuales son en local) y actualizar `proof` en `web/src/content/home.ts`.
- [ ] **Revisar las referencias** con tus propios ojos y ajustar gusto (logotipo, color, tono).
- [ ] Logotipo diseñado, cuando haya ingresos.
