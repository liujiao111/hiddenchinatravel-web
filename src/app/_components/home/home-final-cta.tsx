import Container from "@/app/_components/container";
import { getWhatsAppHref } from "@/lib/whatsapp";

export function HomeFinalCta() {
  return (
    <section className="bg-[var(--brand-ink)] py-14 text-white md:py-20 lg:py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Ready to Start the Conversation?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/80 md:text-lg">
            Whether you&apos;re planning your first trip to China or exploring
            Yunnan in more depth, we&apos;re happy to help.
          </p>
          <a
            href={getWhatsAppHref()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-brand mt-8 inline-flex px-8 py-3.5 text-sm"
          >
            Chat on WhatsApp
          </a>
        </div>
      </Container>
    </section>
  );
}
