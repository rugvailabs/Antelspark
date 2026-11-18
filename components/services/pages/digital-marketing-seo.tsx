import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  BarChart3,
  FileText,
  Megaphone,
  Search,
  Share2,
  Target,
  TrendingUp,
  Wallet,
} from "lucide-react";

import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import {
  DeliverablesStrip,
  RelatedStrip,
  ServiceBreadcrumb,
} from "@/components/services/blocks";
import { LaptopFrame } from "@/components/services/dev/ui";
import { CapabilityRow, ImpactCta } from "@/components/services/digital/ui";
import { Button } from "@/components/ui/button";
import type { Service, ServiceCategory } from "@/lib/services";

/* ------------------------------------------------------------------ */
/*  Campaign dashboard screen — abstract, no fabricated figures        */
/* ------------------------------------------------------------------ */

function Bar({ w, className = "bg-ink/12" }: { w: string; className?: string }) {
  return <div className={`h-1.5 rounded-full ${className}`} style={{ width: w }} />;
}

function MarketingDashboard() {
  const channels = [
    { name: "Organic search", dot: "bg-cobalt", w: "82%" },
    { name: "Paid campaigns", dot: "bg-terracotta", w: "58%" },
    { name: "Email & social", dot: "bg-[#9a63d8]", w: "41%" },
  ];
  return (
    <div className="bg-white">
      <div className="flex items-center justify-between border-b border-line px-4 py-2.5">
        <p className="text-[0.72rem] font-semibold text-ink">Campaign performance</p>
        <span className="rounded-full border border-line px-2 py-0.5 font-mono text-[0.55rem] text-ink-soft">
          last 12 months
        </span>
      </div>
      <div className="p-4">
        <svg viewBox="0 0 320 96" className="w-full">
          <defs>
            <linearGradient id="mk-area" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="var(--color-cobalt)" stopOpacity="0.3" />
              <stop offset="100%" stopColor="var(--color-cobalt)" stopOpacity="0" />
            </linearGradient>
          </defs>
          {[24, 48, 72].map((y) => (
            <line key={y} x1="0" y1={y} x2="320" y2={y} stroke="var(--color-line)" strokeWidth="1" />
          ))}
          <path
            d="M0 84 C40 80, 60 70, 95 66 S160 56, 200 42 S270 20, 320 14 L320 96 L0 96 Z"
            fill="url(#mk-area)"
          />
          <path
            d="M0 84 C40 80, 60 70, 95 66 S160 56, 200 42 S270 20, 320 14"
            fill="none"
            stroke="var(--color-cobalt)"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle cx="200" cy="42" r="3.5" fill="var(--color-cobalt)" stroke="white" strokeWidth="1.5" />
        </svg>
        <div className="mt-3 space-y-2.5">
          {channels.map(({ name, dot, w }) => (
            <div key={name} className="flex items-center gap-3">
              <span className={`size-2 shrink-0 rounded-full ${dot}`} />
              <span className="w-24 shrink-0 text-[0.65rem] font-medium text-ink">
                {name}
              </span>
              <div className="h-1.5 flex-1 rounded-full bg-cream">
                <div className={`h-full rounded-full ${dot}`} style={{ width: w }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* Growth loop diagram (kept from the approved earlier design). */
function GrowthLoop() {
  const cobalt = "var(--color-cobalt)";
  return (
    <figure aria-hidden className="mx-auto w-full max-w-[560px]">
      <svg viewBox="0 0 560 300" className="w-full">
        <defs>
          <marker id="gl-arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto">
            <path d="M0 0 L10 5 L0 10 z" fill={cobalt} />
          </marker>
          <marker id="gl-arr-t" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto">
            <path d="M0 0 L10 5 L0 10 z" fill="var(--color-terracotta)" />
          </marker>
        </defs>
        <path d="M160 96 A36 36 0 0 1 196 60" fill="none" stroke={cobalt} strokeWidth="1.5" />
        <path d="M364 60 A36 36 0 0 1 400 96" fill="none" stroke={cobalt} strokeWidth="1.5" />
        <path d="M400 184 A36 36 0 0 1 364 220" fill="none" stroke={cobalt} strokeWidth="1.5" />
        <path d="M196 220 A36 36 0 0 1 160 184" fill="none" stroke="var(--color-terracotta)" strokeWidth="1.5" />
        <path d="M196 60 L300 60" fill="none" stroke={cobalt} strokeWidth="1.5" markerEnd="url(#gl-arr)" />
        <path d="M300 60 L364 60" fill="none" stroke={cobalt} strokeWidth="1.5" />
        <path d="M400 96 L400 150" fill="none" stroke={cobalt} strokeWidth="1.5" markerEnd="url(#gl-arr)" />
        <path d="M400 150 L400 184" fill="none" stroke={cobalt} strokeWidth="1.5" />
        <path d="M364 220 L300 220" fill="none" stroke={cobalt} strokeWidth="1.5" markerEnd="url(#gl-arr)" />
        <path d="M300 220 L196 220" fill="none" stroke={cobalt} strokeWidth="1.5" />
        <path d="M160 184 L160 130" fill="none" stroke="var(--color-terracotta)" strokeWidth="1.5" markerEnd="url(#gl-arr-t)" />
        <path d="M160 130 L160 96" fill="none" stroke="var(--color-terracotta)" strokeWidth="1.5" />
        <circle cx="160" cy="140" r="5" fill="white" stroke="var(--color-terracotta)" strokeWidth="2" />
        <circle cx="280" cy="60" r="5" fill="white" stroke={cobalt} strokeWidth="2" />
        <circle cx="400" cy="140" r="5" fill="white" stroke={cobalt} strokeWidth="2" />
        <circle cx="280" cy="220" r="5" fill="white" stroke={cobalt} strokeWidth="2" />
        <text x="146" y="134" textAnchor="end" fontFamily="var(--font-sans)" fontSize="13" fontWeight="600" fill="var(--color-ink)">
          Technical
          <tspan x="146" dy="16">foundation</tspan>
        </text>
        <text x="280" y="38" textAnchor="middle" fontFamily="var(--font-sans)" fontSize="13" fontWeight="600" fill="var(--color-ink)">
          Content &amp; SEO
        </text>
        <text x="414" y="134" textAnchor="start" fontFamily="var(--font-sans)" fontSize="13" fontWeight="600" fill="var(--color-ink)">
          Campaigns
          <tspan x="414" dy="16">that convert</tspan>
        </text>
        <text x="280" y="252" textAnchor="middle" fontFamily="var(--font-sans)" fontSize="13" fontWeight="600" fill="var(--color-ink)">
          Measure &amp; learn
        </text>
        <text x="280" y="136" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="10.5" letterSpacing="2" fill="var(--color-ink-faint)">
          THE GROWTH LOOP
        </text>
        <text x="280" y="154" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="10" fill="var(--color-terracotta)">
          each pass compounds
        </text>
      </svg>
    </figure>
  );
}

const disciplines = [
  {
    index: "01",
    title: "Technical SEO",
    body: "Crawlability, Core Web Vitals, structured data and clean information architecture — fixed at the code level, because we build sites too.",
  },
  {
    index: "02",
    title: "Content strategy",
    body: "Pages written for questions your customers actually ask, mapped to intent and kept fresh.",
  },
  {
    index: "03",
    title: "Paid search & social",
    body: "Campaigns on Google and Meta run against clear cost targets, with creative that matches the landing page.",
  },
  {
    index: "04",
    title: "Conversion-rate optimisation",
    body: "Hypotheses, experiments and landing-page iterations — shipped as code, not mock-ups.",
  },
  {
    index: "05",
    title: "Analytics & attribution",
    body: "Clean tracking, honest attribution and dashboards your whole team can read.",
  },
  {
    index: "06",
    title: "Reporting & iteration",
    body: "A monthly rhythm: what moved, why, and what we'll do next — in plain language.",
  },
];

const cadence = [
  { when: "Weeks 1–2", what: "Audit & baseline — technical, content and tracking" },
  { when: "Month 1", what: "Foundation fixes shipped to the site itself" },
  { when: "Monthly", what: "The loop runs: publish, promote, measure, adjust" },
  { when: "Quarterly", what: "Strategy review against the numbers that matter" },
];

export function DigitalMarketingSeoPage({
  service,
  category,
}: {
  service: Service;
  category: ServiceCategory;
}) {
  return (
    <>
      {/* Hero: campaign dashboard on a warm stage */}
      <section className="relative overflow-hidden border-b border-line">
        <div
          aria-hidden
          className="absolute top-0 right-0 h-full w-[54%] rounded-bl-[6rem] bg-cream/70 max-lg:hidden"
        />
        <Container className="relative grid items-center gap-12 pt-32 pb-14 md:pt-40 lg:grid-cols-[1fr_1.05fr]">
          <div>
            <Reveal>
              <ServiceBreadcrumb category={category} />
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="mt-6 font-display text-display-lg font-semibold text-ink">
                Digital Marketing &amp; SEO
                <span className="text-terracotta">.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-ink-soft">
                Build visibility, attract the right audience and turn
                engagement into measurable business growth.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <Button asChild size="lg">
                  <Link href="/contact">
                    Grow your business
                    <ArrowUpRight aria-hidden />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/work">View case studies</Link>
                </Button>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.18} y={36} className="w-full">
            <LaptopFrame className="mx-auto max-w-lg">
              <MarketingDashboard />
            </LaptopFrame>
            <div className="mt-6 flex flex-wrap justify-center gap-2.5">
              {[
                { icon: TrendingUp, text: "Organic traffic — compounding" },
                { icon: Target, text: "Leads — fully attributed" },
                { icon: Wallet, text: "Spend — accountable" },
              ].map(({ icon: Icon, text }) => (
                <span
                  key={text}
                  className="flex items-center gap-2 rounded-full border border-line bg-white px-3.5 py-1.5 shadow-sm"
                >
                  <Icon aria-hidden className="size-3.5 text-cobalt" strokeWidth={2} />
                  <span className="font-mono text-[0.65rem] text-ink-soft">{text}</span>
                </span>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      <CapabilityRow
        heading="Our capabilities"
        items={[
          { icon: Search, title: "SEO & Organic Growth", detail: "Found for what matters" },
          { icon: Megaphone, title: "Performance Marketing", detail: "Paid that pays back" },
          { icon: FileText, title: "Content Marketing", detail: "Answers, not noise" },
          { icon: Share2, title: "Social Campaigns", detail: "Audience, built honestly" },
          { icon: BarChart3, title: "Analytics & Reporting", detail: "Plain-language numbers" },
        ]}
      />

      {/* The growth loop */}
      <section className="border-b border-line">
        <Container className="grid items-center gap-10 py-16 md:py-20 lg:grid-cols-[1fr_1.3fr]">
          <div>
            <Reveal>
              <p className="eyebrow text-terracotta">How it works</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-4 font-display text-display-md font-medium text-ink">
                Marketing as an engineering loop.
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-5 max-w-md leading-relaxed text-ink-soft">
                One-off campaigns fade. We run a continuous loop where every
                fix, page and campaign feeds the next decision — so results
                compound instead of resetting each quarter.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.15} y={28}>
            <GrowthLoop />
          </Reveal>
        </Container>
      </section>

      {/* Disciplines */}
      <section id="disciplines" className="scroll-mt-24">
        <Container className="section-pad">
          <div className="max-w-xl">
            <Reveal>
              <p className="eyebrow text-terracotta">What&apos;s included</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-4 font-display text-display-md font-medium text-ink">
                Six disciplines, one retainer.
              </h2>
            </Reveal>
          </div>
          <div className="mt-12 grid gap-x-16 gap-y-10 md:grid-cols-2">
            {disciplines.map((discipline, i) => (
              <Reveal key={discipline.index} delay={Math.min(i * 0.05, 0.25)}>
                <article className="grid grid-cols-[3rem_1fr] border-t border-line pt-5">
                  <span className="font-mono text-xs text-cobalt">
                    {discipline.index}
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-medium text-ink">
                      {discipline.title}
                    </h3>
                    <p className="mt-2 leading-relaxed text-ink-soft">
                      {discipline.body}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Reporting & cadence */}
      <section className="border-y border-line bg-cream/55">
        <Container className="grid items-center gap-12 py-16 md:py-24 lg:grid-cols-2 lg:gap-16">
          <div>
            <Reveal>
              <p className="eyebrow text-terracotta">Accountability</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-4 font-display text-display-md font-medium text-ink">
                Reporting you can actually read.
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-5 max-w-md text-lg leading-relaxed text-ink-soft">
                No vanity decks. Every month you get the same dashboards we
                look at, a plain-language account of what moved and why, and
                the plan for the next pass of the loop.
              </p>
            </Reveal>
            <div className="mt-9">
              {cadence.map((item, i) => (
                <Reveal key={item.when} delay={0.1 + i * 0.06}>
                  <div className="grid grid-cols-[6.5rem_1fr] items-baseline gap-4 border-t border-line py-3.5">
                    <span className="font-mono text-xs tracking-[0.1em] text-cobalt uppercase">
                      {item.when}
                    </span>
                    <span className="text-sm leading-relaxed text-ink">
                      {item.what}
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={0.15} y={36}>
            <div className="relative pb-16 pl-6 sm:pl-12">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-cream">
                <Image
                  src="/images/services/digital-marketing-seo.jpg"
                  alt="Marketing analytics dashboard open on a laptop"
                  fill
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div
                aria-hidden
                className="absolute bottom-0 left-0 w-64 rounded-xl border border-line bg-white p-5 shadow-[0_24px_48px_-24px_rgb(32_36_44_/_0.3)]"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[0.62rem] tracking-[0.16em] text-ink-faint uppercase">
                    Monthly report
                  </span>
                  <span className="size-2 rounded-full bg-terracotta" />
                </div>
                {["What moved", "Why it moved", "Next actions"].map((row) => (
                  <div key={row} className="mt-4">
                    <p className="text-xs font-medium text-ink">{row}</p>
                    <div className="mt-1.5 space-y-1">
                      <Bar w="88%" />
                      <Bar w="64%" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <DeliverablesStrip
        service={service}
        tools={["Google Analytics 4", "Search Console", "Google Ads", "Meta Ads", "Looker Studio"]}
      />

      <RelatedStrip category={category} currentSlug={service.slug} />

      <ImpactCta
        statement="Data-driven marketing for real business impact."
        copy="We'll audit your technical foundation, content and tracking — and tell you plainly what we'd fix first and why."
        image="/images/services/digital-marketing-seo.jpg"
        imageAlt="Analytics charts on a laptop screen"
        cta="Get an honest audit"
      />
    </>
  );
}
