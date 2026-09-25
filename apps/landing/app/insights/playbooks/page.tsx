import React from "react";
import Link from "next/link";
import { Heading, Text, Kicker, Icon, Button } from "@bayesforce/ui";
import { PageHeader } from "../../components/PageHeader";
import { DiagnosticCTA } from "../../components/DiagnosticCTA";
import { CrossLinksSection } from "../../components/CrossLinksSection";
import { INSIGHTS } from "../../data/site-data";

export const metadata = {
  title: "Engineering & Operating Playbooks | Bayesforce",
  description:
    "How Bayesforce approaches recurring problems. Production-grade playbooks for AI workflow design, finance exceptions, customer operations, and human-in-the-loop controls.",
};

export default function PlaybooksIndexPage() {
  const playbooks = INSIGHTS.filter((i) => i.type === "playbooks");

  return (
    <main className="min-h-screen bg-white">
      {/* 1. Header */}
      <PageHeader
        breadcrumbs={[
          { label: "Insights", href: "/insights" },
          { label: "Playbooks" },
        ]}
        kicker="Reusable Methodology"
        kickerIcon="code"
        title="Engineering & Operating Playbooks"
        subtitle="How Bayesforce approaches recurring problems. Reusable intellectual property, workflow evaluation patterns, and production guardrails."
      />

      {/* 2. Playbooks Grid */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {playbooks.map((pb) => (
            <div
              key={pb.slug}
              className="p-8 md:p-10 rounded-3xl border border-slate-200 bg-white shadow-sm hover:shadow-xl hover:border-blue-300 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-1 rounded-md text-xs font-mono font-bold bg-blue-50 text-blue-700 border border-blue-200">
                    {pb.kicker}
                  </span>
                  <span className="text-xs font-mono text-slate-400">{pb.readTime}</span>
                </div>

                <h3 className="text-2xl font-black text-slate-900 leading-tight mb-3 group-hover:text-[#1637F5] transition-colors">
                  <Link href={`/insights/playbooks/${pb.slug}`}>{pb.title}</Link>
                </h3>

                <p className="text-slate-600 leading-relaxed text-sm mb-6">
                  {pb.summary}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-6">
                  {pb.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-100 text-slate-600"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                <Link href={`/insights/playbooks/${pb.slug}`}>
                  <Button variant="primary" size="sm" className="font-bold">
                    Read Playbook →
                  </Button>
                </Link>
                <span className="text-xs font-mono text-slate-400">Published: {pb.publishedDate}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Cross Links */}
      <CrossLinksSection
        title="Applied Capabilities"
        subtitle="Explore the capabilities powering these engineering playbooks."
        capabilitySlugs={["ai-data-engineering", "ai-coworkers", "ai-trust-and-governance"]}
        workflowSlugs={["technology-ops", "finance-and-accounting", "customer-ops"]}
      />

      {/* 4. Diagnostic CTA */}
      <DiagnosticCTA />
    </main>
  );
}
