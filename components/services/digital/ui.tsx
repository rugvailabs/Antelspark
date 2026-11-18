import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, type LucideIcon } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/* ------------------------------------------------------------------ */
/*  Shared UI for the Digital & Design family                          */
/* ------------------------------------------------------------------ */

/** The family signature: heading beside a divided row of icon capabilities. */
export function CapabilityRow({
  heading,
  items,
}: {
  heading: string;
  items: { icon: LucideIcon; title: string; detail: string }[];
}) {
  return (
    <section className="border-y border-line bg-white">
      <Container className="grid items-center gap-8 py-10 md:py-12 lg:grid-cols-[0.7fr_2.3fr] lg:gap-12">
        <Reveal>
          <h2 className="font-display text-2xl font-semibold text-ink lg:border-r lg:border-line lg:pr-10">
            {heading}
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <div
            className="grid grid-cols-2 gap-y-8 sm:grid-cols-3 sm:divide-x sm:divide-line lg:flex lg:justify-between"
            style={{ gridAutoColumns: "1fr" }}
          >
            {items.map(({ icon: Icon, title, detail }) => (
              <div
                key={title}
                className="px-4 text-center first:pl-0 last:pr-0 lg:flex-1"
              >
                <Icon
                  aria-hidden
                  className="mx-auto size-7 text-cobalt"
                  strokeWidth={1.6}
                />
                <p className="mt-3 text-sm leading-snug font-semibold text-ink">
                  {title}
                </p>
                <p className="mt-1 text-xs leading-snug text-ink-soft">
                  {detail}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

/** Floating app/platform badge used around hero devices. */
export function FloatBadge({
  file,
  label,
  className,
}: {
  file: string;
  label: string;
  className?: string;
}) {
  return (
    <span
      title={label}
      className={cn(
        "grid size-14 place-items-center rounded-2xl border border-line bg-white shadow-[0_18px_36px_-16px_rgb(32_36_44_/_0.35)]",
        className,
      )}
    >
      <Image src={file} alt={label} width={26} height={26} className="size-[26px]" />
    </span>
  );
}

/** Family closing band: split dark statement + photography. */
export function ImpactCta({
  statement,
  copy,
  image,
  imageAlt,
  cta = "Start a project",
}: {
  statement: string;
  copy: string;
  image: string;
  imageAlt: string;
  cta?: string;
}) {
  return (
    <section>
      <Container className="py-14 lg:py-20">
        <Reveal y={32}>
          <div className="grid overflow-hidden rounded-2xl lg:grid-cols-[1.15fr_0.85fr]">
            <div className="bg-[#14181f] px-8 py-12 sm:px-12 lg:py-16">
              <h2 className="max-w-lg font-display text-display-md font-medium text-white">
                {statement}
              </h2>
              <span aria-hidden className="mt-5 block h-1 w-14 rounded-full bg-terracotta" />
              <p className="mt-5 max-w-md leading-relaxed text-white/75">{copy}</p>
              <Button asChild size="lg" variant="inverse" className="mt-8">
                <Link href="/contact">
                  {cta}
                  <ArrowUpRight aria-hidden />
                </Link>
              </Button>
            </div>
            <div className="relative min-h-56 lg:min-h-0">
              <Image
                src={image}
                alt={imageAlt}
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-r from-[#14181f]/60 to-transparent max-lg:bg-gradient-to-t"
              />
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
