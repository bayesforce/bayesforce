"use client";

import React from "react";
import Link from "next/link";
import { Icon, BayesforceLogo } from "@bayesforce/ui";
import { CAPABILITIES, WORKFLOWS } from "../data/site-data";

export const SiteFooter: React.FC = () => {
  return (
    <footer className="bg-[#08090C] text-slate-300 border-t border-white/10 pt-20 pb-12">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        {/* Main 5-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Col 1: Brand & Thesis */}
          <div className="lg:col-span-2 space-y-5 pr-4">
            <Link href="/" className="inline-flex items-center group text-decoration-none">
              <BayesforceLogo variant="full" theme="dark" size="lg" />
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed max-w-md">
              Bayesforce builds AI capabilities inside organizations so their systems can carry more of the machinery of work and their people can carry more of their ambition.
            </p>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-slate-300 leading-relaxed">
              <span className="text-amber-400 font-bold">&ldquo;We update our beliefs based on evidence.&rdquo;</span>
              <p className="mt-1 text-slate-400">
                Named in honor of Thomas Bayes (1701–1761), University of Edinburgh alumnus.
              </p>
            </div>

            <div className="pt-2 text-xs text-slate-400 space-y-1">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="font-semibold text-white">100% Client Code & Capability Ownership</span>
              </div>
              <p className="text-slate-400 pl-4">No black-box traps. We engineer sovereign operational capability.</p>
            </div>
          </div>

          {/* Col 2: What We Build */}
          <div>
            <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-white mb-4">
              <Link href="/what-we-build" className="hover:text-[#1637F5] transition-colors">
                What We Build
              </Link>
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/what-we-build"
                  className="text-slate-400 hover:text-white transition-colors font-medium"
                >
                  Overview (4 Pillars)
                </Link>
              </li>
              {CAPABILITIES.map((cap) => (
                <li key={cap.slug}>
                  <Link
                    href={`/what-we-build/${cap.slug}`}
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
            <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-white mb-4">
              <Link href="/workflows" className="hover:text-[#1637F5] transition-colors">
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
                    href={`/workflows/${wf.slug}`}
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
            <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-white mb-4">
              <Link href="/insights" className="hover:text-[#1637F5] transition-colors">
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

            <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-white mb-3">
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
                  <span className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-[#1637F5]/40 text-blue-300 font-bold">
                    We&apos;re Hiring
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-400 hover:text-white transition-colors">
                  Show Us Your Workflow →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <div>
            &copy; {new Date().getFullYear()} Bayesforce. All rights reserved. Make More Happen.
          </div>
          <div className="flex gap-6">
            <Link href="/about" className="hover:text-slate-300 transition-colors">
              Philosophy
            </Link>
            <Link href="/contact" className="hover:text-slate-300 transition-colors">
              Contact
            </Link>
            <span className="text-slate-600">•</span>
            <span>Mumbai & Pune Centers • Global Engagements</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
