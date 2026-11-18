import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import { capabilities } from "@/lib/home";

/** White band: the four engineering capabilities in an editorial row. */
export function Capabilities() {
  return (
    <section id="capabilities" className="border-y border-line bg-white">
      <Container className="grid gap-10 py-16 md:py-20 lg:grid-cols-[0.9fr_2fr] lg:gap-16">
        <div>
          <Reveal>
            <p className="eyebrow text-terracotta">Our capabilities</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-4 font-display text-display-sm font-medium text-ink">
              Technology,
              <br />
              end to end.
            </h2>
          </Reveal>
        </div>

        <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((capability, i) => (
            <Reveal key={capability.index} delay={Math.min(i * 0.07, 0.3)}>
              <div className="h-full border-t-2 border-line pt-5 lg:border-t-0 lg:border-l lg:pt-1 lg:pl-6 lg:first:border-l-0 lg:first:pl-0">
                <span className="font-mono text-xs text-cobalt">
                  {capability.index}
                </span>
                <h3 className="mt-3 font-display text-lg font-medium text-ink">
                  {capability.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  {capability.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
