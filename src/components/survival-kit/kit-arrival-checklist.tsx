"use client";

import { useEffect, useMemo, useState } from "react";
import cn from "classnames";
import { KitTrackedLink } from "./kit-tracked-link";
import { kitChecklistItems, kitStickyCta } from "@/lib/survival-kit/content";
import { trackEvent } from "@/lib/survival-kit/track";

const STORAGE_KEY = "hct-survival-kit-checklist";

export function KitArrivalChecklist() {
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) setChecked(JSON.parse(raw) as Record<string, boolean>);
    } catch {
      /* ignore */
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(checked));
    } catch {
      /* ignore */
    }
  }, [checked, hydrated]);

  const doneCount = useMemo(
    () => kitChecklistItems.filter((item) => checked[item.id]).length,
    [checked],
  );
  const allDone = doneCount === kitChecklistItems.length && hydrated;

  useEffect(() => {
    if (allDone) {
      trackEvent("kit_checklist_complete", { count: doneCount });
    }
  }, [allDone, doneCount]);

  function toggle(id: string) {
    setChecked((prev) => {
      const next = { ...prev, [id]: !prev[id] };
      trackEvent("kit_checklist_toggle", {
        id,
        checked: Boolean(next[id]),
      });
      return next;
    });
  }

  return (
    <section
      id="section-checklist"
      aria-labelledby="checklist-heading"
      className="scroll-mt-28 border-b border-[color-mix(in_srgb,var(--brand-cream-border)_40%,transparent)] py-16 md:py-20"
    >
      <p className="mb-3 text-[11px] font-normal uppercase tracking-[0.18em] text-[var(--brand-warm)]">
        Before you fly
      </p>
      <h2
        id="checklist-heading"
        className="mb-3 max-w-2xl text-xl font-bold tracking-wide text-[var(--brand-ink)] md:text-3xl"
      >
        Arrival checklist
      </h2>
      <p className="mb-8 max-w-2xl text-sm font-normal leading-relaxed text-[var(--brand-ink-muted)] md:text-base">
        Tick these off before departure. Progress saves on this device.
      </p>

      <div className="mb-6 flex items-center justify-between gap-4 text-sm font-normal text-[var(--brand-ink-muted)]">
        <span>
          {hydrated ? `${doneCount} / ${kitChecklistItems.length} ready` : "…"}
        </span>
        <div
          className="h-1.5 w-40 overflow-hidden rounded-2xl bg-[var(--brand-soft)]"
          aria-hidden
        >
          <div
            className="h-full bg-[var(--brand-cta)] transition-all duration-500"
            style={{
              width: `${(doneCount / kitChecklistItems.length) * 100}%`,
            }}
          />
        </div>
      </div>

      <ul className="mb-8 space-y-3">
        {kitChecklistItems.map((item) => {
          const isOn = Boolean(checked[item.id]);
          return (
            <li key={item.id}>
              <button
                type="button"
                onClick={() => toggle(item.id)}
                className={cn(
                  "flex w-full items-start gap-3 rounded-2xl border px-4 py-3.5 text-left transition-colors duration-300",
                  isOn
                    ? "border-[color-mix(in_srgb,var(--brand-cta)_35%,var(--brand-cream-border))] bg-[var(--brand-soft)]"
                    : "border-[color-mix(in_srgb,var(--brand-cream-border)_40%,transparent)] bg-[var(--brand-surface)] hover:bg-white",
                )}
              >
                <span
                  aria-hidden
                  className={cn(
                    "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-2xl border text-[11px]",
                    isOn
                      ? "border-[var(--brand-cta)] bg-[var(--brand-cta)] text-[var(--brand-on)]"
                      : "border-[color-mix(in_srgb,var(--brand-cream-border)_60%,transparent)] text-transparent",
                  )}
                >
                  ✓
                </span>
                <span
                  className={cn(
                    "text-sm font-bold tracking-tight md:text-base",
                    isOn
                      ? "text-[var(--brand-ink)]"
                      : "text-[var(--brand-ink-muted)]",
                  )}
                >
                  {item.label}
                </span>
              </button>
            </li>
          );
        })}
      </ul>

      {allDone ? (
        <div className="surface-card border border-[color-mix(in_srgb,var(--brand-cta)_30%,var(--brand-cream-border))] bg-[var(--brand-soft)] p-6 md:p-8">
          <p className="mb-4 text-base font-bold tracking-tight text-[var(--brand-ink)] md:text-lg">
            Essentials ready — sketch your cities and days next.
          </p>
          <KitTrackedLink
            cta={{
              label: kitStickyCta.label,
              href: kitStickyCta.href,
              trackingModule: "checklist-complete",
            }}
            variant="primary"
          />
        </div>
      ) : null}
    </section>
  );
}
