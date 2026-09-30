# 2026-09-30 — Fusión Myweb + WEB_DEV/DEV-BUSINESS-PLAYBOOK

> **Estado:** PROPUESTO — pendiente de aprobación del fundador  
> **Relacionado:** [AUDITORIA_2026-09-30.md](../docs/audit/AUDITORIA_2026-09-30.md) · [DECISION_LOG.md](./DECISION_LOG.md)

## DECISIÓN

1. **Fuente única de verdad:** este repo (`Myweb`). El playbook de `WEB_DEV` se importa sin modificar en `factory/archive/web_dev_playbook_2026-07-07/` y su contenido se reescribe en Markdown en `docs/strategy/` y `docs/playbooks/`. `WEB_DEV` queda archivado.
2. **Stack:** ~~Next.js reutilizando la plantilla de 24Shoots~~ → **revisado el mismo día:** 24Shoots es otro proyecto y no se reutiliza su código. **Se mantiene Astro (P-01)** sobre Cloudflare, y la web propia se crea desde cero en `web/` (P-06).
3. **Cliente ideal en dos niveles:**
   - **Web propia (marca):** negocios locales de servicios que captan por WhatsApp o Instagram y tienen una web floja o inexistente.
   - **Outbound:** **un solo vertical cada vez**, con un experimento de 30 días (15 conversaciones). El primer vertical lo elige el fundador (dental, que ya es la hipótesis de V0.2, u otro sector donde tenga contactos o experiencia).
4. **Automatizaciones:** en V0.1 solo entra el **nivel 1** (formulario → Resend → acuse al lead + aviso al fundador). CRM, presupuestador, dashboard y PDF quedan en **DO NOT BUILD** hasta que se cumpla un trigger del freeze (C1 entregado, ≥3 clientes o ≥30 leads al mes).
5. **Oferta:** los paquetes Starter / Pro / Auto de WEB_DEV se adoptan como **hipótesis de precio**, y se añade una **Landing de conversión** como producto de entrada, en línea con D-02.

## CONTEXTO

- Los dos repos describen el mismo negocio con decisiones contradictorias (ver la tabla del §4 de la auditoría).
- P-01 era una apuesta sin medir. Se propuso sustituirla por Next.js para reutilizar código de 24Shoots, pero el fundador aclaró que ese es otro proyecto, así que P-01 se mantiene.
- El roadmap de WEB_DEV contradice su propia regla ("no automatizaciones complejas antes de 3 clientes") y el DO NOT BUILD del freeze.

## ALTERNATIVAS RECHAZADAS

- **Mantener dos repos:** duplica contexto y confunde a cualquier agente de IA sobre cuál es la fuente de verdad.
- **Usar WEB_DEV como definitivo:** no tiene disciplina de decisiones, la escritura es de solo lectura desde esta sesión y el formato `.txt` no se integra con Obsidian.
- **Reutilizar el código de 24Shoots (Next.js):** es otro proyecto, de un cliente. Mezclarlo contamina el negocio propio con datos y decisiones ajenas.

## CONSECUENCIAS

- Actualizar el DECISION_LOG: se añaden P-06…P-10, D-10 y X-16…X-19. P-01 se mantiene.
- **[RISK]** No existe plantilla propia: la web propia es el primer uso y la semilla de la plantilla.
- **[RISK]** El fundador conoce mejor Next.js que Astro. Se mitiga porque los componentes `.astro` son casi HTML.
- Topología: `Myweb` contiene documentación + `web/` (web propia). Se extrae la plantilla a su propio repo tras ≥3 usos; cada cliente tiene su copia independiente (D-08).

## ETIQUETAS

- **FACT:** ni Myweb ni WEB_DEV contienen código web propio (verificado el 2026-09-30).
- **ASSUMPTION:** una one-page en Astro se puede tener en producción en 2–3 sesiones de trabajo.
- **HYPOTHESIS:** un único vertical de outbound convierte mejor que un mensaje generalista.
- **RISK:** que la fusión se use como excusa para otra ronda de diseño. No habrá más spikes.

## REVISIÓN RED TEAM

N/A: consolida documentos ya existentes, no introduce arquitectura nueva. El fundador aprueba o rechaza.
