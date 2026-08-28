import { createFileRoute } from "@tanstack/react-router";
import { WizardFloatPage } from "@/components/products/WizardFloatPage";
import { wizardFloat as p } from "@/data/products";

const URL = "https://pixel-perfect-flame.lovable.app/products/wizard-float-lamp";

export const Route = createFileRoute("/products/wizard-float-lamp")({
  head: () => ({
    meta: [
      { title: p.seoTitle },
      { name: "description", content: p.seoDescription },
      { property: "og:title", content: p.seoTitle },
      { property: "og:description", content: p.seoDescription },
      { property: "og:type", content: "product" },
      { property: "og:url", content: URL },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          name: p.title,
          description: p.seoDescription,
          brand: { "@type": "Brand", name: p.brand },
          offers: {
            "@type": "Offer",
            price: p.price.toFixed(2),
            priceCurrency: p.currency,
            availability: "https://schema.org/InStock",
            url: URL,
          },
        }),
      },
    ],
  }),
  component: WizardFloatPage,
});
