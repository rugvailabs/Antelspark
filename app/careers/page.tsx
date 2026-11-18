import type { Metadata } from "next";
import Image from "next/image";
import {
  ArrowUpRight,
  HeartHandshake,
  Layers,
  Lightbulb,
  Users,
  type LucideIcon,
} from "lucide-react";

import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Build what's next with Antelspark — engineers, designers and problem-solvers welcome.",
};

const culture: { icon: LucideIcon; title: string; body: string }[] = [
  {
    icon: Users,
    title: "Small teams, real ownership",
    body: "You work directly with clients and ship things with your name on them — no layers between you and the work.",
  },
  {
    icon: Layers,
    title: "Craft over churn",
    body: "We'd rather build fewer things properly than many things barely. Code review, design critique and time to do it right.",
  },
  {
    icon: Lightbulb,
    title: "Learn across disciplines",
    body: "Engineers sit with designers, designers sit with strategy. The best people here are curious outside their lane.",
  },
  {
    icon: HeartHandshake,
    title: "Honesty as a habit",
    body: "With clients and with each other — estimates, mistakes and all. It's the trait we hire for hardest.",
  },
];

export default function CareersPage() {
  return (
    <>
      {/* Hero */}
      <section className="overflow-hidden border-b border-line">
        <Container className="grid items-center gap-12 pt-32 pb-14 md:pt-40 lg:grid-cols-[1fr_1.05fr]">
          <div>
            <Reveal>
              <p className="eyebrow text-cobalt">Careers</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="mt-5 font-display text-display-lg font-semibold text-ink">
                Build what&apos;s next, with us
                <span className="text-terracotta">.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-ink-soft">
                We&apos;re a small team of engineers, designers and
                problem-solvers who like our work excellent and our
                collaboration human.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.18} y={36}>
            <div className="relative aspect-[16/11] overflow-hidden rounded-b-[2rem] rounded-t-[7rem]">
              <Image
                src="/images/dev/engineering-office.jpg"
                alt="A busy engineering office at work"
                fill
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Culture */}
      <section>
        <Container className="py-16 md:py-20">
          <Reveal>
            <p className="eyebrow text-terracotta">How it feels to work here</p>
            <h2 className="mt-4 max-w-xl font-display text-display-md font-medium text-ink">
              The things we actually care about.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-x-12 gap-y-10 sm:grid-cols-2">
            {culture.map(({ icon: Icon, title, body }, i) => (
              <Reveal key={title} delay={Math.min(i * 0.06, 0.25)}>
                <div className="border-t-2 border-ink/80 pt-5">
                  <Icon aria-hidden className="size-6 text-cobalt" strokeWidth={1.7} />
                  <h3 className="mt-3 font-display text-xl font-medium text-ink">
                    {title}
                  </h3>
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-ink-soft">
                    {body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Open roles — honest */}
      <section className="border-y border-line bg-white">
        <Container className="py-16 md:py-18">
          <div className="mx-auto max-w-2xl rounded-3xl bg-cobalt-wash/70 p-8 text-center sm:p-12">
            <Reveal>
              <p className="eyebrow text-cobalt">Open roles</p>
              <h2 className="mt-4 font-display text-display-sm font-medium text-ink">
                No openings posted right now — but good people are never bad
                timing.
              </h2>
              <p className="mx-auto mt-4 max-w-md leading-relaxed text-ink-soft">
                If the way we work resonates, introduce yourself: a few lines
                about you and something you&apos;ve built or designed that
                you&apos;re proud of.
              </p>
              <Button asChild size="lg" className="mt-7">
                <a href={`mailto:${siteConfig.email}?subject=Introduction%20—%20Careers`}>
                  Introduce yourself
                  <ArrowUpRight aria-hidden />
                </a>
              </Button>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
