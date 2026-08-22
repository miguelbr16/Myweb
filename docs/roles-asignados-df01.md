# Roles asignados — post DF01

**Fuente:** las 5 respuestas en `benchmarks/2026-08/digital-factory-01-todas-las-respuestas.md`.  
**Fecha:** 22 agosto 2026.  
**Sesgo:** lo escribe Grok 4.6. Donde el consenso de los cinco me favorece como crítico, está marcado. Donde ChatGPT se autoasigna estrategia, no se acepta como consenso.  
**Esto no es un ranking de “quién ganó DF01”.** Es un organigrama operativo de 30 días. Se revisa a las 2 semanas con trabajo real.

Leyenda: **[FACT]** · **[CONSENSUS]** (5/5 o 4/5) · **[DISPUTED]** · **[RECOMMENDATION]** · **[HYPOTHESIS]**

---

## Veredicto

**Ningún modelo es Director de Orquesta.** Eso es **[CONSENSUS] 5/5** (incluido ChatGPT Go, que lo dice explícitamente).

El director eres tú. La partitura es Git. Los modelos entregan **artefactos**, no votos.

Arquitectura: **D — pipeline por fases con transferencia mediante artefactos.** **[CONSENSUS] 5/5.** ChatGPT pide un consejo *paralelo* Gemini/ChatGPT/Grok antes de Composer; los otros cuatro van en **secuencia**. Para una persona, secuencia es el default. Paralelo solo en una decisión grande (precio, matar ICP).

---

## Organigrama de 30 días

| Rol | Quién | Artefacto | No hace |
|---|---|---|---|
| **Decide / autoridad final** | Fundador | `decisions.md` (una línea) | Delegar precio, claims, firma, deploy a dominio de cliente |
| **Investiga** | Gemini 3.7 Flash | `brief.md` (huecos de webs públicas, campos de intake, competencia visible) | Promesas comerciales; precio; código de producción |
| **Redacta (cliente)** | ChatGPT Go | `offer.md`, emails, WhatsApp, propuesta, copy de landing | Arquitectura; alcance de fábrica; “cerebro” de la empresa |
| **Critica / recorta** | Grok 4.6 | `critique.md` — solo si el impacto es >2 h o hay claim/precio/scope | Copy final al cliente; dirección de arte; picar el repo como constructor diario |
| **Construye código** | Composer 2.5 (Cursor) | PR / preview Vercel | Estrategia, ICP, outbound, autoaprobar alcance |
| **Valida** | Fundador + checklist | Preview abierto + lista QA | “El modelo dijo que está bien” |
| **Pico temporal** | Ox Alpha / OpenCode | Diff acotado en Git, ≤4 h, sin PII | Rol permanente; datos de cliente; 100 ideas; OS de agentes |

Flujo default (una tarea, no un comité):

```
Tú defines la tarea (1 frase + veto)
    → Gemini: brief.md
    → ChatGPT: offer.md / copy
    → Grok: critique.md (si hay dinero, claim o scope)
    → Tú apruebas o paras
    → Composer: PR
    → Tú abres el preview
```

**[RECOMMENDATION]** Un WhatsApp no pasa por cuatro modelos. Un precio sí pasa por Grok + tu criterio, no por Gemini ni Composer.

---

## Qué coincidieron los cinco (eso sí se asigna)

**[CONSENSUS] 5/5**

- Humano al final. Nada de LLM-CEO (A) ni council permanente (C).
- Composer construye. Nadie más pica producción.
- Git = source of truth. Chats = caché.
- No RAG, no 10 agentes, no Agency OS, no CRM propio, no 30 componentes como prerrequisito.
- Oferta estrecha dental (captación / conversión), no “agencia digital”.
- No prometer N pacientes (Gemini se salta esto: ver abajo).

**[CONSENSUS] 4/5** (Gemini es la excepción)

- Grok = crítico / red team, no copywriter ni CEO.
- ChatGPT = texto comercial, no arquitectura.
- Gemini = research / intake / corpus, no constructor.

Gemini junta ChatGPT y Grok en “copy y tono” y se reserva a sí mismo el SiteSpec. Eso es autoasignación, no consenso. **No se adopta.**

---

## Qué se disputó (eso lo decides tú, no un modelo)

Estas filas **no** se resuelven con un rol de IA. Son decisiones de fundador. DF01 dejó el desacuerdo a la vista:

| Tema | Rango DF01 | Cómo se decide |
|---|---|---|
| Precio de setup | ChatGPT: sin cifra. Gemini ~1.200 €. OpenCode 750/1.500. Composer 2.400. Grok 2.500–4.500 | Experimento en conversaciones reales. Ningún modelo fija lista |
| Cuánta fábrica ahora | OpenCode: ≤5 días. Grok: ≤8 h/sem. Composer: 20 % + 8–10 componentes. Gemini: boilerplate+n8n semana 1. ChatGPT: SiteSpec+DS mínimo+QA auto | Tope operativo: **máx. 8–12 h/semana de infra** hasta cliente 1 |
| Stack | Astro (OpenCode, Composer, Grok “uno”) vs Next (Gemini) vs “el que haga falta” (ChatGPT) | **Un** stack, congelado 90 días. Default: el que ya uses en Cursor; no abrir debate |
| n8n / Supabase ahora | OpenCode y Gemini: 1 flujo ya. Grok/ChatGPT/Composer: después | Manual/email hasta que duela. n8n after client 1 |
| SiteSpec | OpenCode: after client 3 (completo). Resto: v0 ahora | Checklist/YAML corto (≤25 campos). No motor |

---

## Asignación por modelo (con evidencia DF01, no con su CV)

### Fundador — Director

**[CONSENSUS]** Llamadas, precio, claims sanitarios, DPA, “sí al cliente”, DNS, QA final.

Nadie más cierra.

### Gemini 3.7 Flash — Investigación y extracción

**Por qué:** 5/5 lo ponen en research / intake / corpus. En DF01 su pipeline (web actual → `Intake_Raw.md` → spec) es el más claro para *material*.

**Límite que impone DF01:** su promesa *“duplicamos la conversión móvil… en menos de 10 días”* es un claim no soportado. **[FACT]** los cinco no tenían CAC/LTV. Por tanto Gemini **no escribe** la promesa comercial ni el precio. Entrega hechos observables (CTA ausente, form largo, no WhatsApp).

**Uso:** 10–20 webs públicas, PDFs, capturas, huecos de intake. Artefacto: `brief.md`.  
**No uso:** outbound, pricing, “qué empresa construir”, código de producción.

### ChatGPT Go — Redacción comercial

**Por qué:** 4/5 lo ponen en copy, propuestas, objeciones, lenguaje de dueño. OpenCode: editor. Composer: móvil / scripts de llamada. Grok: WhatsApp y propuesta.

**Límite que impone DF01:** ChatGPT **se autoasigna** estrategia, product, CRO y decisiones transversales. Eso es **[DISPUTED]** y **no se concede**. En el mismo texto admite que Go no está demostrado como director. Además, en DF01 empujó más fábrica ahora (design system mínimo, QA automático) que OpenCode/Grok: buen estructurador, mal recortador.

**Uso:** emails, 1-pager, copy de landing, roleplay de objeciones, propuesta en castellano de dueño. Artefacto: `offer.md`.  
**Revisión:** Grok ataca claims; tú envías.  
**No uso:** stack, SiteSpec como contrato, “hay que construir X”.

### Grok 4.6 — Crítico / recorte (no concertino)

**Por qué:** 4/5 (Grok, OpenCode, ChatGPT, Composer) lo ponen de challenger. OpenCode: *episódico, no diario*. Composer: solo si la decisión pesa >2 h.

**Sesgo declarado:** este documento lo escribo yo. El rol de crítico es consenso ajeno, no un autoascenso a CEO. El documento previo `docs/roles-modelos.md` me llamaba “concertino”; **eso queda anulado** para gobierno de empresa. En Cursor puedo *registrar* en Git lo que tú apruebas. Eso es scribe, no director.

**Límite que impone DF01:** mi precio 2.500–4.500 € es hipótesis, no lista. No firmo legal. No hago dirección de arte. No sustituyo a Composer en el repo día a día si el constructor es él.

**Uso:** atacar oferta, scope, overbuild, claims, este tipo de decisión. Artefacto: `critique.md` o una sección en `decisions.md`.  
**No uso:** cada WhatsApp; hex de marca; implementar el starter entero (eso es Composer).

### Composer 2.5 — Constructor

**Por qué:** **[CONSENSUS] 5/5** y **[FACT]** es el agente con el árbol de archivos en Cursor.

**Límite que impone DF01:** propuso 8–10 componentes + Skills + CI en semana 1–2. Eso es más fábrica que OpenCode (“un template”) y que Grok (“starter del paquete”). **Composer no define alcance.** Implementa el spec que tú firmaste. Riesgo que él mismo nombra: *Composer construye OS porque puede* (Grok §10).

**Uso:** template, form, deploy, checklist técnico, PRs.  
**No uso:** ICP, precio, “qué no construir”, outbound.

### Ox Alpha / OpenCode — Pico, no silla

OpenCode **ya entregó** una respuesta DF01 (secuencia dura, 5 días de build, 10 auditorías vídeo). Eso es evidencia de juicio, no de que deba entrar al comité diario.

**[RECOMMENDATION]** Ventana corta, proveedor anónimo, sin PII. Como máximo: un spike ≤4 h sobre artefacto **público** (ver `docs/ox-alpha-opencode-gauntlet.md`). Output a Git. Composer o tú re-revisan.

**No es** un quinto cerebro. **No es** Director. **No ve** clientes.

---

## Quién revisa a quién

| Produce | Revisa | Firma |
|---|---|---|
| Gemini `brief.md` | Tú (¿son hechos o inventos?) | Tú |
| ChatGPT `offer.md` / copy | Grok (claims, scope) | Tú, antes de enviar |
| Grok `critique.md` | Tú (contrarian ≠ correcto; ChatGPT lo dijo y vale) | Tú |
| Composer PR | Checklist + preview humano | Tú |
| Ox spike | Composer o Grok en Git | Tú |

Contradicción material entre dos modelos = **incertidumbre**, no debate. Tú decides en ≤15 min y escribes una línea en `decisions.md`. **[CONSENSUS]** OpenCode y Composer.

---

## Cuándo NO usar un modelo

**[CONSENSUS]** mezclado:

- Precio y posicionamiento: datos propios + tú.
- Comunicación directa al cliente sin revisión humana.
- Datos de pacientes (RGPD art. 9) en prompts de terceros.
- Composer para “qué empresa somos”.
- Gemini para picar el repo si no está en el IDE.
- Cuatro modelos para un botón o un WhatsApp.
- Ox con `.env`, logos de cliente, historias clínicas.

Siempre humano: llamada, negociación, cierre, QA final, dinero, DNS.

---

## Protocolo de 30 días (para no montar un council)

Semana típica, 40 h:

| Bloque | Horas | Modelos |
|---|---|---|
| Venta / outbound | ≥18 | ChatGPT (texto) + tú (voz). Grok solo si hay propuesta con precio |
| Entrega | el resto cuando haya cliente | Composer. Gemini si hay assets que extraer |
| Infra | ≤8–12 | Composer con spec ya recortado. Grok dice que no antes de ampliar |
| Research | ≤3 | Gemini, webs públicas |

Si a las 2 semanas el copy de ChatGPT sale flojo: subes de Go o Grok/Gemini redactan y ChatGPT solo estila. Si Grok recorta de más y pierdes cierres: reduces su gate a decisiones >2 h (regla de Composer). Si Composer se va a 30 componentes: paras el PR. Eso es el experimento, no un nuevo organigrama.

---

## Una frase por asiento

- **Tú:** dueño del P&L y del “no”.  
- **Git:** memoria.  
- **Gemini:** qué se ve en el mercado y en los assets.  
- **ChatGPT Go:** cómo se dice al dueño de la clínica.  
- **Grok:** qué no construir y qué claim no se sostiene.  
- **Composer:** qué se fusiona al repo.  
- **Ox Alpha:** préstamo de horas, esta semana, sin clientes.

**[DO NOT BUILD]** un Director de Orquesta modelo. **[DO NOT BUILD]** un consejo de 4 para cada tarea. **[DO NOT BUILD]** silla permanente para Ox.
