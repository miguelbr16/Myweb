# Roles asignados — post DF01

**ICP / oferta:** este estudio **no vende clínicas dentales**. Dental fue el *caso de examen* del prompt DF01 (única oportunidad nombrada en ese brief), no la oferta comercial. De DF01 se adopta el **sistema de trabajo** (quién investiga, redacta, critica, construye). Se descarta el GTM dental, los precios de setup dentales y el “mañana Maps de clínicas”.

**Fuente:** las 5 respuestas en `benchmarks/2026-08/digital-factory-01-todas-las-respuestas.md`.  
**Fecha:** 22 agosto 2026.  
**Sesgo:** lo escribe Grok 4.6. Donde el consenso de los cinco me favorece como crítico, está marcado. Donde ChatGPT se autoasigna estrategia, no se acepta como consenso.  
**Esto no es un ranking de “quién ganó DF01”.** Es un organigrama operativo de 30 días. Se revisa a las 2 semanas con trabajo real.

Leyenda: **[FACT]** · **[CONSENSUS]** (5/5 o 4/5) · **[DISPUTED]** · **[RECOMMENDATION]** · **[HYPOTHESIS]**

---

## Veredicto

**Autoridad final: el fundador.** Eso es **[CONSENSUS] 5/5**.

**Director adjunto (decisiones): Gemini** — pedido explícito del fundador (Chat vs Gemini). No es LLM-CEO: propone, secuencia, etiqueta FACT/HYPOTHESIS, escribe la línea de decisión. Tú firmas dinero, claims y envíos. Detalle: `docs/director-de-orquesta.md`.

**ChatGPT Go no es la batuta.** Es Luna, no Sol; en DF01 se autoasignó estrategia y él mismo dijo que no está demostrado como Director.

Arquitectura: **D** (artefactos) **con un frente de conversación** (Gemini). No council permanente. Grok sigue de crítico episódico. Composer construye.

---

## Organigrama de 30 días

| Rol | Quién | Artefacto | No hace |
|---|---|---|---|
| **Decide / autoridad final** | Fundador | `decisions.md` (una línea) | Delegar precio, claims, firma, deploy a dominio de cliente |
| **Director adjunto** | Gemini (Pro si existe; Flash solo provisional) | Prioridades del día + encargo a los demás | Firmar precio; claims; enviar al cliente; picar producción |
| **Investiga** | Gemini (el mismo asiento) | `brief.md` | Promesas comerciales inventadas |
| **Redacta (cliente)** | ChatGPT Go | `offer.md`, emails, WhatsApp, propuesta, copy de landing | Arquitectura; alcance de fábrica; batuta de la empresa |
| **Critica / recorta** | Grok 4.6 | `critique.md` — solo si el impacto es >2 h o hay claim/precio/scope | Copy final al cliente; dirección de arte; picar el repo como constructor diario |
| **Construye código** | Composer 2.5 (Cursor) | PR / preview Vercel | Estrategia, ICP, outbound, autoaprobar alcance |
| **Valida** | Fundador + checklist | Preview abierto + lista QA | “El modelo dijo que está bien” |
| **Pico temporal** | Ox Alpha / OpenCode | Diff acotado en Git, ≤4 h, sin PII | Rol permanente; datos de cliente; 100 ideas; OS de agentes |

Flujo default (una tarea, no un comité):

```
Tú defines o Gemini propone (tú vetas)
    → Gemini: brief.md + “qué no construir”
    → ChatGPT: offer.md / copy
    → Grok: critique.md (si hay dinero, claim o scope)
    → Tú apruebas o paras
    → Composer: PR
    → Tú abres el preview
```

**[RECOMMENDATION]** Un WhatsApp no pasa por cuatro modelos. Un precio: Gemini estructura el experimento; Grok ataca la cifra; **tú** anclas. Gemini no inventa “precio de mercado”.

---

## Qué coincidieron los cinco (eso sí se asigna)

**[CONSENSUS] 5/5**

- Humano al final. Nada de LLM-CEO (A) ni council permanente (C).
- Composer construye. Nadie más pica producción.
- Git = source of truth. Chats = caché.
- No RAG, no 10 agentes, no Agency OS, no CRM propio, no 30 componentes como prerrequisito.
- Una oferta productizada a **un** ICP (el ICP lo elige el fundador; en DF01 el brief forzó dental — **no se adopta**).
- No prometer resultados numéricos sin datos propios (Gemini, en el examen, prometió “duplicar conversión”; ese error de claims vale para cualquier nicho).

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
| Precio de setup | En el *examen* dental: ChatGPT sin cifra; Gemini ~1.200 €; OpenCode 750/1.500; Composer 2.400; Grok 2.500–4.500 | Esas cifras **no** son lista de este negocio. El método sí: anclas en conversaciones reales; ningún modelo fija precio |
| Cuánta fábrica ahora | OpenCode: ≤5 días. Grok: ≤8 h/sem. Composer: 20 % + 8–10 componentes. Gemini: boilerplate+n8n semana 1. ChatGPT: SiteSpec+DS mínimo+QA auto | Tope operativo: **máx. 8–12 h/semana de infra** hasta cliente 1 |
| Stack | Astro (OpenCode, Composer, Grok “uno”) vs Next (Gemini) vs “el que haga falta” (ChatGPT) | **Un** stack, congelado 90 días. Default: el que ya uses en Cursor; no abrir debate |
| n8n / Supabase ahora | OpenCode y Gemini: 1 flujo ya. Grok/ChatGPT/Composer: después | Manual/email hasta que duela. n8n after client 1 |
| SiteSpec | OpenCode: after client 3 (completo). Resto: v0 ahora | Checklist/YAML corto (≤25 campos). No motor |

---

## Asignación por modelo (con evidencia DF01, no con su CV)

### Fundador — Director

**[CONSENSUS]** Llamadas, precio, claims, DPA, “sí al cliente”, DNS, QA final.

Nadie más cierra.

### Gemini 3.7 Flash — Investigación y extracción

**Por qué:** 5/5 lo ponen en research / intake / corpus. En DF01 su pipeline (web actual → `Intake_Raw.md` → spec) es el más claro para *material*.

**Límite que impone DF01:** su promesa *“duplicamos la conversión móvil… en menos de 10 días”* es un claim no soportado. **[FACT]** los cinco no tenían CAC/LTV. Por tanto Gemini **no escribe** la promesa comercial ni el precio. Entrega hechos observables (CTA ausente, form largo, no WhatsApp).

**Uso:** 10–20 webs públicas, PDFs, capturas, huecos de intake. Artefacto: `brief.md`.  
**No uso:** outbound, pricing, “qué empresa construir”, código de producción.

### ChatGPT Go — Redacción comercial

**Por qué:** 4/5 lo ponen en copy, propuestas, objeciones, lenguaje del comprador. OpenCode: editor. Composer: móvil / scripts de llamada. Grok: WhatsApp y propuesta.

**Límite que impone DF01:** ChatGPT **se autoasigna** estrategia, product, CRO y decisiones transversales. Eso es **[DISPUTED]** y **no se concede**. En el mismo texto admite que Go no está demostrado como director. Además, en DF01 empujó más fábrica ahora (design system mínimo, QA automático) que OpenCode/Grok: buen estructurador, mal recortador.

**Uso:** emails, 1-pager, copy de landing, roleplay de objeciones, propuesta en lenguaje del decisor. Artefacto: `offer.md`.  
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
- Datos de clientes / PII en prompts de terceros (si algún día hay salud, art. 9 RGPD: aún más estricto).
- Composer para “qué empresa somos”.
- Gemini para picar el repo si no está en el IDE.
- Cuatro modelos para un botón o un WhatsApp.
- Ox con `.env`, logos de cliente, PII.

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
- **Gemini:** director adjunto + evidencia.  
- **Git:** memoria.  
- **ChatGPT Go:** cómo se dice al decisor del ICP (cuando exista).  
- **Grok:** qué no construir y qué claim no se sostiene.  
- **Composer:** qué se fusiona al repo.  
- **Ox Alpha:** préstamo de horas, esta semana, sin clientes.

**[DO NOT BUILD]** un Director de Orquesta modelo. **[DO NOT BUILD]** un consejo de 4 para cada tarea. **[DO NOT BUILD]** silla permanente para Ox.
