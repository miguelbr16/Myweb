// Todo el contenido y los datos de la web viven aquí (P-03: copy + config mínima).
// Cambia los valores marcados con TODO. No hace falta tocar los componentes.

export const site = {
  brand: "Tu Marca", // TODO: nombre de marca
  tagline: "Webs que convierten visitas en clientes", // TODO: eslogan
  description:
    "Diseño webs y landings rápidas para negocios locales, conectadas a WhatsApp y a tu email, y medidas con datos.",
  url: "https://example.com", // TODO: mismo dominio que en astro.config.mjs
  locale: "es-ES",
  // Pre-lanzamiento: la web está en *.pages.dev y no debe aparecer en Google.
  // Cámbialo a false cuando tengas dominio propio y lances de verdad.
  prelaunch: true,

  contact: {
    email: "hola@example.com", // TODO
    phone: "+34600000000", // TODO: formato internacional sin espacios
    whatsapp: "34600000000", // TODO: sin "+" ni espacios (para wa.me)
    whatsappText: "Hola, me gustaría información sobre una web para mi negocio",
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
  title: "Tu web debería traerte clientes, no solo visitas",
  subtitle:
    "Webs y landings mobile-first, conectadas a WhatsApp y a tu email, entregadas en días y medidas con datos.",
  ctaPrimary: "Pide tu auditoría gratis",
  ctaSecondary: "Escríbeme por WhatsApp",
};

export const problems = {
  title: "5 errores que hacen perder clientes a la web de un negocio local",
  items: [
    { title: "No hay un botón claro", text: "El visitante no sabe qué hacer ni cómo contactarte." },
    { title: "Va mal en el móvil", text: "La mayoría de tus clientes te visitan desde el móvil." },
    { title: "Tarda en cargar", text: "Cada segundo de espera es gente que se va." },
    { title: "Sin prueba social", text: "Sin reseñas ni casos, cuesta confiar." },
    { title: "Formulario eterno", text: "Pedir demasiados datos hace que no te escriban." },
  ],
};

// Fuente: factory/docs/strategy/OFERTA_Y_PRECIOS.md (precios orientativos).
export const services = {
  title: "Servicios",
  subtitle: "Precios orientativos con presupuesto cerrado tras una llamada de 15 minutos.",
  items: [
    {
      name: "Landing de conversión",
      price: "desde 450 €",
      time: "3–5 días",
      features: ["1 página mobile-first", "WhatsApp, llamada y formulario", "SEO técnico base", "Textos legales"],
    },
    {
      name: "Web Starter",
      price: "desde 700 €",
      time: "5–8 días",
      features: ["Inicio, servicios, contacto y legal", "Responsive completo", "Formulario conectado a tu email", "SEO técnico base"],
      featured: true,
    },
    {
      name: "Web Conversion Pro",
      price: "desde 1.400 €",
      time: "8–12 días",
      features: ["Todo lo de Starter", "Español e inglés", "Casos o portfolio", "Analítica y mejora de textos"],
    },
  ],
  recurring: "Mantenimiento mensual desde 80 €/mes. Automatizaciones a medida: consúltame.",
};

export const process = {
  title: "Cómo trabajo",
  steps: [
    { title: "Diagnóstico", text: "Analizo tu web o tu negocio y te propongo qué necesitas (y qué no)." },
    { title: "MVP en días", text: "Lanzamos primero lo que capta clientes. Sin esperas de meses." },
    { title: "Medir y mejorar", text: "Vemos los datos reales (clics, contactos) y optimizamos." },
  ],
};

export const about = {
  title: "Sobre mí",
  text: [
    "Soy científico de datos y desarrollador web. No hago webs solo bonitas: las mido y las optimizo para que te traigan contactos.",
    "Trabajo con código propio y ligero, sin plugins ni cuotas de CMS, para que tu web sea rápida y barata de mantener.",
  ],
};

export const faq = {
  title: "Preguntas frecuentes",
  items: [
    { q: "¿Cuánto tarda una web?", a: "Una landing, entre 3 y 5 días. Una web completa, entre 5 y 12 días, siempre que tenga tus textos y fotos." },
    { q: "¿La web y el dominio son míos?", a: "Sí. El dominio va a tu nombre y la web es tuya." },
    { q: "¿Puedo hacer cambios después?", a: "Sí. Puedes contratar mantenimiento mensual o pedirme cambios puntuales." },
    { q: "¿Cómo se paga?", a: "50 % al empezar y 50 % en la entrega." },
  ],
};

export const contactSection = {
  title: "Pide tu auditoría gratis",
  subtitle: "Te respondo en menos de 24 h laborables con 3 mejoras concretas para tu web.",
  serviceOptions: ["Landing de conversión", "Web nueva", "Mejorar mi web actual", "Automatizaciones", "Otro"],
};
