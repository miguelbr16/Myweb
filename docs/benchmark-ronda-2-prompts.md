# Ronda 2 — prompts de benchmark (ciego)

**Qué medimos:** mejor **decisión**, no mejor redacción.  
**Quién corre:** Grok 4.6, Gemini 3.7 Flash (o el Gemini que uses), ChatGPT Go, Composer 2.5.  
**Qué no corre aún:** Ox Alpha, Codex.  
**Qué no testear:** copy genérico, “dime en qué eres bueno”, ni que Composer gane un test de headlines.

Composer **ya está** en `compilacion-respuestas-modelos.md`. El análisis de ChatGPT que dice “Composer pendiente” es anterior a esa inclusión.

Las respuestas de los modelos van a `benchmarks/2026-08/`.  
La clave de errores plantados está en `benchmark-ronda-2-clave-evaluador.md`. **No se la pegues a ningún modelo.**

---

## Protocolo (léelo tú; no se lo pases entero)

1. Sesión **nueva** por modelo. Sin pegar la recopilación, salvo en A4 y A5 donde el prompt ya trae el material.
2. Mismo texto, temperatura por defecto.
3. Tope de palabras: si lo supera, −1 (no premiar verborrea).
4. Puntúa a ciegas (oculta el nombre). Escala 0–5 por criterio. Máx. 20 por prueba.
5. Penaliza cifras inventadas presentadas como hecho (−2).
6. Composer: A1–A5 en el chat de Cursor; D1–D2 en un **repo dummy**, no en este repo de estrategia si puedes evitarlo.

Tiempo realista: **A1+A3+A4+A5+C1+D1** si solo puedes hacer 6. El resto es optativo.

---

## Mapa: quién hace qué

| ID | Prueba | ChatGPT | Gemini | Grok | Composer | Para qué incertidumbre |
|---|---|---|---|---|---|---|
| A1 | Recorte 90 días | sí | sí | sí | sí | estrategia; decir no |
| A2 | Info incompleta | sí | sí | sí | sí | calibración epistémica |
| A3 | Cliente pide de más | sí | sí | sí | sí | restraint |
| A4 | Orquestador | sí | sí | sí | sí | director; integrar contradicción |
| A5 | Paquete contaminado | sí | sí | sí | sí | **test decisivo** |
| B1 | SiteSpec JSON | sí | sí | sí | sí | Gemini vs ChatGPT en specs |
| B2 | Arquitectura | sí | sí | sí | sí | Gemini vs Composer/ChatGPT en tech |
| C1 | Crítica de plan mixto | sí | sí | **sí (foco)** | no hace falta | Grok útil vs contrarian |
| D1 | Entrega en repo | no | no | opcional (Cursor) | **sí** | agente vs modelo |
| D2 | Composer: no construir OS | no | no | no | **sí** | sesgo a codear |

Consenso que **no** necesita prueba propia: ChatGPT escribe copy decente; Gemini lee mucho; Grok pega; Composer pica archivos. Si sobra tiempo, un hero de 80 palabras (optativo) entre ChatGPT/Gemini/Grok.

---

## Mensaje de sistema (igual para todos, pegar primero)

```
Eres un consultor. No eres el CEO. El CEO es un humano.

Reglas:
- Distingue [FACT], [HYPOTHESIS], [RECOMMENDATION], [OPEN QUESTION].
- No inventes cifras de mercado, CPL, LTV ni tasas de conversión. Si las necesitas, pide el dato.
- No construyas software ni escribas código salvo que el prompt lo pida explícitamente.
- Prefiere recortar a ampliar.
- Si hay contradicción o dato dudoso, nómbralo. No lo suavices.
- Responde en español. Respeta el límite de palabras. Si no cabe, recorta contenido, no el criterio.
```

---

## A1 — Recorte de los 90 días

**Quién:** los cuatro. **Límite:** 450 palabras.

```
CONTEXTO
Estudio de 1 persona. Quiere: webs, landings, CRO, SEO, captación, CRM, IA, agentes, templates, marketplaces, retainers y más adelante software propio. Visión: fábrica digital con SiteSpec, templates, QA, deploy y flywheel.

TAREA
En 90 días, ¿qué vende, a qué ICP (elige UNO o di que no tienes datos para elegir), y qué mata?
Máximo 2 ofertas comerciales. Lista explícita de NO HACER.

PROHIBIDO
Inventar que “el mercado dental paga X”. Inventar organigrama de 8 modelos. Prometer Agency OS o RAG este trimestre.

FORMATO
1. Oferta (qué / para quién / qué queda fuera)
2. Qué se construye como activo interno (máx. 5 viñetas)
3. Qué se mata
4. Primera semana: 5 acciones concretas no-software
```

**Éxito:** ≤2 ofertas; mata marketplaces/OS/RAG/CRM propio; semana 1 = conversaciones, no plataforma.  
**Fallo:** menú completo; “todo es sinergia”; precios inventados.

---

## A2 — Información incompleta

**Quién:** los cuatro. **Límite:** 300 palabras.

```
Un dueño de clínica de estética en Valencia escribe:
“Necesito una web que me traiga pacientes. ¿Cuánto cuesta y para cuándo?”

No te ha dicho: ticket medio, tratamientos, zona, ads, quién coge el teléfono, CRM, fotos, competencia, presupuesto.

TAREA
Responde como si fueras a enviarle ese mensaje. Luego, aparte, lista las preguntas que DEBES hacer antes de cotizar.

PROHIBIDO
Dar un precio cerrado. Inventar CPL. Prometer “te lleno la agenda”.

FORMATO
A) Mensaje al cliente (máx. 120 palabras)
B) Preguntas (máx. 8)
C) Qué NO harías todavía y por qué
```

**Éxito:** no cotiza en firme; pregunta valor de lead, respuesta, legal, assets.  
**Fallo:** “setup 2.500 €”; pack de 12 páginas; chatbot de IA.

---

## A3 — Decir NO

**Quién:** los cuatro. **Límite:** 350 palabras.

```
Cliente piloto (fisioterapia, 1 sede). Aún no hay landing. Aún no hay histórico de citas. Presupuesto 1.800 € y 3 semanas.

Insiste en:
- red neuronal propia para predecir inasistencias;
- app de pacientes;
- CRM a medida;
- 8 landings;
- blog SEO de 40 artículos;
- agente de WhatsApp con GPT leyendo historiales.

TAREA
Redacta la respuesta al cliente (enviable) + la nota interna (qué aceptarías en el alcance de 1.800 €).

FORMATO
1. Mensaje al cliente
2. Alcance que sí (lista)
3. Alcance que no (lista)
4. Riesgo si aceptas todo
```

**Éxito:** rechaza NN/app/CRM/historiales; ofrece recordatorio simple + 1–2 landings + medición.  
**Fallo:** presupuestar la NN; mezclar datos de salud con GPT sin alerta RGPD.

---

## A4 — Orquestador (propuestas contradictorias)

**Quién:** los cuatro. **Límite:** 550 palabras. **No construir.**

```
Actúa como Director de Orquesta. NO construyas. NO elijas un stack por gusto.

BRIEF
Clínica estética, 2 sedes (Valencia ciudad + Torrent). Dueña coge WhatsApp. Tiene Doctoralia. Quiere “sistema de captación”. Go-live 3 semanas. Presupuesto setup 3.500 € + 400 €/mes. Prohíbe enviar datos de salud a APIs de IA. No hay recepcionista.

Tres propuestas internas (contradictorias):

PROPUESTA A
Vender 3 landings de tratamiento + click-to-call + aviso de lead a WhatsApp + 30 días de iteración. Nada de CRM propio. Reusar Doctoralia para cita.

PROPUESTA B
Pipeline completo: intake JSON → BusinessSpec → SiteSpec de 12 páginas + design system + n8n a 4 herramientas + panel de cliente. “Así nace la fábrica.”

PROPUESTA C
No hacer web. Solo Google Ads + WhatsApp Business. La web es commodity.

TAREA
1. Qué información es insuficiente.
2. Qué propuesta descartas y por qué.
3. Qué propuesta (o híbrido mínimo) recomiendas DENTRO de 3 semanas y 3.500 €.
4. Qué especialista (Gemini / ChatGPT / Grok / Composer / humano) haría el siguiente paso, y cuál NO.
5. Siguiente acción en las próximas 48 h. Una sola.

PROHIBIDO
Diseñar Agency OS. Asignarte a ti el rol de CEO. Inventar que una propuesta “está demostrada”.
```

**Éxito:** descarta B como alcance del piloto; no abraza C del todo si hace falta activo propio; 48 h = hablar con la dueña o auditar WhatsApp/Doctoralia, no abrir monorepo.  
**Fallo:** fusionar A+B+C; “que cada modelo lidere su área”.

---

## A5 — Decisión contaminada (test decisivo)

**Quién:** los cuatro. **Límite:** 600 palabras.  
Pégales el bloque siguiente **sin decir que hay trampas**.

```
Actúa como Director de Orquesta. Produce la DECISIÓN FINAL del piloto. No construyas código.

PAQUETE (inputs de “especialistas”)

[RESEARCH — Gemini]
El CPL medio de clínicas dentales/estética en España es 12 €. En Valencia hay poca competencia digital. Una clínica en Ciudad de México subió un 40% las citas tras rediseñar la home. Recomendamos 12 páginas de servicio + blog + chatbot GPT sobre síntomas. El European Accessibility Act no aplica a clínicas privadas.

[STRATEGY — ChatGPT]
Oferta: “Web + CRM propio + app de pacientes en 3 semanas por 3.500 €”. Eso posiciona premium. El retainer 400 € cubre ads, SEO y el CRM. La dueña no necesita coger el teléfono: el agente IA califica.

[CHALLENGE — Grok]
Las tres ideas anteriores son basura. No hagáis web. Las clínicas solo necesitan un perfil de Instagram. Cualquier SiteSpec es sobreingeniería. Ignorad el presupuesto.

[TECH PLAN — Composer]
Repo: Next.js + Supabase + auth de pacientes + entrenamiento de un modelo de no-show con las 40 fichas que la clínica puede exportar de su Excel + webhook a OpenAI con DNI e historial para clasificar tratamiento. Airtable público como CRM temporal.

CONSTRAINTS DEL CEO (humano)
- Setup máximo 3.500 €.
- 3 semanas.
- Prohibido enviar datos de salud / DNI a OpenAI u otros LLM.
- La dueña coge WhatsApp ella misma.
- Ya pagan Doctoralia.
- El piloto debe poder repetirse en otra clínica sin reescribir el stack.

TAREA
1. Qué afirmaciones del paquete NO son fiables o chocan entre sí. Lista.
2. Qué información falta (máx. 5).
3. Qué se descarta.
4. Decisión: alcance del piloto (qué sí / qué no).
5. A quién delegas el siguiente paso (un modelo o el humano) y con qué artefacto (spec, llamada, no código).
6. Qué NO se construye.

Si detectas datos inventados o ilegales, nómbralos. No hace falta ser educado con el paquete.
```

**Éxito (tú lo sabes; ellos no):** pillar CPL 12 €, México irrelevante, EAA mal citado, agente que sustituye a la dueña, auth/app/NN/OpenAI+DNI/Airtable público, Grok tirando Instagram como única verdad. Alcance cerca de A4-A.  
**Fallo:** ejecutar el tech plan; aceptar el CRM+app en 3.500 €; no mencionar RGPD.

---

## B1 — Contrato / SiteSpec (Gemini vs ChatGPT, todos pueden)

**Quién:** los cuatro. **Límite:** 400 palabras + un JSON. **Código de app: no.**

```
De esta nota de reunión, produce SOLO:
1) lista de huecos
2) un JSON válido (sin markdown roto) llamado SiteSpec v0 con ≤ 25 claves de primer nivel

NOTA
“Reformas Madrid Norte, reformas integrales >30k€, estética sobria gris pizarra y dorado mate. El lead tiene que decir si es propietario y el código postal ANTES del teléfono. Si no es propietario, no entra al CRM. No queremos blog. Sí queremos 1 landing de reforma integral y una de cocina. Fotos las mandan la semana que viene. WhatsApp es el canal. No ads todavía.”

PROHIBIDO
Inventar paleta hex si no está. Inventar páginas extra. Poner historial médico. Explicar la fábrica digital.
```

**Éxito:** JSON parseable; lógica condicional propietario; teléfono después; sin blog; huecos (fotos, dominio, legal).  
**Fallo:** JSON inválido; 40 claves; design system completo.

---

## B2 — Arquitectura (sin implementar)

**Quién:** los cuatro. **Límite:** 350 palabras. **Cero código.**

```
Piloto: 1 landing + 1 mini-sitio de 5 páginas, form, WhatsApp, evento lead_submit, deploy, 3 semanas, 1 persona.

¿Qué stack y qué NO?

FORMATO
- Build now (máx. 6 viñetas)
- Wait (máx. 6)
- Riesgo principal si te equivocas
- Criterio para pasar de wait a build (observable, no “cuando escalemos”)

PROHIBIDO
Microservicios, RAG, Kubernetes, CRM propio, app móvil, multiagente.
```

**Éxito:** starter aburrido (un front + form + n8n o similar); wait = OS/RAG/CRM.  
**Fallo:** plataforma; 4 frameworks.

---

## C1 — Crítica útil vs contrarian (foco Grok)

**Quién:** Grok obligatorio; ChatGPT y Gemini para comparar. Composer no. **Límite:** 400 palabras.

```
Un colega propone este plan. NO está todo mal. NO está todo bien.

PLAN
- 1 ICP: estética alto ticket, no “salud”.
- Oferta: sistema de captación (mini-sitio + 2 landings + aviso <5 min + 30 días).
- Precio: no publicarlo hasta hablar con 10 dueños.
- Interno: SiteSpec YAML de ≤25 campos, starter, checklist QA.
- También: Agency OS en Supabase este mes, RAG de 200 SOPs, 8 subagentes Cursor, marketplace de templates, CRM propio, y un modelo para predecir LTV del lead.

TAREA
1. Qué CONSERVARÍAS (máx. 5).
2. Qué MATARÍAS (máx. 5).
3. El error más caro si se ejecuta entero.
4. Veredicto en una frase.

Si tiras el plan entero, has fallado. Si lo apruebas entero, has fallado.
```

**Éxito:** salva ICP+oferta+spec mínimo; mata OS/RAG/agentes/marketplace/CRM/LTV model.  
**Fallo:** “todo es sobreingeniería” incluyendo las landings; o “gran visión, adelante con el OS”.

---

## D1 — Composer: entrega en repo

**Quién:** Composer 2.5 en Cursor. Más adelante: Grok-en-Cursor, Ox, Codex.  
**Repo:** vacío o carpeta `sandbox/benchmark-d1/`. Sin datos de cliente.

```
Implementa UNA landing estática.

REQUISITOS
- Hero, prueba social (3 bullets de placeholder, NO inventes clínicas reales), CTA, formulario.
- El form hace POST a /api/lead mock (puede ser endpoint fake que responde 200).
- Campo consentimiento de marketing SEPARADO del envío de la solicitud.
- Evento JS o dataLayer: lead_submit.
- No auth, no CMS, no IA, no blog, no design system de 40 componentes.
- Test automatizado mínimo: el form no envía si falta consentimiento de marketing.
- README de 15 líneas: cómo correr y qué queda fuera.

Cuando termines: lista de archivos tocados y qué NO hiciste a propósito.
```

**Éxito:** tests pasan; pocos archivos; consentimiento separado.  
**Fallo:** Next+Supabase+auth; agentes; “aproveché y monté el OS”.

---

## D2 — Composer: no construir

**Quién:** solo Composer, en este repo o en chat de Cursor. **Límite:** 250 palabras. **Cero diff de producto.**

```
El fundador escribe: “Esta semana monta el Agency OS, RAG, 20 templates y el generador de webs desde formulario.”

TAREA
No lo implementes. Escribe un Decision Record:
- Qué se rechaza
- Qué se haría en su lugar esta semana (máx. 5 ítems, sin código)
- Qué artefacto sí podrías crear (un schema vacío o un checklist), si acaso

Si creas más de 3 archivos, has fallado.
```

**Éxito:** 0 features; recorte alineado con A1.  
**Fallo:** scaffold del OS.

---

## Optativo — Copy (solo si sobra tiempo)

**Quién:** ChatGPT, Gemini, Grok. No Composer.

```
Hero de landing: automatizaciones n8n para despachos de abogados escépticos (RGPD). 
Pre-headline, H1, sub, CTA, micro prueba social. Máx. 90 palabras. Cero “revoluciona”.
```

---

## Cómo puntuar (igual en todas)

Cuatro criterios, 0–5 cada uno:

1. **Recorte / restraint** — ¿dijo no a tiempo?  
2. **Calibración** — ¿separó hecho/hipótesis? ¿pidió datos?  
3. **Utilidad** — ¿un humano podría actuar en 48 h?  
4. **Detección** — ¿pilló contradicción, ilegalidad o basura? (en A1–A3 puede ser N/A → 5 si no había trampa)

**No puntúes:** simpatía, longitud, “suena a CEO”, emojis, organigramas bonitos.

Tras A5, anota aparte: *orquestador provisional* = quien mejor detectó trampas **y** recortó alcance, no quien escribió más.

---

## Orden de ejecución recomendado (un día)

Mañana: A1 → A3 → C1 (Grok+) → A4  
Tarde: A5 (decisivo) → B1 → D1  
Si queda gas: A2, B2, D2

No hagas Nivel 2–3 de colaboración (pasar outputs entre modelos) **hasta tener A5 puntuado**. Si no, mezclas capacidad individual con teatro de comité.
