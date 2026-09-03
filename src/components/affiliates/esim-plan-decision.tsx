import { FEES } from "@/lib/trust/copy";

type Plan = {
  provider: "Trip.com" | "Airalo";
  name: string;
  price: string;
  originalPrice?: string;
  detail: string;
  note: string;
  href: string;
  recommended?: boolean;
};

type PlanPair = {
  id: string;
  title: string;
  fit: string;
  plans: [Plan, Plan];
};

const planPairs: PlanPair[] = [
  {
    id: "seven-day-everyday",
    title: "7 days · everyday travel",
    fit: "Maps, translation, messages, payments and normal browsing.",
    plans: [
      {
        provider: "Trip.com",
        name: "3 GB per day · 7 days",
        price: "$8.81",
        originalPrice: "$9.28",
        detail: "5% off · ChatGPT available",
        note: "Best value here for a normal one-week trip.",
        href: "/go/trip-esim-7d-3gb",
        recommended: true,
      },
      {
        provider: "Airalo",
        name: "10 GB total · 7 days",
        price: "$24.50",
        detail: "China Unicom · fixed-data plan",
        note: "A simpler fit if you already prefer Airalo's app.",
        href: "/go/airalo-esim-7d-10gb",
      },
    ],
  },
  {
    id: "seven-day-heavy",
    title: "7 days · heavy data",
    fit: "Frequent uploads, video, hotspot use or all-day navigation.",
    plans: [
      {
        provider: "Trip.com",
        name: "100 GB per day · 7 days",
        price: "$13.13",
        originalPrice: "$13.83",
        detail: "5% off · speed capped at 10 Mbps · ChatGPT available",
        note: "Much more data, but do not expect full-speed 5G.",
        href: "/go/trip-esim-7d-100gb",
        recommended: true,
      },
      {
        provider: "Airalo",
        name: "Unlimited · 7 days",
        price: "$27.00",
        detail: "3 GB high-speed daily, then 1 Mbps",
        note: "Clear fair-use terms inside the Airalo app.",
        href: "/go/airalo-esim-7d-unlimited",
      },
    ],
  },
  {
    id: "fifteen-day-everyday",
    title: "15 days · everyday travel",
    fit: "A two-week route with daily maps, messaging and translation.",
    plans: [
      {
        provider: "Trip.com",
        name: "3 GB per day · 15 days",
        price: "$16.59",
        originalPrice: "$17.47",
        detail: "5% off · ChatGPT available",
        note: "Daily allowance is easier to budget on a longer trip.",
        href: "/go/trip-esim-15d-3gb",
        recommended: true,
      },
      {
        provider: "Airalo",
        name: "20 GB total · 15 days",
        price: "$39.00",
        detail: "China Unicom · fixed-data plan",
        note: "One total allowance rather than a daily reset.",
        href: "/go/airalo-esim-15d-20gb",
      },
    ],
  },
];

function PlanCard({ plan }: { plan: Plan }) {
  return (
    <article
      className={`relative flex h-full flex-col rounded-2xl border bg-white p-5 ${
        plan.recommended
          ? "border-[var(--brand-coral)] shadow-[0_10px_28px_rgba(126,64,38,0.10)]"
          : "border-[color-mix(in_srgb,var(--brand-cta)_16%,transparent)]"
      }`}
    >
      {plan.recommended ? (
        <span className="absolute right-4 top-4 rounded-full bg-[var(--brand-soft)] px-2.5 py-1 text-[0.68rem] font-bold uppercase tracking-[0.12em] text-[var(--brand-coral)]">
          Best value
        </span>
      ) : null}
      <p className="pr-24 text-xs font-bold uppercase tracking-[0.16em] text-[var(--brand-mango)]">
        {plan.provider}
      </p>
      <h3 className="mt-3 text-lg font-bold tracking-tight text-[var(--brand-ink)]">
        {plan.name}
      </h3>
      <div className="mt-3 flex items-baseline gap-2">
        <span className="text-2xl font-bold text-[var(--brand-cta)]">
          {plan.price}
        </span>
        {plan.originalPrice ? (
          <span className="text-sm text-[var(--brand-ink-muted)] line-through">
            {plan.originalPrice}
          </span>
        ) : null}
      </div>
      <p className="mt-2 text-sm font-bold leading-relaxed text-[var(--brand-ink)]">
        {plan.detail}
      </p>
      <p className="mt-2 flex-1 text-sm font-normal leading-relaxed text-[var(--brand-ink-muted)]">
        {plan.note}
      </p>
      <a
        href={plan.href}
        target="_blank"
        rel="sponsored noopener noreferrer"
        className={
          plan.recommended
            ? "btn-brand mt-5 inline-flex justify-center px-5 py-3 text-sm"
            : "btn-brand-outline mt-5 inline-flex justify-center px-5 py-3 text-sm"
        }
      >
        Choose {plan.provider} plan
        <span aria-hidden>→</span>
      </a>
    </article>
  );
}

export function EsimPlanDecision() {
  return (
    <section
      id="esim-plan-picker"
      className="mx-auto mb-12 max-w-6xl scroll-mt-24 rounded-3xl border border-[color-mix(in_srgb,var(--brand-cta)_15%,transparent)] bg-[var(--brand-cream)] p-5 md:mb-16 md:p-8"
      aria-labelledby="esim-plan-picker-title"
    >
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand-mango)]">
        Compare exact China eSIM plans
      </p>
      <h2
        id="esim-plan-picker-title"
        className="mt-2 max-w-3xl text-2xl font-bold tracking-tight text-[var(--brand-ink)] md:text-3xl"
      >
        Choose by trip length and data use
      </h2>
      <p className="mt-3 max-w-3xl text-sm font-normal leading-relaxed text-[var(--brand-ink-muted)] md:text-base">
        Trip.com is the lower-price choice in all three like-for-like
        scenarios below. Its eSIM also stayed fast in our Yunnan mountain-area
        testing, and ChatGPT worked on mobile data without a separate VPN.
        Airalo costs more, but its dedicated eSIM app and plan management may
        suit travelers who already use it.
      </p>
      <p className="mt-3 max-w-3xl text-xs font-normal leading-relaxed text-[var(--brand-ink-muted)]">
        Prices checked September 3, 2026. Trip.com sale prices and all package
        terms can change; confirm the final checkout details. Both providers
        are data-only and do not give you a mainland +86 phone number.
      </p>

      <div className="mt-8 space-y-8">
        {planPairs.map((pair) => (
          <div key={pair.id}>
            <div className="mb-3">
              <h3 className="text-lg font-bold tracking-tight text-[var(--brand-ink)] md:text-xl">
                {pair.title}
              </h3>
              <p className="mt-1 text-sm font-normal text-[var(--brand-ink-muted)]">
                {pair.fit}
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {pair.plans.map((plan) => (
                <PlanCard key={plan.href} plan={plan} />
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-2xl bg-white p-5 text-sm leading-relaxed text-[var(--brand-ink-muted)]">
        <p className="font-bold text-[var(--brand-ink)]">Before you buy</p>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>Confirm your exact phone model is unlocked and supports eSIM.</li>
          <li>
            Install before departure. Turn data roaming on for the travel eSIM
            after landing.
          </li>
          <li>
            Keep your home SIM active for bank codes, but turn off its data
            roaming.
          </li>
          <li>
            eSIM mobile data can open international apps; mainland hotel Wi-Fi
            is a separate connection.
          </li>
        </ul>
        <p className="mt-4 text-xs">{FEES.affiliatePlural}</p>
      </div>
    </section>
  );
}
