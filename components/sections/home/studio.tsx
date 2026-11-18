import Image from "next/image";
import { HeartHandshake, Layers, Wrench } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";

const values = [
  {
    icon: HeartHandshake,
    title: "People-first collaboration",
    description:
      "You work directly with the people building your product — no account-manager relay.",
  },
  {
    icon: Layers,
    title: "Practical, business-focused solutions",
    description:
      "Technology chosen for the problem and the budget, never for the trend.",
  },
  {
    icon: Wrench,
    title: "Long-term technology support",
    description:
      "We stay accountable after launch — maintenance, monitoring and honest advice.",
  },
];

/** Ivory section: the studio, human and concise. */
export function Studio() {
  return (
    <section id="about" className="scroll-mt-20">
      <Container className="section-pad grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
        {/* Photography */}
        <Reveal y={36}>
          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-cream">
              <Image
                src="/images/company/business-partnership.jpg"
                alt="Two colleagues celebrating a milestone at a desk"
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
            </div>
            <div
              aria-hidden
              className="absolute -top-3 -right-3 h-8 w-16 -skew-x-[24deg] bg-terracotta"
            />
          </div>
        </Reveal>

        {/* Positioning */}
        <div>
          <Reveal>
            <p className="eyebrow text-terracotta">The studio</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-4 font-display text-display-md font-medium text-ink">
              A product engineering partner, not just a vendor.
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-ink-soft">
              We&apos;re a team of designers, engineers and problem-solvers who
              enjoy turning complex ideas into simple, scalable software — and
              sticking around to keep it excellent.
            </p>
          </Reveal>

          <div className="mt-10">
            {values.map(({ icon: Icon, title, description }, i) => (
              <Reveal key={title} delay={0.1 + i * 0.07}>
                <div className="flex items-start gap-4 border-t border-line py-5 last:pb-0">
                  <span className="mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-full bg-cobalt-wash text-cobalt">
                    <Icon aria-hidden className="size-5" strokeWidth={1.7} />
                  </span>
                  <div>
                    <h3 className="font-medium text-ink">{title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-ink-soft">
                      {description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
