// Genera public/og.png y public/apple-touch-icon.png desde scripts/brand-assets.html.
// Requiere Playwright y un Chromium: `npx playwright install chromium` (una vez) y `node scripts/brand-assets.mjs`.
import { chromium } from "playwright";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
const page = join(here, "brand-assets.html");
const out = join(here, "..", "public");

const browser = await chromium.launch(process.env.CHROMIUM_PATH ? { executablePath: process.env.CHROMIUM_PATH } : {});
for (const [mode, file, w, h] of [
  ["og-mode", "og.png", 1200, 630],
  ["icon-mode", "apple-touch-icon.png", 180, 180],
]) {
  const p = await browser.newPage({ viewport: { width: w, height: h } });
  await p.goto(`file://${page}`);
  await p.evaluate((m) => document.body.classList.add(m), mode);
  await p.evaluate(() => document.fonts.ready);
  await p.screenshot({ path: join(out, file) });
  await p.close();
}
await browser.close();
console.log("og.png y apple-touch-icon.png generados");
