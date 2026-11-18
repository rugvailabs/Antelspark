import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import { featuredServiceSlugs } from "@/lib/home";
import { getService } from "@/lib/services";

/** Ivory section: the nine core services as a typographic index. */
export function ServicesIndex() {
  const featured = featuredServiceSlugs
    .map((slug) => getService(slug))
    .filter((service) => service !== undefined);

  return (
    <section id="services" className="scroll-mt-20">
      <Container className="section-pad grid gap-14 lg:grid-cols-12 lg:gap-8">
        {/* Sticky intro column */}
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <Reveal>
              <p className="eyebrow text-terracotta">Our services</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-5 font-display text-display-md font-medium text-ink">
                End-to-end digital engineering.
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-6 max-w-sm leading-relaxed text-ink-soft">
                From idea to scale — nine disciplines that cover everything a
                modern business needs to design, build and run digital
                products.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <Link
                href="/services"
                className="group mt-8 inline-flex items-center gap-2 font-mono text-sm tracking-[0.1em] text-ink uppercase transition-colors hover:text-cobalt"
              >
                View all services
                <ArrowRight
                  aria-hidden
                  className="size-4 transition-transform group-hover:translate-x-1"
                />
              </Link>
            </Reveal>
          </div>
        </div>

        {/* Service rows */}
        <ul className="lg:col-span-8">
          {featured.map((service, i) => (
            <Reveal key={service.slug}>
              <li className="border-t border-line last:border-b">
                <Link
                  href={service.href}
                  className="group grid grid-cols-[2rem_3.5rem_1fr_auto] items-center gap-4 py-5 md:gap-6"
                >
                  <span className="font-mono text-xs text-ink-faint transition-colors group-hover:text-cobalt">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="relative size-14 overflow-hidden rounded-lg bg-cream">
                    <Image
                      src={service.image}
                      alt=""
                      fill
                      sizes="56px"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </span>
                  <span>
                    <h3 className="font-display text-lg font-medium text-ink transition-colors duration-200 group-hover:text-cobalt md:text-xl">
                      {service.title}
                    </h3>
                    <p className="mt-0.5 hidden text-sm leading-relaxed text-ink-soft sm:block">
                      {service.menuDescription}
                    </p>
                  </span>
                  <span className="flex size-9 items-center justify-center rounded-full border border-line text-ink-soft transition-all duration-200 group-hover:border-cobalt group-hover:text-cobalt">
                    <ArrowUpRight
                      aria-hidden
                      className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </span>
                </Link>
              </li>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
