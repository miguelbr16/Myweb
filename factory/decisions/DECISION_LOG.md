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
| P-01 | **Astro + Tailwind CSS** como apuesta operativa para V0.1 durante **90 días**. | Tras C1 o protocolo empírico Ox §9 | **No demostrado empíricamente.** Ox: cero builds, cero benchmarks, métricas `[NOT MEASURED]`. Apuesta operativa, no conclusión técnica. **→ Reafirmado 2026-09-30:** web desde cero y hosting en Cloudflare (P-10). |
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

## V0.2 — PROPUESTO (pendiente de aprobación del fundador)

> Fuente: [2026-09-30-fusion-myweb-webdev.md](./2026-09-30-fusion-myweb-webdev.md) · [Auditoría](../docs/audit/AUDITORIA_2026-09-30.md)  
> Append-only: las secciones anteriores no se reescriben; esta sección las matiza.

| ID | Tipo | Decisión | Sustituye / resuelve |
|----|------|----------|----------------------|
| P-06 | PROVISIONAL | **Web propia desde cero en `web/` (este repo)**, con Astro + Tailwind + TS y contenido en archivos (P-03). No se reutiliza código de otros proyectos. Se extrae a un repo de plantilla tras ≥3 usos | Resuelve W2 · refuerza P-01 y P-04 |
| P-10 | **DECIDED** | **Cloudflare** como hosting: exportación estática + función para el formulario (Turnstile + Resend). Web Analytics de Cloudflare → [decisión](./2026-09-30-hosting-cloudflare.md) | Cierra O-06 |
| P-07 | PROVISIONAL | **Resend** como proveedor de email transaccional (formulario → acuse al lead + aviso al fundador) | Cierra O-05 |
| P-08 | PROVISIONAL | **Oferta de 4 niveles** (Landing / Starter / Pro / Auto) + recurrentes, como hipótesis de precio → [OFERTA_Y_PRECIOS.md](../docs/strategy/OFERTA_Y_PRECIOS.md) | Avanza O-03, O-04 |
| P-09 | PROVISIONAL | **Cliente ideal en dos niveles**: marca generalista (negocios locales de servicios) y outbound a **un vertical cada vez**, con experimento de 30 días | Avanza O-01, O-02 |
| D-10 | DECIDED | **Myweb es la única fuente de verdad.** WEB_DEV queda archivado en `archive/` | — |
| X-16 | DO NOT BUILD | CRM propio / tabla de leads en DB antes del trigger (C1 entregado, ≥3 clientes o ≥30 leads/mes) | Roadmap WEB_DEV semana 5 |
| ~~X-17~~ | ~~DO NOT BUILD~~ | ~~Presupuestador por reglas antes de C1~~ → **sustituido por P-11** | Roadmap WEB_DEV semana 6 |
| P-11 | **DECIDED** | **Modelo de venta asíncrono**: configurador `/presupuesto` con precio al instante, todo por email, sin llamadas obligatorias. Marca **Solidum Digital** → [decisión](./2026-09-30-modelo-asincrono.md) | Sustituye X-17 |
| P-12 | PROVISIONAL | **Dirección de diseño industrial-editorial** (hormigón, tinta y un naranja señal; Archivo variable; ticket de presupuesto como pieza propia) y narrativa encontrar, entender, escribir. Sin reseñas, logos ni cifras inventados → [DISENO_Y_NARRATIVA.md](../docs/strategy/DISENO_Y_NARRATIVA.md) | Revisar tras las primeras visitas reales |
| P-13 | PROVISIONAL | **SEO técnico + GEO/AEO en el build**: JSON-LD desde la misma fuente que el texto, `robots.txt`, `sitemap.xml` y `llms.txt` generados, atribución sin cookies. SEM: sin etiquetas hasta tener consentimiento → [SEO_SEM_GEO_AEO.md](../docs/strategy/SEO_SEM_GEO_AEO.md) | Revisar al lanzar anuncios |
| X-20 | DO NOT BUILD | Envíos automáticos de email, WhatsApp o DM en frío (LSSI art. 21) y scraping de Google Maps (usar Places API) | Legal |
| X-18 | DO NOT BUILD | Dashboard y PDF automático de propuestas antes de C1 | Roadmap WEB_DEV semanas 7–8 |
| X-19 | DO NOT BUILD | Panel `/admin` con "password simple" (usar autenticación real o no tener panel) | Seguridad y RGPD |

---

## Changelog

| Fecha | Cambio |
|-------|--------|
| 2026-08-22 | Creación — Architecture Freeze V0.1 |
| 2026-09-30 | V0.2 PROPUESTO — fusión con WEB_DEV (P-06…P-09, D-10, X-16…X-19) |
| 2026-09-30 | P-10 DECIDED — hosting en Cloudflare |
| 2026-09-30 | P-06 redefinido: sin código de 24Shoots; P-01 (Astro) reafirmado |
| 2026-09-30 | P-11 modelo asíncrono + Solidum Digital; X-17 sustituido; X-20 añadido |
| 2026-09-30 | P-12 dirección de diseño; P-13 SEO/GEO/AEO en el build |
