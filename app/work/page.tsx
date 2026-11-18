import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import { KalanesthamScreen, ProSmashScreen } from "@/components/services/dev/screens";
import { LaptopFrame, SummitCta } from "@/components/services/dev/ui";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected projects engineered by Antelspark — real products for real businesses.",
};

const cases = [
  {
    name: "ProSmash",
    kind: "B2B sports commerce platform",
    photo: "/images/work/prosmash.jpg",
    photoAlt: "Weathered cricket ball resting on grass",
    screen: <ProSmashScreen />,
    summary:
      "A wholesale sports-equipment commerce platform built for schools, academies and retailers — B2B buying with the ease of a consumer store.",
    delivered: [
      "Multi-user B2B accounts",
      "Custom pricing & discounts",
      "Admin operations console",
      "Scalable & secure architecture",
    ],
    services: ["E-commerce Development", "Custom Software Development"],
  },
  {
    name: "Kalanestham",
    kind: "Art & heritage commerce",
    photo: "/images/work/kalanestham.jpg",
    photoAlt: "Artist's studio table crowded with brushes and paints",
    screen: <KalanesthamScreen />,
    summary:
      "A premium commerce platform bringing traditional Indian artistry to a wider audience — from brand identity to catalogue to checkout.",
    delivered: [
      "Bespoke design & experience",
      "Product catalogue & collections",
      "Mobile-first & responsive",
      "SEO & performance optimised",
    ],
    services: ["Branding & Identity", "Website Development"],
  },
];

export default function WorkPage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-line">
        <Container className="pt-32 pb-14 md:pt-40">
          <Reveal>
            <p className="eyebrow text-cobalt">Selected work</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-5 max-w-3xl font-display text-display-lg font-semibold text-ink">
              Real products, for real businesses
              <span className="text-terracotta">.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
              We&apos;d rather show two projects honestly than twenty vaguely.
              Here&apos;s what we&apos;ve engineered — more case studies join
              this page as new partnerships go live.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Case entries */}
      {cases.map((project, index) => (
        <section
          key={project.name}
          className={index % 2 === 1 ? "border-t border-line bg-white" : ""}
        >
          <Container className="py-16 md:py-20">
            <div
              className={`grid items-center gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16 ${
                index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div>
                <Reveal>
                  <p className="font-mono text-xs tracking-[0.14em] text-terracotta uppercase">
                    {String(index + 1).padStart(2, "0")} — {project.kind}
                  </p>
                  <h2 className="mt-3 font-display text-display-md font-medium text-ink">
                    {project.name}
                  </h2>
                </Reveal>
                <Reveal delay={0.08}>
                  <p className="mt-5 max-w-lg text-lg leading-relaxed text-ink-soft">
                    {project.summary}
                  </p>
                </Reveal>
                <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                  {project.delivered.map((item, i) => (
                    <Reveal key={item} delay={0.12 + i * 0.04}>
                      <li className="flex items-start gap-2.5">
                        <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-cobalt text-white">
                          <Check aria-hidden className="size-3" strokeWidth={3} />
                        </span>
                        <span className="text-sm font-medium text-ink">{item}</span>
                      </li>
                    </Reveal>
                  ))}
                </ul>
                <Reveal delay={0.25}>
                  <div className="mt-7 flex flex-wrap gap-2">
                    {project.services.map((service) => (
                      <span
                        key={service}
                        className="rounded-full border border-line bg-ivory px-3.5 py-1.5 font-mono text-xs text-ink-soft"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </Reveal>
              </div>

              <Reveal delay={0.15} y={36}>
                <div className="relative">
                  <div className="relative aspect-[16/10] overflow-hidden rounded-2xl">
                    <Image
                      src={project.photo}
                      alt={project.photoAlt}
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <LaptopFrame className="absolute -bottom-8 left-1/2 w-[75%] max-w-sm -translate-x-1/2">
                    {project.screen}
                  </LaptopFrame>
                  <div aria-hidden className="h-16" />
                </div>
              </Reveal>
            </div>
          </Container>
        </section>
      ))}

      {/* Your project here */}
      <section className="border-t border-line">
        <Container className="flex flex-col items-start gap-6 py-14 md:flex-row md:items-center md:justify-between md:py-16">
          <Reveal>
            <h2 className="max-w-lg font-display text-display-sm font-medium text-ink">
              The next entry on this page could be yours.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Button asChild size="lg">
              <Link href="/contact">
                Start a project
                <ArrowUpRight aria-hidden />
              </Link>
            </Button>
          </Reveal>
        </Container>
      </section>

      <SummitCta
        eyebrow="Let's build together"
        heading="Have something worth building?"
        copy="Tell us about your goals — we'll bring the design and engineering to make them real."
      />
    </>
  );
}
