import { Check } from "lucide-react";
import { useState } from "react";

export function AddToCartButton({ onAdd }: { onAdd: () => void }) {
  const [added, setAdded] = useState(false);

  return (
    <button
      type="button"
      onClick={() => {
        onAdd();
        setAdded(true);
        window.setTimeout(() => setAdded(false), 1800);
      }}
      className="flex h-[52px] w-full items-center justify-center gap-2 rounded-md border border-ink bg-background text-[15px] font-medium text-ink transition-colors hover:bg-ink/[0.04]"
    >
      {added ? (
        <>
          <Check className="h-4 w-4" strokeWidth={2} /> Added to cart
        </>
      ) : (
        "Add to cart"
      )}
    </button>
  );
}
