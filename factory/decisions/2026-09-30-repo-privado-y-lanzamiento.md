# 2026-09-30 — Repo privado para la estrategia y lanzamiento condicionado

> **Estado:** DECIDED (fundador, 2026-09-30) · la separación de repos queda **pendiente de ejecutar** (ver consecuencias)  
> **Origen:** [AUDITORIA_EXTERNA_2026-09-30.md](../docs/audit/AUDITORIA_EXTERNA_2026-09-30.md)

## DECISIÓN

1. **Dos repos.** `Myweb` (público) guarda solo el código de la web (`web/`). Toda la estrategia, decisiones, playbooks y el archivo de WEB_DEV (`factory/`) pasan a un repo **privado**, `solidum-factory`. Sustituye a D-10 («Myweb es la única fuente de verdad»): la fuente de verdad del negocio es `solidum-factory`; la del código, `Myweb`.
2. **Oferta sin cambios por ahora.** El paquete «Web con automatización» y el extra de automatización de contactos se quedan en el configurador. **La web no se publicará hasta que los servicios estén listos** (`prelaunch` sigue en `true`). Sustituye la pregunta de la auditoría «¿puedes entregarlo mañana?» por una condición de lanzamiento.
3. **Lanzamiento con puerta automática.** `prelaunch: false` solo se puede activar si el build no encuentra datos de relleno (`web/scripts/check-launch.mjs`). Además, antes de lanzar se exige, a mano: paquetes vendibles = entregables, contrato y condiciones de venta, Turnstile de producción probado de extremo a extremo.

## CONTEXTO

- La auditoría externa señaló que el repo público regalaba el playbook y mezclaba notas fiscales que podían malinterpretarse.
- La integración de GitHub de esta sesión **no puede crear repositorios** (403), así que el fundador crea `solidum-factory` (privado y vacío) y se sube el contenido en un PR aparte.

## ALTERNATIVAS RECHAZADAS

- **Repo único privado:** más simple, pero el fundador prefiere mantener la web pública.
- **Reacotar el paquete de automatización ahora:** innecesario mientras no haya publicación.

## CONSECUENCIAS

- **[RISK]** Quitar `factory/` de `main` **no lo borra del historial de git**: cualquiera puede ver los commits anteriores del repo público, y puede haber forks o cachés. No hay credenciales en ese contenido, pero sí estrategia, precios y notas fiscales. Si importa de verdad, hay que reescribir el historial (fuerza-push, que rompe PR y enlaces) o, más simple, crear un repo público nuevo solo con `web/` y dejar el actual como privado.
- **[RISK]** Al mover `factory/`, los enlaces entre ambos repos dejan de resolverse. Se sustituyen por enlaces absolutos al repo público donde haga falta.
- Hay un paso manual: crear `solidum-factory` (privado, sin README) en GitHub.
- La decisión 2 convierte «paquetes = entregables» en criterio de lanzamiento, no de esta iteración.

## ETIQUETAS

- **FACT:** la integración de GitHub de la sesión no puede crear repos (403 verificado).
- **RISK:** historial público.
- **DECISION:** el fundador elige el doble repo y mantener la oferta.

## REVISIÓN RED TEAM

Sí: hallazgos de la auditoría externa, verificados uno a uno.
