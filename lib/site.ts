/**
 * Central site configuration â€” single source of truth for navigation,
 * services, industries and company details used across the site.
 */

export const siteConfig = {
  name: "Antelspark",
  tagline: "We Engineer What's Next.",
  description:
    "Antelspark is a technology company engineering software, AI, cloud and digital solutions for businesses that want to move faster.",
  // TODO: replace with the real production domain and contact email before launch.
  url: "https://www.antelspark.com",
  email: "hello@antelspark.com",
  // TODO: placeholder contact details from the design reference — replace with real ones.
  phone: "+91 98765 43210",
  address: "Plot No. 42, 2nd Floor, Green Park, Madhapur, Hyderabad – 500081, India",
};

/** TODO: point these at the real profiles before launch. */
export const socialLinks = [
  { name: "LinkedIn", href: "https://www.linkedin.com" },
  { name: "X", href: "https://x.com" },
  { name: "YouTube", href: "https://www.youtube.com" },
  { name: "Instagram", href: "https://www.instagram.com" },
];

export type NavItem = {
  title: string;
  href: string;
};

export const industries: NavItem[] = [
  { title: "Startups", href: "/industries#startups" },
  { title: "SMEs", href: "/industries#smes" },
  { title: "Enterprises", href: "/industries#enterprises" },
  { title: "Education", href: "/industries#education" },
  { title: "E-commerce", href: "/industries#ecommerce" },
  { title: "Other Sectors", href: "/industries#other-sectors" },
];

/** Primary navigation shown in the header. */
export const mainNav: NavItem[] = [
  { title: "Services", href: "/services" },
  { title: "Industries", href: "/industries" },
  { title: "Work", href: "/work" },
  { title: "About", href: "/about" },
  { title: "Insights", href: "/insights" },
];

/** Full navigation for the mobile overlay menu. */
export const mobileNav: NavItem[] = [
  { title: "Services", href: "/services" },
  { title: "Industries", href: "/industries" },
  { title: "Work", href: "/work" },
  { title: "About", href: "/about" },
  { title: "Insights", href: "/insights" },
  { title: "Careers", href: "/careers" },
  { title: "Contact", href: "/contact" },
];

/** Secondary company links, used in the footer. */
export const companyNav: NavItem[] = [
  { title: "About", href: "/about" },
  { title: "Work", href: "/work" },
  { title: "Careers", href: "/careers" },
  { title: "Insights", href: "/insights" },
  { title: "FAQ", href: "/faq" },
  { title: "Contact", href: "/contact" },
];

export const legalNav: NavItem[] = [
  { title: "Privacy Policy", href: "/privacy" },
  { title: "Terms of Service", href: "/terms" },
];
