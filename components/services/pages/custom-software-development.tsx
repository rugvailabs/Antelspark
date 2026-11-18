import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  CodeXml,
  Layers,
  PenTool,
  RefreshCw,
  Rocket,
  Search,
  Settings,
  ShieldCheck,
  Smartphone,
} from "lucide-react";

import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import { ServiceBreadcrumb } from "@/components/services/blocks";
import { Bar, ProSmashScreen } from "@/components/services/dev/screens";
import {
  CheckPills,
  LaptopFrame,
  ProcessDotted,
  SummitCta,
  TechTiles,
  TrustChips,
} from "@/components/services/dev/ui";
import { Button } from "@/components/ui/button";
import type { Service, ServiceCategory } from "@/lib/services";

/* Dark admin-dashboard pane for the navy showcase panel. */
function AdminScreen() {
  return (
    <div aria-hidden className="grid grid-cols-[52px_1fr] rounded-xl bg-navy-deep">
      <div className="space-y-3 border-r border-white/10 p-3">
        <div className="size-6 rounded-md bg-cobalt" />
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className={`h-4 w-full rounded ${i === 0 ? "bg-white/25" : "bg-white/10"}`} />
        ))}
      </div>
      <div className="space-y-3 p-3.5">
        <div className="flex items-center justify-between">
          <Bar w="80px" className="bg-white/30" />
          <div className="h-5 w-14 rounded-full bg-cobalt/80" />
        </div>
        <div className="grid grid-cols-3 gap-2.5">
          {[0, 1, 2].map((i) => (
            <div key={i} className="rounded-lg border border-white/10 bg-white/5 p-2.5">
              <Bar w="60%" className="bg-white/20" />
              <div className="mt-2 h-2.5 w-10 rounded bg-white/40" />
              <div className="mt-2 flex h-5 items-end gap-0.5">
                {[4, 8, 6, 10, 7, 12].map((h, j) => (
                  <div
                    key={j}
                    style={{ height: `${h + i * 2}px` }}
                    className={`w-1 rounded-t-[1px] ${i === 1 ? "bg-terracotta/80" : "bg-cobalt/80"}`}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="rounded-lg border border-white/10 bg-white/5 p-2.5">
          <Bar w="70px" className="bg-white/20" />
          <svg viewBox="0 0 280 56" className="mt-2 w-full">
            <path
              d="M0 44 C30 40, 55 28, 85 27 S140 34, 170 24 S240 8, 280 10"
              fill="none"
              stroke="var(--color-cobalt)"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <circle cx="170" cy="24" r="3" fill="var(--color-cobalt)" stroke="var(--color-navy-deep)" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

const offerings = [
  {
    icon: Settings,
    title: "Web & enterprise applications",
    body: "Business-ready platforms built for performance and scale.",
  },
  {
    icon: Smartphone,
    title: "Custom platforms & internal tools",
    body: "Streamline operations and remove the manual work.",
  },
  {
    icon: Layers,
    title: "System modernisation",
    body: "Upgrade, integrate and future-proof your existing systems.",
  },
];

const process = [
  { icon: Search, title: "Discover", body: "Understand goals, users and requirements." },
  { icon: PenTool, title: "Design", body: "Turn ideas into intuitive, practical solutions." },
  { icon: CodeXml, title: "Build", body: "Develop, integrate and test in iterative sprints." },
  { icon: Rocket, title: "Launch", body: "Deploy with confidence and a smooth rollout." },
  { icon: RefreshCw, title: "Evolve", body: "Monitor, improve and scale for long-term success." },
];

export function CustomSoftwareDevelopmentPage({
  category,
}: {
  service: Service;
  category: ServiceCategory;
}) {
  return (
    <>
      {/* Hero: copy left, warm workspace photo right */}
      <section className="overflow-hidden border-b border-line">
        <Container className="grid items-center gap-12 pt-32 pb-14 md:pt-40 lg:grid-cols-[1fr_1.02fr] lg:gap-10">
          <div>
            <Reveal>
              <ServiceBreadcrumb category={category} />
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="mt-6 font-display text-display-lg font-semibold text-ink">
                Custom Software Development
                <span className="text-terracotta">.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-ink-soft">
                Build powerful, scalable and secure software that solves real
                business challenges and creates long-term value.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <Button asChild size="lg">
                  <Link href="/contact">
                    Start a project
                    <ArrowUpRight aria-hidden />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/contact">Discuss your idea</Link>
                </Button>
              </div>
            </Reveal>
            <Reveal delay={0.32}>
              <div className="mt-11">
                <TrustChips
                  items={[
                    { icon: CodeXml, title: "Product-first", detail: "engineering" },
                    { icon: Layers, title: "Scalable", detail: "architecture" },
                    { icon: ShieldCheck, title: "Secure", detail: "& reliable" },
                  ]}
                />
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.18} y={36} className="relative">
            <div
              aria-hidden
              className="absolute -bottom-6 -left-6 h-2/3 w-2/3 rounded-[3rem] bg-cobalt/15"
            />
            <div className="relative aspect-[5/4] overflow-hidden rounded-[2rem] rounded-tl-[6rem] bg-cream">
              <Image
                src="/images/dev/workspace-code.jpg"
                alt="A development workspace with code open on the screen"
                fill
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Navy panel: layered product screens + what we do */}
      <section className="bg-navy">
        <Container className="grid items-center gap-12 py-16 md:py-20 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
          <Reveal y={36}>
            <div className="relative pr-6 pb-6">
              <div
                aria-hidden
                className="absolute top-6 left-6 h-full w-full rounded-xl border border-white/10 bg-white/5"
              />
              <div
                aria-hidden
                className="absolute top-3 left-3 h-full w-full rounded-xl border border-white/10 bg-white/5"
              />
              <AdminScreen />
            </div>
          </Reveal>

          <div>
            <Reveal>
              <p className="eyebrow text-terracotta">What we do</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-4 font-display text-display-md font-medium text-white">
                From business ideas to mission-critical platforms.
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-5 max-w-md leading-relaxed text-white/70">
                We design, develop and scale custom software tailored to your
                business goals, workflows and users.
              </p>
            </Reveal>
            <div className="mt-8 border-l border-white/15">
              {offerings.map(({ icon: Icon, title, body }, i) => (
                <Reveal key={title} delay={0.1 + i * 0.07}>
                  <div className="relative flex items-start gap-4 py-4 pl-6">
                    <span
                      aria-hidden
                      className="absolute top-1/2 -left-px h-8 w-px -translate-y-1/2 bg-cobalt"
                    />
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-white">
                      <Icon aria-hidden className="size-5" strokeWidth={1.7} />
                    </span>
                    <div>
                      <h3 className="font-medium text-white">{title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-white/65">
                        {body}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Process: cream panel with dotted rail */}
      <section>
        <Container className="py-14 lg:py-20">
          <div className="rounded-3xl bg-cream/70 p-7 sm:p-10 lg:p-14">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_2fr] lg:gap-14">
              <Reveal>
                <p className="eyebrow text-cobalt">Our process</p>
                <h2 className="mt-4 font-display text-display-sm font-medium text-ink">
                  A clear, collaborative and agile approach.
                </h2>
                <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-soft">
                  A product-focused process that keeps you involved from idea
                  to launch and beyond.
                </p>
              </Reveal>
              <ProcessDotted steps={process} />
            </div>
          </div>
        </Container>
      </section>

      {/* Featured project: ProSmash */}
      <section className="overflow-hidden border-t border-line">
        <Container className="grid items-center gap-12 py-16 md:py-20 lg:grid-cols-[0.75fr_1.3fr_0.75fr] lg:gap-10">
          <div>
            <Reveal>
              <p className="eyebrow text-terracotta">Featured project</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-4 font-display text-display-md font-medium text-ink">
                ProSmash
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-4 max-w-xs leading-relaxed text-ink-soft">
                A wholesale sports commerce platform built for schools,
                academies and retailers.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <Button asChild variant="outline" className="mt-7">
                <Link href="/work">
                  View case study
                  <ArrowUpRight aria-hidden />
                </Link>
              </Button>
            </Reveal>
          </div>

          <Reveal delay={0.12} y={36} className="relative">
            <div
              aria-hidden
              className="absolute inset-x-6 top-1/3 bottom-0 -skew-y-3 rounded-3xl bg-cobalt"
            />
            <LaptopFrame className="relative mx-auto max-w-md">
              <ProSmashScreen />
            </LaptopFrame>
          </Reveal>

          <Reveal delay={0.2}>
            <CheckPills
              items={[
                "Multi-user B2B platform",
                "Custom pricing & discounts",
                "Admin operations console",
                "Scalable & secure architecture",
              ]}
            />
          </Reveal>
        </Container>
      </section>

      <TechTiles
        copy="We choose modern, reliable and scalable technologies based on your product needs."
        tools={[
          { name: "React", file: "/logos/color/react.svg" },
          { name: "Next.js", file: "/logos/color/nextdotjs.svg" },
          { name: "Node.js", file: "/logos/color/nodedotjs.svg" },
          { name: "Python", file: "/logos/color/python.svg" },
          { name: "PostgreSQL", file: "/logos/color/postgresql.svg" },
          { name: "Docker", file: "/logos/color/docker.svg" },
        ]}
      />

      <SummitCta
        eyebrow="Let's build together"
        heading="Have a software idea?"
        copy="Tell us about your goals and we'll help you turn it into a reliable, scalable and high-performing solution."
      />
    </>
  );
}
