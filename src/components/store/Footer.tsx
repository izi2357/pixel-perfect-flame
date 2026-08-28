import { CurrencySelector } from "./CurrencySelector";

const COLUMNS = [
  { title: "Shop", links: ["All products", "New arrivals", "Best sellers", "Gift ideas"] },
  { title: "Help", links: ["Contact us", "Order tracker", "Shipping", "Returns"] },
  { title: "Company", links: ["About Prime Utopia", "Reviews", "Privacy policy", "Terms of service"] },
];

export function Footer() {
  return (
    <footer className="border-t border-hairline bg-ink/[0.02]">
      <div className="mx-auto max-w-[1280px] px-5 py-14 lg:px-10 lg:py-16">
        <div className="grid gap-10 md:grid-cols-[minmax(0,1.4fr)_repeat(3,minmax(0,1fr))]">
          <div>
            <span className="text-[19px] font-bold text-brand">
              Prime<span className="font-semibold text-ink">Utopia</span>
            </span>
            <p className="mt-3 max-w-xs text-[14px] leading-[1.7] text-ink-muted">
              Considered home décor and lighting, shipped worldwide with all shipping costs
              included.
            </p>
            <div className="mt-5">
              <CurrencySelector />
            </div>
          </div>
          {COLUMNS.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h2 className="text-[14px] font-semibold text-ink">{col.title}</h2>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="/"
                      className="text-[14px] text-ink-muted transition-colors hover:text-ink"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
        <div className="mt-12 border-t border-hairline pt-6">
          <p className="text-[13px] text-ink-muted">
            © {new Date().getFullYear()} Prime Utopia. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
