# Web propia (marca personal) — V0.2

> **Estado:** PLAN — pendiente de nombre de marca (bloqueante)  
> **Stack:** plantilla Next.js + Tailwind + JSON (P-06)

## 1. Marca — decisión pendiente

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
5. **Casos:** 24Shoots (si el cliente lo permite) o mockup señalado como tal
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
- Formulario → API route → **Resend**: acuse al lead + aviso al fundador (P-07).
- Formulario con **minimización de datos** (D-05) y checkbox de privacidad.
- Analítica sin cookies (Plausible o Vercel Analytics) para evitar el banner si es posible (O-06).
- Eventos a medir: `lead_submitted`, `whatsapp_click`, `call_click`.
- Legal real: titular, NIF y dirección (LSSI), política de privacidad y lista de encargados (Vercel, Resend).
