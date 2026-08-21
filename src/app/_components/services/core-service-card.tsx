"use client";

import { trackEvent } from "@/lib/analytics/track";
import { coreService } from "@/lib/services/content";
import cn from "classnames";
import Link from "next/link";
import { useEffect, useRef } from "react";

function formatUsd(amount: number) {
  return `$${amount}`;
}

export function CoreServiceCard() {
  const pricingRef = useRef<HTMLDivElement>(null);
  const enteredAt = useRef<number | null>(null);

  useEffect(() => {
    const el = pricingRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          enteredAt.current = Date.now();
          return;
        }
        if (enteredAt.current != null) {
          const dwellMs = Date.now() - enteredAt.current;
          enteredAt.current = null;
          if (dwellMs >= 1500) {
            trackEvent("services_pricing_table_dwell", {
              dwell_ms: dwellMs,
              section: "core-tiers",
            });
          }
        }
      },
      { threshold: 0.45 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <article
      id="custom-itinerary"
      className="relative min-w-0 overflow-hidden rounded-2xl border-2 border-[var(--brand-cta)]/25 bg-white p-4 shadow-[0_8px_32px_rgba(80,40,24,0.14)] sm:p-5 md:p-8 lg:p-10"
    >
      <div
        className="absolute left-0 right-0 top-0 h-1.5 bg-[var(--brand-cta)]"
        aria-hidden
      />
      <div className="mb-4 flex flex-wrap items-center gap-2">
        <span className="rounded-full bg-[var(--brand-cta)] px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-white">
          Core service
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-[color-mix(in_srgb,var(--brand-olive)_14%,white)] px-3 py-1 text-[11px] font-bold text-[var(--brand-olive)]">
          <DeliveryIcon />
          {coreService.deliveryLabel}
        </span>
      </div>

      <h2 className="mb-3 text-xl font-bold tracking-tight text-[var(--brand-ink)] sm:text-2xl md:text-3xl lg:text-4xl">
        {coreService.title}
      </h2>
      <p className="mb-4 max-w-3xl text-sm font-normal leading-relaxed text-[var(--brand-ink-muted)] md:text-base">
        {coreService.subtitle}
      </p>
      <p className="mb-5 max-w-3xl text-sm font-normal leading-relaxed text-[var(--brand-cta)] md:text-base">
        {coreService.body}
      </p>

      <p className="mb-5 inline-flex max-w-3xl items-start gap-2 rounded-2xl bg-[var(--brand-soft)] px-3 py-3 text-sm font-bold text-[var(--brand-cta)] sm:mb-6 sm:px-4">
        <span className="mt-0.5 text-[var(--brand-coral)]" aria-hidden>
          ✦
        </span>
        {coreService.differentiator}
      </p>

      <div ref={pricingRef}>
        {/* Mobile: stacked tier cards — no horizontal table scroll */}
        <ul
          className="mb-5 space-y-3 md:hidden"
          aria-label="Custom itinerary pricing by trip length"
        >
          {coreService.tiers.map((tier) => (
            <li
              key={tier.id}
              className="rounded-2xl border border-[color-mix(in_srgb,var(--brand-cta)_15%,transparent)] bg-[var(--brand-soft)]/50 p-4"
            >
              <p className="mb-3 text-sm font-bold text-[var(--brand-cta)]">
                {tier.daysLabel}
              </p>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <p className="mb-1 text-[11px] font-bold uppercase tracking-wide text-[var(--brand-ink-muted)]">
                    Early bird
                  </p>
                  <p className="text-2xl font-bold text-[var(--brand-coral)]">
                    {formatUsd(tier.earlyBird)}
                  </p>
                  <p className="mt-0.5 text-xs font-normal text-[var(--brand-ink-muted)] line-through">
                    {formatUsd(tier.regular)}
                  </p>
                </div>
                <div>
                  <p className="mb-1 text-[11px] font-bold uppercase tracking-wide text-[var(--brand-ink-muted)]">
                    Regular
                  </p>
                  <p className="text-lg font-bold text-[var(--brand-cta)]">
                    From {formatUsd(tier.regular)}
                  </p>
                  <p className="mt-1 text-xs font-normal text-[var(--brand-ink-muted)]">
                    {coreService.deliveryLabel}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>

        {/* Desktop / tablet: pricing table */}
        <div className="mb-6 hidden min-w-0 overflow-x-auto rounded-2xl border border-[color-mix(in_srgb,var(--brand-cta)_15%,transparent)] md:block">
          <table className="w-full min-w-[32rem] border-collapse text-left text-sm">
            <caption className="sr-only">
              Custom itinerary pricing by trip length
            </caption>
            <thead>
              <tr className="bg-[var(--brand-cta)] text-white">
                <th scope="col" className="px-4 py-3 font-bold">
                  Trip length
                </th>
                <th scope="col" className="px-4 py-3 font-bold">
                  {coreService.earlyBirdLabel}
                </th>
                <th scope="col" className="px-4 py-3 font-bold">
                  {coreService.regularLabel}
                </th>
                <th scope="col" className="px-4 py-3 font-bold">
                  Delivery
                </th>
              </tr>
            </thead>
            <tbody>
              {coreService.tiers.map((tier, index) => (
                <tr
                  key={tier.id}
                  className={cn(
                    "border-t border-[color-mix(in_srgb,var(--brand-cta)_10%,transparent)]",
                    index % 2 === 1 && "bg-[var(--brand-soft)]/60",
                  )}
                >
                  <th
                    scope="row"
                    className="px-4 py-3.5 font-bold text-[var(--brand-cta)]"
                  >
                    {tier.daysLabel}
                  </th>
                  <td className="px-4 py-3.5">
                    <span className="text-xl font-bold text-[var(--brand-coral)] md:text-2xl">
                      {formatUsd(tier.earlyBird)}
                    </span>
                    <span className="mt-1 block text-xs font-normal text-[var(--brand-ink-muted)] line-through">
                      {formatUsd(tier.regular)}
                    </span>
                  </td>
                  <td className="px-4 py-3.5 font-bold text-[var(--brand-cta)]">
                    From {formatUsd(tier.regular)}
                  </td>
                  <td className="px-4 py-3.5 text-[var(--brand-ink-muted)]">
                    {coreService.deliveryLabel}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <p className="mb-6 text-xs font-normal text-[var(--brand-ink-muted)]">
        Founding early-bird rates apply while available. Regular prices apply
        after the early-bird window ends (
        <span className="font-bold text-[var(--brand-cta)]">
          {coreService.earlyBirdDeadline}
        </span>
        ).
      </p>

      <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
        <Link
          href={coreService.cta.href}
          className="btn-brand inline-flex min-h-12 w-full justify-center px-6 py-3.5 text-sm sm:w-auto sm:px-8 md:text-base"
          data-cta={coreService.cta.trackingEvent}
          onClick={() =>
            trackEvent(coreService.cta.trackingEvent, { source: "core-card" })
          }
        >
          {coreService.cta.label}
          <span aria-hidden>→</span>
        </Link>
        <Link
          href="/services/custom-itinerary"
          className="inline-flex min-h-12 items-center justify-center rounded-full border-2 border-[var(--brand-cta)]/30 px-6 py-3 text-sm font-bold text-[var(--brand-cta)] transition-all duration-300 hover:bg-[var(--brand-cta)]/8 sm:px-8"
        >
          See the full planning page
        </Link>
      </div>
    </article>
  );
}

function DeliveryIcon() {
  return (
    <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="8.25" stroke="currentColor" strokeWidth="1.75" />
      <path
        d="M12 7v5l3 2"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
