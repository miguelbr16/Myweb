# Digital Factory

Repositorio de documentación, especificaciones y decisiones para la **Digital Factory** — el sistema de producción que permite entregar webs, landings y servicios relacionados de forma repetible y escalable.

## Arquitectura de conocimiento

| Capa | Rol | Herramienta |
|------|-----|-------------|
| **SOURCE OF TRUTH** | Artefactos versionados, decisiones congeladas, docs canónicos | **Git** (`factory/`) |
| **KNOWLEDGE BASE** | Navegación, enlaces, notas personales | **Obsidian** (abrir `factory/` como vault) |
| **WORKING / REVIEW ENVIRONMENTS** | Borradores, spikes en chat, iteración IA | **AI chats** (no son SOT) |

**[DECISION]** Git manda. Obsidian lee. Los chats no sustituyen lo commiteado.

## Obsidian

Abre **`factory/`** directamente como Vault de Obsidian. Markdown estándar, enlaces relativos, compatible con wiki-links.

## Estado actual — Architecture Freeze V0.1

| Aspecto | Estado |
|---------|--------|
| Freeze | **FROZEN FOR V0.1** — ver [ARCHITECTURE_FREEZE_V0.1.md](decisions/ARCHITECTURE_FREEZE_V0.1.md) |
| Objetivo inmediato | **Cliente 1** — landing mobile-first de conversión |
| Código / framework | Plantilla Next.js existente (24Shoots) — **propuesto** sustituir Astro (P-06, V0.2) |
| SiteSpec Gemini | **Archivado** — no se implementa en V0.1 |
| Spikes técnicos | **Fin** hasta validar mercado |

## Documentos clave

| Documento | Enlace |
|-----------|--------|
| Contexto V0.2 | [docs/context/DIGITAL_FACTORY_CONTEXT.md](docs/context/DIGITAL_FACTORY_CONTEXT.md) |
| SiteSpec Contract (Gemini, archivado) | [docs/factory/SITESPEC_CONTRACT_V0.1.md](docs/factory/SITESPEC_CONTRACT_V0.1.md) |
| Decision Log | [decisions/DECISION_LOG.md](decisions/DECISION_LOG.md) |
| Architecture Freeze V0.1 | [decisions/ARCHITECTURE_FREEZE_V0.1.md](decisions/ARCHITECTURE_FREEZE_V0.1.md) |
| OpenCode / Ox Spike | [spikes/OPEN_CODE_ARCHITECTURE_SPIKE.md](spikes/OPEN_CODE_ARCHITECTURE_SPIKE.md) |
| Grok Red Team | ⚠️ `spikes/GROK_RED_TEAM_V0.1.md` — **no existe en el repo** (evidencia perdida; ver auditoría M3) |
| Gemini Final Review | [spikes/GEMINI_FINAL_REVIEW_V0.1.md](spikes/GEMINI_FINAL_REVIEW_V0.1.md) |
| **Auditoría 2026-09-30** | [docs/audit/AUDITORIA_2026-09-30.md](docs/audit/AUDITORIA_2026-09-30.md) |
| **Fusión con WEB_DEV (V0.2 propuesto)** | [decisions/2026-09-30-fusion-myweb-webdev.md](decisions/2026-09-30-fusion-myweb-webdev.md) |
| Fundador y activos | [docs/context/FUNDADOR_Y_ACTIVOS.md](docs/context/FUNDADOR_Y_ACTIVOS.md) |
| Oferta y precios | [docs/strategy/OFERTA_Y_PRECIOS.md](docs/strategy/OFERTA_Y_PRECIOS.md) |
| Roadmap 8 semanas | [docs/playbooks/ROADMAP_8_SEMANAS.md](docs/playbooks/ROADMAP_8_SEMANAS.md) |

## Objetivo de Digital Factory

Convertir la entrega de proyectos digitales en un pipeline repetible:

```
CLIENTE → INTAKE → SPEC → CONFIGURACIÓN → PRODUCCIÓN → QA → DEPLOY → RESULTADOS → APRENDIZAJE → MEJORA
```

La factory acumula templates, componentes, procesos y conocimiento para reducir el tiempo de producción en cada proyecto sucesivo.

## Factory vs client projects

| | **Factory** (`factory/`) | **Client projects** (futuro) |
|--|--------------------------|--------------------------------|
| **Qué es** | Docs, decisiones, template, procesos | Entregable por cliente |
| **Vida útil** | Evoluciona continuamente | Entrega + mantenimiento |
| **C1** | Freeze V0.1, template base | Copia independiente del template |

## Estructura

```
factory/
├── docs/           # Contexto, estrategia, arquitectura, factory, playbooks, learnings
├── specs/          # Specs ejecutables (futuro; vacío en V0.1)
├── decisions/      # DECISION_LOG, ARCHITECTURE_FREEZE
├── spikes/         # Ox, Gemini review (Grok: perdido)
├── archive/        # Originales importados (WEB_DEV playbook)
└── README.md       # Este archivo
```

## Principio V0.1

**La arquitectura se congela para evitar seguir diseñando infraestructura antes de validar mercado.**
