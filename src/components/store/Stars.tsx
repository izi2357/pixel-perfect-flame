/**
 * Solid star icon matching the reference review widget (FontAwesome solid star).
 */
function StarIcon({ size }: { size: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 576 512"
      width={size}
      height={size}
      aria-hidden="true"
      className="shrink-0"
    >
      <path
        fill="currentColor"
        d="M259.3 17.8 194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
      />
    </svg>
  );
}

/**
 * Five-star rating: grey base layer with a clipped black layer on top,
 * the same two-layer technique the reference widget uses.
 */
export function Stars({
  rating,
  size = 16,
  className = "",
}: {
  rating: number;
  size?: number;
  className?: string;
}) {
  const pct = Math.max(0, Math.min(1, rating / 5)) * 100;
  const row = (color: string) => (
    <div className={`flex ${color}`} style={{ gap: 0 }}>
      {Array.from({ length: 5 }).map((_, i) => (
        <StarIcon key={i} size={size} />
      ))}
    </div>
  );

  return (
    <div
      className={`relative inline-block leading-none ${className}`}
      style={{ width: size * 5, height: size }}
      role="img"
      aria-label={`${rating} out of 5 stars`}
    >
      <div className="text-review-star-empty">{row("text-review-star-empty")}</div>
      <div
        className="absolute inset-y-0 left-0 overflow-hidden text-review-star"
        style={{ width: `${pct}%` }}
      >
        {row("text-review-star")}
      </div>
    </div>
  );
}
