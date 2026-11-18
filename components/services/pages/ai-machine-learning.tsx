import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  BarChart3,
  Brain,
  CodeXml,
  Database,
  Eye,
  Factory,
  HeartPulse,
  Layers,
  LineChart,
  MessageSquare,
  Package,
  RefreshCw,
  Rocket,
  Search,
  ShoppingCart,
  Sparkles,
  Zap,
  type LucideIcon,
} from "lucide-react";

import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import {
  AuroraCta,
  DarkHero,
  GlassChip,
  GradientPath,
  UseCaseCard,
} from "@/components/services/ai/ui";
import { TechTiles } from "@/components/services/dev/ui";
import { Button } from "@/components/ui/button";
import type { Service, ServiceCategory } from "@/lib/services";

const outcomes = [
  { icon: Layers, label: "Higher efficiency" },
  { icon: BarChart3, label: "Smarter decisions" },
  { icon: Zap, label: "Process automation" },
  { icon: Database, label: "Real business impact" },
];

type Capability = { icon: LucideIcon; title: string; body: string };

const capabilitiesLeft: Capability[] = [
  {
    icon: Eye,
    title: "Computer Vision",
    body: "Image analysis, detection and visual intelligence.",
  },
  {
    icon: LineChart,
    title: "Predictive Analytics",
    body: "Forecast, analyse and make data-backed decisions.",
  },
  {
    icon: Sparkles,
    title: "Recommendation Systems",
    body: "Personalised and intelligent experiences.",
  },
];

const capabilitiesRight: Capability[] = [
  {
    icon: MessageSquare,
    title: "Natural Language Processing",
    body: "Understand, process and generate human language.",
  },
  {
    icon: Brain,
    title: "Generative AI Integration",
    body: "GenAI for content, automation and productivity.",
  },
  {
    icon: Package,
    title: "Model Development & Deployment",
    body: "Build, train and ship scalable ML to production.",
  },
];

const useCases = [
  {
    icon: Factory,
    title: "Manufacturing",
    body: "Defect detection & quality monitoring.",
    image: "/images/ai/manufacturing.jpg",
    imageAlt: "Engineer working at a production line",
  },
  {
    icon: ShoppingCart,
    title: "Retail & Commerce",
    body: "Demand forecasting & personalised recommendations.",
    image: "/images/industries/ecommerce.jpg",
    imageAlt: "Online shopping checkout",
  },
  {
    icon: HeartPulse,
    title: "Healthcare",
    body: "Medical image analysis & intelligent assistance.",
    image: "/images/industries/other-sectors.jpg",
    imageAlt: "Doctor using a smartphone",
  },
  {
    icon: BarChart3,
    title: "Finance",
    body: "Risk analysis & fraud detection.",
    image: "/images/ai/finance.jpg",
    imageAlt: "Trading chart on a dark screen",
  },
];

function CapabilityChip({
  capability,
  align,
}: {
  capability: Capability;
  align: "left" | "right";
}) {
  const Icon = capability.icon;
  return (
    <div
      className={`flex items-start gap-3.5 rounded-2xl border border-line bg-white p-4 shadow-[0_14px_30px_-20px_rgb(32_36_44_/_0.35)] ${
        align === "right" ? "lg:flex-row-reverse lg:text-right" : ""
      }`}
    >
      <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-cobalt-wash text-cobalt">
        <Icon aria-hidden className="size-5" strokeWidth={1.7} />
      </span>
      <div>
        <h3 className="text-sm font-semibold text-ink">{capability.title}</h3>
        <p className="mt-1 text-xs leading-snug text-ink-soft">
          {capability.body}
        </p>
      </div>
    </div>
  );
}

export function AiMachineLearningPage({
  category,
}: {
  service: Service;
  category: ServiceCategory;
}) {
  return (
    <>
      {/* Dark luminous hero */}
      <DarkHero glow="warm">
        <Container className="relative grid items-center gap-12 pt-32 pb-24 md:pt-40 md:pb-32 lg:grid-cols-[1fr_1.05fr]">
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
                AI &amp; Machine{" "}
                <span className="bg-gradient-to-r from-[#f2a97e] to-terracotta bg-clip-text text-transparent">
                  Learning
                </span>
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-white/75">
                Build intelligent, data-driven solutions that learn, predict
                and create real business value.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <Button asChild size="lg">
                  <Link href="/contact">
                    Start an AI project
                    <ArrowUpRight aria-hidden />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline-inverse">
                  <Link href="#use-cases">Explore use cases</Link>
                </Button>
              </div>
            </Reveal>
          </div>

          {/* Imagery + glass chips */}
          <Reveal delay={0.18} y={36} className="relative w-full">
            <div className="relative h-[340px] sm:h-[400px]">
              <div className="absolute inset-y-0 left-0 w-[85%] overflow-hidden rounded-3xl">
                <Image
                  src="/images/services/ai-machine-learning.jpg"
                  alt="Three-dimensional AI lettering in blue and violet light"
                  fill
                  priority
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover opacity-90 [mask-image:linear-gradient(to_right,transparent,black_18%)]"
                />
              </div>
              <div className="absolute top-4 right-0 flex flex-col gap-4">
                <GlassChip icon={Brain} label="Model training" value="on your own data" />
                <GlassChip
                  icon={BarChart3}
                  label="Evaluation"
                  value="before every release"
                  className="translate-x-0 sm:-translate-x-6"
                />
                <GlassChip icon={RefreshCw} label="Data processing" value="real-time" />
              </div>
            </div>
          </Reveal>
        </Container>
      </DarkHero>

      {/* Turn data into intelligence */}
      <section>
        <Container className="grid items-center gap-10 py-14 md:py-18 lg:grid-cols-[1fr_1fr_1.6fr] lg:gap-12">
          <Reveal>
            <span aria-hidden className="block h-1.5 w-10 rounded-full bg-terracotta" />
            <h2 className="mt-5 font-display text-display-md font-medium text-ink">
              Turn your data into{" "}
              <span className="text-cobalt">intelligence.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-xs text-sm leading-relaxed text-ink-soft lg:border-l lg:border-line lg:pl-8">
              We design and deploy AI and machine-learning solutions that
              automate operations, uncover insights and help you make smarter
              decisions.
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <div className="grid grid-cols-2 gap-y-8 sm:grid-cols-4 sm:divide-x sm:divide-line">
              {outcomes.map(({ icon: Icon, label }) => (
                <div key={label} className="px-4 text-center first:pl-0 last:pr-0">
                  <Icon aria-hidden className="mx-auto size-7 text-cobalt" strokeWidth={1.6} />
                  <p className="mt-3 text-sm leading-snug font-medium text-ink">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Orbit capabilities */}
      <section className="border-y border-line bg-white">
        <Container className="py-16 md:py-20">
          <Reveal>
            <p className="eyebrow text-cobalt">What we offer</p>
            <h2 className="mt-4 max-w-md font-display text-display-md font-medium text-ink">
              End-to-end AI capabilities for real business needs.
            </h2>
            <span aria-hidden className="mt-4 flex gap-1.5">
              <span className="size-1.5 rounded-full bg-terracotta" />
              <span className="size-1.5 rounded-full bg-terracotta" />
              <span className="size-1.5 rounded-full bg-cobalt" />
            </span>
          </Reveal>

          <div className="mt-12 grid items-center gap-6 lg:grid-cols-[1fr_auto_1fr] lg:gap-10">
            <div className="space-y-5">
              {capabilitiesLeft.map((capability, i) => (
                <Reveal key={capability.title} delay={i * 0.07}>
                  <div className={i === 1 ? "lg:-translate-x-6" : ""}>
                    <CapabilityChip capability={capability} align="left" />
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Central AI core */}
            <Reveal delay={0.1} className="justify-self-center">
              <div className="relative hidden size-64 place-items-center lg:grid">
                <span
                  aria-hidden
                  className="absolute inset-0 rounded-full border-2 border-dashed border-cobalt/30"
                />
                <span aria-hidden className="absolute inset-9 rounded-full bg-cobalt/10 blur-xl" />
                {[0, 60, 120, 180, 240, 300].map((deg) => (
                  <span
                    key={deg}
                    aria-hidden
                    className="absolute top-1/2 left-1/2 size-2.5 rounded-full border-2 border-cobalt bg-white"
                    style={{
                      transform: `translate(-50%,-50%) rotate(${deg}deg) translateX(128px)`,
                    }}
                  />
                ))}
                <div className="relative grid size-28 place-items-center rounded-3xl bg-gradient-to-br from-cobalt to-navy-deep shadow-[0_24px_48px_-16px_rgb(36_87_214_/_0.55)]">
                  <span
                    aria-hidden
                    className="absolute inset-0 rounded-3xl border border-white/25"
                  />
                  <span className="font-display text-3xl font-semibold text-white">
                    AI
                  </span>
                </div>
              </div>
            </Reveal>

            <div className="space-y-5">
              {capabilitiesRight.map((capability, i) => (
                <Reveal key={capability.title} delay={i * 0.07}>
                  <div className={i === 1 ? "lg:translate-x-6" : ""}>
                    <CapabilityChip capability={capability} align="right" />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Use cases */}
      <section id="use-cases" className="scroll-mt-24">
        <Container className="grid gap-10 py-16 md:py-20 lg:grid-cols-[0.8fr_2.2fr] lg:gap-14">
          <Reveal>
            <p className="eyebrow text-cobalt">Use cases</p>
            <h2 className="mt-4 font-display text-display-sm font-medium text-ink">
              Real-world applications across industries.
            </h2>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-soft">
              The same craft, pointed at very different problems.
            </p>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {useCases.map((useCase, i) => (
              <Reveal key={useCase.title} delay={Math.min(i * 0.07, 0.3)}>
                <UseCaseCard {...useCase} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <GradientPath
        eyebrow="Our approach"
        heading="A practical path from data to impact."
        steps={[
          { icon: Search, title: "Discover", body: "Understand business goals and data." },
          { icon: Database, title: "Prepare", body: "Clean, structure and engineer data." },
          { icon: CodeXml, title: "Build", body: "Train and evaluate ML/AI models." },
          { icon: Rocket, title: "Deploy", body: "Integrate and launch in your environment." },
          { icon: BarChart3, title: "Optimise", body: "Monitor, improve and scale for impact." },
        ]}
      />

      <TechTiles
        heading="Built with proven AI & data technologies."
        copy="Mature tools with real communities — chosen for your problem, not the hype cycle."
        tools={[
          { name: "Python", file: "/logos/color/python.svg" },
          { name: "TensorFlow", file: "/logos/color/tensorflow.svg" },
          { name: "PyTorch", file: "/logos/color/pytorch.svg" },
          { name: "scikit-learn", file: "/logos/color/scikitlearn.svg" },
          { name: "OpenCV", file: "/logos/color/opencv.svg" },
          { name: "Hugging Face", file: "/logos/color/huggingface.svg" },
        ]}
      />

      <AuroraCta
        heading="Let's build your AI solution"
        copy="Discuss your data, challenges and goals with our AI engineers — and get an honest read on where AI belongs."
      />
    </>
  );
}
