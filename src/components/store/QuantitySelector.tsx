import { Minus, Plus } from "lucide-react";

export function QuantitySelector({
  value,
  onChange,
  label = "Quantity",
}: {
  value: number;
  onChange: (v: number) => void;
  label?: string;
}) {
  return (
    <div className="mt-5">
      <span className="mb-2 block text-[13px] text-ink-muted">{label}</span>
      <div className="inline-flex items-center rounded-md border border-hairline">
        <button
          type="button"
          aria-label="Decrease quantity"
          onClick={() => onChange(Math.max(1, value - 1))}
          className="grid h-12 w-12 place-items-center text-ink transition-colors hover:bg-ink/[0.04]"
        >
          <Minus className="h-4 w-4" strokeWidth={1.8} />
        </button>
        <input
          type="number"
          min={1}
          aria-label="Quantity"
          value={value}
          onChange={(e) => onChange(Math.max(1, Number(e.target.value) || 1))}
          className="h-12 w-12 border-none bg-transparent text-center text-[15px] outline-none [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none"
        />
        <button
          type="button"
          aria-label="Increase quantity"
          onClick={() => onChange(value + 1)}
          className="grid h-12 w-12 place-items-center text-ink transition-colors hover:bg-ink/[0.04]"
        >
          <Plus className="h-4 w-4" strokeWidth={1.8} />
        </button>
      </div>
    </div>
  );
}
