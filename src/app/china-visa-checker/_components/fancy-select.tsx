"use client";

import { useEffect, useId, useMemo, useRef, useState } from "react";
import cn from "classnames";

export type FancySelectOption = {
  value: string;
  label: string;
  searchText?: string;
};

type Props = {
  id?: string;
  label: string;
  helper?: string;
  value: string;
  options: FancySelectOption[];
  placeholder?: string;
  searchable?: boolean;
  error?: boolean;
  errorMessage?: string;
  onChange: (value: string) => void;
};

export function FancySelect({
  id,
  label,
  helper,
  value,
  options,
  placeholder = "Select an option",
  searchable = false,
  error = false,
  errorMessage,
  onChange,
}: Props) {
  const autoId = useId();
  const fieldId = id ?? autoId;
  const listId = `${fieldId}-listbox`;
  const rootRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [highlight, setHighlight] = useState(0);

  const selected = options.find((o) => o.value === value);

  const filtered = useMemo(() => {
    if (!searchable || !query.trim()) return options;
    const q = query.trim().toLowerCase();
    return options.filter((o) =>
      (o.searchText ?? o.label).toLowerCase().includes(q),
    );
  }, [options, query, searchable]);

  useEffect(() => {
    if (!open) return;
    function onDocClick(e: MouseEvent) {
      if (!rootRef.current?.contains(e.target as Node)) {
        setOpen(false);
        setQuery("");
      }
    }
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, [open]);

  useEffect(() => {
    setHighlight(0);
  }, [query, open]);

  function selectOption(optionValue: string) {
    onChange(optionValue);
    setOpen(false);
    setQuery("");
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
      setQuery("");
      return;
    }
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setHighlight((h) => Math.min(h + 1, Math.max(filtered.length - 1, 0)));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setHighlight((h) => Math.max(h - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      const opt = filtered[highlight];
      if (opt) selectOption(opt.value);
    }
  }

  return (
    <div ref={rootRef} className="relative">
      <label
        htmlFor={fieldId}
        className="mb-1 block text-sm font-light tracking-wide text-[var(--brand-ink)]"
      >
        {label}
      </label>
      {helper ? (
        <p className="mb-2 text-xs font-light text-[var(--brand-muted)]">
          {helper}
        </p>
      ) : null}

      <button
        id={fieldId}
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        aria-invalid={error}
        onClick={() => setOpen((o) => !o)}
        onKeyDown={onKeyDown}
        className={cn(
          "flex w-full items-center justify-between gap-3 rounded-sm border bg-[var(--brand-surface)] px-4 py-3.5 text-left text-sm font-light transition-colors duration-300",
          "focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-ring)] focus-visible:ring-offset-2",
          open
            ? "border-[var(--brand-cta)] shadow-sm"
            : "border-[color-mix(in_srgb,var(--brand-cream-border)_40%,transparent)] hover:border-[var(--brand-warm)]",
          error && !open && "border-amber-500",
        )}
      >
        <span
          className={cn(
            "truncate",
            selected
              ? "text-[var(--brand-ink)]"
              : "text-[var(--brand-muted)]",
          )}
        >
          {selected?.label ?? placeholder}
        </span>
        <svg
          className={cn(
            "h-4 w-4 shrink-0 text-[var(--brand-muted)] transition-transform duration-300",
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
        <div
          className="absolute z-30 mt-2 w-full overflow-hidden rounded-sm border border-[color-mix(in_srgb,var(--brand-cream-border)_40%,transparent)] bg-[var(--brand-surface)] shadow-lg"
          role="presentation"
        >
          {searchable ? (
            <div className="border-b border-[color-mix(in_srgb,var(--brand-cream-border)_40%,transparent)] p-2">
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={onKeyDown}
                placeholder="Search…"
                className="w-full rounded-sm border border-[color-mix(in_srgb,var(--brand-cream-border)_40%,transparent)] bg-[var(--brand-soft)] px-3 py-2 text-sm font-light focus:outline-none focus:ring-2 focus:ring-[var(--brand-ring)]"
                autoFocus
              />
            </div>
          ) : null}
          <ul
            id={listId}
            role="listbox"
            aria-label={label}
            className="max-h-64 overflow-y-auto py-1"
          >
            {filtered.length === 0 ? (
              <li className="px-4 py-3 text-sm font-light text-[var(--brand-muted)]">
                No matches
              </li>
            ) : (
              filtered.map((opt, index) => {
                const isSelected = opt.value === value;
                const isActive = index === highlight;
                return (
                  <li
                    key={`${opt.value}::${index}`}
                    role="option"
                    aria-selected={isSelected}
                  >
                    <button
                      type="button"
                      className={cn(
                        "w-full px-4 py-2.5 text-left text-sm font-light transition-colors duration-300",
                        isSelected &&
                          "bg-[var(--brand-cta)] text-[var(--brand-on)]",
                        !isSelected && isActive && "bg-[var(--brand-soft)]",
                        !isSelected &&
                          !isActive &&
                          "text-[var(--brand-ink)] hover:bg-[var(--brand-soft)]",
                      )}
                      onMouseEnter={() => setHighlight(index)}
                      onClick={() => selectOption(opt.value)}
                    >
                      {opt.label}
                    </button>
                  </li>
                );
              })
            )}
          </ul>
        </div>
      ) : null}

      {error && errorMessage ? (
        <p className="mt-2 text-xs font-light text-amber-700">
          {errorMessage}
        </p>
      ) : null}
    </div>
  );
}
