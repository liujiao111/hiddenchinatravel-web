"use client";

import { useState } from "react";
import cn from "classnames";
import { faqItems } from "@/lib/visa-checker/faq-items";

export function VisaFaq() {
  const [openId, setOpenId] = useState<string | null>(faqItems[0]?.id ?? null);

  return (
    <section
      id="visa-faq"
      aria-labelledby="faq-heading"
      className="mb-0"
    >
      <h2
        id="faq-heading"
        className="mb-10 text-xl font-bold leading-tight tracking-wide text-[var(--brand-ink)] md:text-3xl"
      >
        Frequently asked questions
      </h2>
      <div className="border-t border-[color-mix(in_srgb,var(--brand-cream-border)_40%,transparent)]">
        {faqItems.map((item) => {
          const isOpen = openId === item.id;
          return (
            <div
              key={item.id}
              id={`faq-${item.id}`}
              className="border-b border-[color-mix(in_srgb,var(--brand-cream-border)_40%,transparent)]"
            >
              <button
                type="button"
                onClick={() => setOpenId(isOpen ? null : item.id)}
                aria-expanded={isOpen}
                aria-controls={`faq-panel-${item.id}`}
                className="flex w-full items-center justify-between gap-4 py-5 text-left text-base font-bold tracking-tight text-[var(--brand-ink)] transition-colors duration-500 hover:text-[var(--brand-ink-muted)] md:py-6 md:text-lg"
              >
                {item.question}
                <span
                  aria-hidden
                  className={cn(
                    "shrink-0 text-2xl font-bold leading-none transition-transform duration-300",
                    isOpen && "rotate-45",
                  )}
                >
                  +
                </span>
              </button>
              <div
                id={`faq-panel-${item.id}`}
                role="region"
                aria-labelledby={`faq-${item.id}`}
                className={cn(
                  "overflow-hidden transition-all duration-300",
                  isOpen ? "max-h-96 pb-5 md:pb-6" : "max-h-0",
                )}
              >
                <p className="pr-8 text-base font-normal leading-relaxed text-[var(--brand-ink-muted)]">
                  {item.answer}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
