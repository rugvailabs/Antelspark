import Link from "next/link";
import {
  ArrowUpRight,
  Boxes,
  Building2,
  Check,
  CodeXml,
  Globe,
  Lightbulb,
  MonitorSmartphone,
  PenTool,
  Rocket,
  ShieldCheck,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";

import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import { ServiceBreadcrumb } from "@/components/services/blocks";
import { KalanesthamScreen, TravelScreen } from "@/components/services/dev/screens";
import {
  LaptopFrame,
  PhoneFrame,
  ProcessNavy,
  SummitCta,
  TechTiles,
  TrustChips,
} from "@/components/services/dev/ui";
import { Button } from "@/components/ui/button";
import type { Service, ServiceCategory } from "@/lib/services";

const outcomes = [
  { icon: Globe, label: "Stronger brand presence" },
  { icon: Users, label: "Better user engagement" },
  { icon: TrendingUp, label: "Higher conversions" },
];

const deliverables = [
  {
    icon: CodeXml,
    title: "Custom Web Development",
    body: "Tailored, scalable and future-ready websites.",
    active: true,
  },
  {
    icon: Boxes,
    title: "CMS Development",
    body: "Easy-to-manage content with modern CMS platforms.",
  },
  {
    icon: Building2,
    title: "Business & Corporate Sites",
    body: "Professional, high-performing websites for growth.",
  },
  {
    icon: Rocket,
    title: "Redesign & Optimisation",
    body: "Refresh, improve and upgrade existing websites.",
  },
];

const process = [
  { icon: Lightbulb, title: "Discover", body: "Understand goals, audience and requirements." },
  { icon: PenTool, title: "Design", body: "Create intuitive, brand-aligned designs." },
  { icon: CodeXml, title: "Develop", body: "Build with clean, scalable code." },
  { icon: ShieldCheck, title: "Test", body: "Ensure quality, performance and security." },
  { icon: Rocket, title: "Launch", body: "Go live and support your growth." },
];

const highlights = [
  "Bespoke design & experience",
  "Product catalogue & collections",
  "Mobile-first & responsive",
  "SEO & performance optimised",
];

export function WebsiteDevelopmentPage({
  category,
}: {
  service: Service;
  category: ServiceCategory;
}) {
  return (
    <>
      {/* Hero: copy + responsive device composition */}
      <section className="relative overflow-hidden border-b border-line">
        <div
          aria-hidden
          className="absolute top-0 right-0 h-full w-[55%] bg-cream/60 [clip-path:polygon(18%_0,100%_0,100%_100%,0_100%)] max-lg:hidden"
        />
        <Container className="relative grid items-center gap-12 pt-32 pb-14 md:pt-40 lg:grid-cols-[1fr_1.05fr]">
          <div>
            <Reveal>
              <ServiceBreadcrumb category={category} />
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="mt-6 font-display text-display-lg font-semibold text-ink">
                Website Development
                <span className="text-cobalt">.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-ink-soft">
                High-performance, modern websites that strengthen your brand,
                engage your audience and drive real business results.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <Button asChild size="lg">
                  <Link href="/contact">
                    Start your website project
                    <ArrowUpRight aria-hidden />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/work">View our work</Link>
                </Button>
              </div>
            </Reveal>
            <Reveal delay={0.32}>
              <div className="mt-11">
                <TrustChips
                  items={[
                    { icon: Zap, title: "Fast &", detail: "SEO ready" },
                    { icon: MonitorSmartphone, title: "Responsive", detail: "on all devices" },
                    { icon: ShieldCheck, title: "Secure", detail: "& scalable" },
                  ]}
                />
              </div>
            </Reveal>
          </div>

          {/* One demo site, two devices — the responsive story */}
          <Reveal delay={0.18} y={36} className="relative w-full">
            <div className="relative pr-10 sm:pr-16">
              <LaptopFrame className="max-w-lg">
                <TravelScreen />
              </LaptopFrame>
              <PhoneFrame className="absolute -right-0 -bottom-8 sm:right-2">
                <TravelScreen compact />
              </PhoneFrame>
            </div>
            <p className="mt-10 font-mono text-[0.65rem] tracking-[0.14em] text-ink-faint uppercase">
              One build — every screen
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Why it matters */}
      <section className="border-b border-line bg-white">
        <Container className="grid items-center gap-10 py-16 md:py-20 lg:grid-cols-[1.1fr_0.9fr_1fr] lg:gap-12">
          <Reveal>
            <p className="eyebrow text-terracotta">Why it matters</p>
            <h2 className="mt-4 font-display text-display-md font-medium text-ink">
              Your website is more than a presence — it&apos;s a{" "}
              <span className="text-cobalt">growth engine.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-sm leading-relaxed text-ink-soft lg:border-l lg:border-line lg:pl-8">
              We build websites that combine design, technology and strategy
              to create seamless experiences that convert visitors into
              customers.
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <div className="grid grid-cols-3 divide-x divide-cobalt/15 rounded-2xl bg-cobalt-wash p-5">
              {outcomes.map(({ icon: Icon, label }) => (
                <div key={label} className="px-3 text-center first:pl-1 last:pr-1">
                  <Icon aria-hidden className="mx-auto size-6 text-cobalt" strokeWidth={1.7} />
                  <p className="mt-2.5 text-xs leading-snug font-medium text-ink">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      {/* What we deliver */}
      <section>
        <Container className="py-16 md:py-20">
          <Reveal>
            <p className="eyebrow text-cobalt">What we deliver</p>
            <h2 className="mt-4 max-w-2xl font-display text-display-md font-medium text-ink">
              End-to-end website development, built for impact.
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {deliverables.map(({ icon: Icon, title, body, active }, i) => (
              <Reveal key={title} delay={Math.min(i * 0.06, 0.25)}>
                <div
                  className={`h-full rounded-2xl border p-6 transition-colors duration-200 ${
                    active
                      ? "border-cobalt/40 bg-cobalt-wash"
                      : "border-line bg-white hover:border-cobalt/30"
                  }`}
                >
                  <Icon aria-hidden className="size-6 text-cobalt" strokeWidth={1.7} />
                  <h3 className="mt-4 font-display text-lg font-medium text-ink">
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

      {/* Process: navy band */}
      <section className="bg-navy">
        <Container className="py-16 md:py-20">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_2.2fr] lg:gap-14">
            <Reveal>
              <p className="eyebrow text-terracotta">Our process</p>
              <h2 className="mt-4 font-display text-display-sm font-medium text-white">
                A clear path from idea to launch.
              </h2>
            </Reveal>
            <ProcessNavy steps={process} />
          </div>
        </Container>
      </section>

      {/* Featured work: Kalanestham */}
      <section className="overflow-hidden border-b border-line">
        <Container className="grid items-center gap-12 py-16 md:py-20 lg:grid-cols-[0.8fr_1.3fr_0.8fr] lg:gap-10">
          <div>
            <Reveal>
              <p className="eyebrow text-terracotta">Featured work</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-4 font-display text-display-md font-medium text-ink">
                Kalanestham
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-4 max-w-xs leading-relaxed text-ink-soft">
                A premium art and heritage commerce platform that brings
                traditional Indian artistry to a wider audience.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <Link
                href="/work"
                className="group mt-6 inline-flex items-center gap-2 font-medium text-cobalt"
              >
                View case study
                <ArrowUpRight
                  aria-hidden
                  className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </Reveal>
          </div>

          <Reveal delay={0.12} y={36}>
            <LaptopFrame className="mx-auto max-w-md">
              <KalanesthamScreen />
            </LaptopFrame>
          </Reveal>

          <div>
            <Reveal delay={0.2}>
              <p className="eyebrow text-cobalt">Project highlights</p>
            </Reveal>
            <ul className="mt-5 space-y-3.5">
              {highlights.map((item, i) => (
                <Reveal key={item} delay={0.24 + i * 0.05}>
                  <li className="flex items-start gap-3">
                    <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-cobalt text-white">
                      <Check aria-hidden className="size-3" strokeWidth={3} />
                    </span>
                    <span className="text-sm font-medium text-ink">{item}</span>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <TechTiles
        heading="Modern tools for powerful websites."
        copy="Technology chosen for speed, reliability and how easily your team can manage content."
        tools={[
          { name: "Next.js", file: "/logos/color/nextdotjs.svg" },
          { name: "React", file: "/logos/color/react.svg" },
          { name: "WordPress", file: "/logos/color/wordpress.svg" },
          { name: "Tailwind CSS", file: "/logos/color/tailwindcss.svg" },
          { name: "Bootstrap", file: "/logos/color/bootstrap.svg" },
          { name: "Vercel", file: "/logos/color/vercel.svg" },
        ]}
      />

      <SummitCta
        eyebrow="Ready when you are"
        heading="Ready to build a website that works for your business?"
        copy="Let's discuss your goals and create a website that delivers real results."
      />
    </>
  );
}
