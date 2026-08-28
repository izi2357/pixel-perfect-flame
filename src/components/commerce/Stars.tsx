export function StarGlyph({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={className} fill="currentColor">
      <path d="M12 1.7l3.09 6.63 7.16.86-5.28 4.98 1.38 7.13L12 17.9l-6.35 3.4 1.38-7.13L1.75 9.19l7.16-.86L12 1.7z" />
    </svg>
  );
}

export function Stars({
  rating = 5,
  size = "md",
  className = "",
  colorClass = "text-[#ffb100]",
}: {
  rating?: number;
  size?: "sm" | "md" | "lg";
  className?: string;
  colorClass?: string;
}) {
  const dim = size === "sm" ? "h-3.5 w-3.5" : size === "lg" ? "h-6 w-6" : "h-[18px] w-[18px]";
  const pct = Math.max(0, Math.min(100, (rating / 5) * 100));

  return (
    <span
      className={`relative inline-flex align-middle ${className}`}
      role="img"
      aria-label={`${rating} out of 5 stars`}
    >
      <span className="flex gap-[3px] text-black/15">
        {Array.from({ length: 5 }).map((_, i) => (
          <StarGlyph key={i} className={dim} />
        ))}
      </span>
      <span
        className={`absolute inset-0 flex gap-[3px] overflow-hidden ${colorClass}`}
        style={{ width: `${pct}%` }}
      >
        {Array.from({ length: 5 }).map((_, i) => (
          <StarGlyph key={i} className={`${dim} shrink-0`} />
        ))}
      </span>
    </span>
  );
}
