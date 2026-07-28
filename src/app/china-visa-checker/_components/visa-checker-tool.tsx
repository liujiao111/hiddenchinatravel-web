"use client";

import { useCallback, useMemo, useState } from "react";
import cn from "classnames";
import { checkVisaEligibility } from "../actions";
import type { VisaEvaluationResult } from "@/lib/visa-checker/evaluate";
import type { SelectOption } from "@/lib/visa-checker/load-rules";
import {
  VisaCheckerForm,
  type VisaFormValues,
} from "./visa-checker-form";
import { VisaResultPanel } from "./visa-result-panel";

function buildDefaultValues(portOptions: SelectOption[]): VisaFormValues {
  const beijingPort =
    portOptions.find((p) =>
      /beijing capital/i.test(p.label + " " + (p.searchText ?? "")),
    ) ??
    portOptions.find((p) => /beijing/i.test(p.label)) ??
    portOptions[0];

  return {
    nationality: "United States",
    purpose: "tourism",
    stayDays: "10",
    transitRoute: "no_transit",
    portId: beijingPort?.value ?? "1",
  };
}

type Props = {
  countryOptions: SelectOption[];
  portOptions: SelectOption[];
};

export function VisaCheckerTool({ countryOptions, portOptions }: Props) {
  const defaults = useMemo(
    () => buildDefaultValues(portOptions),
    [portOptions],
  );
  const [values, setValues] = useState<VisaFormValues>(defaults);
  const [showValidation, setShowValidation] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<VisaEvaluationResult | null>(null);

  const handleChange = useCallback(
    (field: keyof VisaFormValues, value: string) => {
      setValues((prev) => ({ ...prev, [field]: value }));
    },
    [],
  );

  const handleSubmit = useCallback(async () => {
    const isComplete =
      Boolean(values.nationality) &&
      Boolean(values.purpose) &&
      Boolean(values.stayDays) &&
      Boolean(values.transitRoute) &&
      Boolean(values.portId);

    if (!isComplete) {
      setShowValidation(true);
      return;
    }

    setShowValidation(false);
    setIsLoading(true);
    setResult(null);

    try {
      const evaluation = await checkVisaEligibility({
        nationality: values.nationality,
        purpose: values.purpose,
        stayDays: Number(values.stayDays),
        transitRoute: values.transitRoute,
        portId: values.portId,
      });
      setResult(evaluation);
      window.requestAnimationFrame(() => {
        document
          .getElementById("visa-result")
          ?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    } finally {
      setIsLoading(false);
    }
  }, [values]);

  return (
    <section aria-labelledby="checker-heading" className="mb-16 md:mb-20">
      <h2 id="checker-heading" className="sr-only">
        Visa checker tool
      </h2>

      <div className="surface-card bg-[var(--brand-surface)] p-6 shadow-sm sm:p-8 md:p-10">
        <div className="mb-8">
          <h2 className="text-xl font-light tracking-wide text-[var(--brand-ink)] md:text-3xl">
            Your trip details
          </h2>
          <p className="mt-2 max-w-2xl text-base font-light text-[var(--brand-muted)]">
            Complete all fields below to check visa-free, 240-hour transit, or
            visa requirements
          </p>
        </div>
        <VisaCheckerForm
          values={values}
          countryOptions={countryOptions}
          portOptions={portOptions}
          onChange={handleChange}
          onSubmit={handleSubmit}
          isLoading={isLoading}
          showValidation={showValidation}
        />
      </div>

      <div
        className={cn(
          "mt-6 transition-all duration-500 ease-out",
          result
            ? "translate-y-0 opacity-100"
            : "mt-0 h-0 overflow-hidden opacity-0",
        )}
      >
        {result ? <VisaResultPanel result={result} /> : null}
      </div>

      {!result && !isLoading ? (
        <p className="mt-6 text-center text-sm font-light text-[var(--brand-muted)]">
          Your eligibility result will appear here after you submit
        </p>
      ) : null}
    </section>
  );
}
