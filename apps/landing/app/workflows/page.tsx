import React from "react";
import Link from "next/link";
import { Heading, Text, Kicker, Icon, Button } from "@bayesforce/ui";
import { PageHeader } from "../components/PageHeader";
import { DiagnosticCTA } from "../components/DiagnosticCTA";
import { CrossLinksSection } from "../components/CrossLinksSection";
import { WORKFLOWS } from "../data/site-data";

export const metadata = {
  title: "Workflows | AI-Enabled Workflows Across the Organization | Bayesforce",
  description:
    "Where can Bayesforce apply these capabilities? Explore the 8 operational workflow families: Revenue Ops, Customer Ops, Finance, Procurement, People Ops, Legal & Risk, Business Ops, and Tech Ops.",
};

export default function WorkflowsPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* 1. Page Header */}
      <PageHeader
        breadcrumbs={[{ label: "Workflows" }]}
        kicker="Operational Families"
        kickerIcon="git-branch"
        title="AI-enabled workflows across the organization."
        subtitle="Where can Bayesforce apply these capabilities? We layer systems of action across the tools your departments already use, turning routine administrative friction into intelligent operations."
      />

      {/* 2. 8 Workflow Families Grid */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-[1240px] mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Kicker variant="cobalt" icon={<Icon name="layers" size={15} />}>
              The 8 Operating Arenas
            </Kicker>
            <Heading level="h2" className="mb-3 text-3xl md:text-4xl font-black">
              Representative Workflow Families
            </Heading>
            <Text variant="lead">
              We do not build generic chatbots. We engineer deterministic workflow systems and governed coworkers that solve specific operational bottlenecks.
            </Text>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {WORKFLOWS.map((wf, idx) => (
              <div
                key={wf.slug}
                className="p-8 md:p-10 rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all flex flex-col justify-between bg-white group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3.5">
                      <div className="w-12 h-12 rounded-2xl bg-slate-50 text-slate-800 flex items-center justify-center border border-slate-200 group-hover:bg-[#1637F5] group-hover:text-white group-hover:border-[#1637F5] transition-all">
                        <Icon name={wf.icon as any} size={22} />
                      </div>
                      <div>
                        <span className="font-mono text-xs font-bold uppercase tracking-wider text-blue-600 block">
                          {wf.category}
                        </span>
                        <h3 className="text-2xl font-black text-slate-900 leading-tight">
                          {wf.shortTitle}
                        </h3>
                      </div>
                    </div>
                    <span className="font-mono text-xs font-bold text-slate-400 bg-slate-100 px-2.5 py-1 rounded-full">
                      0{idx + 1}
                    </span>
                  </div>

                  <p className="text-slate-800 font-semibold text-sm leading-relaxed mb-3">
                    {wf.heroHeadline}
                  </p>

                  <p className="text-xs md:text-sm text-slate-500 leading-relaxed mb-6">
                    {wf.summary}
                  </p>

                  {/* Representative Workflows Badges */}
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 mb-6 space-y-2">
                    <div className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider">
                      Representative Workflows:
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {wf.representativeWorkflows.slice(0, 4).map((r, rIdx) => (
                        <span
                          key={rIdx}
                          className="px-2 py-0.5 rounded text-[11px] font-mono bg-white border border-slate-200 text-slate-700"
                        >
                          {r.name}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Hard Metrics Row */}
                  <div className="grid grid-cols-3 gap-2 text-center p-3 rounded-xl bg-blue-50/40 border border-blue-100/60 mb-8 font-mono text-xs">
                    {wf.hardMetrics.map((hm, hIdx) => (
                      <div key={hIdx} className="px-1">
                        <div className="font-bold text-[#1637F5] text-sm">{hm.achieved}</div>
                        <div className="text-[10px] text-slate-500 truncate">{hm.metric}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                  <Link href={`/workflows/${wf.slug}`}>
                    <Button
                      variant="primary"
                      size="sm"
                      rightIcon={<Icon name="arrow-right" size={14} />}
                      className="font-bold"
                    >
                      Explore {wf.shortTitle}
                    </Button>
                  </Link>
                  <Link
                    href={`/workflows/${wf.slug}`}
                    className="text-xs font-mono font-bold text-slate-400 hover:text-[#1637F5] transition-colors"
                  >
                    View 10-Section Architecture →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. The Sensible Automation Model */}
      <section className="py-20 px-4 sm:px-6 bg-[#08090C] text-white border-t border-white/10">
        <div className="max-w-[1100px] mx-auto text-center">
          <Kicker variant="dark" icon={<Icon name="scale" size={15} />}>
            Operating Philosophy
          </Kicker>
          <Heading level="h2" dark className="mb-4 max-w-3xl mx-auto text-3xl md:text-4xl font-black">
            Sensible Automation Across Every Department
          </Heading>
          <Text variant="lead" dark className="max-w-2xl mx-auto mb-12 text-slate-400">
            We divide work into deterministic execution, probabilistic reasoning, and human judgment. The objective is not maximum autonomy—it is appropriate automation.
          </Text>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <div className="font-mono text-xs font-bold text-blue-400 mb-2 uppercase">
                Deterministic Code Tasks
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Fixed & Mathematical</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Reconciliations, schema validations, calendar slot dispatch, and system-of-record updates. Executed via deterministic code with zero hallucination risk.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <div className="font-mono text-xs font-bold text-purple-400 mb-2 uppercase">
                Probabilistic AI Tasks
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Natural Language & Context</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Multi-page document parsing, intent classification, customer history synthesis, draft preparation, and anomaly triage.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <div className="font-mono text-xs font-bold text-amber-400 mb-2 uppercase">
                Human Review Gates
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Consequential Judgment</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                High-stakes financial approvals, contract liability exceptions, personnel decisions, and commercial negotiations. Carried 100% by human operating leads.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Cross-Links to Capabilities & Insights */}
      <CrossLinksSection
        title="Capabilities That Power These Workflows"
        subtitle="Explore our 4 core engineering capability pillars and read verified implementation lessons."
        capabilitySlugs={["ai-coworkers", "ai-data-engineering", "ai-trust-and-governance"]}
        insightSlugs={["midmarket-b2b-saas-revops", "tier-1-fintech-recon", "state-of-enterprise-agent-readiness-2026"]}
      />

      {/* 5. Diagnostic CTA */}
      <DiagnosticCTA />
    </main>
  );
}
