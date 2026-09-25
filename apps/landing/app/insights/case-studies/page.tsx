import React from "react";
import Link from "next/link";
import { Heading, Text, Kicker, Icon, Button } from "@bayesforce/ui";
import { PageHeader } from "../../components/PageHeader";
import { DiagnosticCTA } from "../../components/DiagnosticCTA";
import { CrossLinksSection } from "../../components/CrossLinksSection";
import { INSIGHTS } from "../../data/site-data";

export const metadata = {
  title: "Case Studies | Bayesforce Proof of Work",
  description:
    "What we actually built and what happened. Empirical case studies documenting real-world AI capability deployments across enterprise operations.",
};

export default function CaseStudiesIndexPage() {
  const caseStudies = INSIGHTS.filter((i) => i.type === "case-studies");

  return (
    <main className="min-h-screen bg-white">
      {/* 1. Header */}
      <PageHeader
        breadcrumbs={[
          { label: "Insights", href: "/insights" },
          { label: "Case Studies" },
        ]}
        kicker="Proof of Work"
        kickerIcon="check-circle"
        title="Production AI Case Studies"
        subtitle="What we actually built and what happened. Explore how Bayesforce deployed governed AI workflows, eliminated backlogs, and measured outcomes in live production."
      />

      {/* 2. Case Studies List */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-[1240px] mx-auto space-y-12">
          {caseStudies.map((cs) => (
            <div
              key={cs.slug}
              className="p-8 md:p-12 rounded-3xl border border-slate-200 bg-white shadow-sm hover:shadow-xl hover:border-emerald-300 transition-all grid grid-cols-1 lg:grid-cols-3 gap-8 items-center"
            >
              <div className="lg:col-span-2 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="px-2.5 py-1 rounded-md text-xs font-mono font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                    {cs.kicker}
                  </span>
                  <span className="text-xs font-mono text-slate-400">{cs.readTime}</span>
                </div>

                <h3 className="text-2xl md:text-3xl font-black text-slate-900 leading-tight">
                  <Link href={`/insights/case-studies/${cs.slug}`} className="hover:text-[#1637F5] transition-colors">
                    {cs.title}
                  </Link>
                </h3>

                <p className="text-slate-600 leading-relaxed text-sm md:text-base font-normal">
                  {cs.summary}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {cs.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 rounded text-xs font-mono bg-slate-100 text-slate-600"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Metrics Card on Right */}
              <div className="p-6 rounded-2xl bg-slate-900 text-white space-y-4 border border-slate-800">
                <div className="text-xs font-mono uppercase font-bold text-blue-400 flex items-center gap-2">
                  <Icon name="activity" size={14} /> Measured Outcome Delta
                </div>
                <div className="space-y-3">
                  {cs.metricsDelta?.map((m, idx) => (
                    <div key={idx} className="border-b border-slate-800 pb-2.5 last:border-0 last:pb-0">
                      <div className="font-mono text-xl font-bold text-emerald-400">{m.value}</div>
                      <div className="text-xs text-slate-400 font-mono">{m.label}</div>
                    </div>
                  ))}
                </div>
                <Link href={`/insights/case-studies/${cs.slug}`} className="block pt-2">
                  <Button variant="primary" size="sm" className="w-full justify-center font-bold">
                    Read Case Study →
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Cross Links */}
      <CrossLinksSection
        title="Explore Playbooks & Research"
        subtitle="See the architectural blueprints and operational methods behind these case studies."
        insightSlugs={["ai-workflow-design-playbook", "finance-exception-automation-playbook", "human-in-the-loop-ai-playbook"]}
      />

      {/* 4. Diagnostic CTA */}
      <DiagnosticCTA />
    </main>
  );
}
