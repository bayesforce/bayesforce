"use client";

import React, { useState } from "react";
import { Heading, Text, Kicker } from "../../atoms/Typography";
import { Icon } from "../../atoms/Icons";
import { Badge } from "../../atoms/Badges";
import { Button } from "../../atoms/Buttons";
import "./CSuiteSection.css";

interface CSuiteRoleData {
  id: string;
  role: string;
  title: string;
  quote: string;
  frictionSolved: string;
  strategicOutcome: string;
  stats: { value: string; label: string }[];
}

const rolesData: CSuiteRoleData[] = [
  {
    id: "ceo",
    role: "Chief Executive Officer",
    title: "Scaling Operational Capacity Without Linear Headcount",
    quote: "“The bottleneck to our growth isn’t market demand—it’s how fast our organization can coordinate and execute without adding bloat.”",
    frictionSolved: "Prevents organizational drag where headcount growth slows decision speed and increases coordination overhead.",
    strategicOutcome: "Unlocks 3.5x to 4x execution leverage, enabling 10-person business units to produce 40-person enterprise output.",
    stats: [
      { value: "3.5x – 4x", label: "Capacity multiplier across core delivery teams" },
      { value: "Weeks", label: "From strategic diagnostic to measurable operational delta" },
    ],
  },
  {
    id: "coo",
    role: "Chief Operating Officer",
    title: "Eliminating Cross-System Handoffs & Reporting Drag",
    quote: "“Our best people spend half their week chasing updates, reconciling numbers across tools, and preparing for reviews rather than fixing operations.”",
    frictionSolved: "Quietly automates the space between ERP, CRM, Jira, Slack, and spreadsheets that conventional software leaves unresolved.",
    strategicOutcome: "Saves up to 80% of management reporting preparation time while surfacing delivery and margin risks in real-time.",
    stats: [
      { value: "80%", label: "Reduction in recurring reporting and review overhead" },
      { value: "Real-Time", label: "Anomaly detection before monthly close" },
    ],
  },
  {
    id: "cfo",
    role: "Chief Financial Officer",
    title: "Outcome-Aligned Value & Immediate Margin Protection",
    quote: "“We cannot afford open-ended consulting billing with uncertain ROI or multi-year digital transformation timelines that never land.”",
    frictionSolved: "Replaces billable-hour consulting models with fixed-scope diagnostics and outcome-linked performance milestones.",
    strategicOutcome: "Direct margin leak prevention, contract mismatch resolution, and zero black-box vendor lock-in.",
    stats: [
      { value: "100%", label: "Client IP and source code ownership guaranteed" },
      { value: "Fixed", label: "Fee structure tied directly to measurable deliverables" },
    ],
  },
  {
    id: "caio",
    role: "Chief AI & Technology Officer",
    title: "Production-Grade Governed Agent Systems",
    quote: "“We don’t need another copilot experiment. We need secure, auditable AI agents deeply wired into our enterprise workflows.”",
    frictionSolved: "Moves past brittle prompt hacks into grounded semantic context graphs and verifiable human-in-the-loop audit trails.",
    strategicOutcome: "High-trust deployment with zero data leakage, complete audit logs, and clear escalation guardrails.",
    stats: [
      { value: "0%", label: "Hallucination risk via grounded context architecture" },
      { value: "100%", label: "Human-in-the-loop review for consequential actions" },
    ],
  },
];

export const CSuiteSection: React.FC<{
  onBookDiagnostic?: () => void;
  className?: string;
}> = ({ onBookDiagnostic, className = "" }) => {
  const [activeTab, setActiveTab] = useState<string>("ceo");
  const currentRole = rolesData.find((r) => r.id === activeTab) || rolesData[0];

  return (
    <section id="c-suite" className={["bf-csuite-section", className].filter(Boolean).join(" ")}>
      <div className="bf-csuite-section__inner">
        <div className="bf-csuite-section__header">
          <Kicker variant="dark" icon={<Icon name="users" size={18} />}>
            03. The Executive Agenda
          </Kicker>
          <Heading level="h1" dark className="mb-4">
            Tailored Perspectives for Enterprise Decision-Makers
          </Heading>
          <Text variant="lead" dark>
            Different leaders experience organizational friction differently. Explore how BayesForce drives measurable outcomes across executive priorities.
          </Text>
        </div>

        {/* Role Tabs */}
        <div className="bf-csuite-tabs">
          {rolesData.map((r) => (
            <button
              key={r.id}
              type="button"
              onClick={() => setActiveTab(r.id)}
              className={[
                "bf-csuite-tab-btn",
                activeTab === r.id ? "bf-csuite-tab-btn--active" : "",
              ].join(" ")}
            >
              {r.role}
            </button>
          ))}
        </div>

        {/* Content Card */}
        <div className="bf-csuite-content-card">
          <div>
            <div className="mb-3">
              <Badge variant="gold">{currentRole.role}</Badge>
            </div>
            <h3 className="bf-csuite-title">
              {currentRole.title}
            </h3>
            <p className="bf-csuite-quote">{currentRole.quote}</p>

            <div className="bf-csuite-details">
              <div>
                <strong className="text-white">Friction Addressed: </strong>
                {currentRole.frictionSolved}
              </div>
              <div>
                <strong className="text-white">Strategic Outcome: </strong>
                {currentRole.strategicOutcome}
              </div>
            </div>

            <Button
              variant="primary"
              size="md"
              onClick={onBookDiagnostic}
              as="a"
              href="#diagnostic"
              rightIcon={<Icon name="arrow-right" size={18} />}
            >
              Schedule {currentRole.role} Diagnostic Briefing
            </Button>
          </div>

          <div className="bf-csuite-impact-stats">
            {currentRole.stats.map((stat, idx) => (
              <div key={idx} className="bf-csuite-stat-box">
                <div className="bf-csuite-stat-val">{stat.value}</div>
                <div className="bf-csuite-stat-lbl">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
