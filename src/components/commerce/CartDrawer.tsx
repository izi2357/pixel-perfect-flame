import { Minus, Plus, ShoppingBag, Trash2, X } from "lucide-react";
import { useCart } from "@/lib/cart";
import { formatMoney } from "@/data/products";

export function CartDrawer() {
  const { items, isOpen, close, subtotal, updateQuantity, removeItem } = useCart();

  return (
    <div
      className={`fixed inset-0 z-[70] ${isOpen ? "" : "pointer-events-none"}`}
      aria-hidden={!isOpen}
    >
      <button
        type="button"
        tabIndex={isOpen ? 0 : -1}
        aria-label="Close cart"
        onClick={close}
        className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
      />
      <aside
        role="dialog"
        aria-label="Shopping cart"
        className={`absolute right-0 top-0 flex h-full w-full max-w-[420px] flex-col bg-white shadow-2xl transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-black/10 px-5 py-4">
          <h2 className="text-[17px] font-bold tracking-[-0.01em] text-neutral-900">Your cart</h2>
          <button
            type="button"
            onClick={close}
            aria-label="Close cart"
            className="grid h-10 w-10 place-items-center rounded-full hover:bg-black/5"
          >
            <X className="h-5 w-5" strokeWidth={1.8} />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-3 px-6 text-center">
            <ShoppingBag className="h-10 w-10 text-black/25" strokeWidth={1.5} />
            <p className="text-[15px] text-neutral-500">Your cart is empty.</p>
            <button
              type="button"
              onClick={close}
              className="mt-1 rounded-full bg-[var(--acc)] px-5 py-2.5 text-[14px] font-semibold text-[var(--acc-fg)]"
            >
              Continue shopping
            </button>
          </div>
        ) : (
          <>
            <ul className="flex-1 divide-y divide-black/10 overflow-y-auto px-5">
              {items.map((item) => (
                <li key={item.id} className="flex gap-3.5 py-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    width={96}
                    height={96}
                    className="h-[76px] w-[76px] shrink-0 rounded-lg bg-black/[0.04] object-contain"
                  />
                  <div className="min-w-0 flex-1">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.06em] text-neutral-400">
                      {item.brand}
                    </p>
                    <p className="mt-0.5 truncate text-[14px] font-semibold text-neutral-900">
                      {item.title}
                    </p>
                    {item.variant && (
                      <p className="mt-0.5 text-[12.5px] text-neutral-500">{item.variant}</p>
                    )}
                    <div className="mt-2 flex items-center justify-between gap-2">
                      <div className="flex items-center rounded-full border border-black/15">
                        <button
                          type="button"
                          aria-label={`Decrease quantity of ${item.title}`}
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="grid h-8 w-8 place-items-center rounded-full hover:bg-black/5"
                        >
                          <Minus className="h-3.5 w-3.5" strokeWidth={2} />
                        </button>
                        <span className="w-6 text-center text-[13px] font-semibold">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          aria-label={`Increase quantity of ${item.title}`}
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="grid h-8 w-8 place-items-center rounded-full hover:bg-black/5"
                        >
                          <Plus className="h-3.5 w-3.5" strokeWidth={2} />
                        </button>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <span className="text-[14px] font-bold text-neutral-900">
                          {formatMoney(item.price * item.quantity, item.currencySymbol)}
                        </span>
                        <button
                          type="button"
                          aria-label={`Remove ${item.title}`}
                          onClick={() => removeItem(item.id)}
                          className="grid h-8 w-8 place-items-center rounded-full text-neutral-400 hover:bg-black/5 hover:text-neutral-700"
                        >
                          <Trash2 className="h-4 w-4" strokeWidth={1.7} />
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <div className="border-t border-black/10 px-5 py-5">
              <div className="flex items-center justify-between text-[15px]">
                <span className="font-medium text-neutral-600">Subtotal</span>
                <span className="text-[19px] font-bold text-neutral-900">
                  {formatMoney(subtotal, items[0]?.currencySymbol ?? "$")}
                </span>
              </div>
              <p className="mt-1 text-[12.5px] text-neutral-500">
                Taxes and discounts calculated at checkout.
              </p>
              <button
                type="button"
                className="mt-4 h-[52px] w-full rounded-full bg-[var(--acc)] text-[15px] font-bold uppercase tracking-[0.04em] text-[var(--acc-fg)] transition-opacity hover:opacity-90"
              >
                Checkout
              </button>
            </div>
          </>
        )}
      </aside>
    </div>
  );
}
