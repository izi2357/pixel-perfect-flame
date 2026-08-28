export function VariantSelector({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: string[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <fieldset className="mt-5">
      <legend className="mb-2 text-[13px] text-ink-muted">{label}</legend>
      <div className="flex flex-wrap gap-2.5">
        {options.map((opt) => {
          const selected = opt === value;
          return (
            <button
              key={opt}
              type="button"
              aria-pressed={selected}
              onClick={() => onChange(opt)}
              className={`min-h-11 rounded-full border px-6 py-2.5 text-[15px] transition-colors ${
                selected
                  ? "border-ink bg-ink text-background"
                  : "border-hairline bg-background text-ink hover:border-ink/40"
              }`}
            >
              {opt}
            </button>
          );
        })}
      </div>
    </fieldset>
  );
}
