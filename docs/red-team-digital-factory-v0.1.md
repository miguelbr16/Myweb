# Red Team — Digital Factory V0.1

**Rol:** auditor independiente. Sin código. Sin consenso. Sin complacer.  
**Fecha:** 22 agosto 2026.  
**Sesgo:** Grok 4.6. Donde ataco una propuesta de Ox/Gemini, no es “ganar el stack”; es localizar qué se rompe con 1 persona y 0 clientes.  
**Material atacado:** este encargo + docs del repo. No hay SiteSpec real en Git, solo el esquema conceptual de Gemini y la pila de Ox.

Leyenda: **[FACT]** · **[ASSUMPTION]** · **[HYPOTHESIS]** · **[RECOMMENDATION]** · **[RISK]** · **[DO NOT BUILD]**

---

## Premisa que ya está rota

**[FACT]** En este mismo hilo se afirmó que *no* hay oferta dental. Este encargo vuelve a evaluar “clínicas dentales y estética/servicios médicos en España”. Eso no es iterar un ICP: es **oscilar**.

**[RISK]** Cada oscilación reinicia SiteSpec, claims, RGPD y el “mañana Maps”. La fábrica no tiene producto; tiene un vertical que entra y sale del brief.

**[RECOMMENDATION]** Cerrar por escrito, hoy: *estamos prospectando X / no estamos prospectando Y*. Hasta que eso exista, todo lo de abajo es arquitectura para un cliente imaginario.

**[FACT]** 1 fundador, ~40 h, 0 clientes, presupuesto limitado — lo dice el encargo. El cuello de botella declarado es captura de demanda, no el compilador.

---

## 1. Astro vs Next.js

No se puede elegir el framework “de la fábrica a 20 clientes” sin saber si el producto en el cliente 10 sigue siendo **una landing** o ya es **app + booking + login**.

### Qué es cierto

**[FACT]** V0.1 está restringido a landings mobile-first de conversión.  
**[FACT]** Astro está pensado para sitios de contenido con JS por islas; Next, para aplicaciones con servidor.  
**[ASSUMPTION]** Composer/Cursor tienen más ejemplos y skills de Next que de Astro. No lo he medido aquí.  
**[ASSUMPTION]** El fundador puede entregar calidad en cualquiera de los dos.

### Por cliente

| Escala | Astro | Next |
|---|---|---|
| **C1** | Gana: menos runtime, LCP más fácil, menos formas de liarla | Pierde por tentación (RSC, server actions, “ya que estamos”) |
| **C5** | Gana si las 5 son clones con copy/fotos distintas | Empata si 2 de 5 piden widget de reserva / área privada |
| **C10** | Se mantiene si sois una fábrica de *páginas* | Gana si el retainer empuja “portal + leads + login” |
| **C20** | **No se puede resolver.** Depende de si el producto cambió | Igual |

**Reutilización:** ambos clonan igual si el contenido está fuera del layout. El framework no es la fábrica; el *paquete de páginas* sí.

**Agentes de código:** **[HYPOTHESIS]** Next es más “conocido” por el agente → menos vueltas. Eso no lo hace mejor producto; lo hace más barato de *picar*. Astro mal promptado produce islas mal usadas (todo React, pierdes la ventaja).

**Interactividad:** un form nativo + `wa.me` no necesita Next. Un calendario + auth + dashboard de leads ya no es V0.1; si lo sois, Next.

**Deuda:** Next genera deuda de *features*. Astro genera deuda de *migración* el día que dejeis de ser landings. Las dos son reales. La primera llega antes si el fundador se aburre.

**Dependencia:** ambas os atan a Vercel igual. El lock-in no decide.

### Veredicto de esta sección

**[RECOMMENDATION]** Para *este* V0.1 (landing, form nativo, sin CMS, sin app): **Astro**. No porque sea “mejor framework”, sino porque castiga menos el overbuild.

**Si Next gana:** solo si decidís *ahora* que el entregable incluye API routes + algo app-like antes del cliente 5. El encargo dice que no.

**Si no se puede resolver:** el debate C20. **[DO NOT BUILD]** un bake-off de dos starters. **Congelar uno 90 días.** El error caro no es elegir Astro; es elegir *los dos* o reabrir el hilo cada semana.

---

## 2. SiteSpec

El de Gemini (metadata, brand, structure, content, lead_capture, behavior, integrations, analytics, SEO) **no es un spec de landing**. Es un CMS + un Agency OS en forma de árbol.

**¿Demasiado grande?** Sí.  
**¿Acoplado a clínicas?** El encargo no pega el YAML, pero “lead_capture + behavior + integrations” para un vertical sanitario empuja campos de cita/tratamiento que mañana no sirven para un fontanero — o peor, meten salud en el formulario.  
**[ASSUMPTION]** Si el spec se diseñó leyendo el brief dental, está sesgado. No lo he visto en Git.

| Debe ser **configuración** (datos) | Debe ser **código** (template) | Debe **quedar fuera** V0.1 |
|---|---|---|
| Nombre, oferta (1), CTA, teléfono, wa.me, 3 colores, logo, 1–2 fotos, copy en MD, ID analytics, textos legales URL | Layout, form HTML, validación, deploy, eventos canónicos | behavior engine, A/B, integraciones, SEO “completo”, sitemap ritual, design tokens de 40 claves, multi-idioma |

**Sobran:** `behavior`, `integrations`, SEO largo, structure de 8 páginas, brand system.  
**Faltan:** `scope_out` (qué no entra), `assets_ready` (sí/no), `consent_copy`, `hours_budget`, `decision_log_ref`. Esos evitan scope creep. No evitan un YAML bonito.

**Formato:** **[RECOMMENDATION]** combinación.

- `sitespec.yaml` — ≤20 claves.  
- `copy.md` — textos.  
- Tipos/Zod **en el template**, no un motor que “compile el sitio”.

JSON puro es peor de editar. TypeScript-como-datos (`content.ts`) funciona en C1 y se convierte en debate de PRs en C5. Markdown solo no valida teléfono ni IDs.

**[DO NOT BUILD]** SiteSpec “completo” de Gemini. **[RECOMMENDATION]** plantilla de 1 página + 20 campos. Si no cabe, no es V0.1.

---

## 3. Repositorios (template + repo/cliente + upstream)

Ox describe el modelo de *open source*: template, forks, `git remote add upstream`, merge.

**Eso se rompe en el cliente 3.**

- **C1:** “modificaciones” = hero y fotos. Upstream inútil, no hay nada que subir.  
- **C5:** cada clínica pidió un bloque raro (equipo, financiación, mapa, iframe de Doctoralia). El merge de upstream **pica conflictos en archivos que el agente “arregla” mal**.  
- **C10:** o abandonáis upstream (el template muere) o no personalizáis (el comercial muere).

**[RISK]** Upstream da la *sensación* de fábrica y el *trabajo* de mantenedor de 10 forks. Una persona no es GitHub.

| Modelo | Para 1 persona, 0→10 clientes |
|---|---|
| Fork + upstream | **Rechazar.** Conflictos no pagados |
| `git clone` del template, remoto olvidado | **Aprobar C1–C3.** Barato, honesto |
| Monorepo `clients/*` | Útil si queréis un PR de “arreglar el form” en todos. Coste de CI y de secretos mezclados |
| Package `packages/ui` | **After C3**, y solo componentes usados ≥2 veces |
| Un solo repo, carpetas por cliente | Sucio en GitHub Pages/Vercel; viable en C1–C2 |

**[RECOMMENDATION]** `factory-template` (1 repo) → **copia** a `client-<id>` (repo nuevo, **sin** upstream). Cuando el mismo componente se copie a mano 2 veces, extraer paquete. No antes.

**[DO NOT BUILD]** política de rebases upstream. **[DO NOT BUILD]** monorepo “porque escala”.

---

## 4. Sheets vs Supabase

Ninguno de los dos es el problema del cliente 1. El problema es **dónde vive un lead que puede ser dato de salud**.

| | Email solo | Sheets vía n8n | Supabase vía n8n |
|---|---|---|---|
| Coste C1 | 0 | 0–bajo | 0–bajo (free) |
| Mantenimiento | Casi 0 | Permisos, pestañas, roturas de columnas | Proyecto, keys, RLS “luego” |
| RGPD | Encargado = vuestro mail host | Google como encargado + hojas compartibles | Mejor historia de DPA; **no** lava art. 9 |
| Fiabilidad | Alta, aburrida | Media (gente pisa celdas) | Alta si no os inventáis auth |
| Portabilidad | Baja (inbox) | Export CSV | Alta |
| Reporting C1 | Reenvío | El cliente “ve la hoja” | Hay que construir vista |
| C5 | Sigue valiendo | 5 hojas, 5 líos | 5 tablas o multi-tenant prematuro |
| C10 | No | Caos | Empieza a justificarse **si** hay retainer de leads |

**[RECOMMENDATION]** C1: **formulario → email (y/o WhatsApp)**. Ni Sheets ni Supabase.  
Sheets es comercialmente cómodo (“mira el Excel”) y **[RISK]** legalmente holgado si hay salud o el enlace se reenvía.  
Supabase “para no migrar” es el mismo argumento que el Agency OS.

**[DO NOT BUILD]** persistencia propia hasta que un cliente pague por ver los leads fuera del correo.

---

## 5. Telegram vs WhatsApp vs email

**Rechazo Telegram como canal por defecto.**

**[ASSUMPTION]** La recepción de una clínica en España vive en **WhatsApp** y en el teléfono de la mesa. Telegram es el chat de *developers*.  
**[HYPOTHESIS]** Pedir a una recepcionista “instala Telegram para los leads” añade fricción de venta y un punto de fallo humano (no lo miran).  
No tengo encuesta. Por eso no puedo *demostrar* que no lo usen. Puedo decir que **elegirlo por el bot de n8n es facilidad técnica disfrazada de producto**.

| Canal | Técnicamente | Comercialmente (servicios ES, hipótesis) |
|---|---|---|
| **Email** | Fácil, auditable, feo | Correcto como *registro*. Nadie está 8 h en el inbox de leads |
| **Telegram** | El más fácil para vosotros | **Incorrecto como default.** Canal vuestro, no del cliente |
| **WhatsApp (`wa.me` / click-to-chat)** | Trivial, sin API | **Correcto para el visitante y para la clínica** |
| **WhatsApp Business API** | Pesado, plantillas, coste | Prematuro en C1 |
| **CRM** | Otro producto | El de *ellos* (o ninguno) |
| **SMS** | Coste por mensaje | Overkill |

**[RECOMMENDATION]** Producto: CTA móvil = llamada + WhatsApp URL. Aviso al centro: **email** (y, si *ellos* lo piden, reenvío a un grupo WhatsApp que ya usan). Telegram: opcional para *vosotros* (debug), nunca en la propuesta.

---

## 6. RGPD y datos de salud

No es dictamen. Es mapa de mina.

**[FACT]** Los datos de salud son categoría especial (art. 9 RGPD). Un formulario de clínica *puede* recogerlos aunque no queráis (“dolor en la muela”, “adjuntar radiografía”).  
**[FACT]** Sois encargados o corresponsables según cómo hosteéis el form y a quién reenviéis. n8n y Google son terceros.  
**[FACT]** La publicidad de servicios sanitarios en España tiene límites (promesas de resultado, etc.) — el copy no es un problema “de Astro”.

**Evitar en el form:** síntomas, diagnóstico, historial, medicación, DNI, fotos clínicas, “explica tu caso” en texto libre largo, cualquier archivo.

**Aceptable como hipótesis comercial (validar con asesor):** nombre, teléfono, franja horaria, *tratamiento de interés* como lista cerrada (no relato clínico), consentimiento de contacto comercial explícito y separado.

**Qué debería pasar con los datos:** mínimo, destino único, retención corta, sin reenvíos a modelos (Ox/OpenRouter **[FACT]** puede retener prompts). **[DO NOT BUILD]** “el agente lee los leads”.

**n8n:** logs, historial de ejecuciones, backups, quién tiene la instancia. Un webhook abierto es un buzón de spam y de datos.

**Sheets:** enlaces, “anyone with the link”, copias en Drive, móviles del personal. Fácil de *enseñar*; difícil de *cerrar*.

**Validar con un profesional antes de vender a clínicas:** base jurídica, encargados (Vercel, n8n, Google, email), dónde se aloja, si el form es “solicitud de información” o “dato de salud”, texto de consentimiento, qué pasa al borrar al cliente. **No invento el checklist legal cerrado.**

**[RISK]** Vender “sistema de captación para clínicas” *antes* de esa conversación es vender un pasivo.

---

## 7. n8n

**No lo necesitáis en el cliente 1.**

Form → webhook de formtool/email nativo → buzón de la clínica: una hora, se entiende, se debuguea.

n8n aporta valor cuando **el mismo** grafo se copia (email + hoja + aviso) y os duele. Eso es C3+, no “arquitectura V0.1”.

**Complejidad que mete ahora:** otra cuenta, secretos, un proceso que “a veces no tira”, una razón para no vender (está caído *vuestro* middleware).

**[RECOMMENDATION]** Dejar n8n *instalado en la cabeza*, no en el camino crítico. Ox lo pone porque es elegante.

---

## 8. Analytics

Sin tráfico del cliente, **ninguna** herramienta demuestra resultados. El riesgo no es elegir mal el SaaS; es **prometer medición de un sitio que nadie visita**.

Para *demostrar* algo en C1 hace falta:

1. Que exista un medio (ads del cliente, Maps, Instagram). Eso no lo construye la factory.  
2. Tres eventos: `click_call`, `click_whatsapp`, `lead_submit`.  
3. Un sitio que cargue en móvil.

| Herramienta | ¿V0.1? |
|---|---|
| **Ninguna + conteo manual de emails** | Honesto si hay 3 leads/semana |
| **GA4** | Vale: el cliente “ya lo conoce”; cookies/consent |
| **Plausible** | Mejor historia privacy; no es $0 eterno |
| **PostHog** | **[DO NOT BUILD]** product analytics para una landing |
| **Eventos propios + warehouse** | Teatro |

**[RECOMMENDATION]** Eventos canónicos en el template + **una** de GA4 o Plausible. No las dos. No PostHog. El “resultado” que podéis *afirmar* es: el sistema registró N clics/envíos. No “+X pacientes”.

---

## 9. La tubería INTAKE → … → FACTORY IMPROVEMENT

Se rompe **arriba y abajo**, no en ASSEMBLY.

1. **INTAKE** — el cliente no da fotos, no decide oferta, cambia el logo. Automatizar assembly sobre intake podrido produce slop.  
2. **RESULTADOS** — sin canal, el loop de learnings es ficción.  
3. **FACTORY IMPROVEMENT** — con 0–1 proyectos estáis “mejorando” una muestra de N=1. Eso es sobreajuste, no fábrica.

**Automatizáis demasiado pronto:** SiteSpec motor, n8n multi-destino, upstream, Zod-como-producto, el recuadro LEARNINGS→IMPROVEMENT.

**Estandarizar día 1 (barato):**

- Alcance cerrado (1 landing, 1 ronda).  
- Checklist de assets.  
- Checklist QA móvil (form, wa.me, legal, 3 eventos).  
- Registro de horas por fase.  
- `decisions.md`.

Eso *es* la factory V0.1. El resto es un diagrama.

---

## 10. Multimodelo

**Sí, son demasiados para 0 clientes:** ChatGPT + Gemini + Grok + Ox + Composer = cinco cerebros y cero pipeline comercial.

**Pérdida de contexto:** cada réplica es un pegado. Ox no verá el `decisions.md` de Obsidian (y yo tampoco veo Obsidian). SiteSpec “vive” en un chat de Gemini y el código en Composer: **divergen**.

**Contradicciones ya observadas:** dental sí/no; Telegram vs WhatsApp; Astro vs Next; n8n ahora vs después; SiteSpec gordo vs corto.

**Autoridad:** **[RECOMMENDATION]** ya la escribisteis y no la estáis usando.

```
Tú firmas.
Gemini ⇄ ChatGPT = 1 ronda.
Composer pica el spec firmado.
Ox = pico ≤4 h, sin PII, esta semana, o nada.
Grok = este tipo de ataque, no el daily driver.
Git gana al chat.
```

**[DO NOT BUILD]** una quinta opinión “por rigor” en cada ticket.

---

# Entregable

## A. 5 decisiones que APROBARÍA

1. V0.1 = landings mobile-first de conversión, no la visión entera.  
2. No RAG, no agentes permanentes, no SaaS, no CMS, no E2E pesado.  
3. Formulario nativo (o Tally) + TypeScript strict *en el template*.  
4. Vercel + Git.  
5. Gemini ⇄ ChatGPT, **una** ronda, y tú cierras — no un council de 5.

## B. 5 decisiones que RECHAZARÍA

1. **Telegram como canal de leads al centro.** Alternativa: `wa.me` + email.  
2. **SiteSpec conceptual de Gemini (9 bloques).** Alternativa: ≤20 claves YAML + `copy.md`.  
3. **Fork + upstream por cliente.** Alternativa: copia del template, sin remote de mantenimiento.  
4. **n8n + Sheets (o Supabase) en el cliente 1.** Alternativa: form → email.  
5. **Ox/OpenCode como pieza de arquitectura.** Alternativa: pico o cero; Composer es el constructor que queda.

## C. 5 decisiones ABIERTAS

1. **ICP real** (dental / estética / otro / ninguno). Hoy está en contradicción.  
2. **Astro vs Next a 10–20 clientes** si el producto deja de ser landing.  
3. **Precio** — no hay WTP. Cualquier cifra es [HYPOTHESIS].  
4. **GA4 vs Plausible** — ambas sirven; no hay dato de qué acepta el ICP.  
5. **Cuándo extraer `packages/ui`** — se ve en el cliente 3, no en un diagrama.

## D. 10 riesgos (prioridad = daño × cercanía)

| # | Riesgo | Tipo | Por qué arriba |
|---|---|---|---|
| 1 | 0 conversaciones mientras se “cierra” la factory | Comercial / ops | Mata el trimestre |
| 2 | ICP que entra y sale (dental ↔ no dental) | Estratégico | Reinicia todo |
| 3 | Formulario de clínica + Sheets/n8n + prompts a terceros | Legal / seguridad | Art. 9; Ox/OpenRouter |
| 4 | Prometer resultados / “captación” sin canal | Comercial / legal | No hay N |
| 5 | Telegram como requisito del cliente | Comercial | Canal equivocado |
| 6 | SiteSpec/motor + upstream = meta-trabajo | Sobreingeniería | 40 h |
| 7 | 5 modelos, 0 artefacto canónico | Ops / IA | Decisiones que rebotan |
| 8 | Primer cliente 80 h, margen 0 | Ops | Factory no pagada |
| 9 | Next *y* Astro, o rebase a mitad | Técnico | Deuda de indecisión |
| 10 | Ox desaparece y el template solo compilaba allí | Ops | Ventana |

## E. VEREDICTO ASTRO VS NEXT

**Astro para V0.1–C5** si el entregable es landing + form + CTAs.  
**Next** solo si el entregable incluye superficie de app antes de C5.  
**C20: abierto.** Congelar **uno** 90 días. No bake-off.

## F. VEREDICTO SITESPEC

**Rechazar el árbol de Gemini.**  
**Aprobar** YAML ≤20 campos + Markdown de copy + Zod *dentro del template*.  
No compilador. No `behavior`/`integrations`.

## G. VEREDICTO REPOSITORIOS

**Template único + repos cliente por copia, sin upstream.**  
Paquete compartido after C3.  
Monorepo/fork-tracking: no.

## H. VEREDICTO DATOS / SUPABASE / SHEETS

**C1: ni Sheets ni Supabase.** Email (y WhatsApp).  
Sheets: cómodo, flojo para salud.  
Supabase: mejor ingeniería, misma pregunta legal, más superficie.  
Reabrir persistencia cuando un cliente **pague** por ver leads fuera del correo.

## I. VEREDICTO NOTIFICACIONES

**WhatsApp URL + email.**  
Telegram = no default.  
WhatsApp API / CRM / SMS = later.

## J. VEREDICTO N8N

**No en el camino crítico del cliente 1.**  
Sí como candidato after el mismo flujo se copie 2 veces.

## K. VEREDICTO ARQUITECTURA DIGITAL FACTORY

El diagrama INTAKE→…→IMPROVEMENT es **correcto como mapa mental** y **prematuro como sistema**.  
V0.1 real = intake checklist + spec corto + template + QA humano + deploy + log de horas.  
ASSEMBLY automatizado y FACTORY IMPROVEMENT son teatro con N<3.

## L. 10 cosas que NO construiría en 30 días

1. SiteSpec “completo” / motor.  
2. Upstream + 10 forks.  
3. n8n multi-destino.  
4. Supabase o Sheets de leads clínicos.  
5. Telegram como producto.  
6. RAG, agentes, Agency OS, CRM propio.  
7. Design system / 30 componentes.  
8. CMS, E2E, PostHog.  
9. Segundo framework o bake-off Astro/Next.  
10. Cualquier cosa en Ox con PII o “el agente lee leads”.

## M. 5 cosas que SÍ construiría

1. **Oferta de 1 página** (qué vendéis, a quién *esta semana*, precio como experimento).  
2. **Conversaciones** — lista y contacto; sin esto el resto es hobby.  
3. **Un template** (Astro o Next, uno) de 1 landing: hero, oferta, CTA, form mínimo, legal, 3 eventos.  
4. **`sitespec.yaml` de 20 campos + `copy.md` + checklist QA.**  
5. **`decisions.md`** — incluida la línea ICP sí/no dental.

---

**Cierre:** Ox hizo un análisis *técnicamente coherente para una factory que ya tiene demanda*. No la tenéis. Gemini hizo un spec *para una fábrica que ya tiene 10 proyectos iguales*. No los tenéis.

La decisión que más se rompe al “escalar” no es Astro. Es **escalar infraestructura con N=0**.
