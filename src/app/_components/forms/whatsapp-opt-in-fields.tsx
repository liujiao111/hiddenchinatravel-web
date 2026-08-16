"use client";

import { WHATSAPP_OPT_IN_LABEL } from "@/lib/forms/whatsapp-field";
import type { ChangeEvent } from "react";

const fieldClass =
  "min-h-11 w-full rounded-full border-2 border-[#00897b]/20 bg-white px-4 py-3 text-sm font-normal tracking-wide text-[var(--brand-cta)] placeholder:text-[var(--brand-ink-muted)] transition-all duration-300 focus:border-[var(--brand-cta)] focus:outline-none focus:shadow-[0_0_0_3px_rgba(0,137,123,0.15)]";

const labelClass =
  "mb-2 block text-sm font-bold tracking-tight text-[var(--brand-cta)]";

type Props = {
  idPrefix: string;
  /** Controlled mode (planner). Omit for uncontrolled (contact / services). */
  value?: string;
  optIn?: boolean;
  onChange?: (whatsapp: string) => void;
  onOptInChange?: (optIn: boolean) => void;
};

/** Optional WhatsApp number + explicit opt-in (required only when number is filled). */
export function WhatsAppOptInFields({
  idPrefix,
  value,
  optIn,
  onChange,
  onOptInChange,
}: Props) {
  const controlled = onChange != null;
  const numberId = `${idPrefix}-whatsapp`;
  const optInId = `${idPrefix}-whatsapp-opt-in`;

  return (
    <div className="space-y-3">
      <div>
        <label htmlFor={numberId} className={labelClass}>
          WhatsApp{" "}
          <span className="font-normal text-[var(--brand-ink-muted)]">
            (optional)
          </span>
        </label>
        <input
          id={numberId}
          name="whatsapp"
          type="tel"
          maxLength={40}
          autoComplete="tel"
          inputMode="tel"
          className={fieldClass}
          placeholder="+44 7700 900123"
          {...(controlled
            ? {
                value: value ?? "",
                onChange: (e: ChangeEvent<HTMLInputElement>) =>
                  onChange(e.target.value),
              }
            : {})}
        />
        <p className="mt-2 text-xs font-normal leading-relaxed text-[var(--brand-ink-muted)]">
          Include country code. Faster than email for quotes and trip tweaks —
          email still required for receipts.
        </p>
      </div>

      <label
        htmlFor={optInId}
        className="flex cursor-pointer items-start gap-3 rounded-2xl border border-[#00897b]/15 bg-[var(--brand-soft)] px-4 py-3 text-sm font-normal leading-relaxed text-[var(--brand-cta)]"
      >
        <input
          id={optInId}
          name="whatsappOptIn"
          type="checkbox"
          value="on"
          className="mt-1 h-4 w-4 shrink-0 rounded border-[#00897b]/40 text-[var(--brand-cta)] accent-[var(--brand-cta)]"
          {...(controlled
            ? {
                checked: Boolean(optIn),
                onChange: (e: ChangeEvent<HTMLInputElement>) =>
                  onOptInChange?.(e.target.checked),
              }
            : {})}
        />
        <span>{WHATSAPP_OPT_IN_LABEL}</span>
      </label>
    </div>
  );
}
