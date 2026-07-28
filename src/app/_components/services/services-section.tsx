import { AddonBonusBanner } from "@/app/_components/services/addon-bonus-banner";
import { AddonRequestForm } from "@/app/_components/services/addon-request-form";
import { CoreServiceCard } from "@/app/_components/services/core-service-card";
import { DifferentiatorSection } from "@/app/_components/services/differentiator-section";
import { SecondaryServicesGrid } from "@/app/_components/services/secondary-services-grid";
import { ServicesFaq } from "@/app/_components/services/services-faq";
import { ServicesTransitionHeading } from "@/app/_components/services/services-transition-heading";
import Container from "@/app/_components/container";
import { servicesHero } from "@/lib/services/content";

export function ServicesSection() {
  return (
    <>
      <section className="border-b border-[color-mix(in_srgb,var(--brand-cta)_12%,transparent)] bg-[var(--brand-cta)] py-12 md:py-16">
        <Container>
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand-mango)]">
            {servicesHero.eyebrow}
          </p>
          <h1 className="max-w-3xl text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
            {servicesHero.title}
          </h1>
          <p className="mt-4 max-w-2xl text-sm font-normal leading-relaxed text-white/85 md:text-base">
            {servicesHero.subtitle}
          </p>
        </Container>
      </section>

      <section className="bg-[var(--brand-cream)] py-12 md:py-16 lg:py-20">
        <Container>
          <div className="space-y-10 md:space-y-12">
            {/* CoreServiceSection */}
            <div className="space-y-5">
              <CoreServiceCard />
              <AddonBonusBanner />
            </div>

            <DifferentiatorSection />

            {/* Secondary add-ons */}
            <div className="space-y-6 md:space-y-8">
              <ServicesTransitionHeading />
              <SecondaryServicesGrid />
            </div>

            {/* Contact-form CTA targets */}
            <div className="grid gap-5 lg:grid-cols-2">
              <AddonRequestForm
                id="consultation-form"
                serviceId="itinerary-review"
                title="Book an itinerary review"
                intro="Tell us what you already have planned — we'll reply with next steps and a time slot."
              />
              <AddonRequestForm
                id="booking-form"
                serviceId="booking-assistance"
                title="Request booking help"
                intro="Share what you need booked (flights, hotels, tickets). We'll confirm fees before charging."
              />
            </div>

            <ServicesFaq />
          </div>
        </Container>
      </section>
    </>
  );
}
