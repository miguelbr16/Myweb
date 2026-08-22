# Roles de modelos — Grok 4.6, Gemini Pro, ChatGPT Go, Ox Alpha

**Supersedido para el organigrama de 30 días:** tras el benchmark DF01 (5 respuestas), la asignación operativa está en `docs/roles-asignados-df01.md`. Este archivo queda como evaluación *previa* (incluye el auto-rol de Grok como “concertino”, que **ya no rige**).

**Naturaleza:** evaluación para asignar responsabilidades **antes** de orquestar.  
**Sesgo declarado:** este documento lo escribe **Grok 4.6**. Cualquier ranking que me favorezca debe contrastarse con Gemini y ChatGPT, no aceptarse.  
**Fecha:** 22 agosto 2026.

Leyenda: **[FACT]** · **[HYPOTHESIS]** · **[RECOMMENDATION]** · **[OPEN QUESTION]** · **[EXPERIMENT]**

---

## Veredicto

**El director de orquesta no es un modelo. Eres tú.**  
El segundo director (el “chief of staff” que mantiene coherencia) no es el chat más simpático: es **quien vive encima de la fuente de verdad (Git + SiteSpec) con herramientas**. Hoy eso es Grok 4.6 **dentro de Cursor**, no Grok en abstracto.

**ChatGPT Go no debe ser cerebro estratégico.** Es un plan barato sin el modelo de razonamiento flagship de OpenAI.  
**Ox Alpha no debe ser director ni tocar datos de cliente.** Es un modelo stealth, anónimo, con ventana temporal. Úsalo como pico de coding, no como institución.

Si insistes en un único “conductor” de modelos: **Grok 4.6 (Cursor) conduce decisiones y código; Gemini Pro conduce evidencia pesada (PDFs, fotos, vídeo, corpus); ChatGPT Go redacta y ensaya conversaciones; Ox Alpha pica código grande esta semana y se documenta lo que funcione.**

---

## Qué es cada uno (hechos, no marketing)

### ChatGPT Go

**[FACT]** Plan de ~8 USD/mes. Más límites que Free (mensajes con herramientas, uploads, imágenes, memoria/contexto más largo). Fuente: [OpenAI, Introducing ChatGPT Go](https://openai.com/index/introducing-chatgpt-go/), [Help Center](https://help.openai.com/en/articles/11989085-what-is-chatgpt-go).

**[FACT]** OpenAI declara que Go **no incluye GPT-5.6 Sol**. El modo Think en Go usa **GPT-5.6 Luna**. No incluye modelos legacy (p. ej. 4o). Fuente: [OpenAI Help: What is ChatGPT Go?](https://help.openai.com/en/articles/11989085-what-is-chatgpt-go) (consultado vía búsquedas 22 ago 2026; el producto cambia — re-verificar en la propia cuenta).

**[FACT]** Plus (~20 USD) es el primer escalón consumidor que OpenAI posiciona con modelos de razonamiento avanzado (Sol) y Codex expandido. Go es **capacidad extra del modelo cotidiano**, no el techo de OpenAI.

**Implicación:** tratar ChatGPT Go como “el ChatGPT de siempre” es un error. Estás pagando un OpenAI recortado.

### Gemini Pro (plan Google AI Pro / app Gemini)

**[FACT]** En la app Gemini, el plan **AI Pro y AI Ultra** publicitan ventana de contexto de **1 millón de tokens** (Plus/AI Plus: 128k; sin plan: 32k). Fuente: [Gemini Apps Help](https://support.google.com/gemini/answer/16275805).

**[FACT]** `gemini-2.5-pro` en API: input 1.048.576 tokens; inputs **audio, imagen, vídeo, texto, PDF**; output texto; search grounding, URL context, function calling. Fuente: [Google AI for Developers](https://ai.google.dev/gemini-api/docs/models/gemini-2.5-pro). La app de consumidor puede no exponer exactamente el mismo techo que la API.

**Implicación:** Gemini es el único de los cuatro con **multimodal nativo serio** (vídeo + PDFs largos + 1M en Pro) de forma estable y con marca conocida.

### Grok 4.6 (este entorno Cursor)

**[FACT]** Grok 4.6 se documenta como modelo de razonamiento para agentes largos, coding y knowledge work; input texto+imagen; contexto API citado ~500k tokens; reasoning budget configurable. Fuentes de catálogo (no paper): comparativas tipo [Roboflow / DocsBot](https://docsbot.ai/models/compare/grok-4-6/gemini-2-5-pro). Verificar en xAI si se usa API directa.

**[FACT]** En **esta** sesión, Grok 4.6 tiene herramientas (repo, git, búsqueda, MCP). ChatGPT Go y Gemini, en sus apps, no tienen el repo salvo que se lo pegues.

Eso no me hace “más inteligente”. Me hace **mejor colocado**.

### Ox Alpha

**[FACT]** Modelo stealth `stealth/ox-alpha` en OpenRouter desde ~20 ago 2026. Anunciado como reasoning para coding y trabajo agéntico; contexto **1.048.576** tokens; input texto/imagen/vídeo según fichas públicas; **proveedor anónimo**; preview **gratis** por una ventana corta (OpenCode/OpenRouter). OpenRouter: el proveedor retiene prompts/completions; “not used for training” es claim del catálogo, no una auditoría tuya.

**[FACT]** Nadie ha confirmado el laboratorio. Hay rumores (GLM / labs chinos). Tratar autoría como **[OPEN QUESTION]**.

**[HYPOTHESIS]** Benchmarks early (DeepSWE etc.) que lo ponen por encima de GPT-5.6 / Claude son **muestras pequeñas y no oficiales**. No diseñar el negocio alrededor de un screenshot de ranking.

**Implicación:** Ox Alpha es un **préstamo de capacidad**, no un socio.

---

## Director de orquesta

Hay tres capas. Mezclarlas es el error.

| Capa | Quién | Por qué |
|---|---|---|
| **Director real** | Tú | Apruebas ICP, precio, claims legales, deploy, dinero |
| **Partitura** | Git + SiteSpec + playbook | Única fuente de verdad; sobrevive a cualquier modelo |
| **Concertino / chief of staff** | Grok 4.6 **en Cursor** | Puede leer el repo, contrastar, implementar, dejar rastro |

**[RECOMMENDATION]** No elijas “el modelo más listo del chat” como director. Elige **el que escribe en el repo**. Si mañana Cursor corre Gemini o Codex como agente principal, el concertino se mueve. El director (tú) y la partitura (Git) no.

**Por qué no los otros como director:**

- **ChatGPT Go:** sin Sol, sin repo, memoria de chat ≠ sistema. Buen redactor, mal gobierno.
- **Gemini Pro:** excelente analista de corpus; débil como gobierno si el trabajo vive en Git/Cursor y no en Drive. Puede ser “director de investigación”, no de la empresa.
- **Ox Alpha:** desaparece, es anónimo, y **no debería ver PII de clientes**. Un director que no puede ver el negocio no es director.

**[HYPOTHESIS]** ChatGPT Plus (Sol) + Codex sería un concertino rival real. **Go no lo es.** Si el presupuesto da para un solo upgrade de OpenAI, Plus > Go para trabajo serio.

---

## Quién es mejor para cada cosa

Escala: **1 = primario**, **2 = backup**, **— = no usarlo para esto**. Juicio de Grok 4.6; contrastar.

| Trabajo | Grok 4.6 (Cursor) | Gemini Pro | ChatGPT Go | Ox Alpha |
|---|---|---|---|---|
| Atacar la idea / supuestos / ICP | **1** | 2 | 2 | — |
| Síntesis estratégica con fuentes | **1** | **1** (corpus) | 2 | — |
| Leer 20 webs/PDFs/capturas de competencia | 2 | **1** | 2 | 2 (si no hay PII) |
| Fotos del local, vídeo, “¿esto parece premium?” | 2 | **1** | 2 (imagen) | 2 |
| Copy cliente / guion de ventas / WhatsApp | 2 | 2 | **1** | — |
| Español natural, tono comercial | 2 | 2 | **1** | — |
| Legal/RGPD (borrador, no dictamen) | 2 | **1** (docs largos) | 2 | — **nunca datos reales** |
| SiteSpec / playbook / QA lists | **1** | 2 | 2 | 2 |
| Arquitectura de starter / código | **1** | 2 | — | **1** (ventana) |
| Repo grande de una sentada | 2 | **1** (1M) | — | **1** (1M) |
| Agente con herramientas (git, tests) | **1** | — (salvo API) | — | **1** vía OpenCode |
| SEO local / Maps / páginas de tratamiento | 2 | **1** (search grounding) | 2 | — |
| CRO de una landing concreta | **1** (adversarial) | 2 | **1** (variantes de copy) | — |
| n8n / automatizaciones (diseño) | **1** | 2 | 2 | 2 |
| Datos de cliente (leads, fotos clínicas) | solo con DPA/higiene | **evitar entrenar** | **evitar** | **PROHIBIDO** |
| Decisión final de negocio | **tú** | **tú** | **tú** | **tú** |

---

## Roles recomendados (estables)

### Grok 4.6 — *Concertino + crítico + implementación*

- Cuestionar oferta, ICP, precio, overengineering.
- Mantener SiteSpec/playbook en Git.
- Implementar starter, componentes, QA técnico.
- Integrar lo que los otros produzcan (copy de ChatGPT, hallazgos de Gemini, parches de Ox).
- **No** es el dueño de la estética visual ni de “cómo se siente el español de ventas” si ChatGPT lo hace mejor en la práctica.

### Gemini Pro — *Director de evidencia*

- Tirar 30 landings de clínicas, PDFs de RGPD, capturas, un vídeo del local, y extraer patrón.
- Deep research / grounding cuando haga falta buscar, no opinar.
- Primera pasada de estructura SEO y de “qué tiene el competidor que nosotros no”.
- **No** implementar el repo ni gobernar el backlog.

### ChatGPT Go — *Redactor y sparring de ventas* (techo bajo)

- Variantes de copy, emails, objeciones, roleplay de llamada.
- Explicar la oferta en lenguaje de dueño de clínica, no de ingeniero.
- **No** arquitectura, no código de producción, no “segunda opinión estratégica definitiva” (Luna ≠ Sol).
- Si notas que se queda corto en razonamiento: **[RECOMMENDATION]** subir a Plus o usar Grok/Gemini para pensar y ChatGPT solo para estilar. No pagues Go creyendo que tienes el ChatGPT fuerte.

### Ox Alpha — *Pico de coding desechable*

- Esta semana: leer starter, proponer refactors, implementar tareas acotadas **sin secretos ni datos de cliente**.
- Todo lo útil se **porta a Git** y se re-revisa con Grok/Cursor.
- El 27 ago 2026 (aprox. fin de ventana anunciada el 20) deja de existir como supuesto. Diseñar roles permanentes a su alrededor es mala idea.

---

## Protocolo para que todos tengan contexto (sin silos)

No hace falta que cada modelo “conozca su área”. Hace falta que **todos lean el mismo paquete**.

Paquete mínimo que se pega o se apunta al repo:

1. ICP + oferta (1 página).
2. SiteSpec del cliente (aunque esté a medias).
3. `decisions.md` (por qué este CTA, por qué no blog, etc.).
4. Prohibiciones (claims sanitarios, testimonios inventados).

**[RECOMMENDATION]** Flujo:

```
Gemini  → evidencia (qué hay en el mercado / en los assets)
Grok    → decisión y spec (qué hacemos)
ChatGPT → copy (cómo se dice)
Ox/Grok → código (cómo se construye)
Tú      → sí/no
Grok    → escribe la decisión en Git
```

Si ChatGPT o Gemini contradicen a Grok, **no gana el más convincente**: gana el experimento o tu criterio. El modelo que “dirige” registra el desacuerdo en `decisions.md`.

---

## Lo que no haría

- Un comité permanente de 4 modelos para cada decisión. Eso es teatro y coste.
- ChatGPT Go como orquestador de agentes.
- Ox Alpha con logos, DNIs, historias clínicas o `.env`.
- Gemini generando el stack “porque tiene 1M de contexto”.
- Grok 4.6 auto-asignándose estrategia + código + copy + legal sin contraste.

---

## Experimentos para no creerme a mí

Mismo brief, mismos 4 modelos, puntuación tuya 1–5:

1. **Estrategia:** “ataca esta oferta de sistema de captación para estética en Valencia”.
2. **Evidencia:** 8 capturas de webs competidoras → patrón de conversión.
3. **Copy:** hero + CTA + objeción de precio, en español de dueño, no de marketer.
4. **Código:** (solo Grok vs Ox, en un repo de prueba **sin datos reales**) “landing de 1 página + form + evento”.
5. **Adversarial cruzado:** cada modelo critica la respuesta de los otros.

Gana el rol quien gane **su** prueba, no el que gane el promedio. Un modelo puede ser el mejor copy y el peor arquitecto.

**[OPEN QUESTION]** En tu cuenta concreta: ¿ChatGPT Go tiene Think/Luna o ya mutó el plan? ¿Gemini Pro es 2.5, 3.x u otro? Verifícalo en la UI; este documento usa lo publicado a 22 ago 2026 y **los planes cambian de nombre cada trimestre**.

---

Evaluación más completa (Composer, Codex, arquitecturas A–E, matriz, P1–P12): [`orquestacion-modelos.md`](orquestacion-modelos.md).
