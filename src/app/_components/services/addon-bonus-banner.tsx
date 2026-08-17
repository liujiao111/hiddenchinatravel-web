"use client";

import { addonBonus } from "@/lib/services/content";
import { kitChecklistItems } from "@/lib/survival-kit/content";
import cn from "classnames";
import Link from "next/link";
import { useState } from "react";

export function AddonBonusBanner() {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-2xl border-2 border-dashed border-[color-mix(in_srgb,var(--brand-mango)_55%,transparent)] bg-[color-mix(in_srgb,var(--brand-mango)_12%,white)] px-4 py-4 md:px-5">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex gap-3">
          <span
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-[var(--brand-mango)] shadow-sm"
            aria-hidden
          >
            <GiftIcon />
          </span>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#c79100]">
              {addonBonus.title}
            </p>
            <p className="mt-1 text-sm font-bold leading-snug text-[var(--brand-cta)] md:text-base">
              {addonBonus.lead}
            </p>
            <p className="mt-1 text-sm font-normal leading-relaxed text-[var(--brand-ink-muted)]">
              {addonBonus.detail}
            </p>
          </div>
        </div>
        <button
          type="button"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex min-h-11 shrink-0 items-center justify-center rounded-full border-2 border-[#00897b]/25 bg-white px-4 py-2 text-xs font-bold text-[var(--brand-cta)] transition-all duration-300 hover:bg-[#00897b]/8"
        >
          {open ? "Hide checklist" : "See kit checklist"}
        </button>
      </div>

      <div
        className={cn(
          "overflow-hidden transition-all duration-300",
          open ? "mt-4 max-h-[28rem] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <ul className="grid gap-2 sm:grid-cols-2">
          {kitChecklistItems.map((item) => (
            <li
              key={item.id}
              className="flex items-start gap-2 rounded-xl bg-white/80 px-3 py-2 text-sm text-[var(--brand-cta)]"
            >
              <span className="mt-0.5 font-bold text-[var(--brand-olive)]" aria-hidden>
                ✓
              </span>
              {item.label}
            </li>
          ))}
        </ul>
        <Link
          href={addonBonus.href}
          className="mt-3 inline-flex text-sm font-bold text-[var(--brand-coral)] underline decoration-[color-mix(in_srgb,var(--brand-coral)_35%,transparent)] underline-offset-2"
        >
          Get Free Survival Kit →
        </Link>
      </div>
    </div>
  );
}

function GiftIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 8v13M4.5 12h15M5 8h14v4H5V8Zm2.5 0C6 8 5 6.8 5 5.5S6.2 3 7.5 3 10 4.2 10 5.5 8.8 8 7.5 8Zm9 0c-1.5 0-2.5-1.2-2.5-2.5S15 3 16.5 3 19 4.2 19 5.5 17.8 8 16.5 8Z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 12v8.5A1.5 1.5 0 0 0 6.5 22h11a1.5 1.5 0 0 0 1.5-1.5V12"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
    </svg>
  );
}
