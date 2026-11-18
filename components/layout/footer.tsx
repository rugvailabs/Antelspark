import Link from "next/link";

import { Container } from "@/components/layout/container";
import { Logo } from "@/components/layout/logo";
import { serviceCategories } from "@/lib/services";
import { companyNav, industries, legalNav, siteConfig } from "@/lib/site";

function LinkList({ items }: { items: { title: string; href: string }[] }) {
  return (
    <ul className="mt-4 space-y-2.5">
      {items.map((item) => (
        <li key={item.href}>
          <Link
            href={item.href}
            className="text-sm text-ink-soft transition-colors duration-200 hover:text-ink"
          >
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}

function CategoryGroup({ categoryKeys }: { categoryKeys: string[] }) {
  return (
    <div className="space-y-8">
      {serviceCategories
        .filter((category) => categoryKeys.includes(category.key))
        .map((category) => (
          <div key={category.key}>
            <h3 className="eyebrow text-ink-faint">{category.title}</h3>
            <LinkList items={category.services} />
          </div>
        ))}
    </div>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-line bg-white">
      {/* Link columns */}
      <Container className="grid gap-12 py-14 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_0.9fr] lg:py-18">
        <div className="max-w-xs">
          <Logo />
          <p className="mt-5 text-sm leading-relaxed text-ink-soft">
            {siteConfig.tagline} Software, AI and digital solutions engineered
            for businesses that want to move faster.
          </p>
          <a
            href={`mailto:${siteConfig.email}`}
            className="mt-6 inline-block font-mono text-sm text-ink transition-colors hover:text-cobalt"
          >
            {siteConfig.email}
          </a>
        </div>

        <CategoryGroup categoryKeys={["development", "ai-technology"]} />
        <CategoryGroup categoryKeys={["digital-design", "business-solutions"]} />

        <div className="space-y-8">
          <div>
            <h3 className="eyebrow text-ink-faint">Company</h3>
            <LinkList items={companyNav} />
          </div>
          <div>
            <h3 className="eyebrow text-ink-faint">Industries</h3>
            <LinkList items={industries} />
          </div>
        </div>
      </Container>

      {/* Legal row */}
      <Container className="flex flex-col gap-4 border-t border-line py-6 text-xs text-ink-faint sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </p>
        <nav aria-label="Legal" className="flex gap-6">
          {legalNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-ink"
            >
              {item.title}
            </Link>
          ))}
        </nav>
      </Container>
    </footer>
  );
}
