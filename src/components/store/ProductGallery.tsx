import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";
import { useEffect, useState } from "react";
import type { ProductImage } from "@/data/product";

export function ProductGallery({ images }: { images: ProductImage[] }) {
  const [active, setActive] = useState(0);
  const [lightbox, setLightbox] = useState(false);

  useEffect(() => {
    if (!lightbox) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setLightbox(false);
      if (e.key === "ArrowRight") setActive((i) => (i + 1) % images.length);
      if (e.key === "ArrowLeft") setActive((i) => (i - 1 + images.length) % images.length);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox, images.length]);

  const current = images[active] ?? images[0];
  if (!current) return null;


  return (
    <div>
      {/* Main image */}
      <div className="relative overflow-hidden rounded-lg bg-ink/[0.03]">
        <button
          type="button"
          onClick={() => setLightbox(true)}
          aria-label={`Open media ${active + 1} in modal`}
          className="block w-full"
        >
          <img
            key={current.src}
            src={current.src}
            alt={current.alt}
            width={1200}
            height={1200}
            fetchPriority="high"
            className="aspect-square w-full animate-in fade-in object-contain duration-300"
          />
        </button>
        <span className="pointer-events-none absolute bottom-3 right-3 grid h-9 w-9 place-items-center rounded-full bg-background/85 text-ink">
          <ZoomIn className="h-4 w-4" strokeWidth={1.8} />
        </span>
      </div>

      {/* Thumbnails */}
      <div className="mt-3 grid grid-cols-6 gap-2 sm:gap-3">
        {images.map((img, i) => (
          <button
            key={img.src}
            type="button"
            onClick={() => setActive(i)}
            aria-label={`Show image ${i + 1}`}
            aria-current={i === active}
            className={`overflow-hidden rounded-lg transition-[outline-color,opacity] ${
              i === active
                ? "outline outline-2 outline-offset-2 outline-ink"
                : "opacity-80 outline outline-1 outline-hairline hover:opacity-100"
            }`}
          >
            <img
              src={img.src}
              alt={img.alt}
              width={400}
              height={400}
              loading="lazy"
              className="aspect-square w-full object-contain"
            />
          </button>
        ))}
      </div>

      {lightbox && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/90 p-4">
          <button
            type="button"
            onClick={() => setLightbox(false)}
            aria-label="Close"
            className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full bg-background text-ink"
          >
            <X className="h-5 w-5" strokeWidth={1.8} />
          </button>
          <button
            type="button"
            aria-label="Previous image"
            onClick={() => setActive((i) => (i - 1 + images.length) % images.length)}
            className="absolute left-3 grid h-11 w-11 place-items-center rounded-full bg-background/90 text-ink sm:left-8"
          >
            <ChevronLeft className="h-5 w-5" strokeWidth={1.8} />
          </button>
          <img
            src={current.src}
            alt={current.alt}
            className="max-h-[85vh] w-auto max-w-full rounded-lg object-contain"
          />
          <button
            type="button"
            aria-label="Next image"
            onClick={() => setActive((i) => (i + 1) % images.length)}
            className="absolute right-3 grid h-11 w-11 place-items-center rounded-full bg-background/90 text-ink sm:right-8"
          >
            <ChevronRight className="h-5 w-5" strokeWidth={1.8} />
          </button>
        </div>
      )}
    </div>
  );
}
