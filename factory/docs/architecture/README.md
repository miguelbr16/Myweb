# docs/architecture/

## Propósito

Documentación de **arquitectura conceptual y técnica**: diagramas, stack (cuando se decida), separación de concerns, integraciones, deployment.

**[FACT]** En el estado actual, las decisiones arquitectónicas están **pendientes de Red Team** y no deben tratarse como cerradas hasta que exista un Decision Record aprobado.

## Qué debe vivir aquí

- Diagramas de arquitectura (conceptual)
- Descripción de capas (frontend, backend, datos, IA, etc.) — **provisional**
- Preguntas abiertas y trade-offs documentados
- Enlaces a ADRs en `adr/`

## Qué NO debe vivir aquí

- Decision Records finales → preferir `decisions/` (o copia enlazada)
- SiteSpec contract → `docs/factory/SITESPEC_CONTRACT_V0.1.md`
- Código, configs de CI, Dockerfiles
- Secrets, API keys, credenciales
- Decisiones presentadas como cerradas sin Red Team + humano
