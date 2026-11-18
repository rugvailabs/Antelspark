import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import { NavyWaveCta } from "@/components/services/biz/ui";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "Software, AI and digital solutions for startups, SMEs, enterprises, education, e-commerce and beyond.",
};

const industries = [
  {
    slug: "startups",
    title: "Startups",
    lead: "Ship the version that proves it — without painting yourself into a corner.",
    body: "Speed matters most before product-market fit, but shortcuts shouldn't become ceilings. We build MVPs that launch in weeks and architectures that survive success.",
    build: ["MVPs & v1 products", "Pitch-ready prototypes", "Scalable foundations", "Fractional CTO support"],
    image: "/images/industries/startups.jpg",
    imageAlt: "Young engineering team working through code together",
  },
  {
    slug: "smes",
    title: "SMEs",
    lead: "Digital systems that remove manual work and open new revenue.",
    body: "Small and mid-sized businesses rarely need enterprise complexity — they need the right tools, connected properly, at a cost that makes sense.",
    build: ["Websites & online stores", "Back-office automation", "Customer & booking systems", "Practical AI assistants"],
    image: "/images/industries/smes.jpg",
    imageAlt: "Small-business owner taking a payment at the counter",
  },
  {
    slug: "enterprises",
    title: "Enterprises",
    lead: "Modernisation and integration across complex, regulated estates.",
    body: "Large organisations don't get greenfield luxuries. We modernise in waves, integrate what must stay, and keep compliance in the room from day one.",
    build: ["Legacy modernisation", "System integration", "Enterprise platforms", "Governance & security"],
    image: "/images/industries/enterprises.jpg",
    imageAlt: "Glass office towers from street level",
  },
  {
    slug: "education",
    title: "Education",
    lead: "Learning platforms and campus systems built for real classrooms.",
    body: "Education technology has to work for teachers, students and administrators at once — on old devices, patchy networks and tight budgets.",
    build: ["Learning platforms", "Admissions & campus systems", "Assessment tooling", "Parent & student portals"],
    image: "/images/industries/education.jpg",
    imageAlt: "Teacher leading a lively school classroom",
  },
  {
    slug: "ecommerce",
    title: "E-commerce",
    lead: "Storefronts and operations tooling tuned for conversion and margin.",
    body: "Commerce rewards the details — page speed, checkout friction, inventory truth. We've built B2C and wholesale B2B commerce that holds up on both sides of the counter.",
    build: ["B2C storefronts", "B2B wholesale portals", "Checkout & payments", "Inventory & operations"],
    image: "/images/industries/ecommerce.jpg",
    imageAlt: "Shopper checking out online with a card",
  },
  {
    slug: "other-sectors",
    title: "Health & other sectors",
    lead: "Healthcare, logistics, media, finance — good engineering translates.",
    body: "Every sector has its own rules, rhythms and risks. What carries across is the craft: understanding the domain deeply before building for it.",
    build: ["Domain-specific platforms", "Workflow & field tools", "Data & reporting systems", "Integrations that stick"],
    image: "/images/industries/other-sectors.jpg",
    imageAlt: "Doctor using a smartphone",
  },
];

export default function IndustriesPage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-line">
        <Container className="pt-32 pb-14 md:pt-40">
          <Reveal>
            <p className="eyebrow text-cobalt">Industries</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-5 max-w-3xl font-display text-display-lg font-semibold text-ink">
              Built for your context
              <span className="text-terracotta">.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
              Good engineering translates across sectors — but the best
              solutions come from understanding how your industry actually
              operates.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Industry sections */}
      {industries.map((industry, index) => (
        <section
          key={industry.slug}
          id={industry.slug}
          className={`scroll-mt-24 ${index % 2 === 1 ? "border-y border-line bg-white" : ""}`}
        >
          <Container className="py-14 md:py-18">
            <div
              className={`grid items-center gap-10 lg:grid-cols-[1fr_1.05fr] lg:gap-16 ${
                index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <Reveal y={32}>
                <div className="relative aspect-[16/10] overflow-hidden rounded-2xl">
                  <Image
                    src={industry.image}
                    alt={industry.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 48vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </Reveal>
              <div>
                <Reveal>
                  <p className="font-mono text-xs tracking-[0.14em] text-terracotta uppercase">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h2 className="mt-2 font-display text-display-sm font-medium text-ink">
                    {industry.title}
                  </h2>
                  <p className="mt-3 text-lg font-medium text-ink">
                    {industry.lead}
                  </p>
                </Reveal>
                <Reveal delay={0.08}>
                  <p className="mt-3 max-w-lg leading-relaxed text-ink-soft">
                    {industry.body}
                  </p>
                </Reveal>
                <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                  {industry.build.map((item, i) => (
                    <Reveal key={item} delay={0.1 + i * 0.03}>
                      <li className="flex items-start gap-2.5">
                        <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-cobalt-wash text-cobalt">
                          <Check aria-hidden className="size-3" strokeWidth={3} />
                        </span>
                        <span className="text-sm text-ink">{item}</span>
                      </li>
                    </Reveal>
                  ))}
                </ul>
              </div>
            </div>
          </Container>
        </section>
      ))}

      {/* Not listed? */}
      <section className="border-t border-line">
        <Container className="flex flex-col items-start gap-6 py-14 md:flex-row md:items-center md:justify-between">
          <Reveal>
            <h2 className="max-w-lg font-display text-display-sm font-medium text-ink">
              Don&apos;t see your sector? That&apos;s rarely a problem.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Button asChild size="lg" variant="outline">
              <Link href="/contact">
                Tell us about it
                <ArrowUpRight aria-hidden />
              </Link>
            </Button>
          </Reveal>
        </Container>
      </section>

      <NavyWaveCta
        heading="Solutions for growing industries."
        copy="Wherever you operate, the first step is the same — a conversation about how your business actually works."
        image="/images/earth-network.jpg"
        imageAlt="Earth at night, city lights tracing networks"
        cta="Start a conversation"
      />
    </>
  );
}
