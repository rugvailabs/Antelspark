import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  BarChart3,
  Clapperboard,
  Heart,
  MessageCircle,
  Send,
  Target,
  Users,
} from "lucide-react";

import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import { RelatedStrip, ServiceBreadcrumb } from "@/components/services/blocks";
import { PhoneFrame } from "@/components/services/dev/ui";
import { FloatBadge, ImpactCta } from "@/components/services/digital/ui";
import { Button } from "@/components/ui/button";
import type { Service, ServiceCategory } from "@/lib/services";

const gridPhotos = [
  "/images/dev/summit.jpg",
  "/images/work/kalanestham.jpg",
  "/images/work/prosmash.jpg",
  "/images/company/team-collaboration.jpg",
  "/images/ai/manufacturing.jpg",
  "/images/blueprint-schematic.jpg",
  "/images/company/business-partnership.jpg",
  "/images/dev/workspace-code.jpg",
  "/images/ai/finance.jpg",
];

/* Instagram-style profile screen built from real project imagery. */
function ProfileScreen() {
  return (
    <div className="bg-white pt-7">
      <div className="flex items-center justify-between px-3.5 pb-2">
        <span className="font-display text-[0.8rem] font-semibold text-ink">
          antelspark
        </span>
        <span className="rounded-full bg-cobalt px-2.5 py-0.5 text-[0.55rem] font-semibold text-white">
          Follow
        </span>
      </div>
      <div className="flex items-center gap-3 px-3.5 pb-3">
        <span className="grid size-11 shrink-0 place-items-center rounded-full bg-ink">
          <svg viewBox="0 0 26 22" aria-hidden className="h-3.5 w-auto">
            <path d="M4 22 12.5 0h5.4L9.4 22Z" fill="var(--color-cobalt)" />
            <path d="M13.5 22 22 0h4l-8.5 22Z" fill="var(--color-terracotta)" />
          </svg>
        </span>
        <div className="space-y-1">
          <div className="h-1.5 w-24 rounded-full bg-ink/25" />
          <div className="h-1.5 w-16 rounded-full bg-ink/15" />
        </div>
      </div>
      <div className="flex gap-2.5 px-3.5 pb-3">
        {["bg-cobalt-wash", "bg-terracotta-wash", "bg-cream", "bg-cobalt-wash"].map((tint, i) => (
          <span key={i} className={`size-7 rounded-full border border-line ${tint}`} />
        ))}
      </div>
      <div className="grid grid-cols-3 gap-0.5">
        {gridPhotos.map((src) => (
          <div key={src} className="relative aspect-square">
            <Image src={src} alt="" fill sizes="80px" className="object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
}

const services = [
  {
    icon: Target,
    title: "Strategy & Planning",
    body: "Goal-driven content and platform strategy.",
  },
  {
    icon: Clapperboard,
    title: "Content Creation",
    body: "High-quality, brand-aligned content.",
  },
  {
    icon: Users,
    title: "Community Engagement",
    body: "Build, engage and grow your audience.",
  },
  {
    icon: BarChart3,
    title: "Performance Tracking",
    body: "Measure, analyse and optimise results.",
  },
];

const formats = [
  { label: "Story / Reel", ratio: "9:16", cls: "h-36 w-20 bg-cobalt" },
  { label: "Post", ratio: "1:1", cls: "h-24 w-24 bg-terracotta" },
  { label: "Carousel", ratio: "1:1 ×n", cls: "h-24 w-24 bg-cobalt-wash border border-cobalt/30" },
  { label: "Short", ratio: "9:16", cls: "h-36 w-20 bg-ink" },
  { label: "Cover", ratio: "16:9", cls: "h-20 w-36 bg-terracotta-wash border border-terracotta/30" },
];

const week = [
  { day: "Mon", items: [{ t: "Reel", c: "bg-cobalt text-white" }] },
  { day: "Tue", items: [{ t: "Story", c: "bg-cobalt-wash text-cobalt" }] },
  { day: "Wed", items: [{ t: "Post", c: "bg-terracotta text-white" }, { t: "Story", c: "bg-cobalt-wash text-cobalt" }] },
  { day: "Thu", items: [] },
  { day: "Fri", items: [{ t: "Carousel", c: "bg-ink text-white" }] },
  { day: "Sat", items: [{ t: "Story", c: "bg-cobalt-wash text-cobalt" }] },
  { day: "Sun", items: [{ t: "Recap", c: "bg-terracotta-wash text-terracotta" }] },
];

const platforms = [
  { name: "Instagram", file: "/logos/color/instagram.svg" },
  { name: "Facebook", file: "/logos/color/facebook.svg" },
  { name: "YouTube", file: "/logos/color/youtube.svg" },
  { name: "X", file: "/logos/color/x.svg" },
  { name: "WhatsApp", file: "/logos/color/whatsapp.svg" },
  { name: "Pinterest", file: "/logos/color/pinterest.svg" },
  { name: "Threads", file: "/logos/color/threads.svg" },
  { name: "Telegram", file: "/logos/color/telegram.svg" },
];

export function SocialMediaMarketingPage({
  category,
}: {
  service: Service;
  category: ServiceCategory;
}) {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-line">
        <div
          aria-hidden
          className="absolute top-10 right-[10%] size-96 rounded-full bg-terracotta-wash/90 blur-3xl"
        />
        <div
          aria-hidden
          className="absolute -right-20 bottom-0 size-80 rounded-full bg-cobalt-wash blur-3xl"
        />
        <Container className="relative grid items-center gap-14 pt-32 pb-16 md:pt-40 lg:grid-cols-[1.05fr_1fr]">
          <div>
            <Reveal>
              <ServiceBreadcrumb category={category} />
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="mt-6 font-display text-display-lg font-semibold text-ink">
                Social Media Marketing
                <span className="text-terracotta">.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-ink-soft">
                Build a strong brand presence, engage your audience and grow
                your business across the right platforms.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <Button asChild size="lg">
                  <Link href="/contact">
                    Grow on social media
                    <ArrowUpRight aria-hidden />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/work">See campaigns</Link>
                </Button>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.18} y={36} className="w-full">
            <div className="relative mx-auto flex max-w-sm justify-center py-6">
              <PhoneFrame className="relative z-10">
                <ProfileScreen />
              </PhoneFrame>
              <div className="absolute top-0 -left-1 z-20 sm:left-6">
                <FloatBadge file="/logos/color/instagram.svg" label="Instagram" className="-rotate-6" />
              </div>
              <div className="absolute top-20 -right-2 z-20 sm:right-2">
                <FloatBadge file="/logos/color/youtube.svg" label="YouTube" className="rotate-6" />
              </div>
              <div className="absolute bottom-24 -left-3 z-0 sm:left-2">
                <FloatBadge file="/logos/color/facebook.svg" label="Facebook" className="rotate-3" />
              </div>
              <div className="absolute -right-1 bottom-4 z-20 sm:right-8">
                <FloatBadge file="/logos/color/x.svg" label="X" className="-rotate-3" />
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Services tiles */}
      <section className="border-b border-line bg-white">
        <Container className="grid items-center gap-10 py-14 md:py-16 lg:grid-cols-[0.7fr_2.3fr] lg:gap-12">
          <Reveal>
            <h2 className="font-display text-display-sm font-medium text-ink lg:border-r lg:border-line lg:pr-10">
              Our social media services.
            </h2>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {services.map(({ icon: Icon, title, body }, i) => (
              <Reveal key={title} delay={Math.min(i * 0.06, 0.25)}>
                <div className="h-full rounded-2xl border border-line bg-ivory p-5 transition-colors hover:border-cobalt/40">
                  <span className="flex size-10 items-center justify-center rounded-full bg-terracotta-wash text-terracotta">
                    <Icon aria-hidden className="size-5" strokeWidth={1.7} />
                  </span>
                  <h3 className="mt-4 font-display text-lg font-medium text-ink">
                    {title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">
                    {body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Formats */}
      <section>
        <Container className="py-16 md:py-20">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <Reveal>
              <p className="eyebrow text-terracotta">Native, not resized</p>
              <h2 className="mt-3 max-w-lg font-display text-display-md font-medium text-ink">
                Made for the format, not squeezed into it.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="max-w-sm text-sm leading-relaxed text-ink-soft">
                A reel is not a poster. Every piece is designed for the shape,
                sound and speed of its feed.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.15} y={28}>
            <div className="mt-12 flex flex-wrap items-end justify-center gap-8 rounded-3xl bg-cream/60 px-6 py-10 sm:gap-12">
              {formats.map(({ label, ratio, cls }) => (
                <figure key={label} className="text-center">
                  <div className={`mx-auto grid place-items-center rounded-xl shadow-[0_14px_28px_-16px_rgb(32_36_44_/_0.4)] ${cls}`}>
                    <Clapperboard
                      aria-hidden
                      className={`size-5 ${cls.includes("wash") ? "text-ink/40" : "text-white/70"}`}
                      strokeWidth={1.6}
                    />
                  </div>
                  <figcaption className="mt-3">
                    <p className="text-xs font-semibold text-ink">{label}</p>
                    <p className="font-mono text-[0.6rem] text-ink-faint">{ratio}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Calendar + community */}
      <section className="border-y border-line bg-white">
        <Container className="grid items-center gap-14 py-16 md:py-20 lg:grid-cols-2 lg:gap-16">
          {/* Calendar mock */}
          <Reveal y={32}>
            <div aria-hidden className="rounded-2xl border border-line bg-ivory p-5">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[0.65rem] tracking-[0.14em] text-ink-faint uppercase">
                  Content calendar — one week
                </span>
                <span className="size-2 rounded-full bg-terracotta" />
              </div>
              <div className="mt-4 grid grid-cols-7 gap-1.5">
                {week.map(({ day, items }) => (
                  <div key={day} className="space-y-1.5">
                    <p className="text-center font-mono text-[0.58rem] text-ink-faint">
                      {day}
                    </p>
                    <div className="min-h-24 space-y-1.5 rounded-lg border border-line bg-white p-1">
                      {items.map(({ t, c }) => (
                        <span
                          key={t}
                          className={`block rounded px-1 py-1 text-center text-[0.52rem] font-semibold ${c}`}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <p className="eyebrow text-cobalt">Consistency wins</p>
              <h2 className="mt-4 font-display text-display-md font-medium text-ink">
                A rhythm, not random acts of content.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 max-w-md leading-relaxed text-ink-soft">
                Audiences grow on cadence. We plan weeks ahead, produce in
                batches, and leave room for the moment the internet hands you.
              </p>
            </Reveal>
            <ul className="mt-7 space-y-4">
              {[
                { icon: MessageCircle, text: "Comments and DMs answered in your voice, fast" },
                { icon: Send, text: "A tone guide so every reply sounds like you" },
                { icon: BarChart3, text: "A monthly review tied to business goals — not vanity counts" },
              ].map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-start gap-3.5">
                  <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-full bg-cobalt-wash text-cobalt">
                    <Icon aria-hidden className="size-4" strokeWidth={1.8} />
                  </span>
                  <span className="pt-1 text-sm text-ink">{text}</span>
                </li>
              ))}
            </ul>
            <Reveal delay={0.2}>
              <div className="mt-8 flex flex-wrap gap-2">
                {platforms.map(({ name, file }) => (
                  <span
                    key={name}
                    className="flex items-center gap-2 rounded-full border border-line bg-ivory px-3 py-1.5"
                  >
                    <Image src={file} alt="" width={14} height={14} className="size-[14px]" />
                    <span className="text-xs font-medium text-ink">{name}</span>
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Engagement teaser */}
      <section>
        <Container className="flex justify-center py-14 md:py-16">
          <Reveal y={28}>
            <div aria-hidden className="w-full max-w-md rounded-2xl border border-line bg-white p-5 shadow-[0_24px_48px_-28px_rgb(32_36_44_/_0.35)]">
              <div className="flex items-center gap-3">
                <span className="size-9 rounded-full bg-terracotta-wash" />
                <div className="space-y-1">
                  <div className="h-1.5 w-24 rounded-full bg-ink/25" />
                  <div className="h-1.5 w-16 rounded-full bg-ink/12" />
                </div>
                <Heart className="ml-auto size-4 fill-terracotta text-terracotta" />
              </div>
              <div className="mt-3 space-y-1.5">
                <div className="h-1.5 w-11/12 rounded-full bg-ink/12" />
                <div className="h-1.5 w-3/4 rounded-full bg-ink/12" />
              </div>
              <div className="mt-4 flex items-center gap-2 rounded-full border border-line px-3.5 py-2">
                <span className="text-xs text-ink-faint">Replying as antelspark…</span>
                <Send className="ml-auto size-3.5 text-cobalt" />
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <RelatedStrip category={category} currentSlug="social-media-marketing" />

      <ImpactCta
        statement="Posting is easy. Presence is built."
        copy="Tell us who you want to reach — we'll pick the platforms worth your time and build the rhythm that gets you there."
        image="/images/services/social-media-marketing.jpg"
        imageAlt="Three-dimensional social media platform icons"
        cta="Grow on social media"
      />
    </>
  );
}
