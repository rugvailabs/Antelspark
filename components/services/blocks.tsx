import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import type { Service, ServiceCategory } from "@/lib/services";
import { siteConfig } from "@/lib/site";

/**
 * Small shared blocks for bespoke service pages. Each page composes its own
 * sections; these cover the pieces that genuinely should stay consistent.
 */

export function ServiceBreadcrumb({
  category,
}: {
  category: ServiceCategory;
}) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="font-mono text-xs tracking-[0.1em] text-ink-soft uppercase"
    >
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
  );
}

/** Compact two-column deliverables checklist with an optional tool strip. */
export function DeliverablesStrip({
  service,
  tools,
  heading = "What you get",
}: {
  service: Service;
  tools?: string[];
  heading?: string;
}) {
  return (
    <section className="border-t border-line">
      <Container className="grid gap-10 py-14 md:py-18 lg:grid-cols-[0.9fr_2fr]">
        <Reveal>
          <p className="eyebrow text-terracotta">{heading}</p>
          <h2 className="mt-4 font-display text-display-sm font-medium text-ink">
            Deliverables, not decks.
          </h2>
        </Reveal>
        <div>
          <ul className="grid gap-x-10 gap-y-3 sm:grid-cols-2">
            {service.features.map((feature, i) => (
              <Reveal key={feature} delay={Math.min(i * 0.04, 0.2)}>
                <li className="flex items-start gap-3 py-1.5">
                  <span className="mt-1 flex size-5 shrink-0 items-center justify-center rounded-full bg-cobalt-wash text-cobalt">
                    <Check aria-hidden className="size-3" strokeWidth={3} />
                  </span>
                  <span className="text-ink/90">{feature}</span>
                </li>
              </Reveal>
            ))}
          </ul>
          {tools && tools.length > 0 && (
            <Reveal delay={0.15}>
              <div className="mt-8 flex flex-wrap items-center gap-2 border-t border-line pt-6">
                <span className="mr-2 font-mono text-[0.65rem] tracking-[0.14em] text-ink-faint uppercase">
                  Daily tools
                </span>
                {tools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full border border-line px-3 py-1 font-mono text-xs text-ink-soft"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </Reveal>
          )}
        </div>
      </Container>
    </section>
  );
}

/** Slim related-services strip — links, not cards. */
export function RelatedStrip({
  category,
  currentSlug,
}: {
  category: ServiceCategory;
  currentSlug: string;
}) {
  const related = category.services.filter((s) => s.slug !== currentSlug);
  return (
    <section className="border-t border-line bg-white">
      <Container className="flex flex-col gap-5 py-10 md:flex-row md:items-center md:justify-between">
        <p className="eyebrow text-ink-faint">
          More in {category.title}
        </p>
        <ul className="flex flex-wrap gap-x-8 gap-y-3">
          {related.map((item) => (
            <li key={item.slug}>
              <Link
                href={item.href}
                className="group inline-flex items-center gap-1.5 text-sm font-medium text-ink transition-colors hover:text-cobalt"
              >
                {item.title}
                <ArrowRight
                  aria-hidden
                  className="size-3.5 transition-transform group-hover:translate-x-0.5"
                />
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

/** Cobalt closing band with page-specific copy. */
export function ServiceCta({
  heading,
  copy,
}: {
  heading: string;
  copy: string;
}) {
  return (
    <section className="bg-cobalt">
      <Container className="flex flex-col gap-8 py-16 md:flex-row md:items-center md:justify-between md:py-20">
        <div>
          <h2 className="max-w-xl font-display text-display-sm font-medium text-white">
            {heading}
          </h2>
          <p className="mt-3 max-w-md leading-relaxed text-white/80">{copy}</p>
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
  );
}
