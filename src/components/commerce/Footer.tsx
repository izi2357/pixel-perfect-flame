import { useState } from "react";
import { Mail } from "lucide-react";
import type { Product } from "@/data/products";
import { PaymentIcons } from "./PaymentIcons";

export function Footer({
  product,
  wave = false,
  newsletterHeading = "Subscribe to our emails",
  newsletterBody = "Be the first to know about new drops and exclusive offers.",
}: {
  product: Product;
  wave?: boolean;
  newsletterHeading?: string;
  newsletterBody?: string;
}) {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  return (
    <footer className="relative mt-16 bg-[var(--deep)] text-white">
      {wave && (
        <svg
          viewBox="0 0 1440 60"
          preserveAspectRatio="none"
          aria-hidden
          className="absolute -top-[59px] left-0 h-[60px] w-full text-[var(--deep)]"
        >
          <path
            fill="currentColor"
            d="M0 60V26c120-20 240 12 360 12s240-32 360-32 240 32 360 32 240-32 360-32v54H0Z"
          />
        </svg>
      )}
      <div className="mx-auto max-w-[1200px] px-5 py-14 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
          <div>
            <img
              src={product.logoFooter ?? product.logo}
              alt={`${product.brand} logo`}
              className="h-10 w-auto object-contain"
            />
            <p className="mt-4 max-w-sm text-[14px] leading-[1.7] text-white/75">
              {product.description}
            </p>
          </div>
          <div>
            <h2 className="text-[15px] font-bold">{newsletterHeading}</h2>
            <p className="mt-2 text-[13.5px] text-white/70">{newsletterBody}</p>
            <form
              className="mt-4 flex gap-2"
              onSubmit={(e) => {
                e.preventDefault();
                if (!email.includes("@")) return;
                setSent(true);
                setEmail("");
              }}
            >
              <label className="sr-only" htmlFor="footer-email">
                Email
              </label>
              <input
                id="footer-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="min-w-0 flex-1 rounded-full border border-white/25 bg-white/10 px-4 py-3 text-[14px] text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/40"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="grid h-[46px] w-[46px] shrink-0 place-items-center rounded-full bg-white text-[var(--deep)]"
              >
                <Mail className="h-[18px] w-[18px]" strokeWidth={1.9} />
              </button>
            </form>
            {sent && (
              <p className="mt-2 text-[13px] font-medium text-white" role="status">
                Thanks — you're on the list.
              </p>
            )}
          </div>
        </div>

        <nav aria-label="Footer" className="mt-12">
          <h2 className="text-[15px] font-bold">Quick links</h2>
          <ul className="mt-3 flex flex-wrap gap-x-6 gap-y-2">
            {product.footerLinks.map((link) => (
              <li key={link}>
                <a href="/" className="text-[13.5px] text-white/75 transition hover:text-white">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-10 flex flex-col items-center gap-5 border-t border-white/15 pt-6 sm:flex-row sm:justify-between">
          <p className="text-[12.5px] text-white/65">
            © {new Date().getFullYear()} {product.brand}. All rights reserved.
          </p>
          <PaymentIcons />
        </div>
      </div>
    </footer>
  );
}
