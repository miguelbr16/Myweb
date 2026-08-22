# Ox Alpha + OpenCode + Gauntlet Loop — qué sirve para este proyecto

**Fecha:** 22 agosto 2026.  
**Sesgo:** lo escribe Grok 4.6. No nominar a Ox como orquestador.  
**Alcance:** cómo usar (o no) el combo que se ve en el tweet de [vrajdesai78](https://x.com/vrajdesai78/status/2091081043541684676) y el sitio [100 SaaS Ideas](https://saas-ideas-5n8.pages.dev/). Sin código de fábrica. Sin PII.

Leyenda: **[FACT]** · **[HYPOTHESIS]** · **[RECOMMENDATION]** · **[DO NOT BUILD]** · **[EXPERIMENT]**

---

## Veredicto en una frase

El demo es potente como **pico de ejecución** (research + crítico + sitio estático + deploy). Para nosotros no es un modelo de negocio ni un organigrama: es un **préstamo de 4–8 horas** para pulir un artefacto público, y luego se apaga.

---

## 1. Qué es cada pieza (no mezclarlas)

Hay tres capas distintas. Mezclarlas es el error que hace parecer “un agente que monta una empresa”.

| Capa | Qué es | Qué no es |
|---|---|---|
| **OpenCode** | Entorno de agente (repo, tools, subagentes, deploy). Equivalente funcional a Cursor, no a un modelo. | Un cerebro estratégico |
| **Ox Alpha** | Modelo stealth `stealth/ox-alpha` (OpenRouter / OpenCode). Reasoning + coding + trabajo agéntico largo. Contexto **1.048.576** tokens. Preview **gratis** y **anónimo**. | Un socio. No hay lab confirmado |
| **Gauntlet Loop** | Técnica de calidad: barra real + builder/crítico separados + A/B ciego + loop hasta ganar o hasta que tú pares. Empaquetada como skill en [robonuggets/gauntlet-loop](https://github.com/robonuggets/gauntlet-loop) (CC BY 4.0; la técnica es de [Matt Shumer](https://github.com/mshumer)). | Un producto, un OS, ni “100 ideas SaaS” |

**[FACT]** OpenRouter lista Ox Alpha como stealth de tercero anónimo; retiene prompts/completions y afirma no usarlos para entrenar. Eso es un *claim* de catálogo, no una auditoría tuya. [Ox Alpha en OpenRouter](https://openrouter.ai/stealth/ox-alpha).

**[FACT]** OpenCode anunció ventana corta de uso casi ilimitado (~1 semana desde ~20 ago 2026). Hoy 22 ago: quedan **pocos días**. Diseñar roles permanentes alrededor de Ox es mala idea. Ver `docs/roles-modelos.md`.

**[FACT]** El repo del skill tiene 547★ (creado 5 ago 2026). No es el loop: es un generador de *prompts* de ~150 palabras. [README](https://github.com/robonuggets/gauntlet-loop).

---

## 2. Qué hizo realmente el demo (no lo que parece)

Sitio vivo: [saas-ideas-5n8.pages.dev](https://saas-ideas-5n8.pages.dev/) (Cloudflare Pages).

**[FACT]** HTML estático de una sola página. 100 ideas embebidas en un `const IDEAS = [...]`. 10 temas × 10. Cada ficha: `title`, `idea`, `source_url`, `traction`, `undercut`. Footer: research en Indie Hackers, Starter Story, Acquire.com, Flippa, GetLatka, Sacra; “independent critics fetched every source link”.

El prompt de la captura (typo `/guantlet-loop`) pide: buscar 100 ideas SaaS, fuentes múltiples, sitio mínimo con título / idea / fuente / por qué, **hasta estar seguro y haber construido el website**.

Eso demuestra:

1. Un agente con tools puede **investigar + verificar + construir + publicar** en un solo run.
2. El loop de críticos **sí se usó** (al menos como instrucción: comprobar que el revenue citado aparece en el enlace).
3. El resultado es un **catálogo**, no un cliente, no un euro, no un ICP validado.

**[HYPOTHESIS]** Impresiona porque el harness (OpenCode + Ox + loop + deploy) es el producto. Las 100 ideas son el *demo artifact*. Cualquier modelo fuerte en el mismo harness haría algo parecido; no prueba que Ox sea el mejor cerebro de negocio.

Idea #76 del propio catálogo (“AI front desk for clinics & wellness”, fuente Chatfuel Clinic Suite) es exactamente el tipo de **software propio / agentes como producto** que DF01 marcó **[DO NOT BUILD]** como oferta. No copiarla.

---

## 3. Por qué NO copiar el prompt tal cual

El prompt viral optimiza **volumen de ideas**. Nuestro cuello de botella (las 5 respuestas DF01 coinciden) es **cero conversaciones de venta**.

Copiar “find 100 SaaS ideas… do it until you are sure… built a website” sería:

- Meta-trabajo con disfraz de research.
- Un segundo negocio (SaaS) encima del que aún no existe (captación dental).
- Un loop sin techo de horas (“until you are sure”).
- Meter research de mercado en un modelo anónimo.

Composer lo dijo en DF01: *«[DO NOT BUILD] Benchmark de 4 modelos durante 3 días en lugar de outbound»*. Un gauntlet de 100 ideas es la misma trampa, más cara.

**[DO NOT BUILD]** Un directorio de 100 ideas SaaS. **[DO NOT BUILD]** Agency OS de subagentes permanentes. **[DO NOT BUILD]** “AI receptionist” como producto.

---

## 4. Qué SÍ extraer: el patrón, no el modelo

El Gauntlet Loop encaja con la **orquestación D** que eligieron los cinco modelos: artefactos + crítico separado + humano que para el loop.

Reglas que sí nos sirven (del [SKILL.md](https://raw.githubusercontent.com/robonuggets/gauntlet-loop/main/.claude/skills/gauntlet-loop/SKILL.md)):

1. **Barra nombrada, fetchable, comparable.** No “web premium”. Sí “la landing de implantes de [clínica concreta], screenshot móvil 390px”.
2. **El builder no se autoevalúa.** Crítico con contexto fresco.
3. **Pick A/B, no nota 1–10.** Las notas suben solas cada ronda.
4. **Salida = gana el ciego, o tú paras.** Nunca “3 rondas”.
5. **No sobre-especificar stack.** El agente decide; tú pones la barra y el veto (PII, claims sanitarios).

Lo que **rompe** el loop (el propio skill): barra vaga; el builder juzgándose; crítico blando; round count fijo.

OpenCode es el harness donde Ox **hoy** puede fan-out. Cursor/Composer es el harness **permanente**. El patrón se porta; Ox no.

---

## 5. Uso concreto en *este* proyecto (ventana Ox)

Tope duro: **una sesión ≤4 h, output a Git, cero datos de cliente, cero `.env`.** Si no cabe en eso, no es un pico: es fábrica.

### 5.1 Lo único que vale la pena esta semana

**[EXPERIMENT]** Gauntlet de **un** artefacto público, con barra real:

> Pulir el **template dental v0** (o la landing propia v0) hasta que un crítico ciego, en móvil, prefiera nuestro hero + CTA + formulario frente a **una** landing de clínica española nombrada que tú elijas.

Piezas juzgables por separado: hero, oferta, CTA, form (campos + fricción), aviso WhatsApp (copy, no credenciales), legal mínimo, Lighthouse móvil.

**Barra mala:** “las mejores webs dentales de España”.  
**Barra buena:** URL concreta + screenshot 390px + “¿qué página hace más obvio pedir cita en <5 segundos?”.

### 5.2 Research público (opcional, 90 min)

Si aún no hay template: Ox en OpenCode audita **20 webs públicas** de clínicas (solo homepage). Entrega `docs/auditoria-publica-20.md`: URL, CTA, form sí/no, WhatsApp sí/no, fricción móvil. **Sin** pegar capturas de pacientes, listados de leads ni emails.

Eso alimenta el outbound (guion de auditoría-vídeo). No sustituye las 10 llamadas.

### 5.3 Portar el skill, no al modelo

Si el pico funciona: copiar `.claude/skills/gauntlet-loop/SKILL.md` a Cursor **después**, para Composer. El valor residual es el prompt, no Ox.

**[RECOMMENDATION]** Composer sigue siendo el constructor diario (DF01). Ox no sustituye a Composer. Ox no ve clientes. Grok (u otro crítico) re-revisa el diff en Git.

### 5.4 Qué no mandar a OpenCode/Ox

| Prohibido | Por qué |
|---|---|
| Logos, fotos de pacientes, historias clínicas, `.env`, DNS de cliente | Proveedor anónimo; OpenRouter retiene prompts |
| Precio final, claims clínicos, “duplicamos conversión” | Juicio humano + legal |
| Outbound real (emails a clínicas) | El agente no es el comercial; y el copy sanitario está regulado |
| 100 ideas / nuevo vertical / SaaS propio | Fuera de la oferta de 30 días |

---

## 6. Prompt listo para pegar en OpenCode (una vez)

No uses el prompt viral. Usa este. Elige **tú** la URL-barra antes de pegar.

```
Build a single-page dental clinic capture landing (one star treatment, ES market, mobile-first). Public demo data only. No patient data, no secrets, no .env.

The bar is THIS live page, screenshot at 390px and 1280px, compare against the real thing not a description: [URL DE UNA CLÍNICA CONCRETA].

Break into independently judged pieces: hero, offer clarity, CTA, form friction, WhatsApp/click-to-call, legal/consent checkbox copy, mobile speed.

For each piece fan out a builder and a separate harsh critic with fresh context. Critic inspects actual output vs the bar blind, labels stripped, picks a winner, names the single biggest gap. No scores out of 10.

Keep looping until the critic picks ours or I stop. Run builders and critics as parallel subagents.

Keep a live progress page. Deploy a static preview if the harness allows.

Do not invent CAC, LTV, or “we double conversions”. Do not add SEO retainers, agents, RAG, CRM, or a second vertical.
```

Si OpenCode tiene el skill, puedes empezar con `/gauntlet-loop` **solo** para que te proponga 2–3 barras; tú eliges una URL real; luego pegas el bloque de arriba en sesión nueva.

---

## 7. Relación con DF01 (las 5 respuestas)

Consenso ya escrito: vender sistema de captación dental; fábrica mínima; orquestación D; humano al final; **no** 10 agentes.

Ox+Gauntlet **no contradice** eso si se usa como:

`Composer construye el starter → Ox (opcional, esta semana) pule contra una barra real → humano aprueba preview → Git`.

Lo contradice si se usa como:

`Ox investiga 100 negocios → construye un directorio → “ya tenemos fábrica de ideas”`.

OpenCode ya entregó una respuesta DF01 útil (precio 750/1.500, 5 días de build, 10 auditorías vídeo). Ese es el techo de estrategia de Ox. El resto de la ventana: **código público**, no más estrategia.

---

## 8. Decisión

**[RECOMMENDATION]**

1. No clonar el experimento de las 100 ideas.
2. Si la ventana Ox sigue abierta: **un** gauntlet ≤4 h sobre template/landing propia vs una URL dental real. Output en Git. Revisión en Cursor.
3. Si no hay template todavía: **no** abrir OpenCode. Primero Maps y 10 vídeos (OpenCode DF01) o 1-pager + 5 outreach (Composer DF01).
4. El skill Gauntlet se guarda para Cursor cuando haya un artefacto que pulir. No antes.

**Mayor riesgo de este shiny object:** gastar la semana demostrando que un agente puede publicar un microsite, mientras sigue sin existir una conversación con un dueño de clínica.

**[DO NOT BUILD]** 100 ideas SaaS · OS de subagentes · RAG · receptionist IA · cualquier cosa con datos de pacientes en Ox.
