import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, BrainCircuit, CloudCog, CodeXml } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";

const pillars = [
  { icon: CodeXml, title: "Build", detail: "digital products" },
  { icon: BrainCircuit, title: "Apply", detail: "AI for business" },
  { icon: CloudCog, title: "Scale", detail: "on the cloud" },
];

export function Hero() {
  return (
    <section className="overflow-hidden">
      <Container className="grid items-center gap-12 pt-32 pb-16 md:pt-40 lg:grid-cols-[1fr_0.92fr] lg:gap-8 lg:pb-24">
        {/* Editorial copy */}
        <div>
          <Reveal>
            <p className="eyebrow flex items-center gap-2 text-ink-soft">
              Technology <span className="text-terracotta">×</span> Design{" "}
              <span className="text-terracotta">×</span> Business
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="mt-6 font-display text-display-xl font-semibold text-ink">
              We Engineer
              <br />
              What&apos;s{" "}
              <span className="relative inline-block text-cobalt">
                Next.
                <svg
                  aria-hidden
                  viewBox="0 0 140 12"
                  className="absolute -bottom-2 left-0 w-full"
                >
                  <path
                    d="M5 9C40 2.5 95 2 135 5.5"
                    fill="none"
                    stroke="var(--color-terracotta)"
                    strokeWidth="4.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mt-8 max-w-md text-lg leading-relaxed text-ink-soft">
              Software, AI and digital solutions that solve real business
              challenges — designed, built and maintained by one team.
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Button asChild size="lg">
                <Link href="/contact">
                  Start a project
                  <ArrowUpRight aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="#services">Explore services</Link>
              </Button>
            </div>
          </Reveal>

          {/* Capability pillars */}
          <Reveal delay={0.32}>
            <div className="mt-12 grid max-w-md grid-cols-3 divide-x divide-line border-t border-line pt-6">
              {pillars.map(({ icon: Icon, title, detail }) => (
                <div key={title} className="flex items-start gap-2.5 px-3 first:pl-0 last:pr-0">
                  <Icon
                    aria-hidden
                    className="mt-0.5 size-4 shrink-0 text-cobalt"
                    strokeWidth={1.8}
                  />
                  <p className="text-xs leading-snug">
                    <span className="block font-medium text-ink">{title}</span>
                    <span className="text-ink-soft">{detail}</span>
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Photographic composition with diagonal crop */}
        <Reveal delay={0.18} y={36} className="relative">
          <div className="relative">
            <div
              className="relative aspect-[5/4] overflow-hidden rounded-2xl bg-cream lg:aspect-auto lg:h-[540px] lg:rounded-none lg:[clip-path:polygon(16%_0,100%_0,100%_100%,0_100%)]"
            >
              <Image
                src="/images/company/team-collaboration.jpg"
                alt="The engineering team working together around laptops"
                fill
                priority
                sizes="(min-width: 1024px) 48vw, 100vw"
                className="object-cover"
              />
            </div>
            {/* Purposeful accents anchoring the crop */}
            <div
              aria-hidden
              className="absolute -bottom-3 left-[6%] h-8 w-24 -skew-x-[24deg] bg-cobalt lg:left-0"
            />
            <div
              aria-hidden
              className="absolute -bottom-3 left-[6%] ml-28 h-8 w-10 -skew-x-[24deg] bg-terracotta lg:left-0"
            />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
