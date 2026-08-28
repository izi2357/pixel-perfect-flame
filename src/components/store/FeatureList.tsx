export function FeatureList({ features }: { features: { title: string; body: string }[] }) {
  return (
    <ul className="mt-6 space-y-5">
      {features.map((f) => (
        <li key={f.title} className="text-[16px] leading-[1.75] text-ink-muted">
          <span className="font-semibold text-ink">{f.title}</span>
          <span aria-hidden> — </span>
          {f.body}
        </li>
      ))}
    </ul>
  );
}
