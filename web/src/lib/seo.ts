// Datos estructurados (JSON-LD) y URLs absolutas. Todo sale de site.ts/home.ts/pricing.ts:
// lo que dice el schema es exactamente lo que se ve en pantalla (Google penaliza la deriva).
import { site } from "../content/site";
import { faq, serviceCatalog } from "../content/home";
import { projectTypes } from "../content/pricing";

export const origin = site.url.replace(/\/$/, "");
export const abs = (path = "/") => new URL(path, `${origin}/`).toString();

const id = (fragment: string) => `${origin}/#${fragment}`;
const hasRealPhone = !site.contact.phone.includes("0000000");

export const faqNode = (url: string) => ({
  "@type": "FAQPage",
  "@id": `${url}#faq`,
  mainEntity: faq.items.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
});

export function homeGraph() {
  const provider = { "@id": id("organization") };
  const packages = Object.values(projectTypes).filter((p) => p.range);
  return [
    {
      "@type": "Organization",
      "@id": id("organization"),
      name: site.brand,
      url: abs("/"),
      logo: { "@type": "ImageObject", url: abs("/logo.svg") },
      description: site.description,
      email: site.contact.email,
      ...(hasRealPhone ? { telephone: site.contact.phone } : {}),
      areaServed: { "@type": "Country", name: "España" },
      knowsLanguage: "es",
      ...(site.social.length ? { sameAs: [...site.social] } : {}),
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: site.contact.email,
        availableLanguage: "es",
        areaServed: "ES",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Paquetes de webs y automatización",
        itemListElement: packages.map((p) => ({
          "@type": "Offer",
          name: p.label,
          priceCurrency: "EUR",
          priceSpecification: {
            "@type": "PriceSpecification",
            minPrice: p.range![0],
            maxPrice: p.range![1],
            priceCurrency: "EUR",
            valueAddedTaxIncluded: false,
          },
        })),
      },
    },
    {
      "@type": "WebSite",
      "@id": id("website"),
      url: abs("/"),
      name: site.brand,
      inLanguage: site.locale,
      publisher: provider,
    },
    {
      "@type": "WebPage",
      "@id": id("webpage"),
      url: abs("/"),
      name: site.title,
      description: site.description,
      inLanguage: site.locale,
      isPartOf: { "@id": id("website") },
      about: provider,
      primaryImageOfPage: { "@type": "ImageObject", url: abs("/og.png"), width: 1200, height: 630 },
    },
    ...serviceCatalog.map((s) => ({
      "@type": "Service",
      name: s.name,
      description: s.description,
      provider,
      areaServed: { "@type": "Country", name: "España" },
    })),
    faqNode(abs("/")),
  ];
}

export const breadcrumbNode = (items: { name: string; path: string }[]) => ({
  "@type": "BreadcrumbList",
  itemListElement: items.map((it, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: it.name,
    item: abs(it.path),
  })),
});

// </script> dentro de una cadena cerraría la etiqueta antes de tiempo.
export const jsonLd = (graph: unknown[]) =>
  JSON.stringify({ "@context": "https://schema.org", "@graph": graph }).replace(/</g, "\\u003c");
