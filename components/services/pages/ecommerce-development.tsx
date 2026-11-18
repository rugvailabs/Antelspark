import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ClipboardList,
  CreditCard,
  PackageCheck,
  ShoppingCart,
  Store,
  Zap,
} from "lucide-react";

import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import { ServiceBreadcrumb } from "@/components/services/blocks";
import {
  CheckoutScreen,
  ProSmashScreen,
  StoreScreen,
} from "@/components/services/dev/screens";
import {
  LaptopFrame,
  PhoneFrame,
  SummitCta,
  TechTiles,
  TrustChips,
} from "@/components/services/dev/ui";
import { Button } from "@/components/ui/button";
import type { Service, ServiceCategory } from "@/lib/services";

const b2c = {
  title: "B2C storefronts",
  copy: "Shops that feel effortless on a phone at 11pm — where most buying actually happens.",
  points: [
    "Conversion-first product pages",
    "Fast, distraction-free checkout",
    "Promotions, bundles & gift flows",
    "Reviews, search & merchandising",
  ],
};

const b2b = {
  title: "B2B commerce portals",
  copy: "Wholesale buying is different: accounts, approvals and pricing that depends on who's asking.",
  points: [
    "Customer-specific price lists",
    "Bulk ordering & quick re-order",
    "Quotes, approvals & credit terms",
    "ERP & inventory integration",
  ],
};

const checkoutFlow = [
  { icon: ShoppingCart, title: "Cart", note: "persistent & recoverable" },
  { icon: ClipboardList, title: "Checkout", note: "guest-friendly, few fields" },
  { icon: CreditCard, title: "Payment", note: "cards, wallets & UPI" },
  { icon: PackageCheck, title: "Fulfilment", note: "tracking & notifications" },
];

const catalogueCapabilities = [
  "Product catalogues that stay manageable at thousands of SKUs",
  "Inventory synced across store, warehouse and marketplaces",
  "Search and filtering that understand what shoppers mean",
  "Payments, tax and shipping integrated end to end",
];

export function EcommerceDevelopmentPage({
  category,
}: {
  service: Service;
  category: ServiceCategory;
}) {
  return (
    <>
      {/* Hero: copy + desktop & mobile shopping composition */}
      <section className="relative overflow-hidden border-b border-line">
        <div
          aria-hidden
          className="absolute top-0 right-0 h-full w-[52%] bg-cobalt-wash/70 [clip-path:polygon(15%_0,100%_0,100%_100%,0_100%)] max-lg:hidden"
        />
        <Container className="relative grid items-center gap-12 pt-32 pb-14 md:pt-40 lg:grid-cols-[1fr_1.05fr]">
          <div>
            <Reveal>
              <ServiceBreadcrumb category={category} />
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="mt-6 font-display text-display-lg font-semibold text-ink">
                E-commerce Development
                <span className="text-terracotta">.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-ink-soft">
                Storefronts, checkouts and commerce operations engineered to
                convert — for direct-to-consumer brands and wholesale alike.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <Button asChild size="lg">
                  <Link href="/contact">
                    Plan your store
                    <ArrowUpRight aria-hidden />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="#commerce-models">B2C &amp; B2B</Link>
                </Button>
              </div>
            </Reveal>
            <Reveal delay={0.32}>
              <div className="mt-11">
                <TrustChips
                  items={[
                    { icon: Store, title: "B2C & B2B", detail: "commerce" },
                    { icon: Zap, title: "Fast", detail: "checkout" },
                    { icon: CreditCard, title: "Integrated", detail: "payments" },
                  ]}
                />
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.18} y={36} className="relative w-full">
            <div className="relative pr-10 pb-10 sm:pr-16">
              <LaptopFrame className="max-w-lg">
                <StoreScreen />
              </LaptopFrame>
              <PhoneFrame className="absolute right-0 -bottom-4 sm:right-2">
                <CheckoutScreen />
              </PhoneFrame>
            </div>
            <p className="mt-4 font-mono text-[0.65rem] tracking-[0.14em] text-ink-faint uppercase">
              Browse on desktop — buy on mobile
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Two kinds of commerce: split panel */}
      <section id="commerce-models" className="scroll-mt-24">
        <Container className="py-16 md:py-20">
          <Reveal>
            <p className="eyebrow text-terracotta">Who it&apos;s for</p>
            <h2 className="mt-4 max-w-2xl font-display text-display-md font-medium text-ink">
              Selling to shoppers and selling to businesses are different
              crafts. We build both.
            </h2>
          </Reveal>
          <div className="mt-10 grid overflow-hidden rounded-3xl border border-line lg:grid-cols-2">
            <Reveal className="h-full">
              <div className="h-full bg-white p-8 sm:p-10">
                <p className="eyebrow text-cobalt">{b2c.title}</p>
                <p className="mt-4 max-w-md text-lg leading-relaxed text-ink">
                  {b2c.copy}
                </p>
                <ul className="mt-6 space-y-3">
                  {b2c.points.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-cobalt-wash text-cobalt">
                        <Check aria-hidden className="size-3" strokeWidth={3} />
                      </span>
                      <span className="text-sm text-ink-soft">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={0.1} className="h-full">
              <div className="h-full bg-navy p-8 sm:p-10">
                <p className="eyebrow text-terracotta">{b2b.title}</p>
                <p className="mt-4 max-w-md text-lg leading-relaxed text-white">
                  {b2b.copy}
                </p>
                <ul className="mt-6 space-y-3">
                  {b2b.points.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-white/15 text-white">
                        <Check aria-hidden className="size-3" strokeWidth={3} />
                      </span>
                      <span className="text-sm text-white/75">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Checkout flow */}
      <section className="border-y border-line bg-cream/60">
        <Container className="py-14 md:py-18">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <Reveal>
              <p className="eyebrow text-cobalt">The money path</p>
              <h2 className="mt-3 font-display text-display-sm font-medium text-ink">
                Four steps where stores win or lose.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="max-w-xs text-sm leading-relaxed text-ink-soft">
                We design and instrument every step, because each one is where
                a sale quietly succeeds — or doesn&apos;t.
              </p>
            </Reveal>
          </div>
          <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {checkoutFlow.map(({ icon: Icon, title, note }, i) => (
              <Reveal key={title} delay={Math.min(i * 0.07, 0.3)}>
                <li className="flex items-center gap-4">
                  <div className="flex-1 rounded-2xl border border-line bg-white p-5">
                    <Icon aria-hidden className="size-6 text-cobalt" strokeWidth={1.7} />
                    <h3 className="mt-3 font-display text-lg font-medium text-ink">
                      {title}
                    </h3>
                    <p className="mt-1 font-mono text-[0.65rem] tracking-wide text-ink-faint">
                      {note}
                    </p>
                  </div>
                  {i < checkoutFlow.length - 1 && (
                    <ArrowRight
                      aria-hidden
                      className="hidden size-5 shrink-0 text-terracotta lg:block"
                    />
                  )}
                </li>
              </Reveal>
            ))}
          </ol>
        </Container>
      </section>

      {/* Catalogue & operations */}
      <section>
        <Container className="grid items-center gap-12 py-16 md:py-20 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
          <Reveal y={32}>
            <div className="relative">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-cream">
                <Image
                  src="/images/services/ecommerce-development.jpg"
                  alt="A shopper paying by card on a laptop"
                  fill
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div
                aria-hidden
                className="absolute -bottom-3 left-8 h-8 w-24 -skew-x-[24deg] bg-terracotta"
              />
            </div>
          </Reveal>
          <div>
            <Reveal>
              <p className="eyebrow text-terracotta">Beyond the storefront</p>
              <h2 className="mt-4 font-display text-display-md font-medium text-ink">
                Commerce is an operations problem wearing a pretty interface.
              </h2>
            </Reveal>
            <ul className="mt-8 space-y-0">
              {catalogueCapabilities.map((capability, i) => (
                <Reveal key={capability} delay={0.08 + i * 0.06}>
                  <li className="flex items-start gap-4 border-t border-line py-4 last:border-b">
                    <span className="font-mono text-xs text-cobalt">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-ink/90">{capability}</span>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* ProSmash: B2B commerce, proven */}
      <section className="bg-navy">
        <Container className="grid items-center gap-12 py-16 md:py-20 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <div>
            <Reveal>
              <p className="eyebrow text-terracotta">From our work</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-4 font-display text-display-md font-medium text-white">
                ProSmash — wholesale commerce in production.
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-5 max-w-md leading-relaxed text-white/70">
                A sports-equipment commerce platform serving schools,
                academies and retailers — the B2B patterns on this page,
                running as a real business.
              </p>
            </Reveal>
            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {[
                "Multi-user B2B accounts",
                "Custom pricing & discounts",
                "Admin operations console",
                "Scalable & secure architecture",
              ].map((item, i) => (
                <Reveal key={item} delay={0.2 + i * 0.05}>
                  <li className="flex items-start gap-2.5">
                    <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-cobalt text-white">
                      <Check aria-hidden className="size-3" strokeWidth={3} />
                    </span>
                    <span className="text-sm text-white/85">{item}</span>
                  </li>
                </Reveal>
              ))}
            </ul>
            <Reveal delay={0.3}>
              <Button asChild variant="outline-inverse" className="mt-8">
                <Link href="/work">
                  View case study
                  <ArrowUpRight aria-hidden />
                </Link>
              </Button>
            </Reveal>
          </div>
          <Reveal delay={0.15} y={36}>
            <LaptopFrame className="mx-auto max-w-lg">
              <ProSmashScreen />
            </LaptopFrame>
          </Reveal>
        </Container>
      </section>

      <TechTiles
        heading="Commerce technology that earns its keep."
        copy="Platform-based or headless — we recommend what fits your catalogue, team and margins."
        tools={[
          { name: "Shopify", file: "/logos/color/shopify.svg" },
          { name: "Stripe", file: "/logos/color/stripe.svg" },
          { name: "Medusa", file: "/logos/color/medusa.svg" },
          { name: "Next.js", file: "/logos/color/nextdotjs.svg" },
          { name: "Sanity", file: "/logos/color/sanity.svg" },
          { name: "PostgreSQL", file: "/logos/color/postgresql.svg" },
        ]}
      />

      <SummitCta
        eyebrow="Let's talk commerce"
        heading="Ready to sell more, everywhere?"
        copy="Tell us what you sell and to whom — we'll map the storefront, checkout and operations to make it effortless."
      />
    </>
  );
}
