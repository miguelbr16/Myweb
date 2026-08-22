# specs/sitespec/

## Propósito

**Instancias ejecutables de SiteSpec** por proyecto (cliente, demo, ficticio para validación).

Cada subcarpeta representa un proyecto con su spec modular (YAML/JSON) según el contrato en `docs/factory/SITESPEC_CONTRACT_V0.1.md`.

## Qué debe vivir aquí

- `<project-name>/spec/` — módulos de spec (business, brand, pages, seo, etc.)
- Referencias a content (paths, no copy largo inline en spec)
- `specVersion` por proyecto
- Proyectos demo/ficticios para validar el contrato

## Qué NO debe vivir aquí

- El contrato conceptual global → `docs/factory/SITESPEC_CONTRACT_V0.1.md`
- Código fuente del sitio (cuando exista repo de código, vivirá fuera o en monorepo futuro)
- Secrets / API keys
- Copy completo de páginas (preferir `content/` en estructura de proyecto)
- JSON monolítico gigante

## Estado actual

**[FACT]** Vacío — no hay instancias SiteSpec creadas en esta fase de scaffolding.
