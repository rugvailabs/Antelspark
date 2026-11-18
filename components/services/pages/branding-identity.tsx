import Link from "next/link";
import {
  ArrowUpRight,
  BookOpen,
  Compass,
  Palette,
  PenTool,
  Shapes,
  SwatchBook,
} from "lucide-react";

import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import { RelatedStrip, ServiceBreadcrumb } from "@/components/services/blocks";
import { CapabilityRow, ImpactCta } from "@/components/services/digital/ui";
import { Button } from "@/components/ui/button";
import type { Service, ServiceCategory } from "@/lib/services";

/* ------------------------------------------------------------------ */
/*  Kalanestham identity sheet — a designed recreation of the real     */
/*  client identity (no fabricated photography).                       */
/* ------------------------------------------------------------------ */

const GOLD = "#c9a96a";
const GREEN = "#1d2a1f";

function LotusMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 32" aria-hidden className={className}>
      <path
        d="M24 2 C27 10 27 16 24 22 C21 16 21 10 24 2 Z M12 8 C18 12 21 17 22 23 C15 21 12 15 12 8 Z M36 8 C36 15 33 21 26 23 C27 17 30 12 36 8 Z M5 18 C12 19 18 22 21 27 C13 28 7 24 5 18 Z M43 18 C41 24 35 28 27 27 C30 22 36 19 43 18 Z"
        fill={GOLD}
      />
    </svg>
  );
}

function BrandSheet() {
  return (
    <div aria-hidden className="relative mx-auto w-full max-w-md">
      {/* Main identity panel with arched top */}
      <div
        className="rounded-b-[1.5rem] rounded-t-[8rem] px-10 pt-16 pb-12 text-center shadow-[0_32px_64px_-28px_rgb(29_42_31_/_0.65)]"
        style={{ backgroundColor: GREEN }}
      >
        <LotusMark className="mx-auto h-9 w-auto" />
        <p
          className="mt-5 font-display text-4xl font-medium italic"
          style={{ color: GOLD }}
        >
          Kalanestham
        </p>
        <p
          className="mt-3 font-mono text-[0.6rem] tracking-[0.3em] uppercase"
          style={{ color: `${GOLD}99` }}
        >
          Timeless Indian Artistry
        </p>
        <div
          aria-hidden
          className="mx-auto mt-6 h-px w-24"
          style={{ backgroundColor: `${GOLD}55` }}
        />
        <div className="mt-6 flex items-center justify-center gap-3">
          {[GREEN, "#2e4231", GOLD, "#e6d3ac", "#f3ede0"].map((swatch) => (
            <span
              key={swatch}
              className="size-6 rounded-full border border-white/20"
              style={{ backgroundColor: swatch }}
            />
          ))}
        </div>
      </div>

      {/* Hang-tag card */}
      <div
        className="absolute -right-4 top-24 w-28 rotate-6 rounded-xl border p-4 text-center shadow-xl sm:-right-10"
        style={{ backgroundColor: GREEN, borderColor: `${GOLD}66` }}
      >
        <span
          aria-hidden
          className="mx-auto mb-2 block size-2 rounded-full"
          style={{ backgroundColor: GOLD }}
        />
        <LotusMark className="mx-auto h-6 w-auto" />
        <p className="mt-2 font-mono text-[0.5rem] tracking-[0.2em] uppercase" style={{ color: `${GOLD}aa` }}>
          handcrafted
        </p>
      </div>

      {/* Type chip */}
      <div className="absolute -left-4 bottom-10 w-32 -rotate-3 rounded-xl border border-line bg-white p-4 shadow-xl sm:-left-10">
        <p className="font-display text-3xl font-medium text-ink">Aa</p>
        <p className="mt-1 font-mono text-[0.55rem] text-ink-faint">
          display · humanist
        </p>
      </div>

      <p className="mt-5 text-center font-mono text-[0.65rem] tracking-[0.14em] text-ink-faint uppercase">
        Identity system — Kalanestham, our client
      </p>
    </div>
  );
}

const anatomy = [
  {
    icon: Shapes,
    title: "Mark & logo",
    body: "A symbol that survives a favicon and a shopfront alike — built in variants, never a single fragile file.",
    specimen: (
      <div className="grid h-full place-items-center rounded-xl p-5" style={{ backgroundColor: GREEN }}>
        <LotusMark className="h-10 w-auto" />
      </div>
    ),
  },
  {
    icon: PenTool,
    title: "Typography",
    body: "Two or three voices with clear jobs — display, reading, detail — chosen to carry the brand's temperament.",
    specimen: (
      <div className="flex h-full flex-col items-center justify-center rounded-xl border border-line bg-white p-5">
        <p className="font-display text-4xl font-semibold text-ink">Aa</p>
        <p className="mt-1 font-mono text-[0.6rem] text-ink-faint">display / text / mono</p>
      </div>
    ),
  },
  {
    icon: Palette,
    title: "Colour",
    body: "A disciplined palette with roles, not favourites — grounded neutrals, one leading hue, one accent that stays rare.",
    specimen: (
      <div className="flex h-full items-center justify-center gap-2.5 rounded-xl border border-line bg-white p-5">
        {["bg-ivory border border-line", "bg-ink", "bg-cobalt", "bg-terracotta"].map((cls) => (
          <span key={cls} className={`size-9 rounded-full ${cls}`} />
        ))}
      </div>
    ),
  },
  {
    icon: BookOpen,
    title: "Voice & guidelines",
    body: "How the brand speaks and where every element lives — a guideline book your whole team can actually follow.",
    specimen: (
      <div className="flex h-full flex-col justify-center gap-2 rounded-xl border border-line bg-white p-5">
        <p className="font-mono text-[0.62rem] text-ink-soft">“Warm, assured, never shouty.”</p>
        <div className="h-1.5 w-4/5 rounded-full bg-ink/12" />
        <div className="h-1.5 w-3/5 rounded-full bg-ink/12" />
        <div className="h-1.5 w-2/3 rounded-full bg-ink/12" />
      </div>
    ),
  },
];

const fourD = [
  { d: "Discover", body: "Founders, customers, competitors — who you really are." },
  { d: "Define", body: "Positioning and personality, agreed in writing." },
  { d: "Design", body: "Mark, type, colour and system — explored, then refined." },
  { d: "Deliver", body: "Files, guidelines and a rollout that sticks." },
];

export function BrandingIdentityPage({
  category,
}: {
  service: Service;
  category: ServiceCategory;
}) {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-line">
        <div
          aria-hidden
          className="absolute top-0 right-0 h-full w-1/2 bg-cream/60 [clip-path:ellipse(75%_100%_at_100%_0%)] max-lg:hidden"
        />
        <Container className="relative grid items-center gap-14 pt-32 pb-16 md:pt-40 lg:grid-cols-[1fr_1.05fr]">
          <div>
            <Reveal>
              <ServiceBreadcrumb category={category} />
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="mt-6 font-display text-display-lg font-semibold text-ink">
                Branding &amp; Identity
                <span className="text-terracotta">.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-ink-soft">
                Build a strong, memorable brand that stands out, builds trust
                and creates lasting value.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <Button asChild size="lg">
                  <Link href="/contact">
                    Build your brand
                    <ArrowUpRight aria-hidden />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/work">Explore our work</Link>
                </Button>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.18} y={36} className="w-full">
            <BrandSheet />
          </Reveal>
        </Container>
      </section>

      <CapabilityRow
        heading="What we deliver"
        items={[
          { icon: Compass, title: "Brand Strategy", detail: "Define, position, differentiate" },
          { icon: Shapes, title: "Visual Identity", detail: "Logo, colours, typography" },
          { icon: SwatchBook, title: "Brand Collateral", detail: "Business, digital & marketing" },
          { icon: BookOpen, title: "Brand Guidelines", detail: "Consistent everywhere" },
        ]}
      />

      {/* Anatomy of an identity */}
      <section>
        <Container className="section-pad">
          <div className="max-w-xl">
            <Reveal>
              <p className="eyebrow text-terracotta">The anatomy</p>
              <h2 className="mt-4 font-display text-display-md font-medium text-ink">
                An identity is a system of four parts.
              </h2>
            </Reveal>
          </div>
          <div className="mt-12 grid gap-x-12 gap-y-10 md:grid-cols-2">
            {anatomy.map(({ icon: Icon, title, body, specimen }, i) => (
              <Reveal key={title} delay={Math.min(i * 0.06, 0.25)}>
                <article className="grid h-full grid-cols-[7.5rem_1fr] gap-5 border-t border-line pt-6">
                  <div className="h-28">{specimen}</div>
                  <div>
                    <div className="flex items-center gap-2.5">
                      <Icon aria-hidden className="size-5 text-cobalt" strokeWidth={1.7} />
                      <h3 className="font-display text-xl font-medium text-ink">
                        {title}
                      </h3>
                    </div>
                    <p className="mt-2.5 text-sm leading-relaxed text-ink-soft">
                      {body}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* The four Ds */}
      <section className="border-y border-line bg-cream/60">
        <Container className="py-14 md:py-16">
          <Reveal>
            <p className="eyebrow text-cobalt">How a brand gets built</p>
          </Reveal>
          <div className="mt-8 grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
            {fourD.map(({ d, body }, i) => (
              <Reveal key={d} delay={Math.min(i * 0.07, 0.3)}>
                <div className="relative pl-1">
                  <span
                    aria-hidden
                    className="pointer-events-none absolute -top-5 -left-1 font-display text-7xl font-semibold text-cobalt/10"
                  >
                    D{i + 1}
                  </span>
                  <h3 className="relative font-display text-xl font-medium text-ink">
                    {d}
                    {i === 3 && <span className="text-terracotta">.</span>}
                  </h3>
                  <p className="relative mt-2 max-w-[15rem] text-sm leading-relaxed text-ink-soft">
                    {body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Identity in use */}
      <section>
        <Container className="py-16 md:py-20">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <Reveal>
              <p className="eyebrow text-terracotta">In use</p>
              <h2 className="mt-3 max-w-lg font-display text-display-md font-medium text-ink">
                One system, every surface.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="max-w-sm text-sm leading-relaxed text-ink-soft">
                The Kalanestham system, applied — the same mark, palette and
                voice from a hang-tag to the homepage.
              </p>
            </Reveal>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {/* Business card */}
            <Reveal>
              <div aria-hidden className="flex h-44 flex-col justify-between rounded-2xl p-5" style={{ backgroundColor: GREEN }}>
                <LotusMark className="h-6 w-auto self-start" />
                <div>
                  <p className="font-display text-sm italic" style={{ color: GOLD }}>
                    Kalanestham
                  </p>
                  <div className="mt-2 space-y-1">
                    <div className="h-1 w-24 rounded-full" style={{ backgroundColor: `${GOLD}44` }} />
                    <div className="h-1 w-16 rounded-full" style={{ backgroundColor: `${GOLD}44` }} />
                  </div>
                </div>
              </div>
            </Reveal>
            {/* Social avatar */}
            <Reveal delay={0.06}>
              <div aria-hidden className="flex h-44 items-center justify-center gap-4 rounded-2xl border border-line bg-white p-5">
                <span className="grid size-16 place-items-center rounded-full" style={{ backgroundColor: GREEN }}>
                  <LotusMark className="h-7 w-auto" />
                </span>
                <div className="space-y-1.5">
                  <div className="h-2 w-20 rounded-full bg-ink/70" />
                  <div className="h-1.5 w-14 rounded-full bg-ink/20" />
                  <span className="inline-block rounded-full px-2.5 py-0.5 font-mono text-[0.55rem] text-white" style={{ backgroundColor: GREEN }}>
                    Follow
                  </span>
                </div>
              </div>
            </Reveal>
            {/* Web banner */}
            <Reveal delay={0.12}>
              <div aria-hidden className="flex h-44 flex-col rounded-2xl border border-line bg-white p-3">
                <div className="flex items-center justify-between rounded-lg px-3 py-2" style={{ backgroundColor: "#171310" }}>
                  <span className="font-display text-xs italic" style={{ color: GOLD }}>
                    Kalanestham
                  </span>
                  <span className="rounded-full border px-2 py-0.5 font-mono text-[0.5rem]" style={{ borderColor: GOLD, color: GOLD }}>
                    Explore
                  </span>
                </div>
                <div className="mt-2 flex-1 rounded-lg bg-cream" />
                <div className="mt-2 grid grid-cols-3 gap-1.5">
                  {[0, 1, 2].map((i) => (
                    <div key={i} className="h-6 rounded-md bg-cream" />
                  ))}
                </div>
              </div>
            </Reveal>
            {/* Packaging tag */}
            <Reveal delay={0.18}>
              <div aria-hidden className="grid h-44 place-items-center rounded-2xl bg-cream/80 p-5">
                <div className="w-24 -rotate-6 rounded-lg border p-3 text-center shadow-lg" style={{ backgroundColor: GREEN, borderColor: `${GOLD}66` }}>
                  <span className="mx-auto block h-3 w-3 rounded-full border" style={{ borderColor: `${GOLD}88` }} />
                  <LotusMark className="mx-auto mt-2 h-5 w-auto" />
                  <p className="mt-1.5 font-mono text-[0.45rem] tracking-[0.18em] uppercase" style={{ color: `${GOLD}aa` }}>
                    est. craft
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <RelatedStrip category={category} currentSlug="branding-identity" />

      <ImpactCta
        statement="From identity to impact."
        copy="Whether you're naming something new or renewing something loved — we'll build the identity and the system that keeps it consistent."
        image="/images/work/kalanestham.jpg"
        imageAlt="Artist's studio table with brushes and warm paints"
        cta="Build your brand"
      />
    </>
  );
}
