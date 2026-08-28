import { CheckCircle2, Package, PackageCheck, Truck } from "lucide-react";
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
import { wizardFloat as p, wizardFloatExtras as x } from "@/data/products";

function deliveryDates() {
  const fmt = (d: Date) =>
    d.toLocaleDateString("en-US", { month: "short", day: "numeric" });
  const today = new Date();
  const ready = new Date(today.getTime() + 3 * 864e5);
  const from = new Date(today.getTime() + 8 * 864e5);
  const to = new Date(today.getTime() + 12 * 864e5);
  return { today: fmt(today), ready: fmt(ready), delivered: `${fmt(from)} – ${fmt(to)}` };
}

export function WizardFloatPage() {
  const dates = deliveryDates();

  return (
    <CartProvider>
      <ThemeScope theme={p.theme}>
        <Marquee messages={p.announcements} />
        <div className="bg-[var(--deep)] py-2 text-center text-[13px] font-semibold text-white">
          {p.secondaryAnnouncement}
        </div>
        <Header product={p} />

        <main>
          {/* ---------- Product hero ---------- */}
          <section className="mx-auto max-w-[1180px] px-4 py-8 lg:px-8 lg:py-12">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,460px)] lg:gap-14">
              <ProductGallery media={p.gallery} thumbCols={3} rounded="rounded-lg" />

              <div>
                <h1 className="text-[26px] font-bold leading-[1.2] tracking-[-0.02em] sm:text-[31px]">
                  {p.title}
                </h1>
                <div className="mt-2.5 flex items-center gap-2">
                  <Stars rating={p.rating} colorClass="text-neutral-900" />
                  <span className="text-[13.5px] font-medium text-neutral-500">
                    {p.reviewCountLabel}
                  </span>
                </div>

                <ul className="mt-5 space-y-2.5">
                  {p.benefits.map((b) => (
                    <li key={b.text} className="flex items-start gap-2.5 text-[15px]">
                      <span aria-hidden className="text-[17px] leading-6">
                        {b.icon}
                      </span>
                      <span className="leading-6 text-neutral-700">
                        {highlight(b.text, b.bold ?? [])}
                      </span>
                    </li>
                  ))}
                </ul>

                <OfferBlock
                  product={p}
                  variant="wizard"
                  upsellPlacement="inside"
                  styleOptions={x.styleOptions}
                  radiusClass="rounded-lg"
                  ctaRadiusClass="rounded-full"
                />

                {/* Order progress timeline */}
                <div className="mt-7 rounded-lg border border-black/10 p-5">
                  <ol className="flex items-start justify-between gap-2">
                    {[
                      { icon: Package, label: "Ordered", value: dates.today, done: true },
                      { icon: PackageCheck, label: "Order Ready", value: dates.ready, done: false },
                      { icon: Truck, label: "Delivered", value: dates.delivered, done: false },
                    ].map((step, i, arr) => (
                      <li key={step.label} className="flex flex-1 flex-col items-center text-center">
                        <div className="flex w-full items-center">
                          <span
                            className={`h-[3px] flex-1 ${i === 0 ? "bg-transparent" : "bg-neutral-200"}`}
                          />
                          <span
                            className={`grid h-9 w-9 shrink-0 place-items-center rounded-full ${
                              step.done ? "bg-neutral-900 text-white" : "bg-neutral-200 text-neutral-600"
                            }`}
                          >
                            <step.icon className="h-[18px] w-[18px]" strokeWidth={1.9} />
                          </span>
                          <span
                            className={`h-[3px] flex-1 ${
                              i === arr.length - 1 ? "bg-transparent" : "bg-neutral-200"
                            }`}
                          />
                        </div>
                        <span className="mt-2 text-[12.5px] font-bold text-neutral-900">
                          {step.label}
                        </span>
                        <span className="text-[11.5px] text-neutral-500">{step.value}</span>
                      </li>
                    ))}
                  </ol>
                </div>

                <PaymentIcons className="mt-5" />

                {/* Single inline review */}
                <figure className="mt-7 rounded-lg bg-neutral-100 p-5">
                  <Stars rating={5} size="sm" colorClass="text-neutral-900" />
                  <blockquote className="mt-2.5 text-[14.5px] leading-[1.75] text-neutral-700">
                    “{x.inlineReview.quote}”
                  </blockquote>
                  <figcaption className="mt-3 flex items-center gap-2.5">
                    <img
                      src={x.inlineReview.avatar}
                      alt=""
                      loading="lazy"
                      className="h-9 w-9 rounded-full object-cover"
                    />
                    <span className="text-[13px] font-bold text-neutral-900">
                      {x.inlineReview.name}
                      <span className="ml-2 inline-flex items-center gap-1 font-medium text-neutral-500">
                        <CheckCircle2 className="h-3.5 w-3.5" strokeWidth={2} /> Verified
                      </span>
                    </span>
                  </figcaption>
                </figure>

                <div className="mt-6">
                  <Accordion items={p.faqsInline} variant="divided" />
                </div>
              </div>
            </div>
          </section>

          {/* ---------- Loved by wizarding fans ---------- */}
          <section className="border-t border-black/[0.07] bg-neutral-50">
            <div className="mx-auto max-w-[1180px] px-4 py-14 lg:px-8 lg:py-20">
              <h2 className="text-center text-[28px] font-bold tracking-[-0.02em] sm:text-[36px]">
                {x.lovedByHeading}
              </h2>
              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                {x.lovedBy.map((img) => (
                  <img
                    key={img.src}
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    className="aspect-[4/5] w-full rounded-lg object-cover"
                  />
                ))}
              </div>
            </div>
          </section>

          {/* ---------- More than just a lamp ---------- */}
          <section className="mx-auto grid max-w-[1180px] items-center gap-10 px-4 py-14 lg:grid-cols-2 lg:px-8 lg:py-20">
            <div>
              <h2 className="text-[28px] font-bold leading-[1.15] tracking-[-0.02em] sm:text-[36px]">
                {p.tagline}
              </h2>
              <p className="mt-4 text-[16px] leading-[1.85] text-neutral-600">{p.description}</p>
            </div>
            <img
              src={x.moreThanLamp.src}
              alt={x.moreThanLamp.alt}
              loading="lazy"
              className="aspect-square w-full rounded-lg object-cover"
            />
          </section>

          {/* ---------- FAQ ---------- */}
          <section className="mx-auto max-w-[820px] px-4 pb-16">
            <h2 className="text-center text-[26px] font-bold tracking-[-0.02em] sm:text-[32px]">
              {p.faqHeading}
            </h2>
            <div className="mt-6">
              <Accordion items={p.faqs} variant="divided" />
            </div>
          </section>

          {/* ---------- Guarantee ---------- */}
          <section className="bg-[var(--deep)] text-white">
            <div className="mx-auto grid max-w-[1000px] items-center gap-8 px-4 py-14 sm:grid-cols-[160px_minmax(0,1fr)] lg:py-16">
              <img
                src={x.guaranteeImage.src}
                alt={x.guaranteeImage.alt}
                loading="lazy"
                className="mx-auto h-32 w-32 object-contain sm:h-40 sm:w-40"
              />
              <div>
                <h2 className="text-[26px] font-bold tracking-[-0.02em] sm:text-[32px]">
                  {x.guaranteeTitle}
                </h2>
                {x.guaranteeBody.map((para, i) => (
                  <p
                    key={i}
                    className={`text-[13.5px] leading-[1.8] text-white/80 ${i === 0 ? "mt-3 text-[15px] text-white/90" : "mt-3"}`}
                  >
                    {para}
                  </p>
                ))}
              </div>
            </div>
          </section>

          {/* ---------- Testimonials ---------- */}
          <section className="mx-auto max-w-[1180px] px-4 py-16 lg:px-8 lg:py-20">
            <h2 className="text-center text-[28px] font-bold tracking-[-0.02em] sm:text-[36px]">
              What Wizards Are Saying
            </h2>
            <div className="mt-9 grid gap-6 md:grid-cols-3">
              {p.testimonials.map((t) => (
                <figure
                  key={t.name}
                  className="overflow-hidden rounded-lg border border-black/[0.08] bg-white"
                >
                  {t.image && (
                    <img
                      src={t.image}
                      alt={`${t.name}'s Wizard Float Lamp`}
                      loading="lazy"
                      className="aspect-[3/4] w-full object-cover"
                    />
                  )}
                  <div className="p-5">
                    <Stars rating={5} size="sm" colorClass="text-neutral-900" />
                    {t.title && (
                      <h3 className="mt-2 text-[15px] font-bold text-neutral-900">{t.title}</h3>
                    )}
                    <blockquote className="mt-1.5 text-[14px] leading-[1.75] text-neutral-600">
                      {t.quote}
                    </blockquote>
                    <figcaption className="mt-4 flex items-center gap-2.5 border-t border-black/[0.07] pt-4">
                      {t.avatar && (
                        <img
                          src={t.avatar}
                          alt=""
                          loading="lazy"
                          className="h-9 w-9 rounded-full object-cover"
                        />
                      )}
                      <span className="text-[13px] font-bold text-neutral-900">{t.name}</span>
                    </figcaption>
                  </div>
                </figure>
              ))}
            </div>
          </section>
        </main>

        <Footer
          product={p}
          newsletterHeading="A little magic in your inbox"
          newsletterBody="Get early access to new drops and wizarding offers."
        />
        <CartDrawer />
      </ThemeScope>
    </CartProvider>
  );
}

function highlight(text: string, bold: string[]) {
  if (bold.length === 0) return text;
  const pattern = new RegExp(`(${bold.map(escapeRe).join("|")})`, "g");
  return text.split(pattern).map((part, i) =>
    bold.includes(part) ? (
      <strong key={i} className="font-bold text-neutral-900">
        {part}
      </strong>
    ) : (
      <span key={i}>{part}</span>
    ),
  );
}

function escapeRe(s: string) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
