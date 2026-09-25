import React from "react";
import Link from "next/link";
import { Heading, Text, Kicker, Icon, Button } from "@bayesforce/ui";
import { PageHeader } from "./PageHeader";
import { DiagnosticCTA } from "./DiagnosticCTA";
import { CrossLinksSection } from "./CrossLinksSection";
import { InsightItem, INSIGHTS } from "../data/site-data";

export interface InsightArticleTemplateProps {
  insight: InsightItem;
}

export const InsightArticleTemplate: React.FC<InsightArticleTemplateProps> = ({ insight }) => {
  // Find related or next/prev insights of the same type
  const typeInsights = INSIGHTS.filter((i) => i.type === insight.type);
  const currentIndex = typeInsights.findIndex((i) => i.slug === insight.slug);
  const prevInsight = currentIndex > 0 ? typeInsights[currentIndex - 1] : null;
  const nextInsight = currentIndex < typeInsights.length - 1 ? typeInsights[currentIndex + 1] : null;

  return (
    <main className="min-h-screen bg-white">
      {/* 1. Header with breadcrumbs */}
      <PageHeader
        breadcrumbs={[
          { label: "Insights", href: "/insights" },
          { label: insight.typeLabel, href: `/insights/${insight.type}` },
          { label: insight.title },
        ]}
        kicker={`${insight.typeLabel} • ${insight.kicker}`}
        kickerIcon="file-text"
        title={insight.title}
        subtitle={insight.subtitle}
      >
        {/* Author and Date metadata bar */}
        <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-slate-200/60 text-xs font-mono text-slate-500">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-[#1637F5] text-white flex items-center justify-center font-bold text-[10px]">
              SU
            </div>
            <span className="font-bold text-slate-800">{insight.author.name}</span>
            <span className="text-slate-400">• {insight.author.role}</span>
          </div>
          <div className="flex items-center gap-4">
            <span>Published: {insight.publishedDate}</span>
            <span>•</span>
            <span>{insight.readTime}</span>
          </div>
        </div>
      </PageHeader>

      {/* 2. Key Metrics Delta Banner (If Present) */}
      {insight.metricsDelta && insight.metricsDelta.length > 0 && (
        <section className="py-8 px-4 sm:px-6 bg-slate-900 text-white border-b border-slate-800">
          <div className="max-w-[1240px] mx-auto">
            <div className="flex items-center gap-2 font-mono text-xs font-bold text-blue-400 uppercase tracking-wider mb-4">
              <Icon name="activity" size={15} /> Verified Operational Delta
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {insight.metricsDelta.map((m, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="font-mono text-xl md:text-2xl font-black text-emerald-400">
                    {m.value}
                  </div>
                  <div className="text-xs text-slate-400 mt-1 font-mono">{m.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 3. Main Article Body */}
      <article className="py-16 md:py-20 px-4 sm:px-6">
        <div className="max-w-[860px] mx-auto">
          {/* Executive Abstract Box */}
          <div className="p-8 rounded-3xl bg-blue-50/50 border border-blue-100 mb-14">
            <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-[#1637F5] mb-2">
              Executive Abstract
            </h3>
            <p className="text-slate-800 text-base leading-relaxed font-medium">
              {insight.summary}
            </p>
            <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-blue-100/80">
              {insight.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded-full text-xs font-mono font-medium bg-white text-slate-700 border border-slate-200"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Structured Content Sections */}
          <div className="space-y-14">
            {insight.contentSections.map((sec, sIdx) => (
              <section key={sIdx} className="space-y-6">
                <Heading level="h2" className="text-2xl md:text-3xl font-black text-slate-900 leading-tight">
                  {sec.heading}
                </Heading>

                {sec.lead && (
                  <p className="text-lg text-slate-700 font-semibold leading-relaxed">
                    {sec.lead}
                  </p>
                )}

                {sec.paragraphs.map((p, pIdx) => (
                  <p key={pIdx} className="text-base text-slate-600 leading-relaxed">
                    {p}
                  </p>
                ))}

                {/* Callout Box */}
                {sec.callout && (
                  <div
                    className={`p-6 rounded-2xl border text-sm leading-relaxed my-6 ${
                      sec.callout.type === "warning"
                        ? "bg-amber-50 border-amber-200 text-amber-950"
                        : sec.callout.type === "tip"
                        ? "bg-emerald-50 border-emerald-200 text-emerald-950"
                        : "bg-blue-50 border-blue-200 text-blue-950"
                    }`}
                  >
                    <div className="font-bold flex items-center gap-2 mb-1.5 font-mono text-xs uppercase">
                      <Icon name="bolt" size={15} />
                      Strategic Note
                    </div>
                    <p>{sec.callout.text}</p>
                  </div>
                )}

                {/* Code Block */}
                {sec.codeBlock && (
                  <div className="my-6 rounded-2xl bg-slate-900 text-slate-100 overflow-hidden border border-slate-800 shadow-xl">
                    {sec.codeBlock.caption && (
                      <div className="py-2.5 px-5 bg-slate-950 border-b border-slate-800 flex items-center justify-between text-xs font-mono text-slate-400">
                        <span>{sec.codeBlock.caption}</span>
                        <span className="uppercase text-blue-400 font-bold">{sec.codeBlock.language}</span>
                      </div>
                    )}
                    <pre className="p-6 font-mono text-xs md:text-sm overflow-x-auto leading-relaxed text-blue-200">
                      <code>{sec.codeBlock.code}</code>
                    </pre>
                  </div>
                )}

                {/* Structured Table */}
                {sec.tableData && (
                  <div className="overflow-x-auto my-6">
                    <table className="w-full bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm text-left">
                      <thead>
                        <tr className="bg-slate-100/80 border-b border-slate-200 font-mono text-xs uppercase text-slate-600">
                          {sec.tableData.headers.map((h, hIdx) => (
                            <th key={hIdx} className="py-3 px-5 font-bold">
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 text-xs md:text-sm">
                        {sec.tableData.rows.map((r, rIdx) => (
                          <tr key={rIdx} className="hover:bg-slate-50 transition-colors">
                            {r.map((cell, cIdx) => (
                              <td key={cIdx} className="py-3 px-5 text-slate-700">
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </section>
            ))}
          </div>

          {/* Author Card */}
          <div className="mt-16 pt-10 border-t border-slate-200 flex items-start gap-5 bg-slate-50 p-6 rounded-2xl">
            <div className="w-12 h-12 rounded-2xl bg-[#1637F5] text-white flex items-center justify-center font-bold font-mono text-base shrink-0">
              SU
            </div>
            <div>
              <div className="font-bold text-slate-900 text-base">{insight.author.name}</div>
              <div className="text-xs font-mono text-slate-500 mb-2">{insight.author.role}</div>
              <p className="text-xs text-slate-600 leading-relaxed">
                MSc Statistics (University of Edinburgh). Ex-Morgan Stanley AI & Quantzig. Founder & Principal Systems Architect at BayesForce, engineering high-trust digital labor systems for modern enterprises.
              </p>
            </div>
          </div>
        </div>
      </article>

      {/* 4. Cross-Links to Related Workflows & Capabilities */}
      <CrossLinksSection
        title="Related Capabilities & Workflows"
        subtitle="See how this insight connects to our engineering stack and operational domains."
        capabilitySlugs={insight.relatedCapabilities}
        workflowSlugs={insight.relatedWorkflows}
      />

      {/* 5. Pagination */}
      <section className="py-8 px-4 sm:px-6 bg-slate-100 border-t border-slate-200">
        <div className="max-w-[1240px] mx-auto flex items-center justify-between">
          {prevInsight ? (
            <Link
              href={`/insights/${prevInsight.type}/${prevInsight.slug}`}
              className="text-xs font-mono font-bold text-slate-600 hover:text-[#1637F5] flex items-center gap-1.5"
            >
              ← Prev: {prevInsight.title}
            </Link>
          ) : (
            <Link
              href={`/insights/${insight.type}`}
              className="text-xs font-mono font-bold text-slate-600 hover:text-[#1637F5]"
            >
              ← All {insight.typeLabel}s
            </Link>
          )}

          {nextInsight ? (
            <Link
              href={`/insights/${nextInsight.type}/${nextInsight.slug}`}
              className="text-xs font-mono font-bold text-[#1637F5] hover:underline flex items-center gap-1.5"
            >
              Next: {nextInsight.title} →
            </Link>
          ) : (
            <Link
              href="/insights"
              className="text-xs font-mono font-bold text-[#1637F5] hover:underline"
            >
              Explore All Insights →
            </Link>
          )}
        </div>
      </section>

      {/* 6. Diagnostic CTA */}
      <DiagnosticCTA />
    </main>
  );
};
