import { useState } from "react";
import { ChevronLeft, ChevronRight, Truck } from "lucide-react";
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
import { potterLevitate as p, potterInlineReviews } from "@/data/products";
import shippingProtection from "@/assets/pl/shipping-protection.png";

export function PotterLevitatePage() {
  return (
    <CartProvider>
      <ThemeScope theme={p.theme}>
        <Marquee messages={p.announcements} />
        <Header product={p} />

        <main>
          {/* ---------- Product hero ---------- */}
          <section className="mx-auto max-w-[1200px] px-4 py-8 lg:px-8 lg:py-12">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,480px)] lg:gap-12">
              <ProductGallery media={p.gallery} thumbCols={3} rounded="rounded-2xl" />

              <div>
                <h1 className="text-[27px] font-extrabold leading-[1.2] tracking-[-0.02em] sm:text-[32px]">
                  {p.title}
                </h1>

                <div className="mt-2.5 flex items-center gap-2">
                  <Stars rating={p.rating} />
                  <span className="text-[13.5px] font-medium text-neutral-500">
                    {p.reviewCountLabel}
                  </span>
                </div>

                <ul className="mt-5 space-y-2.5">
                  {p.benefits.map((b) => (
                    <li key={b.text} className="flex items-center gap-2.5 text-[15px]">
                      <span aria-hidden className="text-[17px]">
                        {b.icon}
                      </span>
                      <span className="font-medium text-neutral-800">{b.text}</span>
                    </li>
                  ))}
                </ul>

                <OfferBlock
                  product={p}
                  variant="potter"
                  upsellPlacement="below"
                  radiusClass="rounded-xl"
                  ctaRadiusClass="rounded-lg"
                />

                <div className="mt-4 flex items-center justify-center gap-2 rounded-lg bg-[var(--surf)] px-4 py-3 text-[13px] font-semibold text-[var(--acc)]">
                  <Truck className="h-4 w-4" strokeWidth={2} />
                  Free worldwide shipping · 30-day returns
                </div>

                <PaymentIcons className="mt-4" />

                <InlineReviewCarousel />
                <div className="mt-8">
                  <Accordion items={p.faqsInline} variant="divided" />
                </div>
              </div>
            </div>
          </section>

          {/* ---------- Story section ---------- */}
          <section className="border-t border-black/[0.07] bg-[var(--surf)]">
            <div className="mx-auto grid max-w-[1200px] items-center gap-10 px-4 py-14 lg:grid-cols-2 lg:px-8 lg:py-20">
              <img
                src={p.gallery[1]!.src}
                alt={p.gallery[1]!.alt}
                loading="lazy"
                className="aspect-[4/5] w-full rounded-2xl object-cover shadow-sm"
              />
              <div>
                <h2 className="text-[30px] font-extrabold leading-[1.15] tracking-[-0.02em] sm:text-[38px]">
                  {p.tagline}
                </h2>
                <p className="mt-4 text-[16px] leading-[1.8] text-neutral-600">{p.description}</p>
                <ul className="mt-6 space-y-3">
                  {[
                    "Magnetic levitation keeps the figure floating and spinning",
                    "Premium LED glow with a warm, cinematic finish",
                    "Plug in and play — no assembly or tools needed",
                  ].map((line) => (
                    <li key={line} className="flex gap-3 text-[15px] text-neutral-700">
                      <span
                        aria-hidden
                        className="mt-[7px] h-2 w-2 shrink-0 rounded-full bg-[var(--acc)]"
                      />
                      {line}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* ---------- FAQ ---------- */}
          <section className="mx-auto max-w-[820px] px-4 py-16 lg:py-20">
            <p className="text-center text-[12px] font-extrabold uppercase tracking-[0.2em] text-[var(--acc)]">
              {p.faqEyebrow}
            </p>
            <h2 className="mt-2 text-center text-[30px] font-extrabold tracking-[-0.02em] sm:text-[38px]">
              {p.faqHeading}
            </h2>
            <div className="mt-8">
              <Accordion items={p.faqs} variant="boxed" defaultOpen={0} />
            </div>
          </section>

          {/* ---------- Shipping protection strip ---------- */}
          <section className="border-y border-black/[0.07] bg-[var(--surf)]">
            <div className="mx-auto flex max-w-[900px] flex-col items-center gap-5 px-4 py-12 text-center sm:flex-row sm:text-left">
              <img
                src={shippingProtection}
                alt="Shipping protection badge"
                loading="lazy"
                className="h-24 w-24 shrink-0 object-contain"
              />
              <div>
                <h2 className="text-[20px] font-extrabold">Protected from cart to doorstep</h2>
                <p className="mt-2 text-[14.5px] leading-[1.75] text-neutral-600">
                  Every PotterLevitate™ order can be covered against loss, theft, or damage in
                  transit. If anything goes wrong, we send a replacement — no questions asked.
                </p>
              </div>
            </div>
          </section>

          {/* ---------- Testimonials (masonry) ---------- */}
          <section className="mx-auto max-w-[1200px] px-4 py-16 lg:px-8 lg:py-20">
            <h2 className="text-center text-[30px] font-extrabold tracking-[-0.02em] sm:text-[38px]">
              Loved by 2,000+ Potter Fans ❤️
            </h2>
            <div className="mt-3 flex items-center justify-center gap-2">
              <Stars rating={5} />
              <span className="text-[14px] font-medium text-neutral-500">
                5.0 average from {p.reviewCountLabel.replace(/[()]/g, "")}
              </span>
            </div>
            <div className="mt-10 gap-5 [column-count:1] sm:[column-count:2] lg:[column-count:3]">
              {p.testimonials.map((t) => (
                <figure
                  key={t.name}
                  className="mb-5 break-inside-avoid overflow-hidden rounded-2xl border border-black/[0.08] bg-white shadow-sm"
                >
                  {t.image && (
                    <img
                      src={t.image}
                      alt={`${t.name}'s PotterLevitate lamp`}
                      loading="lazy"
                      className="w-full object-cover"
                    />
                  )}
                  <div className="p-5">
                    <Stars rating={5} size="sm" />
                    <blockquote className="mt-2.5 text-[14.5px] leading-[1.7] text-neutral-700">
                      “{t.quote}”
                    </blockquote>
                    <figcaption className="mt-3 text-[13px] font-bold text-neutral-900">
                      {t.name}
                      <span className="ml-2 font-medium text-[var(--acc)]">Verified buyer</span>
                    </figcaption>
                  </div>
                </figure>
              ))}
            </div>
          </section>
        </main>

        <Footer product={p} wave newsletterHeading="Join the wizarding list 🪄" />
        <CartDrawer />
      </ThemeScope>
    </CartProvider>
  );
}

function InlineReviewCarousel() {
  const [i, setI] = useState(0);
  const review = potterInlineReviews[i]!;

  return (
    <div className="mt-8 rounded-2xl border border-black/[0.08] bg-white p-5 shadow-sm">
      <div className="flex items-start gap-4">
        <img
          src={review.avatar}
          alt=""
          loading="lazy"
          className="h-12 w-12 shrink-0 rounded-full object-cover"
        />
        <div className="min-w-0 flex-1">
          <Stars rating={5} size="sm" />
          <blockquote className="mt-2 text-[14.5px] leading-[1.7] text-neutral-700">
            “{review.quote}”
          </blockquote>
          <p className="mt-2 text-[13px] font-bold text-neutral-900">{review.name}</p>
        </div>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <div className="flex gap-1.5">
          {potterInlineReviews.map((r, idx) => (
            <button
              key={r.name}
              type="button"
              aria-label={`Show review ${idx + 1}`}
              aria-current={idx === i}
              onClick={() => setI(idx)}
              className={`h-2 rounded-full transition-all ${
                idx === i ? "w-5 bg-[var(--acc)]" : "w-2 bg-black/20"
              }`}
            />
          ))}
        </div>
        <div className="flex gap-1.5">
          <button
            type="button"
            aria-label="Previous review"
            onClick={() => setI((v) => (v - 1 + potterInlineReviews.length) % potterInlineReviews.length)}
            className="grid h-8 w-8 place-items-center rounded-full border border-black/10 hover:bg-black/5"
          >
            <ChevronLeft className="h-4 w-4" strokeWidth={2} />
          </button>
          <button
            type="button"
            aria-label="Next review"
            onClick={() => setI((v) => (v + 1) % potterInlineReviews.length)}
            className="grid h-8 w-8 place-items-center rounded-full border border-black/10 hover:bg-black/5"
          >
            <ChevronRight className="h-4 w-4" strokeWidth={2} />
          </button>
        </div>
      </div>
    </div>
  );
}
