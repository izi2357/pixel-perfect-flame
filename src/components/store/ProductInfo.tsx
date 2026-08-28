import { Star } from "lucide-react";
import { useState } from "react";
import { VariantSelector } from "./VariantSelector";
import { QuantitySelector } from "./QuantitySelector";
import { AddToCartButton } from "./AddToCartButton";
import { formatPrice, type Product } from "@/data/product";
import { useCart } from "@/lib/cart";

export function ProductInfo({ product }: { product: Product }) {
  const [color, setColor] = useState(product.colors[0] ?? "");
  const [size, setSize] = useState(product.sizes[0] ?? "");
  const [quantity, setQuantity] = useState(1);
  const { addItem, open } = useCart();

  const onSale = product.compareAtPrice > product.price;

  return (
    <div className="lg:pt-1">
      <h1 className="text-[34px] font-bold leading-[1.15] tracking-[-0.02em] text-ink sm:text-[40px] lg:text-[46px]">
        {product.name}
      </h1>




      <div className="mt-3.5 flex flex-wrap items-center gap-3">
        {onSale && (
          <span className="text-[17px] text-ink-muted line-through">
            {formatPrice(product.compareAtPrice)}
          </span>
        )}
        <span className="text-[19px] font-medium text-ink">{formatPrice(product.price)}</span>
        {onSale && (
          <span className="rounded-full bg-ink px-2.5 py-1 text-[12px] font-medium text-background">
            Sale
          </span>
        )}
      </div>
      <p className="mt-1.5 text-[13px] text-ink-muted">Taxes included.</p>

      <VariantSelector label="Color" options={product.colors} value={color} onChange={setColor} />
      <VariantSelector label="Size" options={product.sizes} value={size} onChange={setSize} />
      <QuantitySelector value={quantity} onChange={setQuantity} />

      <div className="mt-7 space-y-3">
        <AddToCartButton
          onAdd={() => {
            addItem({
              name: product.name,
              color,
              size,
              price: product.price,
              quantity,
              image: product.images[0]?.src ?? "",
            });
            open();
          }}
        />
        <button
          type="button"
          onClick={open}
          className="h-[52px] w-full rounded-md bg-ink text-[15px] font-medium text-background transition-opacity hover:opacity-90"
        >
          Buy it now
        </button>
        <p className="pt-1 text-center text-[13px] text-ink-muted">
          Checkout safely using your preferred payment method
        </p>
      </div>

      <dl className="mt-8 divide-y divide-hairline border-t border-hairline text-[14px]">
        {product.specifications.map((spec) => (
          <div key={spec.label} className="grid grid-cols-[minmax(0,110px)_minmax(0,1fr)] gap-4 py-3">
            <dt className="text-ink-muted">{spec.label}</dt>
            <dd className="min-w-0 text-ink">{spec.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
