"use client";

import {
  purposeOptions,
  stayOptions,
  transitOptions,
} from "@/lib/visa-checker/form-options";
import type { SelectOption } from "@/lib/visa-checker/load-rules";
import { FancySelect } from "./fancy-select";
import cn from "classnames";

export type VisaFormValues = {
  nationality: string;
  purpose: string;
  stayDays: string;
  transitRoute: string;
  portId: string;
};

type Props = {
  values: VisaFormValues;
  countryOptions: SelectOption[];
  portOptions: SelectOption[];
  onChange: (field: keyof VisaFormValues, value: string) => void;
  onSubmit: () => void;
  isLoading: boolean;
  showValidation: boolean;
};

export function VisaCheckerForm({
  values,
  countryOptions,
  portOptions,
  onChange,
  onSubmit,
  isLoading,
  showValidation,
}: Props) {
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    onSubmit();
  }

  return (
    <form onSubmit={handleSubmit} aria-label="Visa eligibility checker">
      <div className="grid grid-cols-1 gap-x-8 gap-y-7 md:grid-cols-2">
        <div className="md:col-span-2">
          <FancySelect
            label="Passport nationality"
            helper="Country that issued your passport"
            placeholder="Search or select a country"
            value={values.nationality}
            options={countryOptions}
            searchable
            onChange={(v) => onChange("nationality", v)}
            error={showValidation && !values.nationality}
            errorMessage="Please select your passport nationality"
          />
        </div>

        <FancySelect
          label="Purpose of visit"
          helper="Main reason for entering China"
          placeholder="Select purpose"
          value={values.purpose}
          options={purposeOptions}
          onChange={(v) => onChange("purpose", v)}
          error={showValidation && !values.purpose}
          errorMessage="Please select a purpose"
        />

        <FancySelect
          label="Planned length of stay"
          helper="How long you expect to remain in China"
          placeholder="Select stay length"
          value={values.stayDays}
          options={stayOptions}
          onChange={(v) => onChange("stayDays", v)}
          error={showValidation && !values.stayDays}
          errorMessage="Please select your stay length"
        />

        <FancySelect
          label="Transit route"
          helper="Needed to assess 240-hour transit eligibility"
          placeholder="Select transit situation"
          value={values.transitRoute}
          options={transitOptions}
          onChange={(v) => onChange("transitRoute", v)}
          error={showValidation && !values.transitRoute}
          errorMessage="Please select a transit route"
        />

        <FancySelect
          label="Entry city / region"
          helper="Airport, seaport, or land port where you first enter"
          placeholder="Search or select a port"
          value={values.portId}
          options={portOptions}
          searchable
          onChange={(v) => onChange("portId", v)}
          error={showValidation && !values.portId}
          errorMessage="Please select a port of entry"
        />
      </div>

      <div className="mt-10 border-t border-[color-mix(in_srgb,var(--brand-cream-border)_40%,transparent)] pt-8">
        <div className="flex flex-col items-stretch gap-3">
          <button
            type="submit"
            disabled={isLoading}
            className={cn(
              "btn-brand w-full px-8 py-4 text-base md:py-5 md:text-lg",
              "focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-ring)] focus-visible:ring-offset-2",
              isLoading &&
                "!cursor-wait !border-[var(--brand-cream-border)] !bg-[var(--brand-soft)] !text-[var(--brand-muted)]",
            )}
          >
            {isLoading ? (
              <span className="inline-flex items-center justify-center gap-3">
                <span className="h-5 w-5 animate-spin rounded-2xl border-2 border-current border-t-transparent" />
                Checking eligibility…
              </span>
            ) : (
              <span className="inline-flex items-center justify-center gap-2">
                Show My Visa Result
                <span aria-hidden className="text-lg leading-none">
                  ↓
                </span>
              </span>
            )}
          </button>
          <p className="text-center text-sm font-normal text-[var(--brand-muted)]">
            No personal data is stored. Result appears below.
          </p>
        </div>
      </div>
    </form>
  );
}
