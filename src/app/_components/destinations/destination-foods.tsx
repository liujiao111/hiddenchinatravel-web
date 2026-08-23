import Container from "@/app/_components/container";
import { DestinationPhotoSlot } from "@/app/_components/destinations/destination-photo-slot";
import { DestinationSectionHeading } from "@/app/_components/destinations/destination-section-heading";
import type { DestinationFood, DestinationSectionCopy } from "@/lib/destinations/types";
import cn from "classnames";

type Props = {
  foods: DestinationFood[];
  heading: DestinationSectionCopy;
};

export function DestinationFoods({ foods, heading }: Props) {
  return (
    <section
      id="food"
      className="scroll-mt-28 bg-white py-12 md:py-20 lg:py-28"
    >
      <Container>
        <DestinationSectionHeading
          eyebrow={heading.eyebrow}
          title={heading.title}
          intro={heading.intro}
        />
        <ul className="space-y-12 md:space-y-16">
          {foods.map((food, index) => {
            const reverse = index % 2 === 1;
            return (
              <li
                key={food.id}
                className={cn(
                  "grid items-center gap-6 md:grid-cols-2 md:gap-10",
                )}
              >
                <div className={cn("group", reverse && "md:order-2")}>
                  <DestinationPhotoSlot
                    photo={food.photo}
                    sizes="(max-width: 768px) 100vw, 40vw"
                  />
                </div>
                <div className={cn(reverse && "md:order-1")}>
                  {food.localName ? (
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--brand-mango)]">
                      {food.localName}
                    </p>
                  ) : null}
                  <h3 className="mt-1 font-serif text-xl font-bold tracking-tight text-[var(--brand-ink)] md:text-2xl">
                    {food.name}
                  </h3>
                  <p className="mt-3 max-w-md text-sm font-normal leading-relaxed text-[var(--brand-ink-muted)] md:text-base">
                    {food.body}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
