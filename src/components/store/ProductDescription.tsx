import { FeatureList } from "./FeatureList";
import type { Product } from "@/data/product";

export function ProductDescription({ product }: { product: Product }) {
  return (
    <section aria-labelledby="product-details" className="mx-auto max-w-[760px] px-5 py-16 lg:py-24">
      <h2
        id="product-details"
        className="text-[28px] font-bold leading-[1.2] tracking-[-0.015em] text-ink sm:text-[34px]"
      >
        🔥 Ignite Your Space with Living Flame
      </h2>
      <p className="mt-5 text-[16px] leading-[1.8] text-ink-muted">
        Transform any room into an atmospheric sanctuary with the{" "}
        <strong className="font-semibold text-ink">Dragon Breath Flame Night Light</strong> — a
        mesmerising décor piece that mimics the hypnotic dance of real fire without the heat or
        hazard.
      </p>

      <h3 className="mt-12 text-[21px] font-semibold tracking-[-0.01em] text-ink sm:text-[24px]">
        Why You'll Love It
      </h3>
      <FeatureList features={product.features} />

      <p className="mt-12 text-[16px] leading-[1.8] text-ink-muted">
        Imagine settling in for the evening, the room bathed in the warm, dancing glow of dragon
        fire — calming, captivating, and entirely yours. Whether you're curating a cosy reading nook
        or elevating your bedroom aesthetic, this night light delivers drama and warmth in equal
        measure.
      </p>
      <p className="mt-6 text-[16px] italic leading-[1.8] text-ink">
        Elevate your space. Own the night.
      </p>
    </section>
  );
}
