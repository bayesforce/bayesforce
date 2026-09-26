"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BrandLogo, Button, Drawer, Icon } from "@/components/ui";
import styles from "./SiteHeader.module.css";

interface DropdownItem {
  label: string;
  href: string;
  description?: string;
}

interface NavItem {
  label: string;
  href: string;
  wide?: boolean;
  items: DropdownItem[];
}

const NAV_ITEMS: NavItem[] = [
  {
    label: "Our Capabilities",
    href: "/capabilities",
    items: [
      { label: "AI Data Engineering",   href: "/capabilities/ai-data-engineering",  description: "Connect systems and build organizational memory" },
      { label: "AI Coworkers",          href: "/capabilities/ai-coworkers",          description: "Execute multi-step work through existing tools" },
      { label: "AI Trust & Governance", href: "/capabilities/ai-trust-governance",   description: "Make AI observable, measurable, and controllable" },
      { label: "AI Enablement",         href: "/capabilities/ai-enablement",         description: "Transfer capability to your internal team" },
    ],
  },
  {
    label: "Workflows",
    href: "/workflows",
    wide: true,
    items: [
      { label: "Revenue Operations",       href: "/workflows/revenue-ops" },
      { label: "Customer Operations",      href: "/workflows/customer-ops" },
      { label: "Finance & Accounting",     href: "/workflows/finance-and-accounting" },
      { label: "Procurement & Vendor Ops", href: "/workflows/procurement-and-supply" },
      { label: "Business Operations",      href: "/workflows/business-ops" },
      { label: "Technology Operations",    href: "/workflows/technology-ops" },
      { label: "Legal, Risk & Compliance", href: "/workflows/legal-risk-and-compliance" },
      { label: "People Operations",        href: "/workflows/people-ops" },
    ],
  },
  {
    label: "Insights",
    href: "/insights",
    items: [
      { label: "Case Studies", href: "/insights/case-studies", description: "Empirical proof from production deployments" },
      { label: "Playbooks",   href: "/insights/playbooks",    description: "How specific workflows should be engineered" },
      { label: "Guides",      href: "/insights/guides",       description: "Deep technical knowledge on production AI" },
      { label: "Reports",     href: "/insights/reports",      description: "Market analysis and enterprise AI worldview" },
    ],
  },
];

/** Converts a nav label to a valid HTML id segment. */
const toId = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-");

export const SiteHeader: React.FC = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen]   = useState(false);
  const [scrollY, setScrollY]                 = useState(0);
  const [activeDropdown, setActiveDropdown]   = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded]   = useState<string | null>(null);

  const closeTimer     = useRef<ReturnType<typeof setTimeout> | null>(null);
  const openedByKbd    = useRef(false);
  const didOpenDrawer  = useRef(false);
  const triggerRefs    = useRef<Record<string, HTMLButtonElement | null>>({});
  const dropdownRefs   = useRef<Record<string, HTMLDivElement   | null>>({});
  const hamburgerRef   = useRef<HTMLButtonElement>(null);

  /* Reset on navigation */
  useEffect(() => {
    setMobileMenuOpen(false);
    setMobileExpanded(null);
    setActiveDropdown(null);
  }, [pathname]);

  /* Scroll progress for home-page header fade */
  useEffect(() => {
    if (pathname !== "/") { setScrollY(999); return; }
    const update = () => setScrollY(window.scrollY);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, [pathname]);

  /* Focus first dropdown link when opened by keyboard */
  useEffect(() => {
    if (activeDropdown && openedByKbd.current) {
      const t = setTimeout(() => {
        dropdownRefs.current[activeDropdown]
          ?.querySelector<HTMLAnchorElement>("a")
          ?.focus();
      }, 20);
      return () => clearTimeout(t);
    }
  }, [activeDropdown]);

  /* Return focus to hamburger after drawer closes */
  useEffect(() => {
    if (mobileMenuOpen) {
      didOpenDrawer.current = true;
    } else if (didOpenDrawer.current) {
      hamburgerRef.current?.focus();
      didOpenDrawer.current = false;
    }
  }, [mobileMenuOpen]);

  /* Derived state */
  const progress     = Math.min(scrollY / 64, 1);
  const isHeroState  = pathname === "/" && progress < 1;

  /* ── Dropdown helpers ─────────────────────────────────────────────────── */

  const openDropdown = (label: string, byKeyboard = false) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    openedByKbd.current = byKeyboard;
    setActiveDropdown(label);
  };

  const closeDropdown = useCallback((returnFocusTo?: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveDropdown(null);
    openedByKbd.current = false;
    if (returnFocusTo) triggerRefs.current[returnFocusTo]?.focus();
  }, []);

  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setActiveDropdown(null), 130);
  };

  const cancelClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  };

  /* ── Inline styles for home-page header ──────────────────────────────── */

  const homeHeaderStyle: React.CSSProperties | undefined =
    pathname === "/"
      ? {
          background:          `rgba(255,255,255,${progress * 0.97})`,
          backdropFilter:      `blur(${progress * 20}px)`,
          WebkitBackdropFilter:`blur(${progress * 20}px)`,
          borderBottomColor:   `rgba(214,222,234,${progress * 0.85})`,
          boxShadow:           `0 1px 12px rgba(17,21,27,${progress * 0.06})`,
        }
      : undefined;

  return (
    <header
      className={`${styles.header} ${pathname === "/" ? styles.home : styles.solid}`}
      style={homeHeaderStyle}
    >
      <div className={styles.inner}>

        {/* ── Brand ──────────────────────────────────────────────────────── */}
        <Link
          href="/"
          className={styles.brandLink}
          aria-label="Bayesforce — go to homepage"
        >
          <BrandLogo theme={isHeroState ? "dark" : "light"} size="md" />
        </Link>

        {/* ── Desktop navigation ─────────────────────────────────────────── */}
        <nav className={styles.desktopNav} aria-label="Main Navigation">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname.startsWith(item.href);
            const isOpen   = activeDropdown === item.label;
            const panelId  = `dropdown-${toId(item.label)}`;

            return (
              <div
                key={item.label}
                className={styles.navItem}
                onMouseEnter={() => openDropdown(item.label)}
                onMouseLeave={scheduleClose}
              >
                {/* Trigger button */}
                <button
                  type="button"
                  ref={(el) => { triggerRefs.current[item.label] = el; }}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  aria-haspopup="true"
                  className={`${styles.link} ${isHeroState ? styles.heroLink : styles.solidLink} ${isActive ? styles.active : ""}`}
                  onClick={() => {
                    if (isOpen) closeDropdown(item.label);
                    else        openDropdown(item.label, true);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "ArrowDown" || (!isOpen && (e.key === "Enter" || e.key === " "))) {
                      e.preventDefault();
                      openDropdown(item.label, true);
                    } else if (e.key === "Escape" && isOpen) {
                      e.preventDefault();
                      closeDropdown(item.label);
                    }
                  }}
                >
                  {item.label}
                  <Icon
                    name="chevron-down"
                    size={12}
                    strokeWidth={2}
                    aria-hidden="true"
                    className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ""}`}
                  />
                </button>

                {/* Dropdown panel
                    visibility: hidden (via CSS) when closed → removed from
                    tab order and AT without removing from DOM.           */}
                <div
                  id={panelId}
                  ref={(el) => { dropdownRefs.current[item.label] = el; }}
                  className={`${styles.dropdown} ${item.wide ? styles.dropdownWide : ""} ${isOpen ? styles.dropdownOpen : ""}`}
                  onMouseEnter={cancelClose}
                  onMouseLeave={scheduleClose}
                >
                  {item.items.map((sub) => (
                    <Link
                      key={sub.href}
                      href={sub.href}
                      className={`${styles.dropdownItem} ${pathname === sub.href ? styles.dropdownItemActive : ""}`}
                      onClick={() => setActiveDropdown(null)}
                      onKeyDown={(e) => {
                        if (e.key === "Escape") {
                          e.preventDefault();
                          closeDropdown(item.label);
                        }
                      }}
                    >
                      <span className={styles.dropdownItemLabel}>{sub.label}</span>
                      {sub.description && (
                        <span className={styles.dropdownItemDesc}>{sub.description}</span>
                      )}
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}

          <Link
            href="/about"
            className={`${styles.link} ${isHeroState ? styles.heroLink : styles.solidLink} ${pathname === "/about" ? styles.active : ""}`}
          >
            About
          </Link>
        </nav>

        {/* ── Right-side actions ──────────────────────────────────────────── */}
        <div className={styles.actions}>
          <Link href="/talk" className={styles.primaryCta}>
            <Button
              variant="primary"
              size="md"
              className={`font-medium shadow-none rounded-xl ${isHeroState ? styles.heroCta : ""}`}
            >
              Talk to an Expert
            </Button>
          </Link>

          <button
            ref={hamburgerRef}
            type="button"
            className={`${styles.menuButton} ${isHeroState ? styles.menuButtonHero : styles.menuButtonSolid}`}
            aria-label="Open navigation menu"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-drawer"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Icon name="menu" size={22} aria-hidden="true" />
          </button>
        </div>
      </div>

      {/* ── Mobile drawer ──────────────────────────────────────────────────── */}
      <Drawer
        opened={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        title={<div className="py-1"><BrandLogo size="sm" /></div>}
        footer={
          <div className="w-full">
            <Link href="/talk" className="w-full block" onClick={() => setMobileMenuOpen(false)}>
              <Button variant="primary" size="lg" fullWidth rightIcon={<Icon name="arrow-right" size={16} aria-hidden="true" />}>
                Talk to an Expert
              </Button>
            </Link>
          </div>
        }
      >
        <div id="mobile-drawer" className="flex flex-col space-y-1 py-2 font-sans">
          {NAV_ITEMS.map((item) => {
            const isActive   = pathname.startsWith(item.href);
            const isExpanded = mobileExpanded === item.label;
            const sectionId  = `mobile-section-${toId(item.label)}`;

            return (
              <div key={item.label}>
                <button
                  type="button"
                  aria-expanded={isExpanded}
                  aria-controls={sectionId}
                  className={`w-full flex items-center justify-between min-h-[44px] p-3.5 rounded-xl text-base font-medium transition-colors ${
                    isActive
                      ? "text-[#013EFA] bg-[#F1F5FF] font-semibold"
                      : "text-[#11151b] hover:text-[#013EFA] hover:bg-[#f0f4ff]"
                  }`}
                  onClick={() => setMobileExpanded(isExpanded ? null : item.label)}
                >
                  {item.label}
                  <Icon
                    name="chevron-down"
                    size={16}
                    strokeWidth={2}
                    aria-hidden="true"
                    style={{
                      transform: isExpanded ? "rotate(-180deg)" : "rotate(0deg)",
                      transition: "transform 200ms ease",
                    }}
                  />
                </button>

                <div
                  id={sectionId}
                  className={isExpanded ? "ml-3 mt-0.5 flex flex-col space-y-0.5" : "hidden"}
                >
                  {item.items.map((sub) => (
                    <Link
                      key={sub.href}
                      href={sub.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center min-h-[44px] p-3 rounded-xl text-sm font-medium transition-colors ${
                        pathname === sub.href
                          ? "text-[#013EFA] bg-[#F1F5FF]"
                          : "text-[#3e4555] hover:text-[#013EFA] hover:bg-[#f0f4ff]"
                      }`}
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}

          <Link
            href="/about"
            onClick={() => setMobileMenuOpen(false)}
            className={`flex items-center min-h-[44px] p-3.5 rounded-xl text-base font-medium transition-colors ${
              pathname === "/about"
                ? "text-[#013EFA] bg-[#F1F5FF] font-semibold"
                : "text-[#11151b] hover:text-[#013EFA] hover:bg-[#f0f4ff]"
            }`}
          >
            About
          </Link>
        </div>
      </Drawer>
    </header>
  );
};
