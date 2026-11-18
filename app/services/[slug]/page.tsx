import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import { AiAutomationPage } from "@/components/services/pages/ai-automation";
import { BrandingIdentityPage } from "@/components/services/pages/branding-identity";
import { AiMachineLearningPage } from "@/components/services/pages/ai-machine-learning";
import { CloudDevopsPage } from "@/components/services/pages/cloud-devops";
import { CustomSoftwareDevelopmentPage } from "@/components/services/pages/custom-software-development";
import { DataEngineeringAnalyticsPage } from "@/components/services/pages/data-engineering-analytics";
import { DigitalMarketingSeoPage } from "@/components/services/pages/digital-marketing-seo";
import { EcommerceDevelopmentPage } from "@/components/services/pages/ecommerce-development";
import { EnterpriseSolutionsPage } from "@/components/services/pages/enterprise-solutions";
import { ItConsultingPage } from "@/components/services/pages/it-consulting";
import { MobileAppDevelopmentPage } from "@/components/services/pages/mobile-app-development";
import { TechnicalSupportPage } from "@/components/services/pages/technical-support";
import { TechnologyMaintenancePage } from "@/components/services/pages/technology-maintenance";
import { SocialMediaMarketingPage } from "@/components/services/pages/social-media-marketing";
import { UiUxDesignPage } from "@/components/services/pages/ui-ux-design";
import { WebsiteDevelopmentPage } from "@/components/services/pages/website-development";
import { Button } from "@/components/ui/button";
import { processSteps } from "@/lib/home";
import {
  getCategoryOf,
  getService,
  services,
  type Service,
  type ServiceCategory,
} from "@/lib/services";
import { siteConfig } from "@/lib/site";

type Params = { slug: string };

type BespokePage = (props: {
  service: Service;
  category: ServiceCategory;
}) => React.ReactNode;

/**
 * Services with a fully bespoke page composition. The remaining slugs fall
 * back to the generic template below until their family redesign lands.
 */
const bespokePages: Record<string, BespokePage> = {
  "custom-software-development": CustomSoftwareDevelopmentPage,
  "website-development": WebsiteDevelopmentPage,
  "ecommerce-development": EcommerceDevelopmentPage,
  "mobile-app-development": MobileAppDevelopmentPage,
  "ai-machine-learning": AiMachineLearningPage,
  "ai-automation": AiAutomationPage,
  "data-engineering-analytics": DataEngineeringAnalyticsPage,
  "cloud-devops": CloudDevopsPage,
  "digital-marketing-seo": DigitalMarketingSeoPage,
  "ui-ux-design": UiUxDesignPage,
  "branding-identity": BrandingIdentityPage,
  "social-media-marketing": SocialMediaMarketingPage,
  "enterprise-solutions": EnterpriseSolutionsPage,
  "it-consulting": ItConsultingPage,
  "technology-maintenance": TechnologyMaintenancePage,
  "technical-support": TechnicalSupportPage,
};

export function generateStaticParams(): Params[] {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.description,
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  const category = getCategoryOf(slug);
  if (!service || !category) notFound();

  const Bespoke = bespokePages[service.slug];
  if (Bespoke) {
    return <Bespoke service={service} category={category} />;
  }

  const related = category.services.filter((s) => s.slug !== service.slug);
  const Icon = service.icon;

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-line">
        <div
          aria-hidden
          className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-line)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-line)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(ellipse_70%_70%_at_40%_30%,black,transparent)]"
        />
        <Container className="relative grid gap-12 pt-36 pb-16 md:pt-44 md:pb-20 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7">
            <Reveal>
              <nav aria-label="Breadcrumb" className="font-mono text-xs tracking-[0.1em] text-ink-soft uppercase">
                <ol className="flex flex-wrap items-center gap-2">
                  <li>
                    <Link href="/services" className="transition-colors hover:text-ink">
                      Services
                    </Link>
                  </li>
                  <li aria-hidden>/</li>
                  <li>
                    <Link
                      href={`/services#${category.key}`}
                      className="transition-colors hover:text-ink"
                    >
                      {category.title}
                    </Link>
                  </li>
                </ol>
              </nav>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="mt-6 font-display text-display-lg font-semibold text-ink">
                {service.title}
                <span className="text-terracotta">.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
                {service.intro}
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Button asChild size="lg">
                  <Link href="/contact">
                    Start a project
                    <ArrowUpRight aria-hidden />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/services">All services</Link>
                </Button>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.2} y={36} className="lg:col-span-5">
            <figure className="relative lg:mt-4">
              <div
                aria-hidden
                className="absolute -top-3 -left-3 size-6 border-t border-l border-cobalt/60"
              />
              <div
                aria-hidden
                className="absolute -right-3 -bottom-3 size-6 border-r border-b border-cobalt/60"
              />
              <div className="relative aspect-[4/3] overflow-hidden bg-cream">
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  fill
                  priority
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-ink/35 via-transparent to-transparent"
                />
                <span className="absolute bottom-4 left-4 flex size-10 items-center justify-center rounded-md border border-white/60 bg-white/85 text-ink backdrop-blur-sm">
                  <Icon aria-hidden className="size-5" strokeWidth={1.6} />
                </span>
              </div>
            </figure>
          </Reveal>
        </Container>
      </section>

      {/* What we deliver */}
      <section>
        <Container className="py-16 md:py-24">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-4">
              <Reveal>
                <p className="eyebrow text-cobalt">What we deliver</p>
                <h2 className="mt-4 font-display text-display-sm font-medium text-ink">
                  Scope we take off your plate.
                </h2>
              </Reveal>
            </div>
            <ul className="grid gap-x-8 sm:grid-cols-2 lg:col-span-8">
              {service.features.map((feature, i) => (
                <Reveal key={feature} delay={Math.min(i * 0.05, 0.25)}>
                  <li className="flex items-start gap-3 border-t border-line py-5">
                    <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full border border-cobalt/40 text-cobalt">
                      <Check aria-hidden className="size-3.5" strokeWidth={2.5} />
                    </span>
                    <span className="text-ink/90">{feature}</span>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* How we run it */}
      <section className="bg-white">
        <Container className="py-16 md:py-20">
          <Reveal>
            <p className="eyebrow text-cobalt">How we run it</p>
          </Reveal>
          <ol className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {processSteps.map((step, i) => (
              <Reveal key={step.index} delay={Math.min(i * 0.06, 0.3)}>
                <li className="border-t border-line pt-4">
                  <span className="font-mono text-xs text-cobalt">
                    {step.index}
                  </span>
                  <h3 className="mt-2 font-display text-lg font-medium text-ink">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                    {step.description}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>
        </Container>
      </section>

      {/* Related services */}
      <section>
        <Container className="py-16 md:py-20">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <Reveal>
              <p className="eyebrow text-terracotta">{category.title}</p>
              <h2 className="mt-4 font-display text-display-sm font-medium text-ink">
                Related services.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <Link
                href="/services"
                className="group inline-flex items-center gap-2 font-mono text-sm tracking-[0.1em] text-ink uppercase transition-colors hover:text-cobalt"
              >
                Full catalogue
                <ArrowRight
                  aria-hidden
                  className="size-4 transition-transform group-hover:translate-x-1"
                />
              </Link>
            </Reveal>
          </div>
          <div className="mt-10 grid gap-x-8 md:grid-cols-3">
            {related.map((item, i) => {
              const ItemIcon = item.icon;
              return (
                <Reveal key={item.slug} delay={Math.min(i * 0.06, 0.2)}>
                  <Link
                    href={item.href}
                    className="group flex h-full flex-col border-t border-line py-6"
                  >
                    <span className="flex size-10 items-center justify-center rounded-md border border-line text-ink-soft transition-colors duration-200 group-hover:border-cobalt/60 group-hover:text-cobalt">
                      <ItemIcon aria-hidden className="size-5" strokeWidth={1.6} />
                    </span>
                    <h3 className="mt-4 font-display text-lg font-medium text-ink transition-colors duration-200 group-hover:text-cobalt">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                      {item.menuDescription}
                    </p>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Inquiry CTA */}
      <section className="bg-cobalt">
        <Container className="flex flex-col gap-8 py-16 md:flex-row md:items-center md:justify-between md:py-20">
          <div>
            <h2 className="font-display text-display-sm font-medium text-white">
              Need {service.title.toLowerCase()}?
            </h2>
            <p className="mt-3 max-w-md leading-relaxed text-white/80">
              Tell us where you&apos;re headed and we&apos;ll map the
              engineering to get you there.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-5">
            <Button asChild size="lg" variant="inverse">
              <Link href="/contact">
                Start the conversation
                <ArrowUpRight aria-hidden />
              </Link>
            </Button>
            <a
              href={`mailto:${siteConfig.email}`}
              className="font-mono text-sm text-white/80 transition-colors hover:text-white"
            >
              {siteConfig.email}
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}
