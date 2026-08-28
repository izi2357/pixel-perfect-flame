import type { ReactNode } from "react";

/** Renders **bold** segments and blank-line paragraphs from plain copy. */
export function RichText({ text, className = "" }: { text: string; className?: string }) {
  const paragraphs = text.split("\n\n");

  return (
    <div className={className}>
      {paragraphs.map((para, pi) => (
        <p key={pi} className={pi > 0 ? "mt-3" : undefined}>
          {renderBold(para)}
        </p>
      ))}
    </div>
  );
}

function renderBold(text: string): ReactNode[] {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
    part.startsWith("**") && part.endsWith("**") ? (
      <strong key={i} className="font-semibold text-neutral-900">
        {part.slice(2, -2)}
      </strong>
    ) : (
      <span key={i}>{part}</span>
    ),
  );
}
