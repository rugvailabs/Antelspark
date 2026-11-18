import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  CheckCheck,
  ClipboardList,
  FileText,
  GitPullRequest,
  Keyboard,
  ScrollText,
  ShieldCheck,
  UserCheck,
  Workflow,
} from "lucide-react";

import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import { AuroraCta, DarkHero, GlassChip } from "@/components/services/ai/ui";
import { Button } from "@/components/ui/button";
import type { Service, ServiceCategory } from "@/lib/services";

/* Hero visual: four manual chores collapsing into one automated flow. */
function WorkflowCollapse() {
  const chores = ["invoice.pdf → inbox", "copy to spreadsheet", "chase approval", "status email"];
  return (
    <div aria-hidden className="flex items-center gap-4 sm:gap-6">
      <div className="space-y-2.5">
        {chores.map((chore) => (
          <div
            key={chore}
            className="flex items-center gap-2.5 rounded-lg border border-white/12 bg-white/[0.05] px-3.5 py-2.5"
          >
            <span className="size-1.5 rounded-full bg-white/35" />
            <span className="font-mono text-[0.68rem] text-white/55">{chore}</span>
          </div>
        ))}
      </div>

      <svg viewBox="0 0 48 160" className="h-36 w-10 shrink-0 sm:h-40">
        {[20, 62, 104, 146].map((y) => (
          <path
            key={y}
            d={`M2 ${y - 3} C 22 ${y - 3}, 26 80, 46 80`}
            fill="none"
            stroke="rgb(255 255 255 / 0.25)"
            strokeWidth="1.3"
            strokeDasharray="3 4"
          />
        ))}
      </svg>

      <div className="flex flex-col items-center gap-3">
        <span className="relative grid size-16 place-items-center rounded-2xl bg-gradient-to-br from-cobalt to-[#6a58e8] shadow-[0_20px_40px_-12px_rgb(36_87_214_/_0.6)]">
          <span className="absolute inset-0 rounded-2xl border border-white/30" />
          <Bot className="size-7 text-white" strokeWidth={1.7} />
        </span>
        <span className="font-mono text-[0.62rem] tracking-[0.14em] text-white/55 uppercase">
          one pipeline
        </span>
      </div>

      <svg viewBox="0 0 40 24" className="w-8 shrink-0">
        <path d="M2 12 H30" stroke="rgb(255 255 255 / 0.45)" strokeWidth="1.5" />
        <path d="M24 5 L34 12 L24 19" fill="none" stroke="rgb(255 255 255 / 0.45)" strokeWidth="1.5" />
      </svg>

      <div className="rounded-xl border border-white/20 bg-white/10 px-4 py-3.5 backdrop-blur-sm">
        <div className="flex items-center gap-2">
          <CheckCheck className="size-4 text-[#7ee0a3]" strokeWidth={2} />
          <span className="text-sm font-medium text-white">Done</span>
        </div>
        <span className="mt-0.5 block font-mono text-[0.62rem] text-white/55">
          reviewed · logged
        </span>
      </div>
    </div>
  );
}

const ledger = [
  {
    icon: FileText,
    title: "Document processing",
    body: "Invoices, forms and contracts read, extracted and filed.",
    tag: "paper → data",
  },
  {
    icon: GitPullRequest,
    title: "Approvals & handoffs",
    body: "Requests routed to the right person with context attached.",
    tag: "no more chasing",
  },
  {
    icon: Keyboard,
    title: "Data entry between tools",
    body: "The same fields typed into three systems — by nobody.",
    tag: "typed once",
  },
  {
    icon: ClipboardList,
    title: "Reporting & status updates",
    body: "Summaries written and sent on schedule, from live data.",
    tag: "always current",
  },
];

const integrations = [
  { name: "Gmail", file: "/logos/color/gmail.svg" },
  { name: "Google Sheets", file: "/logos/color/googlesheets.svg" },
  { name: "Notion", file: "/logos/color/notion.svg" },
  { name: "Zapier", file: "/logos/color/zapier.svg" },
  { name: "Shopify", file: "/logos/color/shopify.svg" },
  { name: "Stripe", file: "/logos/color/stripe.svg" },
  { name: "WordPress", file: "/logos/color/wordpress.svg" },
  { name: "Telegram", file: "/logos/color/telegram.svg" },
];

export function AiAutomationPage({
  category,
}: {
  service: Service;
  category: ServiceCategory;
}) {
  return (
    <>
      {/* Dark hero: the collapse of busywork */}
      <DarkHero>
        <Container className="relative grid items-center gap-14 pt-32 pb-24 md:pt-40 md:pb-32 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <Reveal>
              <nav
                aria-label="Breadcrumb"
                className="font-mono text-xs tracking-[0.12em] text-white/55 uppercase"
              >
                <Link href="/services" className="transition-colors hover:text-white">
                  Services
                </Link>
                <span aria-hidden className="mx-2">/</span>
                <Link
                  href={`/services#${category.key}`}
                  className="transition-colors hover:text-white"
                >
                  {category.title}
                </Link>
              </nav>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="mt-6 font-display text-display-lg font-semibold text-white">
                AI{" "}
                <span className="bg-gradient-to-r from-[#8fa8f7] to-[#b49cf8] bg-clip-text text-transparent">
                  Automation
                </span>
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-white/75">
                The busywork your team does every day, done by software —
                reliably, with humans in the loop where it matters.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <Button asChild size="lg">
                  <Link href="/contact">
                    Automate a workflow
                    <ArrowUpRight aria-hidden />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline-inverse">
                  <Link href="#trust">How we keep it safe</Link>
                </Button>
              </div>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="mt-10 flex flex-wrap gap-3">
                <GlassChip icon={UserCheck} label="Human-in-the-loop" value="where it matters" />
                <GlassChip icon={ScrollText} label="Audit trail" value="every action logged" />
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.18} y={36} className="justify-self-center lg:justify-self-end">
            <WorkflowCollapse />
          </Reveal>
        </Container>
      </DarkHero>

      {/* Where the hours go */}
      <section>
        <Container className="grid gap-12 py-16 md:py-20 lg:grid-cols-[0.8fr_2.2fr] lg:gap-16">
          <Reveal>
            <span aria-hidden className="block h-1.5 w-10 rounded-full bg-terracotta" />
            <h2 className="mt-5 font-display text-display-md font-medium text-ink">
              Where the hours go.
            </h2>
            <p className="mt-4 max-w-xs leading-relaxed text-ink-soft">
              Most teams lose whole days to work nobody was hired to do. These
              are the first places we look.
            </p>
          </Reveal>
          <div>
            {ledger.map(({ icon: Icon, title, body, tag }, i) => (
              <Reveal key={title} delay={Math.min(i * 0.06, 0.25)}>
                <div className="grid grid-cols-[auto_1fr_auto] items-center gap-5 border-t border-line py-5 last:border-b">
                  <span className="flex size-11 items-center justify-center rounded-xl bg-cobalt-wash text-cobalt">
                    <Icon aria-hidden className="size-5" strokeWidth={1.7} />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-medium text-ink">
                      {title}
                    </h3>
                    <p className="mt-0.5 text-sm leading-relaxed text-ink-soft">
                      {body}
                    </p>
                  </div>
                  <span className="hidden rounded-full border border-line px-3 py-1 font-mono text-[0.65rem] text-ink-faint sm:block">
                    {tag}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Before / after */}
      <section className="border-y border-line bg-white">
        <Container className="py-16 md:py-20">
          <Reveal>
            <p className="eyebrow text-cobalt">The difference</p>
            <h2 className="mt-4 max-w-xl font-display text-display-md font-medium text-ink">
              Same work. Different week.
            </h2>
          </Reveal>
          <Reveal delay={0.12} y={32}>
            <div className="relative mt-10 grid overflow-hidden rounded-3xl border border-line lg:grid-cols-2">
              <div className="bg-cream/70 p-8 sm:p-10">
                <p className="eyebrow text-ink-faint">Before</p>
                <ul className="mt-6 space-y-4">
                  {[
                    "Inbox checked for new requests",
                    "Details re-typed into the tracker",
                    "Manager pinged for sign-off… twice",
                    "Spreadsheet updated by hand",
                    "Status email written at 6pm",
                  ].map((step) => (
                    <li key={step} className="flex items-start gap-3 text-sm text-ink-soft">
                      <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-ink/30" />
                      {step}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 font-mono text-[0.65rem] tracking-[0.14em] text-ink-faint uppercase">
                  manual · repetitive · error-prone
                </p>
              </div>
              <div className="bg-navy p-8 sm:p-10">
                <p className="eyebrow text-terracotta">After</p>
                <ul className="mt-6 space-y-5">
                  {[
                    { icon: Workflow, text: "Request arrives — pipeline triggers itself" },
                    { icon: Bot, text: "AI extracts, validates and files the details" },
                    { icon: UserCheck, text: "A person approves only the unusual cases" },
                  ].map(({ icon: Icon, text }) => (
                    <li key={text} className="flex items-start gap-3.5 text-sm text-white/85">
                      <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-white/10 text-white">
                        <Icon aria-hidden className="size-4" strokeWidth={1.8} />
                      </span>
                      <span className="pt-1.5">{text}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-7 font-mono text-[0.65rem] tracking-[0.14em] text-white/50 uppercase">
                  automated · consistent · fully logged
                </p>
              </div>
              <span className="absolute top-1/2 left-1/2 hidden -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-white bg-terracotta px-4 py-2 font-display text-sm font-semibold text-white lg:block">
                VS
              </span>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Trust: human in the loop */}
      <section id="trust" className="scroll-mt-24">
        <Container className="grid items-center gap-12 py-16 md:py-20 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
          <div>
            <Reveal>
              <p className="eyebrow text-cobalt">Automation you can trust</p>
              <h2 className="mt-4 font-display text-display-md font-medium text-ink">
                The robot does the work. People keep the judgement.
              </h2>
            </Reveal>
            <ul className="mt-8 space-y-5">
              {[
                {
                  icon: ShieldCheck,
                  title: "Confidence thresholds",
                  body: "Anything the AI isn't sure about goes to a person, automatically.",
                },
                {
                  icon: UserCheck,
                  title: "Approval gates",
                  body: "You decide which actions always need a human yes.",
                },
                {
                  icon: ScrollText,
                  title: "Complete audit trail",
                  body: "Every decision, input and output recorded and reviewable.",
                },
              ].map(({ icon: Icon, title, body }, i) => (
                <Reveal key={title} delay={0.08 + i * 0.07}>
                  <li className="flex items-start gap-4">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-cobalt-wash text-cobalt">
                      <Icon aria-hidden className="size-5" strokeWidth={1.7} />
                    </span>
                    <div>
                      <h3 className="font-medium text-ink">{title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-ink-soft">{body}</p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>

          {/* Gate diagram */}
          <Reveal delay={0.15} y={32}>
            <figure aria-hidden className="w-full">
              <svg viewBox="0 0 560 300" className="w-full">
                <defs>
                  <marker id="auto-arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
                    <path d="M0 0 L10 5 L0 10 z" fill="var(--color-ink-soft)" />
                  </marker>
                </defs>
                <rect x="16" y="120" width="120" height="52" rx="10" fill="white" stroke="var(--color-cobalt)" strokeWidth="1.5" />
                <text x="76" y="142" textAnchor="middle" fontFamily="var(--font-sans)" fontSize="13" fontWeight="600" fill="var(--color-ink)">Automated</text>
                <text x="76" y="158" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="9.5" fill="var(--color-ink-faint)">pipeline runs</text>

                <path d="M136 146 L196 146" stroke="var(--color-ink-soft)" strokeWidth="1.4" markerEnd="url(#auto-arr)" />

                <polygon points="268,96 340,146 268,196 196,146" fill="var(--color-cobalt-wash)" stroke="var(--color-cobalt)" strokeWidth="1.5" />
                <text x="268" y="141" textAnchor="middle" fontFamily="var(--font-sans)" fontSize="12.5" fontWeight="600" fill="var(--color-ink)">Confident?</text>
                <text x="268" y="157" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="9.5" fill="var(--color-ink-soft)">threshold check</text>

                <path d="M340 146 L432 146" stroke="var(--color-ink-soft)" strokeWidth="1.4" markerEnd="url(#auto-arr)" />
                <text x="378" y="136" fontFamily="var(--font-mono)" fontSize="10" fill="#3d9960">yes</text>

                <path d="M268 196 L268 236 L312 236" stroke="var(--color-terracotta)" strokeWidth="1.4" markerEnd="url(#auto-arr)" />
                <text x="246" y="226" fontFamily="var(--font-mono)" fontSize="10" fill="var(--color-terracotta)">no</text>

                <rect x="314" y="212" width="132" height="48" rx="10" fill="white" stroke="var(--color-terracotta)" strokeWidth="1.5" />
                <text x="380" y="232" textAnchor="middle" fontFamily="var(--font-sans)" fontSize="13" fontWeight="600" fill="var(--color-ink)">Human review</text>
                <text x="380" y="248" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="9.5" fill="var(--color-ink-faint)">edge cases only</text>

                <path d="M446 236 C 486 236, 486 170, 466 156" stroke="var(--color-ink-soft)" strokeWidth="1.4" fill="none" markerEnd="url(#auto-arr)" strokeDasharray="4 4" />

                <rect x="434" y="120" width="110" height="52" rx="10" fill="var(--color-navy)" />
                <text x="489" y="142" textAnchor="middle" fontFamily="var(--font-sans)" fontSize="13" fontWeight="600" fill="white">Done</text>
                <text x="489" y="158" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="9.5" fill="rgb(255 255 255 / 0.55)">logged &amp; traceable</text>
              </svg>
              <figcaption className="mt-3 font-mono text-[0.65rem] tracking-[0.14em] text-ink-faint uppercase">
                Fig. AUT-01 — every run passes the same gate
              </figcaption>
            </figure>
          </Reveal>
        </Container>
      </section>

      {/* Integrations */}
      <section className="border-t border-line bg-white">
        <Container className="py-14 md:py-16">
          <div className="flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
            <Reveal>
              <p className="eyebrow text-cobalt">Plays well with others</p>
              <h2 className="mt-3 max-w-sm font-display text-display-sm font-medium text-ink">
                Works inside the tools you already use.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <ul className="flex max-w-2xl flex-wrap gap-2.5">
                {integrations.map((tool) => (
                  <li
                    key={tool.name}
                    className="flex items-center gap-2.5 rounded-full border border-line bg-ivory px-4 py-2"
                  >
                    <Image src={tool.file} alt="" width={18} height={18} className="size-[18px]" />
                    <span className="text-sm font-medium text-ink">{tool.name}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Start small strip */}
      <section>
        <Container className="py-14 md:py-16">
          <Reveal>
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              {[
                { n: "01", text: "Pick one painful workflow" },
                { n: "02", text: "Pilot it in weeks, measured" },
                { n: "03", text: "Expand only what proves out" },
              ].map(({ n, text }, i) => (
                <div key={n} className="flex items-center gap-4">
                  <span className="font-display text-3xl font-semibold text-cobalt/30">
                    {n}
                  </span>
                  <span className="max-w-[12rem] font-medium text-ink">{text}</span>
                  {i < 2 && (
                    <ArrowRight aria-hidden className="ml-2 hidden size-5 text-terracotta sm:block" />
                  )}
                </div>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      <AuroraCta
        heading="What should your team stop doing by hand?"
        copy="Tell us about the busywork — we'll tell you honestly what's automatable, and prove it on one workflow first."
      />
    </>
  );
}
