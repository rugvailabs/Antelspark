import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  BellRing,
  Cog,
  Database,
  Eye,
  GaugeCircle,
  LayoutDashboard,
  ShieldCheck,
} from "lucide-react";

import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import { AuroraCta, DarkHero, GlassChip } from "@/components/services/ai/ui";
import { TechTiles } from "@/components/services/dev/ui";
import { Button } from "@/components/ui/button";
import type { Service, ServiceCategory } from "@/lib/services";

/* From scattered sources to trusted outputs — the pipeline strip. */
function PipelineStrip() {
  const sources = ["crm_export.csv", "app events", "erp dump", "team spreadsheets"];
  const outputs = [
    { icon: LayoutDashboard, label: "Dashboards" },
    { icon: BellRing, label: "Alerts" },
    { icon: Database, label: "ML-ready data" },
  ];
  const rotations = ["-rotate-3", "rotate-2", "-rotate-1", "rotate-3"];
  return (
    <div aria-hidden className="flex flex-col items-center gap-6 lg:flex-row lg:gap-4">
      {/* Scattered sources */}
      <div className="flex flex-wrap justify-center gap-2.5 lg:w-44 lg:flex-col lg:items-end">
        {sources.map((source, i) => (
          <span
            key={source}
            className={`rounded-lg border border-line bg-white px-3 py-2 font-mono text-[0.68rem] text-ink-soft shadow-sm ${rotations[i]}`}
          >
            {source}
          </span>
        ))}
      </div>

      <svg viewBox="0 0 60 160" className="hidden h-36 w-12 shrink-0 lg:block">
        {[18, 62, 106, 148].map((y) => (
          <path
            key={y}
            d={`M2 ${y} C 30 ${y}, 32 80, 58 80`}
            fill="none"
            stroke="var(--color-ink-faint)"
            strokeWidth="1.3"
            strokeDasharray="3 4"
          />
        ))}
      </svg>

      {/* Pipeline + warehouse */}
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-3 rounded-2xl bg-cobalt px-5 py-4 shadow-[0_20px_40px_-16px_rgb(36_87_214_/_0.55)]">
          <Cog className="size-6 text-white" strokeWidth={1.7} />
          <div>
            <p className="text-sm font-semibold text-white">Pipelines</p>
            <p className="font-mono text-[0.62rem] text-white/70">clean · join · test</p>
          </div>
        </div>
        <svg viewBox="0 0 36 20" className="w-7 shrink-0">
          <path d="M2 10 H26" stroke="var(--color-ink-soft)" strokeWidth="1.5" />
          <path d="M20 4 L30 10 L20 16" fill="none" stroke="var(--color-ink-soft)" strokeWidth="1.5" />
        </svg>
        <div className="rounded-2xl border-2 border-navy bg-white px-5 py-4 text-center">
          <Database className="mx-auto size-6 text-navy" strokeWidth={1.7} />
          <p className="mt-1.5 text-sm font-semibold text-ink">Warehouse</p>
          <p className="font-mono text-[0.62rem] text-ink-faint">one source of truth</p>
        </div>
      </div>

      <svg viewBox="0 0 60 160" className="hidden h-36 w-12 shrink-0 lg:block">
        {[30, 80, 130].map((y) => (
          <path
            key={y}
            d={`M2 80 C 30 80, 32 ${y}, 58 ${y}`}
            fill="none"
            stroke="var(--color-cobalt)"
            strokeWidth="1.3"
          />
        ))}
      </svg>

      {/* Trusted outputs */}
      <div className="flex flex-wrap justify-center gap-2.5 lg:flex-col">
        {outputs.map(({ icon: Icon, label }) => (
          <span
            key={label}
            className="flex items-center gap-2.5 rounded-lg border border-cobalt/30 bg-cobalt-wash px-3.5 py-2.5"
          >
            <Icon className="size-4 text-cobalt" strokeWidth={1.8} />
            <span className="text-sm font-medium text-ink">{label}</span>
          </span>
        ))}
      </div>
    </div>
  );
}

const layers = [
  {
    name: "Ingestion",
    detail: "APIs, events, files & CDC — landed reliably",
    tools: "Airflow · Kafka",
    style: "bg-navy text-white lg:ml-0",
    mono: "text-white/55",
  },
  {
    name: "Storage & warehouse",
    detail: "Modelled for queries people actually run",
    tools: "Snowflake · Postgres",
    style: "bg-cobalt text-white lg:ml-10",
    mono: "text-white/60",
  },
  {
    name: "Modelling & quality",
    detail: "Tested transformations, documented metrics",
    tools: "SQL · tests · lineage",
    style: "bg-white border border-line text-ink lg:ml-20",
    mono: "text-ink-faint",
  },
  {
    name: "Serving & APIs",
    detail: "The same numbers in every tool",
    tools: "APIs · reverse ETL",
    style: "bg-cobalt-wash text-ink lg:ml-30",
    mono: "text-ink-faint",
  },
  {
    name: "BI & dashboards",
    detail: "Readable by the whole company",
    tools: "Grafana · BI tools",
    style: "bg-terracotta-wash text-ink lg:ml-40",
    mono: "text-ink-faint",
  },
];

const manifesto = [
  {
    n: "01",
    icon: ShieldCheck,
    title: "Tested",
    body: "Transformations ship with tests. Bad data fails loudly, before anyone sees it.",
  },
  {
    n: "02",
    icon: Eye,
    title: "Documented",
    body: "Every metric has a definition someone can read — and a lineage you can trace.",
  },
  {
    n: "03",
    icon: GaugeCircle,
    title: "Owned",
    body: "One number, one owner. When revenue is wrong, it's clear who fixes it.",
  },
  {
    n: "04",
    icon: BellRing,
    title: "Observable",
    body: "Freshness and volume monitored — you hear it from the pipeline, not the CEO.",
  },
];

export function DataEngineeringAnalyticsPage({
  category,
}: {
  service: Service;
  category: ServiceCategory;
}) {
  return (
    <>
      {/* Mirrored dark hero: imagery left, copy right */}
      <DarkHero>
        <Container className="relative grid items-center gap-12 pt-32 pb-24 md:pt-40 md:pb-32 lg:grid-cols-[1.05fr_1fr]">
          <Reveal delay={0.15} y={36} className="relative order-2 w-full lg:order-1">
            <div className="relative h-[320px] sm:h-[380px]">
              <div className="absolute inset-y-0 right-0 w-[88%] overflow-hidden rounded-3xl">
                <Image
                  src="/images/services/data-engineering-analytics.jpg"
                  alt="Analytics dashboards glowing on a dark screen"
                  fill
                  priority
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover opacity-90 [mask-image:linear-gradient(to_left,transparent,black_18%)]"
                />
              </div>
              <div className="absolute bottom-5 left-0 flex flex-col gap-4">
                <GlassChip icon={Cog} label="Pipelines" value="monitored end-to-end" />
                <GlassChip
                  icon={Database}
                  label="Source of truth"
                  value="one per metric"
                  className="sm:translate-x-8"
                />
              </div>
            </div>
          </Reveal>

          <div className="order-1 lg:order-2">
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
                Data Engineering &amp;{" "}
                <span className="bg-gradient-to-r from-[#8fa8f7] to-[#67d4c3] bg-clip-text text-transparent">
                  Analytics
                </span>
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-white/75">
                Decisions are only as good as the data underneath them. We
                build the pipelines, warehouse and dashboards your company can
                actually trust.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <Button asChild size="lg">
                  <Link href="/contact">
                    Sort your data out
                    <ArrowUpRight aria-hidden />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline-inverse">
                  <Link href="#stack-layers">See the stack</Link>
                </Button>
              </div>
            </Reveal>
          </div>
        </Container>
      </DarkHero>

      {/* Scattered → trusted */}
      <section>
        <Container className="py-16 md:py-20">
          <div className="max-w-xl">
            <Reveal>
              <span aria-hidden className="block h-1.5 w-10 rounded-full bg-terracotta" />
              <h2 className="mt-5 font-display text-display-md font-medium text-ink">
                From scattered everywhere to trusted{" "}
                <span className="text-cobalt">somewhere.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.15} y={32}>
            <div className="mt-12 rounded-3xl border border-line bg-ivory p-6 sm:p-10">
              <PipelineStrip />
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Layer cake */}
      <section id="stack-layers" className="scroll-mt-24 border-y border-line bg-white">
        <Container className="grid gap-12 py-16 md:py-20 lg:grid-cols-[0.8fr_2.2fr] lg:gap-16">
          <Reveal>
            <p className="eyebrow text-cobalt">What we build</p>
            <h2 className="mt-4 font-display text-display-sm font-medium text-ink">
              The whole stack, layer by layer.
            </h2>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-soft">
              Each layer earns the one above it. Skip one and the dashboards
              lie.
            </p>
          </Reveal>
          <div className="space-y-3">
            {layers.map((layer, i) => (
              <Reveal key={layer.name} delay={Math.min(i * 0.06, 0.3)}>
                <div
                  className={`flex flex-col gap-1.5 rounded-2xl px-6 py-4.5 shadow-[0_12px_28px_-20px_rgb(32_36_44_/_0.4)] sm:flex-row sm:items-center sm:justify-between ${layer.style}`}
                >
                  <div className="flex items-baseline gap-4">
                    <span className={`font-mono text-xs ${layer.mono}`}>
                      L{5 - i}
                    </span>
                    <div>
                      <h3 className="font-display text-lg font-medium">{layer.name}</h3>
                      <p className={`text-xs ${layer.mono}`}>{layer.detail}</p>
                    </div>
                  </div>
                  <span className={`font-mono text-[0.68rem] ${layer.mono}`}>
                    {layer.tools}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Manifesto */}
      <section>
        <Container className="py-16 md:py-20">
          <Reveal>
            <p className="eyebrow text-cobalt">Our standard</p>
            <h2 className="mt-4 max-w-xl font-display text-display-md font-medium text-ink">
              Data you can argue with.
            </h2>
            <p className="mt-4 max-w-md leading-relaxed text-ink-soft">
              A dashboard is only useful when people trust it enough to act on
              it. That trust is engineered:
            </p>
          </Reveal>
          <div className="mt-12 grid gap-x-12 gap-y-10 sm:grid-cols-2">
            {manifesto.map(({ n, icon: Icon, title, body }, i) => (
              <Reveal key={n} delay={Math.min(i * 0.06, 0.25)}>
                <div className="relative border-t-2 border-ink/80 pt-5 pl-1">
                  <span
                    aria-hidden
                    className="pointer-events-none absolute -top-2 right-0 font-display text-6xl font-semibold text-cobalt/10"
                  >
                    {n}
                  </span>
                  <Icon aria-hidden className="size-6 text-cobalt" strokeWidth={1.7} />
                  <h3 className="mt-3 font-display text-xl font-medium text-ink">
                    {title}
                  </h3>
                  <p className="mt-2 max-w-sm text-sm leading-relaxed text-ink-soft">
                    {body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <TechTiles
        heading="A warehouse-native toolchain."
        copy="Boring, proven data infrastructure — because pipelines should be the least exciting thing you run."
        tools={[
          { name: "PostgreSQL", file: "/logos/color/postgresql.svg" },
          { name: "Apache Spark", file: "/logos/color/apachespark.svg" },
          { name: "Airflow", file: "/logos/color/apacheairflow.svg" },
          { name: "Snowflake", file: "/logos/color/snowflake.svg" },
          { name: "ClickHouse", file: "/logos/color/clickhouse.svg" },
          { name: "Grafana", file: "/logos/color/grafana.svg" },
        ]}
      />

      <AuroraCta
        heading="Which number does your team argue about?"
        copy="Start there. We'll trace it to its sources, rebuild the path, and make it a number everyone can trust."
      />
    </>
  );
}
