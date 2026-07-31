"use client";

import {
  CURRENCIES,
  currencyByCode,
  type CurrencyCode,
} from "@/lib/currency-converter/currencies";
import cn from "classnames";
import { useEffect, useId, useRef, useState } from "react";

type Props = {
  id?: string;
  "aria-label": string;
  value: CurrencyCode;
  onChange: (code: CurrencyCode) => void;
  className?: string;
};

export function CurrencySelect({
  id,
  "aria-label": ariaLabel,
  value,
  onChange,
  className,
}: Props) {
  const autoId = useId();
  const fieldId = id ?? autoId;
  const listId = `${fieldId}-list`;
  const rootRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const [highlight, setHighlight] = useState(
    Math.max(
      0,
      CURRENCIES.findIndex((c) => c.code === value),
    ),
  );

  const selected = currencyByCode(value) ?? CURRENCIES[0];

  useEffect(() => {
    if (!open) return;
    function onDocClick(e: MouseEvent) {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, [open]);

  useEffect(() => {
    setHighlight(
      Math.max(
        0,
        CURRENCIES.findIndex((c) => c.code === value),
      ),
    );
  }, [value, open]);

  function pick(code: CurrencyCode) {
    onChange(code);
    setOpen(false);
  }

  function onKeyDown(e: React.KeyboardEvent) {
    if (!open && (e.key === "ArrowDown" || e.key === "Enter" || e.key === " ")) {
      e.preventDefault();
      setOpen(true);
      return;
    }
    if (!open) return;

    if (e.key === "Escape") {
      e.preventDefault();
      setOpen(false);
      return;
    }
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setHighlight((h) => Math.min(h + 1, CURRENCIES.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setHighlight((h) => Math.max(h - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      const opt = CURRENCIES[highlight];
      if (opt) pick(opt.code);
    }
  }

  return (
    <div ref={rootRef} className={cn("relative shrink-0", className)}>
      <button
        id={fieldId}
        type="button"
        aria-label={ariaLabel}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        onClick={() => setOpen((o) => !o)}
        onKeyDown={onKeyDown}
        className={cn(
          "flex h-full min-h-[3.25rem] w-[9.75rem] items-center justify-between gap-2 rounded-2xl border bg-white px-3 py-2.5 text-left transition-colors duration-300 sm:w-[11.5rem]",
          "focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-ring)] focus-visible:ring-offset-1",
          open
            ? "border-[var(--brand-cta)] shadow-sm"
            : "border-[color-mix(in_srgb,var(--brand-cream-border)_55%,transparent)] hover:border-[var(--brand-warm)]",
        )}
      >
        <span className="min-w-0">
          <span className="block text-sm font-medium tracking-wide text-[var(--brand-ink)]">
            {selected.code}
          </span>
          <span className="block truncate text-[11px] font-normal leading-tight text-[var(--brand-muted)]">
            {selected.name.replace(/\s*\(.*\)\s*$/, "")}
          </span>
        </span>
        <svg
          className={cn(
            "h-4 w-4 shrink-0 text-[var(--brand-cta)] transition-transform duration-300",
            open && "rotate-180",
          )}
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.17l3.71-3.94a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {open ? (
        <ul
          id={listId}
          role="listbox"
          aria-label={ariaLabel}
          className="absolute right-0 z-40 mt-2 max-h-72 w-[min(20rem,calc(100vw-2.5rem))] overflow-y-auto rounded-2xl border border-[color-mix(in_srgb,var(--brand-cream-border)_45%,transparent)] bg-[var(--brand-surface)] py-1 shadow-lg"
        >
          {CURRENCIES.map((opt, index) => {
            const isSelected = opt.code === value;
            const isActive = index === highlight;
            return (
              <li key={opt.code} role="option" aria-selected={isSelected}>
                <button
                  type="button"
                  className={cn(
                    "flex w-full items-center gap-3 px-3.5 py-2.5 text-left transition-colors duration-200",
                    isSelected &&
                      "bg-[var(--brand-cta)] text-[var(--brand-on)]",
                    !isSelected && isActive && "bg-[var(--brand-soft)]",
                    !isSelected &&
                      !isActive &&
                      "text-[var(--brand-ink)] hover:bg-[var(--brand-soft)]",
                  )}
                  onMouseEnter={() => setHighlight(index)}
                  onClick={() => pick(opt.code)}
                >
                  <span
                    className={cn(
                      "w-12 shrink-0 text-sm font-medium tracking-wide",
                      isSelected ? "text-[var(--brand-on)]" : "text-[var(--brand-cta)]",
                    )}
                  >
                    {opt.code}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block truncate text-sm font-normal">
                      {opt.name}
                    </span>
                    <span
                      className={cn(
                        "block text-[11px] font-normal",
                        isSelected
                          ? "text-[color-mix(in_srgb,var(--brand-on)_75%,transparent)]"
                          : "text-[var(--brand-muted)]",
                      )}
                    >
                      {opt.symbol}
                    </span>
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
}
