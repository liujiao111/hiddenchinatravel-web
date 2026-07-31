"use client";

import { BackToTop } from "@/app/_components/back-to-top";

type Props = {
  children: React.ReactNode;
  header: React.ReactNode;
  footer: React.ReactNode;
};

export function ConditionalSiteChrome({ children, header, footer }: Props) {
  return (
    <>
      {header}
      {children}
      {footer}
      <BackToTop />
    </>
  );
}
