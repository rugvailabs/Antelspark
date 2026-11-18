import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check, type LucideIcon } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/* ------------------------------------------------------------------ */
/*  Shared UI for the Development service family                       */
/* ------------------------------------------------------------------ */

/** Hero trust chips: icon + two-line label, divided row. */
export function TrustChips({
  items,
}: {
  items: { icon: LucideIcon; title: string; detail: string }[];
}) {
  return (
    <div className="grid max-w-lg grid-cols-3 divide-x divide-line border-t border-line pt-6">
      {items.map(({ icon: Icon, title, detail }) => (
        <div key={title} className="flex items-start gap-2.5 px-3 first:pl-0 last:pr-0">
          <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-full bg-cobalt-wash text-cobalt">
            <Icon aria-hidden className="size-4" strokeWidth={1.8} />
          </span>
          <p className="text-xs leading-snug">
            <span className="block font-medium text-ink">{title}</span>
            <span className="text-ink-soft">{detail}</span>
          </p>
        </div>
      ))}
    </div>
  );
}

/** Minimal laptop device frame around arbitrary screen content. */
export function LaptopFrame({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div aria-hidden className={cn("w-full", className)}>
      <div className="overflow-hidden rounded-t-xl border-4 border-b-0 border-ink/85 bg-white shadow-2xl">
        {children}
      </div>
      <div className="relative h-3.5 rounded-b-xl bg-gradient-to-b from-ink/70 to-ink/90">
        <div className="absolute top-0 left-1/2 h-1.5 w-16 -translate-x-1/2 rounded-b-md bg-ink/60" />
      </div>
    </div>
  );
}

/** Minimal phone device frame. */
export function PhoneFrame({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      aria-hidden
      className={cn(
        "w-44 overflow-hidden rounded-[1.8rem] border-[5px] border-ink/85 bg-white shadow-2xl sm:w-52",
        className,
      )}
    >
      <div className="relative">
        <div className="absolute top-1.5 left-1/2 z-10 h-4 w-16 -translate-x-1/2 rounded-full bg-ink/85" />
        {children}
      </div>
    </div>
  );
}

/** Light panel process: icon medallions joined by dotted connectors. */
export function ProcessDotted({
  steps,
}: {
  steps: { icon: LucideIcon; title: string; body: string }[];
}) {
  return (
    <ol className="grid gap-x-4 gap-y-8 sm:grid-cols-3 lg:grid-cols-5">
      {steps.map(({ icon: Icon, title, body }, i) => (
        <Reveal key={title} delay={Math.min(i * 0.06, 0.3)}>
          <li className="relative">
            <div className="flex items-center">
              <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-white text-cobalt shadow-[0_8px_20px_-10px_rgb(32_36_44_/_0.3)]">
                <Icon aria-hidden className="size-5" strokeWidth={1.7} />
              </span>
              {i < steps.length - 1 && (
                <span
                  aria-hidden
                  className="mx-2 hidden flex-1 border-t-2 border-dotted border-ink/25 lg:block"
                />
              )}
            </div>
            <h3 className="mt-4 font-display text-lg font-medium text-ink">
              {title}
            </h3>
            <p className="mt-1.5 max-w-[16rem] text-sm leading-relaxed text-ink-soft">
              {body}
            </p>
          </li>
        </Reveal>
      ))}
    </ol>
  );
}

/** Navy band process: numbered stations on a connecting rail. */
export function ProcessNavy({
  steps,
}: {
  steps: { icon: LucideIcon; title: string; body: string }[];
}) {
  return (
    <ol className="relative grid gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-5">
      <div
        aria-hidden
        className="absolute top-6 right-8 left-8 hidden h-px bg-white/20 lg:block"
      />
      {steps.map(({ icon: Icon, title, body }, i) => (
        <Reveal key={title} delay={Math.min(i * 0.06, 0.3)}>
          <li className="relative">
            <span className="relative z-10 flex size-12 items-center justify-center rounded-full border border-white/25 bg-navy text-white">
              <Icon aria-hidden className="size-5" strokeWidth={1.7} />
            </span>
            <h3 className="mt-4 font-display text-lg font-medium text-white">
              <span className="mr-2 font-mono text-xs text-white/50">
                {String(i + 1).padStart(2, "0")}
              </span>
              {title}
            </h3>
            <p className="mt-1.5 text-sm leading-relaxed text-white/65">
              {body}
            </p>
          </li>
        </Reveal>
      ))}
    </ol>
  );
}

/** White tiles with brand-colored technology marks. */
export function TechTiles({
  heading = "Built with the right technologies.",
  copy,
  tools,
}: {
  heading?: string;
  copy: string;
  tools: { name: string; file: string }[];
}) {
  return (
    <section className="border-t border-line">
      <Container className="grid gap-10 py-14 md:py-18 lg:grid-cols-[0.9fr_2fr] lg:gap-14">
        <Reveal>
          <p className="eyebrow text-cobalt">Technology stack</p>
          <h2 className="mt-4 font-display text-display-sm font-medium text-ink">
            {heading}
          </h2>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-soft">
            {copy}
          </p>
        </Reveal>
        <ul className="grid grid-cols-3 gap-3 sm:grid-cols-6">
          {tools.map((tool, i) => (
            <Reveal key={tool.name} delay={Math.min(i * 0.04, 0.25)}>
              <li className="flex h-full flex-col items-center justify-center gap-3 rounded-xl border border-line bg-white px-3 py-5 transition-colors duration-200 hover:border-cobalt/40">
                <Image
                  src={tool.file}
                  alt=""
                  width={30}
                  height={30}
                  className="size-[30px]"
                />
                <span className="text-center text-xs font-medium text-ink">
                  {tool.name}
                </span>
              </li>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}

/** Check pill used beside project showcases. */
export function CheckPills({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item, i) => (
        <Reveal key={item} delay={Math.min(i * 0.06, 0.3)}>
          <li className="flex items-center gap-3 rounded-full border border-line bg-white py-2.5 pr-5 pl-3 shadow-[0_8px_20px_-14px_rgb(32_36_44_/_0.35)]">
            <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-cobalt text-white">
              <Check aria-hidden className="size-3.5" strokeWidth={3} />
            </span>
            <span className="text-sm font-medium text-ink">{item}</span>
          </li>
        </Reveal>
      ))}
    </ul>
  );
}

/** Closing CTA: navy panel with the summit photograph fading in below. */
export function SummitCta({
  eyebrow,
  heading,
  copy,
}: {
  eyebrow: string;
  heading: string;
  copy: string;
}) {
  return (
    <section>
      <Container className="py-16 lg:py-24">
        <Reveal y={36}>
          <div className="relative overflow-hidden rounded-3xl bg-navy">
            <div className="absolute inset-x-0 bottom-0 h-3/5">
              <Image
                src="/images/dev/summit.jpg"
                alt=""
                fill
                sizes="100vw"
                className="object-cover object-top opacity-75 [mask-image:linear-gradient(to_top,black_30%,transparent)]"
              />
            </div>
            <div className="relative grid items-center gap-8 px-7 py-14 sm:px-12 lg:grid-cols-[1.5fr_auto] lg:px-16 lg:py-18">
              <div>
                <p className="eyebrow text-white/70">{eyebrow}</p>
                <h2 className="mt-4 max-w-xl font-display text-display-md font-medium text-white">
                  {heading}
                </h2>
                <p className="mt-4 max-w-md leading-relaxed text-white/80">
                  {copy}
                </p>
              </div>
              <Button asChild size="lg" variant="inverse" className="justify-self-start lg:justify-self-end">
                <Link href="/contact">
                  Start a conversation
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
