"use client";

import React from "react";
import Link from "next/link";
import { BrandLogo, Icon } from "@/components/ui";
import { CAPABILITIES, WORKFLOWS, getCapabilityHref } from "@/content/catalog";
import { WORKFLOW_CATALOG_TO_ROUTE } from "@/content/businessFunctions";
import styles from "./SiteFooter.module.css";

export const SiteFooter: React.FC = () => {
  return (
    <footer className={`${styles.footer} bg-[#11151B] text-slate-300 border-t border-[#2A3441] font-sans`}>
      <div className={styles.container}>
        {/* Main 5-Column Grid */}
        <div className={styles.grid}>
          {/* Col 1: Brand & Thesis */}
          <div className={`${styles.brandColumn} space-y-5`}>
            <Link href="/" className="inline-flex items-center group text-decoration-none">
              <BrandLogo theme="dark" size="lg" />
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed max-w-md font-normal">
              Bayesforce builds AI capabilities inside organizations so their systems can carry more of the machinery of work and their people can carry more of their ambition.
            </p>

            <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 text-xs text-slate-300 leading-relaxed">
              <span className="text-blue-400 font-bold">&ldquo;We update our beliefs based on evidence.&rdquo;</span>
              <p className="mt-1 text-slate-400">
                Named in honor of Thomas Bayes (1701–1761), pioneer of probabilistic inference.
              </p>
            </div>

            <div className="pt-2 text-xs text-slate-400 space-y-1">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span className="font-semibold text-white">100% Client Code & Capability Ownership</span>
              </div>
              <p className="text-slate-400 pl-4">No black-box traps. We engineer sovereign operational capability.</p>
            </div>
          </div>

          {/* Col 2: Our Capabilities */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              <Link href="/capabilities" className="hover:text-[#013EFA] transition-colors">
                Our Capabilities
              </Link>
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/capabilities"
                  className="text-slate-400 hover:text-white transition-colors font-medium"
                >
                  Overview (4 Pillars)
                </Link>
              </li>
              {CAPABILITIES.map((cap) => (
                <li key={cap.slug}>
                  <Link
                    href={getCapabilityHref(cap.slug)}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    {cap.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Workflows */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              <Link href="/workflows" className="hover:text-[#013EFA] transition-colors">
                Workflows
              </Link>
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/workflows"
                  className="text-slate-400 hover:text-white transition-colors font-medium"
                >
                  Overview (8 Families)
                </Link>
              </li>
              {WORKFLOWS.map((wf) => (
                <li key={wf.slug}>
                  <Link
                    href={`/workflows/${WORKFLOW_CATALOG_TO_ROUTE[wf.slug] ?? wf.slug}`}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    {wf.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Insights & Company */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              <Link href="/insights" className="hover:text-[#013EFA] transition-colors">
                Insights
              </Link>
            </h4>
            <ul className="space-y-2.5 text-sm mb-6">
              <li>
                <Link
                  href="/insights/case-studies"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Case Studies
                </Link>
              </li>
              <li>
                <Link
                  href="/insights/playbooks"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Playbooks
                </Link>
              </li>
              <li>
                <Link
                  href="/insights/reports"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Reports
                </Link>
              </li>
              <li>
                <Link
                  href="/insights/guides"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Guides
                </Link>
              </li>
            </ul>

            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/about" className="text-slate-400 hover:text-white transition-colors">
                  About Bayesforce
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-slate-400 hover:text-white transition-colors flex items-center gap-2">
                  <span>Careers</span>
                  <span className="px-2 py-0.5 rounded-full text-[11px] bg-[#013EFA]/30 text-blue-300 font-semibold border border-[#013EFA]/30">
                    Hiring
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/talk" className="text-slate-400 hover:text-white transition-colors">
                  Talk to Bayesforce
                </Link>
              </li>
              <li>
                <Link href="/search" className="text-slate-400 hover:text-white transition-colors">
                  Search
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={`${styles.bottomBar} border-t border-white/10 text-xs text-slate-400 font-medium`}>
          <div>
            &copy; {new Date().getFullYear()} Bayesforce. All rights reserved. Make More Happen.
          </div>
          <div className={styles.bottomLinks}>
            <Link href="/about" className="hover:text-slate-300 transition-colors">
              Philosophy
            </Link>
            <Link href="/privacy" className="hover:text-slate-300 transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-slate-300 transition-colors">
              Terms
            </Link>
            <span className="text-slate-600">•</span>
            <span>Mumbai &amp; Pune Centers &bull; Global Engagements</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
