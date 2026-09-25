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
    title: "AI FinOps & Cost Monitoring",
    category: "Observability & FinOps",
    description: "Granular token attribution per workflow with semantic caching and dynamic model routing.",
    metric: "58% Cost Optimization",
    icon: "trending-up",
  },
  {
    title: "Permissions & Access Controls",
    category: "Security & Governance",
    description: "Role-based authorization ensuring agents only access records the human user is cleared to view.",
    metric: "Least-Privilege Scopes",
    icon: "lock",
  },
  {
    title: "Agent Boundaries & Sandboxing",
    category: "Security & Governance",
    description: "eBPF-isolated microVM sandboxes preventing unauthorized system modifications or escape.",
    metric: "Isolated Runtime",
    icon: "shield-check",
  },
  {
    title: "Data Protection & Privacy",
    category: "Security & Governance",
    description: "Zero data retention on foundation models; automatic PII/PCI masking before tokenization.",
    metric: "Zero Model Training",
    icon: "shield-check",
  },
  {
    title: "Security & Red-Teaming Testing",
    category: "Security & Governance",
    description: "Continuous automated adversarial probing defending against direct and indirect prompt injection.",
    metric: "99.96% Attack Block Rate",
    icon: "zap",
  },
  {
    title: "Governance & Policy Enforcement",
    category: "Security & Governance",
    description: "Deterministic guardrail firewalls ensuring outputs strictly follow corporate compliance rules.",
    metric: "Deterministic Enforcement",
    icon: "scale",
  },
  {
    title: "Human Approval & Auditability",
    category: "Security & Governance",
    description: "1-click review gates for high-stakes actions with immutable, timestamped audit logs.",
    metric: "SOC2 & ISO Ready",
    icon: "users",
  },
];

export const ProductionTrustGrid: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filtered = activeCategory === "all"
    ? TRUST_FEATURES
    : TRUST_FEATURES.filter((f) => f.category === activeCategory);

  return (
    <section className="py-20 px-4 sm:px-6 bg-slate-50/70 border-t border-slate-200">
      <div className="max-w-[1240px] mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <Kicker variant="cobalt" icon={<Icon name="shield-check" size={15} />}>
            Production Engineering
          </Kicker>
          <Heading level="h2" className="mb-3 text-3xl md:text-4xl">
            AI that works beyond the demo.
          </Heading>
          <Text variant="lead">
            Production AI needs to be measurable, observable, controllable, secure, and economically viable.
          </Text>

          {/* Filter Pill Navigation */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            <button
              onClick={() => setActiveCategory("all")}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all ${
                activeCategory === "all"
                  ? "bg-[#1637F5] text-white shadow-sm"
                  : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-100"
              }`}
            >
              All Controls ({TRUST_FEATURES.length})
            </button>
            <button
              onClick={() => setActiveCategory("Evaluations & Quality")}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all ${
                activeCategory === "Evaluations & Quality"
                  ? "bg-[#1637F5] text-white shadow-sm"
                  : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-100"
              }`}
            >
              Evals & Quality
            </button>
            <button
              onClick={() => setActiveCategory("Observability & FinOps")}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all ${
                activeCategory === "Observability & FinOps"
                  ? "bg-[#1637F5] text-white shadow-sm"
                  : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-100"
              }`}
            >
              Observability & FinOps
            </button>
            <button
              onClick={() => setActiveCategory("Security & Governance")}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all ${
                activeCategory === "Security & Governance"
                  ? "bg-[#1637F5] text-white shadow-sm"
                  : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-100"
              }`}
            >
              Security & Governance
            </button>
          </div>
        </div>

        {/* 12-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item, idx) => (
            <div
              key={idx}
              className="p-6 md:p-8 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#1637F5] flex items-center justify-center border border-blue-100 group-hover:bg-[#1637F5] group-hover:text-white transition-all">
                    <Icon name={item.icon as any} size={20} />
                  </div>
                  <span className="font-mono text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    {item.category.split(" ")[0]}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-[#1637F5] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between font-mono text-xs">
                <span className="text-slate-400">Standard:</span>
                <span className="font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
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
