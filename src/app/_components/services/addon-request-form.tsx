"use client";

import {
  submitAddonServiceRequest,
  type AddonRequestState,
} from "@/app/services/actions";
import cn from "classnames";
import { useActionState } from "react";

const initialState: AddonRequestState = { ok: false, message: "" };

const fieldClass =
  "min-h-11 w-full rounded-full border-2 border-[#00897b]/20 bg-white px-4 py-3 text-sm font-normal tracking-wide text-[var(--brand-cta)] placeholder:text-[var(--brand-ink-muted)] transition-all duration-300 focus:border-[var(--brand-cta)] focus:outline-none focus:shadow-[0_0_0_3px_rgba(0,137,123,0.15)]";

const labelClass =
  "mb-2 block text-sm font-bold tracking-tight text-[var(--brand-cta)]";

type Props = {
  id: string;
  serviceId: string;
  title: string;
  intro: string;
};

/** Two-field request form: need + contact. */
export function AddonRequestForm({ id, serviceId, title, intro }: Props) {
  const [state, formAction, pending] = useActionState(
    submitAddonServiceRequest,
    initialState,
  );

  if (state.ok) {
    return (
      <div
        id={id}
        className="scroll-mt-28 rounded-2xl border border-[color-mix(in_srgb,var(--brand-olive)_35%,transparent)] bg-white p-5 md:p-6"
        role="status"
      >
        <p className="text-sm font-bold text-[var(--brand-olive)]">{state.message}</p>
      </div>
    );
  }

  return (
    <div
      id={id}
      className="scroll-mt-28 rounded-2xl border border-[color-mix(in_srgb,var(--brand-cta)_15%,transparent)] bg-white p-5 shadow-[0_4px_20px_rgba(0,137,123,0.08)] md:p-6"
    >
      <h3 className="mb-1 text-lg font-bold tracking-tight text-[var(--brand-cta)]">
        {title}
      </h3>
      <p className="mb-5 text-sm font-normal text-[var(--brand-ink-muted)]">
        {intro}
      </p>
      <form action={formAction} className="space-y-4" noValidate>
        <div className="hidden" aria-hidden="true">
          <label htmlFor={`${id}-company`}>Company</label>
          <input
            id={`${id}-company`}
            name="company"
            type="text"
            tabIndex={-1}
            autoComplete="off"
          />
        </div>
        <input type="hidden" name="service" value={serviceId} />

        <div>
          <label htmlFor={`${id}-need`} className={labelClass}>
            What do you need?
          </label>
          <textarea
            id={`${id}-need`}
            name="need"
            required
            rows={4}
            maxLength={5000}
            placeholder="Share your itinerary link, dates, or booking details…"
            className="min-h-[7rem] w-full rounded-2xl border-2 border-[#00897b]/20 bg-white px-4 py-3 text-sm font-normal tracking-wide text-[var(--brand-cta)] placeholder:text-[var(--brand-ink-muted)] transition-all duration-300 focus:border-[var(--brand-cta)] focus:outline-none focus:shadow-[0_0_0_3px_rgba(0,137,123,0.15)]"
          />
        </div>

        <div>
          <label htmlFor={`${id}-contact`} className={labelClass}>
            Email or WhatsApp
          </label>
          <input
            id={`${id}-contact`}
            name="contact"
            type="text"
            required
            maxLength={200}
            autoComplete="email"
            placeholder="you@example.com or +86…"
            className={fieldClass}
          />
        </div>

        {state.message && !state.ok ? (
          <p className="text-sm text-[var(--brand-coral)]" role="alert">
            {state.message}
          </p>
        ) : null}

        <button
          type="submit"
          disabled={pending}
          className={cn(
            "btn-brand min-h-11 w-full px-6 py-3 text-sm sm:w-auto",
            pending &&
              "!cursor-wait !border-[var(--brand-cream-border)] !bg-[var(--brand-soft)] !text-[var(--brand-muted)]",
          )}
        >
          {pending ? "Sending…" : "Send request"}
        </button>
      </form>
    </div>
  );
}
