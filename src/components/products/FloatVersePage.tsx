import { useEffect, useState } from "react";
import { BadgeCheck, Heart, Quote, RotateCcw, Truck } from "lucide-react";
import { Marquee } from "@/components/commerce/Marquee";
import { Header } from "@/components/commerce/Header";
import { ProductGallery } from "@/components/commerce/ProductGallery";
import { OfferBlock } from "@/components/commerce/OfferBlock";
import { Accordion } from "@/components/commerce/Accordion";
import { CartDrawer } from "@/components/commerce/CartDrawer";
import { Footer } from "@/components/commerce/Footer";
import { PaymentIcons } from "@/components/commerce/PaymentIcons";
import { Stars } from "@/components/commerce/Stars";
import { ThemeScope } from "@/components/commerce/ThemeScope";
import { CartProvider } from "@/lib/cart";
import { floatVerse as p, floatVerseExtras as x, formatMoney } from "@/data/products";

const TRUST_ICONS = { heart: Heart, undo: RotateCcw, truck: Truck };

export function FloatVersePage() {
  return (
    <CartProvider>
      <ThemeScope theme={p.theme}>
        <FlashSaleBar />
        <Marquee messages={p.announcements} />
        <Header product={p} />

        <main>
          {/* ---------- Product hero ---------- */}
          <section className="mx-auto max-w-[1200px] px-4 py-8 lg:px-8 lg:py-12">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,470px)] lg:gap-12">
              <ProductGallery media={p.gallery} thumbCols={4} rounded="rounded-xl" />

              <div>
                <h1 className="text-[27px] font-extrabold leading-[1.18] tracking-[-0.02em] sm:text-[33px]">
                  {p.title}
                </h1>

                <div className="mt-2.5 flex items-center gap-2">
                  <Stars rating={p.rating} />
                  <span className="text-[13.5px] font-semibold text-neutral-600">
                    {p.reviewCountLabel}
                  </span>
                </div>

                <ul className="mt-5 space-y-2.5">
                  {p.benefits.map((b) => (
                    <li key={b.text} className="flex items-center gap-2.5 text-[15px]">
                      <BadgeCheck className="h-[19px] w-[19px] shrink-0 text-[var(--acc)]" strokeWidth={2} />
                      <span className="font-medium text-neutral-800">{b.text}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap items-center gap-3">
                  <span className="text-[26px] font-extrabold text-neutral-900">
                    {formatMoney(p.price, p.currencySymbol)}
                  </span>
                  <span className="text-[17px] text-neutral-400 line-through">
                    {formatMoney(p.compareAtPrice, p.currencySymbol)}
                  </span>
                  <span className="rounded-md bg-[var(--acc)] px-2.5 py-1 text-[12px] font-extrabold uppercase tracking-[0.06em] text-[var(--acc-fg)]">
                    {p.discountLabel}
                  </span>
                </div>

                {/* Live order counter */}
                <div className="mt-4 flex items-center gap-3 rounded-xl bg-[var(--surf)] px-4 py-3">
                  <div className="flex -space-x-2.5">
                    {x.orderCounter.avatars.map((a) => (
                      <img
                        key={a}
                        src={a}
                        alt=""
                        loading="lazy"
                        className="h-8 w-8 rounded-full border-2 border-white object-cover"
                      />
                    ))}
                  </div>
                  <p className="text-[13.5px] text-neutral-700">
                    <span className="font-extrabold text-neutral-900">{x.orderCounter.headline}</span>{" "}
                    {x.orderCounter.sub}
                  </p>
                </div>

                <OfferBlock
                  product={p}
                  variant="floatverse"
                  upsellPlacement="below"
                  radiusClass="rounded-xl"
                  ctaRadiusClass="rounded-full"
                />

                <ul className="mt-6 grid grid-cols-3 gap-3">
                  {x.trust.map((t) => {
                    const Icon = TRUST_ICONS[t.icon as keyof typeof TRUST_ICONS];
                    return (
                      <li key={t.label} className="flex flex-col items-center gap-2 text-center">
                        <Icon className="h-6 w-6 text-[var(--acc)]" strokeWidth={1.8} />
                        <span className="text-[12px] font-semibold leading-tight text-neutral-700">
                          {t.label}
                        </span>
                      </li>
                    );
                  })}
                </ul>

                <PaymentIcons className="mt-5" />
                <SocialProofTicker />

                <div className="mt-7">
                  <Accordion items={p.faqsInline} variant="divided" />
                </div>
              </div>
            </div>
          </section>

          {/* ---------- Verified customer videos ---------- */}
          <section className="border-t border-black/[0.07] bg-neutral-50">
            <div className="mx-auto max-w-[1200px] px-4 py-14 lg:px-8 lg:py-16">
              <h2 className="text-center text-[26px] font-extrabold tracking-[-0.02em] sm:text-[32px]">
                Verified Customers
              </h2>
              <p className="mt-2 text-center text-[14px] text-neutral-500">
                Real clips from real FloatVerse orders
              </p>
              <ul className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
                {x.verifiedCustomers.map((v) => (
                  <li
                    key={v.src}
                    className="overflow-hidden rounded-xl border border-black/[0.08] bg-white"
                  >
                    <video
                      src={v.src}
                      muted
                      loop
                      playsInline
                      autoPlay
                      preload="metadata"
                      className="aspect-[9/16] w-full bg-black object-cover"
                    />
                    <div className="p-3.5">
                      <Stars rating={5} size="sm" />
                      <p className="mt-1.5 text-[13px] leading-[1.6] text-neutral-700">
                        “{v.quote}”
                      </p>
                      <p className="mt-2 text-[12px] font-bold text-neutral-900">
                        {v.name}
                        <span className="ml-1.5 font-medium text-neutral-400">{v.timeAgo}</span>
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* ---------- More than just a lamp ---------- */}
          <section className="mx-auto grid max-w-[1200px] items-center gap-10 px-4 py-14 lg:grid-cols-2 lg:px-8 lg:py-20">
            <video
              src={x.moreThanLampVideo}
              muted
              loop
              playsInline
              autoPlay
              preload="metadata"
              className="aspect-square w-full rounded-2xl bg-black object-cover"
            />
            <div>
              <h2 className="text-[30px] font-extrabold leading-[1.15] tracking-[-0.02em] sm:text-[38px]">
                {p.tagline}
              </h2>
              <p className="mt-4 text-[16px] leading-[1.85] text-neutral-600">{p.description}</p>
              <ul className="mt-6 space-y-3">
                {[
                  "Levitating hero figure above a glowing city base",
                  "Soft ambient light that suits desks, shelves and nightstands",
                  "Backed by our 30-day warranty and free worldwide shipping",
                ].map((line) => (
                  <li key={line} className="flex gap-3 text-[15px] text-neutral-700">
                    <BadgeCheck className="h-5 w-5 shrink-0 text-[var(--acc)]" strokeWidth={2} />
                    {line}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* ---------- FAQ ---------- */}
          <section className="mx-auto max-w-[820px] px-4 pb-14">
            <h2 className="text-center text-[26px] font-extrabold tracking-[-0.02em] sm:text-[32px]">
              {p.faqHeading}
            </h2>
            <div className="mt-6">
              <Accordion items={p.faqs} variant="divided" />
            </div>
          </section>

          {/* ---------- Testimonials ---------- */}
          <section className="border-t border-black/[0.07] bg-[var(--surf)]">
            <div className="mx-auto max-w-[1200px] px-4 py-16 lg:px-8">
              <h2 className="text-center text-[26px] font-extrabold tracking-[-0.02em] sm:text-[32px]">
                What Customers Say
              </h2>
              <div className="mt-9 grid gap-5 md:grid-cols-3">
                {p.testimonials.map((t) => (
                  <figure
                    key={t.name}
                    className="rounded-2xl border border-black/[0.06] bg-white p-6 shadow-sm"
                  >
                    <Quote className="h-7 w-7 text-[var(--acc)]" strokeWidth={1.8} />
                    <h3 className="mt-3 text-[16px] font-extrabold text-neutral-900">{t.title}</h3>
                    <Stars rating={5} size="sm" className="mt-1.5" />
                    <blockquote className="mt-2.5 text-[14px] leading-[1.75] text-neutral-600">
                      {t.quote}
                    </blockquote>
                    <figcaption className="mt-4 text-[13px] font-bold text-neutral-900">
                      {t.name}
                      <span className="ml-2 font-medium text-neutral-400">Verified buyer</span>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </section>
        </main>

        <Footer
          product={p}
          newsletterHeading="Get FloatVerse drops first"
          newsletterBody="Sign up for launch alerts and subscriber-only discounts."
        />
        <CartDrawer />
      </ThemeScope>
    </CartProvider>
  );
}

function FlashSaleBar() {
  const [left, setLeft] = useState(4 * 3600 + 12 * 60 + 33);

  useEffect(() => {
    const t = window.setInterval(() => setLeft((v) => (v > 0 ? v - 1 : 0)), 1000);
    return () => window.clearInterval(t);
  }, []);

  const pad = (n: number) => String(n).padStart(2, "0");
  const h = Math.floor(left / 3600);
  const m = Math.floor((left % 3600) / 60);
  const s = left % 60;

  return (
    <div className="bg-[var(--acc)] py-2 text-center text-[var(--acc-fg)]">
      <p className="text-[12.5px] font-extrabold uppercase tracking-[0.08em]">
        ⚡ Flash sale ending!{" "}
        <span className="font-mono tabular-nums">
          {pad(h)}:{pad(m)}:{pad(s)}
        </span>
      </p>
    </div>
  );
}

function SocialProofTicker() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = window.setInterval(() => setI((v) => (v + 1) % x.ticker.length), 4000);
    return () => window.clearInterval(t);
  }, []);

  const item = x.ticker[i]!;

  return (
    <div
      className="mt-5 flex items-center gap-3 rounded-xl border border-black/[0.08] bg-white px-4 py-3 shadow-sm"
      aria-live="polite"
    >
      <BadgeCheck className="h-5 w-5 shrink-0 text-[var(--acc)]" strokeWidth={2} />
      <p className="text-[13.5px] text-neutral-700">
        <span className="font-semibold text-neutral-900">“{item.quote}”</span> — {item.name},{" "}
        {item.timeAgo}
      </p>
    </div>
  );
}
