import { ReactNode } from "react";
import cn from "classnames";

type Props = {
  children?: ReactNode;
  className?: string;
};

export function PostTitle({ children, className }: Props) {
  return (
    <h1
      className={cn(
        "text-center font-serif text-2xl font-bold leading-tight tracking-tight text-[var(--brand-ink)] md:text-left md:text-4xl",
        className ?? "mb-12",
      )}
    >
      {children}
    </h1>
  );
}
