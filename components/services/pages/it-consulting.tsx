import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  CloudCog,
  Compass,
  FileSearch,
  FileText,
  Layers,
  Map,
  Scale,
  ShieldCheck,
  Workflow,
} from "lucide-react";

import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import { RelatedStrip, ServiceBreadcrumb } from "@/components/services/blocks";
import { NavyWaveCta, StatementBand, TileRow } from "@/components/services/biz/ui";
import { Bar } from "@/components/services/biz/screens";
import { Button } from "@/components/ui/button";
import type { Service, ServiceCategory } from "@/lib/services";

const engagements = [
  {
    icon: FileSearch,
    doc: "DOC 01",
    title: "Technology Audit",
    toc: ["Current architecture", "Risk register", "Quick wins", "What we'd fix first"],
    note: "fixed scope · 2–3 weeks of looking, honestly",
  },
  {
    icon: Map,
    doc: "DOC 02",
    title: "Product & Platform Roadmap",
    toc: ["Where you're headed", "Build vs buy calls", "Sequencing & waves", "Team & budget shape"],
    note: "a plan your board can read",
  },
  {
    icon: Scale,
    doc: "DOC 03",
    title: "Technical Due Diligence",
    toc: ["Codebase & architecture", "Team & process", "Scalability limits", "Red flags, plainly"],
    note: "for investors & acquirers",
  },
];

const current = ["legacy core", "manual handoffs", "siloed data", "key-person risk"];
const future = ["modern platform", "automated flows", "one source of truth", "documented & owned"];

const questions = [
  "Should we build this, or buy it?",
  "Why does every release take longer than the last?",
  "Is our stack ageing faster than the business?",
  "What breaks first if we double in size?",
  "Are we spending on the right things?",
];

export function ItConsultingPage({
  category,
}: {
  service: Service;
  category: ServiceCategory;
}) {
  return (
    <>
      {/* Hero: arched strategy-room photography */}
      <section className="relative overflow-hidden border-b border-line">
        <Container className="relative grid items-center gap-12 pt-32 pb-16 md:pt-40 lg:grid-cols-[1fr_1.05fr]">
          <div>
            <Reveal>
              <ServiceBreadcrumb category={category} />
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="mt-6 font-display text-display-lg font-semibold text-ink">
                IT Consulting
                <span className="text-terracotta">.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-ink-soft">
                Strategic technology guidance and end-to-end transformation to
                make your business future-ready — in writing, with reasons.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <Button asChild size="lg">
                  <Link href="/contact">
                    Consult our experts
                    <ArrowUpRight aria-hidden />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="#engagements">Our approach</Link>
                </Button>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.18} y={36} className="relative w-full">
            <div className="relative overflow-hidden rounded-b-[2rem] rounded-t-[7rem]">
              <div className="relative aspect-[5/4]">
                <Image
                  src="/images/services/it-consulting.jpg"
                  alt="A strategy workshop with notes mapped across a wall"
                  fill
                  priority
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
            <div className="absolute -bottom-4 left-4 flex items-center gap-3 rounded-2xl border border-line bg-white px-4 py-3 shadow-[0_18px_36px_-18px_rgb(32_36_44_/_0.4)] sm:left-8">
              <FileText aria-hidden className="size-5 text-cobalt" strokeWidth={1.7} />
              <p className="text-xs leading-snug">
                <span className="block font-semibold text-ink">Advice in writing</span>
                <span className="text-ink-soft">a roadmap you keep, either way</span>
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      <StatementBand
        statement="Strategy. Technology. Transformation."
        copy="We help businesses modernise, optimise and innovate with the right technology, processes and digital strategy — chosen for your context, not our convenience."
      />

      <TileRow
        eyebrow="Where we advise"
        items={[
          { icon: Compass, title: "Technology Strategy", sub: "Direction with reasons" },
          { icon: Workflow, title: "Process Optimisation", sub: "Less friction, fewer handoffs" },
          { icon: Layers, title: "Digital Modernisation", sub: "Legacy, retired safely" },
          { icon: CloudCog, title: "Cloud Advisory", sub: "The right cloud, right-sized" },
          { icon: ShieldCheck, title: "IT Governance & Security", sub: "Risk, made visible" },
        ]}
      />

      {/* Engagement documents */}
      <section id="engagements" className="scroll-mt-24 border-y border-line bg-white">
        <Container className="py-16 md:py-20">
          <Reveal>
            <p className="eyebrow text-terracotta">How an engagement looks</p>
            <h2 className="mt-4 max-w-xl font-display text-display-md font-medium text-ink">
              Three documents we&apos;re known for.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {engagements.map(({ icon: Icon, doc, title, toc, note }, i) => (
              <Reveal key={doc} delay={Math.min(i * 0.08, 0.3)}>
                <article className="flex h-full flex-col rounded-lg border border-line bg-ivory shadow-[0_18px_36px_-24px_rgb(32_36_44_/_0.35)]">
                  <div className="flex items-center justify-between border-b border-line px-6 py-3">
                    <span className="font-mono text-[0.65rem] tracking-[0.18em] text-ink-faint uppercase">
                      {doc}
                    </span>
                    <Icon aria-hidden className="size-4.5 text-cobalt" strokeWidth={1.7} />
                  </div>
                  <div className="flex-1 px-6 py-5">
                    <h3 className="font-display text-xl font-medium text-ink">
                      {title}
                    </h3>
                    <ol className="mt-4 space-y-2.5">
                      {toc.map((item, j) => (
                        <li key={item} className="flex items-baseline gap-3 text-sm text-ink-soft">
                          <span className="font-mono text-[0.62rem] text-ink-faint">
                            {String(j + 1).padStart(2, "0")}
                          </span>
                          <span className="flex-1 border-b border-dotted border-line pb-1">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ol>
                  </div>
                  <p className="border-t border-line px-6 py-3 font-mono text-[0.62rem] text-terracotta">
                    {note}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Current → future bridge */}
      <section>
        <Container className="py-16 md:py-20">
          <Reveal>
            <p className="eyebrow text-cobalt">Transformation, sequenced</p>
            <h2 className="mt-4 max-w-xl font-display text-display-md font-medium text-ink">
              From where you are to where you&apos;re going.
            </h2>
          </Reveal>
          <Reveal delay={0.12} y={32}>
            <div className="mt-12 grid items-stretch gap-6 lg:grid-cols-[1fr_auto_1fr]">
              <div className="rounded-2xl border border-line bg-cream/70 p-7">
                <p className="eyebrow text-ink-faint">Current state</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {current.map((chip) => (
                    <span key={chip} className="rounded-full border border-line bg-white px-3 py-1.5 text-xs text-ink-soft">
                      {chip}
                    </span>
                  ))}
                </div>
                <div className="mt-5 space-y-1.5 opacity-60">
                  <Bar w="85%" />
                  <Bar w="60%" />
                </div>
              </div>

              <div className="flex items-center justify-center lg:flex-col lg:px-2">
                <svg aria-hidden viewBox="0 0 140 70" className="w-32 max-lg:rotate-90">
                  <path d="M8 56 C 40 12, 100 12, 132 56" fill="none" stroke="var(--color-cobalt)" strokeWidth="2.5" strokeLinecap="round" />
                  <path d="M122 48 L132 56 L120 60" fill="none" stroke="var(--color-cobalt)" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
                <p className="hidden text-center font-mono text-[0.6rem] leading-relaxed text-ink-faint lg:block">
                  replatform
                  <br />
                  automate
                  <br />
                  integrate
                </p>
              </div>

              <div className="rounded-2xl bg-navy p-7">
                <p className="eyebrow text-terracotta">Future state</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {future.map((chip) => (
                    <span key={chip} className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs text-white/90">
                      {chip}
                    </span>
                  ))}
                </div>
                <p className="mt-5 font-mono text-[0.62rem] text-white/55">
                  reached in waves — the business keeps running
                </p>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Questions ledger */}
      <section className="border-t border-line bg-white">
        <Container className="grid gap-10 py-16 md:py-20 lg:grid-cols-[0.8fr_2.2fr] lg:gap-16">
          <Reveal>
            <p className="eyebrow text-terracotta">Sound familiar?</p>
            <h2 className="mt-4 font-display text-display-sm font-medium text-ink">
              Questions we get hired to answer.
            </h2>
          </Reveal>
          <div>
            {questions.map((q, i) => (
              <Reveal key={q} delay={Math.min(i * 0.05, 0.25)}>
                <div className="flex items-baseline gap-5 border-t border-line py-4.5 last:border-b">
                  <span className="font-mono text-xs text-cobalt">
                    Q{String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="font-display text-lg font-medium text-ink sm:text-xl">
                    {q}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <RelatedStrip category={category} currentSlug="it-consulting" />

      <NavyWaveCta
        heading="Transform your business for what's next."
        copy="Let's discuss your goals and build a practical transformation roadmap."
        image="/images/earth-network.jpg"
        imageAlt="Earth at night, city lights tracing networks"
        cta="Start a conversation"
      />
    </>
  );
}
