import Link from "next/link";

export function CountryDisclaimer() {
  return (
    <aside
      className="surface-card mb-12 bg-[var(--brand-soft)] px-5 py-4 sm:px-6 sm:py-5 md:mb-16"
      aria-label="Disclaimer"
    >
      <p className="mb-1 text-sm font-bold tracking-tight text-[var(--brand-ink)]">
        Trip planning summary — not official immigration advice
      </p>
      <p className="text-sm font-normal leading-relaxed text-[var(--brand-ink-muted)]">
        Policies change. Always confirm with the{" "}
        <a
          href="https://en.nia.gov.cn/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-4 hover:text-[var(--brand-cta)]"
        >
          National Immigration Administration
        </a>
        , your airline, and a Chinese embassy or consulate. Published by{" "}
        <Link
          href="/about"
          className="underline underline-offset-4 hover:text-[var(--brand-cta)]"
        >
          Hidden China Travel
        </Link>
        .
      </p>
    </aside>
  );
}
