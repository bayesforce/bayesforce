"use client";

import React, { useState } from "react";
import { Icon, Heading, Text, Kicker } from "@bayesforce/ui";

interface TrustFeature {
  title: string;
  category: "Evaluations & Quality" | "Observability & FinOps" | "Security & Governance";
  description: string;
  metric: string;
  icon: string;
}

const TRUST_FEATURES: TrustFeature[] = [
  {
    title: "Workflow-Specific Evals",
    category: "Evaluations & Quality",
    description: "Continuous benchmarking against domain-specific task correctness metrics and ground truth.",
    metric: "99.4% Factual Precision",
    icon: "check-circle",
  },
  {
    title: "Regression Suites",
    category: "Evaluations & Quality",
    description: "Automated CI/CD test gates preventing prompt drift or model degradation before deployment.",
    metric: "250+ Golden Test Cases",
    icon: "code",
  },
  {
    title: "AI Observability & Tracing",
    category: "Observability & FinOps",
    description: "Distributed trace trees for every agent thought, context retrieval, and decision step.",
    metric: "Sub-second Trace Latency",
    icon: "activity",
  },
  {
    title: "Failure Monitoring & Alerts",
    category: "Observability & FinOps",
    description: "Real-time exception detection, automated fallback routing, and on-call alerting.",
    metric: "0 Silent Failures",
    icon: "alert-circle",
  },
  {
    title: "Tool-Call Tracing",
    category: "Observability & FinOps",
    description: "Cryptographic logging of all external API mutations, database queries, and webhooks.",
    metric: "100% Mutation Lineage",
    icon: "terminal",
  },
  {
    title: "Cost & Token Tracking (FinOps)",
    category: "Observability & FinOps",
    description: "Granular cost attribution per workflow run, token caching ratios, and ROI analytics.",
    metric: "40% Cost Optimization",
    icon: "chart-bar",
  },
  {
    title: "Model Routing & Fallbacks",
    category: "Observability & FinOps",
    description: "Dynamic routing across frontier models, private SLMs, and deterministic rules for cost/speed.",
    metric: "<250ms Routing Overhead",
    icon: "git-branch",
  },
  {
    title: "Deterministic Guardrails",
    category: "Security & Governance",
    description: "Hard constraints that prevent hallucinated schema writes, unauthorized actions, and scope creep.",
    metric: "0 Constraint Breaches",
    icon: "shield-check",
  },
  {
    title: "Audit Logs & Version History",
    category: "Security & Governance",
    description: "Immutable versioning of prompt templates, model versions, datasets, and human overrides.",
    metric: "SOC2 & ISO 27001 Ready",
    icon: "file-text",
  },
  {
    title: "Role-Based Access Control (RBAC)",
    category: "Security & Governance",
    description: "Enterprise SSO, fine-grained action permissions, and credential vault isolation.",
    metric: "Zero-Trust Architecture",
    icon: "lock",
  },
  {
    title: "Data Sovereignty & Privacy",
    category: "Security & Governance",
    description: "Zero training on client data agreements, private VPC deployment, and encrypted state storage.",
    metric: "100% On-Prem / VPC",
    icon: "database",
  },
  {
    title: "Human Approval Gates",
    category: "Security & Governance",
    description: "Configurable confidence thresholds that route ambiguous edge-cases to human supervisors in Slack/Teams.",
    metric: "Configurable Thresholds",
    icon: "users",
  },
];

export const ProductionTrustGrid: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filtered =
    activeCategory === "all"
      ? TRUST_FEATURES
      : TRUST_FEATURES.filter((f) => f.category === activeCategory);

  return (
    <section className="py-20 md:py-28 px-4 sm:px-6 bg-[#11151B] text-white border-t border-[#2A3441] relative overflow-hidden">
      {/* Subtle radial ambient illumination */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[300px] bg-[#013EFA]/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-[1240px] mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Kicker variant="dark" icon={<Icon name="shield-check" size={15} />}>
            Production Integrity Standard
          </Kicker>
          <Heading level="h2" dark className="mb-3 text-3xl md:text-4xl text-[#F8FAFC]">
            Production Trust &amp; Governance
          </Heading>
          <Text variant="lead" dark className="text-slate-400">
            Enterprise operations cannot run on probabilistic bets. We wrap every workflow in rigorous evaluation harnesses, observability, and deterministic controls.
          </Text>

          {/* Filter Pill Navigation */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            <button
              onClick={() => setActiveCategory("all")}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeCategory === "all"
                  ? "bg-[#013EFA] text-white shadow-xs"
                  : "bg-[#161B23] text-slate-400 border border-[#2A3441] hover:text-white hover:border-slate-500"
              }`}
            >
              All Controls ({TRUST_FEATURES.length})
            </button>
            <button
              onClick={() => setActiveCategory("Evaluations & Quality")}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeCategory === "Evaluations & Quality"
                  ? "bg-[#013EFA] text-white shadow-xs"
                  : "bg-[#161B23] text-slate-400 border border-[#2A3441] hover:text-white hover:border-slate-500"
              }`}
            >
              Evals &amp; Quality
            </button>
            <button
              onClick={() => setActiveCategory("Observability & FinOps")}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeCategory === "Observability & FinOps"
                  ? "bg-[#013EFA] text-white shadow-xs"
                  : "bg-[#161B23] text-slate-400 border border-[#2A3441] hover:text-white hover:border-slate-500"
              }`}
            >
              Observability &amp; FinOps
            </button>
            <button
              onClick={() => setActiveCategory("Security & Governance")}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeCategory === "Security & Governance"
                  ? "bg-[#013EFA] text-white shadow-xs"
                  : "bg-[#161B23] text-slate-400 border border-[#2A3441] hover:text-white hover:border-slate-500"
              }`}
            >
              Security &amp; Governance
            </button>
          </div>
        </div>

        {/* 12-Card Grid: Dark Cards (Section 11: bg #161B23, border #2A3441, text #F8FAFC) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item, idx) => (
            <div
              key={idx}
              className="p-6 md:p-8 rounded-2xl bg-[#161B23] border border-[#2A3441] hover:border-[#013EFA]/60 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.05] text-[#7DB0FF] border border-[#2A3441] flex items-center justify-center group-hover:bg-[#013EFA] group-hover:text-white group-hover:border-[#013EFA] transition-all">
                    <Icon name={item.icon as any} size={20} />
                  </div>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    {item.category.split(" ")[0]}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#F8FAFC] mb-2 group-hover:text-[#7DB0FF] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed mb-6 font-normal">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#2A3441] flex items-center justify-between text-xs">
                <span className="text-slate-400 font-medium">Standard:</span>
                <span className="font-semibold text-emerald-300 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 rounded-md">
                  {item.metric}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
