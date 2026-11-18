import type { Metadata } from "next";
import Image from "next/image";
import {
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Users,
  Zap,
  type LucideIcon,
} from "lucide-react";

import { ContactForm } from "@/components/contact/contact-form";
import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import { SummitCta } from "@/components/services/dev/ui";
import { siteConfig, socialLinks } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Have an idea, a requirement or a challenge? Tell us about it — we'll listen, plan and build the right solution.",
};

const assurances: { icon: LucideIcon; label: string }[] = [
  { icon: Zap, label: "Quick response" },
  { icon: Users, label: "Expert team" },
  { icon: ShieldCheck, label: "Confidential & secure" },
];

const details = [
  { icon: Mail, label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
  { icon: Phone, label: "Phone", value: siteConfig.phone, href: `tel:${siteConfig.phone.replace(/\s/g, "")}` },
  { icon: MapPin, label: "Office", value: siteConfig.address },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="overflow-hidden border-b border-line">
        <Container className="grid items-center gap-12 pt-32 pb-14 md:pt-40 lg:grid-cols-[1fr_1.05fr]">
          <div>
            <Reveal>
              <p className="eyebrow text-cobalt">Contact us</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="mt-5 font-display text-display-lg font-semibold text-ink">
                Let&apos;s talk about your next project
                <span className="text-terracotta">.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-ink-soft">
                Have an idea, a requirement or a challenge? We&apos;re here to
                listen, plan and build the right solution for your business.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <div className="mt-10 grid max-w-md grid-cols-3 divide-x divide-line border-t border-line pt-6">
                {assurances.map(({ icon: Icon, label }) => (
                  <div key={label} className="px-3 text-center first:pl-0 last:pr-0">
                    <Icon aria-hidden className="mx-auto size-6 text-cobalt" strokeWidth={1.7} />
                    <p className="mt-2 text-xs leading-snug font-medium text-ink">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.18} y={36}>
            <div className="relative aspect-[16/11] overflow-hidden rounded-b-[2rem] rounded-t-[7rem]">
              <Image
                src="/images/company/business-partnership.jpg"
                alt="Two colleagues in conversation at a bright office table"
                fill
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Details + form */}
      <section>
        <Container className="grid gap-14 py-16 md:py-20 lg:grid-cols-[0.85fr_1.35fr] lg:gap-16">
          <div>
            <Reveal>
              <h2 className="font-display text-display-md font-medium text-ink">
                Get in touch
              </h2>
            </Reveal>
            <div className="mt-8">
              {details.map(({ icon: Icon, label, value, href }, i) => (
                <Reveal key={label} delay={0.06 + i * 0.06}>
                  <div className="flex items-start gap-4 border-b border-line py-5 first:border-t">
                    <span className="mt-0.5 flex size-11 shrink-0 items-center justify-center rounded-xl bg-cobalt-wash text-cobalt">
                      <Icon aria-hidden className="size-5" strokeWidth={1.7} />
                    </span>
                    <div>
                      <h3 className="font-semibold text-ink">{label}</h3>
                      {href ? (
                        <a
                          href={href}
                          className="mt-0.5 block text-sm leading-relaxed text-ink-soft transition-colors hover:text-cobalt"
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="mt-0.5 max-w-60 text-sm leading-relaxed text-ink-soft">
                          {value}
                        </p>
                      )}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.25}>
              <h3 className="mt-9 font-display text-lg font-medium text-ink">
                Follow us
              </h3>
              <ul className="mt-4 flex gap-3">
                {socialLinks.map((social) => (
                  <li key={social.name}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-11 items-center rounded-full border border-line bg-white px-4 text-sm font-medium text-ink transition-colors hover:border-cobalt hover:text-cobalt"
                    >
                      {social.name}
                    </a>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal delay={0.12} y={32}>
            <div className="rounded-3xl bg-cobalt-wash/70 p-7 sm:p-10">
              <h2 className="font-display text-display-sm font-medium text-ink">
                Send us a message
              </h2>
              <div className="mt-7">
                <ContactForm />
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <SummitCta
        eyebrow="Ready to get started?"
        heading="Let's build something meaningful together."
        copy="One conversation is all it takes to find out whether we're the right team for it."
      />
    </>
  );
}
