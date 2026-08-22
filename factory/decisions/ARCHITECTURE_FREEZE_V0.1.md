# ARCHITECTURE FREEZE V0.1

> **Estado:** FROZEN FOR V0.1 / OPEN FOR FUTURE ITERATIONS  
> **Fecha:** 2026-08-22  
> **Relacionado:** [DECISION_LOG.md](./DECISION_LOG.md)

---

## 1. Objetivo del freeze

**La arquitectura se congela para evitar seguir diseñando infraestructura antes de validar mercado.**

Este freeze **no** significa que toda la arquitectura esté resuelta. Significa que hemos decidido **conscientemente** qué hacer — y, sobre todo, **qué NO hacer** — para entregar el **Cliente 1 (C1)**.

V0.1 = conseguir cliente → entregar landing mobile-first de conversión → aprender → iterar.

---

## 2. DECIDED

Ver detalle en [DECISION_LOG.md](./DECISION_LOG.md#decided).

- V0.1 centrado en **Cliente 1**.
- Producto: **landing mobile-first orientada a conversión**.
- Leads C1: **formulario → email directo a recepción**.
- CTAs directos: **`wa.me`** y **`tel:`**.
- **Minimización radical de datos** (sin síntomas, diagnósticos ni historial clínico).
- **Git** = fuente de verdad de artefactos.
- **`factory/`** abrible como **Vault Obsidian**.
- Clientes = **copias independientes del template**.
- **No** RAG, SaaS, CMS, agentes permanentes ni E2E complejo en V0.1.

---

## 3. PROVISIONAL

Ver detalle en [DECISION_LOG.md](./DECISION_LOG.md#provisional).

| Elemento | Duración / condición |
|----------|---------------------|
| Astro + Tailwind CSS | Apuesta operativa **90 días** — **no demostrada empíricamente** |
| Formulario nativo | Hasta revisión post-C1 |
| `copy.md` + config mínima | Sustituto de SiteSpec/CMS para C1 |
| Template simple reutilizable | Evoluciona con C1–C3 |
| Email como transporte de leads | Proveedor: OPEN |

**Astro es apuesta operativa, no conclusión empírica.** El informe OpenCode/Ox documenta: cero builds, cero benchmarks, cero código ejecutado, métricas `[NOT MEASURED]`.

---

## 4. OPEN

Ver detalle en [DECISION_LOG.md](./DECISION_LOG.md#open).

ICP definitivo · dental como nicho · oferta · pricing · email transaccional · analytics · evolución formulario · momento n8n · momento persistencia · evolución framework · necesidad futura SiteSpec · topología Git a largo plazo.

---

## 5. DO NOT BUILD

Ver detalle en [DECISION_LOG.md](./DECISION_LOG.md#do-not-build).

SiteSpec CMS · JSON Schema/Zod del SiteSpec Gemini · blocks[]/page builder · n8n C1 · Telegram obligatorio · Sheets leads C1 · Supabase/PostgreSQL C1 · Git upstream/forks · RAG · agentes permanentes · SaaS · CMS · Storybook/design system · E2E complejo · segundo framework.

---

## 6. Evidencia utilizada

| Documento | Tipo | Ubicación |
|-----------|------|-----------|
| **Gemini** — SiteSpec Contract V0.1 | Contrato conceptual (archivado) | [SITESPEC_CONTRACT_V0.1.md](../docs/factory/SITESPEC_CONTRACT_V0.1.md) |
| **Gemini** — Final Review V0.1 | Síntesis estratégica (no evidencia primaria) | [GEMINI_FINAL_REVIEW_V0.1.md](../spikes/GEMINI_FINAL_REVIEW_V0.1.md) |
| **OpenCode/Ox** — Architecture Spike | Spike analítico PROVISIONAL | [OPEN_CODE_ARCHITECTURE_SPIKE.md](../spikes/OPEN_CODE_ARCHITECTURE_SPIKE.md) |
| **Grok** — Red Team V0.1 | Revisión adversarial | [GROK_RED_TEAM_V0.1.md](../spikes/GROK_RED_TEAM_V0.1.md) |
| Contexto V0.2 | Contexto consolidado | [DIGITAL_FACTORY_CONTEXT.md](../docs/context/DIGITAL_FACTORY_CONTEXT.md) |

---

## 7. Contradicciones resueltas

| Contradicción | Resolución V0.1 |
|---------------|-----------------|
| **SiteSpec Gemini** (contrato tabular modular, 10 secciones) vs **Ox** (`sitespec.json` único + `blocks[]` + JSON Schema) | **Descartado para C1.** Implementar `copy.md` + configuración mínima. Contrato Gemini **archivado** como trazabilidad. |
| **Astro vs Next.js** (Ox recomienda Astro provisionalmente; sin evidencia empírica) | **Astro + Tailwind** como apuesta operativa 90 días. **No** declarado ganador técnico. Protocolo empírico Ox §9 diferido post-C1 o si C1 lo exige. |
| **Template upstream + fork** (Ox) vs **monorepo** (análisis Composer) | **Copia independiente del template** por cliente en C1. Forks/upstream: DO NOT BUILD. Topología largo plazo: OPEN. |
| **n8n + webhook + Sheets** (Gemini/Ox integraciones) vs **simplicidad C1** (Grok) | **Email directo** a recepción. n8n, Sheets, Supabase: DO NOT BUILD en C1. |
| **WhatsApp Cloud API / automatización** vs **CTAs directos** | **`wa.me` + `tel:`** en landing. API/automatización WhatsApp: fuera de C1. |
| **Recopilación amplia de datos en formulario** vs **RGPD / minimización** | **Minimización radical.** No síntomas, diagnósticos ni historial clínico. |

---

## 8. Limitaciones de la evidencia

**[FACT]** Ningún spike produjo evidencia cuantitativa:

- OpenCode/Ox: **ANALYSIS-ONLY** — `[NOT MEASURED]` en bundle, build time, Lighthouse, agent tasks.
- SiteSpec Gemini: **nunca validado** contra pipeline de build.
- Grok Red Team: revisión adversarial — **no** implica validación experimental.
- Gemini Final Review: **síntesis estratégica** — no evidencia primaria.

**[FACT]** No hay Cliente 1. No hay datos de mercado (CAC, LTV, pricing validado).

---

## 9. Criterios para reabrir decisiones

Reabrir una decisión **DECIDED** o **PROVISIONAL** cuando ocurra **al menos uno**:

1. **Cliente 1 entregado** — retrospectiva documentada en `docs/learnings/`.
2. **Fin ventana 90 días** de apuesta Astro — ejecutar protocolo empírico Ox §9 o decidir continuar con datos de C1.
3. **Trigger de volumen** — p. ej. ≥3 clientes o leads/mes que hagan insostenible email manual (reevaluar n8n/persistencia).
4. **Cambio de ICP** — dental no convierte; pivot documentado en Decision Record.
5. **Incidente** — fallo RGPD, pérdida leads, o deuda técnica bloqueante.

Reapertura = nuevo Decision Record + actualización de este freeze (V0.2+). **Append-only** en spikes; no reescribir historia.

---

## 10. Próximo objetivo: Cliente 1

**[DECISION]** Fin de nuevos spikes técnicos antes de validar mercado.

**Próximos pasos operativos (fuera de este freeze):**

1. Landing propia + outbound (ventas).
2. Template mínimo: Astro + Tailwind + `copy.md` + config (cuando se autorice fase implementación).
3. Formulario → email recepción + `wa.me` + `tel:`.
4. Entrega C1 → retrospectiva → reevaluar PROVISIONAL y OPEN.

---

*Fin del Architecture Freeze V0.1.*
