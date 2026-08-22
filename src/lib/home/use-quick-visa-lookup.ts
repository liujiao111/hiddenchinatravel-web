"use client";

import { useEffect, useState } from "react";
import type { QuickVisaLookup } from "@/lib/home/quick-visa";

let cachedLookup: QuickVisaLookup | null = null;
let inflight: Promise<QuickVisaLookup> | null = null;

async function loadQuickVisaLookup(): Promise<QuickVisaLookup> {
  if (cachedLookup) return cachedLookup;
  if (!inflight) {
    inflight = fetch("/api/quick-visa-lookup")
      .then((res) => {
        if (!res.ok) throw new Error("quick visa lookup failed");
        return res.json() as Promise<QuickVisaLookup>;
      })
      .then((data) => {
        cachedLookup = data;
        return data;
      })
      .finally(() => {
        inflight = null;
      });
  }
  return inflight;
}

/** Shared client fetch for deferred homepage visa widgets. */
export function useQuickVisaLookup(initial?: QuickVisaLookup) {
  // Never seed from the module cache during render. `next/dynamic` can
  // hydrate this widget after a sibling has already filled `cachedLookup`,
  // which would SSR a loading shell and then client-render the form.
  const [lookup, setLookup] = useState<QuickVisaLookup | null>(
    initial ?? null,
  );

  useEffect(() => {
    if (initial) {
      cachedLookup = initial;
      return;
    }
    let cancelled = false;
    loadQuickVisaLookup()
      .then((data) => {
        if (!cancelled) setLookup(data);
      })
      .catch(() => {
        /* keep null — UI shows loading placeholder */
      });
    return () => {
      cancelled = true;
    };
  }, [initial]);

  return lookup;
}
