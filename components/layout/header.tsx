"use client";

import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowRight, ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Logo } from "@/components/layout/logo";
import { Button } from "@/components/ui/button";
import { serviceCategories } from "@/lib/services";
import { mainNav, mobileNav, siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

const CLOSE_DELAY_MS = 160;

/** Routes whose hero is dark — the unscrolled header renders light-on-dark. */
const DARK_HERO_ROUTES = new Set([
  "/services/ai-machine-learning",
  "/services/ai-automation",
  "/services/data-engineering-analytics",
  "/services/cloud-devops",
]);

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const headerRef = useRef<HTMLElement>(null);
  const servicesButtonRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();

  // Close everything when navigation changes the route.
  const [lastPathname, setLastPathname] = useState(pathname);
  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setMenuOpen(false);
    setMegaOpen(false);
    setMobileServicesOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Keep the page from scrolling behind the open mobile menu.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const closeDesktopMenu = () => {
      if (window.innerWidth >= 1024) setMenuOpen(false);
    };
    window.addEventListener("resize", closeDesktopMenu);
    return () => window.removeEventListener("resize", closeDesktopMenu);
  }, []);

  // Escape closes the mega menu and returns focus to its trigger.
  useEffect(() => {
    if (!megaOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMegaOpen(false);
        servicesButtonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [megaOpen]);

  // Clicking outside the header closes the mega menu.
  useEffect(() => {
    if (!megaOpen) return;
    const onPointerDown = (event: PointerEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) {
        setMegaOpen(false);
      }
    };
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [megaOpen]);

  const cancelClose = useCallback(() => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  }, []);

  const scheduleClose = useCallback(() => {
    cancelClose();
    closeTimer.current = setTimeout(() => setMegaOpen(false), CLOSE_DELAY_MS);
  }, [cancelClose]);

  const openedAt = useRef(0);
  const openMega = useCallback(() => {
    cancelClose();
    setMegaOpen((open) => {
      if (!open) openedAt.current = performance.now();
      return true;
    });
  }, [cancelClose]);

  /* A mouse click lands right after the hover that opened the menu; only
     treat it as "close" when the menu has been open for a moment. */
  const toggleMega = useCallback(() => {
    if (!megaOpen) {
      openMega();
    } else if (performance.now() - openedAt.current > 300) {
      setMegaOpen(false);
    }
  }, [megaOpen, openMega]);

  const onDark =
    DARK_HERO_ROUTES.has(pathname) && !scrolled && !megaOpen && !menuOpen;

  return (
    <header
      ref={headerRef}
      onMouseLeave={scheduleClose}
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300",
        scrolled || megaOpen || menuOpen
          ? "border-line bg-ivory/92 backdrop-blur-md"
          : "border-transparent bg-transparent",
      )}
    >
      <Container className="flex h-16 items-center justify-between md:h-20">
        <Logo className="relative z-50" tone={onDark ? "dark" : "light"} />

        {/* Desktop navigation */}
        <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
          <button
            ref={servicesButtonRef}
            type="button"
            aria-expanded={megaOpen}
            aria-controls="services-mega-menu"
            onClick={toggleMega}
            onMouseEnter={openMega}
            className={cn(
              "flex items-center gap-1.5 text-sm font-medium transition-colors duration-200",
              onDark
                ? "text-white/90 hover:text-white"
                : megaOpen || pathname.startsWith("/services")
                  ? "text-ink"
                  : "text-ink-soft hover:text-ink",
            )}
          >
            Services
            <ChevronDown
              aria-hidden
              className={cn(
                "size-4 transition-transform duration-200",
                megaOpen && "rotate-180",
              )}
            />
          </button>

          {mainNav
            .filter((item) => item.href !== "/services")
            .map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onMouseEnter={scheduleClose}
                className={cn(
                  "text-sm font-medium transition-colors duration-200",
                  onDark
                    ? "text-white/75 hover:text-white"
                    : pathname.startsWith(item.href)
                      ? "text-ink"
                      : "text-ink-soft hover:text-ink",
                )}
              >
                {item.title}
              </Link>
            ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button
            asChild
            variant={onDark ? "outline-inverse" : "outline"}
            size="sm"
          >
            <Link href="/contact">Contact</Link>
          </Button>
          <Button asChild size="sm">
            <Link href="/contact">
              Start a project
              <ArrowUpRight aria-hidden />
            </Link>
          </Button>
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          onClick={() => {
            setMegaOpen(false);
            setMenuOpen((open) => !open);
          }}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          className={cn(
            "relative z-50 inline-flex size-10 items-center justify-center lg:hidden",
            onDark ? "text-white" : "text-ink",
          )}
        >
          {menuOpen ? <X aria-hidden /> : <Menu aria-hidden />}
        </button>
      </Container>

      {/* Desktop mega menu */}
      <AnimatePresence>
        {megaOpen && (
          <motion.div
            id="services-mega-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            onMouseEnter={cancelClose}
            className="absolute inset-x-0 top-full hidden border-b border-line bg-white shadow-[0_24px_48px_-24px_rgb(32_36_44_/_0.18)] lg:block"
          >
            <Container className="grid grid-cols-[repeat(4,1fr)_1.05fr] gap-8 py-10">
              {serviceCategories.map((category) => (
                <div key={category.key}>
                  <p className="eyebrow text-terracotta">{category.title}</p>
                  <ul className="mt-5 space-y-1">
                    {category.services.map((service) => {
                      const Icon = service.icon;
                      return (
                        <li key={service.slug}>
                          <Link
                            href={service.href}
                            className="group -mx-2 flex items-start gap-3 rounded-lg p-2 transition-colors duration-150 hover:bg-ivory"
                          >
                            <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-md border border-line text-ink-soft transition-colors duration-150 group-hover:border-cobalt/50 group-hover:text-cobalt">
                              <Icon aria-hidden className="size-4" strokeWidth={1.6} />
                            </span>
                            <span>
                              <span className="block text-sm font-medium text-ink transition-colors duration-150 group-hover:text-cobalt">
                                {service.title}
                              </span>
                              <span className="mt-0.5 block text-xs leading-snug text-ink-soft">
                                {service.menuDescription}
                              </span>
                            </span>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}

              {/* Featured column */}
              <div className="flex flex-col border-l border-line pl-8">
                <p className="eyebrow text-cobalt">Featured</p>
                <Link href="/work" className="group mt-5 block">
                  <div className="relative aspect-[16/10] overflow-hidden rounded-lg bg-cream">
                    <Image
                      src="/images/company/team-collaboration.jpg"
                      alt=""
                      fill
                      sizes="300px"
                      className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                    />
                    <div
                      aria-hidden
                      className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent"
                    />
                    <span className="absolute right-3 bottom-3 left-3 text-sm font-medium text-white">
                      See how we design &amp; engineer
                    </span>
                  </div>
                  <span className="mt-3 inline-flex items-center gap-2 text-sm text-ink-soft transition-colors group-hover:text-cobalt">
                    Explore our work
                    <ArrowRight
                      aria-hidden
                      className="size-4 transition-transform group-hover:translate-x-1"
                    />
                  </span>
                </Link>
                <div className="mt-auto border-t border-line pt-5">
                  <Button asChild size="sm" className="w-full">
                    <Link href="/contact">
                      Start a project
                      <ArrowUpRight aria-hidden />
                    </Link>
                  </Button>
                </div>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile overlay menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="absolute inset-x-0 top-full z-40 flex h-[calc(100dvh-4rem)] flex-col overflow-hidden bg-ivory md:h-[calc(100dvh-5rem)] lg:hidden"
          >
            <Container className="flex flex-1 flex-col overflow-y-auto overscroll-contain pt-6 pb-8 sm:pt-8">
              <nav aria-label="Mobile" className="flex flex-col">
                {/* Services accordion */}
                <div className="border-b border-line">
                  <button
                    type="button"
                    aria-expanded={mobileServicesOpen}
                    aria-controls="mobile-services"
                    onClick={() => setMobileServicesOpen((open) => !open)}
                    className="flex w-full items-baseline gap-4 py-4 text-left"
                  >
                    <span className="font-mono text-xs text-ink-faint">01</span>
                    <span className="font-display text-3xl font-medium text-ink">
                      Services
                    </span>
                    <ChevronDown
                      aria-hidden
                      className={cn(
                        "ml-auto size-5 self-center text-ink-soft transition-transform duration-200",
                        mobileServicesOpen && "rotate-180",
                      )}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {mobileServicesOpen && (
                      <motion.div
                        id="mobile-services"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="space-y-6 pb-6">
                          <Link
                            href="/services"
                            className="inline-flex min-h-11 items-center gap-2 font-mono text-xs tracking-[0.12em] text-cobalt uppercase"
                          >
                            All services
                            <ArrowRight aria-hidden className="size-3.5" />
                          </Link>
                          {serviceCategories.map((category) => (
                            <div key={category.key}>
                              <p className="eyebrow text-terracotta">
                                {category.title}
                              </p>
                              <ul className="mt-2">
                                {category.services.map((service) => (
                                  <li key={service.slug}>
                                    <Link
                                      href={service.href}
                                      className="flex min-h-11 items-center text-base text-ink/85 transition-colors hover:text-ink"
                                    >
                                      {service.title}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Remaining primary links */}
                {mobileNav
                  .filter((item) => item.href !== "/services")
                  .map((item, index) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="group flex items-baseline gap-4 border-b border-line py-4"
                    >
                      <span className="font-mono text-xs text-ink-faint">
                        {String(index + 2).padStart(2, "0")}
                      </span>
                      <span className="font-display text-3xl font-medium text-ink transition-colors group-hover:text-cobalt">
                        {item.title}
                      </span>
                    </Link>
                  ))}
              </nav>

              <div className="mt-10 flex flex-col gap-6">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="font-mono text-sm text-ink-soft transition-colors hover:text-ink"
                >
                  {siteConfig.email}
                </a>
                <Button asChild size="lg" className="w-full">
                  <Link href="/contact">
                    Start a project
                    <ArrowUpRight aria-hidden />
                  </Link>
                </Button>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
