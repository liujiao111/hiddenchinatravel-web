import Link from "next/link";
import { prepOffers } from "@/lib/visa-checker/prep-offers";
import { FEES } from "@/lib/trust/copy";
import { AffiliateClickTracker } from "@/components/affiliates/affiliate-click-tracker";

function PrepIcon({ icon }: { icon: (typeof prepOffers)[number]["icon"] }) {
  const className = "h-6 w-6";

  switch (icon) {
    case "esim":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
          <rect
            x="5"
            y="2"
            width="14"
            height="20"
            rx="2"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path d="M9 18h6" stroke="currentColor" strokeWidth="2" />
        </svg>
      );
    case "vpn":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M12 3L3 8v8l9 5 9-5V8l-9-5z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <circle cx="12" cy="12" r="2" fill="currentColor" />
        </svg>
      );
    case "payments":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
          <rect
            x="2"
            y="5"
            width="20"
            height="14"
            rx="2"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path d="M2 10h20" stroke="currentColor" strokeWidth="2" />
        </svg>
      );
    case "maps":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M9 18l-6 3V6l6-3 6 3 6-3v15l-6 3-6-3z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path d="M9 3v15M15 6v15" stroke="currentColor" strokeWidth="2" />
        </svg>
      );
    case "tickets":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M3 9a2 2 0 012-2h14a2 2 0 012 2v2a2 2 0 00-2 2 2 2 0 012 2v2a2 2 0 01-2 2H5a2 2 0 01-2-2v-2a2 2 0 012-2 2 2 0 00-2-2V9z"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path d="M9 7v10" stroke="currentColor" strokeWidth="2" strokeDasharray="2 2" />
        </svg>
      );
    case "flights":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M2 12h20M14 6l6 6-6 6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "hotels":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M3 21V8l9-5 9 5v13"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path d="M9 21v-8h6v8" stroke="currentColor" strokeWidth="2" />
        </svg>
      );
  }
}

function PrepButton({
  href,
  label,
  variant,
}: {
  href: string;
  label: string;
  variant: "primary" | "secondary";
}) {
  const isEmpty = !href;

  if (isEmpty) {
    return (
      <span
        title="Link coming soon"
        aria-disabled="true"
        className={
          variant === "primary"
            ? "btn-brand cursor-not-allowed px-6 py-2.5 text-sm opacity-50"
            : "inline-flex cursor-not-allowed justify-center px-4 py-2.5 text-sm font-normal underline opacity-50"
        }
      >
        {label}
      </span>
    );
  }

  const isAffiliateGo = href.startsWith("/go/") || href.includes("/go/");

  if (variant === "primary") {
    return isAffiliateGo ? (
      <a
        href={href}
        target="_blank"
        rel="sponsored noopener noreferrer"
        className="btn-brand px-6 py-2.5 text-sm"
      >
        {label}
      </a>
    ) : (
      <Link href={href} className="btn-brand px-6 py-2.5 text-sm">
        {label}
      </Link>
    );
  }

  const secondaryClassName =
    "inline-flex justify-center px-4 py-2.5 text-sm font-bold tracking-tight underline underline-offset-4 transition-colors duration-500 hover:text-[var(--brand-cta)]";

  return isAffiliateGo ? (
    <a
      href={href}
      target="_blank"
      rel="sponsored noopener noreferrer"
      className={secondaryClassName}
    >
      {label}
    </a>
  ) : (
    <Link href={href} className={secondaryClassName}>
      {label}
    </Link>
  );
}

export function FirstTripPrep() {
  return (
    <section
      aria-labelledby="prep-heading"
      className="mb-20 md:mb-28"
    >
      <AffiliateClickTracker surface="visa_checker_prep" />
      <h2
        id="prep-heading"
        className="mb-3 text-xl font-bold leading-tight tracking-wide text-[var(--brand-ink)] md:text-3xl"
      >
        First trip to China? Start here
      </h2>
      <p className="mb-10 max-w-2xl text-base font-normal leading-relaxed text-[var(--brand-ink-muted)] md:text-lg">
        Beyond visas — payments, maps, tickets, and lodging are what trip up
        most first-time visitors. Start with the guides below.
      </p>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
        {prepOffers.map((offer) => (
          <article
            key={offer.id}
            className="surface-card bg-[var(--brand-surface)] p-6 md:p-8"
          >
            <div className="mb-4 flex items-start gap-4">
              <div className="shrink-0 rounded-2xl border border-[color-mix(in_srgb,var(--brand-cream-border)_40%,transparent)] p-2 text-[var(--brand-ink)]">
                <PrepIcon icon={offer.icon} />
              </div>
              <div>
                <h3 className="mb-2 text-lg font-bold tracking-tight text-[var(--brand-ink)] md:text-xl">
                  {offer.title}
                </h3>
                <p className="text-base font-normal leading-relaxed text-[var(--brand-ink-muted)]">
                  {offer.description}
                </p>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <PrepButton
                href={offer.guideHref}
                label={offer.guideLabel}
                variant="primary"
              />
              {offer.affiliateLabel ? (
                <PrepButton
                  href={offer.affiliateHref ?? ""}
                  label={offer.affiliateLabel}
                  variant="secondary"
                />
              ) : null}
            </div>
          </article>
        ))}
      </div>
      <p className="mt-6 text-xs font-normal leading-relaxed text-[var(--brand-ink-muted)]">
        {FEES.affiliateWithPlanning}
      </p>

      <div className="surface-card mt-12 overflow-hidden bg-[var(--brand-soft)]">
        <div className="flex flex-col gap-8 p-8 md:flex-row md:items-center md:justify-between md:p-10">
          <div className="max-w-xl">
            <p className="mb-3 text-xs font-normal uppercase tracking-[0.16em] text-[var(--brand-muted)]">
              Complete checklist
            </p>
            <h3 className="mb-3 text-xl font-bold leading-tight tracking-wide text-[var(--brand-ink)] md:text-3xl">
              Get every must-have in Survival Kit
            </h3>
            <p className="text-base font-normal leading-relaxed text-[var(--brand-ink-muted)]">
              Payments, maps, tickets, hotels, and more — one place for
              first-trip essentials before you land in China.
            </p>
          </div>
          <Link
            href="/survival-kit"
            className="btn-brand shrink-0 px-8 py-3.5 text-[15px]"
          >
            Get Free Survival Kit
            <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
