import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";

/** The one saturated moment on the page: a cobalt inquiry panel. */
export function ContactCta() {
  return (
    <section id="contact" className="scroll-mt-20">
      <Container className="pb-20 lg:pb-28">
        <Reveal y={36}>
          <div className="relative overflow-hidden rounded-3xl bg-cobalt px-7 py-14 sm:px-12 lg:px-16 lg:py-20">
            {/* Purposeful corner accents */}
            <div
              aria-hidden
              className="absolute top-0 right-10 h-10 w-24 -skew-x-[24deg] bg-terracotta"
            />
            <div
              aria-hidden
              className="absolute -right-16 -bottom-20 size-64 rounded-full border border-line-light"
            />

            <div className="grid items-end gap-10 lg:grid-cols-[1.4fr_1fr]">
              <div>
                <p className="eyebrow text-white/70">Let&apos;s build together</p>
                <h2 className="mt-4 max-w-xl font-display text-display-lg font-medium text-white">
                  Have a project in&nbsp;mind?
                </h2>
                <p className="mt-5 max-w-md text-lg leading-relaxed text-white/80">
                  Tell us about your idea. We&apos;ll help you turn it into a
                  practical, scalable solution.
                </p>
              </div>

              <div className="flex flex-col items-start gap-5 lg:items-end">
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
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
