# Evaluación estratégica adversarial — fábrica digital / agencia de resultados

**Naturaleza:** primera evaluación independiente.  
**Postura:** adversarial. El objetivo no es confirmar la idea, sino localizar dónde puede fracasar.  
**Fecha:** 22 agosto 2026.  
**Alcance:** negocio y arquitectura conceptual. Sin código ni implementación.

Leyenda usada en todo el documento:

- **[FACT]** afirmación verificable o dato con fuente.
- **[HYPOTHESIS]** suposición que hay que validar; no tratarla como verdad.
- **[RECOMMENDATION]** juicio del consultor.
- **[OPEN QUESTION]** cuestión no resuelta.
- **[EXPERIMENT]** prueba concreta para reducir incertidumbre.

---

## Veredicto (leerlo antes que el resto)

La visión del flywheel (demanda → intake → producción → datos → mejores templates) es coherente como **modelo operativo a largo plazo**. Como **plan de empresa para empezar**, la propuesta tal como está escrita es una mala idea.

No porque “hacer webs con IA” no pueda generar dinero. Porque intenta ser, al mismo tiempo:

1. una agencia generalista de servicios;
2. una fábrica de software;
3. un estudio de CRO/SEO;
4. un integrador de CRM y automatizaciones;
5. un vendedor de templates, componentes y workflows;
6. un operador de marketplaces ajenos;
7. y, más adelante, una empresa de producto.

Eso no es una estrategia. Es un inventario de ambiciones. Las empresas que sobreviven en este mercado ganan por **estrechez**, no por cobertura.

**[FACT]** Promethean Research estima más de 179.000 agencias digitales en el mundo y más de 50.000 en EE.UU. y Canadá; el 88% tiene menos de 50 empleados. El 84% ya se declara “especialista”. La especialización dejó de ser diferenciador: es la línea base. Fuente: [Promethean Research, Digital Agency Industry Report 2025](https://prometheanresearch.com/digital-agency-industry-report/).

**[FACT]** En el mismo cuerpo de investigación, las agencias que **redujeron** servicios crecieron más y reportaron márgenes netos del 30%; las que **ampliaron** servicios, del 10%. Media del sector en 2025: ~13% de margen neto. Fuente: [Promethean, 2026 State of Digital Services](https://prometheanresearch.com/2026-state-of-digital-services-digital-agency-industry-research/).

**[RECOMMENDATION]** Tratar la “fábrica digital completa” como un **activo interno que se gana con repetición**, no como la oferta comercial del día 1. El negocio inicial debe ser un único sistema vendible a un único tipo de cliente, con un único resultado medible.

**[RECOMMENDATION]** Si hay que sacrificar algo, sacrificar amplitud, no profundidad. Vender “webs + CRO + SEO + IA + CRM + agentes + templates + marketplaces” es exactamente el posicionamiento que el mercado ya no paga bien.

---

## 1. Modelo de negocio

### 1.1 ¿Es viable?

**Viable como agencia de servicios en un nicho, sí. Viable como la arquitectura descrita, no todavía.**

**[FACT]** El diseño y desarrollo web siguen siendo las capacidades más comunes de las agencias, pero están erosionándose: web development del 75% al 69% de agencias (2023–2025); web design del 73% al 67%. Fuente: Promethean 2025.

**[FACT]** El cliente puede obtener “una web” por cientos de euros al año con constructores (Wix, Squarespace, Hostinger, Framer, Durable, etc.). Wix facturó ~1,99 mil millones USD en 2025 y creció de forma relevante en cuota de sitios. Fuentes: [Colorlib, Website Builder Market Share 2026](https://colorlib.com/wp/website-builder-market-share/); comparativas de coste agencia vs builder en [SiteGrade 2026](https://sitegrade.io/en/blog/ai-website-builders-vs-agencies-2026-comparison/).

**[FACT]** En España, las propias agencias publicitan webs PYME en rangos típicos de cientos a pocos miles de euros (p. ej. corporativa básica ~700–3.000 €; profesional ~2.000–8.000 €). Son **precios de marketing de competidores**, no auditorías independientes. Fuentes: [Aznar Ortega](https://aznarortega.com/cuanto-cuesta-una-pagina-web-profesional/), [Summum](https://summummarketing.es/diseno-web-profesional-pymes/), [Gira180](https://gira180.com/cuanto-cuesta-una-pagina-web-pyme-2026/).

**[HYPOTHESIS]** En ese entorno, una web “personalizada a partir de templates + IA” se percibirá como **más cara que Wix y menos especial que una agencia vertical**, salvo que el comprador compre un resultado de negocio, no un artefacto.

**[RECOMMENDATION]** La viabilidad no está en “hacer webs más rápido”. Está en **poseer un sistema de captación y conversión para un tipo de negocio cuyo lead vale mucho**, y usar la fábrica solo para bajar el coste de entregar ese sistema.

### 1.2 Dónde está realmente el valor

El valor no está uniformemente distribuido. Orden aproximado, de más a menos defendible:

| Capa | Qué es | Valor económico | Defensibilidad |
|---|---|---|---|
| Diagnóstico + oferta comercial del cliente | saber qué vender, a quién, con qué promesa | alto | media-alta si es de nicho |
| Sistema de captación (tráfico + conversión + seguimiento) | agenda llena / pipeline | alto | media; se copia, pero el *playbook* de nicho no |
| CRO + medición + iteración | mejorar un sistema que ya existe | alto en recurrencia | media |
| Automatización de seguimiento de leads | no perder demanda ya pagada | alto, poco glamour | baja-media (n8n/GHL lo hacen) |
| Retainer de mantenimiento/optimización | cashflow | medio-alto | baja (commodity) si no hay resultados |
| Web / landing | soporte del sistema | medio, cayendo | baja |
| Templates / componentes sueltos | producto digital | bajo-medio | muy baja |
| “IA” como servicio genérico | etiqueta | ilusorio | nula |

**[FACT]** Forbes Agency Council (2025): la amenaza principal no es la IA en abstracto, sino la **commoditización** — clientes que esperan trabajo de agencia a precio de freelance porque confunden ejecución con estrategia. Fuente: [Forbes](https://www.forbes.com/councils/forbesagencycouncil/2025/03/11/the-biggest-threat-to-agencies-isnt-ai-its-commoditization/).

**[FACT]** Promethean documenta que la IA comprime la capa de ejecución más rápido de lo que las agencias construyen la capa estratégica; el value-based pricing puro cayó del 31% (2024) al 18% (2025) y, en su encuesta, creció más lento que mix T&M + fixed + retainer. Fuente: [Value-Based Pricing Was Supposed to Save Us](https://prometheanresearch.kit.com/posts/value-based-pricing-was-supposed-to-save-us).

**[RECOMMENDATION]** Cobrar por **sistema instalado + operación mensual**, no por “página web” ni por “horas de IA”. La web es el envase. El producto es captación que no se muere en el formulario.

### 1.3 Qué es commodity

Commodity claro:

- web corporativa de 5–8 páginas;
- landing genérica;
- logo-to-site con un formulario;
- “SEO on-page básico”;
- “chatbot de IA”;
- templates de WordPress/Framer/Webflow;
- workflows n8n genéricos (“lead a Slack”);
- presencia en Fiverr/Upwork como “full stack web agency”.

**[FACT]** Envato (ThemeForest/CodeCanyon) pasa el 1 jul 2026 a un split plano 50/50 y mata el modelo exclusivo que llegaba a dejar ~87,5% al autor. ThemeForest lleva años de pérdida de relevancia frente a suscripciones (Envato Elements) e IA. Fuentes: [Envato Author Hub](https://author.envato.com/hub/changes-to-envato-market-revenue-share-and-exclusivity-what-you-need-to-know/), [The Repository](https://www.therepository.email/envato-ends-exclusive-author-model-moves-all-marketplace-sellers-to-a-flat-50-revenue-share).

**[RECOMMENDATION]** No construir una línea de ingresos temprana alrededor de marketplaces de templates. Es un mercado de oferta inflada, márgenes a la baja y dependencia de plataforma.

### 1.4 Qué es difícil de copiar

Casi nada de la lista original es difícil de copiar **en aislamiento**. Lo difícil de copiar es el **conjunto**:

1. conocimiento de un vertical (objeciones, ticket, ciclo, palabras, compliance);
2. un playbook de entrega que un junior/IA puede ejecutar;
3. prueba social específica (“clínica X pasó de A a B”);
4. datos de qué convierte en ese vertical;
5. relaciones (partners, clínicas, clínicas de referencia, portales);
6. un intake que produce especificaciones buenas, no basura.

**[HYPOTHESIS]** Sin 20+ proyectos **del mismo tipo**, el flywheel no existe. Un flywheel generalista (restaurante, SaaS, inmobiliaria, clínica) produce ruido, no aprendizaje.

**[RECOMMENDATION]** La moat no será el Agency OS. Será el **dataset de un nicho** (qué copy, qué oferta, qué follow-up, qué páginas de tratamiento convierten) más la reputación en ese nicho.

### 1.5 Qué modelo de ingresos priorizar al inicio

Orden de prioridad **inicial**:

1. **Servicio productizado de un solo sistema** (setup fee).
2. **Retainer de operación** (ads no necesariamente; sí medición, iteración, seguimiento de leads, mantenimiento).
3. Solo después: servicios “a medida” para clientes que ya compraron el sistema y piden más.

**[RECOMMENDATION]** El mix T&M + precio cerrado + retainer es el dominante en el sector (Promethean: muy pocos usan un único modelo; performance-based puro ~5% de mixes). No inventar un modelo exótico el mes 1.

### 1.6 Qué NO vender inicialmente

**[RECOMMENDATION]** No vender todavía:

- “agencia full-service digital”;
- SEO como retainer sin baseline ni control de variables;
- CRM propio / software propio;
- templates y componentes en marketplaces;
- paquetes de automatizaciones genéricas;
- agentes de IA como producto autónomo;
- design system como entregable (el cliente no lo compra);
- “fábrica a la que subes un logo y sale una empresa digital”.

Eso último es un **producto de software** (categoría Wix/Durable/GHL/Duda). Competir ahí sin capital, distribución ni marca es mala idea.

**[OPEN QUESTION]** ¿El fundador quiere ser dueño de una agencia rentable o de una startup de software? Son empresas distintas, con cadencias distintas. Mezclarlas en el mismo P&L mata las dos.

---

## 2. Posicionamiento

### 2.1 Cómo no ser “otra agencia web”

No se evita siendo “agencia web + IA + resultados”. Esa frase ya la usan miles de landing pages.

Se evita eligiendo **una de estas tres frases** y descartando las otras:

1. “Instalamos el sistema de captación de [nicho] en [geografía].”
2. “Operamos la captación digital de [nicho] a cambio de un retainer.”
3. “Vendemos un software que genera webs para [nicho].”

**[RECOMMENDATION]** Empezar por (1), con camino natural a (2). No empezar por (3).

### 2.2 Propuesta de valor con más sentido

**[HYPOTHESIS]** El comprador local (clínica, inmobiliaria, profesional) no quiere una web. Quiere **menos huecos en agenda / más clientes cualificados / menos leads muertos**. Paga una web porque es el artefacto que entiende.

**[RECOMMENDATION]** Promesa nuclear:

> En X semanas tienes un sistema de captación para [nicho]: oferta clara, páginas que convierten, seguimiento en <5 minutos, medición de leads reales. Luego lo operamos mes a mes.

Todo lo demás (IA, templates, agentes, design system) es **backstage**. Si aparece en la homepage, estás vendiendo tu stack, no el resultado del cliente.

### 2.3 ¿Webs, resultados, sistemas de captación, o combo?

**[FACT]** Benchmarks de lead gen (calidad desigual entre fuentes) coinciden en una cosa: **la mayoría de leads no se convierten y el follow-up es lento**. Un recuento de 2026 cita ~80% de leads que nunca convierten y tiempo medio de respuesta ~42 h, con solo ~7% respondiendo en 5 minutos. Tratar como dato de industria a verificar, no como verdad local. Fuente: [GrowthCentr compilando HubSpot/otros](https://www.growthcentr.com/lead-generation-statistics/).

**[RECOMMENDATION]** Vender el **sistema**: activo (web/landings) + proceso (respuesta, CRM ligero, WhatsApp/llamada) + medición. La web sola es commodity. Los “resultados” solos, sin controlar tráfico ni recepción, son una trampa legal y reputacional.

**[RECOMMENDATION]** No prometer “te lleno la agenda” si no controlas: presupuesto de ads, calidad de oferta, velocidad de respuesta del cliente, capacidad de agenda y cierre comercial. Quien promete resultados sin palancas, acaba devolviendo dinero o quemando reseñas.

### 2.4 Posicionamiento para tickets mayores

Tickets mayores aparecen cuando:

- el lead del cliente vale mucho (implantes, cirugía, inmobiliario de alto standing, B2B con ACV alto);
- hay riesgo reputacional (salud, legal);
- hay varias ubicaciones (grupos);
- se vende operación continua, no un proyecto.

**[RECOMMENDATION]** Subir ticket **estrechando nicho y alargando relación**, no añadiendo líneas de servicio. Un sistema de captación dental para grupos de 3 clínicas se cobra distinto que “una web para tu negocio”.

**[OPEN QUESTION]** ¿Hay acceso real a ese comprador (dueño de clínica/grupo) o solo al mercado de autónomos que pagan 800 €?

---

## 3. ICP / nicho

### 3.1 Criterio de selección (no “el que más me gusta”)

Un buen primer ICP cumple **todas** estas:

1. ticket medio alto o LTV alto;
2. demanda existente (buscan en Google / Maps);
3. dueño localizable;
4. problema visible en 10 minutos (web mala, leads lentos, no miden);
5. oferta productizable (mismas páginas, mismos tratamientos, mismo CRM);
6. compliance asumible para un estudio pequeño;
7. no saturado de especialistas verticales **o** con un ángulo que esos especialistas no cubren.

**[RECOMMENDATION]** Elegir **un** ICP para 90 días. Investigar dos de backup. No “empezar en varios y ver”.

### 3.2 Datos que SÍ existen (con límites)

**[FACT]** El CPL varía órdenes de magnitud por industria y por fuente. Ejemplos publicados, **no extrapolables a España sin investigación local**:

- Recopilación 2026: mediana B2B ~213 USD/lead; rango interindustrial muy amplio (citan 31–748 USD). Fuente: [GrowthCentr](https://www.growthcentr.com/lead-generation-statistics/).
- Google Ads “all industries” se cita ~70 USD CPL en varios blogs que remiten a índices tipo WordStream; dental/healthcare en un índice 2025: dentists ~84 USD CPL con CVR ~9%. Fuente: [Flyweel benchmark index](https://www.flyweel.co/blog/lead-gen-cpl-cac-benchmark-index-2025).
- Real estate: Google ~100 USD, Meta ~52–57 USD en un recuento 2026. Fuente: [Landerlab](https://landerlab.io/blog/cost-per-lead-by-industry).
- Restaurantes/local: a menudo CPL bajo (citan 15–45 USD), lo que **no** implica buen negocio para una agencia: el valor del lead también es bajo. Misma fuente.

**[FACT]** En España, el marketing dental vertical **ya existe como categoría**: agencias solo-dental (SEO local, landings de implantes, ads, CRM Klinikare/Gesden/Visual, Doctoralia, exclusividad por zona). Ejemplos públicos: [Agencia SEO Dental](https://agenciaseodental.com/marketing-dental/), [Local Max](https://localmax.es/sectores/clinicas-dentales), [Updent](https://updent.es/diseno-web-clinicas-dentales/), [PrositiosWeb](https://www.prositiosweb.com/marketing-dental/diseno-web-clinicas-dentales/). En EE.UU. hay directorios enteros de dental marketing agencies. Fuente: [Web Tonic](https://www.webtonic.io/blog/best-dental-marketing-agencies).

**[FACT]** Datos de salud = categoría especial RGPD. Webs de clínicas necesitan base legal, consentimientos separados (asistencia vs marketing), encargados de tratamiento, cookies, etc. Sanciones teóricas hasta 20 M€ / 4% facturación; hay guía sectorial específica. Fuentes: [Kandent](https://tools.kandent.es/guias/como-cumplir-rgpd-clinica-dental), [DAPRO](https://daprocumplimientonormativo.com/proteccion-de-datos-para-clinicas-dentales-obligaciones-del-rgpd/).

**[FACT]** European Accessibility Act en vigor desde 28 jun 2025 (WCAG 2.1 AA / EN 301 549), con umbrales de exención para microempresas. Verificar aplicabilidad caso a caso; no asumir que “todas las clínicas están exentas” ni lo contrario.

No hay en este análisis cifras propias de: valor de un paciente de implantes en Madrid vs provincia; CAC real de una inmobiliaria en España; disposición a pagar de un restaurante; win-rate de outbound a clínicas. **Hay que investigarlas antes de fijar precios.**

### 3.3 Matriz cualitativa (sin cifras inventadas)

Escala: **Alto / Medio / Bajo**. Es juicio experto, no dato. Donde falta dato, se marca investigación.

| ICP | Dolor | Capacidad de pago | Facilidad de captación (para nosotros) | Recurrencia | Valor de un lead (cliente) | Competencia agencias verticales | Facilidad de productizar | Complejidad de entrega | Potencial de automatización | Veredicto |
|---|---|---|---|---|---|---|---|---|---|---|
| Clínicas médicas generales | Alto (agenda, reputación) | Media-Alta | Media | Alta | Alto (pero ciclo y RGPD) | Alta | Media | Alta (salud, RGPD) | Medio | Cuidado |
| Estética / clínicas capilares / medspas | Alto (ticket, vanidad, ads caros) | Alta | Media | Alta | Alto | Alta y creciente | Alta | Media-Alta (claims sanitarios) | Alto | Candidato fuerte |
| Dental | Alto (implantes, ortodoncia) | Alta | Media | Alta | Alto | **Muy alta** | Alta | Media-Alta (RGPD, CRMs locales) | Alto | Candidato, pero océano rojo |
| Inmobiliarias | Alto (leads basura, velocidad) | Media-Alta | Media | Media (mucho churn de agentes) | Muy variable | Alta | Media | Alta (portales, muchos agentes) | Medio | Débil como primer ICP |
| Restaurantes | Medio (reservas, Google) | **Baja** | Alta (hay muchos) | Baja | **Bajo** | Media (mucho DIY) | Alta | Baja-Media | Medio | **Mala idea como ICP inicial** |
| Profesionales (abogados, gestorías, arquís) | Medio | Media | Media | Media | Medio-Alto (legal alto) | Media | Media | Media | Medio | Backup |
| B2B servicios | Medio-Alto | Media-Alta | Baja (ciclo largo) | Media | Alto | Media | Baja | Alta (cada uno es un proyecto) | Medio | No productizable al inicio |
| SaaS | Medio (conversion, PLG) | Alta | **Muy baja** para un estudio nuevo | Media | Alto | Alta (in-house + agencias senior) | Baja | Alta | Medio | **Mala idea como primer cliente** |
| Reformas / home services | Alto (llamadas, Maps) | Media | Alta | Alta | Medio-Alto | Media (GHL-style) | Alta | Media | Alto | Candidato infravalorado |
| Formación / academias / oposiciones | Alto (embudo) | Media | Media | Alta | Medio | Media | Alta | Media | Alto | Backup interesante |
| Clínicas veterinarias | Medio-Alto | Media | Media | Alta | Medio | Media | Alta | Media (también salud animal) | Alto | Backup |

### 3.4 Análisis por nicho

#### Clínicas (médicas generales)

Dolor real: visibilidad local, reputación, no-shows, RGPD.  
Problema para nosotros: heterogeneidad (dermatología ≠ fisioterapia ≠ ginecología). Productizar “clínicas” es fingir un nicho.

**[RECOMMENDATION]** No atacar “salud” entero. Si salud, **una especialidad**.

#### Estética

**[HYPOTHESIS]** Mejor primer ICP que dental genérico: tickets altos, pago particular, dependencia fuerte de ads + landings de tratamiento, menos “seguro”, más disposición a invertir en imagen.  
**[OPEN QUESTION]** Restricciones de publicidad sanitaria en España (claims, antes/después, Google Advertiser verification). Hay que mapearlas antes de vender.

**[RECOMMENDATION]** Si se elige este ICP, la oferta es “sistema de captación para tratamientos de alto ticket”, no “web de clínica bonita”.

#### Dental

Economía del cliente: atractiva. Mercado de proveedores: **ya maduro**.  
Entrar como generalista con IA contra agencias que llevan años solo-dental y prometen exclusividad por zona es una mala idea, salvo ángulo distinto (p. ej. grupos, una ciudad no saturada, o un sistema de follow-up/no-show superior, no “otra web WordPress”).

**[EXPERIMENT]** 20 llamadas de descubrimiento a clínicas en 2 provincias. Preguntar: ¿qué agencia tienes? ¿qué te miden? ¿qué odias? Si 15/20 ya tienen “su agencia dental”, el nicho está ocupado para un newcomer.

#### Inmobiliarias

Lead caro y ruidoso. El cuello de botella suele ser **comercial interno y portales (Idealista/Fotocasa)**, no la web. Una web nueva rara vez mueve el P&L. Productizar es difícil porque cada agencia tiene MLS, zonas y vanidad de marca.

**[RECOMMENDATION]** No empezar aquí.

#### Restaurantes

**Mala idea como ICP inicial.** Capacidad de pago baja, dueño operacionalmente saturado, LTV del “sistema” bajo, alta mortalidad de negocios, atribución imposible (“¿la web trajo la mesa?”). Se puede productizar, sí. No se puede cobrar lo que el sistema cuesta si se hace bien.

#### Profesionales

Abogados: lead muy valioso, ventas lentas, compliance, ego. Gestorías: más precio-sensibles. Puede funcionar un paquete de “web de autoridad + captación de consultas”, pero el ciclo de venta B2B profesional es lento para validar en 30 días.

#### B2B

Ticket alto, productización baja. Cada proyecto recrea la fábrica. Útil como **trabajo oportunista de cashflow**, no como eje.

#### SaaS

El comprador SaaS compara contra Webflow agencies, Unicorn Platform, in-house. Exige diseño, experimentación, stack moderno. Un estudio sin casos SaaS no cobra SaaS. **No es mercado de aprendizaje; es mercado de credenciales.**

#### Otros nichos relevantes (mejores de lo que la lista original sugiere)

**[RECOMMENDATION]** Añadir a la shortlist:

1. **Reformas, cubiertas, HVAC, energía (placas), alarmas** — lead de Maps, velocidad de llamada, productizable, menos “glamour”, más margen. Competencia estilo GoHighLevel, no tanto “agencia creativa”.
2. **Clínicas de fisioterapia / odontopediatría / fertilidad** si se baja de “salud genérico” a una especialidad.
3. **Formación privada / FP / oposiciones** — embudos claros, recurrencia de captación.
4. **Residencias / dependencia** — ticket alto, poco sexy, compliance pesado; solo si hay estómago legal.

### 3.5 Recomendación de arranque

**[RECOMMENDATION]** Shortlist de 14 días, no de 14 nichos:

1. Estética / tratamientos de alto ticket (si se puede hablar con dueños esta semana).
2. Un vertical de **home services de ticket alto** (reformas o energía).
3. Dental **solo si** el experimento de 20 conversaciones muestra hueco (grupos, ciudades medianas, o un módulo que las agencias dental no hacen bien: respuesta <2 min + no-show).

**[RECOMMENDATION]** Matar restaurantes y SaaS como ICP de los primeros 90 días.

**[EXPERIMENT]** Criterio de corte: 10 conversaciones de problema por candidato. Ganador = el que (a) describe el dolor sin que se lo expliques, (b) menciona un número de negocio, (c) pregunta el precio.

---

## 4. Oferta

### 4.1 Comparación de artefactos

| Oferta | Qué compra el cliente | Ventaja | Fallo típico | ¿Vender primero? |
|---|---|---|---|---|
| Landing | un URL que convierte un anuncio | rápida, productizable | sin tráfico no vale nada; se percibe barata | Solo si el cliente **ya tiene** ads o está dispuesto a invertir |
| Web comercial | “presencia” | fácil de entender | commodity, scope creep, opiniones de cuñado | No como producto estrella |
| Sistema de captación | landings/web + tracking + respuesta + CRM ligero | encaja con valor real | hay que acotar palancas; si no, overpromise | **Sí** |
| Automatización suelta | workflows | margen si se reutiliza | el cliente no sabe operarla; se rompe | Como módulo, no como oferta |
| Mantenimiento | paz mental | recurrencia | se convierte en hosting disfrazado | Sí, **atado** al sistema |
| Paquete combo “todo” | alivio cognitivo | ticket alto en papel | impagable de entregar; mata el margen | No |

### 4.2 Oferta inicial recomendada

Nombre interno (no de marca): **Sistema de Captación v1 para [ICP].**

Incluye, y **solo** incluye:

1. Diagnóstico de 90 minutos (oferta, zona, competencia Maps, web actual, velocidad de respuesta).
2. Una estructura fija de sitio o mini-sitio de nicho (home + 3–7 páginas de oferta + FAQ + contacto/legal).
3. 1–3 landings de oferta alta.
4. Captación: formulario + click-to-call + WhatsApp Business (o equivalente), con consentimiento RGPD correcto.
5. Follow-up: aviso inmediato (email/SMS/WhatsApp interno) + secuencia de 7 días si no hay respuesta humana.
6. Medición: eventos de lead, llamada, WhatsApp; panel feo pero verdadero.
7. 30 días de operación: 2 iteraciones de copy/CRO, no “nuevas secciones porque sí”.
8. Retainer opcional mes 2: iteración + mantenimiento + informe.

**[RECOMMENDATION]** Precio en dos líneas (setup + mensual), no en un PDF de 12 packs.

**[RECOMMENDATION]** La web “de 12 páginas con blog y design system” queda fuera del v1. Si el cliente la pide, o es upsell después o no es el cliente.

### 4.3 Qué vender primero y por qué

**Primero: sistema de captación productizado.**  
Porque es lo único que (a) justifica un ticket por encima del DIY, (b) genera datos para el flywheel, (c) crea retainer natural, (d) no requiere Agency OS.

**Segundo: retainer.**  
Sin retainer, cada proyecto es un reset y la fábrica no aprende.

**Tercero: landings extra / campañas** para clientes que ya convierten.

**No primero:** automatización como producto, templates públicos, CRM, agentes.

**[EXPERIMENT]** Oferta A: “Web profesional en 10 días”. Oferta B: “Sistema de captación en 10 días + 30 días de operación”. Misma audiencia, 15 outreach cada una. Medir: respuestas, llamadas, cierre, objeción dominante. No discutir en abstracto cuál “suena mejor”.

---

## 5. Pricing

### 5.1 No hay un precio “razonable”. Hay una ecuación

Precio defendible ≈ f(valor esperado para el cliente, alternativa del cliente, coste de entregar, riesgo de scope, CAC nuestro, capacidad).

Variables que **deben** determinar el número:

1. **Valor generado (o protegido).** ¿Cuánto vale un lead cualificado / una cita / un tratamiento para ese ICP en esa geografía? Sin este número, cualquier precio es teatro.
2. **Alternativa.** Wix/IA (~cientos €/año), freelance (cientos–2.000 €), agencia vertical (setup + 500–2.500 €/mes en verticales tipo dental, según páginas comerciales — **no auditado**).
3. **Coste de entrega.** Horas reales (humanas + revisión) × coste interno + APIs + herramientas + fallos.
4. **Complejidad.** Integraciones, idiomas, multi-sede, legal, contenidos que el cliente no entrega.
5. **Riesgo de scope.** Formularios de onboarding mienten. El 40–70% del tiempo se va en perseguir assets y decisiones. **[HYPOTHESIS]** a validar con time-tracking.
6. **CAC.** Si adquirir un cliente cuesta 400 €, un proyecto de 800 € es un hobby.
7. **Recurrencia.** Un setup de 3.000 € + 0 €/mes vale menos que 1.500 € + 400 €/mes a 12 meses, salvo churn brutal.
8. **Capacidad.** El precio también raciona demanda. Si se llena la agenda de proyectos de 800 €, el precio es demasiado bajo **aunque el mercado “acepte” eso**.

**[FACT]** Promethean: mix dominante T&M + fixed bid + retainer; value-based puro es residual; performance-based puro es raro y coloca a la agencia como vendor con riesgo asimétrico.

**[RECOMMENDATION]** Setup a precio cerrado con **límites de scope explícitos** (páginas, revisiones, fuentes de contenido). Fuera de eso, T&M o change order. Retainer mensual fijo. No performance-based hasta tener baseline y palancas.

### 5.2 Marco operativo (cómo calcular, no qué cobrar)

Antes de publicar precios:

1. Estimar **horas de entrega reales** del v1 en 2 proyectos piloto (medir, no adivinar).
2. Fijar coste interno/hora (aunque sea el salario implícito del fundador).
3. Margen objetivo de proyecto **después** de herramientas. **[HYPOTHESIS]** 40–60% de margen de contribución en setup para un estudio de 1–3 personas; si no, el retainer no llega a tiempo a salvar el P&L. Validar; no es un estándar universal.
4. Calcular **payback del CAC** < 60 días en fase de validación.
5. Anclar el precio a **un número del cliente**: “si el sistema produce N citas/mes a valor V, el setup se paga en M semanas”. Si no se puede decir esa frase con datos del cliente, no se puede hacer value pricing.

### 5.3 Rangos de mercado (contexto, no recomendación)

**[FACT — mercado España, fuentes comerciales]** Webs PYME publicitadas ~300–8.000 € según alcance. Mantenimiento ~20–300 €/mes según quién vende.  
**[FACT — dental ES, fuente comercial]** Ejemplo: web “desde 1.200 €” y ads “mínimo 500 €/mes de media” aparte del fee de agencia, en [Agencia SEO Dental](https://agenciaseodental.com/marketing-dental/).  
**[FACT — EE.UU., fuente comercial]** Agency static site citado ~3.000–6.000 USD + 50–150 USD/mes vs builders ~240–324 USD/año. [SiteGrade](https://sitegrade.io/en/blog/ai-website-builders-vs-agencies-2026-comparison/).

### 5.4 Hipótesis de precio inicial (etiquetadas)

Estas cifras **no** están validadas. Solo sirven como punto de partida para el experimento de oferta, **después** de conocer valor de lead del ICP:

- **[HYPOTHESIS]** Setup sistema v1 (nicho local alto ticket): 2.500–6.000 € si el valor de una sola conversión paga una fracción material del setup.
- **[HYPOTHESIS]** Retainer operación v1: 400–1.200 €/mes según si incluye o no gestión de ads (ads mejor como partida del cliente + fee, no como “media incluida”).
- **[HYPOTHESIS]** Landing suelta de upsell: 600–1.500 €.
- **[HYPOTHESIS]** Si el ICP no puede pagar >1.500 € de setup, **el ICP está mal elegido**, no el precio. Bajar precio para “entrar” en restaurantes es cavar.

**[RECOMMENDATION]** Pilotos: 2–3 proyectos a precio de aprendizaje (incluso por debajo) **a cambio de datos, testimonio y derecho a reusar patrones**. No confundir precio de aprendizaje con precio de catálogo.

**[EXPERIMENT]** Van Westendorp o, más barato: tres anclas en llamadas (“hay equipos en 1.5k, 4k y 8k; ¿dónde os rompe?”). 10 conversaciones bastan para ver si se está en bricolaje o en inversión.

---

## 6. Adquisición

### 6.1 Principio

**[FACT]** Promethean: la mayoría de agencias depende de referidos (alto trust, bajo control) y gasta ~7% de ingresos en marketing/ventas. Eso no es un sistema de crecimiento.

**[RECOMMENDATION]** En los primeros 30 días, optimizar **tiempo hasta el primer cliente que paga y enseña**, no marca.

### 6.2 Canales

| Canal | ¿Intentar días 1–30? | Por qué |
|---|---|---|
| Conversaciones directas / red / WhatsApp a dueños del ICP | **Sí, primero** | Gratis, cualifica el ICP, no requiere web propia |
| Outbound manual (20/día) a un listado Maps del ICP | **Sí** | Aprende copy; no escalar con herramientas todavía |
| Upwork | Condicional | Hay **demanda con intención**, pero te empuja a commodity y a inglés/global. CAC bajos que publican vendors de Upwork (p. ej. GigRadar: 50–400 USD CAC) son **datos de parte interesada**, no un paper. Útil como cashflow, peligroso como marca |
| LinkedIn orgánico | Sí, **bajo volumen** | 3 posts/semana del nicho + DMs a dueños. No “personal branding” genérico de IA |
| Web propia | Sitio mínimo sí; SEO no | Sin web no hay seriedad; con SEO no hay tiempo |
| SEO | **No** | El SEO de una agencia nueva tarda más que la validación |
| Cold email industrial | **No** | Dominios, calentamiento, RGPD, CAC alto. Varios operadores citan CAC 500–2.500 USD/cliente cerrado vs Upwork; calidad de dato dudosa, dirección del argumento (más caro y más lento) es plausible |
| Fiverr | **No** | Posiciona en el sótano de precio. Comisión vendedor ~20% es el modelo público habitual de Fiverr |
| Contra / Malt | Después | Malt es más EU/profesional; tiene sentido cuando hay casos. No día 1 |
| Partners (clínicas de marketing dental, gestorías, clínicas de implantes, instaladores) | Semana 3–4 explorar | Mejor canal de medio plazo si el ICP es local |
| Marketplaces templates / n8n | **No** | Distribución de producto, no de servicio; fees 10–50%; saturación |
| Contenido largo / YouTube | No como canal de adquisición mes 1 | Sí como **subproducto** de los diagnósticos (un artículo por objeción real) |

**[FACT]** Upwork cambió (may 2025) a fee variable 0–15% según categoría; el trabajo commodity tiende al 15%. Fuente: [GigRadar Upwork Market Report 2026](https://gigradar.io/blog/upwork-market-report-2026) — tratar el detalle de “escasez por categoría” como afirmación de operador, el cambio de fee como hecho de plataforma a verificar en el propio Upwork.

### 6.3 Prioridad 30 días vs después

**Días 1–30**

1. 50 conversaciones de ICP (no posts, conversaciones).
2. 1 página de oferta + calendario.
3. 2 pilotos cerrados o una post-mortem de por qué no.
4. Opcional: perfil Upwork **solo** si se necesita cash y se puede filtrar proyectos del ICP (no “any wordpress”).

**Días 31–90**

5. Contenido de nicho (páginas de problema, no “qué es el CRO”).
6. Partners.
7. Malt/Contra si el ICP es europeo y el ticket aguanta.
8. LinkedIn más sistemático.

**Después de 3–6 meses y N≥10 entregas iguales**

9. SEO de la propia máquina comercial.
10. Productos digitales.
11. Marketplaces, si acaso como canal de descubrimiento, vendiendo en web propia (lección Envato).

**[EXPERIMENT]** Un listado de 100 empresas del ICP en 2 ciudades. Secuencia: visita web 3 min → mensaje corto de un defecto observable (Maps, velocidad, WhatsApp, ofertas). Medir respuesta. Si <5% con un mensaje específico, el problema es la oferta o el ICP, no “el canal”.

---

## 7. Productización

### 7.1 Cómo se productiza de verdad

No se productiza dibujando la fábrica. Se productiza **entregando 5 veces lo mismo y borrando lo que no se repitió**.

Orden correcto:

1. Oferta fija.
2. Intake fijo.
3. Arquitectura de sitio fija.
4. Componentes que de hecho se reusaron.
5. Configuración (colores, copy, fotos) separada del código.
6. Automatizaciones fijas del vertical.
7. Recién entonces: generador / “rellena el form y sale la web”.

Invertir el orden es el error clásico de founders técnicos: construir el compilador antes que el lenguaje.

### 7.2 Arquitectura conceptual (no de implementación)

Capas, de más estables a más volátiles:

```
SiteSpec (contrato del proyecto)
  ├── Brand (logo, color, tipografía, tono)
  ├── Offer (servicios, tickets, zonas, pruebas, FAQs)
  ├── Content (copy, legal, testimonios)
  ├── Assets (fotos, before/after con derechos)
  ├── IA constraints (qué no se puede afirmar)
  ├── Integrations (WhatsApp, Analytics, CRM, ads pixels)
  ├── SEO (entidades, ciudades, schema)
  ├── Conversion (CTAs, formularios, eventos)
  └── Deploy (dominio, hosting, redirects)
        ↓
   Design system de NICHO (no de la agencia)
        ↓
   Templates de página (Home, Service, Location, Landing Ads, Legal)
        ↓
   Componentes (Hero, Proof, FAQ, Prices?, CTA, Map)
        ↓
   Contenido generado/adaptado
        ↓
   QA (a11y, legal, performance, forms, tracking)
        ↓
   Deploy
```

**[RECOMMENDATION]** Sí hace falta un **SiteSpec**: un schema (JSON/YAML) que describe el proyecto. No hace falta un motor que lo compile el mes 1. Un humano + IA rellenando el spec y un humano montando el sitio **ya es la fábrica**.

**[RECOMMENDATION]** Un design system de agencia genérico es vanidad. Un design system de **un vertical** (tipología de hero, prueba social típica, bloques legales, cards de tratamiento) es activo.

### 7.3 Evaluación del “formulario mágico”

**[HYPOTHESIS]** El 80% de la calidad de salida la determina el intake, no el modelo. Los clientes entregan logos en PNG de 40 kb, fotos de Instagram, y copy mentiroso.

**[RECOMMENDATION]** El formulario no genera la web. El formulario genera el **SiteSpec incompleto**. Un agente lista huecos. Producción no empieza hasta que hay: logo usable, 8 fotos reales, 3 ofertas, zona, teléfono, textos legales mínimos.

**[RECOMMENDATION]** QA automatizado sí, pronto: links, forms, consent mode, Lighthouse, spellcheck, “¿hay teléfono clickable en móvil?”. Generación automática de estética, no.

### 7.4 Integraciones: no reinventar GHL

**[FACT]** GoHighLevel existe precisamente como “fábrica” white-label de CRM + funnels + automatización para agencias locales; SaaS mode se publicita ~497 USD/mes. Fuentes: [HighLevel](https://www.highlevel.ai/blog/gohighlevel-white-label-saas-mode-tutorial), [The Stack Insiders](https://www.thestackinsiders.com/blog/gohighlevel-saas-mode).

**[RECOMMENDATION]** Antes de construir CRM/agentes/workflows propios, escribir en una página: “qué no podemos hacer con GHL + n8n + Cal.com + WhatsApp + un front Next/Astro”. Si la lista es corta, **no construir**. Revender o implementar GHL puede ser tácticamente correcto aunque sea poco romántico. Construir un GHL peor es mala idea.

**[OPEN QUESTION]** ¿El diferenciador es el front (web rápida, diseño, SEO) o el back (CRM/automatización)? Si es el front, GHL es suficientemente bueno por detrás. Si es el back, hay que preguntarse por qué el mercado no se va a GHL directamente.

---

## 8. Agency OS (conceptual)

No es un producto. Es el sistema nervioso interno. Versión 0 = Obsidian + Git + una hoja de cálculo. Versión 1 = lo mismo con carpetas estrictas. Versión 2 = software, **solo** si las métricas de la sección 14 lo piden.

### 8.1 Módulos mínimos

**Estrategia**

- ICP vigente (uno).
- Oferta vigente (una).
- Promesas que está prohibido hacer.
- Roadmap de 90 días.

**Clientes**

- Ficha: ICP, sede, stack, accesos, DPA firmado, valor de lead declarado.
- Estado: lead / piloto / activo / churn.

**Ventas**

- Guion de diagnóstico.
- Objeciones reales (wiki viva).
- Registro de cada conversación: dolor, presupuesto, siguiente paso.
- Propuesta plantilla (scope + fuera de scope).

**Intake**

- Checklist de assets.
- SiteSpec incompleto → completo.
- Semáforo legal (salud/ads/claims).

**Producción**

- Tablero por fases: Spec / Content / Build / QA / Deploy / Handoff.
- Definición de Done por tipo de página.

**Diseño**

- Tokens del vertical.
- Variantes permitidas (no “el cliente elige entre 40 héroes”).
- Biblioteca de prueba social.

**Desarrollo**

- Starter del vertical.
- Convención de nombres.
- Entorno preview por cliente.

**Automatización**

- Catálogo interno de workflows **del vertical** (no 8.000 templates).
- Credenciales por cliente aisladas.
- Runbook de “se rompió el webhook”.

**IA**

- Prompt/skill de copy del vertical.
- Prompt/skill de QA.
- Log de decisiones (“por qué este CTA”).
- Prohibiciones (claims médicos, garantías).

**QA**

- Lista automática + lista humana (sobre todo legal y marca).
- Evidencia: capturas, Lighthouse, test de formulario.

**Deployment**

- Dominio, DNS, redirects, analytics, pixels, backups.
- Checklist de go-live.

**Analytics**

- Eventos canónicos: `lead_submit`, `click_call`, `click_whatsapp`, `booking`.
- Informe mensual de una página.

**Documentación**

- Cómo se entrega el v1 (playbook).
- Cómo se factura.
- Cómo se escala un cambio de copy.

**Conocimiento**

- Post-mortems.
- Qué páginas convirtieron.
- Qué copy murió.

**Aprendizaje (el flywheel real)**

- Cada proyecto escribe: 3 cosas que reusar, 3 que nunca más, 1 cambio al template.
- Sin este loop, el OS es un cementerio de Notion.

**[RECOMMENDATION]** Si un módulo no se usa en los primeros 10 proyectos, no existe. No diseñar 16 apps.

---

## 9. IA y agentes

### 9.1 Principio de contexto compartido

**[RECOMMENDATION]** La fuente de verdad no es “lo que ChatGPT recuerda”. Es un **repo + SiteSpec + playbook** que **todos** los modelos leen. Cada modelo tiene rol primario, pero el contexto es común: ICP, oferta, restricciones, decisiones, stack.

Eso se consigue con:

- `/docs` (estrategia, playbook, legal);
- `/clients/<id>/sitespec.yaml`;
- `/clients/<id>/decisions.md`;
- skills versionadas en Git.

No con “este modelo es el de diseño y no sabe de negocio”.

### 9.2 Reparto (primario ≠ exclusivo)

| Herramienta | Rol primario | También debe poder |
|---|---|---|
| **ChatGPT Go** | Exploración, ventas, objeciones, redacciones largas, “sparring” de oferta | Leer SiteSpec y criticar una entrega |
| **Gemini Pro** | Análisis de material largo (PDFs del cliente, capturas, comparables), multimodal (fotos del local) | Proponer estructura SEO local |
| **Grok 4.6** | Adversarial: atacar la oferta, el copy, el ICP; investigación ágil | Revisar si el posicionamiento suena a commodity |
| **Cursor + Composer** | Implementación del starter, componentes, integración | Aplicar decisiones de copy/SEO del spec |
| **Codex** | Tareas de repo acotadas, tests, refactors, PRs pequeños | No diseñar estrategia |
| **OpenCode + Ox Alpha** | Ventana temporal: experimentos de agente/QA, no el núcleo del negocio | Documentar lo que funcione y portarlo a Cursor/skills **antes** de que expire el acceso |

**[RECOMMENDATION]** Un humano es el editor jefe. Ningún modelo “aprueba” claims sanitarios ni deploy a producción.

**[RECOMMENDATION]** No mantener 6 “memorias” paralelas. Si Gemini descubre que el cliente no tiene fotos de tratamientos, eso se escribe en el SiteSpec, no se queda en el chat.

**[RECOMMENDATION]** Coste y límites de cada plan cambian. No diseñar el negocio alrededor de Ox Alpha ni de un tier promocional.

### 9.3 Qué no hacer con IA

- Generar la identidad visual entera (todas las webs de IA se parecen; es un anti-pitch).
- Inventar testimonios, reseñas, casos clínicos, precios.
- Sustituir la conversación de diagnóstico.
- Encadenar 8 agentes para un sitio de 6 páginas.

**[HYPOTHESIS]** Un operador fuerte + 2 modelos + un starter gana a un “orquestador multiagente” el primer año, en calidad y en coste.

---

## 10. Skills / MCP / RAG

### 10.1 Para qué cada pieza

**Skills** (procedimientos empaquetados, versionados en Git):

- cómo rellenar un SiteSpec;
- cómo escribir copy del vertical;
- cómo QA de go-live;
- cómo preparar una propuesta;
- checklist RGPD de formularios.

Sirven cuando el procedimiento **ya es estable**. Skill prematura = documentar la confusión.

**MCP** (herramientas con efectos o datos vivos):

- GitHub, Vercel, analytics de lectura, CMS, n8n.
- Solo si un agente **necesita** leer/actuar sin copiar-pegar.

No es un knowledge base. Es un puerto USB.

**RAG** (búsqueda sobre corpus propio):

- útil cuando hay **decenas** de entregas, objeciones, copies ganadores y legales, y el grep ya duele.
- inútil con 3 clientes: se alucina con un índice vacío.

### 10.2 Fuentes de verdad

| Qué | Dónde vive | Por qué |
|---|---|---|
| Código, starters, skills, SiteSpec schema | **Git** | versión, review, rollback |
| Playbook, estrategia, decisiones, post-mortems | **Git + Obsidian** (mismo contenido, o Git como master) | el conocimiento es del estudio, no de un chat |
| Datos de cliente (leads, eventos) | **DB** (p. ej. Supabase) cuando existan | no en Markdown |
| Credenciales | gestor de secretos, nunca Git | — |
| Contratos, DPAs, facturas | drive legal / contable | no mezclar con el CMS |
| “Lo que dijo el modelo” | no es fuente de verdad | — |

**[RECOMMENDATION]** Master de conocimiento = Git. Obsidian es la UI. RAG, si algún día, indexa Git + DB de resultados, no chats sueltos.

### 10.3 Cuándo un RAG propio

**[RECOMMENDATION]** No antes de:

- 10+ proyectos del mismo ICP;
- un playbook que un extraño puede seguir;
- métricas de conversión guardadas de forma estructurada.

Hasta entonces: `rg`, READMEs, y pegar el SiteSpec en el contexto.

### 10.4 Stack mínimo que sí, y cuándo

| Pieza | ¿Ahora? | Condición |
|---|---|---|
| GitHub | Sí | siempre |
| Obsidian | Sí | si se usa a diario; si no, solo Git |
| Vercel | Sí, cuando haya primer front | preview por cliente |
| Un starter (Astro o Next, **uno**) | Sí, pequeño | no multi-framework |
| n8n | Al primer follow-up real | no “por si acaso” |
| Supabase | Cuando haya datos de leads que no quepan en un spreadsheet | no día 1 |
| MCP | Cuando duela el copy-paste hacia Vercel/GitHub | no instalar 15 |
| RAG | Ver umbral arriba | no |
| Design tool Figma | Solo si hay diseñador o sistema visual real | tokens en código bastan al inicio |

**[RECOMMENDATION]** ChatGPT/Gemini/Grok/Cursor son **capacidad**, no arquitectura. La arquitectura es Git + Spec + Starter + un canal de automatización.

---

## 11. Velocidad de construcción

### 11.1 ¿Validar, construir, o ambos?

**[RECOMMENDATION]** **Validar la oferta en paralelo a construir SOLO el mínimo de entrega**, no el mínimo de plataforma.

- Validar primero durante “semanas” **sin** poder entregar = teatro de entrevistas.
- Construir primero la fábrica = la muerte más probable de esta idea.
- Ambos: sí, con asimetría brutal: 80% del tiempo en conversaciones y entregas; 20% en endurecer lo que ya se reutilizó.

### 11.2 Construir inmediatamente

- Posicionamiento de una frase + ICP.
- Guion de diagnóstico.
- Una página de oferta.
- SiteSpec en un YAML/Markdown (plantilla).
- Un starter feo pero sólido (performance, forms, legal, analytics).
- Checklist QA.
- Hoja de métricas por cliente.
- Un flujo de aviso de lead (n8n o incluso Zapier/Make temporal).

### 11.3 No construir todavía

- Agency OS software.
- Generador de webs desde formulario.
- Multiagente autónomo.
- Marketplace de templates/componentes.
- CRM propio.
- RAG.
- Design system genérico de 200 componentes.
- App de onboarding del cliente.
- QA “inteligente” más allá de linters y listas.
- Integraciones con 6 CRMs.
- Panel de cliente.
- Facturación SaaS.

**[RECOMMENDATION]** La prueba de que es demasiado pronto para una pieza: nadie la ha pedido dos veces y no acorta una tarea que ya duele.

---

## 12. Riesgos

### Sobreingeniería

El riesgo **número 1**. El fundador tiene Cursor, Codex, Grok, Gemini, MCP, skills, subagentes. Eso sesga hacia construir un sistema operativo en vez de un negocio. El mercado no paga el OS.

### Commoditización

**[FACT]** Web design/dev ya se erosionan en el mix de agencias; clients DIY + AI builders; márgenes del sector ~13% y presión de “hazlo más barato con IA” (Promethean).  
Si se vende artefacto, el precio cae. Si se vende sistema de nicho, cae más despacio.

### Dependencia de plataformas

Upwork, Fiverr, Envato, GHL, OpenAI, Google, Meta, WhatsApp, Vercel, n8n Cloud. Cada una puede cambiar fees (Envato 50%, Upwork 0–15%), APIs o TOS.  
**[RECOMMENDATION]** Poseer la relación con el cliente (email, contrato, dominio del cliente) desde el piloto 1.

### Dependencia de modelos

Ox Alpha es ventana. Precios suben. Calidad de diseño genérico baja (todas las webs iguales).  
**[RECOMMENDATION]** Skills y specs en Git; modelos intercambiables.

### Seguridad y privacidad

Leads de salud, fotos de pacientes, DNI en onboarding, accesos a Google Ads. Un formulario “cómodo” mal hecho es una infracción. WhatsApp para datos clínicos es un problema conocido en el sector dental español.

**[RECOMMENDATION]** DPA, minimización (no pedir historial clínico para hacer una web), separación marketing vs asistencia, no entrenar modelos públicos con datos de cliente.

### Costes de APIs

Irrelevantes al inicio; se vuelven un impuesto silencioso si cada página se genera con 40 llamadas y 8 revisiones. Medir coste por proyecto desde el piloto 2.

### Calidad de generación

**[FACT]** Comparativas independientes muestran huecos grandes en builders IA vs sitios estáticos bien hechos (performance, a11y, lógica de negocio). [SiteGrade 2026](https://sitegrade.io/en/blog/ai-website-builders-vs-agencies-2026-comparison/).  
Si la fábrica genera “aspecto de IA”, se destruye el argumento de premium.

### Mantenimiento

Cada cliente es una deuda. Sin retainer, el estudio muere en el mes 8 entre “¿puedes cambiar esto?”. Con retainer mal acotado, muere de scope.

### Escalabilidad

Las agencias **no escalan** como SaaS. Promethean lo ha argumentado de forma explícita (“Digital Agencies Don’t Scale”). Contratar gente para una fábrica semiautomática es un tipo de empresa; vender software es otra. Elegir.

### Legal

Publicidad sanitaria, claims, cookies, encargados, accesibilidad, derechos de imagen, Kit Digital (si se usa: burocracia y márgenes raros).  
**[OPEN QUESTION]** Forma jurídica, seguro de RC, y si se actúa como encargado o corresponsable en analítica.

### Adquisición de clientes

Riesgo de construir para un cliente imaginario. Mitigación: 50 conversaciones antes de la v2 del starter.

### Diferenciación

“IA + templates + resultados” no diferencia. Diferencia: **un ICP, números, y un sistema aburrido que funciona**.

### Riesgo específico de esta propuesta

**Canibalización interna:** 8 líneas de ingreso diluyen foco. Los marketplaces enseñan a vender barato. Upwork enseña a vender horas. El OS enseña a no vender. Hay que elegir un profesor.

---

## 13. Roadmap

Premisa: una persona o un estudio muy pequeño. Si hay equipo, no acelerar la plataforma; acelerar las conversaciones.

### Final de la primera semana

Tener:

- ICP provisional + 1 ICP asesino declarado.
- Oferta v1 en una página.
- Guion de diagnóstico.
- SiteSpec plantilla.
- Lista de 100 cuentas.
- 15 conversaciones hechas.
- Decisión escrita: qué no se vende.

No tener: OS, generador, marca cara, 8 canales.

### Final del primer mes

Tener:

- ≥40 conversaciones.
- 2 pilotos en entrega o 1 piloto + análisis de rechazos.
- Starter del vertical (no genérico).
- Tracking de leads en los pilotos.
- Time-tracking real de horas.
- 5 objeciones documentadas.

Criterio de fracaso temprano: nadie del ICP paga ni aunque el precio de aprendizaje sea bajo **y** el dolor era “evidente”. Entonces el ICP o la oferta están mal, no “falta más IA”.

### A los 3 meses

Tener:

- 6–12 sistemas entregados **del mismo tipo** (si no se llega, el canal de adquisición falló; no se “compensa” con producto).
- Playbook v2 (páginas, copy frames, QA).
- Retainer en ≥50% de clientes activos. **[HYPOTHESIS]** de tasa; si está muy por debajo, el setup se vendió como commodity.
- Primer partner o primer canal repetible.
- Componentes que de hecho se reusaron ≥3 veces extraídos al starter.
- Informe de: horas/proyecto, margen, leads del cliente, churn.

No tener todavía: RAG, marketplace, CRM propio.

### A los 6 meses

Tener:

- Un posicionamiento que un extraño puede repetir.
- Datos propios de conversión del vertical (aunque sean pocos).
- Precio de catálogo distinto del de aprendizaje.
- Automatizaciones de follow-up estables.
- Decisión go/no-go de construir capa “fábrica” (formulario → spec → PR).
- Decisión go/no-go de GHL vs stack propio para el back.

Solo entonces: v0 de generador asistido (spec → PR, no spec → producción autónoma).

---

## 14. Criterios de éxito

Medir **desde el cliente 1**. Si no se mide, la fábrica no puede aprender.

### Qué funciona (negocio)

- Tasa de conversación → diagnóstico.
- Diagnóstico → propuesta.
- Propuesta → cierre.
- Días de ciclo de venta.
- CAC (tiempo + dinero).
- Setup fee, retainer, margen de contribución.
- Churn a 90 días.

### Qué funciona (cliente)

- Leads/semana (form + call + WhatsApp), no “visitas”.
- Tiempo de primera respuesta.
- Tasa de lead → cita (esto a menudo es del cliente; medirlo igual).
- Páginas/landings que aportan leads.
- Incidencias de tracking.

### Qué automatizar

Automatizar una tarea cuando:

1. se ha hecho igual ≥5 veces;
2. el error es caro o aburrido (tracking, DNS, informes);
3. un fallo no es irreversible (o hay rollback).

No automatizar: diagnóstico, claims, diseño de oferta, primera versión de copy de alto ticket.

### Qué eliminar

- Páginas que ningún usuario usa.
- Servicios que no se recompran.
- Canales con CAC desconocido o infame.
- Reuniones de “revisión de diseño” infinitas (límite contractual).

### Qué productizar

Un módulo se productiza si aparece en ≥70% de proyectos y el cliente lo entiende como parte del sistema (p. ej. “landing de implantes”, “alerta de lead a WhatsApp”).

### Cuándo merece la pena un Agency OS avanzado

**[RECOMMENDATION]** Cuando se cumplan **todas**:

1. ≥15 clientes del mismo ICP o ≥10 en retainer.
2. Horas de coordinación (buscar files, rehacer checklists, copiar specs) > ~20% del tiempo. **[HYPOTHESIS]** de umbral; medir.
3. Dos personas tropiezan con el mismo procedimiento.
4. El starter y el SiteSpec ya existen y se usan.
5. Hay margen para pagar la construcción **sin** dejar de vender.

Si se construye antes, el OS es un cliente interno que no paga.

---

## TOP 10 INSIGHTS

1. La visión del flywheel es correcta; **el orden de ejecución de la propuesta está invertido**.
2. **[FACT]** El mercado de agencias está saturado y ya se declara especialista (84%); ampliar servicios correlaciona con **peores** márgenes que reducirlos (Promethean).
3. La web es el commodity; el sistema de captación + follow-up es el producto; la IA es una herramienta de coste.
4. Ocho líneas de ingreso el mes 1 es una mala idea. Una oferta, un ICP, un retainer.
5. Restaurantes y SaaS son malos ICP de arranque (pago/ciclo/credenciales). Estética de alto ticket o home services de ticket alto merecen la first look; dental es económicamente bueno y comercialmente rojo.
6. El formulario mágico no genera empresas. Genera specs incompletos. El cuello de botella es el cliente, no el modelo.
7. Un SiteSpec sí; un compilador no. GHL/n8n ya son la “fábrica” de back-office que mucha gente quiere reconstruir.
8. Marketplaces de templates (Envato 50%, saturación, IA) son un negocio ajeno y peor cada año. No son un canal de validación de agencia.
9. El contexto compartido entre modelos se consigue con Git/Spec, no con “cada IA un departamento”.
10. El criterio de verdad es **conversaciones y proyectos repetibles**, no la elegancia del Agency OS.

---

## TOP 10 RISKS

1. Sobreingeniería del OS / multiagente / RAG antes de demanda.
2. Posicionamiento generalista (“todo digital con IA”) → guerra de precios.
3. Prometer resultados sin palancas (ads, recepción, oferta).
4. Elegir ICP por afinidad (restaurantes, SaaS “bonito”) en vez de por economía.
5. RGPD y publicidad sanitaria si se entra en clínicas sin higiene legal.
6. Dependencia de Upwork/Fiverr para identidad comercial.
7. Dependencia de un modelo o de una ventana (Ox Alpha).
8. Calidad visual “AI slop” que impide cobrar premium.
9. Scope creep de contenidos/assets que destruye el margen del precio cerrado.
10. Construir software propio (CRM, generador) contra GHL/Wix/Duda con 0 distribución.

---

## FIRST 30 DAYS

Semana 1 — **corte**

- Escribir ICP ganador provisional y una lista de “no servimos a…”.
- Oferta de una página: sistema, no menú.
- 20 conversaciones. Cero features nuevas.

Semana 2 — **evidencia**

- 20 conversaciones más.
- SiteSpec + starter mínimo.
- Tres propuestas enviadas (aunque se rechacen).

Semana 3 — **dinero o aprendizaje**

- Cerrar 1–2 pilotos (precio de aprendizaje a cambio de caso).
- Instalar medición. Time-tracking por fase.

Semana 4 — **endurecer**

- Entregar o estar en QA de un piloto.
- Extraer 3 patrones reutilizables **solo si se usaron**.
- Decidir: doblar ICP o matarlo.
- No abrir Fiverr, no abrir marketplace, no diseñar el OS.

Cadencia diaria: ≥5 contactos reales de ICP. Si un día se “construye” 8 horas sin hablar con un comprador, ese día se falló el plan.

---

## BUILD NOW

- Documento de estrategia (este) + oferta + ICP.
- Plantilla SiteSpec.
- Starter de un vertical (páginas del v1, legal, events).
- Checklist QA go-live.
- Flujo de notificación de lead.
- Carpeta de conocimiento en Git (objeciones, decisiones).
- Página de captura de demanda propia (una).

## DO NOT BUILD YET

- Generador automático de webs.
- Agency OS aplicación.
- RAG.
- CRM propio.
- Marketplace de templates/componentes/automatizaciones.
- Capa multiagente de producción.
- Design system universal.
- Integraciones con todos los CRMs dentales “por si acaso”.
- Panel de cliente.
- Producto SaaS / white-label.

---

## INFORMATION WE NEED

Investigación **antes** de fijar precio, ICP final y stack de back-office:

1. **Valor local de un lead/cita** en 2–3 verticales finalistas (hablar con dueños; no usar solo CPL de blogs US).
2. **Disposición a pagar** y quién decide (dueño, grupo, marketing manager).
3. **Competencia real** en 3 ciudades: quién ya vende el sistema, a qué precio anunciado, qué reseñas tienen.
4. **Saturación dental vs estética vs reformas** en la geografía objetivo.
5. **Restricciones de ads sanitarios** (Google, Meta, normativa española de publicidad sanitaria).
6. **Stack real del cliente**: Doctoralia, Klinikare, Gesden, Idealista, Treatwell, etc. — no diseñar integraciones fantasma.
7. **CAC propio** por canal (medir; no copiar GigRadar).
8. **Horas reales** de un piloto (el precio cerrado sale de aquí).
9. **GoHighLevel vs n8n+Cal.com+WhatsApp**: prueba de 1 día, no de 3 meses.
10. **Forma jurídica, DPA, seguro**, y si Kit Digital distorsiona el mercado objetivo (precios anclados a subvención).
11. **Churn y LTV** de agencias comparables (entrevistas a 3 dueños de estudios; Promethean es US-céntrico).
12. **Calidad de assets** que el ICP puede entregar (si no hay fotos, el generador es irrelevante).

---

## Cierre adversarial

La idea no es absurda. Es **demasiado completa para ser cierta al inicio**.

Una fábrica digital que aprende de cada proyecto es lo que una buena agencia de nicho acaba siendo a los 2–5 años, cuando tiene playbook, starter, retainer y datos. Presentarla como arquitectura de arranque convierte un negocio de servicios (difícil pero conocido) en una startup de plataforma (más difícil, más capital, peor calibrated para un estudio que todavía no tiene demanda).

**[RECOMMENDATION]** Durante 90 días, el único KPI de producto es: *¿hemos entregado el mismo sistema dos veces con menos horas y un cliente dispuesto a pagar mensual?* Si sí, entonces — y solo entonces — merece la pena hablar de fábrica, SiteSpec compilable y Agency OS. Si no, cualquier línea de código extra es una forma elegante de no vender.
