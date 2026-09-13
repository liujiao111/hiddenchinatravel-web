"use client";

import { useActionState } from "react";
import {
  submitContactForm,
  type ContactFormState,
} from "@/app/contact/actions";
import { ContinueOnWhatsApp } from "@/app/_components/forms/continue-on-whatsapp";
import { WhatsAppOptInFields } from "@/app/_components/forms/whatsapp-opt-in-fields";

const initialState: ContactFormState = { ok: false, message: "" };

const fieldClass =
  "min-h-11 w-full rounded-full border-2 border-[var(--brand-cta)]/20 bg-white px-4 py-3 text-sm font-normal tracking-wide text-[var(--brand-ink)] placeholder:text-[var(--brand-ink-muted)] transition-all duration-300 focus:border-[var(--brand-cta)] focus:outline-none focus:shadow-[0_0_0_3px_rgba(196,92,62,0.15)]";

const textareaClass =
  "min-h-[160px] w-full resize-y rounded-2xl border-2 border-[var(--brand-cta)]/20 bg-white px-4 py-3 text-sm font-normal leading-relaxed tracking-wide text-[var(--brand-ink)] placeholder:text-[color-mix(in_srgb,var(--brand-ink-muted)_75%,transparent)] transition-all duration-300 focus:border-[var(--brand-cta)] focus:outline-none focus:shadow-[0_0_0_3px_rgba(196,92,62,0.15)]";

const labelClass =
  "mb-2 block text-sm font-bold tracking-tight text-[var(--brand-ink)]";

const ALLOWED_SERVICE_TYPES = new Set([
  "free-yunnan-route-check",
  "custom-plan",
  "itinerary-review",
  "on-trip-help",
  "booking-help",
  "partnership",
  "general",
]);

function normalizedServiceType(raw?: string): string {
  return raw && ALLOWED_SERVICE_TYPES.has(raw) ? raw : "general";
}

export function ContactForm({
  defaultServiceType,
}: {
  defaultServiceType?: string;
}) {
  const [state, formAction, pending] = useActionState(
    submitContactForm,
    initialState,
  );

  if (state.ok) {
    return (
      <div className="space-y-5" role="status" aria-live="polite">
        <p className="text-base font-bold leading-7 text-[var(--brand-ink)]">
          {state.message}
        </p>
        <p className="text-sm leading-6 text-[var(--brand-ink-muted)]">
          Joy Liu personally reviews every inquiry. If WhatsApp is easier, you
          can continue the conversation there too.
        </p>
        <ContinueOnWhatsApp
          name={state.name}
          context="I'd like to continue talking about my Yunnan trip."
        />
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-5" noValidate>
      <input
        type="hidden"
        name="serviceType"
        value={normalizedServiceType(defaultServiceType)}
      />

      <div className="hidden" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input
          id="company"
          name="company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div>
        <label htmlFor="name" className={labelClass}>
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          maxLength={120}
          autoComplete="name"
          className={fieldClass}
          placeholder="Your name"
        />
      </div>

      <div>
        <label htmlFor="email" className={labelClass}>
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          maxLength={200}
          autoComplete="email"
          className={fieldClass}
          placeholder="you@example.com"
        />
      </div>

      <WhatsAppOptInFields idPrefix="contact" />

      <div>
        <label htmlFor="travelTiming" className={labelClass}>
          When are you planning to travel?
        </label>
        <input
          id="travelTiming"
          name="travelTiming"
          type="text"
          maxLength={120}
          className={fieldClass}
          placeholder="e.g. April 2027, or still deciding"
        />
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          Tell us about your trip
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={7}
          maxLength={5000}
          className={textareaClass}
          placeholder="Where would you like to go? How many days do you have? What kind of pace or experiences are you looking for?"
        />
        <p className="mt-2 text-xs leading-5 text-[var(--brand-ink-muted)]">
          A rough idea is enough. You don&apos;t need to have everything figured out.
        </p>
      </div>

      {state.message ? (
        <p
          role="status"
          className="text-sm font-normal tracking-wide text-[var(--brand-coral)]"
        >
          {state.message}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={pending}
        className="btn-brand min-h-11 px-8 py-3.5 text-sm disabled:cursor-not-allowed disabled:opacity-60"
      >
        {pending ? "Sending…" : "Start the Conversation"}
      </button>

      <p className="text-xs leading-5 text-[var(--brand-ink-muted)]">
        No obligation. No pressure. We&apos;ll simply start with your questions and
        see whether we&apos;re a good fit.
      </p>
    </form>
  );
}
