"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Heading, Text, Kicker, Icon, Button } from "@bayesforce/ui";
import { PageHeader } from "./PageHeader";
import { DiagnosticCTA } from "./DiagnosticCTA";
import { CrossLinksSection } from "./CrossLinksSection";
import { WorkflowItem, WORKFLOWS, CAPABILITIES } from "../data/site-data";

export interface WorkflowDetailTemplateProps {
  workflow: WorkflowItem;
}

export const WorkflowDetailTemplate: React.FC<WorkflowDetailTemplateProps> = ({ workflow }) => {
  const [activeTab, setActiveTab] = useState<"deterministic" | "probabilistic" | "human">("deterministic");

  const currentIndex = WORKFLOWS.findIndex((w) => w.slug === workflow.slug);
  const prevWorkflow = currentIndex > 0 ? WORKFLOWS[currentIndex - 1] : null;
  const nextWorkflow = currentIndex < WORKFLOWS.length - 1 ? WORKFLOWS[currentIndex + 1] : null;

  return (
    <main className="min-h-screen bg-white">
      {/* 1. Hero */}
      <PageHeader
        breadcrumbs={[
          { label: "Workflows", href: "/workflows" },
          { label: workflow.shortTitle },
        ]}
        kicker={workflow.kicker}
        kickerIcon={workflow.icon}
        title={workflow.title}
        subtitle={workflow.heroHeadline}
      />

      {/* 2. What happens in this part of the organization? */}
      <section className="py-16 px-4 sm:px-6 border-b border-slate-200/80">
        <div className="max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-4">
            <Kicker variant="cobalt" icon={<Icon name="compass" size={15} />}>
              Operational Context
            </Kicker>
            <Heading level="h2" className="text-2xl md:text-3xl font-black text-slate-900 leading-tight">
              What happens in {workflow.shortTitle}?
            </Heading>
            <p className="text-slate-700 text-base md:text-lg leading-relaxed">
              {workflow.whatHappens}
            </p>
          </div>

          <div className="lg:col-span-5 p-6 md:p-8 rounded-3xl bg-slate-50 border border-slate-200 space-y-4">
            <div className="font-sans text-xs font-bold uppercase tracking-wider text-slate-400">
              Department Classification
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#013EFA]/10 text-[#013EFA] flex items-center justify-center border border-[#013EFA]/20">
                <Icon name={workflow.icon as any} size={20} />
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-900">{workflow.shortTitle}</h4>
                <span className="text-xs font-sans text-emerald-700 font-bold bg-emerald-50 px-2.5 py-0.5 rounded border border-emerald-200">
                  {workflow.category}
                </span>
              </div>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed pt-2 border-t border-slate-200">
              {workflow.summary}
            </p>
          </div>
        </div>
      </section>

      {/* 3. Where human machinery accumulates */}
      <section className="py-16 px-4 sm:px-6 bg-slate-50/70 border-b border-slate-200/80">
        <div className="max-w-[1240px] mx-auto">
          <div className="max-w-3xl mb-10">
            <Kicker variant="cobalt" icon={<Icon name="alert-circle" size={15} />}>
              Operational Friction
            </Kicker>
            <Heading level="h2" className="text-2xl md:text-3xl font-black text-slate-900 mb-3">
              Where human machinery accumulates
            </Heading>
            <Text variant="lead">
              The hidden tax of manual searching, cross-system copying, reconciliation, and status chasing.
            </Text>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {workflow.whereMachineryAccumulates.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3 flex flex-col justify-between"
              >
                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-red-50 text-red-600 font-sans font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 border border-red-100">
                    0{idx + 1}
                  </span>
                  <p className="text-sm text-slate-700 leading-relaxed font-medium">
                    {item}
                  </p>
                </div>
                <div className="pt-2 text-xs font-sans font-semibold text-slate-400">
                  Friction Vector #{idx + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Representative workflows */}
      <section className="py-20 px-4 sm:px-6 bg-white border-b border-slate-200/80">
        <div className="max-w-[1240px] mx-auto">
          <div className="max-w-3xl mb-12">
            <Kicker variant="cobalt" icon={<Icon name="git-branch" size={15} />}>
              Concrete Automations
            </Kicker>
            <Heading level="h2" className="text-3xl font-black text-slate-900 mb-3">
              Representative Workflows in {workflow.shortTitle}
            </Heading>
            <Text variant="lead">
              Specific operations Bayesforce automates, coordinates, and governs.
            </Text>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {workflow.representativeWorkflows.map((rep, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl border border-slate-200/90 hover:border-blue-300 hover:shadow-lg transition-all bg-white flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-sans text-xs font-bold text-[#013EFA] bg-[#013EFA]/10 px-2.5 py-0.5 rounded border border-[#013EFA]/20">
                      Workflow 0{idx + 1}
                    </span>
                    <span
                      className={`px-2.5 py-0.5 rounded text-xs font-sans font-bold ${
                        rep.mode === "Deterministic"
                          ? "bg-blue-50 text-[#013EFA] border border-blue-200"
                          : rep.mode === "Probabilistic AI"
                          ? "bg-purple-50 text-purple-700 border border-purple-200"
                          : "bg-amber-50 text-amber-800 border border-amber-200"
                      }`}
                    >
                      {rep.mode}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-[#013EFA] transition-colors">
                    {rep.name}
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    {rep.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. How Bayesforce approaches them & 6. Relevant Capabilities */}
      <section className="py-20 px-4 sm:px-6 bg-[#11151B] text-white border-t border-[#2A3441]">
        <div className="max-w-[1240px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
            <div className="lg:col-span-6 space-y-4">
              <Kicker variant="dark" icon={<Icon name="sparkles" size={15} />}>
                Engineering Architecture
              </Kicker>
              <h2 className="text-3xl md:text-4xl font-black text-white">
                How Bayesforce Approaches {workflow.shortTitle}
              </h2>
              <p className="text-slate-300 text-base leading-relaxed">
                {workflow.approach}
              </p>
            </div>

            <div className="lg:col-span-6 p-6 md:p-8 rounded-3xl bg-white/5 border border-white/10 space-y-4">
              <div className="font-sans text-xs font-bold uppercase tracking-wider text-blue-400">
                Core Capabilities Utilized
              </div>
              <div className="space-y-3">
                {workflow.relevantCapabilities.map((capSlug) => {
                  const cap = CAPABILITIES.find((c) => c.slug === capSlug);
                  if (!cap) return null;
                  return (
                    <Link
                      key={cap.slug}
                      href={`/what-we-build/${cap.slug}`}
                      className="p-4 rounded-xl bg-white/5 border border-white/5 hover:border-blue-400 hover:bg-white/10 transition-all flex items-center justify-between group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center">
                          <Icon name={cap.icon as any} size={16} />
                        </div>
                        <div>
                          <div className="text-sm font-bold text-white group-hover:text-blue-300 transition-colors">
                            {cap.shortTitle}
                          </div>
                          <div className="text-xs text-slate-400">{cap.positioning}</div>
                        </div>
                      </div>
                      <Icon name="arrow-right" size={14} className="text-slate-400 group-hover:text-blue-300 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

          {/* 7. Relevant Systems */}
          <div className="pt-10 border-t border-white/10">
            <div className="font-sans text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
              Relevant Systems & Integrations Layered for {workflow.shortTitle}:
            </div>
            <div className="flex flex-wrap gap-2.5">
              {workflow.relevantSystems.map((sys, idx) => (
                <span
                  key={idx}
                  className="px-3.5 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs font-sans font-medium text-slate-200"
                >
                  {sys}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8. Human vs AI Responsibility Matrix */}
      <section className="py-20 px-4 sm:px-6 bg-slate-50/70 border-b border-slate-200">
        <div className="max-w-[1240px] mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <Kicker variant="cobalt" icon={<Icon name="scale" size={15} />}>
              Sensible Automation Boundaries
            </Kicker>
            <Heading level="h2" className="text-3xl font-black text-slate-900 mb-3">
              Human vs. AI Responsibility
            </Heading>
            <Text variant="lead">
              The objective is not maximum autonomy. It is appropriate automation.
            </Text>

            {/* Matrix Tabs */}
            <div className="flex flex-wrap justify-center gap-2 mt-6">
              <button
                onClick={() => setActiveTab("deterministic")}
                className={`px-4 py-2 rounded-xl text-xs font-sans font-bold transition-all ${
                  activeTab === "deterministic"
                    ? "bg-[#013EFA] text-white shadow-sm"
                    : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-100"
                }`}
              >
                Deterministic Code Tasks ({workflow.humanVsAi.deterministicTasks.length})
              </button>
              <button
                onClick={() => setActiveTab("probabilistic")}
                className={`px-4 py-2 rounded-xl text-xs font-sans font-bold transition-all ${
                  activeTab === "probabilistic"
                    ? "bg-purple-600 text-white shadow-sm"
                    : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-100"
                }`}
              >
                Probabilistic AI Reasoning ({workflow.humanVsAi.probabilisticAiTasks.length})
              </button>
              <button
                onClick={() => setActiveTab("human")}
                className={`px-4 py-2 rounded-xl text-xs font-sans font-bold transition-all ${
                  activeTab === "human"
                    ? "bg-amber-600 text-white shadow-sm"
                    : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-100"
                }`}
              >
                Human Review & Judgment ({workflow.humanVsAi.humanResponsibility.length})
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Box 1: Deterministic Tasks */}
            <div
              className={`p-6 rounded-2xl border transition-all ${
                activeTab === "deterministic"
                  ? "bg-white border-blue-400 ring-2 ring-blue-400/20 shadow-lg"
                  : "bg-white/80 border-slate-200 opacity-80"
              }`}
            >
              <div className="flex items-center gap-2 font-sans text-xs font-bold text-[#013EFA] uppercase mb-4 pb-2 border-b border-slate-100">
                <Icon name="code" size={16} />
                Deterministic Tasks (Code & Rules)
              </div>
              <ul className="space-y-2.5 text-xs md:text-sm text-slate-700 font-medium">
                {workflow.humanVsAi.deterministicTasks.map((t, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Icon name="check" size={14} className="text-[#013EFA] shrink-0 mt-0.5" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Box 2: Probabilistic AI */}
            <div
              className={`p-6 rounded-2xl border transition-all ${
                activeTab === "probabilistic"
                  ? "bg-white border-purple-400 ring-2 ring-purple-400/20 shadow-lg"
                  : "bg-white/80 border-slate-200 opacity-80"
              }`}
            >
              <div className="flex items-center gap-2 font-sans text-xs font-bold text-purple-700 uppercase mb-4 pb-2 border-b border-slate-100">
                <Icon name="sparkles" size={16} />
                Probabilistic AI Tasks (Reasoning)
              </div>
              <ul className="space-y-2.5 text-xs md:text-sm text-slate-700 font-medium">
                {workflow.humanVsAi.probabilisticAiTasks.map((t, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Icon name="check" size={14} className="text-purple-600 shrink-0 mt-0.5" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Box 3: Human Responsibility */}
            <div
              className={`p-6 rounded-2xl border transition-all ${
                activeTab === "human"
                  ? "bg-white border-amber-400 ring-2 ring-amber-400/20 shadow-lg"
                  : "bg-white/80 border-slate-200 opacity-80"
              }`}
            >
              <div className="flex items-center gap-2 font-sans text-xs font-bold text-amber-700 uppercase mb-4 pb-2 border-b border-slate-100">
                <Icon name="users" size={16} />
                Human Review (Consequential Judgment)
              </div>
              <ul className="space-y-2.5 text-xs md:text-sm text-slate-700 font-medium">
                {workflow.humanVsAi.humanResponsibility.map((t, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Icon name="shield-check" size={14} className="text-amber-600 shrink-0 mt-0.5" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Relevant Insights / Case Studies */}
      <CrossLinksSection
        title={`Evidence & Lessons for ${workflow.shortTitle}`}
        subtitle="Explore verified case studies, engineering blueprints, and practical guides."
        capabilitySlugs={workflow.applicableCapabilities}
        insightSlugs={workflow.relatedInsights}
      />

      {/* Navigation Pager */}
      <section className="py-6 px-4 sm:px-6 bg-slate-100 border-t border-slate-200">
        <div className="max-w-[1240px] mx-auto flex items-center justify-between">
          {prevWorkflow ? (
            <Link
              href={`/workflows/${prevWorkflow.slug}`}
              className="text-xs font-sans font-bold text-slate-600 hover:text-[#013EFA] flex items-center gap-1.5 transition-colors"
            >
              <Icon name="arrow-left" size={13} />
              <span>Prev: {prevWorkflow.shortTitle}</span>
            </Link>
          ) : (
            <Link
              href="/workflows"
              className="text-xs font-sans font-bold text-slate-600 hover:text-[#013EFA] flex items-center gap-1.5 transition-colors"
            >
              <Icon name="arrow-left" size={13} />
              <span>All Workflows</span>
            </Link>
          )}

          {nextWorkflow ? (
            <Link
              href={`/workflows/${nextWorkflow.slug}`}
              className="text-xs font-sans font-bold text-[#013EFA] hover:underline flex items-center gap-1.5 transition-colors"
            >
              <span>Next: {nextWorkflow.shortTitle}</span>
              <Icon name="arrow-right" size={13} />
            </Link>
          ) : (
            <Link
              href="/insights"
              className="text-xs font-sans font-bold text-[#013EFA] hover:underline flex items-center gap-1.5 transition-colors"
            >
              <span>Explore Insights</span>
              <Icon name="arrow-right" size={13} />
            </Link>
          )}
        </div>
      </section>

      {/* 10. CTA */}
      <DiagnosticCTA
        title={`Have a ${workflow.shortTitle} workflow that shouldn't require this much human effort?`}
        subtitle="Show us how the work happens today. We'll help identify what can be automated, what should remain human, and what it takes to make the workflow work in production."
      />
    </main>
  );
};
