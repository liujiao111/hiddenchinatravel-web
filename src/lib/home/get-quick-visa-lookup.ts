import "server-only";

import type { QuickVisaLookup } from "@/lib/home/quick-visa";
import {
  getCountrySelectOptions,
  getTransit240Rule,
  getVisaFreeRule,
} from "@/lib/visa-checker/load-rules";

/** Serialize visa rules for the homepage mini-checker (server only). */
export function getQuickVisaLookup(): QuickVisaLookup {
  const countries = getCountrySelectOptions().map((c) => ({
    value: c.value,
    label: c.label,
    searchText: c.searchText,
  }));
  const visaFreeDays: Record<string, number> = {};
  const transit240: string[] = [];

  for (const c of countries) {
    const free = getVisaFreeRule(c.value);
    if (free) visaFreeDays[c.value] = free.maxStayDays;
    if (getTransit240Rule(c.value)) transit240.push(c.value);
  }

  return { countries, visaFreeDays, transit240 };
}
