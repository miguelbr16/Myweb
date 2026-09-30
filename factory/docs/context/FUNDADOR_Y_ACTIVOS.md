# Fundador y activos existentes

> **Fuente:** `archive/web_dev_playbook_2026-07-07/CONTEXTO-NEGOCIO-PROPIO.txt` + `00-PLAN-MAESTRO.txt`  
> Complementa [DIGITAL_FACTORY_CONTEXT.md](./DIGITAL_FACTORY_CONTEXT.md), que no incluía esta información.

## Perfil

- **[FACT]** Científico de datos con perfil técnico.
- **[FACT]** Desarrollador web en práctica (Next.js, TypeScript, Tailwind). Astro se aprende rápido partiendo de esa base.
- **[FACT]** Trabaja desde España. Objetivo: clientes locales y en remoto.
- **Diferencial:** perfil híbrido de datos y desarrollo que **mide y optimiza**, no solo diseña.

## Qué quiere vender

1. **Webs y landings orientadas a conversión:** útiles, rápidas, con SEO base, mobile-first y fáciles de mantener.
2. **Automatizaciones:** captura de leads, brief automático, presupuestos por reglas y reporting mensual.
3. **Herramientas propias:** presupuestador (ya construido). **Futuro:** CRM ligero, panel de proyectos y plantilla clonable.

## Qué NO quiere (al inicio)

- WordPress pesado para todo.
- Depender de un CMS de pago para cada cliente.
- Prometer SEO milagroso en una semana.
- Apps móviles nativas.
- Automatizaciones complejas antes de tener 3 clientes reales.

## Activos existentes

| Activo | Estado |
|--------|--------|
| Experiencia de entrega de una web real para un cliente (24Shoots, **proyecto independiente**) | Aprendizaje y posible caso, con permiso del cliente. **No se reutiliza su código.** |
| Playbook comercial (oferta, discovery, Instagram) | Migrado a `docs/strategy/` y `docs/playbooks/` |
| Documentación de gobierno (freeze, decision log) | En este repo |
| Web propia / plantilla | **No existe todavía.** Se crea desde cero en `web/` (P-06) |

## Stack

| Capa | Elección | Estado |
|------|----------|--------|
| Frontend | **Astro** + Tailwind + TypeScript | P-01 reafirmado |
| Contenido | Archivos en el repo (`web/src/content/`), sin CMS | P-03 |
| Hosting | **Cloudflare** (exportación estática + función para el formulario) | P-10 DECIDED |
| Repo | GitHub | En uso |
| Email saliente | Resend (gratis hasta ~3.000/mes) | P-07 (propuesto) |
| Email entrante | Cloudflare Email Routing → tu Gmail | Gratis |
| Analítica | Cloudflare Web Analytics | Cierra O-06 |
| Anti-spam | Cloudflare Turnstile | Gratis |
| DB | Postgres (Supabase o Neon) | 🔒 X-16 hasta que se cumpla el trigger |

## Separación de contextos

- **24Shoots y el resto de repos** = proyectos distintos. No se mezclan con este.
- **Este repo** = marca propia, factory, negocio y **código de la web propia** (`web/`).
