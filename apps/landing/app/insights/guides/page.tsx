import React from "react";
import Link from "next/link";
import { Heading, Text, Kicker, Icon, Button } from "@bayesforce/ui";
import { PageHeader } from "../../components/PageHeader";
import { DiagnosticCTA } from "../../components/DiagnosticCTA";
import { CrossLinksSection } from "../../components/CrossLinksSection";
import { INSIGHTS } from "../../data/site-data";

export const metadata = {
  title: "Practical Guides & Tooling | Bayesforce",
  description:
    "Practical education around specific operational tasks: mapping business workflows, evaluating AI pipelines, and engineering human-in-the-loop controls.",
};

export default function GuidesIndexPage() {
  const guides = INSIGHTS.filter((i) => i.type === "guides");

  return (
    <main className="min-h-screen bg-white">
      {/* 1. Header */}
      <PageHeader
        breadcrumbs={[
          { label: "Insights", href: "/insights" },
          { label: "Guides" },
        ]}
        kicker="Practical Education"
        kickerIcon="book-open"
        title="Practical Guides & Tooling"
        subtitle="Practical education around specific problems. Step-by-step guidance for workflow discovery, prompt injection defenses, and evaluation set construction."
      />

      {/* 2. Guides Grid */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {guides.map((g) => (
            <div
              key={g.slug}
              className="p-8 rounded-3xl border border-slate-200 bg-white shadow-sm hover:shadow-xl hover:border-amber-300 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-1 rounded-md text-xs font-mono font-bold bg-amber-50 text-amber-800 border border-amber-200">
                    {g.kicker}
                  </span>
                  <span className="text-xs font-mono text-slate-400">{g.readTime}</span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 leading-snug mb-3 group-hover:text-amber-700 transition-colors">
                  <Link href={`/insights/guides/${g.slug}`}>{g.title}</Link>
                </h3>

                <p className="text-slate-600 leading-relaxed text-sm mb-6">
                  {g.summary}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-6">
                  {g.tags.map((tag) => (
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
                <Link href={`/insights/guides/${g.slug}`}>
                  <Button variant="outline" size="sm" className="font-bold border-amber-200 text-amber-800 hover:bg-amber-50">
                    Read Guide →
                  </Button>
                </Link>
                <span className="text-xs font-mono text-slate-400">{g.publishedDate}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Cross Links */}
      <CrossLinksSection
        title="Associated Capabilities"
        subtitle="See how these guides apply to our core capability stack."
        capabilitySlugs={["ai-trust-and-governance", "ai-data-engineering", "ai-coworkers"]}
        workflowSlugs={["technology-ops", "legal-risk-and-compliance"]}
      />

      {/* 4. Diagnostic CTA */}
      <DiagnosticCTA />
    </main>
  );
}
