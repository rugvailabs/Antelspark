import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import { serviceCategories } from "@/lib/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Sixteen disciplines across development, AI, design and business solutions — engineered end to end by one team.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Page hero */}
      <section className="relative overflow-hidden border-b border-line">
        <div
          aria-hidden
          className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-line)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-line)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_30%,black,transparent)]"
        />
        <Container className="relative pt-36 pb-16 md:pt-44 md:pb-24">
          <Reveal>
            <p className="eyebrow text-cobalt">Services</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-5 max-w-3xl font-display text-display-lg font-semibold text-ink">
              Every discipline a digital business needs
              <span className="text-terracotta">.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
              Sixteen services, four disciplines, one accountable team — from
              first idea to long-term maintenance.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Catalogue */}
      {serviceCategories.map((category, categoryIndex) => (
        <section
          key={category.key}
          id={category.key}
          className={`scroll-mt-24 ${categoryIndex % 2 === 1 ? "bg-white" : ""}`}
        >
          <Container className="py-16 md:py-20">
            <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
              <div className="lg:col-span-4">
                <Reveal>
                  <p className="font-mono text-xs text-ink-soft">
                    {String(categoryIndex + 1).padStart(2, "0")}
                  </p>
                  <h2 className="mt-3 font-display text-display-sm font-medium text-ink">
                    {category.title}
                  </h2>
                  <p className="mt-3 max-w-sm leading-relaxed text-ink-soft">
                    {category.tagline}.
                  </p>
                </Reveal>
              </div>

              <div className="grid gap-x-8 sm:grid-cols-2 lg:col-span-8">
                {category.services.map((service, i) => {
                  const Icon = service.icon;
                  return (
                    <Reveal key={service.slug} delay={Math.min(i * 0.05, 0.2)}>
                      <Link
                        href={service.href}
                        className="group flex h-full flex-col border-t border-line py-6"
                      >
                        <span className="flex size-10 items-center justify-center rounded-md border border-line text-ink-soft transition-colors duration-200 group-hover:border-cobalt/60 group-hover:text-cobalt">
                          <Icon aria-hidden className="size-5" strokeWidth={1.6} />
                        </span>
                        <h3 className="mt-4 flex items-center gap-2 font-display text-xl font-medium text-ink transition-colors duration-200 group-hover:text-cobalt">
                          {service.title}
                          <ArrowUpRight
                            aria-hidden
                            className="size-4 opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:opacity-100"
                          />
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                          {service.description}
                        </p>
                      </Link>
                    </Reveal>
                  );
                })}
              </div>
            </div>
          </Container>
        </section>
      ))}
    </>
  );
}
