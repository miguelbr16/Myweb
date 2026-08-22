# MULTIMODEL BENCHMARK — DIGITAL FACTORY 01
## Compilación de respuestas

**Estado:** 3/5 respuestas incluidas. Sin ranking ni ganador. El texto de cada modelo se copia tal cual.  
**Uso:** reenviar este archivo entero al evaluador o a cada modelo.  
**Prueba:** DIGITAL FACTORY 01 (12 secciones de decisión).

| Inteligencia | Entorno | Estado |
|---|---|---|
| Grok 4.6 | Cursor / Grok | Incluida |
| OpenCode | OpenCode | Incluida |
| ChatGPT Go | ChatGPT | Incluida |
| Gemini 3.7 Flash | Gemini | Pendiente — pegar cuando llegue |
| Composer 2.5 | Cursor | Pendiente — pegar cuando llegue |

Orden de secciones: Grok → OpenCode → ChatGPT Go → Gemini (hueco) → Composer (hueco).

Los archivos individuales siguen en esta carpeta (`grok-4.6-…`, `opencode-…`, `chatgpt-go-…`) por si hace falta citar uno solo. Esta es la fuente conjunta.

---

## Índice de lectura (no es evaluación)

Mapa de lo que **cada respuesta ya incluida declara**. No puntúa calidad. No elige ganador.

| Campo | Grok 4.6 | OpenCode | ChatGPT Go |
|---|---|---|---|
| Diagnóstico | Secuencia: fábrica sin clientes | Secuencia: 0 conversaciones de venta | Secuencia: validación + sobreingeniería + deuda artesanal |
| Qué vender | Sistema de captación dental, 1 sede | “Sistema de Captación de Pacientes” (landing + respuesta <1 min + aviso + panel) | Landing/web de conversión dental (Dental Conversion Website) |
| ICP | Clínica privada España, 1 sede | 1–3 sedes, dueño, ya invierte en captación | Clínica privada con oferta relevante y web mejorable |
| Promesa | Sistema medible 14+14 días; **no** N pacientes | Respuesta <1 min; landing 14 días; precio cerrado | Convertir tráfico existente; **no** X pacientes |
| Precio | **[HYPOTHESIS]** 2.500–4.500 € + 350–700 €/mes después; no cotizar en firme | **[HYPOTHESIS]** 1.500 € lista / 750 € fundador (5 primeros); retainer 200–400 €/mes | Sin cifra; experimento 2–3 niveles; no “precio de mercado” |
| Tope de fábrica (30d) | ≤8 h/semana | ≤5 días de build en el mes | Factory v0.1; resto espera repetición |
| SiteSpec | BUILD NOW plantilla ≤25 campos | AFTER CLIENT 3 (completo); intake Tally ahora | BUILD NOW v0.1 |
| Design system | AFTER CLIENT 3 | AFTER CLIENT 3 | BUILD NOW mínimo |
| Supabase | NO ahora | 1 tabla `leads` ahora (o Sheet) | AFTER CLIENT 1 |
| n8n | AFTER CLIENT 1 | 1 flujo ahora | AFTER CLIENT 1 |
| Orquestación | **D** + fundador; Gemini→ChatGPT→Grok→Composer | **D** + fundador | **D** modificada: consejo paralelo Gemini/ChatGPT/Grok → Composer; fundador |
| Mañana | Maps + 8 contactos antes de mediodía; 0 OS | 10 auditorías vídeo; 0 código hasta conversación agendada | Oferta + landing + demo + outreach (día largo de build comercial) |

---

# RESPUESTA — GROK 4.6

# MULTIMODEL BENCHMARK — DIGITAL FACTORY 01
## Respuesta: Grok 4.6

Evaluación de decisiones, no de prosa. Sin código. Sin agentes permanentes. Sin cifras de mercado inventadas.

---

## 1. DIAGNÓSTICO

**El problema real no es “falta de fábrica”.** Es que una persona está a punto de gastar las 40 h/semana en infraestructura que ningún cliente ha pagado, mientras el negocio todavía no tiene oferta, ICP validado ni pipeline.

**[FACT]** Sois 1 fundador, sin fábrica madura, sin base de clientes, sin histórico. El objetivo declarado es clientes y resultados, no plataforma.

**[FACT]** El fundador quiere construir 10 bloques (SiteSpec completo, 30 componentes, design system, Agency OS, 15 n8n, 10 agentes, RAG, KB, QA automático, deploy total) *antes* de vender.

**[FACT]** Negocio quiere vender ya. Tech teme deuda. Marketing quiere landing propia antes de outbound. Los tres pueden ser ciertos a la vez y aun así estar mal priorizados.

**[FACT]** Hay una *oportunidad observada* en clínicas dentales privadas en España (webs con oferta poco clara, fricción, CTAs, móvil, follow-up). El propio brief dice que **no** hay datos para afirmar que sea generalizado, ni CAC, conversión, WTP, churn, LTV, margen.

**[FACT]** Existen anclas competitivas publicadas en el brief: web premium desde 4.900 €; web+SEO desde 299 €/mes; landing+Meta desde 1.200 €/mes. No equivalen a “precio de mercado” ni a disposición a pagar vuestra.

**Información que falta (crítica):** valor de un paciente/tratamiento para 10 clínicas concretas; quién decide y qué pagan hoy; si cogen el teléfono/WhatsApp; stack (Doctoralia, CRM dental); saturación en 2–3 ciudades; si el fundador puede hablar con dueños esta semana.

**Hipótesis principales**

**[HYPOTHESIS H1]** Un sistema de captación (claridad de oferta + conversión + follow-up <5 min) se vende mejor y se cobra mejor que “una web” o que “IA/CRM/agentes”.

**[HYPOTHESIS H2]** Dental en España es un ICP *testeable* (dolor visible, anclas de precio altas), no un océano azul. Habrá especialistas.

**[HYPOTHESIS H3]** Un SiteSpec *corto* + 1 starter recorta tiempo desde el cliente 2, sin necesidad de 30 componentes ni OS.

**[HYPOTHESIS H4]** Construir los 10 bloques antes del cliente 1 retrasa el primer euro ≥6–8 semanas y no reduce deuda: la deuda real será scope y assets del cliente.

**Supuestos**

**[ASSUMPTION]** El fundador puede hacer outbound (llamada/WhatsApp/Maps) y entregar una web/landing de calidad, como afirma el brief.

**[ASSUMPTION]** 40 h/semana son reales y no se evaporan en tool-hopping.

**[ASSUMPTION]** “Resultados” en el piloto no significa ads gestionados a riesgo ni garantía de agenda: significa sistema medible (leads, clics a llamada/WhatsApp).

**Verdadero conflicto:** A vs B está mal planteado. No es improvisar todo *o* tres meses de fábrica. Es **un sistema mínimo repetible + venta en paralelo**. La fábrica se gana con 3 entregas iguales, no con un monorepo vacío.

---

## 2. DECISIÓN ESTRATÉGICA

**[DECISION]** Vender primero un **sistema de captación para clínicas dentales privadas en España (1 sede)**, no “agencia digital”, no software, no SEO retainer, no Meta, no CRM, no agentes.

- **A quién:** dueño o director de clínica dental privada, 1 ubicación, que ya tiene web o no, y que se queja de “no nos llaman / no sabemos de dónde vienen los leads”. Exclusión: grupos multi-sede, SaaS, restaurantes, “cualquier PYME”.
- **Propuesta:** en 14 días, mini-sitio o reforma de conversión + 1–2 landings de tratamiento de alto ticket (implantes/ortodoncia *si* ellos los venden) + CTAs móviles + formulario corto + aviso de lead a WhatsApp/email + eventos de medición + 14 días de ajustes. Promesa: **sistema instalado y medible**, no “te lleno la agenda”.
- **NO vender todavía:** SEO mensual, ads, CRM propio, IA/agentes, templates en marketplaces, Agency OS como producto, design system, “fábrica”.
- **Construir:** oferta de 1 página, guion de diagnóstico, SiteSpec v0 (≤25 campos), starter mínimo (páginas del paquete), checklist QA, un flujo de aviso de lead cuando exista el primer proyecto.
- **NO construir:** la lista de 10 del fundador como prerrequisito. Ver §5.

**Trade-off:** perdéis “diferenciación de plataforma” el mes 1. Ganáis aprendizaje pagado. Marketing tendrá una landing propia *de la oferta*, no un OS. Tech tendrá spec+starter, no deuda de 30 componentes inventados.

**No es “depende”.** Dental es la apuesta de 30 días porque es la única oportunidad *nombrada* en el brief. Si 15 conversaciones no muestran dolor + presupuesto, se mata el ICP; no se construye más fábrica.

---

## 3. PLAN DE 30 DÍAS

Presupuesto de tiempo: **~40 h/semana, 160 h/mes**. Tope de “fábrica”: **≤8 h/semana** (el resto es venta y entrega).

### Semana 1 — Demanda, no plataforma
- **Objetivo:** hablar con el mercado; oferta escrita.
- **Tareas:** 40 clínicas en Maps (2 provincias); 25 contactos reales; 10 conversaciones; 1 página de oferta; guion de 90 min; SiteSpec plantilla en Markdown/YAML.
- **Entregables:** lista + notas; página viva en Vercel; `sitespec-v0.md`.
- **Horas:** venta 28 h · oferta/spec 8 h · admin 4 h.
- **Éxito:** ≥10 conversaciones. Si <5, el canal o el ICP falla: se itera el mensaje, no se abren 30 componentes.

### Semana 2 — Pipeline
- **Objetivo:** 3 propuestas fuera; starter del paquete (no del OS).
- **Tareas:** 25 contactos más; 3 diagnósticos; 3 propuestas con alcance cerrado; starter: home + tratamiento + contacto/legal + form.
- **Entregables:** 3 PDFs/propuestas; repo starter; checklist QA.
- **Horas:** venta 22 h · starter 14 h · propuestas 4 h.
- **Éxito:** ≥3 propuestas. Ideal: 1 sí o 1 “precio de aprendizaje a cambio de caso”.

### Semana 3 — Dinero o evidencia
- **Objetivo:** piloto en marcha **o** post-mortem de rechazos.
- **Tareas:** entregar o QA del piloto; time-tracking por fase; medición de eventos; **no** añadir blog/CRM.
- **Entregables:** sitio en preview; eventos `lead_submit` / click-to-call / WhatsApp; log de horas.
- **Horas:** entrega 30 h · venta residual 10 h.
- **Éxito:** un artefacto en producción **o** 5 objeciones reales documentadas (precio, “ya tengo agencia”, timing).

### Semana 4 — Cerrar el loop
- **Objetivo:** retainer o siguiente cierre; extraer solo lo reusado.
- **Tareas:** pedir testimonio/caso; ofrecer 30 días de operación; extraer ≤5 componentes que **de hecho** se usaron; matar el resto.
- **Entregables:** 1 caso (aunque sea proceso); decisión go/no-go dental; lista de 5 reusables.
- **Horas:** cierre 12 h · entrega/ajuste 20 h · harvest 8 h.
- **Éxito:** (a) 1 cliente pagando o (b) ICP descartado por escrito. Ambos valen. Seguir construyendo OS no vale.

**[EXPERIMENT]** Semana 1: oferta A “web profesional 14 días” vs B “sistema de captación 14 días + 14 días operación” en 12 contactos cada una. Medir respuestas, no opiniones internas.

---

## 4. PRODUCTO / OFERTA

**Nombre interno:** Captación Dental v1 (1 sede).

| | |
|--|--|
| **ICP** | Clínica dental privada, 1 sede, España, dueño accesible |
| **Problema** | Tráfico o visitas que no se convierten; leads que mueren; oferta ilegible en móvil |
| **Promesa** | En 14 días tenéis un sistema medible: oferta clara, CTAs, form corto, aviso de lead, 14 días de iteración. **No** prometemos N pacientes |
| **Entregables** | Mini-sitio (home + 3–6 páginas de oferta/equipo/contacto/legal) **o** refactor de conversión de la actual; 1–2 landings de tratamiento que *ellos* vendan; form + WhatsApp + click-to-call; eventos; QA móvil; 2 rondas de copy |
| **Fuera** | Ads, SEO mensual, blog 40 posts, CRM, app, agentes, design system, multi-sede |
| **Duración** | 14 días build + 14 días operación incluida |
| **Pricing** | **No hay precio de mercado propio.** Anclas del brief: 4.900 € one-shot vs 299 €/mes vs 1.200 €/mes ads. **[HYPOTHESIS]** Setup 2.500–4.500 € + operación 350–700 €/mes *después* del mes 1, si el valor de una sola conversión de alto ticket lo justifica. **No cotizar en firme** hasta oír ticket/agenda en el diagnóstico |
| **Validar precio** | Pregunta: “¿cuánto os vale un paciente de [tratamiento caro]?” Si no hay número, no hay value pricing. Van Westendorp light: 3 anclas (1.5k / 3.5k / 5k) en 10 llamadas |
| **Upsell** | Landing extra; pack legal/cookies bien hecho; conexión Doctoralia si no está |
| **Retainer** | Iteración CRO + uptime + informe 1 página. Ads **aparte** (presupuesto del cliente + fee), no metidos en 400 € |

**[RISK]** 299 €/mes ancla a commodity. No competir ahí. Competir con el paquete de 4.900 € en *alcance de sistema*, no en “más bonito”.

---

## 5. DIGITAL FACTORY MVP

| Elemento | Decisión | Por qué |
|--|--|--|
| SiteSpec (plantilla ≤25 campos) | **BUILD NOW** | Contrato de proyecto; 4–8 h; evita improvisar copy/legal |
| Intake (checklist / Tally) | **BUILD NOW** | Cuello de botella = assets, no el modelo |
| Documentación (playbook 2 páginas en Git) | **BUILD NOW** | Memoria del estudio |
| Deployment (Vercel preview) | **BUILD NOW** | Entregar |
| Analytics (eventos canónicos) | **BUILD NOW** | Sin esto no hay “resultados” |
| Starter (páginas del v1, no 30 componentes) | **BUILD NOW** | Reutilización real |
| n8n aviso de lead | **BUILD AFTER CLIENT 1** | Antes basta email/WhatsApp nativo; n8n cuando duela |
| Componentes extraídos | **BUILD AFTER CLIENT 1** | Solo los usados ≥2 veces |
| QA checklist humano | **BUILD NOW** | Lista. Automático **AFTER CLIENT 3** |
| Design system | **BUILD AFTER CLIENT 3** | Si no, es vanidad |
| CRM propio | **DO NOT BUILD** | Doctoralia / hoja / WhatsApp |
| 15 n8n / 10 agentes / RAG / Agency OS | **DO NOT BUILD** | Cero histórico. El argumento “después iremos más rápido” es **[HYPOTHESIS]** no demostrada y choca con 40 h |
| QA automático total / deploy “totalmente” | **BUILD MUCH LATER** | CI mínimo (build) after client 1; el resto espera |
| Base de conocimiento | **BUILD AFTER CLIENT 1** | Objeciones reales en Git, no wiki vacía |

**[DO NOT BUILD]** Los 10 prerrequisitos del fundador como bloque. SiteSpec *plantilla* ≠ SiteSpec *completo/motor*.

---

## 6. ARQUITECTURA (mínima)

Optimiza velocidad y 1 persona.

- **Frontend:** un meta-framework estático (Astro o Next, **uno**). Páginas del paquete. No CMS el mes 1 si el copy vive en MD/Spec.
- **CMS:** no. Contenido en repo. AFTER CLIENT 3 si el cliente debe editar.
- **Backend:** no. Form → endpoint serverless mínimo o Formspark/Tally + webhook.
- **DB:** no. Leads a email/WhatsApp + hoja. **Supabase: no ahora** (el brief lo permite, no lo exige).
- **Analytics:** GA4 o Plausible + eventos `lead_submit`, `click_call`, `click_whatsapp`.
- **Forms:** nativos + consentimiento marketing **separado**.
- **CRM:** el de la clínica o hoja. No GHL “porque sí” hasta que el retainer lo pida.
- **Automatización:** n8n **after client 1** para aviso. No 15 flujos.
- **Git/GitHub:** un repo starter + `clients/<id>/sitespec.yaml`.
- **Deploy:** Vercel preview por cliente.
- **Testing:** checklist + 1 test de “form no envía sin consentimiento” after first build. No suite enterprise.
- **IA:** chats + Composer en el repo. **No RAG, no agentes, no MCP farm.**

**Escalar después:** el spec y el starter se vuelven biblioteca cuando haya 3 clones. Eso *es* la fábrica.

---

## 7. IA MULTIMODELO

Papeles **provisionales** (no organigrama). No todos en cada tarea.

| Modelo | Uso en 30 días | No usar para |
|--|--|--|
| **Gemini 3.7 Flash** | Auditar 10 webs dentales (capturas), extraer patrones, PDFs legales, huecos de intake | Decidir precio; CEO |
| **ChatGPT Go** | Copy de oferta, WhatsApp, roleplay de objeciones, propuesta en lenguaje de dueño | Arquitectura; código de producción; “cerebro” (plan Go ≠ flagship) |
| **Grok 4.6** | Atacar oferta, recortar scope, pillar overbuild, este tipo de decisión | Dirección de arte; dictamen legal |
| **Composer 2.5** | Starter, form, deploy, QA técnico en repo | Estrategia; outbound; OS |

**Quién revisa a quién:** copy ChatGPT → Grok (claims). Spec Gemini/Grok → Composer implementa. Composer **no** se auto-aprueba alcance. Código: humano abre el preview.

**Cuándo no usar un modelo:** no comité de 4 para un WhatsApp. No Composer para ICP. No Gemini para “picar el repo” si no está en el IDE. No Grok para hex de marca.

**Siempre humano:** llamadas, precio final, claims sanitarios, DPA, “sí al cliente”, deploy a dominio suyo.

**[DECISION]** No diseño agentes permanentes. Si un chat no cabe en 1 artefacto (spec, propuesta, PR), sobra.

---

## 8. ORQUESTACIÓN

**[DECISION] D — pipeline por fases con transferencia mediante artefactos**, con autoridad humana. No A (un LLM-CEO). No C (council). B es el desempate interno (estrategia vs técnico) *dentro* de D.

Flujo 30 días:

```
Humano (autoridad final, venta)
    ↓
Gemini: evidencia (capturas, huecos)  →  notes.md
    ↓
ChatGPT: copy / mensaje / propuesta   →  offer.md
    ↓
Grok: recorte / riesgos / no-build    →  decisions.md
    ↓
Humano: aprueba
    ↓
Composer: construye lo aprobado       →  PR
    ↓
Humano: QA en preview + cliente
```

- **Decide:** el fundador. La IA propone.
- **Investiga:** Gemini.
- **Critica:** Grok.
- **Construye:** Composer.
- **Valida:** humano (+ checklist). Copy: Grok no firma legal.
- **Contradicciones:** gana el **artefacto en Git** (`decisions.md`) + el humano. Si marketing pide 12 páginas y el presupuesto es v1, gana el alcance cerrado. No se vota entre modelos.

**Por qué no A:** un director-IA tiene incentivo a construir o a adular. Sois 1 persona: el “orquestador” sois vosotros, 15 minutos, un spec.

**Trade-off:** D exige disciplina de archivos. Sin ella, recaéis en C (caos) o A (el chat más convincente manda).

---

## 9. SOURCE OF TRUTH

| Capa | Qué | Dónde | Por qué |
|--|--|--|--|
| **SOURCE OF TRUTH** | Código, SiteSpec, playbook, decisiones, checklist QA | **Git** | Auditable; sobrevive a cualquier modelo |
| **KNOWLEDGE BASE** | Objeciones, post-mortems, patrones CRO | Git (mismo contenido). Obsidian **solo** como UI si se usa a diario | No segunda verdad |
| **PROJECT STATE** | Fase del lead/cliente, horas, € | Hoja (Notion o Sheets). No Agency OS | 1 persona |
| **EXECUTION** | Cursor/Composer, Vercel, n8n luego | Esos runtimes | No son memoria |

**[DO NOT BUILD]** RAG. **[DO NOT BUILD]** Notion como SOT del spec.

Chats = borrador. Si no está en Git o en la hoja, no ocurrió.

---

## 10. RIESGOS

Orden por **prioridad** (impacto × probabilidad cualitativa; sin cifras falsas):

| # | Riesgo | Tipo | Prob. | Impacto | Prioridad |
|--|--|--|--|--|--|
| 1 | 10 bloques de fábrica antes de vender | sobreing. / ops | Alta | Alto | 1 |
| 2 | 0 conversaciones / miedo al outbound | comercial | Alta | Alto | 1 |
| 3 | Prometer agenda / ads sin palancas | comercial / legal | Media | Alto | 1 |
| 4 | Dental saturado de especialistas | comercial | Media-alta | Alto | 2 |
| 5 | Scope de contenidos/fotos que mata el precio cerrado | ops | Alta | Alto | 2 |
| 6 | Competir a 299 €/mes | comercial | Media | Alto | 2 |
| 7 | ChatGPT Go tratado como cerebro / comité de 4 | IA / ops | Alta | Medio | 2 |
| 8 | RGPD / datos de salud / WhatsApp clínico | seguridad / legal | Media | Muy alto | 2 |
| 9 | Composer construye OS porque puede | técnico | Media | Alto | 3 |
| 10 | Primer cliente “gratis eterno” sin retainer | comercial | Media | Medio | 3 |

---

## 11. QUÉ NO HARÍA (30 días)

1. SiteSpec “completo” + motor.  
2. 30 componentes.  
3. Design system.  
4. Agency OS en Notion.  
5. 15 n8n.  
6. 10 agentes.  
7. RAG.  
8. CRM propio / Supabase “por si acaso”.  
9. Esperar a la landing de marketing perfecta para hacer outbound.  
10. Cotizar 4.900 € o 299 €/mes **sin** haber oído el valor de un paciente.

Bonus que también quema dinero: Fiverr; marketplace de templates; multi-ICP; garantía de resultados; enviar historiales a un LLM.

---

## 12. DECISIÓN FINAL

**DECISIÓN:**  
Apuesta de 30 días = **Captación Dental v1** (1 sede, España). Vender sistema medible en 14+14 días. Fábrica = SiteSpec corto + starter + checklist + Git. El resto de la lista del fundador **no** se construye antes del cliente 1. Dental se valida con conversaciones; si no hay dolor+pago, se mata el ICP, no se consuela con infraestructura.

**PRÓXIMO PASO:**  
Mañana: 1 página de oferta + 15 clínicas en Maps + 8 mensajes/llamadas. SiteSpec plantilla por la tarde (≤2 h). Cero componentes nuevos.

**MAYOR RIESGO:**  
Construir la fábrica para no vender. Segundo: prometer pacientes.

**MAYOR HIPÓTESIS:**  
H1 — el comprador paga un sistema de captación, no una web ni una plataforma de IA; dental aguanta un ticket por encima de 299 €/mes si el tratamiento caro está claro.

**[DO NOT BUILD]:**  
Agency OS, 30 componentes, design system, 15 n8n, 10 agentes, RAG, CRM propio, QA automático total, deploy “completo”, marketplace, software propio.

---

**Mañana por la mañana, si yo firmo el P&L:**  
Café, lista de 40 clínicas, mensaje corto sobre un defecto observable (móvil, WhatsApp, CTA), 8 contactos antes de mediodía. Después, una página de oferta. No abro Notion “OS”. No abro n8n. No abro un debate multimodelo. Si a las 13:00 no he hablado con un humano que pague dentistas, el día ha fallado, da igual lo elegante que sea el spec.


---

# RESPUESTA — OPENCODE

# MULTIMODEL BENCHMARK — RESPUESTA

---

## 1. DIAGNÓSTICO

**El verdadero problema no es técnico ni comercial: es de secuencia.** Tenéis capacidad de entrega asumida y tres precios de referencia del mercado observados. Lo que no tenéis es **una sola conversación de venta real**. El debate "fábrica primero vs. vender primero" está mal planteado: la fábrica correcta no puede diseñarse hoy porque nadie sabe todavía qué partes de una web de clínica se repiten, cuántas horas cuesta cada fase y qué fricción genera el cliente. Esa información solo existe después de entregar 3–5 proyectos. Construir la fábrica ahora no es acelerar el futuro: es apostar el trimestre a una arquitectura sin datos.

**Información que falta** (y no puedo inventar):
- Disposición real a pagar y elasticidad de precio en el nicho. Los competidores (4.900€ web premium; 299€/mes web+SEO; 1.200€/mes landing+campañas) son **[FACT]** como datos proporcionados, pero no sabemos sus márgenes, volumen, churn ni si capturan demanda o la educan.
- Qué canal de adquisición funciona *para vosotros*.
- Tiempo real de entrega por fase (base de cualquier productización).
- Grado de repetibilidad estructural entre clínicas (% de componentes compartidos).

**Hipótesis principales:**
1. **[HYPOTHESIS]** Una clínica compra "captación medible" mejor que "web bonita", y eso permite posicionar por valor y no por hora.
2. **[HYPOTHESIS]** Un patrón único de web de clínica cubre ≥60% de cada proyecto futuro.
3. **[HYPOTHESIS]** Outbound personalizado (auditoría en vídeo) genera conversaciones en <30 días sin paid ads.
4. **[HYPOTHESIS]** El precio óptimo está entre el competidor low-cost y el premium.

**Supuestos que hago:** **[ASSUMPTION]** las 40h/semana son realmente disponibles y no compatibles con otro empleo a tiempo completo; **[ASSUMPTION]** el nivel técnico declarado permite entregar una landing de calidad en ~15–20h; **[ASSUMPTION]** el fundador puede hacer ventas (llamar, hablar, cerrar). Si alguno falla, el plan cambia.

**[RISK]** Diagnóstico central: el mayor enemigo no es la competencia, es el **meta-trabajo** — la sensación productiva de construir infraestructura mientras no ocurre ninguna venta.

*(~330 palabras)*

---

## 2. DECISIÓN ESTRATÉGICA

| Pregunta | **DECISION** |
|---|---|
| ¿Qué vender primero? | **Una sola cosa**: "Sistema de Captación de Pacientes" = landing de tratamiento estrella + respuesta automática <1 min (WhatsApp/email) + aviso al centro + panel simple. Outcome, no "web". |
| ¿A quién? | Clínicas dentales privadas en España, 1–3 sedes, dueño/a como decisor, con tráfico o gasto en ads existente. |
| ¿Con qué propuesta? | *"Cada paciente atendido en menos de 1 minuto. Landing lista en 14 días. Precio cerrado."* |
| ¿Qué NO vender todavía? | SEO mensual, CRO formal, agentes IA como producto, CRM como servicio, branding, mantenimiento genérico, software propio, templates a terceros. Cada uno añade superficie de venta sin evidencia de demanda. **[DO NOT BUILD]** como oferta. |
| ¿Qué construir? | Máximo 5 días de build en todo el mes: landing propia v0, **un** template base de clínica, intake form, checklist QA, plantilla de propuesta, registro de horas. Nada más. |
| ¿Qué NO construir? | Ver sección 5 y 11. Resumen: toda la lista de los 10 ítems del fundador queda aplazada o cancelada. |

**Trade-off clave:** la persona técnica tiene razón en que cada proyecto manual genera cierta deuda — pero esa deuda se controla con disciplina barata (un repo template, estructura fija, checklist), no con plataforma. La deuda real hoy es **cero clientes**, y esa no se paga con código.

---

## 3. PLAN DE 30 DÍAS

**Regla operativa: 40% venta, 40% entrega, 20% activos. Prohibido superar 5 días totales de construcción.**

### Semana 1 — Estar vendiendo al día 5
- **Objetivo:** oferta definida, presencia mínima, primeros contactos.
- **Tareas:** oferta+pricing escritos (0,5d) · landing propia v0 sobre template existente (1,5d) · lista de 100 clínicas desde Google Maps, manual (0,5d) · pitch, propuesta tipo, formulario Tally, checklist QA (1d) · mapear 30 contactos personales y pedir intros específicas (0,5d) · primeras 10 auditorías vídeo de 3 min (1d).
- **Horas:** ~38h · **Entregables:** landing live, lista ICP, 40 contactos tocados.
- **Éxito:** ≥3 llamadas agendadas y ≥1 intro caliente.

### Semana 2 — Primer cliente firmado
- **Objetivo:** contrato nº1 con anticipo cobrado.
- **Tareas:** 40 auditorías más · llamadas · propuestas · cierre con precio fundador · kickoff cliente 1.
- **Horas:** ~36h · **Éxito:** 1 firma + anticipo. Si a día 14 hay 0 llamadas: cambiar mensaje (no el nicho) y doblar volumen.

### Semana 3 — Entrega #1 + venta sostenida
- **Objetivo:** lanzar proyecto 1 en ≤14 días desde kickoff; mantener pipeline.
- **Tareas:** build cliente 1 (15–20h) registrando horas por fase · QA con checklist · handoff en Loom · 20 auditorías nuevas · 2 alianzas contactadas (gestorías, agencias de ads locales).
- **Horas:** ~38h · **Éxito:** sitio live + horas registradas + pipeline ≥3 conversaciones.

### Semana 4 — Entrega #2 + decisión GO/NO-GO
- **Objetivo:** segundo cliente en producción; informe de aprendizaje.
- **Tareas:** build cliente 2 · consolidar métricas de funnel y horas · documento GO/NO-GO contra gates explícitos (≥3 cierres, margen ≥50%, horas decrecientes, % reutilización ≥60%).
- **Horas:** ~34h · **Éxito:** decisión documentada, no sentida.

**Total ≈ 126h de 160 disponibles** — el buffer es deliberado: la semana 3–4 siempre colisiona.

---

## 4. PRODUCTO / OFERTA

| Campo | Definición |
|---|---|
| **ICP** | Clínica dental privada, España, 1–3 sedes, 2–20 empleados, dueño-decisor, ya invierte (o intentó invertir) en captación |
| **Problema** | Observado, no generalizado: tráfico mal explotado, formularios con fricción, CTAs débiles, seguimiento lento → fugas silenciosas |
| **Promesa** | Respuesta a cada solicitud en <1 minuto. Landing en 14 días. Precio cerrado. |
| **Entregables** | Landing 1 página (tratamiento estrella) · formulario corto · autorespuesta WhatsApp/email · aviso al centro · panel de leads · Loom de handoff |
| **Duración** | 14 días naturales desde kickoff con materiales completos |
| **Pricing** | **[HYPOTHESIS]**: core **1.500€** (precio lista) / **750€ fundador** (primeros 5, a cambio de testimonial + caso de estudio). Retainer posterior 200–400€/mes |
| **Upsells** | Gestión de campaña inicial · conexión de reserva online · web multipágina completa tras la landing |

**Sobre el precio — cómo lo validaría, no cómo lo invento:** los tres precios de competidores son anclas externas, no pruebas de viabilidad. Validación: (1) presentar 1.500€ sin descuento a los primeros 5 prospectos y registrar objeciones literales; (2) alternar anclas 1.500€/2.400€ en propuestas durante 2 semanas; (3) no fijar precio definitivo hasta 3 cierres. **[FACT]** No existe información suficiente hoy para afirmar un precio de mercado correcto.

**Retainer potencial:** solo prometer optimización mensual cuando existan datos propios de conversión del cliente 1. **[HYPOTHESIS]** el attach rate alcanzable es ≥40%.

---

## 5. DIGITAL FACTORY MVP

| Elemento | Decisión | Justificación |
|---|---|---|
| Landing propia | **BUILD NOW** | Vendedor 24/7 + primer dogfood |
| 1 template base de clínica (mínimo) | **BUILD NOW** | Evita improvisar total sin crear plataforma (1,5 días máximo) |
| Intake form (Tally) | **BUILD NOW** | Define gratis los campos de la futura SiteSpec |
| Checklist QA + plantilla propuesta | **BUILD NOW** | Calidad sin software |
| Registro horas/fricciones (board simple) | **BUILD NOW** | Es literalmente la especificación de la fábrica futura |
| Git/GitHub/Vercel/n8n básicos | **BUILD NOW** | Ya existen, coste ~0 |
| Vault Obsidian (notas + decision log) | **BUILD NOW** | Coste cero, memoria del negocio |
| SiteSpec completo | **BUILD AFTER CLIENT 3** | Con <3 proyectos no sabes qué campos importan; diseñarlos hoy es adivinar |
| Biblioteca formal de componentes | **BUILD AFTER CLIENT 3** | Antes: copiar-pegar entre repos. Formalizar cuando el patrón sea visible |
| Design system | **BUILD AFTER CLIENT 3** | Tokens básicos dentro del template sí; sistema no |
| QA automático (script Lighthouse) | **BUILD AFTER CLIENT 1** | Solo si la checklist manual consumió >2h/proyecto |
| CRM dedicado | **BUILD AFTER CLIENT 3** | Board simple basta hasta 10 oportunidades |
| Agency OS en Notion (relacional) | **DO NOT BUILD** | Es burocracia disfrazada de sistema |
| 15 automatizaciones n8n | **DO NOT BUILD** | Las 2 necesarias (lead→aviso→autorespuesta) se copian por cliente en <1h |
| 10 agentes especializados | **DO NOT BUILD** | Agentes permanentes para tareas no validadas = coste sin retorno |
| RAG / base vectorial | **DO NOT BUILD** | Con <100 documentos, búsqueda nativa supera a un RAG |
| Deployment totalmente automatizado | **BUILD MUCH LATER** | Vercel ya automatiza lo necesario |
| Software propio / templates para vender | **DO NOT BUILD** | Nadie compra templates de alguien sin marca distribuida |

---

## 6. ARQUITECTURA (mínima, una sola pila)

- **Frontend:** Astro + Tailwind. **[DECISION]** Sitios de contenido, casi estáticos: menos JS, builds rápidos, fácil de clonar por cliente. Se congela la pila 90 días. *(Next.js solo si algún proyecto exige app-like.)*
- **CMS:** ninguno. Contenido en el repo. **[HYPOTHESIS]** Los clientes del ICP no van a autogestionar contenido el primer año. Reevaluar tras cliente 3.
- **Forms:** Tally → webhook → n8n.
- **Base de datos:** Supabase, una tabla `leads`. Sin auth, sin relaciones. *(Alternativa aún más rápida: Google Sheet vía n8n; Supabase evita migración posterior.)*
- **Automatización:** n8n con 1 flujo: lead → aviso Telegram/WhatsApp al centro + email autorespuesta + fila en BD.
- **Analytics:** GA4 + Search Console (coste 0) + Looker Studio para el reporte al cliente. Privacy-first analytics como diferenciador de pago más adelante.
- **CRM:** board en Notion/Airtable. HubSpot free cuando haya >10 oportunidades vivas.
- **Git:** 1 repo template + 1 fork por cliente. Historial limpio por proyecto.
- **Deploy:** Vercel hobby, preview por branch, dominio del cliente apuntando.
- **Testing:** checklist manual + Lighthouse documentado + axe manual. Sin suites.
- **IA:** suscripciones existentes para copy/revisión. Ninguna API de IA dentro del producto hasta venderla explícitamente como servicio.

**Coste operativo estimado: 0–30€/mes** (tiers gratuitos + dominio + email). **Trade-off asumido:** renuncias a multi-tenant, autoservicio del cliente y tests automatizados — todo ello irrelevante hasta tener ingresos.

---

## 7. IA MULTIMODELO

**[ASSUMPTION]** Asigno roles provisionales por razonamiento funcional; no he verificado benchmarks comparativos actuales de estos modelos, así que estos papeles se revisan a las 2 semanas con experiencia propia.

| Modelo | Papel | Por qué ahí |
|---|---|---|
| **Composer 2.5 (Cursor)** | Construcción | Único con contexto del repo; el código pasa por él o no existe |
| **ChatGPT Go** | Redacción comercial + editor | Propuestas, emails outbound, copy de landings, claridad |
| **Gemini Flash** | Investigación + volumen | Resumir auditorías de webs, variantes de copy, análisis largo rápido |
| **Grok** | Crítico adversario, puntual | Atacar propuestas y ángulos antes de enviarlos. Uso episódico, no diario |

**Reglas de revisión:** Grok critica a ChatGPT (mensajes); el fundador critica todo lo demás. Nada sale sin gate humano.

**Cuándo NO usar un modelo:** decisiones de precio/posicionamiento (juicio humano sobre datos propios); comunicación directa con clientes sin revisión; cualquier dato de pacientes (categoría especial RGPD — **[FACT]** el art. 9 RGPD protege datos de salud; no deben tocar prompts de terceros).

**Siempre humanos:** llamadas, negociación, cierre, QA final, relación con el cliente, decisiones de dinero.

---

## 8. ORQUESTACIÓN

**DECISION: Opción D — pipeline por fases con transferencia mediante artefactos, con el fundador como autoridad final.**

Descarto A y C (sin árbitro humano, sesgo sin crítica), descarto B (dos "direcciones" artificiales para una empresa de una persona es sobrecarga, no estructura). D gana porque: produce artefactos verificables (brief, spec, copy, código, checklist), cada gate es aprobable por un humano en segundos, no requiere agentes permanentes, y escala después si hiciera falta.

| Rol | Quién |
|---|---|
| **Decide / autoridad final** | El fundador, siempre |
| **Investiga** | Gemini Flash + búsqueda web → entrega *brief de investigación* |
| **Critica** | Grok ataca propuestas; checklist + Lighthouse atacan el producto |
| **Construye** | Composer (código), ChatGPT (texto) → entregan artefactos, no opiniones |
| **Valida** | Checklist manual + el fundador en cada gate |

**Contradicciones:** no se debaten entre modelos. Dos modelos discrepando en algo material = señal de incertidumbre → se escala al fundador, que decide y registra el criterio en Obsidian (decision log). Una línea, cero reuniones.

---

## 9. SOURCE OF TRUTH

| Capa | Herramienta | Contenido | Por qué |
|---|---|---|---|
| **SOURCE OF TRUTH** | Git/GitHub | Código, template, propuestas tipo, checklist — todo texto plano versionado | Portable, auditable, coste 0, imposible que diverja silenciosamente |
| **KNOWLEDGE BASE** | Obsidian (vault en git) | Playbooks, decision log, aprendizajes, objection handling | Búsqueda nativa basta con <100 notas; RAG sería sobreingeniería |
| **PROJECT STATE** | Notion/Airtable (1 board) | Pipeline comercial, estado de entregas, horas por fase | Cambia a diario; no necesita historial estricto |
| **EXECUTION ENVIRONMENT** | Local + Cursor + Vercel previews | Nada productivo fuera de Git | Reproducibilidad |

**Regla dura:** **ningún conocimiento valioso vive solo dentro de un chat de IA.** Si merece la pena, ese mismo día va a Obsidian. Los chats son caché, no memoria.

---

## 10. RIESGOS (ordenados por prioridad = P×I)

| # | Riesgo | Tipo | Prob. | Impacto | Mitigación |
|---|---|---|---|---|---|
| 1 | Meta-trabajo: mes consumido en fábrica | Sobreingeniería | Alta | Alto | Tope duro de 5 días de build; lista DO NOT BUILD visible |
| 2 | 0 cierres en 30 días (propuesta/precio descalibrados) | Comercial | Media-alta | Alto | Red caliente primero; alternar anclas de precio; pivotar mensaje al día 14 si 0 llamadas |
| 3 | Publicidad sanitaria: claims no conformes | Legal | Media | Alto | **[FACT]** La publicidad de servicios sanitarios está regulada en España con particularidades autonómicas — copy neutro, sin promesas de resultado clínico, verificación con profesional antes de escalar |
| 4 | RGPD: formularios de clínicas tratan datos de salud (art. 9) + outbound | Seguridad/Legal | Media | Alto | Minimización, consentimiento claro, bases legales correctas, asesoría puntual |
| 5 | Fundador saturado (venta+entrega colisionan) | Operativo | Alta | Medio | Máx. 2 clientes simultáneos; buffer de ~34h/mes ya previsto |
| 6 | Sobreingeniería encubierta ("SiteSpec solo un poco") | Técnico | Alta | Medio | Gates: nada de plataforma antes de cliente 3 |
| 7 | Template percibido como genérico → objeción de diferenciación | Comercial | Media | Medio | Personalización fuerte solo en hero, oferta y fotos (donde se percibe) |
| 8 | Copy IA inconsistente en ámbito clínico | IA | Media | Medio | Gate humano obligatorio, tono definido, ejemplos propios |
| 9 | Stack elegido equivocado y frena después | Técnico | Baja-media | Medio | Pila única congelada 90 días; migrar es barato con sitios pequeños |
| 10 | Webhooks/spam/credenciales n8n expuestas | Seguridad | Media | Bajo-medio | Secretos en variables, honeypot + rate limit en forms |

---

## 11. QUÉ NO HARÍAS (top 10 pérdidas de tiempo/dinero)

1. **[DO NOT BUILD]** SiteSpec completo antes de 3 clientes.
2. **[DO NOT BUILD]** Design system y biblioteca de 30 componentes.
3. **[DO NOT BUILD]** Agency OS relacional en Notion (dashboards, bases enlazadas).
4. **[DO NOT BUILD]** 15 automatizaciones n8n pre-construidas.
5. **[DO NOT BUILD]** 10 agentes especializados u orquestador multi-agente.
6. **[DO NOT BUILD]** RAG / base vectorial / "memoria corporativa".
7. **[DO NOT BUILD]** QA automático y deployment custom.
8. **[DO NOT SELL]** SEO mensual, CRO formal, branding, agentes-como-producto: catálogo inflado mata el foco de venta.
9. Paid ads propios antes de validar mensaje orgánico con ≥100 contactos.
10. Contratar, comprar tools de pago, cambiar de nicho a mitad de mes, o rediseñar la landing propia más de una vez.

---

## 12. DECISIÓN FINAL

**DECISIÓN:**
Vender **una** oferta — "Sistema de Captación de Pacientes" (landing + respuesta <1 min + aviso + panel) — a clínicas dentales privadas españolas, entregada manualmente sobre **un** template mínimo. Precio lista 1.500€, fundador 750€ (validando ambos anclas). Máximo 5 días de construcción en el mes. Todo lo demás de la lista del fundador: aplazado hasta cliente 3 o cancelado.

**PRÓXIMO PASO:**
Hoy mismo: abrir Google Maps, listar 25 clínicas de tu ciudad, grabar 10 auditorías-vídeo de 3 minutos y enviarlas antes del mediodía de mañana. La landing propia va esta semana; el outbound empieza **antes** de que esté perfecta.

**MAYOR RIESGO:**
Que el mes se consuma construyendo infraestructura (meta-trabajo) en lugar de acumular conversaciones de venta. Es el riesgo #1 y es interno, no competitivo.

**MAYOR HIPÓTESIS:**
Que una clínica dental privada española paga 750–1.500€ por un sistema de captación entregado en 14 días por un proveedor sin reputación previa. Si esto falla, nada de la fábrica importa.

**[DO NOT BUILD]:**
SiteSpec completo · design system · biblioteca de componentes formal · Agency OS · agentes permanentes · RAG · QA automático · deployment custom · software propio · catálogo multiservicio.

**Si yo fuera responsable del resultado económico, mañana por la mañana:** abro Google Maps, hago la lista, grabo y envío 10 vídeos de auditoría personalizados antes de comer, y por la tarde llamo a mis 5 contactos más cercanos a dueños de clínicas para pedir intros. Ni una línea de código, ni un componente, ni un agente hasta tener la primera conversación agendada. El ingreso no nace de la fábrica; la fábrica nace del ingreso.


---

# RESPUESTA — CHATGPT GO

# MULTIMODEL BENCHMARK — DIGITAL FACTORY 01
## Evaluación: ChatGPT Go

Voy a tratarlo como una prueba real de decisión, no como una explicación de lo que “podría hacerse”.

---

# 1. DIAGNÓSTICO

### [DECISION]

El problema principal **no es tecnológico**. Es de **secuencia de construcción del negocio**.

Tenemos tres problemas simultáneos:

1. **Validación comercial insuficiente**: todavía no sabemos si clínicas dentales son el ICP correcto, qué problema pagan realmente por resolver ni qué oferta tiene mejor disposición a compra.
2. **Riesgo de sobreingeniería**: se pretende construir una fábrica casi completa antes de disponer de suficiente repetición para saber qué partes merece la pena estandarizar.
3. **Riesgo contrario**: vender proyectos completamente artesanales generaría deuda operativa y dificultaría convertir aprendizajes en activos reutilizables.

La solución no es elegir A o B.

Es construir una **factory mínima orientada al primer cliente**, donde cada pieza construida tenga una función simultánea:

> permitir vender/entregar ahora + generar reutilización después.

### [FACT]

Sabemos que:

- somos una sola persona;
- tenemos 40 h/semana;
- queremos conseguir el primer cliente rápidamente;
- tenemos capacidad para construir webs;
- no conocemos todavía CAC, LTV, churn, margen ni willingness-to-pay;
- no existe todavía suficiente histórico para justificar una infraestructura compleja.

### [ASSUMPTION]

Asumo que podemos crear y vender una primera landing/web de forma manual con ayuda de IA sin necesitar previamente la infraestructura completa.

### [HYPOTHESIS]

Las clínicas dentales pueden ser un buen primer vertical porque el problema observado combina web, conversión, captación y seguimiento de leads.

Pero **todavía no sabemos si compran una solución de “web + conversión + leads” en lugar de simplemente una web**.

### [EXPERIMENT]

Durante los primeros 30 días debemos convertir las principales incertidumbres comerciales en conversaciones y ofertas reales, no en más infraestructura.

---

# 2. DECISIÓN ESTRATÉGICA

## [DECISION]

### Vender primero:

**Landing/Web de conversión para clínicas dentales privadas**, no “servicios digitales” genéricos.

La propuesta inicial sería aproximadamente:

> **Una web/landing diseñada para convertir el tráfico de una clínica en solicitudes de pacientes, con foco en claridad de oferta, móvil, CTA y seguimiento del lead.**

No vendería inicialmente:

- IA;
- agentes;
- RAG;
- “transformación digital”;
- Agency OS;
- automatización como producto principal;
- software propio.

La IA y automatización son **mecanismos internos de producción**, no necesariamente la propuesta de valor inicial.

### [HYPOTHESIS]

El posicionamiento más interesante puede ser:

**“No te hacemos simplemente una web. Construimos una experiencia orientada a convertir visitas en oportunidades de pacientes.”**

Pero hay que validarlo frente a:

- web premium;
- web + SEO;
- landing + paid acquisition;
- alternativas internas de las clínicas.

---

## Qué vendería

### Producto inicial

**Dental Conversion Website / Landing**

Con:

- estrategia inicial;
- estructura de conversión;
- diseño;
- desarrollo;
- responsive;
- formularios;
- CTA;
- analytics básico;
- integración de leads;
- QA;
- deployment.

### [DO NOT BUILD]

No vendería inicialmente una promesa de:

> “Te generaremos X pacientes.”

No tenemos datos suficientes para garantizar ese resultado.

---

# 3. PLAN DE 30 DÍAS

## Semana 1 — Validación + oferta

**Objetivo:** tener algo vendible y empezar conversaciones.

### Tareas

- definir ICP concreto;
- crear oferta v0.1;
- analizar competidores proporcionados;
- crear landing propia;
- preparar 1 demo;
- crear lista inicial de potenciales clientes;
- iniciar outreach;
- hablar con clínicas.

### Horas

| Actividad | h |
|---|---:|
| Oferta/ICP | 5 |
| Landing propia | 8 |
| Demo/template inicial | 10 |
| Research | 5 |
| Outreach | 10 |
| Iteración | 2 |
| **Total** | **40** |

### Criterio de éxito

No sería simplemente “landing terminada”.

**[DECISION]** El KPI principal de la semana es generar conversaciones comerciales reales.

---

# Semana 2 — Venta + primera estandarización

**Objetivo:** conseguir una oportunidad comercial suficientemente seria para vender.

Construiría:

- intake básico;
- estructura SiteSpec v0;
- componentes realmente utilizados por la demo;
- checklist QA;
- proceso de entrega.

No construiría 30 componentes.

### 40 horas aproximadas

- 15 h ventas/outreach
- 10 h conversaciones/propuestas
- 10 h mejorar demo/oferta
- 5 h factory mínima

### Criterio

**[EXPERIMENT]**

Obtener evidencia sobre:

- objeciones;
- pricing;
- necesidades;
- lenguaje que utiliza el cliente;
- qué parte de la oferta genera interés.

---

# Semana 3 — Cliente 1 / delivery

Si hay cliente:

**cliente primero.**

La fábrica se construye **a partir de la entrega**.

Registrar:

- qué se repite;
- qué se rompe;
- qué información falta;
- qué componentes se reutilizan;
- qué tareas consumen tiempo.

### [DECISION]

Cada trabajo repetido dos veces se convierte en candidato a estandarización.

No necesariamente a automatización.

---

# Semana 4 — Productización

Con el aprendizaje del primer ciclo:

- mejorar SiteSpec;
- extraer componentes reutilizables;
- mejorar intake;
- mejorar QA;
- documentar SOP;
- mejorar oferta;
- preparar siguiente outbound.

### [EXPERIMENT]

Comparar:

**tiempo proyecto 1 vs proyecto 2**

y determinar dónde existe realmente la oportunidad de automatización.

---

# 4. PRODUCTO / OFERTA

## ICP

### [HYPOTHESIS]

Clínica dental privada española que:

- tenga una oferta económicamente relevante;
- ya tenga cierta actividad comercial;
- tenga una web mejorable;
- dependa de solicitudes/contactos;
- valore adquisición y conversión.

No intentaría inicialmente atacar “todas las clínicas dentales”.

---

## Problema

No:

> “Tu web es fea.”

Sino:

> **La web no está haciendo suficientemente bien su trabajo comercial.**

Problemas potenciales:

- propuesta poco clara;
- CTA débil;
- fricción;
- mala experiencia móvil;
- poca confianza;
- seguimiento deficiente.

---

## Promesa

### [DECISION]

Prometería:

> **Diseñar y lanzar una experiencia web orientada a convertir mejor el tráfico existente en oportunidades comerciales.**

No prometería resultados cuantitativos que todavía no podemos demostrar.

---

## Entregables

- discovery;
- estructura;
- copy;
- diseño;
- desarrollo;
- responsive;
- formularios;
- tracking;
- integración de leads;
- QA;
- deployment.

---

## Duración

### [HYPOTHESIS]

Objetivo operativo:

**1–2 semanas**

pero solamente como objetivo interno hasta conocer nuestro throughput real.

---

## Pricing

Los datos proporcionados nos dicen:

- competidor A: desde €4.900;
- competidor B: €299/mes;
- competidor C: €1.200/mes.

Eso **no permite inferir cuál es el precio correcto**.

### [DECISION]

Empezaría con un precio de prueba suficientemente sencillo de vender y con margen para aprender, pero **no presentaría una cifra como “precio de mercado”**.

Haría un experimento de pricing con 2–3 niveles de oferta durante las primeras conversaciones.

### [EXPERIMENT]

Medir:

- respuestas;
- reuniones;
- propuestas;
- aceptación;
- objeciones de precio.

Después ajustar.

---

## Upsells

Después de demostrar valor:

- CRO continuo;
- SEO;
- automatizaciones;
- lead management;
- analytics;
- mantenimiento;
- nuevas landings.

## Retainer

### [HYPOTHESIS]

El retainer debería venderse como:

> **optimización continua**

y no simplemente como “mantenimiento web”.

---

# 5. DIGITAL FACTORY MVP

| Elemento | Decisión | Motivo |
|---|---|---|
| SiteSpec | **BUILD NOW — v0.1** | Contrato mínimo de proyecto |
| 30 componentes | **BUILD AFTER CLIENT 1** | No sabemos cuáles reutilizaremos |
| Design system | **BUILD NOW — mínimo** | Necesario para consistencia |
| Intake | **BUILD NOW** | Reduce ambigüedad |
| n8n | **BUILD AFTER CLIENT 1** | Primero identificar workflows repetitivos |
| CRM propio | **DO NOT BUILD** | No es necesario inicialmente |
| Agentes especializados | **BUILD MUCH LATER** | Riesgo de agent sprawl |
| RAG | **DO NOT BUILD ahora** | No hay suficiente knowledge base |
| Base de conocimiento | **BUILD NOW — simple** | El aprendizaje sí debe conservarse |
| QA automático | **BUILD NOW — básico** | Reduce errores repetibles |
| Deployment automático | **BUILD AFTER CLIENT 1** | Primero delivery estable |
| Analytics | **BUILD NOW — básico** | Necesitamos medir |
| Agency OS completo | **BUILD AFTER CLIENT 3** | Estado prematuro |
| Supabase | **BUILD AFTER CLIENT 1** | No necesitamos DB propia para validar |
| Automatización completa | **BUILD MUCH LATER** | Primero observar |
| Templates | **BUILD NOW — 1 template** | Permite vender/mostrar capacidad |

### La regla fundamental

**[DECISION]**

No construiría infraestructura simplemente porque “algún día será útil”.

La construiría cuando:

> exista una repetición suficientemente clara cuyo coste justifique estandarizarla.

---

# 6. ARQUITECTURA MÍNIMA

Quiero evitar una arquitectura innecesariamente compleja.

```text
                    CLIENTE
                       │
                       ▼
                 LANDING / WEB
                       │
                       ▼
                    FORM
                       │
                 ┌─────┴─────┐
                 ▼           ▼
              EMAIL       CRM simple
                 │           │
                 └─────┬─────┘
                       ▼
                   ANALYTICS
```

Y producción:

```text
GitHub
   │
   ▼
Frontend
   │
   ▼
Vercel
   │
   ▼
Production
```

### Frontend

### [DECISION]

Usaría un stack web moderno y reutilizable, pero **no introduciría complejidad tecnológica que no tenga una razón comercial**.

La arquitectura concreta debe depender de las necesidades reales de los proyectos.

---

### Backend

Inicialmente:

**mínimo posible**.

Si una landing no necesita backend propio, no lo construimos.

---

### CMS

### [DO NOT BUILD]

No construiría un CMS propio.

Solo introduciría CMS cuando exista una necesidad real de edición frecuente por parte del cliente.

---

### Database

### [DO NOT BUILD]

No introduciría Supabase simplemente porque está disponible.

Puede entrar cuando tengamos:

- estados;
- datos;
- autenticación;
- leads;
- workflows;
- necesidades persistentes.

---

### Analytics

**BUILD NOW**

Necesitamos saber qué ocurre con los usuarios.

---

### Forms

**BUILD NOW**

Los formularios son parte central del producto.

---

### CRM

Inicialmente utilizaría una solución existente/manual.

**No construiría CRM propio.**

---

### Automation

Inicialmente manual + automatizaciones muy concretas.

n8n entra cuando exista una tarea repetitiva que lo justifique.

---

### Testing

Desde el primer proyecto:

- build;
- links;
- responsive;
- formularios;
- errores;
- performance básica;
- revisión visual.

Automatizar progresivamente.

---

### IA

IA como capa de producción, no como requisito arquitectónico del producto del cliente.

---

# 7. IA MULTIMODELO

Aquí quiero hacer algo importante:

**No asignaría todavía autoridad permanente basándome en opiniones previas.**

Estos son roles provisionales.

---

## ChatGPT Go

### [HYPOTHESIS]

Lo utilizaría principalmente para:

- estrategia;
- product;
- CRO;
- copy;
- síntesis;
- decisiones transversales;
- estructurar problemas.

No le daría autoridad unilateral.

### Revisión

Gemini/Grok según el tipo de decisión.

---

# Gemini 3.7 Flash

### [HYPOTHESIS]

Lo utilizaría especialmente para:

- research documental;
- contexto;
- análisis multimodal;
- estructuración de información;
- specs;
- documentación;
- síntesis de grandes cantidades de material.

### Revisión

Grok para challenge cuando la decisión sea importante.

---

# Grok 4.6

### [HYPOTHESIS]

Rol principal:

**Challenger / Red Team / Competitive Intelligence.**

Buscar:

- supuestos débiles;
- competencia;
- riesgos;
- alternativas;
- contradicciones;
- señales externas.

Pero:

**contrarian ≠ correcto.**

Sus críticas deben poder justificarse.

---

# Composer 2.5

Aquí sí asignaría un papel bastante claro.

### [FACT]

Es nuestro entorno de ejecución de código dentro de Cursor.

### [DECISION]

Principalmente:

- implementación;
- refactoring;
- debugging;
- integración;
- testing;
- Git;
- construcción de componentes;
- transformación de specs en software.

Pero no le pediría decidir por sí mismo:

> “¿Qué empresa debemos construir?”

---

# Cuándo NO utilizaría modelos

Esto es importante.

No utilizaría cuatro modelos para decidir algo trivial.

Ejemplo:

> “¿Qué nombre ponemos a este botón?”

No.

Tampoco usaría IA para decidir cosas que pueden verificarse automáticamente:

> “¿Compila?”

CI.

> “¿El enlace funciona?”

test/check.

> “¿El TypeScript tiene errores?”

compiler.

**[DECISION]**

La mejor arquitectura multimodelo no consiste en meter IA en todo.

---

# 8. ORQUESTACIÓN

## Elijo:

# D. Pipeline por fases con transferencia mediante artefactos

Pero con una modificación importante:

### El fundador conserva autoridad final.

No quiero:

```text
Gemini
   ↓
ChatGPT
   ↓
Grok
   ↓
Composer
```

como una cadena rígida.

Quiero:

```text
                    FUNDADOR
                       │
                       ▼
                 DECISIÓN / TASK
                       │
          ┌────────────┼────────────┐
          ▼            ▼            ▼
       Gemini       ChatGPT       Grok
       research     strategy      challenge
          │            │            │
          └────────────┼────────────┘
                       ▼
                 DECISION RECORD
                       │
                       ▼
                    Composer
                       │
                       ▼
                    Git/CI
                       │
                       ▼
                      QA
                       │
                       ▼
                   FUNDADOR
```

---

## Quién decide

### [DECISION]

**Tú.**

La IA puede recomendar y sintetizar.

La autoridad económica, comercial y de riesgo permanece en el fundador.

---

## Quién investiga

Principalmente:

**Gemini + Grok**, según disponibilidad de fuentes.

---

## Quién critica

**Grok** como challenger.

Pero las críticas también se validan.

---

## Quién construye

**Composer**.

---

## Quién valida

Diferenciaría:

### Validación automática

CI / tests / build / tooling.

### Validación estratégica

IA + fundador.

### Validación comercial

**fundador + cliente + datos reales.**

---

## Resolución de contradicciones

No:

> “gana el modelo más inteligente”.

Sino:

1. identificar la contradicción;
2. identificar qué supuesto produce cada posición;
3. determinar qué evidencia falta;
4. realizar experimento si es barato;
5. si no puede probarse, el fundador decide;
6. registrar la decisión.

---

# 9. SOURCE OF TRUTH

Esta separación es fundamental.

## SOURCE OF TRUTH

### **Git**

Contiene:

- código;
- SiteSpec;
- schemas;
- componentes;
- configuración;
- workflows versionados;
- tests;
- reglas ejecutables.

Si una decisión técnica afecta al sistema, debe terminar reflejada en Git cuando corresponda.

---

# KNOWLEDGE BASE

### **Obsidian / Markdown**

Contiene:

- decisiones;
- aprendizajes;
- SOPs;
- research;
- post-mortems;
- playbooks;
- principios.

No es la fuente del código.

---

# PROJECT STATE

Inicialmente:

### herramienta simple.

Puede ser Notion.

Más adelante:

### Supabase

cuando el estado operativo justifique una base estructurada.

Ejemplo:

```text
Client
Project
Phase
Status
Deadline
Owner
Blocker
Deliverables
```

---

# EXECUTION ENVIRONMENT

- Cursor
- Composer
- terminal
- Git
- GitHub
- Vercel
- n8n

Es donde **se ejecutan cosas**.

No es la memoria institucional.

---

# 10. RIESGOS

| # | Riesgo | Prob. | Impacto | Prioridad |
|---:|---|---|---|---|
| 1 | No conseguir clientes | Alta | Muy alto | 🔴 P0 |
| 2 | Sobreingeniería antes de validar | Alta | Muy alto | 🔴 P0 |
| 3 | Oferta poco diferenciada | Alta | Alto | 🔴 P0 |
| 4 | ICP incorrecto | Media/Alta | Muy alto | 🔴 P0 |
| 5 | Construir sin datos de repetición | Alta | Alto | 🔴 P0 |
| 6 | Dependencia excesiva de IA | Media | Alto | 🟠 P1 |
| 7 | Scope creep | Alta | Alto | 🟠 P1 |
| 8 | Deuda técnica por entregar demasiado rápido | Media | Alto | 🟠 P1 |
| 9 | Automatizar procesos que aún cambian | Alta | Medio/Alto | 🟠 P1 |
| 10 | Problemas de privacidad/seguridad en datos de leads | Media | Muy alto | 🟠 P1 |

### Riesgo adicional

[RISK]

Podemos construir una fábrica extremadamente eficiente para producir un producto que el mercado no quiere.

Ese es probablemente el riesgo estratégico más importante.

---

# 11. QUÉ NO HARÍA

Durante los próximos 30 días:

### [DO NOT BUILD] 1.
Un Agency OS completo.

### [DO NOT BUILD] 2.
10 agentes especializados.

### [DO NOT BUILD] 3.
Un RAG propio.

### [DO NOT BUILD] 4.
Un CRM propio.

### [DO NOT BUILD] 5.
15 automatizaciones n8n.

### [DO NOT BUILD] 6.
30 componentes antes de saber cuáles utilizamos.

### [DO NOT BUILD] 7.
Deployment totalmente autónomo sin historial suficiente.

### [DO NOT BUILD] 8.
Un sistema enterprise de microservicios.

### [DO NOT BUILD] 9.
Una plataforma SaaS propia para resolver problemas que todavía podemos resolver manualmente.

### [DO NOT BUILD] 10.
Un algoritmo de IA simplemente porque podemos incorporarlo al servicio.

Y añadiría una undécima:

### [DO NOT BUILD]

**Una arquitectura de orquestación compleja antes de demostrar que el trabajo multimodelo ahorra más tiempo del que cuesta coordinarlo.**

Este riesgo es especialmente relevante para nosotros.

---

# 12. DECISIÓN FINAL

## DECISIÓN:

**Construiría una oferta productizada de web/landing orientada a conversión para clínicas dentales y empezaría a vender inmediatamente.**

Paralelamente construiría únicamente una **Digital Factory v0.1**:

```text
1 ICP
+
1 oferta
+
1 template
+
SiteSpec mínimo
+
componentes reutilizables básicos
+
intake
+
analytics
+
QA
+
Git
```

Todo lo demás espera a que exista evidencia de repetición.

---

## PRÓXIMO PASO:

Mañana por la mañana:

### 1.
Cerrar la oferta v0.1.

### 2.
Crear una landing propia orientada a esa oferta.

### 3.
Crear un demo/template de clínica dental.

### 4.
Preparar un intake mínimo.

### 5.
Crear una lista inicial de clínicas.

### 6.
Comenzar outreach.

### 7.
Registrar todas las objeciones y preguntas.

### 8.
Solo después de las primeras interacciones decidir qué partes de la factory necesitan realmente construirse.

---

## MAYOR RIESGO:

**Construir una fábrica antes de demostrar que existe una demanda repetible.**

---

## MAYOR HIPÓTESIS:

**Las clínicas dentales privadas estarán dispuestas a pagar por una solución orientada a conversión y generación/gestión de oportunidades, y no únicamente por una web.**

Esto debe validarse comercialmente.

---

## [DO NOT BUILD]:

**La Digital Factory completa.**

Especialmente:

> RAG + 10 agentes + 15 automatizaciones + Agency OS + CRM propio + 30 componentes + deployment completamente autónomo.

Todavía no.

---

# Si yo fuera responsable del resultado económico mañana

Haría esto:

**08:00–10:00** → definir ICP + oferta + pricing experimental.

**10:00–14:00** → construir landing comercial.

**15:00–18:00** → crear demo/template dental.

**18:00–20:00** → preparar prospectos y outreach.

Y al día siguiente:

**vender.**

No pasaría las próximas dos semanas perfeccionando el SiteSpec.

El SiteSpec que construiría ahora tendría que ser **lo suficientemente bueno para hacer el primer proyecto**, no lo suficientemente sofisticado para gestionar 500.

---

# Resultado provisional de mi propia prueba

Y aquí hay una distinción importante para el benchmark.

No voy a decir:

> “He ganado.”

Pero sí puedo identificar **qué he intentado optimizar**:

### Prioridad 1
Ingresos + validación.

### Prioridad 2
Reutilización inmediata.

### Prioridad 3
Arquitectura reversible.

### Prioridad 4
Documentar aprendizaje.

### Prioridad 5
Automatizar únicamente lo que demuestre repetición.

Y mi decisión de orquestación es:

> **Pipeline por fases + artefactos como memoria + fundador como autoridad final + consejo multimodelo + Composer como ejecutor.**

No considero demostrado que **ChatGPT Go deba ser el Director de Orquesta**. Esa es precisamente una de las cosas que debe resolver el benchmark comparativo.


---

# RESPUESTA — GEMINI 3.7 FLASH

**Estado:** pendiente. Pegar aquí la respuesta completa cuando llegue, sin editar.

---

# RESPUESTA — COMPOSER 2.5

**Estado:** pendiente. Pegar aquí la respuesta completa cuando llegue, sin editar.

---
