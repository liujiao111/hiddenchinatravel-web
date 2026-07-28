/**
 * i18n foundation (phase 1)
 * --------------------------
 * Strategy: cookie locale + dictionary modules (no URL prefix yet).
 * Why this shape:
 * - Works with current App Router tree without migrating every page to `[locale]`.
 * - Dictionaries are namespaced (`nav`, `header`, `home`, …) so pages opt in gradually.
 * - Upgrade path: add `src/middleware.ts` + `app/[locale]/…` later; keep the same
 *   dictionary files and `getDictionary(locale)` API.
 *
 * Phase 2 (when SEO needs locale URLs):
 * - Prefixed routes `/en/...`, `/zh/...` (default `en` can stay unprefixed).
 * - Middleware sets locale from path; cookie remains a preference fallback.
 * - `hreflang` + alternate links per page.
 */

export const locales = ["en", "zh"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

/** Cookie used site-wide until URL-prefixed locales ship. */
export const LOCALE_COOKIE = "hct_locale";

export const localeLabels: Record<Locale, string> = {
  en: "EN",
  zh: "中文",
};

export function isLocale(value: string | undefined | null): value is Locale {
  return !!value && (locales as readonly string[]).includes(value);
}
