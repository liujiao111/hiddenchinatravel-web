import { createHubMetadata, HubRoutePage } from "@/lib/hubs/route";

const SLUG = "china-travel-essentials";

export const generateMetadata = () => createHubMetadata(SLUG);

export default function Page() {
  return <HubRoutePage slug={SLUG} />;
}
