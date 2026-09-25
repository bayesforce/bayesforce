import React from "react";
import Link from "next/link";
import { Heading, Text, Kicker, Icon, Button } from "@bayesforce/ui";
import { PageHeader } from "../../components/PageHeader";
import { DiagnosticCTA } from "../../components/DiagnosticCTA";
import { CrossLinksSection } from "../../components/CrossLinksSection";
import { INSIGHTS } from "../../data/site-data";

export const metadata = {
  title: "Research Reports & Industry Theses | Bayesforce",
  description:
    "What Bayesforce observes about the market. Rigorous empirical research on enterprise AI operations, workflow readiness, and digital labor economics.",
};

export default function ReportsIndexPage() {
  const reports = INSIGHTS.filter((i) => i.type === "reports");

  return (
    <main className="min-h-screen bg-white">
      {/* 1. Header */}
      <PageHeader
        breadcrumbs={[
          { label: "Insights", href: "/insights" },
          { label: "Reports" },
        ]}
        kicker="Market Research"
        kickerIcon="activity"
        title="Market Research & Strategic Theses"
        subtitle="What Bayesforce observes about the market. Rigorous analysis on enterprise AI operations, workflow maturity, and the economics of autonomous agents."
      />

      {/* 2. Reports Grid */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {reports.map((rep) => (
            <div
              key={rep.slug}
              className="p-8 rounded-3xl border border-slate-200 bg-white shadow-sm hover:shadow-xl hover:border-purple-300 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-1 rounded-md text-xs font-mono font-bold bg-purple-50 text-purple-700 border border-purple-200">
                    {rep.kicker}
                  </span>
                  <span className="text-xs font-mono text-slate-400">{rep.readTime}</span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 leading-snug mb-3 group-hover:text-purple-700 transition-colors">
                  <Link href={`/insights/reports/${rep.slug}`}>{rep.title}</Link>
                </h3>

                <p className="text-slate-600 leading-relaxed text-sm mb-6">
                  {rep.summary}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-6">
                  {rep.tags.map((tag) => (
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
                <Link href={`/insights/reports/${rep.slug}`}>
                  <Button variant="outline" size="sm" className="font-bold border-purple-200 text-purple-700 hover:bg-purple-50">
                    Read Report →
                  </Button>
                </Link>
                <span className="text-xs font-mono text-slate-400">{rep.publishedDate}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Cross Links */}
      <CrossLinksSection
        title="Explore Related Workflows"
        subtitle="See the operational domains analyzed across these market research studies."
        workflowSlugs={["business-ops", "revenue-ops", "legal-risk-and-compliance"]}
        capabilitySlugs={["ai-capability", "ai-trust-and-governance"]}
      />

      {/* 4. Diagnostic CTA */}
      <DiagnosticCTA />
    </main>
  );
}
