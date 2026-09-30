// Todo el contenido y los datos de la web viven aquí (P-03: copy + config mínima).
// Cambia los valores marcados con TODO. No hace falta tocar los componentes.

export const site = {
  brand: "Solidum Digital",
  tagline: "Tecnología sólida para hacer crecer tu negocio",
  description:
    "Webs, automatización e IA para negocios de cualquier tamaño. Presupuesto al instante, sin llamadas y con resultados medidos con datos.",
  url: "https://example.com", // TODO: mismo dominio que en astro.config.mjs
  locale: "es-ES",
  // Pre-lanzamiento: la web está en *.workers.dev y no debe aparecer en Google.
  // Cámbialo a false cuando tengas dominio propio y lances de verdad.
  prelaunch: true,

  contact: {
    email: "hola@example.com", // TODO
    phone: "+34600000000", // TODO: formato internacional sin espacios
    whatsapp: "34600000000", // TODO: sin "+" ni espacios (para wa.me)
    whatsappText: "Hola Solidum, me gustaría información para mi negocio",
    city: "España",
  },

  // Datos del titular para aviso legal (LSSI). TODO: rellenar antes de publicar.
  legal: {
    owner: "[NOMBRE Y APELLIDOS O RAZÓN SOCIAL]",
    nif: "[NIF]",
    address: "[DIRECCIÓN FISCAL]",
    lastUpdated: "2026-09-30",
  },

  // Cloudflare Turnstile (clave pública). La de prueba siempre pasa.
  turnstileSiteKey: "1x00000000000000000000AA", // TODO: clave real del sitio
  // Cloudflare Web Analytics (opcional). Déjalo vacío si activas la analítica desde el panel de Cloudflare.
  cfAnalyticsToken: "",
} as const;

export const hero = {
  eyebrow: "Webs · Automatización · IA · Datos",
  title: "Tecnología sólida para hacer crecer tu negocio",
  subtitle:
    "Diseñamos webs rápidas y automatizamos cómo captas y atiendes clientes. Configura tu proyecto online y recibe el presupuesto al instante, sin llamadas.",
  ctaPrimary: "Calcula tu presupuesto",
  ctaSecondary: "Ver servicios",
};

export const problems = {
  title: "Lo que frena a la mayoría de negocios en internet",
  items: [
    { title: "Sin web o solo redes", text: "Quien te busca en Google encuentra a tu competencia primero." },
    { title: "Web lenta o anticuada", text: "La mayoría de visitas llegan desde el móvil y se van si tarda." },
    { title: "Contactos que se pierden", text: "Mensajes sin responder, formularios que no llegan, cero seguimiento." },
    { title: "Tareas repetitivas", text: "Horas respondiendo lo mismo o pasando datos a mano." },
    { title: "Decidir sin datos", text: "No sabes qué canal te trae clientes ni cuánto te cuesta cada uno." },
  ],
};

// Líneas de servicio (visión de Myweb + WEB_DEV). Fuente: factory/docs/strategy/OFERTA_Y_PRECIOS.md
export const serviceLines = {
  title: "Servicios",
  subtitle: "Desde un pequeño comercio hasta una empresa con varios equipos: empezamos por lo que más impacto tiene.",
  items: [
    {
      icon: "🌐",
      title: "Webs y landing pages",
      text: "Webs corporativas, landings de campaña y tiendas sencillas. Rápidas, mobile-first y pensadas para convertir.",
    },
    {
      icon: "⚙️",
      title: "Automatización",
      text: "Formularios que llegan solos a tu email o CRM, respuestas automáticas, recordatorios y flujos entre tus herramientas.",
    },
    {
      icon: "🤖",
      title: "Inteligencia artificial",
      text: "Asistentes que responden a tus clientes 24/7, clasificación de solicitudes y generación de documentos.",
    },
    {
      icon: "📍",
      title: "SEO y Google",
      text: "SEO técnico y local, ficha de Google optimizada y contenido para que te encuentren cuando te buscan.",
    },
    {
      icon: "📊",
      title: "Datos y analítica",
      text: "Paneles con tus métricas clave: de dónde vienen tus clientes, qué convierte y qué no.",
    },
    {
      icon: "🛡️",
      title: "Mantenimiento y crecimiento",
      text: "Hosting, seguridad, cambios y mejoras mensuales para que tu web siga funcionando y mejorando.",
    },
  ],
};

export const services = {
  title: "Paquetes",
  subtitle: "Precios orientativos. Calcula el tuyo exacto en 1 minuto con el configurador.",
  items: [
    {
      name: "Landing page",
      price: "desde 450 €",
      time: "3–5 días",
      features: ["1 página mobile-first", "WhatsApp, llamada y formulario", "SEO técnico base", "Textos legales"],
    },
    {
      name: "Web corporativa",
      price: "desde 700 €",
      time: "5–8 días",
      features: ["Hasta 5 páginas", "Formulario conectado a tu email", "SEO técnico base", "Analítica sin cookies"],
      featured: true,
    },
    {
      name: "Web + automatización",
      price: "desde 2.500 €",
      time: "12–20 días",
      features: ["Web profesional", "Contactos automatizados y registro de clientes", "Respuestas y recordatorios automáticos", "Panel de métricas"],
    },
  ],
  recurring: "Mantenimiento desde 80 €/mes. ¿Empresa o proyecto a medida? Elige «Proyecto a medida» en el configurador.",
};

export const process = {
  title: "Cómo trabajamos",
  subtitle: "Todo online y por escrito. Sin reuniones obligatorias.",
  steps: [
    { title: "Configura", text: "Elige tipo de proyecto y extras en el configurador. Ves el precio al momento." },
    { title: "Confirma", text: "Recibes la propuesta por email. Si te encaja, la aceptas y reservas con el 50 %." },
    { title: "Envía tu contenido", text: "Un formulario guiado para subir textos, fotos y logo. Si no los tienes, los creamos." },
    { title: "Revisa y publica", text: "Te enviamos un enlace de prueba, pides cambios por escrito y publicamos." },
  ],
};

export const about = {
  title: "Por qué Solidum",
  text: [
    "Combinamos desarrollo web, automatización y ciencia de datos. No hacemos webs solo bonitas: las medimos y las optimizamos para que generen negocio.",
    "Trabajamos con tecnología moderna y ligera, sin plugins ni cuotas de CMS, para que tu web sea rápida, segura y barata de mantener. Y todo el proceso es online: tú decides cuándo y cómo.",
  ],
};

export const faq = {
  title: "Preguntas frecuentes",
  items: [
    { q: "¿Tengo que hacer una llamada o reunión?", a: "No. Todo el proceso es online y por escrito. Si prefieres hablar, también puedes." },
    { q: "¿El precio del configurador es definitivo?", a: "Es un rango orientativo según lo que eliges. Te confirmamos el precio cerrado por email antes de empezar." },
    { q: "¿Cuánto tarda?", a: "Una landing, de 3 a 5 días. Una web completa, de 5 a 12 días desde que tenemos tu contenido." },
    { q: "¿La web y el dominio son míos?", a: "Sí. El dominio va a tu nombre y la web es tuya." },
    { q: "¿Trabajáis con empresas grandes?", a: "Sí. Para proyectos a medida elige «Proyecto a medida» en el configurador y te enviamos una propuesta personalizada." },
    { q: "¿Cómo se paga?", a: "50 % al confirmar y 50 % en la entrega. El mantenimiento, mensual." },
  ],
};

export const contactSection = {
  title: "¿Prefieres escribirnos?",
  subtitle: "Para dudas o proyectos a medida. Respondemos por email en menos de 24 h laborables.",
  serviceOptions: ["Web o landing", "Automatización", "Inteligencia artificial", "SEO y Google", "Datos y analítica", "Proyecto a medida", "Otro"],
};
