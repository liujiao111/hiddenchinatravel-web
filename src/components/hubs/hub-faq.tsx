"use client";

import { useState } from "react";
import cn from "classnames";
import type { HubFaq } from "@/lib/hubs/types";
import { HubProse } from "./hub-prose";

type Props = {
  faqs: HubFaq[];
  heading?: string;
};

export function HubFaq({ faqs, heading }: Props) {
  const [openId, setOpenId] = useState<string | null>("0");

  if (!faqs.length) return null;

  return (
    <section id="faq" aria-labelledby="hub-faq-heading" className="scroll-mt-28">
      <p className="mb-3 text-xs font-light uppercase tracking-[0.18em] text-[var(--brand-warm)]">
        FAQ
      </p>
      <h2
        id="hub-faq-heading"
        className="mb-10 text-xl font-light leading-tight tracking-wide text-[var(--brand-ink)] md:text-3xl"
      >
        {heading || "Quick answers to common questions"}
      </h2>
      <div className="border-t border-[color-mix(in_srgb,var(--brand-cream-border)_40%,transparent)]">
        {faqs.map((item, index) => {
          const id = String(index);
          const isOpen = openId === id;
          return (
            <div
              key={id}
              className="border-b border-[color-mix(in_srgb,var(--brand-cream-border)_40%,transparent)]"
            >
              <button
                type="button"
                onClick={() => setOpenId(isOpen ? null : id)}
                aria-expanded={isOpen}
                aria-controls={`hub-faq-panel-${id}`}
                className="flex w-full items-center justify-between gap-4 py-5 text-left text-base font-light tracking-wide text-[var(--brand-ink)] transition-colors duration-500 hover:text-[var(--brand-ink-muted)] md:py-6 md:text-lg"
              >
                {item.question}
                <span
                  aria-hidden
                  className={cn(
                    "shrink-0 text-2xl font-light leading-none transition-transform duration-300",
                    isOpen && "rotate-45",
                  )}
                >
                  +
                </span>
              </button>
              <div
                id={`hub-faq-panel-${id}`}
                role="region"
                className={cn(
                  "overflow-hidden transition-all duration-300",
                  isOpen ? "max-h-[32rem] pb-5 md:pb-6" : "max-h-0",
                )}
              >
                <HubProse text={item.answer} className="pr-8" />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
