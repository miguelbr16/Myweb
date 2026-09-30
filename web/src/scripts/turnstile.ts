// Turnstile (antispam de Cloudflare) se carga solo cuando el formulario está cerca o se toca:
// así la portada no descarga un script de terceros que la mayoría de visitas no necesita.
const widgets = document.querySelectorAll(".cf-turnstile");
if (widgets.length) {
  let loaded = false;
  const load = () => {
    if (loaded) return;
    loaded = true;
    observer.disconnect();
    const script = document.createElement("script");
    script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js";
    script.async = true;
    script.defer = true;
    document.head.append(script);
  };
  const observer = new IntersectionObserver((entries) => entries.some((e) => e.isIntersecting) && load(), {
    rootMargin: "600px",
  });
  widgets.forEach((w) => observer.observe(w));
  document.addEventListener("focusin", (e) => {
    if ((e.target as Element).closest("form")?.querySelector(".cf-turnstile")) load();
  });
}
