import React from "react";
import { Heading, Text, Kicker } from "../../atoms/Typography";
import { Icon } from "../../atoms/Icons";
import "./PillarsSection.css";

interface Pillar {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  capabilities: string[];
}

const pillars: Pillar[] = [
  {
    number: "Pillar 01",
    title: "Operating Model & Workflow Redesign",
    subtitle: "Diagnostics on Real Friction",
    description: "We locate precisely where judgment, speed, and margin are lost across disconnected tools and approval handoffs, redesigning processes for machine speed before automating them.",
    capabilities: [
      "Process friction heatmaps & empirical baseline auditing",
      "Removal of redundant coordination steps & approval latency",
      "Cross-functional handoff optimization (Sales to Delivery to Finance)",
      "High-leverage organizational architecture redesign",
    ],
  },
  {
    number: "Pillar 02",
    title: "Governed Context & Agentic Systems",
    subtitle: "Production-Grade AI Systems",
    description: "We build the semantic organizational memory layer and deploy specialized, bounded AI agents that autonomously execute workflows with strict human-in-the-loop governance.",
    capabilities: [
      "Unified cross-system context graph (CRM, ERP, Jira, Slack, Docs)",
      "Zero-hallucination institutional memory & source attribution",
      "Role-bounded autonomous agents with clear escalation paths",
      "100% client source code and architecture ownership",
    ],
  },
  {
    number: "Pillar 03",
    title: "Execution Intelligence & Cadence Engine",
    subtitle: "Real-Time Action Over Stale Reporting",
    description: "We turn fragmented reporting into an automated management operating rhythm that surfaces anomalies, assigns owners, and ensures agreed-upon decisions are actually executed.",
    capabilities: [
      "Automated management review preparation (80% time saved)",
      "Early anomaly detection (margin leaks, backlog surges, utilization)",
      "Decision ledgers with automated action-completion tracking",
      "Continuous managed improvement & quarterly compounding delta",
    ],
  },
];

export const PillarsSection: React.FC<{ className?: string }> = ({
  className = "",
}) => {
  return (
    <section id="pillars" className={["bf-pillars-section", className].filter(Boolean).join(" ")}>
      <div className="bf-pillars-section__inner">
        <div className="bf-pillars-section__header">
          <Kicker variant="cobalt" icon={<Icon name="layers" size={16} />}>
            02. Core Capabilities
          </Kicker>
          <Heading level="h1" className="mb-4">
            How We Transform Organizations into AI-Native Operations
          </Heading>
          <Text variant="lead">
            We do not sell generic slides or isolated chatbots. We combine deep operational judgment with precision AI systems engineering to deliver permanent operational leverage.
          </Text>
        </div>

        <div className="bf-pillars-grid">
          {pillars.map((p) => (
            <div key={p.number} className="bf-pillar-card">
              <div className="bf-pillar-card__top">
                <span className="bf-pillar-card__number">{p.number} // {p.subtitle}</span>
                <h3 className="bf-pillar-card__title">{p.title}</h3>
                <p className="bf-pillar-card__desc">{p.description}</p>
              </div>
              <ul className="bf-pillar-card__features">
                {p.capabilities.map((cap, idx) => (
                  <li key={idx} className="bf-pillar-card__feature-item">
                    <span className="bf-pillar-card__feature-icon">
                      <Icon name="check" size={16} />
                    </span>
                    <span>{cap}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
