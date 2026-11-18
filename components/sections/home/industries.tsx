import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import { industryTiles } from "@/lib/home";

/* Asymmetric spans: wide / regular / narrow, mirrored on the second row. */
const spans = [
  "lg:col-span-5",
  "lg:col-span-4",
  "lg:col-span-3",
  "lg:col-span-3",
  "lg:col-span-4",
  "lg:col-span-5",
];

/** Ivory section: industries as photographic tiles. */
export function Industries() {
  return (
    <section id="industries" className="scroll-mt-20">
      <Container className="section-pad">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <Reveal>
              <p className="eyebrow text-terracotta">Industries</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-4 font-display text-display-md font-medium text-ink">
                Solutions for growing industries.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.16}>
            <p className="max-w-sm leading-relaxed text-ink-soft">
              Good engineering translates — the best solutions come from
              understanding how your sector actually operates.
            </p>
          </Reveal>
        </div>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-12">
          {industryTiles.map((industry, i) => (
            <Reveal key={industry.slug} delay={Math.min(i * 0.05, 0.25)} className={spans[i]}>
              <li className="h-full">
                <Link
                  href={`/industries#${industry.slug}`}
                  className="group relative block h-full min-h-56 overflow-hidden rounded-xl bg-cream"
                >
                  <Image
                    src={industry.image}
                    alt={industry.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent"
                  />
                  <div className="absolute right-4 bottom-4 left-4 flex items-end justify-between gap-3">
                    <div>
                      <h3 className="font-display text-lg font-medium text-white">
                        {industry.title}
                      </h3>
                      <p className="mt-0.5 text-xs leading-snug text-white/75">
                        {industry.description}
                      </p>
                    </div>
                    <ArrowUpRight
                      aria-hidden
                      className="mb-0.5 size-4 shrink-0 text-white/80 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </div>
                </Link>
              </li>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
