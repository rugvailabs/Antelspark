import {
  BrainCircuit,
  Building2,
  CloudCog,
  CodeXml,
  Compass,
  Database,
  Globe,
  Headphones,
  Palette,
  PenTool,
  Share2,
  ShoppingCart,
  Smartphone,
  TrendingUp,
  Workflow,
  Wrench,
  type LucideIcon,
} from "lucide-react";

/**
 * Central service catalogue — the single source of truth for the mega menu,
 * footer, homepage, /services overview and every service detail page.
 */

export type Service = {
  slug: string;
  title: string;
  href: string;
  icon: LucideIcon;
  /** One-liner for the mega menu. */
  menuDescription: string;
  /** Short paragraph for cards and list rows. */
  description: string;
  /** Lead paragraph on the detail page. */
  intro: string;
  /** "What we deliver" bullets on the detail page. */
  features: string[];
  image: string;
  imageAlt: string;
};

export type ServiceCategory = {
  key: string;
  title: string;
  tagline: string;
  services: Service[];
};

const service = (
  slug: string,
  entry: Omit<Service, "slug" | "href">,
): Service => ({ slug, href: `/services/${slug}`, ...entry });

export const serviceCategories: ServiceCategory[] = [
  {
    key: "development",
    title: "Development",
    tagline: "Products engineered end to end",
    services: [
      service("custom-software-development", {
        title: "Custom Software Development",
        icon: CodeXml,
        menuDescription: "Bespoke platforms and internal tools",
        description:
          "Bespoke platforms, internal tools and integrations built around how your business actually works.",
        intro:
          "Off-the-shelf software forces your business to bend around someone else's assumptions. We design and build systems around your real workflows — then keep them evolving as the business does.",
        features: [
          "Web application & platform development",
          "Internal tools and admin systems",
          "Third-party API & systems integration",
          "Legacy application modernisation",
          "Architecture, code review & rescue work",
        ],
        image: "/images/services/custom-software-development.jpg",
        imageAlt: "Source code in an editor on a dark screen",
      }),
      service("website-development", {
        title: "Website Development",
        icon: Globe,
        menuDescription: "Fast, search-friendly sites that convert",
        description:
          "Fast, search-friendly marketing sites and web platforms with content your teams can manage.",
        intro:
          "Your website is the first engineer-grade product most customers meet. We build sites that load instantly, rank well and give your team full control of the content.",
        features: [
          "Marketing & corporate websites",
          "Content management (headless or classic CMS)",
          "Performance & Core Web Vitals optimisation",
          "Technical SEO foundations",
          "Accessibility & multi-language support",
        ],
        image: "/images/services/website-development.jpg",
        imageAlt: "A website design in progress across two monitors",
      }),
      service("ecommerce-development", {
        title: "E-commerce Development",
        icon: ShoppingCart,
        menuDescription: "Storefronts engineered for conversion",
        description:
          "Storefronts, checkout flows and headless commerce engineered for conversion and scale.",
        intro:
          "Commerce punishes slow and clunky. We engineer storefronts and checkouts that stay fast under load, convert on mobile and plug cleanly into your inventory, payments and logistics.",
        features: [
          "Headless storefronts & Shopify builds",
          "Checkout, payments & subscription flows",
          "Product catalogue & inventory integration",
          "Performance tuning for conversion",
          "Analytics, A/B testing & growth tooling",
        ],
        image: "/images/services/ecommerce-development.jpg",
        imageAlt: "Shopper paying by card on a laptop",
      }),
      service("mobile-app-development", {
        title: "Mobile App Development",
        icon: Smartphone,
        menuDescription: "iOS & Android, prototype to release",
        description:
          "Native and cross-platform apps for iOS and Android, from prototype to app-store release.",
        intro:
          "One codebase or fully native — we choose the approach that fits your product and budget, then carry it from first prototype through app-store review and beyond.",
        features: [
          "React Native & Flutter cross-platform apps",
          "Native iOS (Swift) & Android (Kotlin)",
          "Offline-first sync & push notifications",
          "App-store submission & release management",
          "Ongoing updates & crash monitoring",
        ],
        image: "/images/services/mobile-app-development.jpg",
        imageAlt: "Smartphone home screen filled with apps",
      }),
    ],
  },
  {
    key: "ai-technology",
    title: "AI & Technology",
    tagline: "Intelligence built into your systems",
    services: [
      service("ai-machine-learning", {
        title: "AI & Machine Learning",
        icon: BrainCircuit,
        menuDescription: "LLM apps and ML that ship to production",
        description:
          "LLM applications, intelligent features and ML pipelines that turn data into product.",
        intro:
          "We take AI from demo to dependable: LLM-powered features, retrieval pipelines and machine-learning models integrated into real products with evaluation, guardrails and monitoring.",
        features: [
          "LLM application development & RAG pipelines",
          "Custom model training & fine-tuning",
          "AI feature integration in existing products",
          "Evaluation, guardrails & safety tooling",
          "MLOps: deployment, monitoring, iteration",
        ],
        image: "/images/services/ai-machine-learning.jpg",
        imageAlt: "Three-dimensional AI lettering in blue tones",
      }),
      service("ai-automation", {
        title: "AI Automation",
        icon: Workflow,
        menuDescription: "Agents and workflows that remove busywork",
        description:
          "Agent workflows and intelligent automation that remove manual steps from your operations.",
        intro:
          "The fastest ROI in AI is usually automation: documents processed, tickets triaged, data moved between systems — reliably, with humans in the loop where it matters.",
        features: [
          "AI agent & copilot development",
          "Document processing & extraction",
          "Workflow automation across your tools",
          "Human-in-the-loop review systems",
          "Automation analytics & audit trails",
        ],
        image: "/images/services/ai-automation.jpg",
        imageAlt: "Humanoid robot assistant in an office lobby",
      }),
      service("data-engineering-analytics", {
        title: "Data Engineering & Analytics",
        icon: Database,
        menuDescription: "Pipelines, warehouses and dashboards",
        description:
          "Pipelines, warehouses and dashboards that make your data trustworthy and usable.",
        intro:
          "Decisions are only as good as the data underneath them. We build the pipelines, models and dashboards that turn scattered sources into numbers your team can trust.",
        features: [
          "Data pipelines & ETL/ELT engineering",
          "Warehouse & lakehouse architecture",
          "Analytics dashboards & reporting",
          "Data quality, lineage & governance",
          "Event tracking & product analytics",
        ],
        image: "/images/services/data-engineering-analytics.jpg",
        imageAlt: "Performance analytics dashboard on a laptop",
      }),
      service("cloud-devops", {
        title: "Cloud & DevOps",
        icon: CloudCog,
        menuDescription: "Infrastructure that stays fast and online",
        description:
          "Cloud architecture, CI/CD and reliability engineering that keep systems fast and online.",
        intro:
          "We design cloud infrastructure that scales without surprises — automated deployments, observability and costs you can actually predict.",
        features: [
          "Cloud architecture on AWS, Azure & GCP",
          "CI/CD pipelines & infrastructure as code",
          "Containerisation & Kubernetes",
          "Monitoring, alerting & incident response",
          "Cost optimisation & security hardening",
        ],
        image: "/images/services/cloud-devops.jpg",
        imageAlt: "Network patch panel with connected cables",
      }),
    ],
  },
  {
    key: "digital-design",
    title: "Digital & Design",
    tagline: "Design and growth that compound",
    services: [
      service("digital-marketing-seo", {
        title: "Digital Marketing & SEO",
        icon: TrendingUp,
        menuDescription: "Technical SEO and campaigns that compound",
        description:
          "Technical SEO, analytics and campaigns that compound the value of what we build.",
        intro:
          "Engineering and marketing work best as one loop: a fast site, clean tracking, and campaigns tuned by real data. We run that loop end to end.",
        features: [
          "Technical & on-page SEO",
          "Analytics, tagging & attribution setup",
          "Search & paid campaign management",
          "Conversion-rate optimisation",
          "Content strategy & reporting",
        ],
        image: "/images/services/digital-marketing-seo.jpg",
        imageAlt: "Marketing analytics dashboard on a laptop",
      }),
      service("ui-ux-design", {
        title: "UI/UX Design",
        icon: PenTool,
        menuDescription: "Research-led product design",
        description:
          "Research-led product design and design systems that make complex software feel simple.",
        intro:
          "Good design is engineering for humans. We research, prototype and test until the interface disappears and the task feels obvious.",
        features: [
          "UX research, flows & information architecture",
          "Wireframes & high-fidelity UI design",
          "Interactive prototyping & user testing",
          "Design systems & component libraries",
          "Developer handoff & design QA",
        ],
        image: "/images/services/ui-ux-design.jpg",
        imageAlt: "Hand sketching UX wireframes labelled user goals",
      }),
      service("branding-identity", {
        title: "Branding & Identity",
        icon: Palette,
        menuDescription: "Identities that feel inevitable",
        description:
          "Brand strategy, visual identity and guidelines that make your company unmistakable.",
        intro:
          "A brand is a promise repeated consistently. We build identities — logo, type, colour, voice — with systems that keep every touchpoint on-message.",
        features: [
          "Brand strategy & positioning",
          "Logo & visual identity design",
          "Brand guidelines & asset libraries",
          "Marketing & sales collateral",
          "Rebrand rollout support",
        ],
        image: "/images/services/branding-identity.jpg",
        imageAlt: "Designer reviewing icon sheets and a print portfolio",
      }),
      service("social-media-marketing", {
        title: "Social Media Marketing",
        icon: Share2,
        menuDescription: "Presence, content and paid social",
        description:
          "Channel strategy, content production and paid social that build a real audience.",
        intro:
          "Social works when it's consistent and measured. We plan the channels worth your time, produce the content, and tie results back to numbers that matter.",
        features: [
          "Channel strategy & content calendars",
          "Creative production for social formats",
          "Paid social campaign management",
          "Community management playbooks",
          "Performance reporting & iteration",
        ],
        image: "/images/services/social-media-marketing.jpg",
        imageAlt: "Three-dimensional social media platform icons",
      }),
    ],
  },
  {
    key: "business-solutions",
    title: "Business Solutions",
    tagline: "Technology run as a partnership",
    services: [
      service("enterprise-solutions", {
        title: "Enterprise Solutions",
        icon: Building2,
        menuDescription: "Modernisation across complex estates",
        description:
          "Modernisation, integration and custom systems for complex, regulated organisations.",
        intro:
          "Enterprises rarely need more software — they need their systems to work together. We modernise legacy estates and integrate the tools your teams already rely on.",
        features: [
          "Legacy system modernisation",
          "Enterprise integration & middleware",
          "Identity, SSO & access management",
          "Compliance-aware architecture",
          "Phased migration planning & delivery",
        ],
        image: "/images/services/enterprise-solutions.jpg",
        imageAlt: "Glass office towers from street level",
      }),
      service("it-consulting", {
        title: "IT Consulting",
        icon: Compass,
        menuDescription: "Audits, roadmaps and honest advice",
        description:
          "Technology audits, roadmaps and architecture advice you can hold us to.",
        intro:
          "Sometimes the most valuable engineering happens before any code: choosing the right stack, scoping the right MVP, or finding out why delivery keeps slipping.",
        features: [
          "Technology & architecture audits",
          "Product & platform roadmaps",
          "Vendor and build-vs-buy evaluation",
          "Team process & delivery coaching",
          "Due diligence for investors & acquirers",
        ],
        image: "/images/services/it-consulting.jpg",
        imageAlt: "Team planning with sticky notes on a wall",
      }),
      service("technology-maintenance", {
        title: "Technology Maintenance",
        icon: Wrench,
        menuDescription: "Long-term stewardship of your systems",
        description:
          "Proactive upkeep — updates, security patches and improvements that keep software excellent.",
        intro:
          "Software doesn't stay finished. We take long-term ownership of the systems your business runs on: dependencies updated, security patched, small improvements shipped continuously.",
        features: [
          "Maintenance retainers & SLAs",
          "Dependency & security updates",
          "Bug fixing & small enhancements",
          "Performance & uptime monitoring",
          "Documentation & knowledge transfer",
        ],
        image: "/images/services/technology-maintenance.jpg",
        imageAlt: "Engineer working through technical schematics with tools",
      }),
      service("technical-support", {
        title: "Technical Support",
        icon: Headphones,
        menuDescription: "Responsive help when things break",
        description:
          "Responsive incident response and user support for the software we build and beyond.",
        intro:
          "When something breaks, you need a human who knows your system. Our support covers triage, incident response and clear communication until it's resolved.",
        features: [
          "Incident triage & response",
          "User support & troubleshooting",
          "Environment & deployment assistance",
          "Root-cause analysis & postmortems",
          "Support handbooks for your team",
        ],
        image: "/images/services/technical-support.jpg",
        imageAlt: "Office desk with laptop and desk phone",
      }),
    ],
  },
];

/** Flat list of all services in catalogue order. */
export const services: Service[] = serviceCategories.flatMap(
  (category) => category.services,
);

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getCategoryOf(slug: string): ServiceCategory | undefined {
  return serviceCategories.find((c) =>
    c.services.some((s) => s.slug === slug),
  );
}
