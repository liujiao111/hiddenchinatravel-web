"use client";

import { useActionState } from "react";
import {
  submitContactForm,
  type ContactFormState,
} from "@/app/contact/actions";
import Link from "next/link";

const initialState: ContactFormState = { ok: false, message: "" };

const fieldClass =
  "min-h-11 w-full rounded-full border-2 border-[#00897b]/20 bg-white px-4 py-3 text-sm font-normal tracking-wide text-[var(--brand-cta)] placeholder:text-[var(--brand-ink-muted)] transition-all duration-300 focus:border-[var(--brand-cta)] focus:outline-none focus:shadow-[0_0_0_3px_rgba(0,137,123,0.15)]";

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

export function ContactForm() {
  const [state, formAction, pending] = useActionState(
    submitContactForm,
    initialState,
  );

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

      <div data-slot="service-type">
        <label htmlFor="serviceType" className={labelClass}>
          What is this about?
        </label>
        <select
          id="serviceType"
          name="serviceType"
          required
          defaultValue=""
          className={`${fieldClass} appearance-none bg-[url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 fill=%22none%22 viewBox=%220 0 20 20%22%3E%3Cpath stroke=%22%2300897b%22 stroke-linecap=%22round%22 stroke-linejoin=%22round%22 stroke-width=%221.5%22 d=%22m6 8 4 4 4-4%22/%3E%3C/svg%3E')] bg-[length:1.25rem] bg-[right_0.75rem_center] bg-no-repeat pr-10`}
        >
          <option value="" disabled>
            Select a topic…
          </option>
          {SERVICE_TYPE_OPTIONS.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
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
          className={`${fieldClass} min-h-[140px] resize-y rounded-2xl`}
          placeholder="Dates, cities, what you need help with, or your feedback…"
        />
      </div>

      {state.message ? (
        <p
          role="status"
          className={`text-sm font-normal tracking-wide ${
            state.ok
              ? "text-[var(--brand-olive)]"
              : "text-[var(--brand-coral)]"
          }`}
        >
          {state.message}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={pending || state.ok}
        className="btn-brand min-h-11 px-8 py-3.5 text-sm disabled:cursor-not-allowed disabled:opacity-60"
      >
        {pending ? "Sending…" : state.ok ? "Sent" : "Send message"}
      </button>
    </form>
  );
}
