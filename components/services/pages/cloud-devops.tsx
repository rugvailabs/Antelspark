import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Boxes,
  CloudCog,
  Database,
  FileCode2,
  Globe,
  LineChart,
  RotateCcw,
  ShieldCheck,
  Wallet,
} from "lucide-react";

import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import { AuroraCta, GlassChip, WaveDivider } from "@/components/services/ai/ui";
import { TechTiles } from "@/components/services/dev/ui";
import { Button } from "@/components/ui/button";
import type { Service, ServiceCategory } from "@/lib/services";

const plates = [
  {
    icon: Globe,
    name: "Edge & CDN",
    detail: "fast everywhere, cached close to users",
    style: "w-full bg-navy text-white sm:w-[70%]",
    mono: "text-white/55",
  },
  {
    icon: Boxes,
    name: "Application runtime",
    detail: "containers, autoscaling, zero-downtime",
    style: "w-full bg-cobalt text-white sm:w-[80%]",
    mono: "text-white/60",
  },
  {
    icon: Database,
    name: "Data & storage",
    detail: "backed up, replicated, restore-tested",
    style: "w-full border border-line bg-white text-ink sm:w-[90%]",
    mono: "text-ink-faint",
  },
  {
    icon: FileCode2,
    name: "Infrastructure as code",
    detail: "every environment reproducible from git",
    style: "w-full bg-cream text-ink",
    mono: "text-ink-faint",
  },
];

const pipeline = [
  { cmd: "$ git push origin main", note: "", ok: null },
  { cmd: "build        · image 2f41c9a", note: "✓", ok: true },
  { cmd: "tests        · unit + e2e", note: "✓", ok: true },
  { cmd: "deploy       · rolling, zero-downtime", note: "✓", ok: true },
  { cmd: "observe      · metrics, logs, alerts", note: "live", ok: null },
];

const practices = [
  {
    icon: ShieldCheck,
    title: "Reliability first",
    body: "Clear uptime targets, error budgets and the alerting to defend them.",
  },
  {
    icon: FileCode2,
    title: "Infrastructure as code",
    body: "No hand-built servers. Everything versioned, reviewed and reproducible.",
  },
  {
    icon: RotateCcw,
    title: "Boring deploys",
    body: "Small releases, rolling updates and one-click rollback when needed.",
  },
  {
    icon: Wallet,
    title: "Cost visibility",
    body: "You see what every environment costs — before the invoice does.",
  },
];

export function CloudDevopsPage({
  category,
}: {
  service: Service;
  category: ServiceCategory;
}) {
  return (
    <>
      {/* Full-bleed centered hero over server-room imagery */}
      <section className="relative overflow-hidden bg-navy-deep">
        <Image
          src="/images/server-racks.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-30"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_10%,rgb(36_87_214/0.4),transparent_65%)]"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/40 to-navy-deep/70"
        />
        <Container className="relative flex flex-col items-center pt-32 pb-28 text-center md:pt-40 md:pb-36">
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
              Cloud &amp;{" "}
              <span className="bg-gradient-to-r from-[#8fa8f7] to-[#7ee0a3] bg-clip-text text-transparent">
                DevOps
              </span>
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/75">
              Infrastructure that stays fast, online and affordable — with
              deploys so routine they&apos;re boring.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <Button asChild size="lg">
                <Link href="/contact">
                  Review my infrastructure
                  <ArrowUpRight aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline-inverse">
                <Link href="#pipeline">See the pipeline</Link>
              </Button>
            </div>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-11 flex flex-wrap justify-center gap-3.5">
              <GlassChip icon={CloudCog} label="Deploys" value="automated from git" />
              <GlassChip icon={RotateCcw} label="Rollbacks" value="one click" />
              <GlassChip icon={LineChart} label="Monitoring" value="around the clock" />
            </div>
          </Reveal>
        </Container>
        <WaveDivider />
      </section>

      {/* Platform plates */}
      <section>
        <Container className="grid gap-12 py-16 md:py-20 lg:grid-cols-[0.8fr_2.2fr] lg:gap-16">
          <Reveal>
            <span aria-hidden className="block h-1.5 w-10 rounded-full bg-terracotta" />
            <h2 className="mt-5 font-display text-display-md font-medium text-ink">
              Your platform, in four layers.
            </h2>
            <p className="mt-4 max-w-xs leading-relaxed text-ink-soft">
              We design and run the whole stack — each layer owned, monitored
              and reproducible.
            </p>
          </Reveal>
          <div className="flex flex-col items-center gap-3">
            {plates.map(({ icon: Icon, name, detail, style, mono }, i) => (
              <Reveal key={name} delay={Math.min(i * 0.07, 0.3)} className="w-full">
                <div className="flex justify-center">
                  <div
                    className={`flex items-center justify-between gap-6 rounded-2xl px-6 py-4.5 shadow-[0_18px_36px_-22px_rgb(32_36_44_/_0.5)] ${style}`}
                  >
                    <div className="flex items-center gap-4">
                      <Icon aria-hidden className="size-5.5 shrink-0" strokeWidth={1.7} />
                      <h3 className="font-display text-lg font-medium">{name}</h3>
                    </div>
                    <span className={`hidden font-mono text-[0.68rem] sm:block ${mono}`}>
                      {detail}
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Terminal pipeline */}
      <section id="pipeline" className="scroll-mt-24 border-y border-line bg-white">
        <Container className="grid items-center gap-12 py-16 md:py-20 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <div>
            <Reveal>
              <p className="eyebrow text-cobalt">Delivery</p>
              <h2 className="mt-4 font-display text-display-md font-medium text-ink">
                Ship without drama.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 max-w-md leading-relaxed text-ink-soft">
                One push runs the whole path: build, test, deploy, observe.
                Releases become a non-event — which is exactly what a release
                should be.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <ul className="mt-7 space-y-2.5 text-sm text-ink-soft">
                <li className="flex items-center gap-2.5">
                  <span className="size-1.5 rounded-full bg-cobalt" />
                  Preview environments for every branch
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="size-1.5 rounded-full bg-cobalt" />
                  Secrets managed, never pasted
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="size-1.5 rounded-full bg-terracotta" />
                  Rollback rehearsed before it&apos;s ever needed
                </li>
              </ul>
            </Reveal>
          </div>

          <Reveal delay={0.15} y={32}>
            <div aria-hidden className="overflow-hidden rounded-2xl bg-navy-deep shadow-2xl">
              <div className="flex items-center gap-2 border-b border-white/10 px-5 py-3">
                <span className="size-2.5 rounded-full bg-white/25" />
                <span className="size-2.5 rounded-full bg-white/18" />
                <span className="size-2.5 rounded-full bg-white/18" />
                <span className="ml-3 font-mono text-[0.65rem] text-white/45">
                  antelspark — deploy
                </span>
              </div>
              <div className="space-y-3 px-6 py-6 font-mono text-[0.8rem]">
                {pipeline.map(({ cmd, note, ok }) => (
                  <div key={cmd} className="flex items-center justify-between gap-6">
                    <span className={cmd.startsWith("$") ? "text-white" : "text-white/65"}>
                      {cmd}
                    </span>
                    {note && (
                      <span className={ok ? "text-[#7ee0a3]" : "text-cobalt"}>
                        {note}
                      </span>
                    )}
                  </div>
                ))}
                <div className="flex items-center gap-1 pt-1 text-white/80">
                  <span>$</span>
                  <span className="h-4 w-2 animate-pulse bg-white/70" />
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Reliability practices */}
      <section>
        <Container className="py-16 md:py-20">
          <Reveal>
            <p className="eyebrow text-cobalt">How we run things</p>
            <h2 className="mt-4 max-w-xl font-display text-display-md font-medium text-ink">
              Opinions that keep systems up.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-x-12 gap-y-10 sm:grid-cols-2">
            {practices.map(({ icon: Icon, title, body }, i) => (
              <Reveal key={title} delay={Math.min(i * 0.06, 0.25)}>
                <div className="border-t-2 border-ink/80 pt-5">
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
        heading="The ops toolchain we trust."
        copy="Containers, declarative infrastructure and first-class observability — on AWS, Azure or GCP."
        tools={[
          { name: "Docker", file: "/logos/color/docker.svg" },
          { name: "Kubernetes", file: "/logos/color/kubernetes.svg" },
          { name: "Terraform", file: "/logos/color/terraform.svg" },
          { name: "GitHub Actions", file: "/logos/color/githubactions.svg" },
          { name: "Prometheus", file: "/logos/color/prometheus.svg" },
          { name: "Grafana", file: "/logos/color/grafana.svg" },
        ]}
      />

      <AuroraCta
        heading="When did you last test a restore?"
        copy="If the question stings, let's talk. We'll audit your infrastructure and tell you plainly what would break first."
      />
    </>
  );
}
