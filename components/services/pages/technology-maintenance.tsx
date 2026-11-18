import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Database,
  Gauge,
  HardDriveDownload,
  LineChart,
  RefreshCw,
  ShieldCheck,
  Siren,
  Wrench,
} from "lucide-react";

import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import { RelatedStrip, ServiceBreadcrumb } from "@/components/services/blocks";
import { NavyWaveCta, StatementBand, TileRow } from "@/components/services/biz/ui";
import { StatusBoard } from "@/components/services/biz/screens";
import { Button } from "@/components/ui/button";
import type { Service, ServiceCategory } from "@/lib/services";

const rhythm = [
  {
    cadence: "Weekly",
    items: ["Dependency & patch review", "Backup verification", "Error-log sweep"],
  },
  {
    cadence: "Monthly",
    items: ["Security updates applied", "Performance check & tuning", "Small fixes shipped"],
  },
  {
    cadence: "Quarterly",
    items: ["Restore rehearsal", "Dependency major upgrades", "Health report & roadmap"],
  },
];

const risks = [
  {
    icon: ShieldCheck,
    risk: "The framework version nobody upgraded",
    counter: "Dependencies kept current on a schedule, not after a breach",
  },
  {
    icon: HardDriveDownload,
    risk: "Backups that were never restore-tested",
    counter: "Quarterly restore rehearsals — a backup is only real when it restores",
  },
  {
    icon: Gauge,
    risk: "The page that got slower every month",
    counter: "Performance budgets watched, regressions caught early",
  },
  {
    icon: Siren,
    risk: "Finding out from customers that it's down",
    counter: "Monitoring and alerts that reach us before the complaints do",
  },
];

export function TechnologyMaintenancePage({
  category,
}: {
  service: Service;
  category: ServiceCategory;
}) {
  return (
    <>
      {/* Hero: system-health board on a soft stage */}
      <section className="relative overflow-hidden border-b border-line">
        <div
          aria-hidden
          className="absolute top-0 right-0 h-full w-1/2 rounded-bl-[10rem] bg-cream/70 max-lg:hidden"
        />
        <Container className="relative grid items-center gap-12 pt-32 pb-16 md:pt-40 lg:grid-cols-[1fr_1.02fr]">
          <div>
            <Reveal>
              <ServiceBreadcrumb category={category} />
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="mt-6 font-display text-display-lg font-semibold text-ink">
                Technology Maintenance
                <span className="text-terracotta">.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-ink-soft">
                Software doesn&apos;t stay finished. We keep your systems
                updated, secure and quietly excellent — on a schedule, not
                after a scare.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <Button asChild size="lg">
                  <Link href="/contact">
                    Put us on retainer
                    <ArrowUpRight aria-hidden />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="#rhythm">See the rhythm</Link>
                </Button>
              </div>
            </Reveal>
            <Reveal delay={0.32}>
              <div className="mt-10 flex flex-wrap gap-2.5">
                {["patches — on schedule", "backups — restore-tested", "monitoring — ours, not yours"].map(
                  (chip) => (
                    <span
                      key={chip}
                      className="rounded-full border border-line bg-white px-3.5 py-1.5 font-mono text-[0.65rem] text-ink-soft shadow-sm"
                    >
                      {chip}
                    </span>
                  ),
                )}
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.18} y={36} className="w-full">
            <div className="mx-auto max-w-md">
              <StatusBoard />
              <p className="mt-4 text-center font-mono text-[0.65rem] tracking-[0.14em] text-ink-faint uppercase">
                watched around the clock — fixed before you notice
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      <StatementBand
        statement="Boring systems are a feature."
        copy="The best infrastructure news is no news. Proactive upkeep keeps your software fast, patched and predictable — and keeps surprises out of your quarter."
      />

      <TileRow
        eyebrow="What stewardship covers"
        items={[
          { icon: RefreshCw, title: "Proactive Updates", sub: "Dependencies, kept current" },
          { icon: ShieldCheck, title: "Security Patching", sub: "Closed before exploited" },
          { icon: Gauge, title: "Performance Tuning", sub: "Fast stays fast" },
          { icon: Database, title: "Backup & Recovery", sub: "Tested, not assumed" },
          { icon: LineChart, title: "Monitoring & Alerts", sub: "We hear it first" },
        ]}
      />

      {/* Maintenance rhythm */}
      <section id="rhythm" className="scroll-mt-24 border-y border-line bg-white">
        <Container className="py-16 md:py-20">
          <Reveal>
            <p className="eyebrow text-terracotta">The rhythm</p>
            <h2 className="mt-4 max-w-xl font-display text-display-md font-medium text-ink">
              A calendar, not a panic button.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {rhythm.map(({ cadence, items }, i) => (
              <Reveal key={cadence} delay={Math.min(i * 0.08, 0.25)}>
                <div className="h-full rounded-2xl border border-line bg-ivory p-7">
                  <div className="flex items-center justify-between">
                    <h3 className="font-mono text-xs tracking-[0.16em] text-cobalt uppercase">
                      {cadence}
                    </h3>
                    <Wrench aria-hidden className="size-4 text-ink-faint" strokeWidth={1.8} />
                  </div>
                  <ul className="mt-5 space-y-3.5">
                    {items.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-terracotta" />
                        <span className="text-sm leading-relaxed text-ink">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Risk / counter ledger */}
      <section>
        <Container className="grid gap-12 py-16 md:py-20 lg:grid-cols-[0.8fr_2.2fr] lg:gap-16">
          <div>
            <Reveal>
              <p className="eyebrow text-cobalt">What quietly breaks</p>
              <h2 className="mt-4 font-display text-display-sm font-medium text-ink">
                The failures that never make the roadmap.
              </h2>
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-soft">
                Nobody budgets for these — until they happen. Stewardship is
                how they don&apos;t.
              </p>
            </Reveal>
            <Reveal delay={0.15} y={28}>
              <div className="relative mt-8 hidden aspect-[4/3] overflow-hidden rounded-2xl lg:block">
                <Image
                  src="/images/services/technology-maintenance.jpg"
                  alt="Engineer working through schematics with a toolbox"
                  fill
                  sizes="30vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
          <div>
            {risks.map(({ icon: Icon, risk, counter }, i) => (
              <Reveal key={risk} delay={Math.min(i * 0.06, 0.25)}>
                <div className="grid gap-3 border-t border-line py-5 last:border-b sm:grid-cols-[1fr_auto_1fr] sm:items-center sm:gap-6">
                  <p className="text-sm leading-relaxed text-ink-soft line-through decoration-terracotta/60 decoration-2">
                    {risk}
                  </p>
                  <Icon
                    aria-hidden
                    className="hidden size-5 shrink-0 text-cobalt sm:block"
                    strokeWidth={1.8}
                  />
                  <p className="text-sm leading-relaxed font-medium text-ink">
                    {counter}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <RelatedStrip category={category} currentSlug="technology-maintenance" />

      <NavyWaveCta
        heading="Keep your systems excellent."
        copy="Hand us the upkeep — updates, security, monitoring and the small fixes — and get your team's focus back."
        image="/images/server-racks.jpg"
        imageAlt="Data-centre server racks glowing in the dark"
        cta="Put us on retainer"
      />
    </>
  );
}
