import React from "react";
import Link from "next/link";
import { Heading, Text, Kicker, Icon, Button } from "@bayesforce/ui";
import { PageHeader } from "../components/PageHeader";
import { DiagnosticCTA } from "../components/DiagnosticCTA";
import { CrossLinksSection } from "../components/CrossLinksSection";
import { CAPABILITIES } from "../data/site-data";

export const metadata = {
  title: "What We Build | Bayesforce AI Capability Engineering",
  description:
    "We build the capabilities that make AI useful inside organizations: AI Data Engineering, AI Coworkers, AI Trust & Governance, and AI Capability.",
};

export default function WhatWeBuildPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* 1. Page Header */}
      <PageHeader
        breadcrumbs={[{ label: "What We Build" }]}
        kicker="Engineered Capabilities"
        kickerIcon="cpu"
        title="We build the capabilities that make AI useful inside organizations."
        subtitle="AI becomes valuable when it can access the right information, operate across real workflows, work within clear controls, and become a capability the organization can own."
      />

      {/* 2. Four Pillars Deep Dive Grid */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-[1240px] mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Kicker variant="cobalt" icon={<Icon name="layers" size={15} />}>
              The 4 Capability Pillars
            </Kicker>
            <Heading level="h2" className="mb-3 text-3xl md:text-4xl font-black">
              A Connected Architecture for Intelligent Operations
            </Heading>
            <Text variant="lead">
              Each capability reinforces the next—from foundational data engineering to governed autonomous digital labor and organizational literacy.
            </Text>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {CAPABILITIES.map((cap, index) => (
              <div
                key={cap.slug}
                className="p-8 md:p-10 rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all flex flex-col justify-between bg-white relative overflow-hidden group"
              >
                {/* Number Watermark */}
                <div className="absolute top-6 right-6 font-mono text-4xl font-black text-slate-100 group-hover:text-blue-50 transition-colors pointer-events-none">
                  0{index + 1}
                </div>

                <div>
                  <div className="flex items-center gap-3.5 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#1637F5] flex items-center justify-center border border-blue-100 group-hover:bg-[#1637F5] group-hover:text-white transition-all">
                      <Icon name={cap.icon as any} size={24} />
                    </div>
                    <div>
                      <span className="font-mono text-xs font-bold uppercase tracking-wider text-blue-600 block">
                        {cap.kicker}
                      </span>
                      <h3 className="text-2xl font-black text-slate-900 leading-tight">
                        {cap.shortTitle}
                      </h3>
                    </div>
                  </div>

                  <p className="text-sm font-bold text-slate-900 mb-3">
                    {cap.positioning}
                  </p>

                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed mb-8">
                    {cap.summary}
                  </p>

                  {/* Core Sub-Systems */}
                  <div className="space-y-3 mb-8 bg-slate-50/80 p-5 rounded-2xl border border-slate-200/80">
                    <div className="font-mono text-xs font-bold uppercase tracking-wider text-slate-400">
                      Core Sub-Systems
                    </div>
                    {cap.keyPillars.slice(0, 3).map((p, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700 font-semibold">
                        <Icon name="check" size={14} className="text-emerald-500 shrink-0 mt-0.5" />
                        <span>{p.title}</span>
                      </div>
                    ))}
                  </div>

                  {/* Metrics Row */}
                  <div className="grid grid-cols-3 gap-3 p-4 rounded-xl bg-blue-50/40 border border-blue-100/60 mb-8 text-center">
                    {cap.operationalMetrics.map((m, idx) => (
                      <div key={idx}>
                        <div className="font-mono text-base font-black text-[#1637F5]">
                          {m.value}
                        </div>
                        <div className="text-[11px] font-mono text-slate-500 truncate">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                  <Link href={`/what-we-build/${cap.slug}`}>
                    <Button
                      variant="primary"
                      size="sm"
                      rightIcon={<Icon name="arrow-right" size={14} />}
                      className="font-bold"
                    >
                      Explore {cap.shortTitle}
                    </Button>
                  </Link>
                  <Link
                    href={`/what-we-build/${cap.slug}`}
                    className="text-xs font-mono font-bold text-slate-400 hover:text-[#1637F5] transition-colors"
                  >
                    Architecture Details →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Anti-Dependency Operating Commitment */}
      <section className="py-20 px-4 sm:px-6 bg-[#08090C] text-white border-t border-white/10">
        <div className="max-w-[1100px] mx-auto text-center">
          <Kicker variant="dark" icon={<Icon name="shield-check" size={15} />}>
            The Bayesforce Operating Standard
          </Kicker>
          <Heading level="h2" dark className="mb-4 max-w-3xl mx-auto text-3xl md:text-4xl font-black">
            100% Client Capability Ownership. Zero Black-Box IP.
          </Heading>
          <Text variant="lead" dark className="max-w-2xl mx-auto mb-12 text-slate-400">
            We deliver all source code, workflow configurations, agent logic, and evaluation datasets directly to your internal repository. We build enduring operational capability inside your organization, not external dependencies.
          </Text>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center mb-4">
                <Icon name="code" size={20} />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Native Source Repositories</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Code runs in your cloud (AWS, GCP, Azure, or On-Prem) with zero proprietary runtime lock-in.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center mb-4">
                <Icon name="lock" size={20} />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Sovereign Data Privacy</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Your enterprise records, prompts, and memory graphs are never used to train public foundation models.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4">
                <Icon name="users" size={20} />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Full Engineering Transfer</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Your internal developers receive pair programming, architecture SOPs, and evaluation runbooks to operate independently.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Cross Links */}
      <CrossLinksSection
        title="Where These Capabilities Are Applied"
        subtitle="See how our 4 capability pillars power specific operational workflows and real client results."
        workflowSlugs={["finance-and-accounting", "revenue-ops", "legal-risk-and-compliance"]}
        insightSlugs={["tier-1-fintech-recon", "midmarket-b2b-saas-revops", "state-of-enterprise-agent-readiness-2026"]}
      />

      {/* 5. Diagnostic CTA */}
      <DiagnosticCTA />
    </main>
  );
}
