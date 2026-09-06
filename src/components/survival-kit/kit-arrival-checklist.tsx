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
      className="scroll-mt-24 py-12 md:py-16"
    >
      <div className="rounded-lg border border-[var(--brand-border-subtle)] bg-white p-6 md:p-10">
        <div className="mb-8 md:flex md:items-end md:justify-between md:gap-10">
          <div>
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--brand-mango)]">
              Before you fly
            </p>
            <h2
              id="checklist-heading"
              className="mb-3 max-w-2xl text-xl font-bold leading-tight text-[var(--brand-ink)] md:text-3xl"
            >
              Arrival checklist
            </h2>
            <p className="max-w-xl text-sm font-normal leading-relaxed text-[var(--brand-ink-muted)] md:text-base">
              Tick these off before departure. Progress saves on this device.
            </p>
          </div>

          <div className="mt-6 shrink-0 md:mt-0 md:text-right">
            <p className="mb-2 text-sm font-bold tracking-tight text-[var(--brand-ink)]">
              {hydrated
                ? `${doneCount} of ${kitChecklistItems.length} ready`
                : "\u2026"}
            </p>
            <div
              className="h-1.5 w-full overflow-hidden rounded-full bg-[var(--brand-soft)] md:w-44"
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
        </div>

        <ul className="grid gap-2.5 md:grid-cols-2 md:gap-3">
          {kitChecklistItems.map((item) => {
            const isOn = Boolean(checked[item.id]);
            return (
              <li key={item.id}>
                <button
                  type="button"
                  onClick={() => toggle(item.id)}
                  className={cn(
                    "flex h-full w-full items-start gap-3 rounded-lg border px-4 py-3.5 text-left transition-colors duration-300",
                    isOn
                      ? "border-[color-mix(in_srgb,var(--brand-cta)_35%,var(--brand-border-subtle))] bg-[var(--brand-soft)]"
                      : "border-[var(--brand-border-subtle)] bg-white hover:border-[color-mix(in_srgb,var(--brand-cta)_30%,var(--brand-border-subtle))]",
                  )}
                >
                  <span
                    aria-hidden
                    className={cn(
                      "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border text-[11px]",
                      isOn
                        ? "border-[var(--brand-cta)] bg-[var(--brand-cta)] text-[var(--brand-on)]"
                        : "border-[var(--brand-border-subtle)] text-transparent",
                    )}
                  >
                    ✓
                  </span>
                  <span
                    className={cn(
                      "text-sm font-bold tracking-tight",
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
          <div className="mt-8 border-t border-[var(--brand-border-subtle)] pt-6">
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
      </div>
    </section>
  );
}
