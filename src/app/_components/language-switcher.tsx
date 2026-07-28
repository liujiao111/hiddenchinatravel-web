"use client";

import { useRouter } from "next/navigation";
import cn from "classnames";
import { locales, type Locale } from "@/i18n/config";
import { useLocaleDict } from "@/i18n/locale-provider";
import type { Dictionary } from "@/i18n/get-dictionary";

type Props = {
  locale: Locale;
  labels: Dictionary["locale"];
  tone?: "default" | "onTeal";
};

export function LanguageSwitcher({
  locale,
  labels,
  tone = "default",
}: Props) {
  const router = useRouter();
  const { setLocale } = useLocaleDict();
  const onTeal = tone === "onTeal";

  function select(next: Locale) {
    if (next === locale) return;
    setLocale(next);
    router.refresh();
  }

  return (
    <div
      role="group"
      aria-label={labels.switchAria}
      className={cn(
        "inline-flex items-center rounded-full border-2 p-0.5",
        onTeal
          ? "border-white/35 bg-white/10"
          : "border-[color-mix(in_srgb,var(--brand-cta)_20%,transparent)] bg-white",
      )}
    >
      {locales.map((code) => {
        const active = code === locale;
        return (
          <button
            key={code}
            type="button"
            onClick={() => select(code)}
            aria-pressed={active}
            className={cn(
              "min-w-[2.25rem] rounded-full px-2.5 py-1.5 text-xs font-bold tracking-tight transition-all duration-300",
              onTeal
                ? active
                  ? "bg-[var(--brand-cream)] text-[var(--brand-cta)]"
                  : "text-white/85 hover:text-white"
                : active
                  ? "bg-[var(--brand-cta)] text-[var(--brand-on)]"
                  : "text-[var(--brand-ink-muted)] hover:text-[var(--brand-ink)]",
            )}
          >
            {code === "en" ? labels.en : labels.zh}
          </button>
        );
      })}
    </div>
  );
}
