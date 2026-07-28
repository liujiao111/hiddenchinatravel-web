"use client";

import { BackToTop } from "@/app/_components/back-to-top";
import { usePathname } from "next/navigation";

type Props = {
  children: React.ReactNode;
  header: React.ReactNode;
  footer: React.ReactNode;
};

/** Skip global site chrome on /preview/* design mocks */
export function ConditionalSiteChrome({ children, header, footer }: Props) {
  const pathname = usePathname();
  const isPreview = pathname.startsWith("/preview");

  if (isPreview) {
    return <>{children}</>;
  }

  return (
    <>
      {header}
      {children}
      {footer}
      <BackToTop />
    </>
  );
}
