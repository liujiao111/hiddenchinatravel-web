"use client";

import { homeFaqs } from "@/lib/home/faq-content";
import cn from "classnames";
import Link from "next/link";
import { useState } from "react";

export function HomeFaqAccordion() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div className="overflow-hidden rounded-2xl border border-[color-mix(in_srgb,var(--brand-cta)_15%,transparent)] bg-white shadow-[0_4px_20px_rgba(80,40,24,0.08)]">
      {homeFaqs.map((item, index) => {
        const id = String(index);
        const isOpen = openId === id;
        return (
          <div
            key={item.question}
            className="border-b border-[color-mix(in_srgb,var(--brand-cta)_10%,transparent)] last:border-b-0"
          >
            <button
              type="button"
              onClick={() => setOpenId(isOpen ? null : id)}
              aria-expanded={isOpen}
              aria-controls={`home-faq-panel-${id}`}
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
              id={`home-faq-panel-${id}`}
              role="region"
              className={cn(
                "overflow-hidden transition-all duration-300",
                isOpen ? "max-h-[32rem] opacity-100" : "max-h-0 opacity-0",
              )}
            >
              <div className="space-y-2 px-5 pb-5 md:px-6">
                <p className="text-sm font-normal leading-relaxed text-[var(--brand-ink-muted)]">
                  {item.answerLead}
                </p>
                {item.link ? (
                  <Link
                    href={item.link.href}
                    className="inline-flex text-sm font-bold text-[var(--brand-coral)] underline decoration-[color-mix(in_srgb,var(--brand-coral)_35%,transparent)] underline-offset-2"
                  >
                    {item.link.label} →
                  </Link>
                ) : null}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
