import Link from "next/link";

export function ConverterGuideCopy() {
  return (
    <section
      className="prose-like mb-12 max-w-3xl md:mb-16"
      aria-labelledby="how-to-use-rates"
    >
      <h2
        id="how-to-use-rates"
        className="mb-4 text-xl font-light tracking-wide text-[var(--brand-ink)] md:text-2xl"
      >
        How to use China exchange rates as a visitor
      </h2>
      <div className="space-y-4 text-sm font-light leading-relaxed text-[var(--brand-ink-muted)] md:text-base">
        <p>
          Searching for a{" "}
          <strong className="font-medium text-[var(--brand-ink)]">
            CNY to USD converter
          </strong>{" "}
          or “how much is 100 yuan in dollars” usually means you are budgeting
          hotels, food, and transport before a China trip. This tool covers both
          directions:{" "}
          <strong className="font-medium text-[var(--brand-ink)]">
            USD to CNY
          </strong>{" "}
          (default) and the reverse CNY → foreign rate in the unit line and
          cheat sheets. Use the mid-market figure as a reference, then assume
          cash desks and some ATMs will be worse.
        </p>
        <p>
          In cities, most day-to-day spending runs through{" "}
          <Link
            href="/alipay-for-foreigners-china"
            className="underline underline-offset-4 hover:text-[var(--brand-cta)]"
          >
            Alipay
          </Link>{" "}
          or{" "}
          <Link
            href="/wechat-pay-for-foreigners-china"
            className="underline underline-offset-4 hover:text-[var(--brand-cta)]"
          >
            WeChat Pay
          </Link>{" "}
          with a foreign card. Card FX is often closer to mid-market than
          airport exchange — but your bank may still add a foreign-transaction
          fee. Read the full flow in our{" "}
          <Link
            href="/digital-survival-china-payment-guide"
            className="underline underline-offset-4 hover:text-[var(--brand-cta)]"
          >
            China payment guide for foreigners
          </Link>
          .
        </p>
        <p>
          For cash, prefer major-bank ATMs (ICBC, Bank of China) with an English
          menu over airport or hotel counters when you can. Keep a small RMB
          float for edge cases, and treat the converter’s yuan amounts as a
          planning target — not a guaranteed withdrawal quote. More setup steps
          live on the{" "}
          <Link
            href="/payments-in-china"
            className="underline underline-offset-4 hover:text-[var(--brand-cta)]"
          >
            Payments in China hub
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
