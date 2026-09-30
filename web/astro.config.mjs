// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// Salida estática: Cloudflare sirve dist/ y functions/ gestiona el formulario.
export default defineConfig({
  // Las URLs absolutas (canonical, sitemap, JSON-LD) salen de site.url en src/content/site.ts; cámbialo allí al tener dominio.
  site: "https://example.com",
  output: "static",
  vite: {
    plugins: [tailwindcss()],
  },
});
