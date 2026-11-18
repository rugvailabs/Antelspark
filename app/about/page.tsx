import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  BrainCircuit,
  Briefcase,
  CodeXml,
  Eye,
  Infinity as InfinityIcon,
  Layers,
  PenTool,
  Target,
  Users,
  type LucideIcon,
} from "lucide-react";

import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import { NavyWaveCta } from "@/components/services/biz/ui";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Antelspark is a technology and digital solutions company helping businesses build, scale and innovate with confidence.",
};

const values: { icon: LucideIcon; label: string }[] = [
  { icon: Target, label: "Solutions focused" },
  { icon: Users, label: "People first" },
  { icon: Layers, label: "Quality & reliability" },
  { icon: InfinityIcon, label: "Long-term partnership" },
];

const whatWeDo: {
  icon: LucideIcon;
  title: string;
  body: string;
  href: string;
}[] = [
  {
    icon: CodeXml,
    title: "Development",
    body: "Custom software, web, mobile and commerce solutions.",
    href: "/services#development",
  },
  {
    icon: BrainCircuit,
    title: "AI & Technology",
    body: "AI, automation, data and cloud solutions.",
    href: "/services#ai-technology",
  },
  {
    icon: PenTool,
    title: "Digital & Design",
    body: "Marketing, UI/UX, branding and digital growth.",
    href: "/services#digital-design",
  },
  {
    icon: Briefcase,
    title: "Business Solutions",
    body: "Consulting, enterprise systems, maintenance and support.",
    href: "/services#business-solutions",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="overflow-hidden border-b border-line">
        <Container className="grid items-center gap-12 pt-32 pb-14 md:pt-40 lg:grid-cols-[1fr_1.05fr]">
          <div>
            <Reveal>
              <p className="eyebrow text-cobalt">About {siteConfig.name}</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="mt-5 font-display text-display-lg font-semibold text-ink">
                Technology that drives real business impact
                <span className="text-terracotta">.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-ink-soft">
                {siteConfig.name} is a technology and digital solutions company
                helping businesses build, scale and innovate with confidence.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <Button asChild size="lg">
                  <Link href="/contact">
                    Work with us
                    <ArrowUpRight aria-hidden />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/services">Our services</Link>
                </Button>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.18} y={36}>
            <div className="relative aspect-[16/11] overflow-hidden rounded-b-[2rem] rounded-t-[7rem]">
              <Image
                src="/images/company/team-collaboration.jpg"
                alt="The team working together around laptops"
                fill
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Values strip */}
      <section className="border-b border-line bg-white">
        <Container className="py-10 md:py-12">
          <div className="grid grid-cols-2 gap-y-8 sm:grid-cols-4 sm:divide-x sm:divide-line">
            {values.map(({ icon: Icon, label }, i) => (
              <Reveal key={label} delay={Math.min(i * 0.05, 0.2)}>
                <div className="px-4 text-center">
                  <Icon aria-hidden className="mx-auto size-7 text-cobalt" strokeWidth={1.6} />
                  <p className="mt-3 text-sm font-semibold text-ink">{label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Our story */}
      <section>
        <Container className="grid items-center gap-12 py-16 md:py-20 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <Reveal y={32}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src="/images/dev/summit.jpg"
                alt="Mountain summits above the clouds at sunrise"
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <div>
            <Reveal>
              <p className="eyebrow text-terracotta">Our story</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-4 font-display text-display-md font-medium text-ink">
                A team with a clear purpose
                <span className="text-terracotta">.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-5 max-w-lg text-lg leading-relaxed text-ink-soft">
                We started {siteConfig.name} with a simple vision — to combine
                technology, design and business thinking to solve real-world
                challenges. Today, we partner with organisations across
                industries to turn ideas into scalable, lasting solutions.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Mission & vision */}
      <section className="border-y border-line bg-white">
        <Container className="py-16 md:py-18">
          <div className="flex flex-col gap-4 md:flex-row md:items-center">
            <Reveal>
              <h2 className="font-display text-display-md font-medium text-ink">
                Our Mission &amp; Vision
                <span className="text-terracotta">.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="max-w-sm text-ink-soft md:border-l md:border-line md:pl-8">
                The principles that guide everything we build, create and
                deliver.
              </p>
            </Reveal>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <Reveal delay={0.08}>
              <div className="flex h-full items-start gap-5 rounded-3xl bg-cobalt-wash/70 p-8">
                <span className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-white text-cobalt shadow-sm">
                  <Target aria-hidden className="size-7" strokeWidth={1.6} />
                </span>
                <div>
                  <h3 className="font-display text-xl font-medium text-ink">
                    Our Mission
                  </h3>
                  <p className="mt-2 leading-relaxed text-ink-soft">
                    To deliver practical, reliable and innovative technology
                    solutions that create measurable business value.
                  </p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.16}>
              <div className="flex h-full items-start gap-5 rounded-3xl bg-cobalt-wash/70 p-8">
                <span className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-white text-cobalt shadow-sm">
                  <Eye aria-hidden className="size-7" strokeWidth={1.6} />
                </span>
                <div>
                  <h3 className="font-display text-xl font-medium text-ink">
                    Our Vision
                  </h3>
                  <p className="mt-2 leading-relaxed text-ink-soft">
                    To be a trusted technology partner, known for building
                    impactful solutions and long-term relationships.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* What we do */}
      <section>
        <Container className="py-16 md:py-20">
          <div className="flex flex-col gap-4 md:flex-row md:items-center">
            <Reveal>
              <h2 className="font-display text-display-md font-medium text-ink">
                What We Do<span className="text-terracotta">.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="max-w-md text-ink-soft md:border-l md:border-line md:pl-8">
                A comprehensive suite of technology, digital and business
                solutions to help organisations grow and stay ahead.
              </p>
            </Reveal>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {whatWeDo.map(({ icon: Icon, title, body, href }, i) => (
              <Reveal key={title} delay={Math.min(i * 0.06, 0.25)}>
                <Link
                  href={href}
                  className="group block h-full rounded-2xl border border-line bg-white p-6 transition-colors hover:border-cobalt/40"
                >
                  <Icon aria-hidden className="size-7 text-cobalt" strokeWidth={1.6} />
                  <h3 className="mt-4 font-display text-lg font-medium text-ink transition-colors group-hover:text-cobalt">
                    {title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">
                    {body}
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <NavyWaveCta
        heading="Partner with Antelspark."
        copy="Have an idea or a business challenge? Let's turn it into a lasting solution."
        image="/images/dev/summit.jpg"
        imageAlt="Sunlit mountain summit"
        cta="Start a conversation"
      />
    </>
  );
}
