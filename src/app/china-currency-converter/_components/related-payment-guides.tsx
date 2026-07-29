import Link from "next/link";
import { affiliatePath } from "@/lib/affiliates/links";

const related = [
  {
    href: "/payments-in-china",
    title: "Payments in China hub",
    blurb: "Alipay, WeChat Pay, cash backup, and failure fixes in one place.",
  },
  {
    href: "/digital-survival-china-payment-guide",
    title: "How to pay in China as a foreigner",
    blurb: "Full payment overview before you land — apps, fees, and cash.",
  },
  {
    href: "/alipay-for-foreigners-china",
    title: "Alipay for foreigners",
    blurb: "Often the easiest first mobile wallet for international cards.",
  },
  {
    href: "/wechat-pay-for-foreigners-china",
    title: "WeChat Pay for foreigners",
    blurb: "Strong backup wallet for shops that prefer WeChat QR codes.",
  },
];

export function RelatedPaymentGuides() {
  return (
    <section className="mb-12 md:mb-16" aria-labelledby="related-payments">
      <h2
        id="related-payments"
        className="mb-3 text-xl font-light tracking-wide text-[var(--brand-ink)] md:text-2xl"
      >
        Next: get ready to pay in China
      </h2>
      <p className="mb-6 max-w-2xl text-sm font-light leading-relaxed text-[var(--brand-ink-muted)]">
        Knowing the yuan rate is only half the job. Set up mobile payment and a
        cash backup so everyday purchases feel routine.
      </p>
      <ul className="grid gap-4 sm:grid-cols-2">
        {related.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="surface-card block h-full bg-[var(--brand-surface)] p-5 transition-colors hover:bg-[var(--brand-soft)]"
            >
              <span className="mb-2 block text-sm font-light tracking-wide text-[var(--brand-cta)]">
                {item.title}
              </span>
              <span className="text-sm font-light leading-relaxed text-[var(--brand-ink-muted)]">
                {item.blurb}
              </span>
            </Link>
          </li>
        ))}
      </ul>

      <div className="surface-card mt-6 bg-[var(--brand-soft)] p-5 sm:p-6">
        <h3 className="mb-2 text-sm font-light tracking-wide text-[var(--brand-ink)]">
          Need a better FX rate before you travel?
        </h3>
        <p className="mb-3 text-sm font-light leading-relaxed text-[var(--brand-ink-muted)]">
          Some travelers move money with{" "}
          <Link
            href={affiliatePath("wise")}
            className="underline underline-offset-4 hover:text-[var(--brand-cta)]"
            rel="nofollow sponsored"
          >
            Wise
          </Link>{" "}
          ahead of the trip for clearer mid-market pricing versus airport cash
          desks. Compare fees for your corridor before you commit.
        </p>
        <p className="text-xs font-light text-[var(--brand-muted)]">
          This post contains affiliate links at no extra cost to you.
        </p>
      </div>
    </section>
  );
}
