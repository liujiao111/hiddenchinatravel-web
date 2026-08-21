"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import cn from "classnames";
import type { Dictionary } from "@/i18n/get-dictionary";
import { guidesNav, mainNav, type NavId, type NavItem } from "@/lib/navigation";
import { isArticlePath } from "@/lib/routes";

type NavLabels = Dictionary["nav"];

function labelFor(id: NavId, labels: NavLabels): string {
  return labels[id];
}

function menuAriaFor(item: NavItem, labels: NavLabels): string {
  if (item.id === "guides") return labels.guidesMenuAria;
  if (item.id === "tools") return labels.toolsMenuAria;
  return labelFor(item.id, labels);
}

function isHubPath(pathname: string) {
  return guidesNav.some(
    (item) => pathname === item.href || pathname.startsWith(`${item.href}/`),
  );
}

function isItemActive(item: NavItem, pathname: string) {
  if (pathname === item.href || pathname.startsWith(`${item.href}/`)) {
    return true;
  }
  if (
    item.href === "/survival-guides" &&
    (isArticlePath(pathname) || isHubPath(pathname))
  ) {
    return true;
  }
  if (item.children?.some((child) => isItemActive(child, pathname))) {
    return true;
  }
  return false;
}

function NavDropdown({
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
  const menuId = useId();
  const isActive = isItemActive(item, pathname);
  const onTeal = tone === "onTeal";

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

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
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        aria-expanded={open}
        aria-haspopup="menu"
        aria-controls={menuId}
        onClick={() => setOpen((value) => !value)}
        className={cn(
          "inline-flex items-center gap-1 text-sm font-normal tracking-wide transition-all duration-300",
          onTeal
            ? isActive
              ? "font-bold text-white"
              : "text-white/85 hover:text-white"
            : isActive
              ? "font-semibold text-neutral-900"
              : "text-neutral-900 hover:text-black",
        )}
      >
        {labelFor(item.id, labels)}
        <span aria-hidden className="text-[0.65em] opacity-70">
          ▾
        </span>
      </button>

      {open ? (
        <div
          id={menuId}
          role="menu"
          aria-label={menuAriaFor(item, labels)}
          className="absolute left-0 top-full z-50 min-w-[240px] pt-2"
        >
          <ul className="rounded-2xl border-2 border-[var(--brand-cta)]/20 bg-white py-2 shadow-[0_4px_20px_rgba(80,40,24,0.12)]">
            <li role="none">
              <Link
                role="menuitem"
                href={item.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "block px-4 py-2.5 text-sm font-normal tracking-wide transition-colors duration-500",
                  pathname === item.href || pathname.startsWith(`${item.href}/`)
                    ? "bg-[var(--brand-soft)] text-[var(--brand-ink)]"
                    : "text-[var(--brand-ink-muted)] hover:bg-[var(--brand-cream)] hover:text-[var(--brand-ink)]",
                )}
              >
                {labelFor(item.id, labels)}
              </Link>
            </li>
            {(item.children ?? []).map((child) => {
              const childActive = isItemActive(child, pathname);
              return (
                <li key={child.href} role="none">
                  <Link
                    role="menuitem"
                    href={child.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "flex items-center gap-2.5 px-4 py-2.5 text-sm font-normal tracking-wide transition-colors duration-500",
                      childActive
                        ? "bg-[var(--brand-soft)] text-[var(--brand-ink)]"
                        : "text-[var(--brand-ink-muted)] hover:bg-[var(--brand-cream)] hover:text-[var(--brand-ink)]",
                    )}
                  >
                    {child.icon ? (
                      <span className="w-5 shrink-0 text-center text-[0.95em] leading-none" aria-hidden>
                        {child.icon}
                      </span>
                    ) : null}
                    {labelFor(child.id, labels)}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ) : null}
    </div>
  );
}

type Props = {
  labels: NavLabels;
  tone?: "default" | "onTeal";
};

export function SiteNav({ labels, tone = "default" }: Props) {
  const pathname = usePathname();
  const onTeal = tone === "onTeal";

  return (
    <nav
      className="flex flex-nowrap items-center justify-start gap-x-3 whitespace-nowrap xl:gap-x-5 2xl:gap-x-6"
      aria-label={labels.mainAria}
    >
      {mainNav.map((item) => {
        if (item.children?.length) {
          return (
            <NavDropdown
              key={item.href}
              item={item}
              labels={labels}
              tone={tone}
            />
          );
        }

        const isActive = isItemActive(item, pathname);

        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "text-sm font-normal tracking-wide transition-all duration-300",
              onTeal
                ? isActive
                  ? "font-bold text-white"
                  : "text-white/85 hover:text-white"
                : isActive
                  ? "font-semibold text-neutral-900"
                  : "text-neutral-900 hover:text-black",
            )}
          >
            {labelFor(item.id, labels)}
          </Link>
        );
      })}
    </nav>
  );
}
