"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon, BayesforceLogo } from "@bayesforce/ui";
import { CAPABILITIES, WORKFLOWS } from "../data/site-data";

export const SiteHeader: React.FC = () => {
  const pathname = usePathname();
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileExpandedSection, setMobileExpandedSection] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const headerRef = useRef<HTMLElement | null>(null);

  // Close menus on route change
  useEffect(() => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
  }, [pathname]);

  // Click outside to close active dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveDropdown(null);
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleMouseEnter = (menu: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setActiveDropdown(menu);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 220);
  };

  const toggleMobileSection = (section: string) => {
    setMobileExpandedSection((prev) => (prev === section ? null : section));
  };

  const isWhatWeBuildActive = pathname.startsWith("/what-we-build");
  const isWorkflowsActive = pathname.startsWith("/workflows");
  const isInsightsActive = pathname.startsWith("/insights");
  const isAboutActive = pathname === "/about";
  const isCareersActive = pathname === "/careers";

  // Split workflows into 2 balanced columns
  const workflowsCol1 = WORKFLOWS.slice(0, 4);
  const workflowsCol2 = WORKFLOWS.slice(4, 8);

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 bg-white/90 backdrop-blur-2xl border-b border-slate-200/80 shadow-[0_4px_20px_-4px_rgba(8,9,12,0.03)] transition-all"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 h-[76px] flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          href="/"
          className="flex items-center group text-decoration-none transition-transform duration-200 hover:opacity-95 active:scale-[0.99]"
          aria-label="Bayesforce Home"
        >
          <BayesforceLogo variant="full" size="md" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1" aria-label="Main Navigation">
          {/* 1. What We Build Mega Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("what-we-build")}
            onMouseLeave={handleMouseLeave}
          >
            <Link
              href="/what-we-build"
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-[0.95rem] font-semibold transition-all duration-150 ${
                isWhatWeBuildActive || activeDropdown === "what-we-build"
                  ? "text-[#1637F5] bg-blue-50/80 font-bold"
                  : "text-slate-700 hover:text-[#1637F5] hover:bg-slate-50"
              }`}
              aria-expanded={activeDropdown === "what-we-build"}
              aria-haspopup="true"
            >
              <span>What We Build</span>
              <Icon
                name="chevron-down"
                size={14}
                className={`transition-transform duration-200 ease-out ${
                  activeDropdown === "what-we-build" ? "rotate-180 text-[#1637F5]" : "text-slate-400"
                }`}
              />
            </Link>

            {/* What We Build Dropdown Popup */}
            {activeDropdown === "what-we-build" && (
              <div
                className="absolute top-full left-0 pt-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200"
                onMouseEnter={() => handleMouseEnter("what-we-build")}
                onMouseLeave={handleMouseLeave}
              >
                <div className="w-[740px] bg-white/98 backdrop-blur-2xl rounded-2xl shadow-[0_24px_54px_-12px_rgba(8,9,12,0.18),0_4px_16px_rgba(8,9,12,0.06)] border border-slate-200/90 ring-1 ring-slate-900/[0.04] p-5">
                  {/* Top Header Bar */}
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
                    <div className="flex items-center gap-2.5">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-[11px] font-mono font-bold uppercase tracking-wider bg-blue-50 text-[#1637F5] border border-blue-100">
                        Core Architecture
                      </span>
                      <span className="text-xs font-semibold text-slate-500">
                        4 Organization Capability Pillars
                      </span>
                    </div>
                    <Link
                      href="/what-we-build"
                      className="text-xs font-bold text-[#1637F5] hover:text-blue-700 flex items-center gap-1 group/link"
                    >
                      <span>Architecture Overview</span>
                      <Icon
                        name="arrow-right"
                        size={12}
                        className="transition-transform duration-150 group-hover/link:translate-x-0.5"
                      />
                    </Link>
                  </div>

                  {/* 2x2 Capabilities Grid */}
                  <div className="grid grid-cols-2 gap-3">
                    {CAPABILITIES.map((cap) => (
                      <Link
                        key={cap.slug}
                        href={`/what-we-build/${cap.slug}`}
                        className="group/card p-3.5 rounded-xl border border-slate-100 bg-slate-50/40 hover:bg-blue-50/40 hover:border-blue-200/80 transition-all duration-200 flex items-start gap-3.5"
                      >
                        <div className="w-10 h-10 rounded-xl bg-white border border-slate-200/80 shadow-xs flex items-center justify-center text-[#1637F5] group-hover/card:bg-[#1637F5] group-hover/card:text-white group-hover/card:border-[#1637F5] group-hover/card:shadow-sm transition-all shrink-0">
                          <Icon name={cap.icon as any} size={18} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-[0.93rem] font-bold text-slate-900 group-hover/card:text-[#1637F5] transition-colors leading-tight flex items-center justify-between">
                            <span>{cap.shortTitle}</span>
                            <Icon
                              name="arrow-right"
                              size={12}
                              className="opacity-0 -translate-x-1 group-hover/card:opacity-100 group-hover/card:translate-x-0 transition-all text-[#1637F5]"
                            />
                          </div>
                          <p className="text-xs text-slate-500 line-clamp-1 mt-1">
                            {cap.positioning}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>

                  {/* Bottom Strip */}
                  <div className="mt-3 pt-3 border-t border-slate-100/80 flex items-center justify-between text-xs text-slate-500 bg-slate-50/60 -mx-5 -mb-5 px-5 py-2.5 rounded-b-2xl">
                    <span className="flex items-center gap-1.5 font-medium">
                      <Icon name="sparkles" size={13} className="text-[#1637F5]" />
                      Engineered for deterministic trust and autonomous execution.
                    </span>
                    <Link
                      href="/about"
                      className="font-semibold text-slate-700 hover:text-[#1637F5] flex items-center gap-1"
                    >
                      Our Approach <Icon name="chevron-right" size={12} />
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* 2. Workflows Mega Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("workflows")}
            onMouseLeave={handleMouseLeave}
          >
            <Link
              href="/workflows"
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-[0.95rem] font-semibold transition-all duration-150 ${
                isWorkflowsActive || activeDropdown === "workflows"
                  ? "text-[#1637F5] bg-blue-50/80 font-bold"
                  : "text-slate-700 hover:text-[#1637F5] hover:bg-slate-50"
              }`}
              aria-expanded={activeDropdown === "workflows"}
              aria-haspopup="true"
            >
              <span>Workflows</span>
              <Icon
                name="chevron-down"
                size={14}
                className={`transition-transform duration-200 ease-out ${
                  activeDropdown === "workflows" ? "rotate-180 text-[#1637F5]" : "text-slate-400"
                }`}
              />
            </Link>

            {/* Workflows Mega Dropdown Popup */}
            {activeDropdown === "workflows" && (
              <div
                className="absolute top-full left-1/2 -translate-x-1/2 pt-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200"
                onMouseEnter={() => handleMouseEnter("workflows")}
                onMouseLeave={handleMouseLeave}
              >
                <div className="w-[880px] bg-white/98 backdrop-blur-2xl rounded-2xl shadow-[0_24px_54px_-12px_rgba(8,9,12,0.18),0_4px_16px_rgba(8,9,12,0.06)] border border-slate-200/90 ring-1 ring-slate-900/[0.04] p-5">
                  {/* Top Header Bar */}
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
                    <div className="flex items-center gap-2.5">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-[11px] font-mono font-bold uppercase tracking-wider bg-blue-50 text-[#1637F5] border border-blue-100">
                        Operational Machinery
                      </span>
                      <span className="text-xs font-semibold text-slate-500">
                        8 Specialized Enterprise Workflow Families
                      </span>
                    </div>
                    <Link
                      href="/workflows"
                      className="text-xs font-bold text-[#1637F5] hover:text-blue-700 flex items-center gap-1 group/link"
                    >
                      <span>View All Workflows</span>
                      <Icon
                        name="arrow-right"
                        size={12}
                        className="transition-transform duration-150 group-hover/link:translate-x-0.5"
                      />
                    </Link>
                  </div>

                  {/* 2-Column Workflows Grid */}
                  <div className="grid grid-cols-2 gap-3">
                    {/* Column 1: Commercial & Front-Office */}
                    <div className="space-y-1.5">
                      {workflowsCol1.map((wf) => (
                        <Link
                          key={wf.slug}
                          href={`/workflows/${wf.slug}`}
                          className="group/item p-2.5 rounded-xl border border-transparent hover:border-blue-100 hover:bg-blue-50/50 transition-all duration-150 flex items-center gap-3"
                        >
                          <div className="w-8 h-8 rounded-lg bg-slate-100/80 border border-slate-200/60 flex items-center justify-center text-slate-700 group-hover/item:bg-[#1637F5] group-hover/item:text-white group-hover/item:border-[#1637F5] transition-all shrink-0">
                            <Icon name={wf.icon as any} size={15} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="text-[0.91rem] font-bold text-slate-900 group-hover/item:text-[#1637F5] transition-colors leading-tight">
                              {wf.shortTitle}
                            </div>
                            <p className="text-[11px] text-slate-500 truncate mt-0.5">
                              {wf.category}
                            </p>
                          </div>
                          <Icon
                            name="chevron-right"
                            size={12}
                            className="text-slate-300 group-hover/item:text-[#1637F5] group-hover/item:translate-x-0.5 transition-all shrink-0"
                          />
                        </Link>
                      ))}
                    </div>

                    {/* Column 2: Financial, Operational & Technical */}
                    <div className="space-y-1.5">
                      {workflowsCol2.map((wf) => (
                        <Link
                          key={wf.slug}
                          href={`/workflows/${wf.slug}`}
                          className="group/item p-2.5 rounded-xl border border-transparent hover:border-blue-100 hover:bg-blue-50/50 transition-all duration-150 flex items-center gap-3"
                        >
                          <div className="w-8 h-8 rounded-lg bg-slate-100/80 border border-slate-200/60 flex items-center justify-center text-slate-700 group-hover/item:bg-[#1637F5] group-hover/item:text-white group-hover/item:border-[#1637F5] transition-all shrink-0">
                            <Icon name={wf.icon as any} size={15} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="text-[0.91rem] font-bold text-slate-900 group-hover/item:text-[#1637F5] transition-colors leading-tight">
                              {wf.shortTitle}
                            </div>
                            <p className="text-[11px] text-slate-500 truncate mt-0.5">
                              {wf.category}
                            </p>
                          </div>
                          <Icon
                            name="chevron-right"
                            size={12}
                            className="text-slate-300 group-hover/item:text-[#1637F5] group-hover/item:translate-x-0.5 transition-all shrink-0"
                          />
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Strip */}
                  <div className="mt-3 pt-3 border-t border-slate-100/80 flex items-center justify-between text-xs text-slate-500 bg-slate-50/60 -mx-5 -mb-5 px-5 py-2.5 rounded-b-2xl">
                    <span className="font-medium text-slate-600">
                      Connectors: Salesforce, NetSuite, SAP, Zendesk, Jira, Slack, PostgreSQL & custom APIs.
                    </span>
                    <Link
                      href="/workflows"
                      className="font-semibold text-slate-700 hover:text-[#1637F5] flex items-center gap-1"
                    >
                      Explore Universal Engine <Icon name="chevron-right" size={12} />
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* 3. Insights Mega Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("insights")}
            onMouseLeave={handleMouseLeave}
          >
            <Link
              href="/insights"
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-[0.95rem] font-semibold transition-all duration-150 ${
                isInsightsActive || activeDropdown === "insights"
                  ? "text-[#1637F5] bg-blue-50/80 font-bold"
                  : "text-slate-700 hover:text-[#1637F5] hover:bg-slate-50"
              }`}
              aria-expanded={activeDropdown === "insights"}
              aria-haspopup="true"
            >
              <span>Insights</span>
              <Icon
                name="chevron-down"
                size={14}
                className={`transition-transform duration-200 ease-out ${
                  activeDropdown === "insights" ? "rotate-180 text-[#1637F5]" : "text-slate-400"
                }`}
              />
            </Link>

            {/* Insights Mega Dropdown Popup */}
            {activeDropdown === "insights" && (
              <div
                className="absolute top-full right-0 pt-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200"
                onMouseEnter={() => handleMouseEnter("insights")}
                onMouseLeave={handleMouseLeave}
              >
                <div className="w-[620px] bg-white/98 backdrop-blur-2xl rounded-2xl shadow-[0_24px_54px_-12px_rgba(8,9,12,0.18),0_4px_16px_rgba(8,9,12,0.06)] border border-slate-200/90 ring-1 ring-slate-900/[0.04] p-5">
                  {/* Top Header Bar */}
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
                    <div className="flex items-center gap-2.5">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-[11px] font-mono font-bold uppercase tracking-wider bg-blue-50 text-[#1637F5] border border-blue-100">
                        Research & Evidence
                      </span>
                      <span className="text-xs font-semibold text-slate-500">
                        Empirical Learnings & Playbooks
                      </span>
                    </div>
                    <Link
                      href="/insights"
                      className="text-xs font-bold text-[#1637F5] hover:text-blue-700 flex items-center gap-1 group/link"
                    >
                      <span>Browse All</span>
                      <Icon
                        name="arrow-right"
                        size={12}
                        className="transition-transform duration-150 group-hover/link:translate-x-0.5"
                      />
                    </Link>
                  </div>

                  {/* 2x2 Intelligence Channels Grid */}
                  <div className="grid grid-cols-2 gap-3">
                    {/* Case Studies */}
                    <Link
                      href="/insights/case-studies"
                      className="group/card p-3.5 rounded-xl border border-slate-100 bg-slate-50/40 hover:bg-emerald-50/40 hover:border-emerald-200/80 transition-all duration-200 flex items-start gap-3.5"
                    >
                      <div className="w-10 h-10 rounded-xl bg-white text-emerald-600 border border-slate-200/80 shadow-xs flex items-center justify-center group-hover/card:bg-emerald-600 group-hover/card:text-white group-hover/card:border-emerald-600 group-hover/card:shadow-sm transition-all shrink-0">
                        <Icon name="check-circle" size={18} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-[0.93rem] font-bold text-slate-900 group-hover/card:text-emerald-700 transition-colors leading-tight flex items-center justify-between">
                          <span>Case Studies</span>
                          <span className="text-[10px] font-mono font-semibold px-1.5 py-0.5 rounded bg-emerald-100/60 text-emerald-800">
                            Proof
                          </span>
                        </div>
                        <p className="text-xs text-slate-500 line-clamp-1 mt-1">
                          Verified production outcomes & empirical results
                        </p>
                      </div>
                    </Link>

                    {/* Playbooks */}
                    <Link
                      href="/insights/playbooks"
                      className="group/card p-3.5 rounded-xl border border-slate-100 bg-slate-50/40 hover:bg-blue-50/40 hover:border-blue-200/80 transition-all duration-200 flex items-start gap-3.5"
                    >
                      <div className="w-10 h-10 rounded-xl bg-white text-[#1637F5] border border-slate-200/80 shadow-xs flex items-center justify-center group-hover/card:bg-[#1637F5] group-hover/card:text-white group-hover/card:border-[#1637F5] group-hover/card:shadow-sm transition-all shrink-0">
                        <Icon name="code" size={18} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-[0.93rem] font-bold text-slate-900 group-hover/card:text-[#1637F5] transition-colors leading-tight flex items-center justify-between">
                          <span>Playbooks</span>
                          <span className="text-[10px] font-mono font-semibold px-1.5 py-0.5 rounded bg-blue-100/60 text-blue-800">
                            Engineering
                          </span>
                        </div>
                        <p className="text-xs text-slate-500 line-clamp-1 mt-1">
                          Production agent blueprints & state machines
                        </p>
                      </div>
                    </Link>

                    {/* Reports */}
                    <Link
                      href="/insights/reports"
                      className="group/card p-3.5 rounded-xl border border-slate-100 bg-slate-50/40 hover:bg-purple-50/40 hover:border-purple-200/80 transition-all duration-200 flex items-start gap-3.5"
                    >
                      <div className="w-10 h-10 rounded-xl bg-white text-purple-600 border border-slate-200/80 shadow-xs flex items-center justify-center group-hover/card:bg-purple-600 group-hover/card:text-white group-hover/card:border-purple-600 group-hover/card:shadow-sm transition-all shrink-0">
                        <Icon name="activity" size={18} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-[0.93rem] font-bold text-slate-900 group-hover/card:text-purple-700 transition-colors leading-tight flex items-center justify-between">
                          <span>Reports</span>
                          <span className="text-[10px] font-mono font-semibold px-1.5 py-0.5 rounded bg-purple-100/60 text-purple-800">
                            Market
                          </span>
                        </div>
                        <p className="text-xs text-slate-500 line-clamp-1 mt-1">
                          State of AI operations & readiness benchmarks
                        </p>
                      </div>
                    </Link>

                    {/* Guides */}
                    <Link
                      href="/insights/guides"
                      className="group/card p-3.5 rounded-xl border border-slate-100 bg-slate-50/40 hover:bg-amber-50/40 hover:border-amber-200/80 transition-all duration-200 flex items-start gap-3.5"
                    >
                      <div className="w-10 h-10 rounded-xl bg-white text-amber-600 border border-slate-200/80 shadow-xs flex items-center justify-center group-hover/card:bg-amber-600 group-hover/card:text-white group-hover/card:border-amber-600 group-hover/card:shadow-sm transition-all shrink-0">
                        <Icon name="book-open" size={18} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-[0.93rem] font-bold text-slate-900 group-hover/card:text-amber-700 transition-colors leading-tight flex items-center justify-between">
                          <span>Guides</span>
                          <span className="text-[10px] font-mono font-semibold px-1.5 py-0.5 rounded bg-amber-100/60 text-amber-800">
                            Practice
                          </span>
                        </div>
                        <p className="text-xs text-slate-500 line-clamp-1 mt-1">
                          Practical practitioner frameworks & security
                        </p>
                      </div>
                    </Link>
                  </div>

                  {/* Bottom Strip */}
                  <div className="mt-3 pt-3 border-t border-slate-100/80 flex items-center justify-between text-xs text-slate-500 bg-slate-50/60 -mx-5 -mb-5 px-5 py-2.5 rounded-b-2xl">
                    <span className="font-medium text-slate-600">
                      Want to discuss a tailored organizational assessment?
                    </span>
                    <Link
                      href="/contact"
                      className="font-semibold text-[#1637F5] hover:underline flex items-center gap-1"
                    >
                      Book Execution Diagnostic <Icon name="chevron-right" size={12} />
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* 4. About Link */}
          <Link
            href="/about"
            className={`px-3.5 py-2 rounded-xl text-[0.95rem] font-semibold transition-all duration-150 ${
              isAboutActive
                ? "text-[#1637F5] bg-blue-50/80 font-bold"
                : "text-slate-700 hover:text-[#1637F5] hover:bg-slate-50"
            }`}
          >
            About
          </Link>

          {/* 5. Careers Link */}
          <Link
            href="/careers"
            className={`px-3.5 py-2 rounded-xl text-[0.95rem] font-semibold transition-all duration-150 ${
              isCareersActive
                ? "text-[#1637F5] bg-blue-50/80 font-bold"
                : "text-slate-700 hover:text-[#1637F5] hover:bg-slate-50"
            }`}
          >
            Careers
          </Link>
        </nav>

        {/* Right CTA & Mobile Toggle */}
        <div className="flex items-center gap-3">
          {/* Executive Primary CTA (Single Animated Arrow, No Duplicates!) */}
          <Link href="/contact" className="hidden sm:inline-flex items-center">
            <span className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-bold text-[0.93rem] text-white bg-[#1637F5] hover:bg-[#0F2ED9] shadow-[0_4px_14px_rgba(22,55,245,0.28)] hover:shadow-[0_6px_20px_rgba(22,55,245,0.38)] active:scale-[0.98] transition-all duration-200 group">
              <span>Let&apos;s talk</span>
              <Icon
                name="arrow-right"
                size={14}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </span>
          </Link>

          {/* Mobile Hamburger Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-xl text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors"
            aria-label="Toggle Menu"
            aria-expanded={mobileMenuOpen}
          >
            <Icon name={mobileMenuOpen ? "x" : "menu"} size={22} />
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/98 backdrop-blur-2xl border-b border-slate-200 px-5 py-6 space-y-4 max-h-[85vh] overflow-y-auto animate-in fade-in slide-in-from-top-2 duration-200 shadow-2xl">
          {/* Mobile: What We Build */}
          <div className="border-b border-slate-100 pb-3">
            <button
              onClick={() => toggleMobileSection("what-we-build")}
              className="w-full flex items-center justify-between py-2 text-base font-bold text-slate-900"
            >
              <span>What We Build</span>
              <Icon
                name="chevron-down"
                size={16}
                className={`transition-transform duration-200 ${
                  mobileExpandedSection === "what-we-build" ? "rotate-180 text-[#1637F5]" : "text-slate-400"
                }`}
              />
            </button>
            {mobileExpandedSection === "what-we-build" && (
              <div className="pl-3 py-2 space-y-2.5">
                <Link
                  href="/what-we-build"
                  className="block text-xs font-bold text-[#1637F5] py-1"
                >
                  Overview (4 Core Pillars) →
                </Link>
                {CAPABILITIES.map((cap) => (
                  <Link
                    key={cap.slug}
                    href={`/what-we-build/${cap.slug}`}
                    className="block text-xs text-slate-600 hover:text-[#1637F5] py-1 font-medium"
                  >
                    • {cap.shortTitle}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Mobile: Workflows */}
          <div className="border-b border-slate-100 pb-3">
            <button
              onClick={() => toggleMobileSection("workflows")}
              className="w-full flex items-center justify-between py-2 text-base font-bold text-slate-900"
            >
              <span>Workflows</span>
              <Icon
                name="chevron-down"
                size={16}
                className={`transition-transform duration-200 ${
                  mobileExpandedSection === "workflows" ? "rotate-180 text-[#1637F5]" : "text-slate-400"
                }`}
              />
            </button>
            {mobileExpandedSection === "workflows" && (
              <div className="pl-3 py-2 space-y-2.5">
                <Link
                  href="/workflows"
                  className="block text-xs font-bold text-[#1637F5] py-1"
                >
                  Overview (8 Operational Families) →
                </Link>
                {WORKFLOWS.map((wf) => (
                  <Link
                    key={wf.slug}
                    href={`/workflows/${wf.slug}`}
                    className="block text-xs text-slate-600 hover:text-[#1637F5] py-1 font-medium"
                  >
                    • {wf.shortTitle}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Mobile: Insights */}
          <div className="border-b border-slate-100 pb-3">
            <button
              onClick={() => toggleMobileSection("insights")}
              className="w-full flex items-center justify-between py-2 text-base font-bold text-slate-900"
            >
              <span>Insights</span>
              <Icon
                name="chevron-down"
                size={16}
                className={`transition-transform duration-200 ${
                  mobileExpandedSection === "insights" ? "rotate-180 text-[#1637F5]" : "text-slate-400"
                }`}
              />
            </button>
            {mobileExpandedSection === "insights" && (
              <div className="pl-3 py-2 space-y-2.5">
                <Link
                  href="/insights"
                  className="block text-xs font-bold text-[#1637F5] py-1"
                >
                  Overview (All Research & Insights) →
                </Link>
                <Link
                  href="/insights/case-studies"
                  className="block text-xs text-slate-600 hover:text-[#1637F5] py-1 font-medium"
                >
                  • Case Studies (Empirical Proof)
                </Link>
                <Link
                  href="/insights/playbooks"
                  className="block text-xs text-slate-600 hover:text-[#1637F5] py-1 font-medium"
                >
                  • Playbooks (Engineering Methodology)
                </Link>
                <Link
                  href="/insights/reports"
                  className="block text-xs text-slate-600 hover:text-[#1637F5] py-1 font-medium"
                >
                  • Reports (State of Enterprise AI)
                </Link>
                <Link
                  href="/insights/guides"
                  className="block text-xs text-slate-600 hover:text-[#1637F5] py-1 font-medium"
                >
                  • Guides (Practitioner Frameworks)
                </Link>
              </div>
            )}
          </div>

          {/* Mobile: About */}
          <Link
            href="/about"
            className="block py-2 text-base font-bold text-slate-900 hover:text-[#1637F5] transition-colors"
          >
            About
          </Link>

          {/* Mobile: Careers */}
          <Link
            href="/careers"
            className="block py-2 text-base font-bold text-slate-900 hover:text-[#1637F5] transition-colors"
          >
            Careers
          </Link>

          {/* Mobile CTA */}
          <div className="pt-3">
            <Link href="/contact" className="block w-full">
              <span className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-sm text-white bg-[#1637F5] shadow-md shadow-blue-500/20 active:scale-[0.99] transition-all">
                <span>Let&apos;s talk</span>
                <Icon name="arrow-right" size={14} />
              </span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
