import React from "react";
import Link from "next/link";
import { Heading, Text, Kicker, Icon, Button } from "@bayesforce/ui";
import { PageHeader } from "../../components/PageHeader";
import { ProductionTrustGrid } from "../../components/ProductionTrustGrid";
import { DiagnosticCTA } from "../../components/DiagnosticCTA";
import { CrossLinksSection } from "../../components/CrossLinksSection";
import { CAPABILITIES } from "../../data/site-data";

export const metadata = {
  title: "AI Trust & Governance: Making AI Work Beyond the Demo | Bayesforce",
  description:
    "Production AI needs to be measurable, observable, controllable, secure, and economically viable: Evals & Quality, Observability, FinOps, and Safety Governance.",
};

export default function AITrustAndGovernancePage() {
  const cap = CAPABILITIES.find((c) => c.slug === "ai-trust-and-governance")!;

  return (
    <main className="min-h-screen bg-white">
      {/* 1. Page Header */}
      <PageHeader
        breadcrumbs={[
          { label: "What We Build", href: "/what-we-build" },
          { label: "AI Trust & Governance" },
        ]}
        kicker="Capability Pillar 03"
        kickerIcon="shield-check"
        title="AI Trust & Governance"
        subtitle={cap.positioning}
      />

      {/* 2. Positioning & Narrative */}
      <section className="py-20 px-4 sm:px-6 border-b border-slate-200/80">
        <div className="max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Kicker variant="cobalt" icon={<Icon name="shield-check" size={15} />}>
              The Production Imperative
            </Kicker>
            <Heading level="h2" className="text-3xl font-black text-slate-900 leading-tight">
              AI should work beyond the demo.
            </Heading>
            <Text variant="body" className="text-slate-600 leading-relaxed text-base">
              Enterprise AI cannot rely on proof-of-concept enthusiasm. Production AI needs to be measurable, observable, controllable, secure, and economically viable.
            </Text>
            <div className="p-6 rounded-2xl bg-emerald-50/80 border border-emerald-200 text-emerald-950 text-sm leading-relaxed space-y-2">
              <div className="font-bold flex items-center gap-2 text-emerald-800">
                <Icon name="check-circle" size={16} />
                The Statistical Standard
              </div>
              <p>
                We replace intuition with Bayesian statistical inference: golden evaluation sets, regression CI/CD gates, distributed tool tracing, and token FinOps.
              </p>
            </div>
          </div>

          <div className="p-8 md:p-10 rounded-3xl bg-[#08090C] text-white border border-white/10 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-600/15 blur-[80px] rounded-full pointer-events-none" />
            <Kicker variant="dark" icon={<Icon name="lock" size={15} />}>
              Enterprise Safeguards
            </Kicker>
            <h3 className="text-2xl font-bold text-white mb-4 mt-2">
              Measurable, Observable & Compliant
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              {cap.bayesforceApproach}
            </p>
            <div className="space-y-3 pt-4 border-t border-white/10 font-mono text-xs text-slate-300">
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Injection Defense:</span>
                <span className="text-emerald-400 font-bold">99.96% Block Rate</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Hallucination Rate:</span>
                <span className="text-emerald-400 font-bold">&lt; 0.3% Verified Grounding</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Token Cost Optimization:</span>
                <span className="text-emerald-400 font-bold">58.4% Savings</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. 4 Core Pillars from Memo */}
      <section className="py-20 px-4 sm:px-6 bg-slate-50/70">
        <div className="max-w-[1240px] mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Kicker variant="cobalt" icon={<Icon name="layers" size={15} />}>
              Governance Sub-Systems
            </Kicker>
            <Heading level="h2" className="text-3xl font-black text-slate-900">
              Four Pillars of Enterprise AI Trust
            </Heading>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cap.keyPillars.map((pillar, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 font-mono font-bold text-xs flex items-center justify-center border border-emerald-200">
                      0{idx + 1}
                    </span>
                    <span className="font-mono text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                      Control Sub-System
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-2">{pillar.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">{pillar.description}</p>
                </div>

                <div className="space-y-2.5 pt-4 border-t border-slate-100 text-xs text-slate-700">
                  {pillar.details.map((detail, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2">
                      <Icon name="check" size={14} className="text-emerald-600 shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Complete 12-Feature Production Trust Grid */}
      <ProductionTrustGrid />

      {/* 5. Cross Links */}
      <CrossLinksSection
        title="Workflows Requiring Rigorous Trust & Governance"
        subtitle="See how statistical evaluations and guardrails protect mission-critical operations in Legal, Finance, and Tech Ops."
        workflowSlugs={cap.relatedWorkflows}
        insightSlugs={cap.relatedInsights}
      />

      {/* 6. CTA */}
      <DiagnosticCTA
        title="Ready to build AI that can operate in production?"
        subtitle="Show us your workflow. We'll design the evaluation harnesses, guardrails, and audit trails required for enterprise deployment."
      />
    </main>
  );
}
