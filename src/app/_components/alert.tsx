import Container from "@/app/_components/container";
import { EXAMPLE_PATH } from "@/lib/constants";
import cn from "classnames";

type Props = {
  preview?: boolean;
};

const Alert = ({ preview }: Props) => {
  return (
    <div
      className={cn("border-b border-[color-mix(in_srgb,var(--brand-cream-border)_40%,transparent)]", {
        "bg-[var(--brand-ink)] text-[var(--brand-on)]": preview,
        "bg-[var(--brand-soft)] text-[var(--brand-ink-muted)]": !preview,
      })}
    >
      <Container>
        <div className="py-2 text-center text-sm font-light">
          {preview ? (
            <>
              This page is a preview.{" "}
              <a
                href="/api/exit-preview"
                className="underline transition-colors duration-300 hover:text-[var(--brand-warm)]"
              >
                Click here
              </a>{" "}
              to exit preview mode.
            </>
          ) : (
            <>
              The source code for this blog is{" "}
              <a
                href={`https://github.com/vercel/next.js/tree/canary/examples/${EXAMPLE_PATH}`}
                className="underline transition-colors duration-300 hover:text-[var(--brand-cta)]"
              >
                available on GitHub
              </a>
              .
            </>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Alert;
