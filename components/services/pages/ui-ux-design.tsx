import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Heart,
  Layers,
  LayoutGrid,
  MessageCircle,
  MonitorSmartphone,
  PenTool,
  Search,
  Users,
} from "lucide-react";

import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import { RelatedStrip, ServiceBreadcrumb } from "@/components/services/blocks";
import { PhoneFrame, TechTiles } from "@/components/services/dev/ui";
import { FloatBadge, ImpactCta } from "@/components/services/digital/ui";
import { Button } from "@/components/ui/button";
import type { Service, ServiceCategory } from "@/lib/services";

function Bar({ w, className = "bg-ink/12" }: { w: string; className?: string }) {
  return <div className={`h-1.5 rounded-full ${className}`} style={{ width: w }} />;
}

/* Demo wellness app — the hero device screen. */
function WellnessScreen() {
  return (
    <div className="bg-white pt-7">
      <div className="relative h-32">
        <Image src="/images/dev/summit.jpg" alt="" fill sizes="300px" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />
        <p className="absolute bottom-3 left-4 font-display text-base leading-tight font-semibold text-white">
          Wellness
          <br />
          Your Way
        </p>
      </div>
      <div className="space-y-3 p-4">
        <div className="grid grid-cols-3 gap-2">
          {["bg-cobalt-wash", "bg-terracotta-wash", "bg-cream"].map((tint, i) => (
            <div key={i} className={`rounded-xl p-2.5 ${tint}`}>
              <div className="size-4 rounded-md bg-white/80" />
              <Bar w="80%" className="mt-2 bg-ink/20" />
            </div>
          ))}
        </div>
        {[0, 1].map((i) => (
          <div key={i} className="flex items-center gap-2.5 rounded-xl border border-line px-3 py-2.5">
            <div className={`size-8 rounded-lg ${i === 0 ? "bg-cobalt" : "bg-terracotta-wash"}`} />
            <div className="flex-1 space-y-1.5">
              <Bar w="70%" />
              <Bar w="45%" />
            </div>
            <ArrowRight className="size-3.5 text-ink-faint" />
          </div>
        ))}
        <div className="rounded-full bg-cobalt py-2.5 text-center text-[0.65rem] font-semibold text-white">
          Start today&apos;s session
        </div>
      </div>
    </div>
  );
}

/* Wireframe vs finished — same screen, two fidelities. */
function WireframeCard() {
  return (
    <div aria-hidden className="w-44 rounded-2xl border-2 border-dashed border-ink/30 bg-white p-3 sm:w-52">
      <div className="h-16 rounded-lg border-2 border-dashed border-ink/25" />
      <div className="mt-2.5 grid grid-cols-3 gap-1.5">
        {[0, 1, 2].map((i) => (
          <div key={i} className="h-10 rounded-md border-2 border-dashed border-ink/20" />
        ))}
      </div>
      <div className="mt-2.5 space-y-1.5">
        <div className="h-2 w-4/5 rounded-full bg-ink/15" />
        <div className="h-2 w-3/5 rounded-full bg-ink/15" />
      </div>
      <div className="mt-2.5 h-7 rounded-full border-2 border-dashed border-ink/25" />
      <p className="mt-2.5 text-center font-mono text-[0.58rem] tracking-[0.12em] text-ink-faint uppercase">
        lo-fi · week 1
      </p>
    </div>
  );
}

const designTiles = [
  {
    icon: LayoutGrid,
    title: "Product Design",
    body: "From idea to intuitive experiences.",
  },
  {
    icon: Users,
    title: "UX Research",
    body: "Understand users and solve real needs.",
  },
  {
    icon: MonitorSmartphone,
    title: "Interface Design",
    body: "Clean, modern and brand-aligned UI.",
  },
  {
    icon: Layers,
    title: "Design Systems",
    body: "Scalable, consistent and future-ready.",
  },
];

const research = [
  {
    icon: MessageCircle,
    title: "Interview",
    body: "Talk to real users before pixels — assumptions are cheaper to fix than screens.",
  },
  {
    icon: PenTool,
    title: "Prototype",
    body: "Clickable flows in days, so decisions happen on something you can touch.",
  },
  {
    icon: Search,
    title: "Test",
    body: "Watch five people use it. The confusing part reveals itself every time.",
  },
];

export function UiUxDesignPage({
  category,
}: {
  service: Service;
  category: ServiceCategory;
}) {
  return (
    <>
      {/* Hero: device + floating tool badges on soft blobs */}
      <section className="relative overflow-hidden border-b border-line">
        <div
          aria-hidden
          className="absolute top-0 right-[8%] size-[28rem] rounded-full bg-cobalt-wash/80 blur-3xl"
        />
        <div
          aria-hidden
          className="absolute -right-24 bottom-0 size-80 rounded-full bg-terracotta-wash blur-3xl"
        />
        <Container className="relative grid items-center gap-14 pt-32 pb-16 md:pt-40 lg:grid-cols-[1.05fr_1fr]">
          <div>
            <Reveal>
              <ServiceBreadcrumb category={category} />
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="mt-6 font-display text-display-lg font-semibold text-ink">
                UI/UX Design<span className="text-terracotta">.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-ink-soft">
                Create intuitive, engaging and user-centred digital
                experiences that people love to use.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <Button asChild size="lg">
                  <Link href="/contact">
                    Start a design project
                    <ArrowUpRight aria-hidden />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/work">See our work</Link>
                </Button>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.18} y={36} className="w-full">
            <div className="relative mx-auto flex max-w-sm items-center justify-center py-6">
              {/* Component panel peeking behind */}
              <div
                aria-hidden
                className="absolute top-10 -left-2 hidden w-44 -rotate-6 rounded-2xl border border-line bg-white p-3.5 shadow-xl sm:block"
              >
                <Bar w="55%" className="bg-ink/25" />
                <div className="mt-3 space-y-2">
                  <div className="h-7 rounded-full bg-cobalt" />
                  <div className="h-7 rounded-full border border-line" />
                  <div className="flex gap-2">
                    <span className="size-7 rounded-md bg-terracotta-wash" />
                    <span className="size-7 rounded-md bg-cobalt-wash" />
                    <span className="size-7 rounded-md bg-cream" />
                  </div>
                </div>
              </div>
              <PhoneFrame className="relative z-10">
                <WellnessScreen />
              </PhoneFrame>
              <div className="absolute top-2 -right-1 z-20 sm:right-4">
                <FloatBadge file="/logos/color/figma.svg" label="Figma" className="rotate-6" />
              </div>
              <div className="absolute -right-3 bottom-24 z-20 sm:right-0">
                <FloatBadge file="/logos/color/sketch.svg" label="Sketch" className="-rotate-3" />
              </div>
              <div className="absolute bottom-2 left-2 z-20 sm:left-8">
                <FloatBadge file="/logos/color/framer.svg" label="Framer" className="rotate-3" />
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Design tiles */}
      <section className="border-b border-line bg-white">
        <Container className="grid items-center gap-10 py-14 md:py-16 lg:grid-cols-[0.7fr_2.3fr] lg:gap-12">
          <Reveal>
            <h2 className="font-display text-display-sm font-medium text-ink lg:border-r lg:border-line lg:pr-10">
              Design experiences that work.
            </h2>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {designTiles.map(({ icon: Icon, title, body }, i) => (
              <Reveal key={title} delay={Math.min(i * 0.06, 0.25)}>
                <div className="h-full rounded-2xl border border-line bg-ivory p-5 transition-colors hover:border-cobalt/40">
                  <span className="flex size-10 items-center justify-center rounded-xl bg-cobalt-wash text-cobalt">
                    <Icon aria-hidden className="size-5" strokeWidth={1.7} />
                  </span>
                  <h3 className="mt-4 font-display text-lg font-medium text-ink">
                    {title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">
                    {body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Wireframe → finished */}
      <section>
        <Container className="py-16 md:py-20">
          <div className="max-w-xl">
            <Reveal>
              <p className="eyebrow text-terracotta">The craft</p>
              <h2 className="mt-4 font-display text-display-md font-medium text-ink">
                From rough boxes to something people love.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.15} y={32}>
            <div className="mt-12 flex flex-col items-center justify-center gap-8 rounded-3xl bg-cream/60 p-8 sm:flex-row sm:gap-12 sm:p-12">
              <WireframeCard />
              <div className="flex flex-col items-center gap-1">
                <ArrowRight
                  aria-hidden
                  className="size-8 rotate-90 text-terracotta sm:rotate-0"
                  strokeWidth={1.8}
                />
                <span className="font-mono text-[0.62rem] tracking-[0.14em] text-ink-faint uppercase">
                  iterate · test
                </span>
              </div>
              <div className="w-44 sm:w-52">
                <PhoneFrame className="w-full border-ink/85">
                  <WellnessScreen />
                </PhoneFrame>
                <p className="mt-2.5 text-center font-mono text-[0.58rem] tracking-[0.12em] text-ink-faint uppercase">
                  hi-fi · shipped
                </p>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Design-system specimen — our own tokens, live */}
      <section className="border-y border-line bg-white">
        <Container className="py-16 md:py-20">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <Reveal>
              <p className="eyebrow text-cobalt">Design systems</p>
              <h2 className="mt-3 max-w-lg font-display text-display-md font-medium text-ink">
                Systems, not just screens.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="max-w-sm text-sm leading-relaxed text-ink-soft">
                This very page runs on one. Tokens, type and components —
                documented so the hundredth screen looks like the first.
              </p>
            </Reveal>
          </div>

          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            <Reveal>
              <div className="h-full rounded-2xl border border-line p-6">
                <p className="eyebrow text-ink-faint">Colour</p>
                <div className="mt-5 space-y-3">
                  {[
                    { name: "Ivory", hex: "#F7F5F0", cls: "bg-ivory border border-line" },
                    { name: "Ink", hex: "#20242C", cls: "bg-ink" },
                    { name: "Cobalt", hex: "#2457D6", cls: "bg-cobalt" },
                    { name: "Terracotta", hex: "#C05B3C", cls: "bg-terracotta" },
                  ].map(({ name, hex, cls }) => (
                    <div key={name} className="flex items-center gap-3">
                      <span className={`size-8 rounded-lg ${cls}`} />
                      <span className="text-sm font-medium text-ink">{name}</span>
                      <span className="ml-auto font-mono text-xs text-ink-faint">{hex}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="h-full rounded-2xl border border-line p-6">
                <p className="eyebrow text-ink-faint">Type</p>
                <p className="mt-4 font-display text-5xl font-semibold text-ink">Aa</p>
                <p className="mt-1 font-mono text-xs text-ink-faint">
                  Clash Display · headlines
                </p>
                <p className="mt-4 text-sm leading-relaxed text-ink">
                  General Sans carries the reading voice — warm, clear,
                  unhurried.
                </p>
                <p className="mt-3 font-mono text-xs text-ink-soft">
                  JetBrains Mono · labels &amp; data
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.16}>
              <div className="h-full rounded-2xl border border-line p-6">
                <p className="eyebrow text-ink-faint">Components</p>
                <div className="mt-5 space-y-3.5">
                  <Button size="sm">Primary action</Button>
                  <Button size="sm" variant="outline">
                    Secondary
                  </Button>
                  <div className="flex items-center gap-2 rounded-full border border-line px-3.5 py-2">
                    <Search className="size-3.5 text-ink-faint" />
                    <span className="text-xs text-ink-faint">Search input…</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-5 w-9 items-center rounded-full bg-cobalt p-0.5">
                      <span className="ml-auto size-4 rounded-full bg-white" />
                    </span>
                    <span className="text-xs text-ink-soft">Toggle, on</span>
                    <Heart className="ml-auto size-4 fill-terracotta text-terracotta" />
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Research trio */}
      <section>
        <Container className="py-16 md:py-20">
          <Reveal>
            <p className="eyebrow text-terracotta">Grounded in research</p>
            <h2 className="mt-4 max-w-xl font-display text-display-md font-medium text-ink">
              Opinions are cheap. Evidence is design.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-10 sm:grid-cols-3">
            {research.map(({ icon: Icon, title, body }, i) => (
              <Reveal key={title} delay={Math.min(i * 0.07, 0.25)}>
                <div className="border-t-2 border-ink/80 pt-5">
                  <div className="flex items-center justify-between">
                    <Icon aria-hidden className="size-6 text-cobalt" strokeWidth={1.7} />
                    <span className="font-mono text-xs text-ink-faint">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mt-3 font-display text-xl font-medium text-ink">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                    {body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <TechTiles
        heading="Designed and shipped in the same system."
        copy="Our designs don't die in handoff — the same tokens flow from Figma into production code."
        tools={[
          { name: "Figma", file: "/logos/color/figma.svg" },
          { name: "Sketch", file: "/logos/color/sketch.svg" },
          { name: "Framer", file: "/logos/color/framer.svg" },
          { name: "Storybook", file: "/logos/color/storybook.svg" },
          { name: "React", file: "/logos/color/react.svg" },
          { name: "Tailwind CSS", file: "/logos/color/tailwindcss.svg" },
        ]}
      />

      <RelatedStrip category={category} currentSlug="ui-ux-design" />

      <ImpactCta
        statement="Design that earns its keep."
        copy="Bring us a confusing flow, a dated interface or a product that's outgrown its screens — we'll show you what it could feel like."
        image="/images/services/ui-ux-design.jpg"
        imageAlt="Hand sketching UX wireframes labelled user goals"
        cta="Start a design project"
      />
    </>
  );
}
