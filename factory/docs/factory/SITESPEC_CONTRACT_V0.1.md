# SiteSpec Contract V0.1

> **Versión:** 0.1.0  
> **Estado:** Draft Conceptual Proposal (Pending Architecture Freeze)  
> **Fuente:** Gemini — importado 2026-08-22  
> **Ubicación instancias:** `specs/sitespec/<project-name>/`

**STATUS:**  
ARCHIVED / REJECTED FOR V0.1

**REASON:**  
El contrato conceptual de Gemini se conserva como evidencia histórica y trazabilidad, pero no se implementará en V0.1 porque Grok y Gemini posterior identificaron sobre-especificación y riesgo de convertirlo en un CMS.

---

# SITESPEC CONTRACT V0.1 (ESPECIFICACIÓN CONCEPTUAL)

Status: Draft Conceptual Proposal (Pending Architecture Freeze)
Version: 0.1.0
Scope: Universal High-Conversion Landing Pages for Service Businesses

---

## 1. Metadata (Control del Proyecto)

| Campo | Propósito | Req / Opc | Tipo Conceptual | Ejemplo | Modificado por |
| :--- | :--- | :---: | :--- | :--- | :---: |
| `project_id` | Identificador único de proyecto y cliente | **REQ** | String alfanumérico con slug | `"es-mad-dental-implantes-01"` | Humano / IA |
| `client_name` | Nombre comercial del cliente/negocio | **REQ** | Texto plano | `"Clínica Dental Dr. García"` | Cliente |
| `locale` | Configuración regional e idioma principal | **REQ** | Código IETF (ISO 639-1 / 3166-1) | `"es-ES"` | Humano / IA |
| `spec_version` | Versión del schema de datos utilizado | **REQ** | SemVer String | `"0.1.0"` | Humano / IA |
| `environment` | Estado del despliegue para control de build | **REQ** | Enum (`draft` \| `preview` \| `production`) | `"preview"` | Humano |
| `created_at` | Marca temporal de creación del proyecto | **REQ** | Timestamp ISO 8601 | `"2026-08-22T18:00:00Z"` | IA / Sistema |
| `updated_at` | Última modificación de los datos | **REQ** | Timestamp ISO 8601 | `"2026-08-22T19:15:00Z"` | IA / Sistema |

---

## 2. Brand & Design Tokens (Identidad Visual)

| Campo | Propósito | Req / Opc | Tipo Conceptual | Ejemplo | Modificado por |
| :--- | :--- | :---: | :--- | :--- | :---: |
| `colors.primary` | Color principal de acción y CTAs | **REQ** | Color (Hex o HSL) | `"#0E7490"` | Cliente / IA |
| `colors.primary_hover` | Estado interactivo del botón principal | **OPC** | Color (Hex o HSL) | `"#155E75"` | IA |
| `colors.background` | Fondo base de la página | **REQ** | Color (Hex o HSL) | `"#FFFFFF"` | IA |
| `colors.surface` | Fondo para tarjetas, cajas y contenedores | **OPC** | Color (Hex o HSL) | `"#F8FAFC"` | IA |
| `colors.text_main` | Color para titulares y texto de lectura | **REQ** | Color (Hex o HSL) | `"#0F172A"` | IA |
| `colors.text_muted` | Color para textos secundarios y subtítulos | **OPC** | Color (Hex o HSL) | `"#64748B"` | IA |
| `typography.heading_font`| Tipografía para titulares (H1-H3) | **REQ** | Nombre de fuente estándar | `"Inter"` | IA / Humano |
| `typography.body_font` | Tipografía para párrafos y formularios | **REQ** | Nombre de fuente estándar | `"Inter"` | IA / Humano |
| `assets.logo_url` | Ruta relativa o URL del logotipo optimizado | **REQ** | Path / URL | `"/assets/logo.svg"` | Cliente / Humano |
| `assets.logo_alt` | Texto alternativo para accesibilidad del logo | **REQ** | Texto plano | `"Logo Clínica Dr. García"` | IA |
| `assets.favicon_url` | Ruta relativa al favicon del navegador | **REQ** | Path / URL | `"/assets/favicon.ico"` | Humano / IA |
| `style_tokens.border_radius` | Redondeo de esquinas en botones y tarjetas | **OPC** | Enum (`none` \| `sm` \| `md` \| `lg` \| `full`) | `"md"` | IA |

---

## 3. Structure (Pipeline de Secciones)

| Campo | Propósito | Req / Opc | Tipo Conceptual | Ejemplo | Modificado por |
| :--- | :--- | :---: | :--- | :--- | :---: |
| `section_order` | Secuencia exacta de renderizado en el viewport | **REQ** | Array ordenado de Enums (`hero`, `trust_bar`, `problem_solution`, `benefits_grid`, `process`, `doctor_authority`, `testimonials`, `faq`, `lead_capture`, `footer`) | `["hero", "trust_bar", "problem_solution", "benefits_grid", "lead_capture", "faq", "footer"]` | Humano / IA |

---

## 4. Content (Módulos de Contenido)

### Hero
| Campo | Propósito | Req / Opc | Tipo Conceptual | Ejemplo | Modificado por |
| :--- | :--- | :---: | :--- | :--- | :---: |
| `hero.badge` | Etiqueta superior de contexto o especialidad | **OPC** | Texto plano ($\le 40$ car.) | `"Especialistas en Implantología Avanzada"` | IA |
| `hero.headline` | Titular de impacto orientado a conversión | **REQ** | Texto plano ($\le 80$ car.) | `"Recupera tu sonrisa fija en un solo día sin dolor"` | IA / Cliente |
| `hero.subheadline` | Explicación de soporte y propuesta de valor | **REQ** | Texto plano ($\le 160$ car.) | `"Diagnóstico 3D y presupuesto cerrado en tu primera consulta gratuita en Madrid."` | IA |
| `hero.cta_label` | Texto visible en el botón principal | **REQ** | Texto plano ($\le 30$ car.) | `"Pide tu Primera Cita Gratuita"` | IA |
| `hero.cta_action` | Destino del botón (ancla interna o URL) | **REQ** | String identificador / URL | `"#formulario"` | IA |
| `hero.hero_image` | Imagen principal de consulta o servicio | **REQ** | Path / URL a imagen WebP | `"/assets/hero-clinica.webp"` | Cliente / Humano |
| `hero.social_proof_pill` | Micro-texto de prueba social junto al CTA | **OPC** | Texto plano | `"⭐ 4.9/5 en Google (+450 reseñas reales)"` | IA |

### Trust Bar
| Campo | Propósito | Req / Opc | Tipo Conceptual | Ejemplo | Modificado por |
| :--- | :--- | :---: | :--- | :--- | :---: |
| `trust_bar.metrics` | Estadísticas o cifras clave de autoridad | **OPC** | Array de Objetos `{ value: String, label: String }` | `[{"value": "+3.000", "label": "Tratamientos realizados"}, {"value": "15 años", "label": "De experiencia"}]` | Cliente / IA |
| `trust_bar.certifications` | Logos de colegios o tecnología certificada | **OPC** | Array de URLs/Paths | `["/assets/cert-secib.svg"]` | Cliente / Humano |

### Problem / Solution
| Campo | Propósito | Req / Opc | Tipo Conceptual | Ejemplo | Modificado por |
| :--- | :--- | :---: | :--- | :--- | :---: |
| `problem_solution.title` | Titular que aborda el dolor principal | **REQ** | Texto plano | `"¿Dudas sobre el tratamiento o presupuestos opacos?"` | IA |
| `problem_solution.pain_points` | Lista de objeciones o fricciones comunes | **REQ** | Array de Strings | `["Miedo a intervenciones largas", "Presupuestos con costes ocultos"]` | IA |
| `problem_solution.solution` | Cómo el negocio elimina la fricción | **REQ** | Texto plano | `"Aplicamos tecnología digital guiada y presupuesto cerrado sin sorpresas."` | IA |

### Benefits Grid
| Campo | Propósito | Req / Opc | Tipo Conceptual | Ejemplo | Modificado por |
| :--- | :--- | :---: | :--- | :--- | :---: |
| `benefits_grid.title` | Titular del bloque de ventajas | **REQ** | Texto plano | `"Por qué realizar tu tratamiento con nosotros"` | IA |
| `benefits_grid.items` | Lista de tarjetas de beneficios clave | **REQ** | Array de Objetos `{ icon_id: String, title: String, description: String }` | `[{"icon_id": "shield", "title": "Garantía total", "description": "Materiales certificados de máxima durabilidad."}]` | IA |

### Doctor / Specialist Authority
| Campo | Propósito | Req / Opc | Tipo Conceptual | Ejemplo | Modificado por |
| :--- | :--- | :---: | :--- | :--- | :---: |
| `doctor_authority.name` | Nombre completo del especialista responsable | **REQ** | Texto plano | `"Dr. Alejandro García"` | Cliente |
| `doctor_authority.license` | Número oficial de colegiado/acreditación | **REQ** | Texto plano | `"Col. Oficial Nº 28004512"` | Cliente |
| `doctor_authority.bio` | Extracto de experiencia y especialidad | **REQ** | Texto plano ($\le 250$ car.) | `"Máster en Cirugía Avanzada y miembro de asociaciones médicas oficiales."` | IA / Cliente |
| `doctor_authority.photo` | Fotografía profesional del especialista | **REQ** | Path / URL a imagen WebP | `"/assets/dr-garcia.webp"` | Cliente |

### Testimonials
| Campo | Propósito | Req / Opc | Tipo Conceptual | Ejemplo | Modificado por |
| :--- | :--- | :---: | :--- | :--- | :---: |
| `testimonials.title` | Titular del bloque de opiniones | **REQ** | Texto plano | `"Opiniones de nuestros pacientes"` | IA |
| `testimonials.items` | Lista de testimonios con valoración | **REQ** | Array de Objetos `{ author: String, treatment: String, quote: String, rating: Number }` | `[{"author": "María R.", "treatment": "Tratamiento Integral", "quote": "Trato excelente y resultados inmediatos.", "rating": 5}]` | Cliente / IA |

### FAQ
| Campo | Propósito | Req / Opc | Tipo Conceptual | Ejemplo | Modificado por |
| :--- | :--- | :---: | :--- | :--- | :---: |
| `faq.title` | Titular de la sección de preguntas | **REQ** | Texto plano | `"Preguntas Frecuentes"` | IA |
| `faq.items` | Lista de pares pregunta-respuesta | **REQ** | Array de Objetos `{ question: String, answer: String }` | `[{"question": "¿Cuánto dura la primera consulta?", "answer": "La valoración y diagnóstico se completan en 30 minutos."}]` | IA / Cliente |

### Footer & Legal
| Campo | Propósito | Req / Opc | Tipo Conceptual | Ejemplo | Modificado por |
| :--- | :--- | :---: | :--- | :--- | :---: |
| `footer.legal_name` | Razón social del negocio / Titular | **REQ** | Texto plano | `"Clínica García SL"` | Cliente |
| `footer.cif` | Identificador fiscal para cumplimiento | **REQ** | Texto alfanumérico | `"B-87654321"` | Cliente |
| `footer.address` | Dirección física del centro | **REQ** | Texto plano | `"Calle Serrano 45, 1ºD, 28001 Madrid"` | Cliente |
| `footer.phone_display` | Teléfono visible para contacto directo | **REQ** | Texto plano | `"91 555 12 34"` | Cliente |
| `footer.schedule` | Horario de atención de la recepción | **REQ** | Texto plano | `"L-V: 09:00 a 20:00 h"` | Cliente |
| `footer.legal_links` | Enlaces a páginas de textos legales | **REQ** | Objeto `{ privacy: String, legal: String, cookies: String }` | `{"privacy": "/privacidad", "legal": "/aviso-legal", "cookies": "/cookies"}` | Humano / IA |

---

## 5. Lead Capture (Cualificación e Interacción)

| Campo | Propósito | Req / Opc | Tipo Conceptual | Ejemplo | Modificado por |
| :--- | :--- | :---: | :--- | :--- | :---: |
| `lead_capture.form_id` | Identificador único del formulario | **REQ** | String alfanumérico | `"form-captacion-v1"` | IA |
| `lead_capture.type` | Formato de presentación del formulario | **REQ** | Enum (`single_step` \| `multi_step`) | `"multi_step"` | IA / Humano |
| `lead_capture.headline` | Titular encima del formulario | **REQ** | Texto plano | `"Solicita tu Diagnóstico Completo y Cita sin Compromiso"` | IA |
| `lead_capture.subheadline`| Texto secundario de apoyo | **OPC** | Texto plano | `"Te confirmamos disponibilidad en menos de 2 horas laborables."` | IA |
| `lead_capture.submit_label`| Texto del botón de envío final | **REQ** | Texto plano | `"Comprobar Disponibilidad Ahora"` | IA |
| `lead_capture.fields` | Lista ordenada de preguntas / campos | **REQ** | Array de Objetos `{ id: String, label: String, type: Enum, required: Boolean, options?: Array<String> }` | `[{"id": "urgency", "label": "¿Cuándo deseas iniciar?", "type": "radio", "required": true, "options": ["Este mes", "En 3 meses", "Solo informándome"]}, {"id": "phone", "label": "Teléfono de contacto", "type": "tel", "required": true}]` | IA / Humano |
| `lead_capture.privacy_consent`| Texto de consentimiento informado RGPD | **REQ** | Objeto `{ text: String, url: String }` | `{"text": "Acepto la política de privacidad para la gestión de mi cita.", "url": "/privacidad"}` | Humano / IA |
| `lead_capture.success_action` | Acción inmediata tras envío correcto | **REQ** | Objeto `{ type: Enum("redirect" \| "inline_message"), value: String }` | `{"type": "inline_message", "value": "¡Gracias! Hemos recibido tu solicitud. Te contactaremos en breve."}` | IA |

---

## 6. Behavior (Micro-Conversión y Triggers Móviles)

| Campo | Propósito | Req / Opc | Tipo Conceptual | Ejemplo | Modificado por |
| :--- | :--- | :---: | :--- | :--- | :---: |
| `behavior.whatsapp_button.enabled` | Activación del botón flotante de WhatsApp | **REQ** | Booleano | `true` | IA / Humano |
| `behavior.whatsapp_button.phone` | Teléfono de WhatsApp con prefijo internacional | **REQ\*** | String numérico sin signos | `"34612345678"` | Cliente |
| `behavior.whatsapp_button.message` | Mensaje precargado al pulsar el botón | **REQ\*** | Texto plano URL-safe | `"Hola, quiero consultar disponibilidad de cita."` | IA |
| `behavior.sticky_mobile_bar.enabled` | Barra de acción fija en la parte inferior móvil | **REQ** | Booleano | `true` | IA / Humano |
| `behavior.sticky_mobile_bar.label` | Texto visible en el botón inferior fijo | **REQ\*** | Texto plano | `"Pedir Cita Gratuita"` | IA |
| `behavior.sticky_mobile_bar.action` | Acción al pulsar la barra fija | **REQ\*** | Enum (`scroll_to_form` \| `open_whatsapp` \| `call_phone`) | `"scroll_to_form"` | IA |
| `behavior.click_to_call_phone` | Teléfono para llamadas directas tipo `tel:` | **REQ** | String telefónico con prefijo | `"+34915551234"` | Cliente |

*\*Obligatorio solo si el módulo correspondiente está marcado como `enabled: true`.*

---

## 7. Integrations (Rutas de Entrega de Leads)

| Campo | Propósito | Req / Opc | Tipo Conceptual | Ejemplo | Modificado por |
| :--- | :--- | :---: | :--- | :--- | :---: |
| `integrations.webhook_url` | Endpoint HTTPS de n8n para ingestión | **REQ** | URL HTTPS | `"https://n8n.digitalfactory.internal/webhook/lead-service-01"` | Humano |
| `integrations.routing.notify_whatsapp` | Notificar al WhatsApp de recepción | **REQ** | Booleano | `true` | Humano / Cliente |
| `integrations.routing.notify_email` | Enviar alerta por correo a la clínica | **REQ** | Booleano | `true` | Humano / Cliente |
| `integrations.routing.reception_emails`| Correos destino de la clínica | **REQ\*** | Array de Emails | `["recepcion@clinicagarcia.es"]` | Cliente |
| `integrations.routing.log_to_sheets` | Guardar registro tabular centralizado | **REQ** | Booleano | `true` | Humano |

---

## 8. Analytics & Telemetría

| Campo | Propósito | Req / Opc | Tipo Conceptual | Ejemplo | Modificado por |
| :--- | :--- | :---: | :--- | :--- | :---: |
| `analytics.provider` | Plataforma analítica para registro de visitas | **REQ** | Enum (`plausible` \| `ga4` \| `none`) | `"plausible"` | Humano |
| `analytics.domain_id` | Dominio o Measurement ID | **REQ\*** | String | `"tratamiento.clinicagarcia.es"` | Humano |
| `analytics.events.lead_submitted` | Nombre del evento al enviar el formulario | **REQ** | String identificador | `"generate_lead"` | IA / Humano |
| `analytics.events.whatsapp_clicked` | Nombre del evento al pulsar botón WhatsApp | **REQ** | String identificador | `"click_whatsapp"` | IA / Humano |
| `analytics.events.call_clicked` | Nombre del evento al pulsar enlace de llamada | **REQ** | String identificador | `"click_phone"` | IA / Humano |
| `analytics.meta_pixel_id` | Identificador de Meta Pixel para anuncios | **OPC** | String numérico | `"123456789012345"` | Cliente / Humano |

---

## 9. SEO & Social Metadata

| Campo | Propósito | Req / Opc | Tipo Conceptual | Ejemplo | Modificado por |
| :--- | :--- | :---: | :--- | :--- | :---: |
| `seo.meta_title` | Titular de la pestaña en el navegador | **REQ** | Texto plano ($\le 60$ car.) | `"Tratamiento Avanzado en Madrid \| 1ª Consulta Gratuita"` | IA |
| `seo.meta_description` | Descripción para motores de búsqueda | **REQ** | Texto plano ($\le 155$ car.) | `"Especialistas en tratamientos avanzados. Diagnóstico completo y presupuesto cerrado. Pide cita hoy."` | IA |
| `seo.canonical_url` | URL oficial para evitar contenido duplicado | **REQ** | URL HTTPS completa | `"https://tratamiento.clinicagarcia.es"` | Humano |
| `seo.og_image_url` | Imagen de previsualización para WhatsApp y RRSS | **REQ** | Path / URL a imagen ($1200\times630$) | `"/assets/og-tratamiento.webp"` | IA / Humano |
| `seo.robots` | Directiva para motores de búsqueda | **REQ** | Enum (`index, follow` \| `noindex, nofollow`) | `"index, follow"` | Humano |

---

## 10. Frontera Negativa (Qué NO Pertenece al SiteSpec)

Los siguientes elementos **no deben incluirse en este contrato**, ya que corresponden a componentes internos, código de backend o infraestructura:

1. **Clases de layout o utilidades CSS:** No se permiten clases de Tailwind o CSS inline en los textos. El diseño visual estructural reside en los componentes.
2. **Secretos y credenciales:** Ninguna API Key privada, token de Vercel ni clave de base de datos entra en el spec (pertenecen a `.env`).
3. **Estructura HTML o código JSX/TSX:** No se permiten etiquetas directas ni callbacks ejecutables dentro de las cadenas de contenido.
4. **Lógica de red y reintentos:** Los fallbacks, timeouts y control de errores del webhook se programan en la infraestructura base del formulario.
5. **Transformación de datos de backend:** El formateo de mensajes para recepción se delega al workflow de n8n, manteniendo el payload del frontend limpio y estándar.

---

## Changelog (repositorio)

| Versión | Cambios |
|---------|---------|
| V0.1 (scaffold) | Placeholder — contrato Gemini pendiente |
| V0.1.0 (import) | Contrato canónico Gemini importado 2026-08-22 |
