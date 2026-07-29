"use client";

import {
  CURRENCIES,
  DEFAULT_FROM,
  DEFAULT_TO,
  ILLUSTRATIVE_MARKUPS,
  QUICK_CNY_AMOUNTS,
  QUICK_FOREIGN_AMOUNTS,
  type CurrencyCode,
} from "@/lib/currency-converter/currencies";
import {
  convertAmount,
  formatMoney,
  formatUnitRate,
  type ExchangeRatesPayload,
  type ExchangeRatesResult,
} from "@/lib/currency-converter/get-rates";
import { useMemo, useState, useTransition } from "react";
import { CurrencySelect } from "./currency-select";

type Props = {
  initialRates: ExchangeRatesPayload;
};

function parseAmount(raw: string): number {
  const cleaned = raw.replace(/,/g, "").trim();
  if (!cleaned) return 0;
  const n = Number(cleaned);
  return Number.isFinite(n) ? n : NaN;
}

function pairForeign(from: CurrencyCode, to: CurrencyCode): CurrencyCode {
  if (from !== "CNY") return from;
  if (to !== "CNY") return to;
  return "USD";
}

export function CurrencyConverterTool({ initialRates }: Props) {
  const [rates, setRates] = useState(initialRates);
  const [from, setFrom] = useState<CurrencyCode>(DEFAULT_FROM);
  const [to, setTo] = useState<CurrencyCode>(DEFAULT_TO);
  const [amountRaw, setAmountRaw] = useState("100");
  const [isPending, startTransition] = useTransition();
  const [refreshError, setRefreshError] = useState<string | null>(null);

  const amount = parseAmount(amountRaw);
  const live = rates.ok ? rates : null;
  const foreign = pairForeign(from, to);

  const converted = useMemo(() => {
    if (!live || !Number.isFinite(amount)) return NaN;
    return convertAmount(amount, from, to, live.cnyPerUnit);
  }, [amount, from, to, live]);

  const midCny =
    live && Number.isFinite(amount)
      ? convertAmount(amount, from, "CNY", live.cnyPerUnit)
      : NaN;

  function swap() {
    setFrom(to);
    setTo(from);
  }

  function refresh() {
    setRefreshError(null);
    startTransition(async () => {
      try {
        const res = await fetch("/api/exchange-rates", { cache: "no-store" });
        const data = (await res.json()) as ExchangeRatesPayload;
        setRates(data);
        if (!data.ok) setRefreshError(data.error);
      } catch {
        setRefreshError("Could not refresh rates. Please try again.");
      }
    });
  }

  return (
    <section
      className="surface-card mb-12 bg-[var(--brand-surface)] p-5 sm:p-8 md:mb-16 md:p-10"
      aria-labelledby="converter-heading"
    >
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2
            id="converter-heading"
            className="text-lg font-light tracking-wide text-[var(--brand-ink)] md:text-xl"
          >
            Convert USD ↔ CNY (and more)
          </h2>
          <p className="mt-1 text-sm font-light text-[var(--brand-ink-muted)]">
            Mid-market reference for trip budgeting — not a bank quote.
          </p>
        </div>
        <div className="sm:text-right">
          <button
            type="button"
            onClick={refresh}
            disabled={isPending}
            className="btn-brand-outline shrink-0 px-4 py-2 text-sm disabled:opacity-60"
          >
            {isPending ? "Refreshing…" : "Refresh rates"}
          </button>
          <p className="mt-1.5 max-w-[16rem] text-[11px] font-light leading-snug text-[var(--brand-muted)] sm:ml-auto">
            Rates refresh about hourly. This pulls the latest cached feed — not
            tick-by-tick market data.
          </p>
        </div>
      </div>

      {!rates.ok ? (
        <div
          role="alert"
          className="mb-6 rounded-sm border border-[color-mix(in_srgb,var(--brand-coral)_35%,transparent)] bg-[color-mix(in_srgb,var(--brand-coral)_8%,white)] px-4 py-3 text-sm font-light text-[var(--brand-ink)]"
        >
          {rates.error}
        </div>
      ) : null}
      {refreshError ? (
        <p
          role="status"
          className="mb-4 text-sm font-light text-[var(--brand-coral)]"
        >
          {refreshError}
        </p>
      ) : null}

      <div className="grid gap-4 md:grid-cols-[1fr_auto_1fr] md:items-end">
        <CurrencyField
          id="amount-from"
          label="Amount"
          amountRaw={amountRaw}
          onAmountChange={setAmountRaw}
          currency={from}
          onCurrencyChange={setFrom}
        />
        <button
          type="button"
          onClick={swap}
          className="mx-auto flex h-12 w-12 items-center justify-center rounded-sm border border-[color-mix(in_srgb,var(--brand-cream-border)_50%,transparent)] text-lg text-[var(--brand-cta)] transition-colors hover:bg-[var(--brand-soft)]"
          aria-label="Swap currencies"
        >
          ⇄
        </button>
        <CurrencyField
          id="amount-to"
          label="Converted"
          amountRaw={
            Number.isFinite(converted) ? String(roundDisplay(converted, to)) : ""
          }
          onAmountChange={() => undefined}
          currency={to}
          onCurrencyChange={setTo}
          readOnly
        />
      </div>

      {live && Number.isFinite(converted) ? (
        <p className="mt-5 text-center text-base font-light text-[var(--brand-ink)] md:text-lg">
          <span className="text-[var(--brand-ink-muted)]">
            {formatMoney(amount, from)} ≈{" "}
          </span>
          <strong className="font-medium text-[var(--brand-cta)]">
            {formatMoney(converted, to)}
          </strong>
        </p>
      ) : null}

      {live ? <RateMeta rates={live} from={from} to={to} /> : null}

      {live && Number.isFinite(midCny) && from !== "CNY" ? (
        <MarkupCompare midCny={midCny} amount={amount} from={from} />
      ) : null}

      {live ? <QuickTable rates={live} foreign={foreign} /> : null}
    </section>
  );
}

function roundDisplay(n: number, code: CurrencyCode): number {
  const digits = code === "JPY" || code === "KRW" ? 0 : 2;
  const f = 10 ** digits;
  return Math.round(n * f) / f;
}

function CurrencyField({
  id,
  label,
  amountRaw,
  onAmountChange,
  currency,
  onCurrencyChange,
  readOnly,
}: {
  id: string;
  label: string;
  amountRaw: string;
  onAmountChange: (v: string) => void;
  currency: CurrencyCode;
  onCurrencyChange: (c: CurrencyCode) => void;
  readOnly?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-2 block text-xs font-light uppercase tracking-[0.14em] text-[var(--brand-muted)]"
      >
        {label}
      </label>
      <div className="flex gap-2">
        <input
          id={id}
          inputMode="decimal"
          readOnly={readOnly}
          value={amountRaw}
          onChange={(e) => onAmountChange(e.target.value)}
          className="min-w-0 flex-1 rounded-sm border border-[color-mix(in_srgb,var(--brand-cream-border)_55%,transparent)] bg-white px-3 py-3 text-base font-light text-[var(--brand-ink)] outline-none ring-[var(--brand-cta)] focus:ring-1 read-only:bg-[var(--brand-soft)]"
        />
        <CurrencySelect
          aria-label={`${label} currency`}
          value={currency}
          onChange={onCurrencyChange}
        />
      </div>
    </div>
  );
}

function RateMeta({
  rates,
  from,
  to,
}: {
  rates: ExchangeRatesResult;
  from: CurrencyCode;
  to: CurrencyCode;
}) {
  const forward =
    from === to ? 1 : convertAmount(1, from, to, rates.cnyPerUnit);
  const reverse =
    from === to ? 1 : convertAmount(1, to, from, rates.cnyPerUnit);
  const updated = new Date(rates.fetchedAt);

  return (
    <div className="mt-6 border-t border-[color-mix(in_srgb,var(--brand-cream-border)_40%,transparent)] pt-4 text-sm font-light text-[var(--brand-ink-muted)]">
      <p className="text-[var(--brand-ink)]">
        1 {from} ≈{" "}
        <span className="font-medium">{formatUnitRate(forward, to)}</span>
        <span className="mx-2 text-[var(--brand-muted)]">·</span>
        1 {to} ≈{" "}
        <span className="font-medium">{formatUnitRate(reverse, from)}</span>
      </p>
      <p className="mt-1">
        Rates updated{" "}
        <time dateTime={rates.fetchedAt}>
          {updated.toLocaleString("en-US", {
            dateStyle: "medium",
            timeStyle: "short",
            timeZone: "UTC",
          })}{" "}
          UTC
        </time>
        {" · "}
        Source: {rates.source}
        {rates.rateDate ? ` · Feed date ${rates.rateDate}` : null}
      </p>
    </div>
  );
}

function MarkupCompare({
  midCny,
  amount,
  from,
}: {
  midCny: number;
  amount: number;
  from: CurrencyCode;
}) {
  return (
    <div className="mt-8 rounded-sm border border-[color-mix(in_srgb,var(--brand-cream-border)_45%,transparent)] bg-[var(--brand-soft)] p-4 sm:p-5">
      <h3 className="mb-2 text-sm font-light tracking-wide text-[var(--brand-ink)]">
        Mid-market vs typical cash markup
      </h3>
      <p className="mb-4 text-sm font-light leading-relaxed text-[var(--brand-ink-muted)]">
        Official mid-market is a reference. ATM withdrawals and airport desks
        often add a spread — so {formatMoney(amount, from)} may buy fewer yuan
        in cash than the converter shows.
      </p>
      <ul className="space-y-2 text-sm font-light">
        <li className="flex flex-wrap items-baseline justify-between gap-2">
          <span className="text-[var(--brand-ink-muted)]">
            Mid-market (this tool)
          </span>
          <span className="text-[var(--brand-ink)]">
            {formatMoney(midCny, "CNY")}
          </span>
        </li>
        {ILLUSTRATIVE_MARKUPS.map((row) => {
          const adjusted = midCny * (1 - row.pct / 100);
          return (
            <li
              key={row.id}
              className="flex flex-wrap items-baseline justify-between gap-2"
            >
              <span className="text-[var(--brand-ink-muted)]">
                {row.label} (~{row.pct}% worse)
              </span>
              <span className="text-[var(--brand-ink)]">
                ~{formatMoney(adjusted, "CNY")}
              </span>
            </li>
          );
        })}
      </ul>
      <p className="mt-3 text-xs font-light text-[var(--brand-muted)]">
        Markup examples are illustrative averages for planning — your bank,
        network, and machine fees vary.
      </p>
    </div>
  );
}

function QuickTable({
  rates,
  foreign,
}: {
  rates: ExchangeRatesResult;
  foreign: CurrencyCode;
}) {
  const foreignName =
    CURRENCIES.find((c) => c.code === foreign)?.name ?? foreign;

  return (
    <div className="mt-8 space-y-8">
      <div>
        <h3 className="mb-1 text-sm font-light tracking-wide text-[var(--brand-ink)]">
          Quick cheat sheet: CNY → {foreign}
        </h3>
        <p className="mb-3 text-xs font-light text-[var(--brand-muted)]">
          Follows your selected pair ({foreignName}). Useful for “how much is
          100 yuan in {foreign}?”
        </p>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[20rem] border-collapse text-left text-sm font-light">
            <thead>
              <tr className="border-b border-[color-mix(in_srgb,var(--brand-cream-border)_45%,transparent)] text-[var(--brand-muted)]">
                <th className="py-2 pr-4 font-light">CNY (RMB)</th>
                <th className="py-2 font-light">{foreign} approx.</th>
              </tr>
            </thead>
            <tbody>
              {QUICK_CNY_AMOUNTS.map((cny) => {
                const foreignAmt = convertAmount(
                  cny,
                  "CNY",
                  foreign,
                  rates.cnyPerUnit,
                );
                return (
                  <tr
                    key={cny}
                    className="border-b border-[color-mix(in_srgb,var(--brand-cream-border)_28%,transparent)]"
                  >
                    <td className="py-2.5 pr-4 text-[var(--brand-ink)]">
                      {formatMoney(cny, "CNY")}
                    </td>
                    <td className="py-2.5 text-[var(--brand-ink)]">
                      {formatMoney(foreignAmt, foreign)}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <h3 className="mb-1 text-sm font-light tracking-wide text-[var(--brand-ink)]">
          Quick cheat sheet: {foreign} → CNY
        </h3>
        <p className="mb-3 text-xs font-light text-[var(--brand-muted)]">
          Reverse direction for budgeting cash before you land.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[20rem] border-collapse text-left text-sm font-light">
            <thead>
              <tr className="border-b border-[color-mix(in_srgb,var(--brand-cream-border)_45%,transparent)] text-[var(--brand-muted)]">
                <th className="py-2 pr-4 font-light">{foreign}</th>
                <th className="py-2 font-light">CNY approx.</th>
              </tr>
            </thead>
            <tbody>
              {QUICK_FOREIGN_AMOUNTS.map((amt) => {
                const cnyAmt = convertAmount(
                  amt,
                  foreign,
                  "CNY",
                  rates.cnyPerUnit,
                );
                return (
                  <tr
                    key={amt}
                    className="border-b border-[color-mix(in_srgb,var(--brand-cream-border)_28%,transparent)]"
                  >
                    <td className="py-2.5 pr-4 text-[var(--brand-ink)]">
                      {formatMoney(amt, foreign)}
                    </td>
                    <td className="py-2.5 text-[var(--brand-ink)]">
                      {formatMoney(cnyAmt, "CNY")}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
