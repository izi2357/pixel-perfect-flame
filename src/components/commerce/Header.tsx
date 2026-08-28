import { AppLink } from "./AppLink";
import { Menu, Search, ShoppingCart, User, X } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/lib/cart";
import type { Product } from "@/data/products";

export function Header({
  product,
  centeredLogo = true,
  tone = "light",
}: {
  product: Product;
  centeredLogo?: boolean;
  tone?: "light" | "dark";
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const { count, open } = useCart();

  const dark = tone === "dark";
  const text = dark ? "text-white" : "text-neutral-900";
  const border = dark ? "border-white/15" : "border-black/10";

  return (
    <header
      className={`sticky top-0 z-40 border-b ${border} ${dark ? "bg-black" : "bg-white"} ${text}`}
    >
      <div className="mx-auto flex h-16 max-w-[1200px] items-center gap-3 px-4 sm:h-[76px] lg:px-8">
        {/* Left: desktop nav / mobile menu button */}
        <div className="flex flex-1 items-center gap-6">
          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(true)}
            className="grid h-10 w-10 place-items-center rounded-full transition-colors hover:bg-current/5 lg:hidden"
          >
            <Menu className="h-6 w-6" strokeWidth={1.7} />
          </button>
          <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
            {product.nav.map((item, i) => (
              <AppLink
                key={item.label}
                to={item.to}
                className={`rounded-full px-3.5 py-2 text-[14px] font-medium transition-colors ${
                  i === 1
                    ? "bg-[var(--acc)] text-[var(--acc-fg)]"
                    : "hover:bg-current/[0.06] opacity-90 hover:opacity-100"
                }`}
              >
                {item.label}
              </AppLink>
            ))}
          </nav>
        </div>

        {/* Center: logo */}
        <div className={centeredLogo ? "flex shrink-0 justify-center" : "flex flex-1"}>
          <AppLink to={`/products/${product.slug}`} aria-label={`${product.brand} home`}>
            <img
              src={product.logo}
              alt={`${product.brand} logo`}
              className={`${product.logoWidthClass} w-auto object-contain`}
            />
          </AppLink>
        </div>

        {/* Right: utility icons */}
        <div className="flex flex-1 items-center justify-end gap-0.5 sm:gap-1">
          <button
            type="button"
            aria-label="Search"
            className="hidden h-10 w-10 place-items-center rounded-full transition-colors hover:bg-current/[0.06] sm:grid"
          >
            <Search className="h-[21px] w-[21px]" strokeWidth={1.7} />
          </button>
          <button
            type="button"
            aria-label="Account"
            className="hidden h-10 w-10 place-items-center rounded-full transition-colors hover:bg-current/[0.06] sm:grid"
          >
            <User className="h-[21px] w-[21px]" strokeWidth={1.7} />
          </button>
          <button
            type="button"
            onClick={open}
            aria-label={`Open cart, ${count} items`}
            className="relative grid h-10 w-10 place-items-center rounded-full transition-colors hover:bg-current/[0.06]"
          >
            <ShoppingCart className="h-[21px] w-[21px]" strokeWidth={1.7} />
            {count > 0 && (
              <span className="absolute -right-0.5 -top-0.5 grid h-[18px] min-w-[18px] place-items-center rounded-full bg-[var(--acc)] px-1 text-[10px] font-bold text-[var(--acc-fg)]">
                {count}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile drawer nav */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
            className="absolute inset-0 bg-black/50"
          />
          <div
            className={`absolute left-0 top-0 h-full w-[82%] max-w-[340px] ${dark ? "bg-black text-white" : "bg-white text-neutral-900"} p-5 shadow-xl`}
          >
            <div className="flex items-center justify-between">
              <img
                src={product.logo}
                alt={`${product.brand} logo`}
                className="h-8 w-auto object-contain"
              />
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setMenuOpen(false)}
                className="grid h-10 w-10 place-items-center rounded-full hover:bg-current/[0.06]"
              >
                <X className="h-5 w-5" strokeWidth={1.8} />
              </button>
            </div>
            <nav aria-label="Mobile" className="mt-6 flex flex-col">
              <AppLink
                to="/"
                onClick={() => setMenuOpen(false)}
                className={`border-b ${border} py-3.5 text-[17px] font-medium`}
              >
                All stores
              </AppLink>
              {product.nav.map((item) => (
                <AppLink
                  key={item.label}
                  to={item.to}
                  onClick={() => setMenuOpen(false)}
                  className={`border-b ${border} py-3.5 text-[17px] font-medium`}
                >
                  {item.label}
                </AppLink>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
