import React from "react";
import Link from "next/link";
import { Icon } from "@bayesforce/ui";
import { PageHeader } from "../components/PageHeader";
import { DiagnosticCTA } from "../components/DiagnosticCTA";
import { INSIGHTS } from "../data/site-data";
import { InsightsFilterView } from "./InsightsFilterView";

export const metadata = {
  title: "Insights | What We're Learning About AI & the Work of Organizations | Bayesforce",
  description:
    "Research, implementation lessons, workflow playbooks, and practical guides from the work Bayesforce does with AI systems and organizations.",
};

export default function InsightsHubPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* 1. Page Header */}
      <PageHeader
        breadcrumbs={[{ label: "Insights" }]}
        kicker="Research & Knowledge Publication"
        kickerIcon="book-open"
        title="What we're learning about AI and the work of organizations."
        subtitle="Research, implementation lessons, workflow playbooks and practical guides from the work Bayesforce does with AI systems and organizations."
      />

      {/* 2. Four Publication Categories Hub */}
      <section className="py-12 px-4 sm:px-6 bg-slate-50/70 border-b border-slate-200">
        <div className="max-w-[1240px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Link
            href="/insights/case-studies"
            className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-emerald-300 hover:shadow-md transition-all group"
          >
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-3 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
              <Icon name="check-circle" size={20} />
            </div>
            <div className="text-base font-bold text-slate-900 group-hover:text-emerald-600 transition-colors mb-1">
              Case Studies
            </div>
            <p className="text-xs text-slate-500 leading-relaxed">
              What we actually built and what happened in production.
            </p>
          </Link>

          <Link
            href="/insights/playbooks"
            className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all group"
          >
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#1637F5] flex items-center justify-center mb-3 group-hover:bg-[#1637F5] group-hover:text-white transition-colors">
              <Icon name="code" size={20} />
            </div>
            <div className="text-base font-bold text-slate-900 group-hover:text-[#1637F5] transition-colors mb-1">
              Playbooks
            </div>
            <p className="text-xs text-slate-500 leading-relaxed">
              How Bayesforce approaches recurring engineering problems.
            </p>
          </Link>

          <Link
            href="/insights/reports"
            className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-purple-300 hover:shadow-md transition-all group"
          >
            <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-3 group-hover:bg-purple-600 group-hover:text-white transition-colors">
              <Icon name="activity" size={20} />
            </div>
            <div className="text-base font-bold text-slate-900 group-hover:text-purple-600 transition-colors mb-1">
              Reports
            </div>
            <p className="text-xs text-slate-500 leading-relaxed">
              What Bayesforce observes about the enterprise AI market.
            </p>
          </Link>

          <Link
            href="/insights/guides"
            className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-amber-300 hover:shadow-md transition-all group"
          >
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-3 group-hover:bg-amber-600 group-hover:text-white transition-colors">
              <Icon name="book-open" size={20} />
            </div>
            <div className="text-base font-bold text-slate-900 group-hover:text-amber-600 transition-colors mb-1">
              Guides
            </div>
            <p className="text-xs text-slate-500 leading-relaxed">
              Practical education around specific operational challenges.
            </p>
          </Link>
        </div>
      </section>

      {/* 3. Filterable Knowledge Publication Catalog */}
      <InsightsFilterView insights={INSIGHTS} />

      {/* 4. Diagnostic CTA */}
      <DiagnosticCTA />
    </main>
  );
}
