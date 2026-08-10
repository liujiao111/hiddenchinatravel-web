import { BackToTop } from "@/app/_components/back-to-top";

type Props = {
  children: React.ReactNode;
  header: React.ReactNode;
  footer: React.ReactNode;
};

/** Server chrome shell — only BackToTop needs a client boundary. */
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
