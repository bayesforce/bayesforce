import React from "react";
import Link from "next/link";
import { Heading, Text, Kicker, Icon, Button } from "@bayesforce/ui";
import { PageHeader } from "../../components/PageHeader";
import { UniversalWorkflowDiagram } from "../../components/UniversalWorkflowDiagram";
import { DiagnosticCTA } from "../../components/DiagnosticCTA";
import { CrossLinksSection } from "../../components/CrossLinksSection";
import { CAPABILITIES } from "../../data/site-data";

export const metadata = {
  title: "AI Coworkers: AI Systems That Operate Across the Work | Bayesforce",
  description:
    "Bayesforce builds production-grade digital coworkers that understand context, use tools, coordinate deterministic and AI steps, and produce actions within defined boundaries.",
};

export default function AICoworkersPage() {
  const cap = CAPABILITIES.find((c) => c.slug === "ai-coworkers")!;

  const coreConcepts = [
    { title: "Agents", desc: "Autonomous reasoning entities with defined jobs and operating memory." },
    { title: "Workflow Orchestration", desc: "Hierarchical state machines coordinating multi-step task execution." },
    { title: "Tool & API Execution", desc: "Sandboxed environments safely mutating external software systems." },
    { title: "Deterministic Tasks", desc: "Fixed code execution for mathematical checks, schema validation, and SQL." },
    { title: "Probabilistic AI Tasks", desc: "Natural language extraction, synthesis, intent classification, and drafting." },
    { title: "Human-in-the-Loop", desc: "1-click review gates in Slack/Teams for consequential approvals." },
    { title: "System-of-Record Updates", desc: "Writing verified state back into Salesforce, NetSuite, SAP, and Jira." },
    { title: "Exception Handling", desc: "Automated routing of ambiguous edge cases with compiled diagnostic briefs." },
    { title: "Outcome Measurement", desc: "Real-time tracking of task cycle time, error rates, and operational throughput." },
    { title: "Continuous Improvement", desc: "Feedback ingestion loops that calibrate system prompts and evaluation suites." },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* 1. Page Header */}
      <PageHeader
        breadcrumbs={[
          { label: "What We Build", href: "/what-we-build" },
          { label: "AI Coworkers" },
        ]}
        kicker="Capability Pillar 02"
        kickerIcon="users"
        title="AI Coworkers"
        subtitle={cap.positioning}
      />

      {/* 2. Positioning & The Co-Worker Paradigm */}
      <section className="py-20 px-4 sm:px-6 border-b border-slate-200/80">
        <div className="max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Kicker variant="cobalt" icon={<Icon name="alert-circle" size={15} />}>
              Beyond Chatbots & Copilots
            </Kicker>
            <Heading level="h2" className="text-3xl font-black text-slate-900 leading-tight">
              AI systems that operate across the work.
            </Heading>
            <Text variant="body" className="text-slate-600 leading-relaxed text-base">
              An AI coworker is not merely a chatbot or copilot. It can understand context, reason over information, use tools, coordinate deterministic and AI-driven steps, and produce actions within defined boundaries.
            </Text>

            <div className="p-6 rounded-2xl bg-amber-50/80 border border-amber-200 text-amber-950 text-sm leading-relaxed space-y-2">
              <div className="font-bold flex items-center gap-2">
                <Icon name="scale" size={16} className="text-amber-600" />
                Key Operating Principle
              </div>
              <p className="font-semibold text-slate-900">
                The objective is not maximum autonomy. It is appropriate automation.
              </p>
            </div>
          </div>

          <div className="p-8 md:p-10 rounded-3xl bg-[#08090C] text-white border border-white/10 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-600/15 blur-[80px] rounded-full pointer-events-none" />
            <Kicker variant="dark" icon={<Icon name="users" size={15} />}>
              The Governed Coworker
            </Kicker>
            <h3 className="text-2xl font-bold text-white mb-4 mt-2">
              Autonomous Systems That Carry Routine Friction
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              {cap.bayesforceApproach}
            </p>
            <div className="space-y-3 pt-4 border-t border-white/10 font-mono text-xs text-slate-300">
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Task Automation:</span>
                <span className="text-emerald-400 font-bold">86.2% Autonomous Execution</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Execution Mode:</span>
                <span className="text-emerald-400 font-bold">LangGraph State Machine</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Human Gates:</span>
                <span className="text-emerald-400 font-bold">Interactive Slack / Teams</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Universal Workflow Diagram */}
      <section className="py-20 px-4 sm:px-6 bg-slate-50/70 border-b border-slate-200">
        <div className="max-w-[1240px] mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <Kicker variant="cobalt" icon={<Icon name="git-branch" size={15} />}>
              Execution Architecture
            </Kicker>
            <Heading level="h2" className="text-3xl font-black text-slate-900 mb-3">
              The 13-Stage Universal Workflow Architecture
            </Heading>
            <Text variant="lead">
              How AI coworkers coordinate deterministic steps, probabilistic reasoning, and human approvals.
            </Text>
          </div>

          <UniversalWorkflowDiagram />
        </div>
      </section>

      {/* 4. Core Concepts Grid */}
      <section className="py-20 px-4 sm:px-6 bg-white border-b border-slate-200">
        <div className="max-w-[1240px] mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Kicker variant="cobalt" icon={<Icon name="layers" size={15} />}>
              Core Concepts
            </Kicker>
            <Heading level="h2" className="text-3xl font-black text-slate-900 mb-3">
              10 Foundations of Production AI Coworkers
            </Heading>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {coreConcepts.map((concept, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-slate-50 border border-slate-200/90 shadow-sm hover:shadow-md hover:border-blue-300 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="font-mono text-xs font-bold text-[#1637F5] mb-2">
                    0{idx + 1}
                  </div>
                  <h4 className="text-base font-bold text-slate-900 mb-1">{concept.title}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{concept.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/workflows">
              <Button variant="primary" size="md" className="font-bold" rightIcon={<Icon name="arrow-right" size={14} />}>
                Explore workflows →
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Cross Links */}
      <CrossLinksSection
        title="Workflows Powered by AI Coworkers"
        subtitle="Explore how digital coworkers execute operations across Revenue, Customer Ops, Finance, and Supply."
        workflowSlugs={cap.relatedWorkflows}
        insightSlugs={cap.relatedInsights}
      />

      {/* 6. CTA */}
      <DiagnosticCTA
        title="Have a recurring workflow ready for an AI coworker?"
        subtitle="Show us how your team operates today. We'll map what can be carried autonomously and what should remain human."
      />
    </main>
  );
}
