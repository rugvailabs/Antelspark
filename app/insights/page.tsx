import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, PenLine } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Notes on engineering, AI and digital products from the Antelspark team — first pieces in the works.",
};

const upcoming = [
  {
    tag: "AI",
    title: "From demo to dependable: what production AI actually takes",
  },
  {
    tag: "Commerce",
    title: "B2B buying is different — lessons from building wholesale commerce",
  },
  {
    tag: "Engineering",
    title: "Boring deploys: why the best release day is a non-event",
  },
  {
    tag: "Design",
    title: "Design systems that survive handoff",
  },
];

export default function InsightsPage() {
  return (
    <>
      <section className="border-b border-line">
        <Container className="pt-32 pb-14 md:pt-40">
          <Reveal>
            <p className="eyebrow text-cobalt">Insights</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-5 max-w-3xl font-display text-display-lg font-semibold text-ink">
              Writing things down, properly
              <span className="text-terracotta">.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
              We publish when we have something worth your time — no filler,
              no AI-padded listicles. The first pieces are being written now;
              here&apos;s what&apos;s on the desk.
            </p>
          </Reveal>
        </Container>
      </section>

      <section>
        <Container className="py-16 md:py-20">
          <Reveal>
            <p className="eyebrow text-terracotta">In the works</p>
          </Reveal>
          <div className="mt-8 max-w-3xl">
            {upcoming.map((piece, i) => (
              <Reveal key={piece.title} delay={Math.min(i * 0.06, 0.25)}>
                <article className="flex items-baseline gap-5 border-t border-line py-5 last:border-b">
                  <span className="shrink-0 rounded-full border border-line bg-white px-3 py-1 font-mono text-[0.65rem] tracking-wide text-ink-soft uppercase">
                    {piece.tag}
                  </span>
                  <h2 className="font-display text-lg font-medium text-ink sm:text-xl">
                    {piece.title}
                  </h2>
                  <span className="ml-auto hidden shrink-0 font-mono text-[0.65rem] text-ink-faint sm:block">
                    coming soon
                  </span>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.3}>
            <div className="mt-12 flex flex-col items-start gap-5 rounded-3xl bg-cobalt-wash/70 p-8 sm:flex-row sm:items-center sm:justify-between sm:p-10">
              <div className="flex items-start gap-4">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-white text-cobalt shadow-sm">
                  <PenLine aria-hidden className="size-5" strokeWidth={1.7} />
                </span>
                <div>
                  <h2 className="font-display text-xl font-medium text-ink">
                    Want a topic covered?
                  </h2>
                  <p className="mt-1 max-w-md text-sm leading-relaxed text-ink-soft">
                    Tell us what you&apos;re wrestling with — the best pieces
                    start as someone&apos;s real question.
                  </p>
                </div>
              </div>
              <Button asChild>
                <Link href="/contact">
                  Suggest a topic
                  <ArrowUpRight aria-hidden />
                </Link>
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
