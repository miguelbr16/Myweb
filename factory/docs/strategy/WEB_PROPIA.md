# Web propia (marca personal) — V0.2

> **Estado:** base construida (Solidum Digital); pendiente de datos reales y dominio  
> **Stack:** **Astro + Tailwind + TS**, código en `web/` de este repo (P-01, P-06), salida estática en **Cloudflare** (P-10)

## 1. Marca — decisión pendiente

Candidatos y criterios: [PUESTA_EN_MARCHA_EMPRESA.md §1](./PUESTA_EN_MARCHA_EMPRESA.md#1-marca)

- [ ] Nombre de marca (3 opciones, consultar disponibilidad de dominio `.com`/`.es` y usuario de Instagram)
- [ ] Eslogan en una línea
- [ ] Tono: cercano, técnico sin jerga, orientado a resultados

Bio de Instagram sugerida (del playbook):
> Diseño web que convierte | Automatizaciones para pymes  
> Webs rápidas, útiles y fáciles de mantener  
> 📩 DM "WEB" o "INFO" | 🔗 [tu web]

## 2. Estructura

### MVP (semanas 1–2): one-page + legal

Una sola página con anclas, que convierte mejor y se entrega antes:

1. **Hero:** propuesta de valor, CTA WhatsApp y CTA formulario
2. **Problema:** 5 errores que hacen perder clientes a la web de un negocio local
3. **Servicios y paquetes:** tabla de [OFERTA_Y_PRECIOS.md](./OFERTA_Y_PRECIOS.md) con rangos "desde"
4. **Proceso:** brief → MVP en X días → iteración con datos
5. **Casos:** proyectos reales con permiso escrito del cliente, o demos señaladas como tales
6. **Sobre mí:** científico de datos que hace webs y las mide
7. **FAQ:** plazos, mantenimiento, propiedad del código y del dominio
8. **Contacto:** formulario mínimo (nombre, email, servicio, mensaje), `wa.me` y `tel:`
9. `/legal`: aviso legal, privacidad y cookies

### Fase 2 (tras los primeros leads)

`/servicios` · `/casos` · `/proceso` · `/sobre-mi` · `/contacto` como páginas independientes, `/recursos` (guías y checklists como lead magnet) y EN opcional.

### Fase 3 (tras C1)

`/presupuesto` (presupuestador, X-17) y landings por vertical (`/clinicas-dentales`, `/productoras`…).

## 3. Requisitos técnicos

- Responsive en móvil, tablet y escritorio. Lighthouse móvil ≥ 90.
- Formulario → **función de Cloudflare** (Turnstile + **Resend**): acuse al lead + aviso al fundador (P-07, P-10).
- Formulario con **minimización de datos** (D-05) y checkbox de privacidad.
- Analítica: **Cloudflare Web Analytics** (sin cookies, sin banner por analítica).
- Medición: visitas a `/gracias` = leads del formulario; WhatsApp con mensaje predefinido (Cloudflare Web Analytics no tiene eventos personalizados).
- **Código:** [`web/`](../../../web/README.md), base ya creada (2026-09-30).
- Legal real: titular, NIF y dirección (LSSI), política de privacidad y lista de encargados (Cloudflare, Resend).
