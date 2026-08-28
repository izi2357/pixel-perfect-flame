import { ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const OPTIONS = [
  "United Kingdom | GBP £",
  "United States | USD $",
  "European Union | EUR €",
  "Canada | CAD $",
];

export function CurrencySelector({ className = "" }: { className?: string }) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(OPTIONS[0]);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onDown(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, []);

  return (
    <div ref={ref} className={`relative ${className}`}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-label="Change country and currency"
        className="flex items-center gap-1.5 rounded-md px-2 py-1.5 text-[13px] text-ink transition-colors hover:bg-ink/[0.04]"
      >
        <span className="whitespace-nowrap">{selected}</span>
        <ChevronDown className="h-3.5 w-3.5 shrink-0" strokeWidth={2} />
      </button>
      {open && (
        <ul className="absolute right-0 z-50 mt-2 w-56 overflow-hidden rounded-md border border-hairline bg-background py-1 shadow-[0_6px_24px_rgba(0,0,0,0.12)]">
          {OPTIONS.map((opt) => (
            <li key={opt}>
              <button
                type="button"
                onClick={() => {
                  setSelected(opt);
                  setOpen(false);
                }}
                className={`w-full px-3.5 py-2 text-left text-[13px] transition-colors hover:bg-ink/[0.04] ${
                  opt === selected ? "font-semibold text-ink" : "text-ink-muted"
                }`}
              >
                {opt}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
