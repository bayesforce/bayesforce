import React from "react";
import Link from "next/link";
import { Heading, Text, Kicker, Icon, Button } from "@bayesforce/ui";
import { PageHeader } from "../../components/PageHeader";
import { DiagnosticCTA } from "../../components/DiagnosticCTA";
import { CrossLinksSection } from "../../components/CrossLinksSection";
import { CAPABILITIES } from "../../data/site-data";

export const metadata = {
  title: "AI Data Engineering: Give AI the Data It Needs to Work | Bayesforce",
  description:
    "Bayesforce engineers the information layer required for AI-enabled workflows: enterprise integrations, pipelines, document extraction, reconciliation, and AI-ready datasets.",
};

export default function AIDataEngineeringPage() {
  const cap = CAPABILITIES.find((c) => c.slug === "ai-data-engineering")!;

  return (
    <main className="min-h-screen bg-white">
      {/* 1. Page Header */}
      <PageHeader
        breadcrumbs={[
          { label: "What We Build", href: "/what-we-build" },
          { label: "AI Data Engineering" },
        ]}
        kicker="Capability Pillar 01"
        kickerIcon="database"
        title="AI Data Engineering"
        subtitle={cap.positioning}
      />

      {/* 2. Positioning & Narrative */}
      <section className="py-20 px-4 sm:px-6 border-b border-slate-200/80">
        <div className="max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Kicker variant="cobalt" icon={<Icon name="alert-circle" size={15} />}>
              The Information Layer Problem
            </Kicker>
            <Heading level="h2" className="text-3xl font-black text-slate-900 leading-tight">
              Give AI the data it needs to work.
            </Heading>
            <Text variant="body" className="text-slate-600 leading-relaxed text-base">
              Bayesforce engineers the information layer required for AI-enabled workflows. AI models cannot reason reliably without persistent, synchronized, and validated access to organizational truth.
            </Text>
            <div className="p-6 rounded-2xl bg-blue-50/80 border border-blue-200/70 text-blue-950 text-sm leading-relaxed space-y-2">
              <div className="font-bold flex items-center gap-2 text-[#1637F5]">
                <Icon name="sparkles" size={16} />
                Workflow-Specific Data Infrastructure
              </div>
              <p>
                We prepare data for specific operational AI workflows rather than building generic enterprise data lakes for their own sake.
              </p>
            </div>
          </div>

          <div className="p-8 md:p-10 rounded-3xl bg-[#08090C] text-white border border-white/10 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/15 blur-[80px] rounded-full pointer-events-none" />
            <Kicker variant="dark" icon={<Icon name="database" size={15} />}>
              The Bayesforce Approach
            </Kicker>
            <h3 className="text-2xl font-bold text-white mb-4 mt-2">
              High-Precision Context & Synchronization Fabric
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              {cap.bayesforceApproach}
            </p>
            <div className="space-y-3 pt-4 border-t border-white/10 font-mono text-xs text-slate-300">
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Context Recall:</span>
                <span className="text-emerald-400 font-bold">99.4% Precision</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Sync Latency:</span>
                <span className="text-emerald-400 font-bold">&lt; 2.8s Real-Time CDC</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Extraction Throughput:</span>
                <span className="text-emerald-400 font-bold">500k pgs / day</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. 5 Core Sections from Memo */}
      <section className="py-20 px-4 sm:px-6 bg-slate-50/70">
        <div className="max-w-[1240px] mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Kicker variant="cobalt" icon={<Icon name="layers" size={15} />}>
              Engineering Sub-Systems
            </Kicker>
            <Heading level="h2" className="text-3xl font-black text-slate-900">
              The 5 Pillars of Enterprise AI Data Engineering
            </Heading>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cap.keyPillars.map((pillar, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-8 h-8 rounded-lg bg-blue-50 text-[#1637F5] font-mono font-bold text-xs flex items-center justify-center border border-blue-100">
                      0{idx + 1}
                    </span>
                    <span className="font-mono text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                      Pillar 0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-2">{pillar.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-6">{pillar.description}</p>
                </div>

                <div className="space-y-2 pt-4 border-t border-slate-100 text-xs text-slate-700">
                  {pillar.details.map((detail, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2">
                      <Icon name="check" size={13} className="text-emerald-500 shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* Architecture Highlights Card */}
            <div className="p-8 rounded-3xl bg-slate-900 text-white border border-slate-800 shadow-sm flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs font-bold text-blue-400 uppercase tracking-wider block mb-2">
                  Technical Architecture
                </span>
                <h3 className="text-lg font-bold text-white mb-4">
                  High-Performance Data Stack
                </h3>
                <div className="space-y-3 text-xs">
                  {cap.architectureHighlights.map((arch, aIdx) => (
                    <div key={aIdx} className="p-3 rounded-xl bg-white/5 border border-white/5">
                      <div className="font-bold text-blue-300">{arch.layer}</div>
                      <div className="font-mono text-slate-400 text-[11px]">{arch.tech}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6">
                <Link href="/workflows">
                  <Button variant="primary" size="sm" className="w-full justify-center font-bold">
                    See Dependent Workflows →
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Cross Links */}
      <CrossLinksSection
        title="Workflows That Depend on AI Data Engineering"
        subtitle="Explore how clean enterprise context powers real-world operations in Finance, Revenue, and Legal."
        workflowSlugs={cap.relatedWorkflows}
        insightSlugs={cap.relatedInsights}
      />

      {/* 5. CTA */}
      <DiagnosticCTA
        title="Ready to engineer reliable data for your AI workflows?"
        subtitle="Show us how your data is structured today across CRM, ERP, documents, and databases. We'll design the information layer required for production AI."
      />
    </main>
  );
}
