"use client";

import { NavDropdown } from "@/app/_components/nav-dropdown";
import {
  labelFor,
  navChromeClass,
  type NavLabels,
} from "@/app/_components/nav-helpers";
import { mainNav } from "@/lib/navigation";
import Link from "next/link";

type Props = {
  labels: NavLabels;
  tone?: "default" | "onTeal";
};

export function SiteNav({ labels, tone = "default" }: Props) {
  const overlay = tone === "onTeal";

  return (
    <nav
      className="flex flex-nowrap items-center justify-start gap-x-3 whitespace-nowrap xl:gap-x-4 2xl:gap-x-5"
      aria-label={labels.mainAria}
    >
      {mainNav.map((item) => {
        if (item.children?.length) {
          return (
            <NavDropdown
              key={item.href}
              item={item}
              labels={labels}
              tone={tone}
            />
          );
        }

        return (
          <Link
            key={item.href}
            href={item.href}
            className={navChromeClass({ overlay })}
          >
            {labelFor(item.id, labels)}
          </Link>
        );
      })}
    </nav>
  );
}
