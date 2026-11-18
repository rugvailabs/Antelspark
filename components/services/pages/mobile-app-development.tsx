import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Bell,
  Check,
  Fingerprint,
  GitBranch,
  LineChart,
  Rocket,
  Smartphone,
  WifiOff,
} from "lucide-react";

import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import { ServiceBreadcrumb } from "@/components/services/blocks";
import {
  AppDetailScreen,
  AppHomeScreen,
  AppProgressScreen,
} from "@/components/services/dev/screens";
import {
  PhoneFrame,
  SummitCta,
  TechTiles,
  TrustChips,
} from "@/components/services/dev/ui";
import { Button } from "@/components/ui/button";
import type { Service, ServiceCategory } from "@/lib/services";

const journey = [
  {
    screen: <AppHomeScreen />,
    stage: "Onboard",
    note: "First-run that gets users to value fast",
  },
  {
    screen: <AppDetailScreen />,
    stage: "Engage",
    note: "Core flows tuned for one-handed use",
  },
  {
    screen: <AppProgressScreen />,
    stage: "Retain",
    note: "Progress and nudges that bring people back",
  },
];

const lifecycle = [
  { title: "Strategy", body: "Platform choice, scope and the metric the app must move." },
  { title: "Design", body: "Flows and interfaces that follow each platform's conventions." },
  { title: "Build", body: "Short sprints, working builds on your own device from week one." },
  { title: "Test", body: "Real devices, flaky networks, fat thumbs — tested like reality." },
  { title: "Release", body: "App Store and Play submission, review notes and rollout." },
  { title: "Iterate", body: "Crash reports and analytics decide the next release." },
];

const capabilities = [
  { icon: WifiOff, label: "Offline-first data & sync" },
  { icon: Bell, label: "Push notifications done politely" },
  { icon: Fingerprint, label: "Biometric auth & secure storage" },
  { icon: LineChart, label: "Analytics & crash monitoring" },
  { icon: GitBranch, label: "CI builds & staged rollouts" },
  { icon: Rocket, label: "App-store submission handled" },
];

export function MobileAppDevelopmentPage({
  category,
}: {
  service: Service;
  category: ServiceCategory;
}) {
  return (
    <>
      {/* Hero: copy + staggered app screens */}
      <section className="overflow-hidden border-b border-line">
        <Container className="grid items-center gap-14 pt-32 pb-14 md:pt-40 lg:grid-cols-[1.05fr_1fr]">
          <div>
            <Reveal>
              <ServiceBreadcrumb category={category} />
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="mt-6 font-display text-display-lg font-semibold text-ink">
                Mobile App Development
                <span className="text-cobalt">.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-ink-soft">
                Native and cross-platform apps for iOS and Android — designed
                for small screens, built for daily habits, shipped through the
                app stores.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <Button asChild size="lg">
                  <Link href="/contact">
                    Start your app
                    <ArrowUpRight aria-hidden />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="#journey">See the journey</Link>
                </Button>
              </div>
            </Reveal>
            <Reveal delay={0.32}>
              <div className="mt-11">
                <TrustChips
                  items={[
                    { icon: Smartphone, title: "iOS &", detail: "Android" },
                    { icon: GitBranch, title: "One codebase", detail: "option" },
                    { icon: Rocket, title: "App-store", detail: "ready" },
                  ]}
                />
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.18} y={36} className="w-full">
            <div className="relative mx-auto flex max-w-md items-center justify-center">
              <PhoneFrame className="relative z-0 -mr-10 -rotate-6">
                <AppDetailScreen />
              </PhoneFrame>
              <PhoneFrame className="relative z-10 shadow-[0_32px_64px_-24px_rgb(32_36_44_/_0.45)]">
                <AppHomeScreen />
              </PhoneFrame>
              <PhoneFrame className="relative z-0 -ml-10 rotate-6">
                <AppProgressScreen />
              </PhoneFrame>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Platforms: native or one codebase */}
      <section className="border-b border-line bg-white">
        <Container className="py-16 md:py-20">
          <Reveal>
            <p className="eyebrow text-terracotta">Platforms</p>
            <h2 className="mt-4 max-w-2xl font-display text-display-md font-medium text-ink">
              Fully native, or one codebase for both — chosen on your product,
              not our preference.
            </h2>
          </Reveal>
          <div className="mt-10 grid items-stretch gap-4 lg:grid-cols-[1fr_auto_1fr]">
            <Reveal>
              <div className="flex h-full items-start gap-5 rounded-2xl border border-line p-7">
                <Image src="/logos/color/apple.svg" alt="" width={34} height={34} className="mt-1 size-[34px]" />
                <div>
                  <h3 className="font-display text-xl font-medium text-ink">iOS</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                    Native Swift when the product demands platform-deep
                    integration — widgets, App Clips, HealthKit, the works.
                  </p>
                  <p className="mt-3 font-mono text-xs text-ink-faint">Swift · SwiftUI</p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.08} className="self-center">
              <div className="mx-auto flex flex-col items-center gap-1 rounded-full bg-cobalt px-5 py-3 text-center lg:px-4 lg:py-6">
                <span className="font-mono text-[0.6rem] tracking-[0.14em] text-white/80 uppercase">
                  or
                </span>
                <span className="text-sm font-semibold text-white">
                  One codebase
                </span>
                <span className="font-mono text-[0.6rem] text-white/80">
                  React Native · Flutter
                </span>
              </div>
            </Reveal>
            <Reveal delay={0.16}>
              <div className="flex h-full items-start gap-5 rounded-2xl border border-line p-7">
                <Image src="/logos/color/android.svg" alt="" width={34} height={34} className="mt-1 size-[34px]" />
                <div>
                  <h3 className="font-display text-xl font-medium text-ink">Android</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                    Native Kotlin for the widest device reach — tuned across
                    screen sizes, OEM quirks and older hardware.
                  </p>
                  <p className="mt-3 font-mono text-xs text-ink-faint">Kotlin · Jetpack Compose</p>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* User journey strip */}
      <section id="journey" className="scroll-mt-24 border-b border-line bg-cream/60">
        <Container className="py-16 md:py-20">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <Reveal>
              <p className="eyebrow text-cobalt">The user journey</p>
              <h2 className="mt-3 font-display text-display-sm font-medium text-ink">
                Designed screen by screen, not template by template.
              </h2>
            </Reveal>
          </div>
          <div className="mt-12 grid gap-10 sm:grid-cols-3">
            {journey.map(({ screen, stage, note }, i) => (
              <Reveal key={stage} delay={Math.min(i * 0.08, 0.3)}>
                <figure className="flex flex-col items-center text-center">
                  <div className="flex items-center">
                    <PhoneFrame className="w-40 sm:w-44">{screen}</PhoneFrame>
                    {i < journey.length - 1 && (
                      <ArrowRight
                        aria-hidden
                        className="ml-4 hidden size-5 shrink-0 text-terracotta sm:block sm:-mr-9"
                      />
                    )}
                  </div>
                  <figcaption className="mt-5">
                    <p className="font-mono text-xs tracking-[0.12em] text-cobalt uppercase">
                      {String(i + 1).padStart(2, "0")} — {stage}
                    </p>
                    <p className="mt-1.5 max-w-[14rem] text-sm leading-relaxed text-ink-soft">
                      {note}
                    </p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Lifecycle timeline + capabilities */}
      <section>
        <Container className="grid gap-14 py-16 md:py-20 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
          <div>
            <Reveal>
              <p className="eyebrow text-terracotta">How an app gets made</p>
              <h2 className="mt-4 font-display text-display-sm font-medium text-ink">
                From idea to the app stores.
              </h2>
            </Reveal>
            <ol className="mt-8 border-l-2 border-line">
              {lifecycle.map((step, i) => (
                <Reveal key={step.title} delay={Math.min(i * 0.05, 0.25)}>
                  <li className="relative pb-7 pl-7 last:pb-0">
                    <span
                      aria-hidden
                      className={`absolute top-1 -left-[7px] size-3 rounded-full border-2 bg-ivory ${
                        i === lifecycle.length - 1 ? "border-terracotta" : "border-cobalt"
                      }`}
                    />
                    <h3 className="font-display text-lg font-medium text-ink">
                      <span className="mr-2 font-mono text-xs text-ink-faint">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {step.title}
                    </h3>
                    <p className="mt-1 max-w-md text-sm leading-relaxed text-ink-soft">
                      {step.body}
                    </p>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>

          <div>
            <Reveal>
              <p className="eyebrow text-cobalt">Built in as standard</p>
              <h2 className="mt-4 font-display text-display-sm font-medium text-ink">
                The details users feel.
              </h2>
            </Reveal>
            <ul className="mt-8 grid gap-3">
              {capabilities.map(({ icon: Icon, label }, i) => (
                <Reveal key={label} delay={Math.min(i * 0.05, 0.25)}>
                  <li className="flex items-center gap-4 rounded-xl border border-line bg-white px-5 py-3.5">
                    <Icon aria-hidden className="size-5 shrink-0 text-cobalt" strokeWidth={1.7} />
                    <span className="text-sm font-medium text-ink">{label}</span>
                    <Check aria-hidden className="ml-auto size-4 text-terracotta" strokeWidth={2.5} />
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <TechTiles
        heading="Mobile tools we ship with."
        copy="Cross-platform by default, native where it counts — with the pipeline to release confidently."
        tools={[
          { name: "React Native", file: "/logos/color/react.svg" },
          { name: "Flutter", file: "/logos/color/flutter.svg" },
          { name: "Swift", file: "/logos/color/swift.svg" },
          { name: "Kotlin", file: "/logos/color/kotlin.svg" },
          { name: "Firebase", file: "/logos/color/firebase.svg" },
          { name: "Android", file: "/logos/color/android.svg" },
        ]}
      />

      <SummitCta
        eyebrow="Let's ship it"
        heading="Have an app idea?"
        copy="Tell us who it's for and what it must do — we'll recommend the platform approach and get a build on your phone fast."
      />
    </>
  );
}
