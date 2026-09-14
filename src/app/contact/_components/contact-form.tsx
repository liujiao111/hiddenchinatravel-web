"use client";

import { useActionState } from "react";
import {
  submitContactForm,
  type ContactFormState,
} from "@/app/contact/actions";
import { ContinueOnWhatsApp } from "@/app/_components/forms/continue-on-whatsapp";
import { WHATSAPP_OPT_IN_LABEL } from "@/lib/forms/whatsapp-field";

const initialState: ContactFormState = { ok: false, message: "" };

const fieldClass =
  "min-h-11 w-full rounded-full border-2 border-[var(--brand-cta)]/20 bg-white px-4 py-3 text-sm font-normal tracking-wide text-[var(--brand-ink)] placeholder:text-[var(--brand-ink-muted)] transition-all duration-300 focus:border-[var(--brand-cta)] focus:outline-none focus:shadow-[0_0_0_3px_rgba(196,92,62,0.15)]";

const textareaClass =
  "min-h-[190px] w-full resize-y rounded-2xl border-2 border-[var(--brand-cta)]/20 bg-white px-4 py-3 text-sm font-normal leading-relaxed tracking-wide text-[var(--brand-ink)] placeholder:text-[color-mix(in_srgb,var(--brand-ink-muted)_75%,transparent)] transition-all duration-300 focus:border-[var(--brand-cta)] focus:outline-none focus:shadow-[0_0_0_3px_rgba(196,92,62,0.15)]";

const labelClass =
  "mb-2 block text-sm font-bold tracking-tight text-[var(--brand-ink)]";

const ALLOWED_SERVICE_TYPES = new Set([
  "yunnan-journey",
  "custom-yunnan-journey",
  "travel-question",
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
        <label htmlFor="name" className={labelClass}>Name</label>
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
        <label htmlFor="email" className={labelClass}>Email</label>
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

      <div className="space-y-3">
        <div>
          <label htmlFor="contact-whatsapp" className={labelClass}>
            WhatsApp <span className="font-normal text-[var(--brand-ink-muted)]">(recommended)</span>
          </label>
          <input
            id="contact-whatsapp"
            name="whatsapp"
            type="tel"
            maxLength={40}
            autoComplete="tel"
            inputMode="tel"
            className={fieldClass}
            placeholder="+44 7700 900123"
          />
          <p className="mt-2 text-xs leading-5 text-[var(--brand-ink-muted)]">
            Include your country code. WhatsApp is often the easiest way to discuss trip details and quick follow-up questions.
          </p>
        </div>
        <label
          htmlFor="contact-whatsapp-opt-in"
          className="flex cursor-pointer items-start gap-3 rounded-2xl border border-[var(--brand-cta)]/15 bg-[var(--brand-soft)] px-4 py-3 text-sm font-normal leading-relaxed text-[var(--brand-ink)]"
        >
          <input
            id="contact-whatsapp-opt-in"
            name="whatsappOptIn"
            type="checkbox"
            value="on"
            className="mt-1 h-4 w-4 shrink-0 rounded border-[var(--brand-cta)]/40 accent-[var(--brand-cta)]"
          />
          <span>{WHATSAPP_OPT_IN_LABEL}</span>
        </label>
      </div>

      <div>
        <label htmlFor="travelTiming" className={labelClass}>
          When are you planning to travel?
        </label>
        <select id="travelTiming" name="travelTiming" className={fieldClass} defaultValue="">
          <option value="" disabled>Select an option</option>
          <option value="Within 1 month">Within 1 month</option>
          <option value="1-3 months">1-3 months</option>
          <option value="3-6 months">3-6 months</option>
          <option value="More than 6 months">More than 6 months</option>
          <option value="Not sure yet">Not sure yet</option>
        </select>
      </div>

      <div>
        <label htmlFor="travelParty" className={labelClass}>
          Who are you traveling with?
        </label>
        <select id="travelParty" name="travelParty" className={fieldClass} defaultValue="">
          <option value="" disabled>Select an option</option>
          <option value="Solo">Solo</option>
          <option value="Couple">Couple</option>
          <option value="Family">Family</option>
          <option value="Friends">Friends</option>
          <option value="Small group">Small group</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>Tell us about your trip</label>
        <textarea
          id="message"
          name="message"
          required
          rows={8}
          maxLength={5000}
          className={textareaClass}
          placeholder={"Where would you like to go?\n\nHow many days are you considering?\n\nWhat type of experience are you looking for?\n\nAny questions you'd like us to help with?"}
        />
        <p className="mt-2 text-xs leading-5 text-[var(--brand-ink-muted)]">
          A rough idea is enough. You don&apos;t need to have everything figured out.
        </p>
      </div>

      {state.message ? (
        <p role="status" className="text-sm font-normal tracking-wide text-[var(--brand-coral)]">
          {state.message}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={pending}
        className="btn-brand min-h-11 px-8 py-3.5 text-sm disabled:cursor-not-allowed disabled:opacity-60"
      >
        {pending ? "Sending…" : "Send an Inquiry"}
      </button>

      <p className="text-xs leading-5 text-[var(--brand-ink-muted)]">
        No obligation. No pressure. We&apos;ll start with your questions and help you decide what makes sense for your trip.
      </p>
    </form>
  );
}
