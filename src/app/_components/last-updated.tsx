import { format, parseISO } from "date-fns";
import cn from "classnames";

type Props = {
  /** ISO date string, e.g. 2026-07-24 */
  date: string;
  label?: string;
  className?: string;
};

/** Compact “Last updated” line for page chrome and content footers */
export function LastUpdated({
  date,
  label = "Last updated",
  className,
}: Props) {
  const parsed = parseISO(date);
  const display = Number.isNaN(parsed.getTime())
    ? date
    : format(parsed, "MMMM d, yyyy");

  return (
    <p
      className={cn(
        "text-sm font-light text-[var(--brand-muted)]",
        className,
      )}
    >
      {label}{" "}
      <time dateTime={date} className="font-light text-[var(--brand-ink-muted)]">
        {display}
      </time>
    </p>
  );
}
