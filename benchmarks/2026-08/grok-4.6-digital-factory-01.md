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
