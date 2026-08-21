"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  useCallback,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
} from "react";
import cn from "classnames";
import { matchSearchItems, searchTypeLabel } from "@/lib/search/match";
import type { SearchItem } from "@/lib/search/types";

const HEADER_PLACEHOLDER = "Visa, Alipay, eSIM…";

type Props = {
  /** Omit when `loadIndexOnFocus` — keeps layout payload lean */
  items?: SearchItem[];
  /** Compact for hero; full for /search page input; slim for site header */
  variant?: "hero" | "page" | "header";
  initialQuery?: string;
  className?: string;
  /** When true, selecting Enter always goes to /search */
  preferResultsPage?: boolean;
  /** Fetch `/api/search-index` on first focus instead of embedding the catalog */
  loadIndexOnFocus?: boolean;
};

export function SiteSearch({
  items: itemsProp,
  variant = "hero",
  initialQuery = "",
  className,
  preferResultsPage = false,
  loadIndexOnFocus = false,
}: Props) {
  const router = useRouter();
  const listId = useId();
  const rootRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState(initialQuery);
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [debounced, setDebounced] = useState(initialQuery);
  const [lazyItems, setLazyItems] = useState<SearchItem[] | null>(null);
  const indexFetchRef = useRef<Promise<void> | null>(null);

  const items = itemsProp ?? lazyItems ?? [];

  const ensureIndex = useCallback(() => {
    if (!loadIndexOnFocus || itemsProp || lazyItems || indexFetchRef.current) {
      return;
    }
    indexFetchRef.current = fetch("/api/search-index")
      .then((res) => {
        if (!res.ok) throw new Error("search index failed");
        return res.json() as Promise<SearchItem[]>;
      })
      .then((data) => {
        setLazyItems(data);
      })
      .catch(() => {
        indexFetchRef.current = null;
      });
  }, [loadIndexOnFocus, itemsProp, lazyItems]);

  useEffect(() => {
    const t = window.setTimeout(() => setDebounced(query), 120);
    return () => window.clearTimeout(t);
  }, [query]);

  const matches = useMemo(
    () =>
      matchSearchItems(
        items,
        debounced,
        variant === "header" ? 6 : variant === "hero" ? 7 : 12,
      ),
    [items, debounced, variant],
  );

  useEffect(() => {
    setActiveIndex(0);
  }, [debounced]);

  useEffect(() => {
    function onPointerDown(event: MouseEvent) {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onPointerDown);
    return () => document.removeEventListener("mousedown", onPointerDown);
  }, []);

  const goToResults = useCallback(
    (q: string) => {
      const value = q.trim();
      if (!value) return;
      setOpen(false);
      router.push(`/search?q=${encodeURIComponent(value)}`);
    },
    [router],
  );

  const goToItem = useCallback(
    (href: string) => {
      setOpen(false);
      router.push(href);
    },
    [router],
  );

  function onKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Escape") {
      setOpen(false);
      return;
    }

    if (event.key === "ArrowDown") {
      event.preventDefault();
      if (!open && matches.length) setOpen(true);
      setActiveIndex((i) => Math.min(i + 1, Math.max(matches.length - 1, 0)));
      return;
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();
      setActiveIndex((i) => Math.max(i - 1, 0));
      return;
    }

    if (event.key === "Enter") {
      event.preventDefault();
      if (preferResultsPage || !matches.length || event.metaKey || event.ctrlKey) {
        goToResults(query);
        return;
      }
      const target = matches[activeIndex] ?? matches[0];
      if (target) goToItem(target.href);
    }
  }

  const showDropdown = open && query.trim().length > 0;

  return (
    <div
      ref={rootRef}
      className={cn(
        "relative",
        variant === "header"
          ? "w-[min(100%,15rem)] sm:w-[17rem] lg:w-[18.5rem]"
          : "w-full",
        className,
      )}
    >
      <label htmlFor={`${listId}-input`} className="sr-only">
        Search guides and tools
      </label>
      <div
        className={cn(
          "flex items-center gap-2 transition-all duration-300",
          variant === "hero" || variant === "page"
            ? "rounded-full border-2 border-[color-mix(in_srgb,var(--brand-cta)_20%,transparent)] bg-white px-5 py-3 focus-within:border-[var(--brand-cta)] focus-within:outline-none focus-within:shadow-[0_0_0_3px_rgba(0,137,123,0.15)]"
            : null,
          variant === "header" &&
            "rounded-full border border-[color-mix(in_srgb,var(--brand-cta)_18%,transparent)] bg-white px-3 py-1.5 shadow-[0_1px_0_rgba(0,137,123,0.06)] focus-within:border-[var(--brand-cta)] focus-within:shadow-[0_0_0_3px_rgba(0,137,123,0.12)]",
        )}
      >
        <SearchIcon
          className={cn(
            "shrink-0 text-[var(--brand-muted)]",
            variant === "header" ? "h-4 w-4" : "h-5 w-5",
          )}
        />
        <input
          ref={inputRef}
          id={`${listId}-input`}
          type="search"
          role="combobox"
          aria-expanded={showDropdown}
          aria-controls={listId}
          aria-autocomplete="list"
          aria-activedescendant={
            showDropdown && matches[activeIndex]
              ? `${listId}-option-${activeIndex}`
              : undefined
          }
          autoComplete="off"
          placeholder={
            variant === "header"
              ? HEADER_PLACEHOLDER
              : variant === "hero"
                ? HEADER_PLACEHOLDER
                : "Search visas, payments, maps, hotels…"
          }
          value={query}
          onChange={(e) => {
            ensureIndex();
            setQuery(e.target.value);
            setOpen(true);
          }}
          onFocus={() => {
            ensureIndex();
            setOpen(true);
          }}
          onKeyDown={onKeyDown}
          className={cn(
            "min-w-0 flex-1 bg-transparent font-normal tracking-wide outline-none",
            variant === "header"
              ? "text-sm text-neutral-900 placeholder:text-neutral-400"
              : "text-sm text-[var(--brand-ink)] placeholder:text-[color-mix(in_srgb,var(--brand-cream-border)_50%,transparent)] md:text-base",
          )}
        />
        {query ? (
          <button
            type="button"
            onClick={() => {
              setQuery("");
              setDebounced("");
              inputRef.current?.focus();
            }}
            className="text-xs font-medium tracking-wide text-[var(--brand-muted)] transition-colors duration-300 hover:text-[var(--brand-ink)]"
          >
            Clear
          </button>
        ) : null}
        {variant === "page" || variant === "hero" ? (
          <button
            type="button"
            onClick={() => goToResults(query)}
            className="shrink-0 text-sm font-medium tracking-wide text-[var(--brand-cta)] transition-colors duration-300 hover:text-[var(--brand-cta-hover)] active:scale-95"
          >
            search →
          </button>
        ) : null}
      </div>

      {showDropdown ? (
        <div
          id={listId}
          role="listbox"
          className={cn(
            "absolute z-50 overflow-hidden rounded-2xl border-2 border-[color-mix(in_srgb,var(--brand-cta)_20%,transparent)] bg-white shadow-[0_4px_20px_rgba(0,137,123,0.12)]",
            variant === "header"
              ? "right-0 top-[calc(100%+0.4rem)] w-[min(22rem,calc(100vw-2rem))]"
              : "left-0 right-0 top-[calc(100%+0.5rem)] text-left",
          )}
        >
          {matches.length === 0 ? (
            <p className="px-4 py-5 text-sm font-normal text-[var(--brand-muted)]">
              No matches. Try “visa”, “Alipay”, or “eSIM”.
            </p>
          ) : (
            <ul className="max-h-[min(22rem,55vh)] overflow-y-auto py-2">
              {matches.map((item, index) => (
                <li key={item.id} role="option" aria-selected={index === activeIndex}>
                  <Link
                    id={`${listId}-option-${index}`}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    onMouseEnter={() => setActiveIndex(index)}
                    className={cn(
                      "flex items-start gap-3 px-4 py-3 transition-colors duration-500",
                      index === activeIndex
                        ? "bg-[var(--brand-soft)]"
                        : "hover:bg-[var(--brand-cream)]",
                    )}
                  >
                    <span className="mt-0.5 shrink-0 rounded-lg bg-[var(--brand-soft)] px-2 py-0.5 text-[10px] font-normal uppercase tracking-wider text-[var(--brand-ink-muted)]">
                      {searchTypeLabel[item.type]}
                    </span>
                    <span className="min-w-0">
                      <span className="block truncate text-sm font-normal tracking-wide text-[var(--brand-ink)]">
                        {item.title}
                      </span>
                      <span className="mt-0.5 block line-clamp-1 text-xs font-normal text-[var(--brand-muted)]">
                        {item.description}
                      </span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
          <button
            type="button"
            onClick={() => goToResults(query)}
            className="flex w-full items-center justify-between border-t border-[color-mix(in_srgb,var(--brand-cream-border)_40%,transparent)] px-4 py-3 text-left text-sm font-normal tracking-wide text-[var(--brand-cta)] transition-colors duration-500 hover:bg-[var(--brand-cream)] hover:text-[var(--brand-ink)]"
          >
            <span>View all results for “{query.trim()}”</span>
            <span aria-hidden>→</span>
          </button>
        </div>
      ) : null}
    </div>
  );
}

function SearchIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden
    >
      <circle cx="11" cy="11" r="7" />
      <path d="M20 20l-3.5-3.5" strokeLinecap="round" />
    </svg>
  );
}
