// Todo el contenido y los datos de la web viven aquí (P-03: copy + config mínima).
// Cambia los valores marcados con TODO. No hace falta tocar los componentes.

export const site = {
  brand: "Solidum Digital",
  tagline: "Webs, automatización e IA con el precio a la vista",
  // Título (≤60 car.) y descripción (≤155 car.) de la home en buscadores.
  title: "Solidum Digital · Webs, automatización e IA para tu negocio",
  description:
    "Estudio digital para negocios de cualquier tamaño: webs rápidas, automatización e IA. Calcula tu presupuesto en un minuto, sin llamadas ni reuniones.",
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
  // Perfiles oficiales (LinkedIn, Instagram…). Se publican como `sameAs` en los datos estructurados. Vacío hasta que existan.
  social: [] as readonly string[],

  // Cloudflare Web Analytics (opcional). Déjalo vacío si activas la analítica desde el panel de Cloudflare.
  cfAnalyticsToken: "",
} as const;
