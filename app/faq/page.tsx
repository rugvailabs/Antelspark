import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Plus } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Straight answers about how Antelspark works — process, pricing approach, ownership, support and getting started.",
};

const faqs = [
  {
    q: "How does a project start?",
    a: "With a conversation, not a contract. Tell us what you're trying to achieve; we'll ask questions, tell you honestly whether we're the right fit, and follow up with a written scope and plan. If the answer is \"you don't need us for this\", we'll say that too.",
  },
  {
    q: "How do you price work?",
    a: "Clearly defined projects get a fixed scope and price; evolving products work better on a monthly engagement. Either way, you see what things cost before we start, and changes are agreed — never discovered on an invoice.",
  },
  {
    q: "How long does a typical project take?",
    a: "It depends entirely on scope, so we won't quote fantasy numbers here. What we can promise: you'll see working software early and progress every week — we don't disappear for months and return with a reveal.",
  },
  {
    q: "Who owns the code and designs?",
    a: "You do. Source code, design files, accounts and documentation are yours, held in repositories you can access from day one. No lock-in by obscurity.",
  },
  {
    q: "Can you take over an existing system another team built?",
    a: "Yes — a good portion of our work is inherited systems. We start with an audit so everyone knows the actual state of things, then stabilise before we improve.",
  },
  {
    q: "What happens after launch?",
    a: "Whatever you choose: hand-off with documentation, a maintenance retainer, or continued product development. Most clients stay for stewardship — software needs tending — but it's never obligatory.",
  },
  {
    q: "Which technologies do you use?",
    a: "Modern, boring-on-purpose tools with real communities — React, Next.js, Node, Python, PostgreSQL, the major clouds, and the AI stack where it genuinely helps. Each service page lists its toolchain; choices are always justified against your problem.",
  },
  {
    q: "Do you work with clients remotely?",
    a: "Yes. We collaborate async-first with regular calls, shared boards and demos you can click — wherever you are.",
  },
];

export default function FaqPage() {
  return (
    <>
      <section className="border-b border-line">
        <Container className="pt-32 pb-14 md:pt-40">
          <Reveal>
            <p className="eyebrow text-cobalt">FAQ</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-5 max-w-3xl font-display text-display-lg font-semibold text-ink">
              Straight answers
              <span className="text-terracotta">.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
              The questions we hear most, answered the way we&apos;d answer
              them on a call.
            </p>
          </Reveal>
        </Container>
      </section>

      <section>
        <Container className="grid gap-12 py-16 md:py-20 lg:grid-cols-[2fr_1fr] lg:gap-20">
          <div>
            {faqs.map((faq, i) => (
              <Reveal key={faq.q} delay={Math.min(i * 0.04, 0.2)}>
                <details className="group border-t border-line last:border-b">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 [&::-webkit-details-marker]:hidden">
                    <h2 className="font-display text-lg font-medium text-ink transition-colors group-hover:text-cobalt sm:text-xl">
                      {faq.q}
                    </h2>
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-full border border-line text-ink-soft transition-all duration-200 group-open:rotate-45 group-open:border-cobalt group-open:text-cobalt">
                      <Plus aria-hidden className="size-4" strokeWidth={2} />
                    </span>
                  </summary>
                  <p className="max-w-2xl pb-6 leading-relaxed text-ink-soft">
                    {faq.a}
                  </p>
                </details>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.15}>
            <aside className="h-fit rounded-3xl bg-cobalt-wash/70 p-8 lg:sticky lg:top-28">
              <h2 className="font-display text-xl font-medium text-ink">
                Didn&apos;t find your question?
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                Ask it directly — a real person reads every message.
              </p>
              <Button asChild className="mt-6 w-full">
                <Link href="/contact">
                  Ask us anything
                  <ArrowUpRight aria-hidden />
                </Link>
              </Button>
            </aside>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
