import { createHubMetadata, HubRoutePage } from "@/lib/hubs/route";

const SLUG = "china-itinerary-planning";

export const generateMetadata = () => createHubMetadata(SLUG);

export default function Page() {
  return <HubRoutePage slug={SLUG} />;
}
