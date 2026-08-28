import type { CSSProperties, ReactNode } from "react";
import type { Theme } from "@/data/products";

/** Applies a product's palette as CSS variables consumed by shared components. */
export function ThemeScope({
  theme,
  children,
  className = "",
}: {
  theme: Theme;
  children: ReactNode;
  className?: string;
}) {
  const style = {
    "--acc": theme.accent,
    "--acc-fg": theme.accentText,
    "--deep": theme.deep,
    "--surf": theme.surface,
    "--marquee-bg": theme.marqueeBg,
    "--marquee-fg": theme.marqueeText,
  } as CSSProperties;

  return (
    <div style={style} className={`bg-white text-neutral-900 ${className}`}>
      {children}
    </div>
  );
}
