import { useState } from "react";
import { ChevronRight, Images, X } from "lucide-react";
import { Stars } from "./Stars";
import { reviewPhotos, reviewSummary, reviews as seedReviews, type Review } from "@/data/reviews";
import { useIsMobile } from "@/hooks/use-mobile";

function ReviewCard({ review, onPhoto }: { review: Review; onPhoto: (src: string) => void }) {
  const photo = review.photos[0];

  return (
    <div className="mb-4 break-inside-avoid overflow-hidden rounded-[4px] border border-review-border bg-background">
      {photo && (
        <button
          type="button"
          onClick={() => onPhoto(photo)}
          className="relative block w-full"
          aria-label={`View photo from ${review.author}`}
        >
          <img
            src={photo}
            alt={`Customer photo from ${review.author}`}
            loading="lazy"
            className="block w-full object-cover"
          />
          {review.photos.length > 1 && (
            <span className="absolute right-2 top-2 flex items-center gap-1 rounded-[4px] bg-black/55 px-1.5 py-0.5 text-[11px] leading-none text-white">
              {review.photos.length}
              <Images className="h-3 w-3" strokeWidth={2} />
            </span>
          )}
        </button>
      )}
      <div className="px-4 py-4">
        <span className="block text-[14px] font-semibold leading-[19.6px] text-review-author">
          {review.author}
        </span>
        <Stars rating={review.rating} size={16} className="mt-1.5" />
        <div className="mt-2.5 text-[11px] leading-[11px] text-review-date">{review.date}</div>
        <p className="mt-2.5 text-[14px] leading-[19.6px] text-review-text">{review.text}</p>
      </div>
    </div>
  );
}

function WriteReviewModal({
  onClose,
  onSubmit,
}: {
  onClose: () => void;
  onSubmit: (r: Review) => void;
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [rating, setRating] = useState(5);
  const [text, setText] = useState("");
  const [photo, setPhoto] = useState<string | null>(null);

  const field =
    "mt-1.5 h-11 w-full rounded-[4px] border border-review-border bg-background px-3 text-[14px] text-review-author outline-none focus:border-review-star";

  return (
    <div className="fixed inset-0 z-[70] flex items-end justify-center bg-black/60 p-0 sm:items-center sm:p-4">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit({
            id: `local-${Date.now()}`,
            author: name.trim() || "Anonymous",
            date: new Date().toISOString().slice(0, 10),
            rating,
            text: text.trim(),
            photos: photo ? [photo] : [],
          });
          onClose();
        }}
        className="max-h-[92vh] w-full max-w-[520px] overflow-y-auto rounded-t-[10px] bg-background p-6 sm:rounded-[6px]"
      >
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-[18px] font-semibold text-review-author">Write a Review</h3>
          <button type="button" onClick={onClose} aria-label="Close">
            <X className="h-5 w-5 text-review-date" strokeWidth={1.8} />
          </button>
        </div>

        <label className="mt-5 block text-[13px] text-review-text">
          Name
          <input className={field} value={name} onChange={(e) => setName(e.target.value)} required />
        </label>
        <label className="mt-4 block text-[13px] text-review-text">
          Email
          <input
            type="email"
            className={field}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>

        <div className="mt-4 text-[13px] text-review-text">
          Rating
          <div className="mt-1.5 flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((n) => (
              <button
                key={n}
                type="button"
                onClick={() => setRating(n)}
                aria-label={`${n} star${n > 1 ? "s" : ""}`}
                className={n <= rating ? "text-review-star" : "text-review-star-empty"}
              >
                <Stars rating={1} size={22} className="w-[22px] overflow-hidden" />
              </button>
            ))}
          </div>
        </div>

        <label className="mt-4 block text-[13px] text-review-text">
          Review
          <textarea
            className="mt-1.5 min-h-[110px] w-full rounded-[4px] border border-review-border bg-background p-3 text-[14px] text-review-author outline-none focus:border-review-star"
            value={text}
            onChange={(e) => setText(e.target.value)}
            required
          />
        </label>

        <label className="mt-4 block text-[13px] text-review-text">
          Photo (optional)
          <input
            type="file"
            accept="image/*"
            onChange={(e) => {
              const f = e.target.files?.[0];
              setPhoto(f ? URL.createObjectURL(f) : null);
            }}
            className="mt-1.5 block w-full text-[13px]"
          />
        </label>

        <button
          type="submit"
          className="mt-6 h-9 w-full rounded-[4px] bg-review-button px-8 text-[13px] text-review-button-foreground"
        >
          Submit Review
        </button>
      </form>
    </div>
  );
}

export function ReviewsSection() {
  const [reviews, setReviews] = useState<Review[]>(seedReviews);
  const [writing, setWriting] = useState(false);
  const [photo, setPhoto] = useState<string | null>(null);
  const [showAll, setShowAll] = useState(false);
  const isMobile = useIsMobile();

  const limit = showAll ? reviews.length : isMobile ? 10 : 12;
  const visible = reviews.slice(0, limit);
  const total = reviewSummary.total + (reviews.length - seedReviews.length);
  const maxCount = Math.max(...reviewSummary.distribution.map((d) => d.count), 1);

  const writeButton = (
    <button
      type="button"
      onClick={() => setWriting(true)}
      className="h-9 rounded-[4px] bg-review-button px-8 text-[13px] leading-9 text-review-button-foreground"
    >
      Write a Review
    </button>
  );

  return (
    <section className="mx-auto w-full max-w-[1200px] px-5 py-10 lg:px-0 lg:py-14">
      {/* Header: score / distribution / write a review */}
      <div className="flex flex-col items-center gap-6 lg:flex-row lg:items-center lg:gap-8">
        <div className="w-full text-center lg:w-[250px]">
          <span className="block text-[34px] font-semibold leading-none text-review-author">
            {reviewSummary.score.toFixed(1)}
          </span>
          <Stars rating={reviewSummary.score} size={16} className="mt-2" />
          <div className="mt-2 text-[14px] leading-[14px] text-review-date">{total} reviews</div>
        </div>

        <div className="w-full min-w-0 flex-1 space-y-1">
          {reviewSummary.distribution.map((d) => (
            <div key={d.stars} className="flex items-center gap-2">
              <span className="flex w-[26px] items-center gap-1 text-[13px] text-review-date">
                {d.stars}
                <span className={d.count ? "text-review-star" : "text-review-star-empty"}>
                  <Stars rating={1} size={13} className="w-[13px] overflow-hidden" />
                </span>
              </span>
              <span className="h-[9px] min-w-0 flex-1 overflow-hidden rounded-[4px] bg-review-track">
                <span
                  className="block h-full rounded-[4px] bg-review-star"
                  style={{ width: `${(d.count / maxCount) * 100}%` }}
                />
              </span>
              <span className="w-[34px] text-right text-[12px] text-review-date">({d.count})</span>
            </div>
          ))}
        </div>

        <div className="w-full text-center lg:w-[250px]">
          <div className="hidden text-[16px] text-review-text lg:block">Share your experience</div>
          <div className="mt-2 hidden justify-center lg:flex">
            <Stars rating={5} size={16} />
          </div>
          <div className="mt-3 lg:mt-3">{writeButton}</div>
        </div>
      </div>

      {/* Customer photo strip */}
      {reviewPhotos.length > 0 && (
        <div className="relative mt-8">
          <div className="flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]{display:none}">
            {reviewPhotos.map((src) => (
              <button
                key={src}
                type="button"
                onClick={() => setPhoto(src)}
                className="h-20 w-20 shrink-0 overflow-hidden rounded-[4px]"
                aria-label="View customer photo"
              >
                <img
                  src={src}
                  alt="Customer review photo"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </button>
            ))}
          </div>
          <span className="pointer-events-none absolute right-0 top-1/2 hidden -translate-y-1/2 place-items-center rounded-full bg-background shadow-[0_1px_6px_rgba(0,0,0,0.18)] max-lg:grid max-lg:h-7 max-lg:w-7">
            <ChevronRight className="h-4 w-4 text-review-author" strokeWidth={2} />
          </span>
        </div>
      )}

      {/* Masonry review cards */}
      <div className="mt-6 gap-4 [column-fill:balance] columns-2 lg:columns-5">
        {visible.map((r) => (
          <ReviewCard key={r.id} review={r} onPhoto={setPhoto} />
        ))}
      </div>

      {limit < reviews.length && (
        <div className="mt-2 flex justify-center">
          <button
            type="button"
            onClick={() => setShowAll(true)}
            className="h-9 rounded-[4px] border border-review-border px-6 text-[13px] text-review-author"
          >
            See more reviews
          </button>
        </div>
      )}

      {writing && (
        <WriteReviewModal
          onClose={() => setWriting(false)}
          onSubmit={(r) => setReviews((prev) => [r, ...prev])}
        />
      )}

      {photo && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-black/85 p-4"
          onClick={() => setPhoto(null)}
        >
          <img src={photo} alt="Customer review photo" className="max-h-[85vh] max-w-full" />
        </div>
      )}
    </section>
  );
}
