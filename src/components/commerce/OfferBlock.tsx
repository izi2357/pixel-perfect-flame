import { Check } from "lucide-react";
import { useState } from "react";
import { formatMoney, type Product } from "@/data/products";
import { useCart } from "@/lib/cart";

type Props = {
  product: Product;
  variant: "potter" | "wizard" | "floatverse";
  upsellPlacement?: "below" | "inside";
  styleOptions?: string[];
  radiusClass?: string;
  ctaRadiusClass?: string;
};

export function OfferBlock({
  product,
  variant,
  upsellPlacement = "below",
  styleOptions = [],
  radiusClass = "rounded-xl",
  ctaRadiusClass = "rounded-full",
}: Props) {
  const [bundleId, setBundleId] = useState(
    product.bundles[product.bundles.length > 1 ? 1 : 0]!.id,
  );
  const [upsellIds, setUpsellIds] = useState<string[]>(
    product.upsells.filter((u) => u.defaultOn).map((u) => u.id),
  );
  const [styles, setStyles] = useState<string[]>([
    styleOptions[0] ?? "",
    styleOptions[0] ?? "",
  ]);
  const [added, setAdded] = useState(false);
  const { addItems, open } = useCart();

  const bundle = product.bundles.find((b) => b.id === bundleId) ?? product.bundles[0]!;
  const chosenUpsells = product.upsells.filter((u) => upsellIds.includes(u.id));
  const total = bundle.price + chosenUpsells.reduce((n, u) => n + u.price, 0);
  const sym = product.currencySymbol;

  function toggleUpsell(id: string) {
    setUpsellIds((prev) => (prev.includes(id) ? prev.filter((u) => u !== id) : [...prev, id]));
  }

  function addToCart() {
    const variantLabel =
      bundle.styleSelectors && styleOptions.length
        ? styles.slice(0, bundle.styleSelectors).join(" + ")
        : bundle.label;
    addItems([
      {
        productId: product.id,
        brand: product.brand,
        title: product.title,
        variant: variantLabel,
        price: bundle.price,
        ...(bundle.compareAtPrice !== undefined ? { compareAtPrice: bundle.compareAtPrice } : {}),
        quantity: 1,
        image: product.gallery[0]!.src,
        currencySymbol: sym,
        kind: "bundle" as const,
      },
      ...chosenUpsells.map((u) => ({
        productId: `${product.id}-${u.id}`,
        brand: product.brand,
        title: u.title.replace(/^\+ Add /, ""),
        price: u.price,
        quantity: 1,
        image: u.image,
        currencySymbol: sym,
        kind: "upsell" as const,
      })),
    ]);
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1800);
    open();
  }

  const upsellList = (
    <div className={upsellPlacement === "inside" ? "mt-3 space-y-2" : "mt-4 space-y-2.5"}>
      {product.upsells.map((u) => {
        const on = upsellIds.includes(u.id);
        return (
          <label
            key={u.id}
            className={`flex cursor-pointer items-center gap-3 ${radiusClass} border px-3 py-2.5 transition-colors ${
              on ? "border-[var(--acc)] bg-[var(--surf)]" : "border-black/10 bg-neutral-50"
            }`}
          >
            <img
              src={u.image}
              alt=""
              width={80}
              height={80}
              loading="lazy"
              className="h-11 w-11 shrink-0 rounded-md object-contain"
            />
            <span className="min-w-0 flex-1">
              <span className="block truncate text-[13.5px] font-semibold text-neutral-900">
                {u.title}
              </span>
              {u.note && <span className="block text-[12px] text-neutral-500">{u.note}</span>}
            </span>
            <span className="flex shrink-0 items-baseline gap-1.5">
              {u.compareAtPrice && (
                <span className="text-[12px] text-neutral-400 line-through">
                  {formatMoney(u.compareAtPrice, sym)}
                </span>
              )}
              <span className="text-[13.5px] font-bold text-neutral-900">
                {formatMoney(u.price, sym)}
              </span>
            </span>
            <input
              type="checkbox"
              checked={on}
              onChange={() => toggleUpsell(u.id)}
              className="sr-only"
            />
            {variant === "potter" ? (
              <span
                aria-hidden
                className={`relative h-[22px] w-[38px] shrink-0 rounded-full transition-colors ${
                  on ? "bg-[var(--acc)]" : "bg-neutral-300"
                }`}
              >
                <span
                  className={`absolute top-[3px] h-4 w-4 rounded-full bg-white transition-all ${
                    on ? "left-[19px]" : "left-[3px]"
                  }`}
                />
              </span>
            ) : (
              <span
                aria-hidden
                className={`grid h-[22px] w-[22px] shrink-0 place-items-center rounded-md border-2 transition-colors ${
                  on ? "border-[var(--acc)] bg-[var(--acc)] text-[var(--acc-fg)]" : "border-black/25"
                }`}
              >
                {on && <Check className="h-3.5 w-3.5" strokeWidth={3} />}
              </span>
            )}
          </label>
        );
      })}
    </div>
  );

  return (
    <div className="mt-6">
      {/* Section divider heading */}
      <div className="flex items-center gap-3">
        <span className="h-px flex-1 bg-black/10" />
        <h2 className="text-[13px] font-extrabold uppercase tracking-[0.14em] text-neutral-900">
          {product.bundleHeading}
        </h2>
        <span className="h-px flex-1 bg-black/10" />
      </div>

      <div className="mt-4 space-y-3">
        {product.bundles.map((b) => {
          const selected = b.id === bundleId;
          return (
            <div
              key={b.id}
              className={`relative ${radiusClass} border-2 transition-colors ${
                selected
                  ? "border-[var(--acc)] bg-[var(--surf)]"
                  : "border-black/10 bg-white hover:border-black/25"
              }`}
            >
              {b.badge && (
                <span
                  className={`absolute -top-2.5 right-3 rounded-full px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-[0.08em] ${
                    b.badgeTone === "dark"
                      ? "bg-neutral-900 text-white"
                      : "bg-[var(--acc)] text-[var(--acc-fg)]"
                  }`}
                >
                  {b.badge}
                </span>
              )}
              <label className="flex cursor-pointer items-start gap-3 p-4">
                <input
                  type="radio"
                  name={`bundle-${product.id}`}
                  checked={selected}
                  onChange={() => setBundleId(b.id)}
                  className="sr-only"
                />
                <span
                  aria-hidden
                  className={`mt-0.5 grid h-[22px] w-[22px] shrink-0 place-items-center rounded-full border-2 ${
                    selected ? "border-[var(--acc)]" : "border-black/25"
                  }`}
                >
                  {selected && <span className="h-[11px] w-[11px] rounded-full bg-[var(--acc)]" />}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="flex flex-wrap items-center gap-2">
                    <span className="text-[15.5px] font-bold text-neutral-900">{b.label}</span>
                    {b.savingsLabel && (
                      <span className="rounded-md bg-[var(--acc)] px-2 py-0.5 text-[11px] font-extrabold uppercase text-[var(--acc-fg)]">
                        {b.savingsLabel}
                      </span>
                    )}
                  </span>
                  {b.sublabel && (
                    <span className="mt-0.5 block text-[13px] font-semibold text-[var(--acc)]">
                      {b.sublabel}
                    </span>
                  )}
                  <span className="mt-1.5 flex items-baseline gap-2">
                    <span className="text-[17px] font-extrabold text-neutral-900">
                      {formatMoney(b.price, sym)}
                    </span>
                    {b.compareAtPrice && (
                      <span className="text-[14px] text-neutral-400 line-through">
                        {formatMoney(b.compareAtPrice, sym)}
                      </span>
                    )}
                  </span>

                  {/* Style pickers for multi-item bundles */}
                  {selected && b.styleSelectors && styleOptions.length > 0 && (
                    <span className="mt-3 block space-y-2">
                      {Array.from({ length: b.styleSelectors }).map((_, idx) => (
                        <span key={idx} className="block">
                          <span className="mb-1 block text-[12px] font-semibold text-neutral-500">
                            Style {idx + 1}
                          </span>
                          <select
                            aria-label={`Style ${idx + 1}`}
                            value={styles[idx]}
                            onChange={(e) =>
                              setStyles((prev) => {
                                const next = [...prev];
                                next[idx] = e.target.value;
                                return next;
                              })
                            }
                            className="w-full rounded-lg border border-black/15 bg-white px-3 py-2.5 text-[13.5px] font-medium text-neutral-900"
                          >
                            {styleOptions.map((opt) => (
                              <option key={opt} value={opt}>
                                {opt}
                              </option>
                            ))}
                          </select>
                        </span>
                      ))}
                    </span>
                  )}

                  {upsellPlacement === "inside" && selected && (
                    <span className="block">{upsellList}</span>
                  )}
                </span>
              </label>
            </div>
          );
        })}
      </div>

      {upsellPlacement === "below" && upsellList}

      <button
        type="button"
        onClick={addToCart}
        className={`mt-5 flex h-[56px] w-full items-center justify-center gap-2 ${ctaRadiusClass} bg-[var(--acc)] text-[15px] font-extrabold uppercase tracking-[0.06em] text-[var(--acc-fg)] shadow-sm transition-transform hover:scale-[1.01] active:scale-[0.99]`}
      >
        {added ? (
          <>
            <Check className="h-5 w-5" strokeWidth={3} /> Added
          </>
        ) : (
          <>
            {product.ctaLabel}
            <span className="font-bold normal-case tracking-normal opacity-80">
              — {formatMoney(total, sym)}
            </span>
          </>
        )}
      </button>
    </div>
  );
}
