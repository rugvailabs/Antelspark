import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, type LucideIcon } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/* ------------------------------------------------------------------ */
/*  Shared UI for the AI & Technology family — dark, luminous system   */
/* ------------------------------------------------------------------ */

/** Glassy floating chip for dark heroes. Qualitative values only. */
export function GlassChip({
  icon: Icon,
  label,
  value,
  className,
}: {
  icon: LucideIcon;
  label: string;
  value: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex items-center gap-3.5 rounded-2xl border border-white/15 bg-white/[0.07] px-5 py-3.5 backdrop-blur-md",
        className,
      )}
    >
      <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-cobalt/80 text-white">
        <Icon aria-hidden className="size-4.5" strokeWidth={1.8} />
      </span>
      <span>
        <span className="block text-sm font-medium text-white">{label}</span>
        <span className="block font-mono text-[0.68rem] tracking-wide text-white/60">
          {value}
        </span>
      </span>
    </div>
  );
}

/** Curved transition from a dark hero into the ivory page body. */
export function WaveDivider({ fill = "var(--color-ivory)" }: { fill?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 1440 84"
      preserveAspectRatio="none"
      className="absolute inset-x-0 bottom-0 h-14 w-full sm:h-20"
    >
      <path
        d="M0 46 C240 88 480 10 760 28 C1040 46 1240 72 1440 34 L1440 84 L0 84 Z"
        fill={fill}
      />
    </svg>
  );
}

/** Dark hero shell: deep navy gradient, soft glows, wave into ivory. */
export function DarkHero({
  children,
  className,
  glow = "default",
}: {
  children: React.ReactNode;
  className?: string;
  glow?: "default" | "warm" | "none";
}) {
  return (
    <section className={cn("relative overflow-hidden bg-navy-deep", className)}>
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_70%_0%,rgb(36_87_214/0.35),transparent_60%)]"
      />
      {glow === "warm" && (
        <div
          aria-hidden
          className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_20%_100%,rgb(192_91_60/0.25),transparent_70%)]"
        />
      )}
      {children}
      <WaveDivider />
    </section>
  );
}

/* Station gradients along the cobalt→violet→terracotta path. */
const PATH_STOPS: [string, string][] = [
  ["#2457d6", "#1c45ad"],
  ["#4a55e0", "#3a46c4"],
  ["#7b6cf6", "#6a58e8"],
  ["#9a63d8", "#8852c2"],
  ["#c05b3c", "#a84a2e"],
];

/** The flowing gradient approach band (navy, rounded, 5 luminous stations). */
export function GradientPath({
  eyebrow,
  heading,
  steps,
}: {
  eyebrow: string;
  heading: string;
  steps: { icon: LucideIcon; title: string; body: string }[];
}) {
  return (
    <section>
      <Container className="py-10 lg:py-14">
        <Reveal y={32}>
          <div className="relative overflow-hidden rounded-3xl bg-navy px-7 py-12 sm:px-10 lg:px-14 lg:py-14">
            <div className="grid gap-12 lg:grid-cols-[0.75fr_2.25fr] lg:gap-10">
              <div>
                <p className="eyebrow text-terracotta">{eyebrow}</p>
                <h2 className="mt-4 font-display text-display-sm font-medium text-white">
                  {heading}
                </h2>
              </div>

              <div className="relative">
                {/* Flowing gradient rail */}
                <svg
                  aria-hidden
                  viewBox="0 0 1000 60"
                  preserveAspectRatio="none"
                  className="absolute top-[26px] left-0 hidden h-10 w-full lg:block"
                >
                  <defs>
                    <linearGradient id="ai-path" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="var(--color-cobalt)" />
                      <stop offset="55%" stopColor="#7b6cf6" />
                      <stop offset="100%" stopColor="var(--color-terracotta)" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M0 30 C 125 6, 250 54, 375 30 S 625 6, 750 30 S 940 48, 1000 24"
                    fill="none"
                    stroke="url(#ai-path)"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    opacity="0.85"
                  />
                </svg>

                <ol className="relative grid gap-x-4 gap-y-9 sm:grid-cols-3 lg:grid-cols-5">
                  {steps.map(({ icon: Icon, title, body }, i) => (
                    <Reveal key={title} delay={Math.min(i * 0.07, 0.35)}>
                      <li>
                        <span
                          className="flex size-13 items-center justify-center rounded-full text-white shadow-lg"
                          style={{
                            background: `linear-gradient(135deg, ${PATH_STOPS[Math.min(i, 4)][0]}, ${PATH_STOPS[Math.min(i, 4)][1]})`,
                          }}
                        >
                          <Icon aria-hidden className="size-5.5" strokeWidth={1.7} />
                        </span>
                        <h3 className="mt-4 font-display text-base font-medium text-white">
                          <span className="mr-1.5 font-mono text-xs text-white/50">
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
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

/** Photographic use-case card with dark scrim and icon chip. */
export function UseCaseCard({
  icon: Icon,
  title,
  body,
  image,
  imageAlt,
}: {
  icon: LucideIcon;
  title: string;
  body: string;
  image: string;
  imageAlt: string;
}) {
  return (
    <div className="group relative h-64 overflow-hidden rounded-2xl bg-navy">
      <Image
        src={image}
        alt={imageAlt}
        fill
        sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
        className="object-cover opacity-80 transition-transform duration-500 group-hover:scale-[1.04]"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-navy-deep/95 via-navy-deep/30 to-transparent"
      />
      <div className="absolute right-4 bottom-4 left-4">
        <span className="flex size-8 items-center justify-center rounded-md border border-white/25 bg-white/10 text-white backdrop-blur-sm">
          <Icon aria-hidden className="size-4" strokeWidth={1.8} />
        </span>
        <h3 className="mt-2.5 font-display text-lg font-medium text-white">
          {title}
        </h3>
        <p className="mt-0.5 text-xs leading-snug text-white/70">{body}</p>
      </div>
    </div>
  );
}

/** Edge-to-edge closing band: navy, logo slashes, summit photo right. */
export function AuroraCta({
  heading,
  copy,
}: {
  heading: string;
  copy: string;
}) {
  return (
    <section className="relative overflow-hidden bg-navy-deep">
      <div className="absolute inset-y-0 right-0 w-full lg:w-3/5">
        <Image
          src="/images/dev/summit.jpg"
          alt=""
          fill
          sizes="60vw"
          className="object-cover object-[center_35%] opacity-70 [mask-image:linear-gradient(to_right,transparent,black_45%)]"
        />
      </div>
      <Container className="relative flex flex-col gap-8 py-16 md:py-20 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-start gap-5">
          <svg viewBox="0 0 26 22" aria-hidden className="mt-2 h-7 w-auto shrink-0">
            <path d="M4 22 12.5 0h5.4L9.4 22Z" fill="var(--color-cobalt)" />
            <path d="M13.5 22 22 0h4l-8.5 22Z" fill="var(--color-terracotta)" />
          </svg>
          <div>
            <h2 className="max-w-xl font-display text-display-md font-medium text-white">
              {heading}
            </h2>
            <p className="mt-3 max-w-md leading-relaxed text-white/80">{copy}</p>
          </div>
        </div>
        <Button asChild size="lg" variant="inverse" className="shrink-0">
          <Link href="/contact">
            Start a conversation
            <ArrowUpRight aria-hidden />
          </Link>
        </Button>
      </Container>
    </section>
  );
}
