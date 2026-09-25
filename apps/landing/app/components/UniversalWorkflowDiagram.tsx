"use client";

import React, { useState } from "react";
import { Icon } from "@bayesforce/ui";

export interface WorkflowStage {
  step: number;
  name: string;
  category: "Trigger & Ingestion" | "Understanding & Context" | "Reasoning & Action" | "Governance & Closure";
  nature: "Deterministic" | "Probabilistic AI" | "Human Gate" | "Hybrid";
  description: string;
  example: string;
}

const STAGES: WorkflowStage[] = [
  {
    step: 1,
    name: "Trigger / Information arrives",
    category: "Trigger & Ingestion",
    nature: "Deterministic",
    description: "Inbound webhook, scheduled cron, document arrival in inbox, customer ticket, or system event.",
    example: "PDF invoice received via email; or new enterprise lead submits webform.",
  },
  {
    step: 2,
    name: "Ingest / Collect",
    category: "Trigger & Ingestion",
    nature: "Deterministic",
    description: "Raw data ingestion, file extraction, virus scanning, duplicate hashing, and initial payload normalization.",
    example: "SHA-256 duplicate check; layout extraction of multi-page PDF tables.",
  },
  {
    step: 3,
    name: "Understand / Classify",
    category: "Understanding & Context",
    nature: "Probabilistic AI",
    description: "Intent recognition, document taxonomy classification, language detection, and entity extraction.",
    example: "Identifies incoming agreement as vendor MSA under Delaware jurisdiction.",
  },
  {
    step: 4,
    name: "Retrieve context",
    category: "Understanding & Context",
    nature: "Hybrid",
    description: "Hybrid vector and graph retrieval querying transactional ERP, CRM, and historical records.",
    example: "Fetches matching purchase order, vendor rate card, and payment history.",
  },
  {
    step: 5,
    name: "Check / Validate",
    category: "Understanding & Context",
    nature: "Deterministic",
    description: "Deterministic schema validation, policy limits, permission check, and mathematical verification.",
    example: "Verifies PO line-item sums and checks spend authority threshold.",
  },
  {
    step: 6,
    name: "Reason / Decide",
    category: "Reasoning & Action",
    nature: "Probabilistic AI",
    description: "Multi-agent evaluation, anomaly detection, policy compliance analysis, and decision trade-offs.",
    example: "Analyzes clause deviation against corporate standard and drafts redlines.",
  },
  {
    step: 7,
    name: "Orchestrate",
    category: "Reasoning & Action",
    nature: "Deterministic",
    description: "State-machine task breakdown, assigning subtasks to worker agents or API execution queues.",
    example: "Dispatches CRM update to worker agent and creates parallel Slack approval card.",
  },
  {
    step: 8,
    name: "Execute actions",
    category: "Reasoning & Action",
    nature: "Deterministic",
    description: "Sandboxed tool and API execution mutating external endpoints or querying specialized databases.",
    example: "Posts balanced journal entry batch into ERP staging table.",
  },
  {
    step: 9,
    name: "Generate / Communicate",
    category: "Reasoning & Action",
    nature: "Probabilistic AI",
    description: "Drafting human-readable memos, emails, redlines, or decision briefs for stakeholder review.",
    example: "Drafts tailored executive discovery brief for Account Executive call.",
  },
  {
    step: 10,
    name: "Human review / Approval",
    category: "Governance & Closure",
    nature: "Human Gate",
    description: "Interactive 1-click human gate for consequential decisions, exceptions, or commercial commitments.",
    example: "Finance Controller reviews side-by-side diff in Slack and clicks 'Approve Batch'.",
  },
  {
    step: 11,
    name: "Update systems of record",
    category: "Governance & Closure",
    nature: "Deterministic",
    description: "Writing verified state back to core systems of record (Salesforce, SAP, NetSuite, Jira).",
    example: "Marks invoice as approved, updates General Ledger, and notifies supplier.",
  },
  {
    step: 12,
    name: "Measure outcome",
    category: "Governance & Closure",
    nature: "Deterministic",
    description: "Logging cycle time, token cost, accuracy delta, and exception rates into telemetry stores.",
    example: "Records 38-second resolution time vs. 4.5-hour baseline benchmark.",
  },
  {
    step: 13,
    name: "Learn / Improve",
    category: "Governance & Closure",
    nature: "Hybrid",
    description: "Cataloging edge cases, updating golden evaluation datasets, and calibrating system prompts.",
    example: "Adds novel vendor invoice table format into automated regression test suite.",
  },
];

export const UniversalWorkflowDiagram: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<"all" | "Deterministic" | "Probabilistic AI" | "Human Gate">("all");
  const [selectedStage, setSelectedStage] = useState<WorkflowStage>(STAGES[0]);

  const filteredStages = STAGES.filter((s) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "Human Gate") return s.nature === "Human Gate";
    return s.nature === activeFilter || s.nature === "Hybrid";
  });

  return (
    <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xl overflow-hidden">
      {/* Header & Filter Controls */}
      <div className="p-6 md:p-8 bg-slate-900 text-white border-b border-slate-800 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-blue-400 uppercase tracking-wider mb-2">
            <Icon name="git-branch" size={14} />
            The Bayesforce Universal Workflow
          </div>
          <h3 className="text-2xl font-black text-white">
            From Information Arriving to Action Being Completed
          </h3>
          <p className="text-slate-400 text-sm mt-1 max-w-2xl">
            A 13-stage linear execution pipeline. Some stages are deterministic, others require probabilistic AI, and consequential decisions remain human.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center gap-2 shrink-0">
          <button
            onClick={() => setActiveFilter("all")}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
              activeFilter === "all"
                ? "bg-[#1637F5] text-white"
                : "bg-white/10 text-slate-300 hover:bg-white/20"
            }`}
          >
            All 13 Stages
          </button>
          <button
            onClick={() => setActiveFilter("Deterministic")}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
              activeFilter === "Deterministic"
                ? "bg-blue-600 text-white"
                : "bg-white/10 text-slate-300 hover:bg-white/20"
            }`}
          >
            Deterministic ({STAGES.filter((s) => s.nature === "Deterministic").length})
          </button>
          <button
            onClick={() => setActiveFilter("Probabilistic AI")}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
              activeFilter === "Probabilistic AI"
                ? "bg-purple-600 text-white"
                : "bg-white/10 text-slate-300 hover:bg-white/20"
            }`}
          >
            Probabilistic AI ({STAGES.filter((s) => s.nature === "Probabilistic AI").length})
          </button>
          <button
            onClick={() => setActiveFilter("Human Gate")}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
              activeFilter === "Human Gate"
                ? "bg-amber-600 text-white"
                : "bg-white/10 text-slate-300 hover:bg-white/20"
            }`}
          >
            Human Gate ({STAGES.filter((s) => s.nature === "Human Gate").length})
          </button>
        </div>
      </div>

      {/* Interactive Workflow Visualizer Grid */}
      <div className="p-6 md:p-8 bg-slate-50/50">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Scrollable Stages List / Flow */}
          <div className="lg:col-span-7 space-y-2.5 max-h-[540px] overflow-y-auto pr-2 custom-scrollbar">
            {filteredStages.map((stage) => {
              const isSelected = selectedStage.step === stage.step;
              return (
                <div
                  key={stage.step}
                  onClick={() => setSelectedStage(stage)}
                  className={`p-3.5 rounded-xl border transition-all cursor-pointer flex items-center justify-between gap-3 ${
                    isSelected
                      ? "bg-white border-[#1637F5] shadow-md ring-1 ring-[#1637F5]"
                      : "bg-white border-slate-200/80 hover:border-blue-300 hover:bg-blue-50/20"
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <span
                      className={`w-7 h-7 rounded-lg font-mono text-xs font-bold flex items-center justify-center shrink-0 ${
                        isSelected
                          ? "bg-[#1637F5] text-white"
                          : "bg-slate-100 text-slate-700"
                      }`}
                    >
                      {stage.step < 10 ? `0${stage.step}` : stage.step}
                    </span>
                    <div className="min-w-0">
                      <div className="text-xs font-bold text-slate-900 truncate">
                        {stage.name}
                      </div>
                      <div className="text-[11px] text-slate-500 font-mono truncate">
                        {stage.category}
                      </div>
                    </div>
                  </div>

                  <span
                    className={`px-2.5 py-0.5 rounded-md text-[10px] font-mono font-bold shrink-0 ${
                      stage.nature === "Deterministic"
                        ? "bg-blue-50 text-blue-700 border border-blue-200"
                        : stage.nature === "Probabilistic AI"
                        ? "bg-purple-50 text-purple-700 border border-purple-200"
                        : stage.nature === "Human Gate"
                        ? "bg-amber-50 text-amber-700 border border-amber-200"
                        : "bg-emerald-50 text-emerald-700 border border-emerald-200"
                    }`}
                  >
                    {stage.nature}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Right: Selected Stage Deep-Dive Card */}
          <div className="lg:col-span-5 bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-lg space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-xl bg-blue-50 text-[#1637F5] font-mono font-black text-lg flex items-center justify-center border border-blue-100">
                  {selectedStage.step < 10 ? `0${selectedStage.step}` : selectedStage.step}
                </span>
                <div>
                  <span className="font-mono text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                    {selectedStage.category}
                  </span>
                  <h4 className="text-lg font-black text-slate-900 leading-tight">
                    {selectedStage.name}
                  </h4>
                </div>
              </div>
              <span
                className={`px-2.5 py-1 rounded-md text-xs font-mono font-bold ${
                  selectedStage.nature === "Deterministic"
                    ? "bg-blue-50 text-blue-700 border border-blue-200"
                    : selectedStage.nature === "Probabilistic AI"
                    ? "bg-purple-50 text-purple-700 border border-purple-200"
                    : selectedStage.nature === "Human Gate"
                    ? "bg-amber-50 text-amber-700 border border-amber-200"
                    : "bg-emerald-50 text-emerald-700 border border-emerald-200"
                }`}
              >
                {selectedStage.nature}
              </span>
            </div>

            <div>
              <h5 className="font-mono text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                Stage Execution Architecture
              </h5>
              <p className="text-sm text-slate-700 leading-relaxed">
                {selectedStage.description}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1.5">
              <div className="font-mono text-xs font-bold text-slate-900 flex items-center gap-1.5">
                <Icon name="check-circle" size={14} className="text-emerald-600" />
                Live Workflow Example
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                {selectedStage.example}
              </p>
            </div>

            <div className="pt-2 border-t border-slate-100 text-xs text-slate-500 font-mono">
              Sensible automation: Not all workflows need all 13 stages.
            </div>
          </div>
        </div>
      </div>

      {/* Philosophy Callout Footer */}
      <div className="p-5 md:p-6 bg-blue-50/70 border-t border-blue-100 flex items-center gap-4 text-xs md:text-sm text-slate-800">
        <div className="w-8 h-8 rounded-lg bg-[#1637F5] text-white flex items-center justify-center shrink-0">
          <Icon name="sparkles" size={16} />
        </div>
        <p className="leading-relaxed">
          <strong className="text-slate-900 font-bold">Important Philosophy:</strong> Not every workflow requires every stage. Some stages are deterministic, others require probabilistic AI, and some decisions remain human. The objective is sensible automation, not maximum autonomy.
        </p>
      </div>
    </div>
  );
};
