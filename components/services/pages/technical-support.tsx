import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  FileSearch,
  Headphones,
  Mail,
  MessageCircle,
  MessagesSquare,
  Phone,
  Search,
  Wrench,
} from "lucide-react";

import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import { RelatedStrip, ServiceBreadcrumb } from "@/components/services/blocks";
import { NavyWaveCta, StatementBand } from "@/components/services/biz/ui";
import { TicketCard } from "@/components/services/biz/screens";
import { Button } from "@/components/ui/button";
import type { Service, ServiceCategory } from "@/lib/services";

const severities = [
  {
    level: "S1",
    name: "Everything is down",
    what: "Production outage, data at risk, customers locked out.",
    response: "All hands, immediately — everything else waits.",
    tone: "bg-terracotta text-white",
  },
  {
    level: "S2",
    name: "Badly degraded",
    what: "Core features failing for many users; a workaround may exist.",
    response: "Our fastest lane short of an outage.",
    tone: "bg-navy text-white",
  },
  {
    level: "S3",
    name: "Something's broken",
    what: "A feature misbehaving for some users or an internal team.",
    response: "Triaged the same working day, scheduled with care.",
    tone: "bg-cobalt text-white",
  },
  {
    level: "S4",
    name: "Question or niggle",
    what: "How-tos, small requests, cosmetic issues.",
    response: "Answered in order — and often turned into documentation.",
    tone: "bg-cobalt-wash text-cobalt",
  },
];

const lifecycle = [
  { icon: MessageCircle, step: "Report", note: "Any channel — a human reads it" },
  { icon: Search, step: "Triage", note: "Severity set, owner assigned" },
  { icon: Wrench, step: "Fix", note: "You're updated as we work" },
  { icon: MessagesSquare, step: "Verify", note: "Closed only when you confirm" },
  { icon: FileSearch, step: "Postmortem", note: "S1/S2 get a written why" },
];

const channels = [
  { icon: Mail, label: "Email" },
  { icon: Phone, label: "Phone" },
  { icon: MessageCircle, label: "Chat" },
  { icon: Headphones, label: "Portal" },
];

export function TechnicalSupportPage({
  category,
}: {
  service: Service;
  category: ServiceCategory;
}) {
  return (
    <>
      {/* Hero: support desk photography + live ticket card */}
      <section className="relative overflow-hidden border-b border-line">
        <div
          aria-hidden
          className="absolute top-0 right-0 h-[85%] w-[52%] rounded-bl-[8rem] bg-cobalt-wash/60 max-lg:hidden"
        />
        <Container className="relative grid items-center gap-12 pt-32 pb-16 md:pt-40 lg:grid-cols-[1fr_1.05fr]">
          <div>
            <Reveal>
              <ServiceBreadcrumb category={category} />
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="mt-6 font-display text-display-lg font-semibold text-ink">
                Technical Support
                <span className="text-terracotta">.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-ink-soft">
                When something breaks, you need a human who knows your system
                — not a queue that knows your ticket number.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <Button asChild size="lg">
                  <Link href="/contact">
                    Set up support
                    <ArrowUpRight aria-hidden />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="#severity">How we prioritise</Link>
                </Button>
              </div>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="mt-10 flex flex-wrap gap-2.5">
                {channels.map(({ icon: Icon, label }) => (
                  <span
                    key={label}
                    className="flex items-center gap-2 rounded-full border border-line bg-white px-3.5 py-1.5 shadow-sm"
                  >
                    <Icon aria-hidden className="size-3.5 text-cobalt" strokeWidth={2} />
                    <span className="text-xs font-medium text-ink">{label}</span>
                  </span>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.18} y={36} className="relative w-full">
            <div className="relative mx-auto max-w-md">
              <div className="relative aspect-[5/4] overflow-hidden rounded-[2rem]">
                <Image
                  src="/images/services/technical-support.jpg"
                  alt="A tidy support desk with laptop and phone"
                  fill
                  priority
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-2 sm:left-6">
                <TicketCard />
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <StatementBand
        statement="Help that actually helps."
        copy="Real triage, honest updates and fixes verified with you — whether we built the system or inherited it."
      />

      {/* Severity lanes */}
      <section id="severity" className="scroll-mt-24">
        <Container className="py-16 md:py-20">
          <Reveal>
            <p className="eyebrow text-terracotta">How we prioritise</p>
            <h2 className="mt-4 max-w-xl font-display text-display-md font-medium text-ink">
              Not every fire is a fire. The real ones jump the queue.
            </h2>
          </Reveal>
          <div className="mt-12 space-y-4">
            {severities.map(({ level, name, what, response, tone }, i) => (
              <Reveal key={level} delay={Math.min(i * 0.06, 0.25)}>
                <div className="grid items-center gap-4 rounded-2xl border border-line bg-white p-5 sm:grid-cols-[4.5rem_1.2fr_1fr] sm:gap-8 sm:p-6">
                  <span
                    className={`grid size-14 place-items-center rounded-xl font-display text-lg font-semibold ${tone}`}
                  >
                    {level}
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-medium text-ink">
                      {name}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-ink-soft">
                      {what}
                    </p>
                  </div>
                  <p className="text-sm leading-relaxed font-medium text-ink sm:border-l sm:border-line sm:pl-8">
                    {response}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Incident lifecycle */}
      <section className="border-y border-line bg-white">
        <Container className="py-16 md:py-20">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <Reveal>
              <p className="eyebrow text-cobalt">Every ticket, same path</p>
              <h2 className="mt-3 max-w-lg font-display text-display-md font-medium text-ink">
                From &quot;it&apos;s broken&quot; to &quot;here&apos;s why it
                won&apos;t be again.&quot;
              </h2>
            </Reveal>
          </div>
          <ol className="relative mt-14 grid gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-5">
            <div
              aria-hidden
              className="absolute top-[26px] right-10 left-10 hidden h-px border-t-2 border-dotted border-ink/20 lg:block"
            />
            {lifecycle.map(({ icon: Icon, step, note }, i) => (
              <Reveal key={step} delay={Math.min(i * 0.06, 0.3)}>
                <li className="relative">
                  <span
                    className={`relative z-10 grid size-13 place-items-center rounded-2xl ${
                      i === lifecycle.length - 1
                        ? "bg-terracotta text-white"
                        : "bg-navy text-white"
                    }`}
                  >
                    <Icon aria-hidden className="size-5.5" strokeWidth={1.7} />
                  </span>
                  <h3 className="mt-4 font-display text-lg font-medium text-ink">
                    <span className="mr-2 font-mono text-xs text-ink-faint">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {step}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">
                    {note}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>
        </Container>
      </section>

      {/* Communication promises */}
      <section>
        <Container className="py-16 md:py-20">
          <Reveal>
            <p className="eyebrow text-terracotta">While we work</p>
            <h2 className="mt-4 max-w-xl font-display text-display-md font-medium text-ink">
              The worst part of an outage is the silence. We don&apos;t do
              silence.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-x-12 gap-y-10 sm:grid-cols-3">
            {[
              {
                title: "Acknowledged, fast",
                body: "You hear from a person — not an autoresponder — so you know it's in hands.",
              },
              {
                title: "Updates on a drumbeat",
                body: "During incidents we update on a fixed cadence, even when the update is \"still digging\".",
              },
              {
                title: "Plain language",
                body: "What broke, what it means for you, what happens next — no jargon shield.",
              },
            ].map(({ title, body }, i) => (
              <Reveal key={title} delay={Math.min(i * 0.07, 0.25)}>
                <div className="border-t-2 border-ink/80 pt-5">
                  <span className="font-mono text-xs text-cobalt">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-2 font-display text-xl font-medium text-ink">
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

      <RelatedStrip category={category} currentSlug="technical-support" />

      <NavyWaveCta
        heading="Someone who picks up."
        copy="Set up support before you need it — and the day something breaks, it's a call, not a crisis."
        image="/images/company/business-partnership.jpg"
        imageAlt="Colleagues working through a problem together"
        cta="Set up support"
      />
    </>
  );
}
