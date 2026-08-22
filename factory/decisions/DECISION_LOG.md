# Decision Log — Digital Factory V0.1

> **Versión:** 0.1  
> **Fecha freeze:** 2026-08-22  
> **Estado:** FROZEN FOR V0.1  
> **Relacionado:** [ARCHITECTURE_FREEZE_V0.1.md](./ARCHITECTURE_FREEZE_V0.1.md)

Registro consolidado de decisiones tras revisión Gemini + OpenCode/Ox + Grok Red Team.

Estados permitidos: **DECIDED** · **PROVISIONAL** · **OPEN** · **DO NOT BUILD**

---

## DECIDED

| ID | Decisión | Fuente |
|----|----------|--------|
| D-01 | V0.1 se centra en conseguir y entregar el **Cliente 1**. | Consolidación V0.1 |
| D-02 | El producto inicial es una **landing mobile-first orientada a conversión**. | Consolidación V0.1 |
| D-03 | Lead routing de C1: **formulario → email directo a recepción**. | Consolidación V0.1 |
| D-04 | La landing mantiene **CTAs directos** mediante `wa.me` y `tel:`. | Consolidación V0.1 |
| D-05 | **Minimización radical de datos**: no solicitar síntomas, diagnósticos ni historial clínico. | Grok Red Team + Gemini |
| D-06 | **Git** es la fuente de verdad de los artefactos. | Consolidación V0.1 |
| D-07 | `factory/` debe poder abrirse **directamente como Vault de Obsidian**. | Consolidación V0.1 |
| D-08 | Los clientes utilizan **copias independientes del template** (no forks upstream en C1). | Consolidación V0.1 |
| D-09 | No se construyen **RAG, SaaS, CMS, agentes permanentes ni E2E complejo** en V0.1. | Grok + Ox + Gemini |

---

## PROVISIONAL

> **Nota:** Lo provisional puede ejecutarse en C1 pero se revisa tras entrega o a los 90 días.

| ID | Decisión | Condición de revisión | Notas |
|----|----------|----------------------|-------|
| P-01 | **Astro + Tailwind CSS** como apuesta operativa para V0.1 durante **90 días**. | Tras C1 o protocolo empírico Ox §9 | **No demostrado empíricamente.** Ox: cero builds, cero benchmarks, métricas `[NOT MEASURED]`. Apuesta operativa, no conclusión técnica. |
| P-02 | **Formulario nativo** (no Tally ni page builder). | Tras C1 | — |
| P-03 | **`copy.md` + configuración mínima** en lugar del SiteSpec/CMS original. | Tras C1 | Sustituye contrato Gemini V0.1 para implementación. |
| P-04 | **Template simple y reutilizable**. | Tras C1–C3 | — |
| P-05 | **Email** como transporte inicial de leads. | Tras C1 | Proveedor concreto: OPEN |

---

## OPEN

| ID | Tema | Notas |
|----|------|-------|
| O-01 | ICP definitivo | Dental es hipótesis, no cerrada |
| O-02 | Si dental será el nicho principal | Validación comercial pendiente |
| O-03 | Oferta definitiva | — |
| O-04 | Pricing | — |
| O-05 | Proveedor concreto de email transaccional | — |
| O-06 | Analytics (Plausible vs GA4 vs otro) | — |
| O-07 | Evolución del formulario | — |
| O-08 | Momento de introducir n8n | No en C1 |
| O-09 | Momento de introducir persistencia (DB/Sheets) | No en C1 |
| O-10 | Evolución futura del framework | Revisión post-90 días / post C1 |
| O-11 | Necesidad futura de SiteSpec | Contrato Gemini archivado; reevaluar tras C3+ |
| O-12 | Topología Git a largo plazo | Monorepo vs template+copia vs forks |

---

## DO NOT BUILD

| ID | Elemento | Motivo resumido |
|----|----------|-----------------|
| X-01 | SiteSpec como CMS | Sobre-especificación; riesgo page builder |
| X-02 | JSON Schema / Zod del SiteSpec actual | No implementar contrato Gemini en C1 |
| X-03 | `blocks[]` / page builder | Complejidad prematura |
| X-04 | n8n en C1 | Volumen insuficiente; email directo basta |
| X-05 | Telegram como canal obligatorio | No requerido para C1 |
| X-06 | Google Sheets como almacenamiento de leads de C1 | Email a recepción suficiente |
| X-07 | Supabase / PostgreSQL en C1 | Sin trigger de persistencia |
| X-08 | Git upstream / forks | Copia independiente del template en C1 |
| X-09 | RAG | Sin corpus útil |
| X-10 | Agentes permanentes | Skills puntuales > agent sprawl |
| X-11 | SaaS | Prematuro |
| X-12 | CMS | Prematuro |
| X-13 | Storybook / design system formal | Prematuro |
| X-14 | E2E complejo | QA manual + checklist en C1 |
| X-15 | Segundo framework | Una apuesta operativa (Astro) en V0.1 |

---

## Changelog

| Fecha | Cambio |
|-------|--------|
| 2026-08-22 | Creación — Architecture Freeze V0.1 |
