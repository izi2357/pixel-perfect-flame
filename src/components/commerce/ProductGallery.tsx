import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect, useState } from "react";
import type { Media } from "@/data/products";

export function ProductGallery({
  media,
  rounded = "rounded-2xl",
  thumbCols = 4,
}: {
  media: Media[];
  rounded?: string;
  thumbCols?: number;
}) {
  const [active, setActive] = useState(0);
  const [lightbox, setLightbox] = useState(false);

  useEffect(() => {
    if (!lightbox) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setLightbox(false);
      if (e.key === "ArrowRight") setActive((i) => (i + 1) % media.length);
      if (e.key === "ArrowLeft") setActive((i) => (i - 1 + media.length) % media.length);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox, media.length]);

  const current = media[active] ?? media[0];
  if (!current) return null;

  return (
    <div>
      <div className={`relative overflow-hidden ${rounded} bg-black/[0.03]`}>
        <button
          type="button"
          onClick={() => setLightbox(true)}
          aria-label={`Open image ${active + 1} full screen`}
          className="block w-full"
        >
          {current.kind === "video" ? (
            <video
              key={current.src}
              src={current.src}
              poster={current.poster}
              autoPlay
              muted
              loop
              playsInline
              className="aspect-square w-full object-cover"
            />
          ) : (
            <img
              key={current.src}
              src={current.src}
              alt={current.alt}
              width={1200}
              height={1200}
              fetchPriority={active === 0 ? "high" : "auto"}
              className="aspect-square w-full object-cover"
            />
          )}
        </button>
        <button
          type="button"
          aria-label="Previous image"
          onClick={() => setActive((i) => (i - 1 + media.length) % media.length)}
          className="absolute left-2.5 top-1/2 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full bg-white/85 text-neutral-900 shadow-sm backdrop-blur transition hover:bg-white"
        >
          <ChevronLeft className="h-5 w-5" strokeWidth={1.9} />
        </button>
        <button
          type="button"
          aria-label="Next image"
          onClick={() => setActive((i) => (i + 1) % media.length)}
          className="absolute right-2.5 top-1/2 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full bg-white/85 text-neutral-900 shadow-sm backdrop-blur transition hover:bg-white"
        >
          <ChevronRight className="h-5 w-5" strokeWidth={1.9} />
        </button>
      </div>

      <div
        className="mt-3 grid gap-2.5 sm:gap-3"
        style={{ gridTemplateColumns: `repeat(${thumbCols}, minmax(0, 1fr))` }}
      >
        {media.map((m, i) => (
          <button
            key={m.src}
            type="button"
            onClick={() => setActive(i)}
            aria-label={`Show image ${i + 1}`}
            aria-current={i === active}
            className={`overflow-hidden ${rounded} transition-all ${
              i === active
                ? "ring-2 ring-[var(--acc)] ring-offset-2"
                : "opacity-80 ring-1 ring-black/10 hover:opacity-100"
            }`}
          >
            {m.kind === "video" ? (
              <video src={m.src} muted playsInline className="aspect-square w-full object-cover" />
            ) : (
              <img
                src={m.src}
                alt={m.alt}
                width={320}
                height={320}
                loading="lazy"
                className="aspect-square w-full object-cover"
              />
            )}
          </button>
        ))}
      </div>

      {lightbox && (
        <div className="fixed inset-0 z-[80] flex items-center justify-center bg-black/90 p-4">
          <button
            type="button"
            onClick={() => setLightbox(false)}
            aria-label="Close"
            className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full bg-white text-neutral-900"
          >
            <X className="h-5 w-5" strokeWidth={1.8} />
          </button>
          <img
            src={current.src}
            alt={current.alt}
            className="max-h-[85vh] w-auto max-w-full rounded-xl object-contain"
          />
        </div>
      )}
    </div>
  );
}
