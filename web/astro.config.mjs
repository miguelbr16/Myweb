// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// Salida estática: Cloudflare sirve dist/ y functions/ gestiona el formulario.
export default defineConfig({
  site: "https://example.com", // TODO: tu dominio
  output: "static",
  vite: {
    plugins: [tailwindcss()],
  },
});
