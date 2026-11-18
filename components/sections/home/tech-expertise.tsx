import Image from "next/image";

import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import { techLogos } from "@/lib/home";

/** White band: the tools we rely on, with accurate brand marks. */
export function TechExpertise() {
  return (
    <section id="technology" className="border-y border-line bg-white">
      <Container className="grid gap-10 py-16 md:py-20 lg:grid-cols-[0.9fr_2fr] lg:gap-16">
        <div>
          <Reveal>
            <p className="eyebrow text-terracotta">Technology</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-4 font-display text-display-sm font-medium text-ink">
              Tools we trust daily.
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-soft">
              Every mark here has shipped real products with us. We adopt new
              technology when it earns its place.
            </p>
          </Reveal>
        </div>

        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {techLogos.map((logo, i) => (
            <Reveal key={logo.name} delay={Math.min(i * 0.04, 0.3)}>
              <li className="flex items-center gap-3 rounded-lg border border-line px-4 py-3.5 transition-colors duration-200 hover:border-cobalt/40">
                <Image
                  src={logo.file}
                  alt=""
                  width={22}
                  height={22}
                  className="size-[22px] opacity-80"
                />
                <span className="text-sm font-medium text-ink">
                  {logo.name}
                </span>
              </li>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
