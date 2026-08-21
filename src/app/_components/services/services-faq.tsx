"use client";

import { servicesFaqs } from "@/lib/services/content";
import cn from "classnames";
import { useState } from "react";

export function ServicesFaq() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section
      id="services-faq"
      aria-labelledby="services-faq-heading"
      className="scroll-mt-28"
    >
      <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand-mango)]">
        FAQ
      </p>
      <h2
        id="services-faq-heading"
        className="mb-8 text-2xl font-bold tracking-tight text-[var(--brand-ink)] md:text-3xl"
      >
        Common questions before you book
      </h2>
      <div className="overflow-hidden rounded-2xl border border-[color-mix(in_srgb,var(--brand-cta)_15%,transparent)] bg-white shadow-[0_4px_20px_rgba(80,40,24,0.08)]">
        {servicesFaqs.map((item, index) => {
          const id = String(index);
          const isOpen = openId === id;
          return (
            <div
              key={id}
              className="border-b border-[color-mix(in_srgb,var(--brand-cta)_10%,transparent)] last:border-b-0"
            >
              <button
                type="button"
                onClick={() => setOpenId(isOpen ? null : id)}
                aria-expanded={isOpen}
                aria-controls={`services-faq-panel-${id}`}
                className="flex min-h-14 w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-bold tracking-tight text-[var(--brand-ink)] transition-colors duration-300 hover:bg-[var(--brand-soft)] md:px-6 md:text-base"
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
                id={`services-faq-panel-${id}`}
                role="region"
                className={cn(
                  "overflow-hidden transition-all duration-300",
                  isOpen ? "max-h-[28rem] opacity-100" : "max-h-0 opacity-0",
                )}
              >
                <p className="px-5 pb-5 text-sm font-normal leading-relaxed text-[var(--brand-ink-muted)] md:px-6">
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
