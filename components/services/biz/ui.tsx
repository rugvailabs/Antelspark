import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, type LucideIcon } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";

/* ------------------------------------------------------------------ */
/*  Shared UI for the Business Solutions family                        */
/* ------------------------------------------------------------------ */

/** Divided statement band: big claim | hairline | supporting copy. */
export function StatementBand({
  statement,
  copy,
}: {
  statement: string;
  copy: string;
}) {
  return (
    <section className="border-y border-line bg-white">
      <Container className="grid items-center gap-6 py-12 md:py-14 lg:grid-cols-[1fr_1.2fr] lg:gap-14">
        <Reveal>
          <h2 className="font-display text-display-md font-medium text-ink">
            {statement}
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="max-w-lg text-lg leading-relaxed text-ink-soft lg:border-l lg:border-line lg:pl-10">
            {copy}
          </p>
        </Reveal>
      </Container>
    </section>
  );
}

/** The family's icon tile strip — bordered white tiles, cobalt marks. */
export function TileRow({
  eyebrow,
  items,
}: {
  eyebrow?: string;
  items: { icon: LucideIcon; title: string; sub: string }[];
}) {
  return (
    <section>
      <Container className="py-12 md:py-14">
        {eyebrow && (
          <Reveal>
            <p className="eyebrow mb-7 text-terracotta">{eyebrow}</p>
          </Reveal>
        )}
        <div
          className={`grid gap-4 sm:grid-cols-2 ${
            items.length >= 5 ? "lg:grid-cols-5" : "lg:grid-cols-4"
          }`}
        >
          {items.map(({ icon: Icon, title, sub }, i) => (
            <Reveal key={title} delay={Math.min(i * 0.05, 0.25)}>
              <div className="h-full rounded-2xl border border-line bg-white p-5 text-center transition-colors duration-200 hover:border-cobalt/40">
                <Icon
                  aria-hidden
                  className="mx-auto size-7 text-cobalt"
                  strokeWidth={1.6}
                />
                <h3 className="mt-3.5 text-sm leading-snug font-semibold text-ink">
                  {title}
                </h3>
                <p className="mt-1 text-xs leading-snug text-ink-soft">{sub}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

/** Closing band: navy rounded panel, slash mark, photography right. */
export function NavyWaveCta({
  heading,
  copy,
  image,
  imageAlt,
  cta = "Talk to our experts",
}: {
  heading: string;
  copy: string;
  image: string;
  imageAlt: string;
  cta?: string;
}) {
  return (
    <section>
      <Container className="py-14 lg:py-20">
        <Reveal y={32}>
          <div className="relative overflow-hidden rounded-[2rem] bg-navy">
            <div className="absolute inset-y-0 right-0 w-full lg:w-1/2">
              <Image
                src={image}
                alt={imageAlt}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover opacity-80 [mask-image:linear-gradient(to_right,transparent,black_55%)] max-lg:[mask-image:linear-gradient(to_top,black_30%,transparent)] max-lg:opacity-40"
              />
            </div>
            <div className="relative grid items-center gap-8 px-8 py-14 sm:px-12 lg:grid-cols-[1.2fr_auto] lg:px-14 lg:py-16">
              <div className="flex items-start gap-5">
                <svg viewBox="0 0 26 22" aria-hidden className="mt-2 h-7 w-auto shrink-0">
                  <path d="M4 22 12.5 0h5.4L9.4 22Z" fill="var(--color-cobalt)" />
                  <path d="M13.5 22 22 0h4l-8.5 22Z" fill="var(--color-terracotta)" />
                </svg>
                <div>
                  <h2 className="max-w-lg font-display text-display-md font-medium text-white">
                    {heading}
                  </h2>
                  <p className="mt-3 max-w-md leading-relaxed text-white/80">
                    {copy}
                  </p>
                </div>
              </div>
              <Button asChild size="lg" variant="inverse" className="justify-self-start lg:justify-self-end">
                <Link href="/contact">
                  {cta}
                  <ArrowUpRight aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
