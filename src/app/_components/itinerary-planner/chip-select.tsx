"use client";

import cn from "classnames";
import {
  forwardRef,
  type ReactNode,
} from "react";

type Option = {
  id: string;
  label: string;
  hint?: string;
  icon?: ReactNode;
};

type Props = {
  legend: string;
  /** Clarifies multi vs single select for anxious first-time users */
  legendHint?: string;
  options: Option[];
  values: string[];
  onChange: (next: string[]) => void;
  multi?: boolean;
  error?: string;
};

export const ChipSelect = forwardRef<HTMLFieldSetElement, Props>(
  function ChipSelect(
    {
      legend,
      legendHint,
      options,
      values,
      onChange,
      multi = true,
      error,
    },
    ref,
  ) {
    function toggle(id: string) {
      if (multi) {
        onChange(
          values.includes(id)
            ? values.filter((v) => v !== id)
            : [...values, id],
        );
        return;
      }
      onChange(values[0] === id ? [] : [id]);
    }

    return (
      <fieldset ref={ref}>
        <legend className="mb-3 w-full">
          <span className="block text-sm font-bold tracking-tight text-[var(--brand-cta)]">
            {legend}
          </span>
          {legendHint ? (
            <span className="mt-1 block text-xs font-normal text-[var(--brand-ink-muted)]">
              {legendHint}
            </span>
          ) : null}
        </legend>
        <div className="flex flex-wrap gap-2.5">
          {options.map((opt) => {
            const selected = values.includes(opt.id);
            return (
              <button
                key={opt.id}
                type="button"
                aria-pressed={selected}
                onClick={() => toggle(opt.id)}
                className={cn(
                  "inline-flex min-h-11 items-center gap-2 rounded-full border-2 px-4 py-2.5 text-sm font-bold transition-all duration-300 active:scale-[0.98]",
                  selected
                    ? "border-[var(--brand-cta)] bg-[var(--brand-cta)] text-white shadow-[0_4px_16px_rgba(0,137,123,0.28)] ring-2 ring-[var(--brand-cta)]/30 ring-offset-2 ring-offset-white"
                    : "border-[#00897b]/25 bg-white text-[var(--brand-cta)] hover:border-[var(--brand-cta)] hover:bg-[#00897b]/8",
                )}
              >
                {opt.icon ? (
                  <span
                    className={cn(
                      "shrink-0",
                      selected ? "opacity-100" : "opacity-90",
                    )}
                    aria-hidden
                  >
                    {opt.icon}
                  </span>
                ) : null}
                <span className="text-left leading-tight">
                  {opt.label}
                  {opt.hint ? (
                    <span
                      className={cn(
                        "mt-0.5 block text-xs font-normal",
                        selected
                          ? "text-white/80"
                          : "text-[var(--brand-ink-muted)]",
                      )}
                    >
                      {opt.hint}
                    </span>
                  ) : null}
                </span>
                {selected ? (
                  <span className="sr-only">selected</span>
                ) : null}
              </button>
            );
          })}
        </div>
        {error ? (
          <p
            className="mt-2 text-xs font-normal text-[var(--brand-coral)]"
            role="alert"
          >
            {error}
          </p>
        ) : null}
      </fieldset>
    );
  },
);
