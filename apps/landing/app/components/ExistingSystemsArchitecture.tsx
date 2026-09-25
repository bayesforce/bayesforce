"use client";

import React, { useState } from "react";
import { Icon, Heading, Text, Kicker } from "@bayesforce/ui";

const SYSTEM_NODES = [
  { id: "crm", name: "CRM Systems", examples: "Salesforce, HubSpot, Zoho", icon: "trending-up", color: "text-blue-500 bg-blue-50 border-blue-200" },
  { id: "erp", name: "ERP & Finance", examples: "NetSuite, SAP, QuickBooks", icon: "scale", color: "text-emerald-500 bg-emerald-50 border-emerald-200" },
  { id: "db", name: "Databases & Warehouses", examples: "Postgres, Snowflake, BigQuery", icon: "database", color: "text-purple-500 bg-purple-50 border-purple-200" },
  { id: "desk", name: "Helpdesks & Service", examples: "Zendesk, Intercom, ServiceNow", icon: "users", color: "text-amber-500 bg-amber-50 border-amber-200" },
  { id: "docs", name: "Document Stores", examples: "PDFs, Drive, SharePoint, Contracts", icon: "file-text", color: "text-rose-500 bg-rose-50 border-rose-200" },
  { id: "comm", name: "Email & Chat", examples: "Outlook, Gmail, Slack, Teams", icon: "mail", color: "text-indigo-500 bg-indigo-50 border-indigo-200" },
  { id: "proj", name: "Project Management", examples: "Jira, Asana, Linear, Monday", icon: "activity", color: "text-teal-500 bg-teal-50 border-teal-200" },
  { id: "bi", name: "BI & Telemetry", examples: "Mixpanel, Datadog, PowerBI", icon: "terminal", color: "text-cyan-500 bg-cyan-50 border-cyan-200" },
];

const BAYESFORCE_LAYERS = [
  {
    title: "1. AI Data Engineering Layer",
    desc: "Extracts, normalizes, and synchronizes data across messy records without changing your tools.",
    badge: "Information Layer",
  },
  {
    title: "2. Governed AI Coworkers",
    desc: "Executes multi-step reasoning, checks rules, executes tools, and prepares verified actions.",
    badge: "Action Layer",
  },
  {
    title: "3. Trust & Evaluation Guardrails",
    desc: "Enforces permissions, statistical evaluations, human review gates, and immutable audit logs.",
    badge: "Control Layer",
  },
];

export const ExistingSystemsArchitecture: React.FC = () => {
  const [activeSystem, setActiveSystem] = useState<string>("crm");

  return (
    <div className="bg-[#08090C] text-white rounded-3xl border border-white/10 shadow-2xl p-6 md:p-12 overflow-hidden relative">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-600/10 blur-[120px] pointer-events-none rounded-full" />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <Kicker variant="dark" icon={<Icon name="layers" size={15} />}>
          Integration & Architecture
        </Kicker>
        <Heading level="h2" dark className="mb-3 text-3xl md:text-4xl">
          Your systems stay. Your workflows get smarter.
        </Heading>
        <Text variant="lead" dark className="text-slate-400">
          Bayesforce is a system of action layered across the software systems your organization already uses every day.
        </Text>
      </div>

      {/* Architecture Visual Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
        {/* Left: Existing Systems Grid */}
        <div className="lg:col-span-4 space-y-2.5">
          <div className="font-mono text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-slate-400" />
            Your Systems of Record
          </div>

          <div className="grid grid-cols-2 gap-2">
            {SYSTEM_NODES.map((sys) => {
              const isActive = activeSystem === sys.id;
              return (
                <button
                  key={sys.id}
                  onClick={() => setActiveSystem(sys.id)}
                  className={`p-3 rounded-xl border text-left transition-all flex flex-col justify-between ${
                    isActive
                      ? "bg-white/15 border-blue-400 ring-1 ring-blue-400"
                      : "bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20"
                  }`}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <Icon name={sys.icon as any} size={16} className={isActive ? "text-blue-400" : "text-slate-400"} />
                    <span className="text-xs font-bold text-white leading-tight">{sys.name}</span>
                  </div>
                  <span className="text-[10px] text-slate-400 font-mono line-clamp-1">{sys.examples}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Center: Connective Bidirectional Stream */}
        <div className="lg:col-span-4 p-6 rounded-2xl bg-white/5 border border-white/10 text-center space-y-4 backdrop-blur-sm">
          <div className="w-12 h-12 rounded-xl bg-[#1637F5] text-white flex items-center justify-center mx-auto shadow-lg shadow-blue-500/30">
            <Icon name="bayes-logo" size={26} />
          </div>

          <div>
            <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-blue-400 block mb-1">
              The System of Action Layer
            </span>
            <h4 className="text-xl font-black text-white">Bayesforce Intelligence</h4>
          </div>

          <div className="space-y-2 text-left pt-2">
            {BAYESFORCE_LAYERS.map((layer, i) => (
              <div key={i} className="p-3 rounded-xl bg-white/5 border border-white/5 space-y-1">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-white">{layer.title}</span>
                  <span className="px-1.5 py-0.5 rounded text-[9px] font-mono bg-blue-500/20 text-blue-300">
                    {layer.badge}
                  </span>
                </div>
                <p className="text-[11px] text-slate-400 leading-relaxed">{layer.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Operational Outcomes & Record Updates */}
        <div className="lg:col-span-4 space-y-3">
          <div className="font-mono text-xs font-bold uppercase tracking-wider text-emerald-400 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Verified Action & Updates
          </div>

          <div className="p-4 rounded-xl bg-emerald-950/30 border border-emerald-500/30 space-y-2">
            <div className="text-xs font-bold text-emerald-300 flex items-center gap-1.5">
              <Icon name="check-circle" size={14} className="text-emerald-400" />
              Direct Systems-of-Record Writeback
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Updates Salesforce pipeline stages, posts balanced NetSuite general ledger entries, and resolves Zendesk tickets automatically.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-blue-950/30 border border-blue-500/30 space-y-2">
            <div className="text-xs font-bold text-blue-300 flex items-center gap-1.5">
              <Icon name="shield-check" size={14} className="text-blue-400" />
              1-Click Human Review in Slack / Teams
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Presents clean side-by-side diffs and verification packets so operators approve exceptions in seconds.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-purple-950/30 border border-purple-500/30 space-y-2">
            <div className="text-xs font-bold text-purple-300 flex items-center gap-1.5">
              <Icon name="activity" size={14} className="text-purple-400" />
              Complete Audit & Telemetry Lineage
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Every decision, tool execution, and token cost is logged in cryptographic audit trails for compliance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
