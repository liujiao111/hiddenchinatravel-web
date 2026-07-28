import { ServiceCard } from "@/app/_components/services/service-card";
import {
  secondaryServices,
  type ServiceCardProps,
} from "@/lib/services/secondary-services";

type Props = {
  services?: ServiceCardProps[];
};

/** Full-width stacked cards on mobile; 2-up grid from `md`. */
export function SecondaryServicesGrid({
  services = secondaryServices,
}: Props) {
  return (
    <ul className="mx-auto grid max-w-4xl grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
      {services.map((service) => (
        <li key={service.id} className="min-w-0">
          <ServiceCard {...service} />
        </li>
      ))}
    </ul>
  );
}
