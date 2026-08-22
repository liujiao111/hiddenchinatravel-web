"use client";

import { FancySelect } from "@/app/china-visa-checker/_components/fancy-select";
import { useQuickVisaLookup } from "@/lib/home/use-quick-visa-lookup";
import {
  evaluateQuickVisa,
  type QuickVisaLookup,
} from "@/lib/home/quick-visa";
import Link from "next/link";
import { useMemo, useState } from "react";

const DEFAULT_COUNTRY = "United States";

type Props = {
  /** Server snapshot — pass this on the homepage so SSR matches the client. */
  lookup?: QuickVisaLookup;
};

export function HomePrepVisaMini({ lookup: initialLookup }: Props) {
  const fetched = useQuickVisaLookup(initialLookup);
  // Prefer the server-provided snapshot so SSR and hydration cannot diverge
  // into the loading shell vs FancySelect mismatch.
  const lookup = initialLookup ?? fetched;
  const [country, setCountry] = useState(DEFAULT_COUNTRY);
  const result = useMemo(
    () => (lookup ? evaluateQuickVisa(country, lookup) : { status: "idle" as const }),
    [country, lookup],
  );

  if (!lookup) {
    return (
      <div
        className="h-12 rounded-full bg-[var(--brand-cream)]"
        aria-busy
        aria-label="Loading visa checker"
      />
    );
  }

  return (
    <div className="relative z-10 space-y-3">
      <FancySelect
        id="home-prep-visa-country"
        label="Passport country"
        placeholder="Search or select a country"
        value={country}
        options={lookup.countries}
        searchable
        onChange={setCountry}
      />

      {result.status === "visa-free" ? (
        <p className="rounded-2xl bg-[color-mix(in_srgb,var(--brand-olive)_12%,white)] px-3 py-2.5 text-sm font-normal leading-snug text-[var(--brand-cta)]">
          <span className="font-bold text-[var(--brand-olive)]">
            Likely visa-free
          </span>{" "}
          for up to {result.maxStayDays} days
          {result.alsoTransit240
            ? " (240-hour transit may also apply)."
            : "."}{" "}
          Confirm details in the full checker.
        </p>
      ) : null}

      {result.status === "transit-only" ? (
        <p className="rounded-2xl bg-[var(--brand-soft)] px-3 py-2.5 text-sm font-normal leading-snug text-[var(--brand-cta)]">
          <span className="font-bold text-[var(--brand-mango)]">
            Visa usually required for a standalone trip
          </span>{" "}
          — 240-hour transit may still apply if you have a confirmed ticket
          onward to a third country. Check ports and route rules in the full
          tool.
        </p>
      ) : null}

      {result.status === "visa-likely" ? (
        <p className="rounded-2xl bg-[color-mix(in_srgb,var(--brand-coral)_10%,white)] px-3 py-2.5 text-sm font-normal leading-snug text-[var(--brand-cta)]">
          <span className="font-bold text-[var(--brand-coral)]">
            Visa likely required
          </span>{" "}
          for typical tourist trips. Use the full checker before you book.
        </p>
      ) : null}

      <Link
        href="/china-visa-checker"
        className="inline-flex text-xs font-bold text-[var(--brand-coral)] underline decoration-[color-mix(in_srgb,var(--brand-coral)_35%,transparent)] underline-offset-2 transition-colors duration-300 hover:text-[var(--brand-coral-hover)]"
      >
        Open full visa checker →
      </Link>
    </div>
  );
}
