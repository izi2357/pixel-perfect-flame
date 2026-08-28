import { Minus, Plus } from "lucide-react";
import { useState } from "react";
import type { Faq } from "@/data/products";
import { RichText } from "./RichText";

export function Accordion({
  items,
  variant = "bordered",
  defaultOpen = -1,
}: {
  items: Faq[];
  variant?: "bordered" | "boxed" | "divided";
  defaultOpen?: number;
}) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className={variant === "boxed" ? "space-y-3" : "divide-y divide-black/10"}>
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div
            key={item.q}
            className={
              variant === "boxed"
                ? "overflow-hidden rounded-xl border border-black/10 bg-white"
                : "py-1"
            }
          >
            <h3>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? -1 : i)}
                aria-expanded={isOpen}
                className={`flex w-full items-center justify-between gap-4 text-left ${
                  variant === "boxed" ? "px-4 py-4" : "py-4"
                }`}
              >
                <span className="text-[15px] font-semibold text-neutral-900 sm:text-[16px]">
                  {item.q}
                </span>
                <span className="grid h-6 w-6 shrink-0 place-items-center text-neutral-500">
                  {isOpen ? (
                    <Minus className="h-4 w-4" strokeWidth={2.2} />
                  ) : (
                    <Plus className="h-4 w-4" strokeWidth={2.2} />
                  )}
                </span>
              </button>
            </h3>
            <div
              className={`grid overflow-hidden transition-[grid-template-rows] duration-300 ${
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <RichText
                  text={item.a}
                  className={`text-[14.5px] leading-[1.75] text-neutral-600 ${
                    variant === "boxed" ? "px-4 pb-4" : "pb-5 pr-8"
                  }`}
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
