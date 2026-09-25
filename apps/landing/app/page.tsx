"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Heading,
  Text,
  Kicker,
  Icon,
  Button,
} from "@bayesforce/ui";
import { CAPABILITIES, WORKFLOWS, INSIGHTS } from "./data/site-data";
import { UniversalWorkflowDiagram } from "./components/UniversalWorkflowDiagram";
import { ExistingSystemsArchitecture } from "./components/ExistingSystemsArchitecture";
import { ProductionTrustGrid } from "./components/ProductionTrustGrid";
import { EngagementProcess } from "./components/EngagementProcess";
import { DiagnosticCTA } from "./components/DiagnosticCTA";

export default function LandingPage() {
  const [activeWorkflowTab, setActiveWorkflowTab] = useState(WORKFLOWS[0].slug);

  const activeWorkflow = WORKFLOWS.find((w) => w.slug === activeWorkflowTab) || WORKFLOWS[0];

  return (
    <main className="min-h-screen bg-white">
      {/* =========================================================================
          1. HERO SECTION
          ========================================================================= */}
      <section className="relative py-24 md:py-32 px-4 sm:px-6 bg-[#08090C] text-white overflow-hidden border-b border-white/10">
        {/* Background ambient lighting */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-[#1637F5]/20 blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 right-10 w-[400px] h-[300px] bg-amber-500/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-[1240px] mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-mono text-blue-300">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              AI Capabilities for Modern Operations
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.05]">
              Make More Happen.
            </h1>

            <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto font-normal">
              Bayesforce builds AI capabilities inside organizations, turning existing systems, data and workflows into intelligent operations.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact">
                <Button
                  variant="primary"
                  size="lg"
                  className="font-bold shadow-xl shadow-blue-500/25 w-full sm:w-auto"
                  rightIcon={<Icon name="arrow-right" size={16} />}
                >
                  Show us your workflow →
                </Button>
              </Link>
              <Link href="/what-we-build">
                <Button
                  variant="secondary"
                  size="lg"
                  className="border-white/20 text-white hover:bg-white/10 font-bold w-full sm:w-auto"
                  leftIcon={<Icon name="layers" size={16} />}
                >
                  See what we build →
                </Button>
              </Link>
            </div>
          </div>

          {/* Real-time System Preview Terminal Card */}
          <div className="mt-16 max-w-4xl mx-auto bg-slate-900/90 rounded-2xl border border-white/15 shadow-2xl p-5 md:p-6 backdrop-blur-md">
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10 text-xs font-mono text-slate-400">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                <span className="text-slate-300 font-bold ml-2">Bayesforce Action Layer // Real-Time Execution</span>
              </div>
              <span className="text-emerald-400">STATUS: PRODUCTION ACTIVE</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-mono">
              <div className="p-3 rounded-xl bg-white/5 border border-white/5 space-y-1">
                <div className="text-blue-400 font-bold">01. INGEST & CONTEXT</div>
                <div className="text-slate-300">Reconciled 14 ERP invoices & POs across NetSuite and banking statements.</div>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/5 space-y-1">
                <div className="text-purple-400 font-bold">02. REASON & VALIDATE</div>
                <div className="text-slate-300">Identified ₹42L freight variance anomaly; drafted vendor dispute packet.</div>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/5 space-y-1">
                <div className="text-emerald-400 font-bold">03. HUMAN-APPROVED ACTION</div>
                <div className="text-slate-300">1-click controller sign-off in Slack; auto-posted balanced batch to General Ledger.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. WHY BAYESFORCE EXISTS
          ========================================================================= */}
      <section className="py-20 md:py-28 px-4 sm:px-6 bg-white border-b border-slate-200">
        <div className="max-w-[900px] mx-auto space-y-8 text-slate-700">
          <Kicker variant="cobalt" icon={<Icon name="alert-circle" size={15} />}>
            The Operational Reality
          </Kicker>

          <Heading level="h2" className="text-3xl md:text-5xl font-black text-slate-900 leading-[1.15]">
            Your people shouldn&apos;t have to be the integration layer.
          </Heading>

          <p className="text-lg md:text-xl leading-relaxed text-slate-700">
            Organizations already have CRMs, ERPs, databases, helpdesks, documents, email, chat, project systems, and BI tools. Yet capable people still spend their days manually searching, reconciling, coordinating, reporting, following up, and copying data between systems.
          </p>

          <p className="text-base md:text-lg leading-relaxed text-slate-600">
            We built software systems that record work rather than carrying it. The salesperson who understands the customer spends hours updating CRM fields. The controller hunting through PDFs spends weeks closing books. The operator waiting for three handoffs spends half the week in coordination meetings.
          </p>

          {/* Core Belief Callout Card */}
          <div className="p-8 md:p-10 rounded-3xl bg-blue-50/80 border-2 border-blue-200/80 text-slate-900 space-y-3 shadow-sm">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#1637F5] block">
              Core Conviction
            </span>
            <blockquote className="text-xl md:text-2xl font-black text-slate-900 leading-snug">
              &ldquo;Systems should carry more of the machinery of an organization so its people can carry more of its ambition.&rdquo;
            </blockquote>
            <p className="text-sm text-slate-600 leading-relaxed pt-2">
              The goal is not organizations without people. The goal is organizations that make their people capable of far more.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. WHAT BAYESFORCE DOES (WHAT WE BUILD)
          ========================================================================= */}
      <section className="py-20 md:py-28 px-4 sm:px-6 bg-slate-50/70 border-b border-slate-200">
        <div className="max-w-[1240px] mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Kicker variant="cobalt" icon={<Icon name="layers" size={15} />}>
              Engineered Capabilities
            </Kicker>
            <Heading level="h2" className="mb-3 text-3xl md:text-4xl font-black">
              We build AI capabilities inside organizations.
            </Heading>
            <Text variant="lead">
              Three engineering layers to operate across your workflows, plus full knowledge transfer to build in-house.
            </Text>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {CAPABILITIES.map((cap, index) => (
              <div
                key={cap.slug}
                className="p-7 rounded-3xl border border-slate-200/90 bg-white shadow-sm hover:shadow-xl hover:border-blue-300 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-blue-50 text-[#1637F5] flex items-center justify-center border border-blue-100 group-hover:bg-[#1637F5] group-hover:text-white transition-all">
                      <Icon name={cap.icon as any} size={22} />
                    </div>
                    <span className="font-mono text-xs font-bold text-slate-400">0{index + 1}</span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#1637F5] transition-colors mb-2">
                    {cap.shortTitle}
                  </h3>

                  <p className="text-xs font-mono font-bold text-blue-600 mb-3">
                    {cap.positioning}
                  </p>

                  <p className="text-xs text-slate-600 leading-relaxed mb-6">
                    {cap.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <Link
                    href={`/what-we-build/${cap.slug}`}
                    className="text-xs font-bold text-[#1637F5] hover:underline flex items-center justify-between"
                  >
                    <span>Explore {cap.shortTitle}</span>
                    <Icon name="arrow-right" size={13} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/what-we-build">
              <Button variant="primary" size="md" className="font-bold" rightIcon={<Icon name="arrow-right" size={14} />}>
                Explore what we build →
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. EXISTING SYSTEMS STAY. WORKFLOWS GET SMARTER.
          ========================================================================= */}
      <section className="py-20 md:py-28 px-4 sm:px-6 bg-white border-b border-slate-200">
        <div className="max-w-[1240px] mx-auto">
          <ExistingSystemsArchitecture />
        </div>
      </section>

      {/* =========================================================================
          5. UNIVERSAL WORKFLOW DIAGRAM
          ========================================================================= */}
      <section className="py-20 md:py-28 px-4 sm:px-6 bg-slate-50/70 border-b border-slate-200">
        <div className="max-w-[1240px] mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <Kicker variant="cobalt" icon={<Icon name="git-branch" size={15} />}>
              The Execution Pipeline
            </Kicker>
            <Heading level="h2" className="mb-3 text-3xl md:text-4xl font-black">
              From information arriving to action being completed.
            </Heading>
            <Text variant="lead">
              A structured 13-stage workflow standard layered across your business operations.
            </Text>
          </div>

          <UniversalWorkflowDiagram />
        </div>
      </section>

      {/* =========================================================================
          6. WHAT CAN BE AUTOMATED? (8 WORKFLOW FAMILIES)
          ========================================================================= */}
      <section className="py-20 md:py-28 px-4 sm:px-6 bg-white border-b border-slate-200">
        <div className="max-w-[1240px] mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <Kicker variant="cobalt" icon={<Icon name="cpu" size={15} />}>
              Operational Domains
            </Kicker>
            <Heading level="h2" className="mb-3 text-3xl md:text-4xl font-black">
              What can be automated?
            </Heading>
            <Text variant="lead">
              AI capabilities applied to high-friction operational workflows across the organization.
            </Text>

            {/* Workflow Category Tabs */}
            <div className="flex flex-wrap justify-center gap-2 mt-8">
              {WORKFLOWS.map((wf) => (
                <button
                  key={wf.slug}
                  onClick={() => setActiveWorkflowTab(wf.slug)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-mono font-bold transition-all ${
                    activeWorkflowTab === wf.slug
                      ? "bg-[#1637F5] text-white shadow-md"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                  }`}
                >
                  {wf.shortTitle}
                </button>
              ))}
            </div>
          </div>

          {/* Active Workflow Spotlight Card */}
          <div className="p-8 md:p-12 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-12">
            <div className="lg:col-span-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#1637F5] flex items-center justify-center border border-blue-100">
                  <Icon name={activeWorkflow.icon as any} size={20} />
                </div>
                <div>
                  <span className="font-mono text-xs font-bold text-blue-600 uppercase">
                    {activeWorkflow.category}
                  </span>
                  <h3 className="text-2xl font-black text-slate-900">{activeWorkflow.title}</h3>
                </div>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed">
                {activeWorkflow.summary}
              </p>

              <div className="space-y-2 pt-2">
                <div className="font-mono text-xs font-bold uppercase tracking-wider text-slate-400">
                  Representative Automated Workflows:
                </div>
                <div className="flex flex-wrap gap-2">
                  {activeWorkflow.representativeWorkflows.slice(0, 4).map((r, i) => (
                    <span key={i} className="px-2.5 py-1 rounded-md bg-white border border-slate-200 text-xs font-mono text-slate-700">
                      {r.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 p-6 md:p-8 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4">
              <div className="font-mono text-xs font-bold uppercase tracking-wider text-slate-400">
                Operational Delta Benchmark
              </div>
              <div className="grid grid-cols-3 gap-3 text-center">
                {activeWorkflow.hardMetrics.map((m, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-blue-50/50 border border-blue-100">
                    <div className="font-mono text-base font-black text-[#1637F5]">{m.achieved}</div>
                    <div className="text-[10px] text-slate-500 font-mono mt-0.5 truncate">{m.metric}</div>
                  </div>
                ))}
              </div>
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-500 font-mono">
                  Systems: {activeWorkflow.relevantSystems.slice(0, 3).join(", ")}
                </span>
                <Link href={`/workflows/${activeWorkflow.slug}`}>
                  <Button variant="outline" size="sm" className="font-bold">
                    View {activeWorkflow.shortTitle} Details →
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link href="/workflows">
              <Button variant="outline" size="md" className="font-bold">
                Explore All 8 Operational Workflow Families →
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          7. PRODUCTION TRUST (EVALS, TRACING, FINOPS, GOVERNANCE)
          ========================================================================= */}
      <ProductionTrustGrid />

      {/* =========================================================================
          8. HOW BAYESFORCE ENGAGES
          ========================================================================= */}
      <EngagementProcess />

      {/* =========================================================================
          9. PROOF (CASE STUDIES & PLAYBOOKS)
          ========================================================================= */}
      <section className="py-20 md:py-28 px-4 sm:px-6 bg-slate-50/70 border-t border-slate-200">
        <div className="max-w-[1240px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
            <div>
              <Kicker variant="cobalt" icon={<Icon name="check-circle" size={15} />}>
                Empirical Proof & Lessons
              </Kicker>
              <Heading level="h2" className="text-3xl md:text-4xl font-black">
                What Bayesforce Has Learned and Built
              </Heading>
            </div>
            <Link href="/insights" className="text-sm font-bold text-[#1637F5] hover:underline flex items-center gap-1.5">
              Explore All Insights <Icon name="arrow-right" size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {INSIGHTS.slice(0, 3).map((item) => (
              <Link
                key={item.slug}
                href={`/insights/${item.type}/${item.slug}`}
                className="group p-7 rounded-3xl border border-slate-200/90 hover:border-blue-300 hover:shadow-xl transition-all flex flex-col justify-between bg-white"
              >
                <div>
                  <div className="flex items-center justify-between mb-3 text-xs font-mono">
                    <span className="font-bold text-[#1637F5] bg-blue-50 px-2 py-0.5 rounded border border-blue-100">
                      {item.typeLabel}
                    </span>
                    <span className="text-slate-400">{item.readTime}</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#1637F5] transition-colors mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed mb-6">
                    {item.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#1637F5]">
                  <span>Read Full Article</span>
                  <Icon name="arrow-right" size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          10. FINAL CTA (SHOW US YOUR WORKFLOW)
          ========================================================================= */}
      <DiagnosticCTA />
    </main>
  );
}
