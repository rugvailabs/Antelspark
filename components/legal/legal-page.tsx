import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";

/** Shared prose layout for legal pages. */
export function LegalPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <section className="border-b border-line">
        <Container className="pt-32 pb-12 md:pt-40">
          <Reveal>
            <p className="eyebrow text-cobalt">Legal</p>
            <h1 className="mt-5 font-display text-display-lg font-semibold text-ink">
              {title}
              <span className="text-terracotta">.</span>
            </h1>
            <p className="mt-4 font-mono text-xs tracking-[0.1em] text-ink-faint uppercase">
              Last updated — {updated}
            </p>
          </Reveal>
        </Container>
      </section>
      <section>
        <Container className="py-14 md:py-18">
          <div className="max-w-3xl space-y-10 [&_h2]:font-display [&_h2]:text-2xl [&_h2]:font-medium [&_h2]:text-ink [&_li]:leading-relaxed [&_li]:text-ink-soft [&_p]:leading-relaxed [&_p]:text-ink-soft [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5">
            {children}
          </div>
        </Container>
      </section>
    </>
  );
}
