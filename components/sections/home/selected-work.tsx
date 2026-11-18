import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import { projects } from "@/lib/home";

function ProjectCard({
  project,
  aspect,
}: {
  project: (typeof projects)[number];
  aspect: string;
}) {
  return (
    <Link href="/work" className="group block">
      <div
        className={`relative overflow-hidden rounded-2xl bg-cream ${aspect}`}
      >
        <Image
          src={project.image}
          alt={project.imageAlt}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
        />
      </div>
      {/* Overlapping caption card */}
      <div className="relative z-10 -mt-10 ml-5 mr-5 flex items-center justify-between gap-4 rounded-xl bg-white p-5 shadow-[0_16px_40px_-20px_rgb(32_36_44_/_0.25)] sm:mr-10">
        <div>
          <h3 className="font-display text-xl font-medium text-ink transition-colors group-hover:text-cobalt">
            {project.name}
          </h3>
          <p className="mt-1 font-mono text-[0.68rem] tracking-[0.12em] text-terracotta uppercase">
            {project.category}
          </p>
          <p className="mt-2 text-sm leading-relaxed text-ink-soft">
            {project.description}
          </p>
        </div>
        <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-line text-ink-soft transition-all duration-200 group-hover:border-cobalt group-hover:text-cobalt">
          <ArrowUpRight aria-hidden className="size-4" />
        </span>
      </div>
    </Link>
  );
}

/** Cream band: genuine studio projects, asymmetrically composed. */
export function SelectedWork() {
  return (
    <section id="work" className="scroll-mt-20 border-y border-line bg-cream/55">
      <Container className="section-pad">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <Reveal>
              <p className="eyebrow text-terracotta">Selected work</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-4 font-display text-display-lg font-medium text-ink">
                Products we&apos;ve engineered.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.16}>
            <Link
              href="/work"
              className="group inline-flex items-center gap-2 font-mono text-sm tracking-[0.1em] text-ink uppercase transition-colors hover:text-cobalt"
            >
              View all work
              <ArrowRight
                aria-hidden
                className="size-4 transition-transform group-hover:translate-x-1"
              />
            </Link>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-12 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-7" y={36}>
            <ProjectCard project={projects[0]} aspect="aspect-[4/3]" />
          </Reveal>
          <Reveal className="lg:col-span-5 lg:mt-20" y={36} delay={0.1}>
            <ProjectCard project={projects[1]} aspect="aspect-[4/3] lg:aspect-[4/4.6]" />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
