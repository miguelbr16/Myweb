# docs/factory/

## Propósito

Documentación del **motor de factory**: contratos, schemas conceptuales, reglas de reutilización, criterios de promoción (componente vs template vs custom).

Define *cómo* debe funcionar la producción repetible, no los proyectos de cliente concretos.

## Qué debe vivir aquí

- Contrato SiteSpec / ProjectSpec (p. ej. `SITESPEC_CONTRACT_V0.1.md`)
- Reglas de separación CONTENT / CONFIG / DESIGN / COMPONENTS
- Criterios “BUILD NOW vs DO NOT BUILD” para elementos de factory
- Versiones de contratos (`V0.1`, `V0.2`, …)

## Qué NO debe vivir aquí

- SiteSpec **instances** de clientes → `specs/sitespec/<project>/`
- Código de componentes o templates
- Decisiones puntuales de un solo cliente
- Implementación JSON Schema / Zod (cuando exista, vivirá junto a specs o en repo de código)
