import { createHubMetadata, HubRoutePage } from "@/lib/hubs/route";

const SLUG = "maps-navigation-in-china";

export const generateMetadata = () => createHubMetadata(SLUG);

export default function Page() {
  return <HubRoutePage slug={SLUG} />;
}
