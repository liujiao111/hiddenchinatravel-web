import { FloatingDock } from "@/app/_components/floating-dock";

type Props = {
  children: React.ReactNode;
  header: React.ReactNode;
  footer: React.ReactNode;
};

/** Server chrome shell — floating dock is the only client boundary here. */
export function ConditionalSiteChrome({ children, header, footer }: Props) {
  return (
    <div className="flex min-h-screen flex-col">
      {header}
      <div className="flex-1">{children}</div>
      {footer}
      <FloatingDock />
    </div>
  );
}
