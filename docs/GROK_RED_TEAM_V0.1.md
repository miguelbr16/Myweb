# GROK_RED_TEAM_V0.1

**Rol:** Grok como red team, no como director de orquesta.  
**Fecha:** 2026-08-22.  
**Alcance:** auditoría FINAL de tres artefactos adjuntos (fuente primaria si contradicen el prompt de esta ronda).  
**No es:** implementación, SiteSpec engine, n8n, CRM, GTM dental, ni cambio de ICP.

**Relación con otros docs:** este archivo sustituye el uso operativo de [`red-team-digital-factory-v0.1.md`](red-team-digital-factory-v0.1.md) para las decisiones C1. El archivo anterior auditaba propuestas verbales; este audita los tres artefactos concretos.

---

## 0. Fuentes auditadas (prioridad: artefactos > prompt)

| # | Artefacto | Qué es de verdad |
|---|---|---|
| 1 | `DIGITAL_FACTORY_CONTEXT.md` V0.2 | Brújula + wishlist. La visión del §1 sigue listando agentes, CRM y design system. Dental aparece como **hipótesis**. El fundador dice 50/50 ventas/build y “no automatizar antes de 3 repeticiones”. |
| 2 | `SITESPEC_CONTRACT_V0.1` (autor: Gemini) | Sigue siendo un **CMS de 9 bloques**, no un contrato ligero. Incluye `section_order` enum, módulos dentales (`doctor_authority` REQ), formulario multi-step, webhook n8n REQ, `log_to_sheets` REQ y comportamiento WhatsApp. |
| 3 | `ARCHITECTURE_SPIKE_REPORT` (autor: Ox Alpha, análisis-only) | **Cero builds, cero código, cero Lighthouse.** Astro no está empíricamente probado. Aun así el §11 recomienda Astro+TW+TS, JSON Schema + `blocks[]`, Sheets hasta C3, email+Telegram, template+upstream, y un bake-off empírico de ~medio día **antes** de fijar stack. |

**Hecho de procedimiento:** el prompt de esta ronda decía que Gemini “aligeró” el SiteSpec (sin `section_order`, sin n8n, sin Sheets). **El archivo adjunto no lo hizo.** Gano el archivo.

---

## 1. Veredicto en una frase

Estáis construyendo infraestructura para una empresa imaginaria. El C1 no se gana con un contrato CMS ni con un bake-off de frameworks: se gana con conversaciones y **una** landing que alguien pague.

---

## 2. Discrepancia prompt vs artefactos (evidencia)

Si un modelo o un humano cita el prompt de esta ronda como si Gemini ya hubiera recortado el contrato, está citando un deseo, no el documento.

| Claim del prompt de ronda | Qué dice el SiteSpec adjunto |
|---|---|
| “Quitó `section_order`” | Sigue existiendo `section_order` como array enum de 8 secciones |
| “Quitó n8n” | `n8n_webhook` **REQ**, ejemplo `https://n8n.tudominio.com/webhook/lead-clinica` |
| “Quitó `log_to_sheets`” | Sigue **REQ** |
| “Comportamiento WhatsApp, no API” | Correcto en wording; el formulario multi-step + webhook + Sheets sigue siendo pipeline |
| “Contrato ligero” | 9 bloques + módulos dentales + tokens + SEO + legal + form schema |

Ox, en modo análisis-only, **no puede** haber “probado” Astro. El §11 que recomienda stack + `blocks[]` + Telegram + upstream es opinión con formato de informe, no evidencia de runtime.

---

## 3. Lo que hay que construir (C1)

Una landing vendible, hecha a mano por Composer a partir de un brief, no a partir del SiteSpec adjunto.

**Camino de lead C1 (único permitido por este red team):**

1. Formulario **corto** (nombre, teléfono o email, mensaje).  
2. Envío a **email** del fundador.  
3. CTA visible `wa.me` / `tel:` en la página.

Nada más. Sin n8n. Sin Google Sheets. Sin Telegram. Sin WhatsApp Cloud API. Sin `blocks[]`. Sin JSON Schema de page-builder. Sin template+upstream.

**Git C1–C5:** un repo plantilla + **copia** por cliente. Upstream se discute después de C5, no antes.

**Stack C1–C5:** empate empírico Astro vs Next. Elegid el que Composer ya usa con menos fricción. **No** corráis el bake-off Ox §9 antes de tener C1.

---

## 4. KEEP / CHANGE / OPEN

### KEEP

- Landings-only V0.1. Sin RAG, sin SaaS, sin CMS, sin agentes, sin E2E.  
- Git como fuente de verdad por encima del chat.  
- WhatsApp Cloud API **fuera** de C1.  
- “3 repeticiones antes de automatizar” **si se cumple de verdad** (hoy el SiteSpec y el §11 de Ox lo violan).  
- El fundador firma. Los modelos proponen.  
- Dental **no** es la oferta comercial; en DF01 era fixture de examen.

### CHANGE (bloquear)

- **No implementar** el SiteSpec adjunto. Es un CMS de 9 bloques con oferta dental embebida.  
- **No** adoptar `blocks[]` / page-builder.  
- **No** n8n, Sheets, Telegram ni upstream en C1.  
- **No** spike empírico de medio día antes de vender. Eso es otra forma de no hablar con clientes.  
- **No** tratar el §1 del Context (agentes, CRM, design system) como brújula operativa. Es visión de año 3, no backlog de agosto.  
- **No** usar headlines de claim sanitario (“sonrisa fija… sin dolor”) sin revisión legal. El ejemplo del SiteSpec es un riesgo, no un template.

### OPEN (el fundador decide; los modelos no)

- ICP real (dental sigue hipótesis; estética / home services high-ticket siguen hipótesis).  
- Oferta y precio. Los rangos DF01 (750–4500€) son del examen, no lista.  
- Analytics en C1.  
- Quién edita contenido el año 1 (casi seguro: el fundador, no un CMS).

---

## 5. Por qué el SiteSpec adjunto no es C1

Es un sistema de **composición de páginas** disfrazado de contrato:

- `section_order` implica motor que reordena secciones.  
- Módulos (`hero_urgency`, `doctor_authority`, `trust_bar`, `lead_form`, …) implican catálogo.  
- Tokens + metadata + SEO + legal + form schema = superficie de un theme.  
- `doctor_authority` REQ amarra el vertical dental aunque el Context lo deje como hipótesis.  
- n8n + Sheets + multi-step form = pipeline de leads, no “una landing”.

Un C1 vendible es HTML/componentes fijos + copy + un form. El contrato, si hace falta, cabe en una página: oferta, secciones, textos, CTA, dominio, color.

---

## 6. Por qué el spike Ox no desbloquea build

Ox hizo lo que se le pidió: análisis. El informe es útil como mapa de riesgos, no como semáforo verde.

- Cero builds ⇒ Astro no está “probado”.  
- Recomendar `blocks[]` reproduce el CMS que el red team corta.  
- Sheets “hasta C3” y Telegram “por si el email falla” son automatización **antes** de la primera repetición.  
- Template+upstream es disciplina de fábrica. No hay fábrica. Hay un fundador sin clientes.  
- El bake-off §9 (~medio día) antes de C1 es procrastinación con Lighthouse.

Email es **más simple** que Sheets. No es más “seguro” legalmente. Un formulario de clínica (salud, art. 9 RGPD) necesita criterio legal **antes** de vender a clínicas, no un destino de leads más bonito.

---

## 7. Mentiras útiles que el pack se cuenta

1. “Si cerramos el contrato, ya podemos construir.” Sin ICP ni conversación, el contrato es fanfic tipado.  
2. “Gemini ya lo aligeró.” El adjunto no.  
3. “Ox ya eligió stack.” Ox no compiló nada.  
4. “Sheets / n8n / Telegram son el mínimo responsable.” Son el mínimo de una agencia que ya tiene volumen.  
5. “La visión (agentes, CRM, DS) nos orienta.” Os distrae. C1 no se parece a esa empresa.

---

## 8. Secuencia que este red team acepta

1. El fundador habla con 10–20 personas del ICP **provisional** (aún OPEN).  
2. Composer entrega **una** landing a medida. Form → email + `wa.me`/`tel:`.  
3. Alguien paga o hay un no claro.  
4. Se repite. En C3 se mira si el form a email duele de verdad.  
5. En C5 se mira si copiar el repo duele de verdad.  
6. Solo entonces: Sheets, n8n, upstream, o un contrato más rico.

Hasta el paso 3, cada hora en schema/spike/orquestación es evitación.

---

## 9. Qué puede hacer Composer ahora (si el fundador insiste en “construir algo”)

Permitido:

- Una landing concreta, un cliente concreto (aunque sea el propio estudio).  
- Copy en español.  
- Form mailto o endpoint mínimo a email.  
- Deploy en Vercel.

Prohibido por este documento:

- Implementar `SITESPEC_CONTRACT_V0.1`.  
- Scaffold de `blocks[]` / JSON Schema.  
- n8n, Sheets, Telegram, WhatsApp Cloud.  
- Design system, CRM, agentes, RAG, Agency OS.  
- Bake-off Astro vs Next “para decidir”.

---

## 10. Clasificación

| Afirmación | Tipo |
|---|---|
| El SiteSpec adjunto incluye `section_order`, n8n REQ y `log_to_sheets` REQ | HECHO (texto del archivo) |
| El spike Ox no incluye builds ni Lighthouse | HECHO (texto del archivo) |
| Dental no es la oferta comercial del estudio | HECHO (el fundador lo dijo; el Context lo deja como hipótesis) |
| C1 debe ser form → email + wa.me, sin n8n/Sheets | RECOMENDACIÓN (este red team) |
| Astro vs Next es empate para C1–C5 | RECOMENDACIÓN (sin runtime que lo contradiga) |
| Estética / home services es mejor ICP que dental | HIPÓTESIS (eval inicial; sigue OPEN) |

---

## 11. Cierre

El pack de los tres artefactos es coherente **entre sí** (visión grande → contrato CMS → stack de fábrica) e incoherente **con** “0 clientes, 1 persona, 40h, presupuesto limitado”.

Grok no dirige la orquesta. Grok corta la partitura que no se puede tocar este mes.

**Firma operativa de este archivo:** no implementar el SiteSpec adjunto; no bake-off antes de C1; no automatizar el primer lead.
