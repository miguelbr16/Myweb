# docs/architecture/adr/

## Propósito

**Architecture Decision Records (ADRs)** — registro de decisiones arquitectónicas significativas con contexto, opciones consideradas y consecuencias.

Formato sugerido por ADR: título, estado (propuesto | aceptado | rechazado | superseded), contexto, decisión, consecuencias.

## Qué debe vivir aquí

- ADRs numerados (p. ej. `0001-record-format.md`, `0002-frontend-framework.md`)
- Decisiones técnicas **después** de Red Team y aprobación humana
- Referencias a spikes en `spikes/` que informaron la decisión

## Qué NO debe vivir aquí

- Decisiones de negocio puras → `docs/strategy/` o `decisions/`
- Borradores sin estado explícito
- ADRs “aceptados” antes de revisión Red Team
- Código o implementación

## Plantilla (cuando se use)

Cada ADR debe incluir al menos: **Contexto**, **Decisión**, **Consecuencias**, **Alternativas rechazadas**, **Estado**.
