import { Menu, Search, ShoppingBag, User, X } from "lucide-react";
import { useState } from "react";
import { CurrencySelector } from "./CurrencySelector";
import { useCart } from "@/lib/cart";

const NAV = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/" },
  { label: "Contact Us", href: "/" },
  { label: "Order Tracker", href: "/" },
];

function Logo() {
  return (
    <a href="/" className="inline-flex flex-col items-center leading-none">
      <span className="text-[19px] font-bold tracking-[-0.01em] text-brand sm:text-[21px]">
        Prime<span className="font-semibold text-ink">Utopia</span>
      </span>
      <span className="mt-0.5 h-px w-full bg-brand/70" />
    </a>
  );
}

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const { count, open } = useCart();

  return (
    <header className="sticky top-0 z-40 border-b border-hairline bg-background">
      <div className="mx-auto flex h-[68px] max-w-[1600px] items-center gap-3 px-5 lg:px-10">
        {/* Mobile: menu + search */}
        <div className="flex items-center gap-1 lg:hidden">
          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setMenuOpen(true)}
            className="grid h-11 w-11 shrink-0 place-items-center rounded-full text-ink transition-colors hover:bg-ink/[0.05]"
          >
            <Menu className="h-[22px] w-[22px]" strokeWidth={1.8} />
          </button>
          <button
            type="button"
            aria-label="Search"
            onClick={() => setSearchOpen((s) => !s)}
            className="grid h-11 w-11 shrink-0 place-items-center rounded-full text-ink transition-colors hover:bg-ink/[0.05]"
          >
            <Search className="h-[22px] w-[22px]" strokeWidth={1.8} />
          </button>
        </div>

        {/* Desktop nav */}
        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {NAV.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="block rounded-md px-3 py-2 text-[15px] font-medium text-ink transition-colors hover:underline hover:decoration-1 hover:underline-offset-4"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Logo centered */}
        <div className="flex flex-1 justify-center">
          <Logo />
        </div>

        {/* Right controls */}
        <div className="flex items-center justify-end gap-0.5 lg:gap-1">
          <CurrencySelector className="hidden lg:block" />
          <button
            type="button"
            aria-label="Search"
            onClick={() => setSearchOpen((s) => !s)}
            className="hidden h-11 w-11 place-items-center rounded-full text-ink transition-colors hover:bg-ink/[0.05] lg:grid"
          >
            <Search className="h-[21px] w-[21px]" strokeWidth={1.8} />
          </button>
          <a
            href="/"
            aria-label="Log in"
            className="hidden h-11 w-11 place-items-center rounded-full text-ink transition-colors hover:bg-ink/[0.05] lg:grid"
          >
            <User className="h-[21px] w-[21px]" strokeWidth={1.8} />
          </a>
          <button
            type="button"
            onClick={open}
            aria-label={`Cart, ${count} items`}
            className="relative grid h-11 w-11 place-items-center rounded-full text-ink transition-colors hover:bg-ink/[0.05]"
          >
            <ShoppingBag className="h-[21px] w-[21px]" strokeWidth={1.8} />
            {count > 0 && (
              <span className="absolute right-1 top-1.5 grid h-[18px] min-w-[18px] place-items-center rounded-full bg-brand px-1 text-[10px] font-semibold text-brand-foreground">
                {count}
              </span>
            )}
          </button>
        </div>
      </div>

      {searchOpen && (
        <div className="border-t border-hairline bg-background px-5 py-3 lg:px-10">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="mx-auto flex max-w-3xl items-center gap-2 rounded-full border border-hairline px-4 py-2.5"
          >
            <Search className="h-4 w-4 shrink-0 text-ink-muted" strokeWidth={1.8} />
            <input
              type="search"
              placeholder="Search products"
              aria-label="Search products"
              className="min-w-0 flex-1 bg-transparent text-[15px] outline-none placeholder:text-ink-muted"
            />
          </form>
        </div>
      )}

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-ink/40"
            onClick={() => setMenuOpen(false)}
            aria-hidden
          />
          <div className="absolute inset-y-0 left-0 flex w-[86%] max-w-sm flex-col bg-background">
            <div className="flex h-[68px] items-center justify-between border-b border-hairline px-4">
              <Logo />
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setMenuOpen(false)}
                className="grid h-11 w-11 place-items-center rounded-full text-ink"
              >
                <X className="h-[22px] w-[22px]" strokeWidth={1.8} />
              </button>
            </div>
            <nav aria-label="Mobile" className="flex-1 overflow-y-auto px-2 py-3">
              <ul>
                {NAV.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="block rounded-md px-4 py-3.5 text-[17px] font-medium text-ink"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="border-t border-hairline px-4 py-4">
              <a
                href="/"
                className="mb-3 flex items-center gap-2.5 text-[15px] font-medium text-ink"
              >
                <User className="h-5 w-5" strokeWidth={1.8} /> Log in
              </a>
              <CurrencySelector />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
