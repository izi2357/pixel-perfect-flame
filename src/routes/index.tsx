import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { AppLink } from "@/components/commerce/AppLink";
import { Stars } from "@/components/commerce/Stars";
import { formatMoney, productList } from "@/data/products";

const TITLE = "Levitation Lamp Collection — PotterLevitate, WizardFloat & FloatVerse";
const DESCRIPTION =
  "Three levitating collector lamps in one place: the PotterLevitate™ Floating Light Lamp, the Wizard Float Lamp™ and the FloatVerse™ SpiderMan Levitation Lamp. Bundle offers and free worldwide shipping.";
const URL = "https://pixel-perfect-flame.lovable.app/";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: URL },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: TITLE,
          description: DESCRIPTION,
          url: URL,
        }),
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <div className="bg-neutral-950 text-white">
      <header className="mx-auto max-w-[1200px] px-5 pt-16 lg:px-8 lg:pt-24">
        <p className="text-[12px] font-extrabold uppercase tracking-[0.22em] text-white/50">
          Levitation lamp collection
        </p>
        <h1 className="mt-4 max-w-3xl text-[36px] font-extrabold leading-[1.08] tracking-[-0.03em] sm:text-[52px] lg:text-[64px]">
          Three floating lamps. Three worlds to pick from.
        </h1>
        <p className="mt-5 max-w-2xl text-[16px] leading-[1.8] text-white/65 sm:text-[17px]">
          Magnetic levitation, ambient LED glow, and bundle pricing on every store. Choose your
          fandom below and build your setup.
        </p>
      </header>

      <main className="mx-auto max-w-[1200px] px-5 py-14 lg:px-8 lg:py-20">
        <ul className="grid gap-6 lg:grid-cols-3">
          {productList.map((p) => (
            <li key={p.id}>
              <AppLink
                to={`/products/${p.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] transition-colors hover:border-white/25"
              >
                <img
                  src={p.gallery[0]!.src}
                  alt={p.gallery[0]!.alt}
                  loading="lazy"
                  className="aspect-square w-full object-cover"
                />
                <div className="flex flex-1 flex-col p-6">
                  <p
                    className="text-[11.5px] font-extrabold uppercase tracking-[0.16em]"
                    style={{ color: p.theme.accent === "#000000" ? "#c9c9c9" : p.theme.accent }}
                  >
                    {p.brand}
                  </p>
                  <h2 className="mt-2 text-[19px] font-bold leading-[1.3] tracking-[-0.01em]">
                    {p.title}
                  </h2>
                  <div className="mt-2.5 flex items-center gap-2">
                    <Stars rating={p.rating} size="sm" />
                    <span className="text-[12.5px] text-white/50">{p.reviewCountLabel}</span>
                  </div>
                  <p className="mt-4 text-[14px] leading-[1.7] text-white/60">{p.tagline}</p>
                  <div className="mt-auto flex items-center justify-between pt-6">
                    <span className="flex items-baseline gap-2">
                      <span className="text-[20px] font-extrabold">
                        {formatMoney(p.price, p.currencySymbol)}
                      </span>
                      <span className="text-[14px] text-white/40 line-through">
                        {formatMoney(p.compareAtPrice, p.currencySymbol)}
                      </span>
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-[13.5px] font-bold text-white">
                      Shop
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              </AppLink>
            </li>
          ))}
        </ul>
      </main>

      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-[1200px] px-5 py-8 lg:px-8">
          <p className="text-[12.5px] text-white/40">
            © {new Date().getFullYear()} Levitation Lamp Collection. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
