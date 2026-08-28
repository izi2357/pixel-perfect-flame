import { Minus, Plus, Trash2, X } from "lucide-react";
import { useCart } from "@/lib/cart";
import { formatPrice } from "@/data/product";

export function CartDrawer() {
  const { isOpen, close, items, subtotal, count, updateQuantity, removeItem } = useCart();
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[70]" role="dialog" aria-label="Cart">
      <div className="absolute inset-0 bg-ink/40" onClick={close} aria-hidden />
      <aside className="absolute inset-y-0 right-0 flex w-full max-w-md flex-col bg-background shadow-xl">
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 border-b border-hairline px-5 py-4">
          <h2 className="truncate text-[18px] font-semibold text-ink">
            Your cart {count > 0 && <span className="text-ink-muted">({count})</span>}
          </h2>
          <button
            type="button"
            onClick={close}
            aria-label="Close cart"
            className="grid h-11 w-11 shrink-0 place-items-center rounded-full text-ink hover:bg-ink/[0.05]"
          >
            <X className="h-5 w-5" strokeWidth={1.8} />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 px-6 text-center">
            <p className="text-[16px] text-ink-muted">Your cart is empty.</p>
            <button
              type="button"
              onClick={close}
              className="h-12 rounded-md border border-ink px-6 text-[15px] font-medium text-ink"
            >
              Continue shopping
            </button>
          </div>
        ) : (
          <>
            <ul className="flex-1 divide-y divide-hairline overflow-y-auto px-5">
              {items.map((item) => (
                <li key={item.id} className="flex gap-4 py-5">
                  <img
                    src={item.image}
                    alt={item.name}
                    width={160}
                    height={160}
                    loading="lazy"
                    className="h-20 w-20 shrink-0 rounded-md object-cover"
                  />
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-[15px] font-medium text-ink">{item.name}</p>
                    <p className="mt-0.5 text-[13px] text-ink-muted">
                      {item.color} / {item.size}
                    </p>
                    <p className="mt-1 text-[14px] text-ink">{formatPrice(item.price)}</p>
                    <div className="mt-3 flex items-center gap-3">
                      <div className="inline-flex items-center rounded-md border border-hairline">
                        <button
                          type="button"
                          aria-label="Decrease quantity"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="grid h-10 w-10 place-items-center text-ink"
                        >
                          <Minus className="h-3.5 w-3.5" strokeWidth={1.8} />
                        </button>
                        <span className="w-8 text-center text-[14px]">{item.quantity}</span>
                        <button
                          type="button"
                          aria-label="Increase quantity"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="grid h-10 w-10 place-items-center text-ink"
                        >
                          <Plus className="h-3.5 w-3.5" strokeWidth={1.8} />
                        </button>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeItem(item.id)}
                        aria-label={`Remove ${item.name}`}
                        className="grid h-10 w-10 place-items-center rounded-md text-ink-muted hover:text-ink"
                      >
                        <Trash2 className="h-4 w-4" strokeWidth={1.8} />
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="border-t border-hairline px-5 py-5">
              <div className="flex items-center justify-between text-[16px]">
                <span className="text-ink-muted">Subtotal</span>
                <span className="font-semibold text-ink">{formatPrice(subtotal)}</span>
              </div>
              <p className="mt-1 text-[13px] text-ink-muted">
                Taxes included. Shipping included on all items.
              </p>
              <button
                type="button"
                className="mt-4 h-[52px] w-full rounded-md bg-ink text-[15px] font-medium text-background transition-opacity hover:opacity-90"
              >
                Check out · {formatPrice(subtotal)}
              </button>
              <button
                type="button"
                onClick={close}
                className="mt-2 h-12 w-full rounded-md text-[15px] font-medium text-ink underline underline-offset-4"
              >
                Continue shopping
              </button>
            </div>
          </>
        )}
      </aside>
    </div>
  );
}
