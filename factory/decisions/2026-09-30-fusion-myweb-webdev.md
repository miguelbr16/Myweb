# 2026-09-30 — Fusión Myweb + WEB_DEV/DEV-BUSINESS-PLAYBOOK

> **Estado:** PROPUESTO — pendiente de aprobación del fundador  
> **Relacionado:** [AUDITORIA_2026-09-30.md](../docs/audit/AUDITORIA_2026-09-30.md) · [DECISION_LOG.md](./DECISION_LOG.md)

## DECISIÓN

1. **Fuente única de verdad:** este repo (`Myweb`). El playbook de `WEB_DEV` se importa sin modificar en `factory/archive/web_dev_playbook_2026-07-07/` y su contenido se reescribe en Markdown en `docs/strategy/` y `docs/playbooks/`. `WEB_DEV` queda archivado.
2. **Stack:** se sustituye P-01 (Astro) por **Next.js + Tailwind + TypeScript + contenido en JSON**, reutilizando la plantilla que ya existe de 24Shoots.
3. **Cliente ideal en dos niveles:**
   - **Web propia (marca):** negocios locales de servicios que captan por WhatsApp o Instagram y tienen una web floja o inexistente.
   - **Outbound:** **un solo vertical cada vez**, con un experimento de 30 días (15 conversaciones). El primer vertical lo elige el fundador (dental, que ya es la hipótesis de V0.2, o productoras audiovisuales, donde ya hay un caso real con 24Shoots).
4. **Automatizaciones:** en V0.1 solo entra el **nivel 1** (formulario → Resend → acuse al lead + aviso al fundador). CRM, presupuestador, dashboard y PDF quedan en **DO NOT BUILD** hasta que se cumpla un trigger del freeze (C1 entregado, ≥3 clientes o ≥30 leads al mes).
5. **Oferta:** los paquetes Starter / Pro / Auto de WEB_DEV se adoptan como **hipótesis de precio**, y se añade una **Landing de conversión** como producto de entrada, en línea con D-02.

## CONTEXTO

- Los dos repos describen el mismo negocio con decisiones contradictorias (ver la tabla del §4 de la auditoría).
- P-01 era una apuesta sin medir y el fundador ya tiene una plantilla Next.js funcionando. Mantener Astro obligaría a construir un segundo template, lo que contradice X-15 ("no segundo framework").
- El roadmap de WEB_DEV contradice su propia regla ("no automatizaciones complejas antes de 3 clientes") y el DO NOT BUILD del freeze.

## ALTERNATIVAS RECHAZADAS

- **Mantener dos repos:** duplica contexto y confunde a cualquier agente de IA sobre cuál es la fuente de verdad.
- **Usar WEB_DEV como definitivo:** no tiene disciplina de decisiones, la escritura es de solo lectura desde esta sesión y el formato `.txt` no se integra con Obsidian.
- **Mantener Astro:** exige reescribir una plantilla que ya funciona, sin evidencia medida que lo justifique.

## CONSECUENCIAS

- Actualizar el DECISION_LOG: P-01 pasa a SUPERSEDED y se añaden P-06, P-07 y X-16…X-19.
- **[RISK]** La plantilla de 24Shoots todavía no está en ningún repo. Es la acción número 1.
- **[RISK]** Next.js envía más JavaScript que Astro por defecto. Se mitiga con componentes de servidor y con Lighthouse móvil ≥90 como criterio de QA.
- La topología de repos se mantiene: `Myweb` para documentación y negocio, `site-template` para código, y una copia por cliente (D-08).

## ETIQUETAS

- **FACT:** la plantilla Next.js existe y se usó en 24Shoots (según el playbook del 2026-07-07).
- **ASSUMPTION:** la plantilla puede separarse de 24Shoots en menos de un día.
- **HYPOTHESIS:** un único vertical de outbound convierte mejor que un mensaje generalista.
- **RISK:** que la fusión se use como excusa para otra ronda de diseño. No habrá más spikes.

## REVISIÓN RED TEAM

N/A: consolida documentos ya existentes, no introduce arquitectura nueva. El fundador aprueba o rechaza.
