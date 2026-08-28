const METHODS = [
  { label: "VISA", className: "text-[#1a1f71] font-black italic" },
  { label: "mastercard", className: "text-[#eb001b] font-bold" },
  { label: "AMEX", className: "text-[#006fcf] font-black" },
  { label: "PayPal", className: "text-[#003087] font-bold italic" },
  { label: "G Pay", className: "text-neutral-800 font-semibold" },
  { label: "Pay", className: "text-neutral-900 font-semibold" },
  { label: "shop", className: "text-[#5a31f4] font-bold" },
];

export function PaymentIcons({ className = "" }: { className?: string }) {
  return (
    <ul
      className={`flex flex-wrap items-center justify-center gap-1.5 ${className}`}
      aria-label="Accepted payment methods"
    >
      {METHODS.map((m) => (
        <li
          key={m.label}
          className="grid h-[26px] min-w-[42px] place-items-center rounded-[4px] border border-black/10 bg-white px-1.5 shadow-sm"
        >
          <span className={`text-[9.5px] uppercase tracking-tight ${m.className}`}>{m.label}</span>
        </li>
      ))}
    </ul>
  );
}
