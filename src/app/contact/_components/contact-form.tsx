"use client";

import { useActionState, useState } from "react";
import {
  submitContactForm,
  type ContactFormState,
} from "@/app/contact/actions";
import { FancySelect } from "@/app/china-visa-checker/_components/fancy-select";
import { ContinueOnWhatsApp } from "@/app/_components/forms/continue-on-whatsapp";
import { WhatsAppOptInFields } from "@/app/_components/forms/whatsapp-opt-in-fields";
import Link from "next/link";

const initialState: ContactFormState = { ok: false, message: "" };

const fieldClass =
  "min-h-11 w-full rounded-full border-2 border-[#00897b]/20 bg-white px-4 py-3 text-sm font-normal tracking-wide text-[var(--brand-cta)] placeholder:text-[var(--brand-ink-muted)] transition-all duration-300 focus:border-[var(--brand-cta)] focus:outline-none focus:shadow-[0_0_0_3px_rgba(0,137,123,0.15)]";

const textareaClass =
  "min-h-[140px] w-full resize-y rounded-2xl border-2 border-[#00897b]/20 bg-white px-4 py-3 text-sm font-normal leading-relaxed tracking-wide text-[var(--brand-cta)] placeholder:text-[color-mix(in_srgb,var(--brand-ink-muted)_75%,transparent)] transition-all duration-300 focus:border-[var(--brand-cta)] focus:outline-none focus:shadow-[0_0_0_3px_rgba(0,137,123,0.15)]";

const labelClass =
  "mb-2 block text-sm font-bold tracking-tight text-[var(--brand-cta)]";

/** Aligned with live /services offerings */
const SERVICE_TYPE_OPTIONS = [
  { value: "custom-plan", label: "Custom itinerary planning" },
  { value: "itinerary-review", label: "Existing itinerary review" },
  { value: "on-trip-help", label: "On-trip quick help" },
  { value: "booking-help", label: "Booking assistance" },
  { value: "partnership", label: "Partnership / media" },
  { value: "general", label: "General question / feedback" },
] as const;

function initialServiceType(raw?: string): string {
  if (!raw) return "";
  return SERVICE_TYPE_OPTIONS.some((option) => option.value === raw)
    ? raw
    : "";
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
  const [serviceType, setServiceType] = useState(() =>
    initialServiceType(defaultServiceType),
  );

  if (state.ok) {
    return (
      <div className="space-y-4" role="status" aria-live="polite">
        <p className="text-sm font-normal tracking-wide text-[var(--brand-olive)]">
          {state.message}
        </p>
        <ContinueOnWhatsApp
          name={state.name}
          context="I'd like to continue about my contact message."
        />
        <p className="text-xs font-normal text-[var(--brand-ink-muted)]">
          Prefer email? We’ll still reply to the address you left — usually
          within 30 minutes during business hours (Mon–Fri 9AM–9PM, China
          time).
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-5" noValidate>
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

      <div data-slot="service-type">
        <input type="hidden" name="serviceType" value={serviceType} />
        <FancySelect
          id="serviceType"
          label="What is this about?"
          value={serviceType}
          options={[...SERVICE_TYPE_OPTIONS]}
          placeholder="Select a topic…"
          onChange={setServiceType}
        />
        <p className="mt-2 text-xs font-normal leading-relaxed text-[var(--brand-ink-muted)]">
          For a full custom trip request, the{" "}
          <Link
            href="/china-itinerary-planner#plan-trip"
            className="font-bold text-[var(--brand-coral)] underline decoration-[color-mix(in_srgb,var(--brand-coral)_35%,transparent)] underline-offset-2"
          >
            itinerary planner
          </Link>{" "}
          is usually faster. See{" "}
          <Link
            href="/services"
            className="font-bold text-[var(--brand-coral)] underline decoration-[color-mix(in_srgb,var(--brand-coral)_35%,transparent)] underline-offset-2"
          >
            services &amp; pricing
          </Link>{" "}
          for fees.
        </p>
      </div>

      <div>
        <label htmlFor="subject" className={labelClass}>
          Subject
          <span className="font-normal text-[var(--brand-ink-muted)]">
            {" "}
            (optional)
          </span>
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          maxLength={200}
          className={fieldClass}
          placeholder="Short summary"
        />
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          maxLength={5000}
          className={textareaClass}
          placeholder="Dates, cities, and what you need help with…"
        />
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
        {pending ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
