"use client";

import {
  hintFor,
  isItemActive,
  labelFor,
  menuAriaFor,
  navChromeClass,
  overviewLabelFor,
  type NavLabels,
} from "@/app/_components/nav-helpers";
import type { NavItem } from "@/lib/navigation";
import cn from "classnames";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";

const CLOSE_DELAY_MS = 140;

export function NavDropdown({
  item,
  labels,
  tone = "default",
}: {
  item: NavItem;
  labels: NavLabels;
  tone?: "default" | "onTeal";
}) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<number | null>(null);
  const menuId = useId();
  const overlay = tone === "onTeal";
  const children = item.children ?? [];
  const wide = item.id === "destinations";

  function clearCloseTimer() {
    if (closeTimer.current != null) {
      window.clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  }

  function openMenu() {
    clearCloseTimer();
    setOpen(true);
  }

  function scheduleClose() {
    clearCloseTimer();
    closeTimer.current = window.setTimeout(() => {
      setOpen(false);
      closeTimer.current = null;
    }, CLOSE_DELAY_MS);
  }

  useEffect(() => {
    setOpen(false);
    clearCloseTimer();
  }, [pathname]);

  useEffect(() => {
    return () => clearCloseTimer();
  }, []);

  useEffect(() => {
    if (!open) return;

    function onPointerDown(event: MouseEvent) {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div
      ref={rootRef}
      className="relative"
      onMouseEnter={openMenu}
      onMouseLeave={scheduleClose}
    >
      <button
        type="button"
        aria-expanded={open}
        aria-haspopup="menu"
        aria-controls={menuId}
        onClick={() => (open ? setOpen(false) : openMenu())}
        className={cn(
          "inline-flex appearance-none items-center gap-1 border-0 bg-transparent p-0 shadow-none",
          "rounded outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[color-mix(in_srgb,var(--brand-cta)_45%,transparent)]",
          navChromeClass({ overlay }),
        )}
      >
        {labelFor(item.id, labels)}
        <ChevronIcon open={open} />
      </button>

      {open ? (
        <div
          id={menuId}
          role="menu"
          aria-label={menuAriaFor(item, labels)}
          className={cn(
            "absolute left-0 top-full z-50 pt-2",
            wide ? "w-[18.5rem]" : "min-w-[15.5rem]",
          )}
        >
          <ul
            className={cn(
              "nav-dropdown-panel relative rounded-xl border border-[var(--brand-border-subtle)] bg-white p-1.5",
              "before:absolute before:inset-x-0 before:-top-2 before:h-2 before:content-['']",
            )}
          >
            <li role="none">
              <DropdownRow
                href={item.href}
                label={overviewLabelFor(item, labels)}
                active={pathname === item.href}
                onNavigate={() => setOpen(false)}
              />
            </li>
            {children.length ? (
              <li
                role="separator"
                className="mx-3 my-1 h-px bg-[var(--brand-border-subtle)]"
              />
            ) : null}
            {children.map((child) => (
              <li key={child.href} role="none">
                <DropdownRow
                  href={child.href}
                  label={labelFor(child.id, labels)}
                  hint={hintFor(child.id, labels)}
                  icon={child.icon}
                  thumb={child.thumb}
                  active={isItemActive(child, pathname)}
                  onNavigate={() => setOpen(false)}
                />
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}

function DropdownRow({
  href,
  label,
  hint,
  icon,
  thumb,
  active,
  onNavigate,
}: {
  href: string;
  label: string;
  hint?: string;
  icon?: string;
  thumb?: string;
  active: boolean;
  onNavigate: () => void;
}) {
  return (
    <Link
      role="menuitem"
      href={href}
      onClick={onNavigate}
      className={cn(
        "group/row flex items-start gap-2.5 rounded-lg px-3 font-sans text-sm font-normal tracking-wide",
        thumb ? "py-2.5" : "py-2",
        "transition-[background-color,color,transform] duration-300 ease-out",
        "motion-reduce:transition-none",
        active
          ? "bg-[var(--brand-soft)] text-[var(--brand-ink)]"
          : "text-[var(--brand-ink-muted)] hover:bg-[var(--brand-cream)] hover:text-[var(--brand-ink)]",
      )}
    >
      {thumb ? (
        <span className="relative mt-0.5 h-12 w-12 shrink-0 overflow-hidden rounded-lg bg-[var(--brand-soft)]">
          <Image
            src={thumb}
            alt=""
            fill
            sizes="96px"
            quality={80}
            className="object-cover transition-transform duration-300 ease-out group-hover/row:scale-105 motion-reduce:transition-none"
          />
        </span>
      ) : icon ? (
        <span
          className="mt-0.5 w-5 shrink-0 text-center text-[0.9em] leading-none"
          aria-hidden
        >
          {icon}
        </span>
      ) : null}
      <span className="min-w-0 flex-1">
        <span className="block leading-snug">{label}</span>
        {hint ? (
          <span className="mt-0.5 block text-xs font-normal leading-snug text-[var(--brand-ink-muted)]">
            {hint}
          </span>
        ) : null}
      </span>
      <span
        aria-hidden
        className={cn(
          "mt-0.5 shrink-0 text-[var(--brand-cta)] transition-[opacity,transform] duration-300 ease-out",
          "motion-reduce:transition-none",
          "opacity-0 -translate-x-1 group-hover/row:translate-x-0 group-hover/row:opacity-100",
          active && "translate-x-0 opacity-70",
        )}
      >
        →
      </span>
    </Link>
  );
}

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 12 12"
      className={cn(
        "h-3 w-3 shrink-0 opacity-55 transition-transform duration-300 ease-out",
        "motion-reduce:transition-none",
        open && "rotate-180",
      )}
      aria-hidden
    >
      <path
        d="M2.5 4.25 6 7.75 9.5 4.25"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
