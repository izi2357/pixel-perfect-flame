export function Marquee({ messages }: { messages: string[] }) {
  const track = [...messages, ...messages, ...messages, ...messages];

  return (
    <div className="overflow-hidden bg-[var(--marquee-bg)] py-2.5 text-[var(--marquee-fg)]">
      <div className="marquee-track flex w-max gap-10 whitespace-nowrap will-change-transform">
        {[0, 1].map((dup) => (
          <div key={dup} className="flex gap-10" aria-hidden={dup === 1}>
            {track.map((m, i) => (
              <span
                key={`${dup}-${i}`}
                className="text-[11px] font-semibold uppercase tracking-[0.08em] sm:text-[12px]"
              >
                {m}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
