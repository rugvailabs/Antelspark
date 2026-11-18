import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Boxes,
  Building2,
  Landmark,
  ShieldCheck,
  Truck,
  Users,
  Warehouse,
} from "lucide-react";

import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import { RelatedStrip, ServiceBreadcrumb } from "@/components/services/blocks";
import { NavyWaveCta, StatementBand, TileRow } from "@/components/services/biz/ui";
import { OpsScreen } from "@/components/services/biz/screens";
import { LaptopFrame } from "@/components/services/dev/ui";
import { Button } from "@/components/ui/button";
import type { Service, ServiceCategory } from "@/lib/services";

/* Hub-and-spoke integration diagram: the ERP core and its satellites. */
function IntegrationDiagram() {
  const left = [
    { icon: Warehouse, label: "Warehouse" },
    { icon: Truck, label: "Logistics" },
    { icon: Users, label: "HR & identity" },
  ];
  const right = [
    { icon: Boxes, label: "Storefront" },
    { icon: Landmark, label: "Accounting" },
    { icon: BarChart3, label: "BI & reports" },
  ];
  const Chip = ({ icon: Icon, label }: { icon: typeof Boxes; label: string }) => (
    <div className="flex items-center gap-3 rounded-xl border border-line bg-white px-4 py-3 shadow-[0_12px_24px_-18px_rgb(32_36_44_/_0.4)]">
      <Icon aria-hidden className="size-4.5 shrink-0 text-cobalt" strokeWidth={1.7} />
      <span className="text-sm font-medium text-ink">{label}</span>
    </div>
  );
  return (
    <div className="grid items-center gap-6 lg:grid-cols-[1fr_auto_1fr] lg:gap-0">
      <div className="flex flex-col gap-4 lg:items-end">
        {left.map((item) => (
          <Chip key={item.label} {...item} />
        ))}
      </div>
      <div className="relative flex items-center justify-center lg:px-2">
        <svg aria-hidden viewBox="0 0 220 160" className="hidden w-52 lg:block">
          {[28, 80, 132].map((y) => (
            <g key={y}>
              <path d={`M0 ${y} C 40 ${y}, 60 80, 92 80`} fill="none" stroke="var(--color-line-strong)" strokeWidth="1.3" strokeDasharray="4 4" />
              <path d={`M220 ${y} C 180 ${y}, 160 80, 128 80`} fill="none" stroke="var(--color-line-strong)" strokeWidth="1.3" strokeDasharray="4 4" />
            </g>
          ))}
        </svg>
        <div className="absolute grid size-24 place-items-center rounded-2xl bg-navy shadow-[0_24px_48px_-16px_rgb(15_33_66_/_0.55)] max-lg:static">
          <span aria-hidden className="absolute inset-0 rounded-2xl border border-white/20" />
          <div className="text-center">
            <Building2 className="mx-auto size-6 text-white" strokeWidth={1.6} />
            <p className="mt-1 font-mono text-[0.58rem] tracking-[0.1em] text-white/70 uppercase">
              one core
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        {right.map((item) => (
          <Chip key={item.label} {...item} />
        ))}
      </div>
    </div>
  );
}

const rollout = [
  { step: "Assess", note: "Map systems, owners and the risks of touching them." },
  { step: "Pilot one module", note: "Prove the approach where it hurts most." },
  { step: "Migrate in waves", note: "Department by department, with rollback ready." },
  { step: "Retire legacy", note: "Switch off the old only when the new has earned it." },
];

export function EnterpriseSolutionsPage({
  category,
}: {
  service: Service;
  category: ServiceCategory;
}) {
  return (
    <>
      {/* Hero: ERP operations console on an arched stage */}
      <section className="relative overflow-hidden border-b border-line">
        <div
          aria-hidden
          className="absolute top-0 right-0 h-[88%] w-[56%] rounded-bl-[10rem] bg-cream/80 max-lg:hidden"
        />
        <Container className="relative grid items-center gap-12 pt-32 pb-16 md:pt-40 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <Reveal>
              <ServiceBreadcrumb category={category} />
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="mt-6 font-display text-display-lg font-semibold text-ink">
                Enterprise Solutions
                <span className="text-terracotta">.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-ink-soft">
                One platform view of operations, people, inventory and finance
                — built on your processes, integrated with the systems you
                already run.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <Button asChild size="lg">
                  <Link href="/contact">
                    Plan your platform
                    <ArrowUpRight aria-hidden />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="#integration">See how it connects</Link>
                </Button>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.18} y={36} className="relative w-full">
            <LaptopFrame className="mx-auto max-w-lg">
              <OpsScreen />
            </LaptopFrame>
            <div className="mt-5 flex flex-wrap justify-center gap-2.5">
              {[
                "modules — adopted in phases",
                "data — one source of truth",
                "access — role-based",
              ].map((chip) => (
                <span
                  key={chip}
                  className="rounded-full border border-line bg-white px-3.5 py-1.5 font-mono text-[0.65rem] text-ink-soft shadow-sm"
                >
                  {chip}
                </span>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      <StatementBand
        statement="One platform. Complete control."
        copy="Streamline the whole business with a platform shaped around your processes, scale and goals — not the other way around."
      />

      <TileRow
        eyebrow="What it covers"
        items={[
          { icon: Boxes, title: "Operations Management", sub: "Orders, workflows, approvals" },
          { icon: Users, title: "HR & Payroll", sub: "People, roles and access" },
          { icon: Warehouse, title: "Inventory & Suppliers", sub: "Stock that matches reality" },
          { icon: Landmark, title: "Finance & Accounts", sub: "Numbers that reconcile" },
          { icon: BarChart3, title: "Reports & Analytics", sub: "Decisions, not exports" },
        ]}
      />

      {/* Integration hub */}
      <section id="integration" className="scroll-mt-24 border-y border-line bg-white">
        <Container className="py-16 md:py-20">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <Reveal>
              <p className="eyebrow text-terracotta">Integration</p>
              <h2 className="mt-3 max-w-lg font-display text-display-md font-medium text-ink">
                Your systems, finally on speaking terms.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="max-w-sm text-sm leading-relaxed text-ink-soft">
                Enterprises rarely need more software. They need the software
                they have to stop disagreeing with itself.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.15} y={32}>
            <div className="mt-12 rounded-3xl bg-ivory p-8 sm:p-12">
              <IntegrationDiagram />
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Phased rollout */}
      <section>
        <Container className="py-16 md:py-20">
          <Reveal>
            <p className="eyebrow text-cobalt">No big-bang migrations</p>
            <h2 className="mt-4 max-w-xl font-display text-display-md font-medium text-ink">
              Modernise without stopping the business.
            </h2>
          </Reveal>
          <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {rollout.map(({ step, note }, i) => (
              <Reveal key={step} delay={Math.min(i * 0.07, 0.3)}>
                <li className="flex items-start gap-4">
                  <div className="flex-1 border-t-2 border-ink/80 pt-4">
                    <span className="font-mono text-xs text-cobalt">
                      Wave {i + 1}
                    </span>
                    <h3 className="mt-2 font-display text-lg font-medium text-ink">
                      {step}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                      {note}
                    </p>
                  </div>
                  {i < rollout.length - 1 && (
                    <ArrowRight
                      aria-hidden
                      className="mt-5 hidden size-4 shrink-0 text-terracotta lg:block"
                    />
                  )}
                </li>
              </Reveal>
            ))}
          </ol>
          <Reveal delay={0.25}>
            <div className="mt-10 flex items-start gap-3 rounded-2xl border border-line bg-white px-6 py-5">
              <ShieldCheck aria-hidden className="mt-0.5 size-5 shrink-0 text-cobalt" strokeWidth={1.8} />
              <p className="text-sm leading-relaxed text-ink-soft">
                Compliance-aware by default — audit trails, role-based access
                and data residency considered from the first wave, not
                retrofitted after go-live.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Context photo strip */}
      <section className="border-t border-line">
        <Container className="grid items-center gap-10 py-14 md:py-16 lg:grid-cols-[1fr_1.1fr]">
          <Reveal>
            <p className="eyebrow text-terracotta">Built for scale</p>
            <h2 className="mt-4 font-display text-display-sm font-medium text-ink">
              Serious systems for organisations with a lot riding on them.
            </h2>
            <p className="mt-4 max-w-md leading-relaxed text-ink-soft">
              Multi-entity, multi-location, regulated — we&apos;ve designed
              platforms for environments where &quot;just restart it&quot; was
              never an option.
            </p>
          </Reveal>
          <Reveal delay={0.12} y={32}>
            <div className="relative aspect-[16/9] overflow-hidden rounded-2xl">
              <Image
                src="/images/services/enterprise-solutions.jpg"
                alt="Glass office towers from street level"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
              <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-navy/50 to-transparent" />
            </div>
          </Reveal>
        </Container>
      </section>

      <RelatedStrip category={category} currentSlug="enterprise-solutions" />

      <NavyWaveCta
        heading="Run your business smarter."
        copy="Let's map your systems and design the platform that makes them one."
        image="/images/services/enterprise-solutions.jpg"
        imageAlt="Corporate towers at dusk"
        cta="Get started"
      />
    </>
  );
}
