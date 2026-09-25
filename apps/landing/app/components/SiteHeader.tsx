"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon, BayesforceLogo, Button, Drawer } from "@bayesforce/ui";

export const SiteHeader: React.FC = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const isWhatWeBuildActive = pathname.startsWith("/what-we-build");
  const isWorkflowsActive = pathname.startsWith("/workflows");
  const isInsightsActive = pathname.startsWith("/insights");
  const isAboutActive = pathname === "/about";
  const isCareersActive = pathname === "/careers";

  const navLinks = [
    { label: "What We Build", href: "/what-we-build", active: isWhatWeBuildActive },
    { label: "Workflows", href: "/workflows", active: isWorkflowsActive },
    { label: "Insights", href: "/insights", active: isInsightsActive },
    { label: "About", href: "/about", active: isAboutActive },
    { label: "Careers", href: "/careers", active: isCareersActive },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-xl border-b border-slate-200/90 shadow-[0_2px_12px_rgba(17,21,27,0.04)] transition-all font-sans">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 h-[72px] flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          href="/"
          className="flex items-center group transition-transform duration-200 hover:opacity-95"
          aria-label="Bayesforce Home"
        >
          <BayesforceLogo variant="full" size="md" />
        </Link>

        {/* Desktop Navigation - Direct links without dropdowns */}
        <nav className="hidden lg:flex items-center gap-1 font-['Outfit']" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-3.5 py-2 rounded-xl text-sm font-medium transition-all duration-150 ${
                link.active
                  ? "text-[#013EFA] bg-[#F1F5FF] font-semibold"
                  : "text-[#11151B]/80 hover:text-[#013EFA] hover:bg-slate-50"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right CTA Actions */}
        <div className="flex items-center gap-3">
          <Link href="/contact" className="hidden sm:inline-flex">
            <Button
              variant="primary"
              size="md"
              className="font-medium shadow-none hover:shadow-xs rounded-xl"
              rightIcon={<Icon name="arrow-right" size={15} />}
            >
              Show us your workflow
            </Button>
          </Link>

          {/* Mobile Menu Hamburger Button */}
          <button
            type="button"
            className="lg:hidden p-2 rounded-xl text-[#11151B] hover:bg-slate-100 border border-slate-200 transition-colors"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open Navigation Menu"
          >
            <Icon name="menu" size={22} />
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <Drawer
        opened={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        title={
          <div className="py-1">
            <BayesforceLogo variant="full" size="sm" />
          </div>
        }
        placement="right"
        size="md"
        footer={
          <div className="w-full">
            <Link href="/contact" className="w-full block" onClick={() => setMobileMenuOpen(false)}>
              <Button
                variant="primary"
                size="lg"
                fullWidth
                rightIcon={<Icon name="arrow-right" size={16} />}
              >
                Show us your workflow
              </Button>
            </Link>
          </div>
        }
      >
        <div className="flex flex-col space-y-1.5 py-2 font-['Outfit']">
          {[
            ...navLinks,
            { label: "Contact", href: "/contact", active: pathname === "/contact" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`p-3.5 rounded-xl text-base font-medium transition-colors ${
                item.active
                  ? "text-[#013EFA] bg-[#F1F5FF] font-semibold"
                  : "text-slate-800 hover:text-[#013EFA] hover:bg-slate-50"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </Drawer>
    </header>
  );
};
