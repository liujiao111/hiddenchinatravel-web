/** Client-safe quick visa types + evaluation (no fs / CSV). */

export type QuickVisaCountryOption = {
  value: string;
  label: string;
  searchText?: string;
};

export type QuickVisaLookup = {
  countries: QuickVisaCountryOption[];
  /** Canonical country name → visa-free max stay days */
  visaFreeDays: Record<string, number>;
  /** Canonical country names on 240h transit list */
  transit240: string[];
};

export type QuickVisaResult =
  | { status: "idle" }
  | {
      status: "visa-free";
      country: string;
      maxStayDays: number;
      alsoTransit240: boolean;
    }
  | {
      status: "transit-only";
      country: string;
    }
  | {
      status: "visa-likely";
      country: string;
    };

export function evaluateQuickVisa(
  country: string,
  lookup: Pick<QuickVisaLookup, "visaFreeDays" | "transit240">,
): QuickVisaResult {
  if (!country) return { status: "idle" };
  const days = lookup.visaFreeDays[country];
  const alsoTransit240 = lookup.transit240.includes(country);
  if (typeof days === "number") {
    return {
      status: "visa-free",
      country,
      maxStayDays: days,
      alsoTransit240,
    };
  }
  if (alsoTransit240) {
    return { status: "transit-only", country };
  }
  return { status: "visa-likely", country };
}
