import React from "react";
import { Heading, Text, Kicker } from "../../atoms/Typography";
import { Icon } from "../../atoms/Icons";
import "./JourneySection.css";

interface JourneyStep {
  number: string;
  title: string;
  description: string;
}

const steps: JourneyStep[] = [
  {
    number: "01",
    title: "Recognize the Bottleneck",
    description: "Identify a specific operational friction point owned by an operating leader (COO/CFO/Head of Ops) with measurable volume and consequence.",
  },
  {
    number: "02",
    title: "Prove a Result (Execution Diagnostic Sprint)",
    description: "In 2-4 weeks, map real workflows, establish empirical baselines, and deploy one working artifact (decision view or human-approved automation).",
  },
  {
    number: "03",
    title: "Establish Shared Context (BayesForce Intelligence)",
    description: "Connect business systems, CRM, ERP, meetings, and documents into a unified, source-attributed context graph.",
  },
  {
    number: "04",
    title: "Create Operating Rhythm (Analytics Engine)",
    description: "Institute a recurring weekly/monthly cadence surfacing anomalies, margin leaks, and required decisions with assigned owners.",
  },
  {
    number: "05",
    title: "Decisions to Action (Workflow Agents)",
    description: "Deploy bounded agent systems to autonomously execute high-friction processes with human-in-the-loop approvals.",
  },
  {
    number: "06",
    title: "Expand to Adjacent Domains (RevOps / CustomerOps)",
    description: "Reuse existing context, governance, and evaluation patterns across sales pipeline hygiene and service triage.",
  },
  {
    number: "07",
    title: "Compounding Managed Improvement",
    description: "Ongoing quarterly optimization where accumulated institutional data makes every subsequent AI capability faster and cheaper to deploy.",
  },
];

export const JourneySection: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <section id="journey" className={["bf-journey-section", className].filter(Boolean).join(" ")}>
      <div className="bf-journey-section__inner">
        <div className="bf-journey-section__header">
          <Kicker variant="gold" icon={<Icon name="refresh-cw" size={16} />}>
            06. The Engagement Journey
          </Kicker>
          <Heading level="h1" className="mb-4">
            How We Partner: Earning the Right to Each Next Stage
          </Heading>
          <Text variant="lead">
            Clients do not buy an autonomous organization on day one. We move through a deliberate sequence where each working deployment justifies the next.
          </Text>
        </div>

        <div className="bf-journey-timeline">
          {steps.map((step) => (
            <div key={step.number} className="bf-journey-step">
              <div className="bf-journey-step__num">{step.number}</div>
              <div className="bf-journey-step__content">
                <h3 className="bf-journey-step__title">{step.title}</h3>
                <p className="bf-journey-step__desc">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
