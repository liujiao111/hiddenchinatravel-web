"use client";

import type { Dictionary } from "@/i18n/get-dictionary";
import { mainNav, type NavId, type NavItem } from "@/lib/navigation";
import cn from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";

type NavLabels = Dictionary["nav"];

function labelFor(id: NavId, labels: NavLabels): string {
  if (id === "home") return "Home";
  const key = id as keyof NavLabels;
  return labels[key] ?? id;
}

type Props = {
  labels: NavLabels;
  plannerCta: string;
  /** White hamburger when the header sits on the hero photo */
  tone?: "default" | "onPhoto";
};

/** Full-screen menu — used below the `xl` breakpoint (matches SiteHeader). */
export function MobileNav({ labels, plannerCta, tone = "default" }: Props) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const panelId = useId();
  const panelRef = useRef<HTMLDivElement>(null);
  const previouslyFocused = useRef<HTMLElement | null>(null);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;

    previouslyFocused.current = document.activeElement as HTMLElement | null;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const panel = panelRef.current;
    const focusable = panel?.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
    );
    focusable?.[0]?.focus();

    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        e.preventDefault();
        setOpen(false);
        return;
      }

      if (e.key !== "Tab" || !panel || !focusable?.length) return;

      const items = Array.from(focusable);
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
      previouslyFocused.current?.focus?.();
    };
  }, [open]);

  return (
    <div className="xl:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((v) => !v)}
        className={cn(
          "inline-flex h-11 w-11 items-center justify-center rounded-full border transition-colors duration-300",
          tone === "onPhoto"
            ? "border-white/40 text-white hover:bg-white/10"
            : "border-neutral-200 text-neutral-900 hover:bg-neutral-50",
        )}
      >
        {open ? <CloseIcon /> : <MenuIcon />}
      </button>

      {open ? (
        <div
          id={panelId}
          ref={panelRef}
          role="dialog"
          aria-modal="true"
          aria-label={labels.mainAria}
          className="fixed inset-0 z-[70] flex flex-col bg-white"
        >
          <div className="flex h-14 items-center justify-between border-b border-neutral-200 px-5">
            <p className="text-sm font-bold text-neutral-900">Menu</p>
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-neutral-200 text-neutral-900"
            >
              <CloseIcon />
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto px-5 pb-8">
            <ul className="space-y-1">
              {mainNav.map((item) => (
                <MobileNavItem
                  key={item.href}
                  item={item}
                  labels={labels}
                  onNavigate={() => setOpen(false)}
                />
              ))}
            </ul>

            <Link
              href="/china-itinerary-planner#plan-trip"
              onClick={() => setOpen(false)}
              className="btn-brand mt-8 flex min-h-12 w-full justify-center px-6 py-3 text-sm"
            >
              {plannerCta}
            </Link>
          </nav>
        </div>
      ) : null}
    </div>
  );
}

function MobileNavItem({
  item,
  labels,
  onNavigate,
}: {
  item: NavItem;
  labels: NavLabels;
  onNavigate: () => void;
}) {
  const [expanded, setExpanded] = useState(false);
  const children = item.children ?? [];

  if (!children.length) {
    return (
      <li>
        <Link
          href={item.href}
          onClick={onNavigate}
          className="flex min-h-12 items-center border-b border-neutral-200 py-3 text-base font-bold text-neutral-900"
        >
          {labelFor(item.id, labels)}
        </Link>
      </li>
    );
  }

  return (
    <li className="border-b border-neutral-200">
      <div className="flex items-stretch">
        <Link
          href={item.href}
          onClick={onNavigate}
          className="flex min-h-12 flex-1 items-center py-3 text-base font-bold text-neutral-900"
        >
          {labelFor(item.id, labels)}
        </Link>
        <button
          type="button"
          aria-expanded={expanded}
          aria-label={`Expand ${labelFor(item.id, labels)}`}
          onClick={() => setExpanded((v) => !v)}
          className="inline-flex min-h-12 w-12 items-center justify-center text-neutral-500"
        >
          <span className={cn("text-lg transition-transform", expanded && "rotate-45")}>
            +
          </span>
        </button>
      </div>
      {expanded ? (
        <ul className="space-y-1 pb-3 pl-2">
          {children.map((child) => (
            <li key={child.href}>
              <Link
                href={child.href}
                onClick={onNavigate}
                className="flex min-h-11 items-center gap-2 rounded-xl px-3 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-50"
              >
                {child.icon ? (
                  <span className="w-5 text-center" aria-hidden>
                    {child.icon}
                  </span>
                ) : null}
                {labelFor(child.id, labels)}
              </Link>
            </li>
          ))}
        </ul>
      ) : null}
    </li>
  );
}

function MenuIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M4 7h16M4 12h16M4 17h16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M6 6l12 12M18 6 6 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
