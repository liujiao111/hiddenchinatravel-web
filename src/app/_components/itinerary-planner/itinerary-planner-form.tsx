"use client";

import { FancySelect } from "@/app/china-visa-checker/_components/fancy-select";
import {
  submitItineraryPlan,
  type PlannerFormState,
} from "@/app/china-itinerary-planner/actions";
import { ContinueOnWhatsApp } from "@/app/_components/forms/continue-on-whatsapp";
import { WhatsAppOptInFields } from "@/app/_components/forms/whatsapp-opt-in-fields";
import { ChipSelect } from "@/app/_components/itinerary-planner/chip-select";
import { StyleIcon } from "@/app/_components/itinerary-planner/planner-icons";
import {
  plannerBudgets,
  plannerCtaCopy,
  plannerDayBounds,
  plannerDestinations,
  plannerSectionCopy,
  plannerStepMeta,
  plannerStyles,
  plannerSuccessCopy,
  plannerTravelerBounds,
} from "@/lib/itinerary-planner/content";
import {
  defaultPlannerFormValues,
  type PlannerFormSource,
  type PlannerFormValues,
} from "@/lib/itinerary-planner/types";
import {
  evaluateQuickVisa,
  type QuickVisaLookup,
} from "@/lib/home/quick-visa";
import cn from "classnames";
import { useActionState, useEffect, useMemo, useRef, useState } from "react";

const initialState: PlannerFormState = { ok: false, message: "" };

const fieldClass =
  "min-h-11 w-full rounded-full border-2 border-[var(--brand-cta)]/20 bg-white px-4 py-3 text-sm font-normal tracking-wide text-[var(--brand-ink)] placeholder:text-[var(--brand-ink-muted)] transition-all duration-300 focus:border-[var(--brand-cta)] focus:outline-none focus:shadow-[0_0_0_3px_rgba(196,92,62,0.15)]";

const labelClass =
  "mb-2 block text-sm font-bold tracking-tight text-[var(--brand-ink)]";

type Props = {
  visaLookup: QuickVisaLookup;
  source?: PlannerFormSource;
  initialDestinations?: string[];
};

export function ItineraryPlannerForm({
  visaLookup,
  source = "planner",
  initialDestinations = [],
}: Props) {
  const [step, setStep] = useState(0);
  const [showErrors, setShowErrors] = useState(false);
  const [values, setValues] = useState<PlannerFormValues>(() => ({
    ...defaultPlannerFormValues(),
    destinations: initialDestinations,
  }));
  const [state, formAction, pending] = useActionState(
    submitItineraryPlan,
    initialState,
  );
  const rootRef = useRef<HTMLDivElement>(null);
  const stylesRef = useRef<HTMLFieldSetElement>(null);

  const visaHint = useMemo(
    () => evaluateQuickVisa(values.nationality, visaLookup),
    [values.nationality, visaLookup],
  );

  useEffect(() => {
    if (!state.ok) return;
    rootRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  }, [state.ok]);

  useEffect(() => {
    if (!state.message || state.ok) return;
    rootRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [state.message, state.ok]);

  function patch(partial: Partial<PlannerFormValues>) {
    setValues((prev) => ({ ...prev, ...partial }));
  }

  function step1Valid() {
    return (
      values.destinations.length > 0 &&
      values.days >= plannerDayBounds.min &&
      values.days <= plannerDayBounds.max
    );
  }

  function step2Valid() {
    return (
      values.travelers >= plannerTravelerBounds.min &&
      values.travelers <= plannerTravelerBounds.max &&
      values.styles.length > 0
    );
  }

  function goNext() {
    if (step === 0 && !step1Valid()) {
      setShowErrors(true);
      return;
    }
    if (step === 1 && !step2Valid()) {
      setShowErrors(true);
      if (values.styles.length === 0) {
        stylesRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }
      return;
    }
    setShowErrors(false);
    setStep((s) => Math.min(s + 1, 2));
  }

  function goBack() {
    setShowErrors(false);
    setStep((s) => Math.max(s - 1, 0));
  }

  if (state.ok) {
    return (
      <div
        ref={rootRef}
        className="scroll-mt-28 rounded-2xl border-2 border-[var(--brand-cta)]/25 bg-white p-6 text-center shadow-[0_4px_20px_rgba(80,40,24,0.1)] md:p-8"
        role="status"
        aria-live="polite"
      >
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand-mango)]">
          Request received
        </p>
        <h3 className="mb-2 text-xl font-bold tracking-tight text-[var(--brand-ink)]">
          {plannerSuccessCopy.title}
        </h3>
        <p className="text-sm font-normal leading-relaxed text-[var(--brand-ink-muted)] md:text-base">
          {plannerSuccessCopy.body}
        </p>
        <p className="mt-4 text-sm font-normal text-[var(--brand-cta)]">
          {plannerSuccessCopy.whatsappHint}
        </p>
        <ContinueOnWhatsApp
          name={state.name}
          context="I'd like to continue about my China itinerary request."
        />
      </div>
    );
  }

  const progressPct = ((step + 1) / plannerStepMeta.length) * 100;

  return (
    <div
      ref={rootRef}
      className="scroll-mt-28 rounded-2xl border-2 border-[var(--brand-cta)]/15 bg-white p-5 shadow-[0_4px_20px_rgba(80,40,24,0.1)] md:p-8"
    >
      <div className="mb-6">
        <div className="mb-3 flex items-center justify-between gap-3">
          <p className="text-sm font-bold tracking-tight text-[var(--brand-ink)]">
            {plannerStepMeta[step]?.label}
          </p>
          <p className="text-xs font-bold tabular-nums text-[var(--brand-ink-muted)]">
            {step + 1} / {plannerStepMeta.length}
          </p>
        </div>
        <div
          className="h-1.5 overflow-hidden rounded-full bg-[var(--brand-cta)]/12"
          role="progressbar"
          aria-valuemin={1}
          aria-valuemax={plannerStepMeta.length}
          aria-valuenow={step + 1}
          aria-label={`Step ${step + 1} of ${plannerStepMeta.length}`}
        >
          <div
            className="h-full rounded-full bg-[var(--brand-cta)] transition-all duration-500"
            style={{ width: `${progressPct}%` }}
          />
        </div>
        <ol className="mt-3 flex justify-between gap-2">
          {plannerStepMeta.map((meta, index) => {
            const active = index === step;
            const done = index < step;
            return (
              <li
                key={meta.id}
                className={cn(
                  "min-w-0 flex-1 text-center text-[11px] font-bold tracking-tight sm:text-xs",
                  active && "text-[var(--brand-cta)]",
                  done && "text-[var(--brand-olive)]",
                  !active && !done && "text-[var(--brand-ink-muted)]",
                )}
              >
                <span className="line-clamp-1">{meta.label}</span>
              </li>
            );
          })}
        </ol>
        <p className="mt-4 rounded-2xl bg-[var(--brand-soft)] px-3 py-2.5 text-xs font-normal leading-relaxed text-[var(--brand-cta)] sm:text-sm">
          {plannerSectionCopy.pricingHint}
        </p>
      </div>

      {state.message && !state.ok ? (
        <p
          className="mb-5 rounded-2xl border border-[color-mix(in_srgb,var(--brand-coral)_35%,transparent)] bg-[color-mix(in_srgb,var(--brand-coral)_10%,white)] px-4 py-3 text-sm font-normal text-[var(--brand-coral)]"
          role="alert"
        >
          {state.message}
        </p>
      ) : null}

      {step === 0 ? (
        <div className="space-y-6">
          <ChipSelect
            legend="Where do you want to go?"
            legendHint="Select all that apply"
            options={plannerDestinations.map((d) => ({
              id: d.id,
              label: d.label,
            }))}
            values={values.destinations}
            onChange={(destinations) => patch({ destinations })}
            error={
              showErrors && values.destinations.length === 0
                ? "Pick at least one destination."
                : undefined
            }
          />

          <div>
            <label htmlFor="planner-days" className={labelClass}>
              Trip length:{" "}
              <span className="text-[var(--brand-coral)]">{values.days} days</span>
            </label>
            <input
              id="planner-days"
              type="range"
              min={plannerDayBounds.min}
              max={plannerDayBounds.max}
              value={values.days}
              onChange={(e) => patch({ days: Number(e.target.value) })}
              className="mt-1 h-2 w-full cursor-pointer appearance-none rounded-full bg-[var(--brand-cta)]/15 accent-[var(--brand-cta)]"
            />
            <div className="mt-2 flex justify-between text-xs font-normal text-[var(--brand-ink-muted)]">
              <span>{plannerDayBounds.min} days</span>
              <span>{plannerDayBounds.max} days</span>
            </div>
          </div>
        </div>
      ) : null}

      {step === 1 ? (
        <div className="space-y-6">
          <div>
            <label htmlFor="planner-travelers" className={labelClass}>
              Travelers
            </label>
            <div className="flex items-center gap-3">
              <button
                type="button"
                aria-label="Fewer travelers"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border-2 border-[var(--brand-cta)]/25 text-lg font-bold text-[var(--brand-cta)] transition-colors duration-300 hover:bg-[var(--brand-cta)]/8"
                onClick={() =>
                  patch({
                    travelers: Math.max(
                      plannerTravelerBounds.min,
                      values.travelers - 1,
                    ),
                  })
                }
              >
                −
              </button>
              <input
                id="planner-travelers"
                type="number"
                min={plannerTravelerBounds.min}
                max={plannerTravelerBounds.max}
                value={values.travelers}
                onChange={(e) => {
                  const n = Number(e.target.value);
                  if (!Number.isFinite(n)) return;
                  patch({
                    travelers: Math.min(
                      plannerTravelerBounds.max,
                      Math.max(plannerTravelerBounds.min, n),
                    ),
                  });
                }}
                className={cn(fieldClass, "max-w-[6rem] text-center")}
              />
              <button
                type="button"
                aria-label="More travelers"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border-2 border-[var(--brand-cta)]/25 text-lg font-bold text-[var(--brand-cta)] transition-colors duration-300 hover:bg-[var(--brand-cta)]/8"
                onClick={() =>
                  patch({
                    travelers: Math.min(
                      plannerTravelerBounds.max,
                      values.travelers + 1,
                    ),
                  })
                }
              >
                +
              </button>
            </div>
          </div>

          <ChipSelect
            ref={stylesRef}
            legend="Travel style"
            legendHint="Select all that apply"
            options={plannerStyles.map((s) => ({
              id: s.id,
              label: s.label,
              icon: <StyleIcon name={s.icon} />,
            }))}
            values={values.styles}
            onChange={(styles) => patch({ styles })}
            error={
              showErrors && values.styles.length === 0
                ? "Pick at least one style."
                : undefined
            }
          />

          <ChipSelect
            legend="Budget (optional)"
            legendHint="Choose one"
            options={plannerBudgets.map((b) => ({
              id: b.id,
              label: b.label,
              hint: b.hint,
            }))}
            values={values.budget ? [values.budget] : []}
            onChange={(next) => patch({ budget: next[0] ?? "" })}
            multi={false}
          />
        </div>
      ) : null}

      {step === 2 ? (
        <form action={formAction} className="space-y-5" noValidate>
          <div className="hidden" aria-hidden="true">
            <label htmlFor="planner-company">Company</label>
            <input
              id="planner-company"
              name="company"
              type="text"
              tabIndex={-1}
              autoComplete="off"
            />
          </div>
          <input type="hidden" name="source" value={source} />
          <input
            type="hidden"
            name="destinations"
            value={values.destinations.join("|")}
          />
          <input type="hidden" name="days" value={String(values.days)} />
          <input
            type="hidden"
            name="travelers"
            value={String(values.travelers)}
          />
          <input type="hidden" name="styles" value={values.styles.join("|")} />
          <input type="hidden" name="budget" value={values.budget} />
          <input type="hidden" name="nationality" value={values.nationality} />

          <div>
            <label htmlFor="planner-name" className={labelClass}>
              Name
            </label>
            <input
              id="planner-name"
              name="name"
              type="text"
              required
              maxLength={120}
              autoComplete="name"
              value={values.name}
              onChange={(e) => patch({ name: e.target.value })}
              className={fieldClass}
              placeholder="Your name"
            />
          </div>

          <div>
            <label htmlFor="planner-email" className={labelClass}>
              Email
            </label>
            <input
              id="planner-email"
              name="email"
              type="email"
              required
              maxLength={200}
              autoComplete="email"
              value={values.email}
              onChange={(e) => patch({ email: e.target.value })}
              className={fieldClass}
              placeholder="you@example.com"
            />
          </div>

          <WhatsAppOptInFields
            idPrefix="planner"
            value={values.whatsapp}
            optIn={values.whatsappOptIn}
            onChange={(whatsapp) => patch({ whatsapp })}
            onOptInChange={(whatsappOptIn) => patch({ whatsappOptIn })}
          />

          <FancySelect
            id="planner-nationality"
            label="Passport country"
            helper="Used to flag visa-free / transit options for your trip"
            placeholder="Search or select a country"
            value={values.nationality}
            options={visaLookup.countries}
            searchable
            onChange={(nationality) => patch({ nationality })}
          />

          {visaHint.status === "visa-free" ? (
            <p className="rounded-2xl bg-[color-mix(in_srgb,var(--brand-olive)_12%,white)] px-3 py-2.5 text-sm text-[var(--brand-cta)]">
              <span className="font-bold text-[var(--brand-olive)]">
                Likely visa-free
              </span>{" "}
              for up to {visaHint.maxStayDays} days
              {visaHint.alsoTransit240
                ? " (240-hour transit may also apply)."
                : "."}{" "}
              We’ll factor this into your draft plan.
            </p>
          ) : null}
          {visaHint.status === "transit-only" ? (
            <p className="rounded-2xl bg-[var(--brand-soft)] px-3 py-2.5 text-sm text-[var(--brand-cta)]">
              {visaHint.alsoHainan30 ? (
                <>
                  <span className="font-bold text-[var(--brand-mango)]">
                    240-hour transit and Hainan 30-day island stay
                  </span>{" "}
                  — a mainland round-trip holiday still needs a visa.
                </>
              ) : (
                <>
                  <span className="font-bold text-[var(--brand-mango)]">
                    240-hour transit may apply
                  </span>{" "}
                  if you have a confirmed ticket onward to a third country. A
                  standalone mainland trip still needs a visa.
                </>
              )}
            </p>
          ) : null}
          {visaHint.status === "visa-likely" ? (
            <p className="rounded-2xl bg-[color-mix(in_srgb,var(--brand-coral)_10%,white)] px-3 py-2.5 text-sm text-[var(--brand-cta)]">
              <span className="font-bold text-[var(--brand-coral)]">
                Visa likely required
              </span>{" "}
              for typical tourist trips — we’ll note timing in your plan.
            </p>
          ) : null}

          <div>
            <label htmlFor="planner-notes" className={labelClass}>
              Notes{" "}
              <span className="font-normal text-[var(--brand-ink-muted)]">
                (optional)
              </span>
            </label>
            <textarea
              id="planner-notes"
              name="notes"
              rows={4}
              maxLength={5000}
              value={values.notes}
              onChange={(e) => patch({ notes: e.target.value })}
              className="min-h-[7rem] w-full rounded-2xl border-2 border-[var(--brand-cta)]/20 bg-white px-4 py-3 text-sm font-normal tracking-wide text-[var(--brand-ink)] placeholder:text-[var(--brand-ink-muted)] transition-all duration-300 focus:border-[var(--brand-cta)] focus:outline-none focus:shadow-[0_0_0_3px_rgba(196,92,62,0.15)]"
              placeholder="Must-sees, dates, pace, dietary needs…"
            />
          </div>

          <p className="rounded-2xl bg-[var(--brand-soft)] px-4 py-3 text-sm font-normal leading-relaxed text-[var(--brand-cta)]">
            {plannerSectionCopy.pricingHint}
          </p>
          <p className="text-sm font-normal leading-relaxed text-[var(--brand-ink-muted)]">
            {plannerSectionCopy.trustLine}
          </p>

          <div className="flex flex-col-reverse gap-3 pt-1 sm:flex-row sm:items-center sm:justify-between">
            <button
              type="button"
              onClick={goBack}
              className="inline-flex min-h-11 items-center justify-center rounded-full border-2 border-[var(--brand-cta)]/30 px-6 py-3 text-sm font-bold text-[var(--brand-cta)] transition-all duration-300 hover:bg-[var(--brand-cta)]/8"
            >
              {plannerCtaCopy.back}
            </button>
            <button
              type="submit"
              disabled={pending}
              className={cn(
                "btn-brand min-h-11 w-full px-6 py-3 text-sm sm:w-auto md:text-base",
                pending &&
                  "!cursor-wait !border-[var(--brand-cream-border)] !bg-[var(--brand-soft)] !text-[var(--brand-muted)]",
              )}
            >
              {pending ? "Sending…" : plannerCtaCopy.submit}
            </button>
          </div>
        </form>
      ) : null}

      {step < 2 ? (
        <div className="mt-8 flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
          {step > 0 ? (
            <button
              type="button"
              onClick={goBack}
              className="inline-flex min-h-11 items-center justify-center rounded-full border-2 border-[var(--brand-cta)]/30 px-6 py-3 text-sm font-bold text-[var(--brand-cta)] transition-all duration-300 hover:bg-[var(--brand-cta)]/8"
            >
              {plannerCtaCopy.back}
            </button>
          ) : (
            <span className="hidden sm:block" />
          )}
          <button
            type="button"
            onClick={goNext}
            className="btn-brand min-h-11 w-full px-6 py-3 text-sm sm:w-auto md:text-base"
          >
            {step === 0 ? plannerCtaCopy.nextStyle : plannerCtaCopy.almostThere}
          </button>
        </div>
      ) : null}
    </div>
  );
}
