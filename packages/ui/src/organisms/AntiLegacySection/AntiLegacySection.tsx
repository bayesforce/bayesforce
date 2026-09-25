import React from "react";
import { Heading, Text, Kicker } from "../../atoms/Typography";
import { Icon } from "../../atoms/Icons";
import { ComparisonMatrix, type ComparisonRow } from "../../molecules/ComparisonMatrix";
import "./AntiLegacySection.css";

const comparisonData: ComparisonRow[] = [
  {
    dimension: "Billing & Incentives",
    bayesforce: "Outcome-linked and fixed-scope sprints. We profit when your ops become permanently lean.",
    legacyConsulting: "Billable hours and bloated headcount. Incentivized to drag projects indefinitely.",
    pointAiTools: "Monthly SaaS seats regardless of whether workflows improve.",
  },
  {
    dimension: "IP & System Ownership",
    bayesforce: "100% Client Ownership. Full source code, agent configurations, and data models handed over.",
    legacyConsulting: "Proprietary slide frameworks and black-box dependencies.",
    pointAiTools: "Locked inside vendor's proprietary cloud infrastructure.",
  },
  {
    dimension: "Speed to Measurable Delta",
    bayesforce: "2 to 4 Weeks from diagnostic baseline to live working automation.",
    legacyConsulting: "6 to 18 Months of discovery interviews ending in PDF deliverables.",
    pointAiTools: "Instant setup, but isolated to one screen with zero workflow integration.",
  },
  {
    dimension: "Scope of Execution",
    bayesforce: "Systems Engineering across the seams between CRM, ERP, Slack, docs & databases.",
    legacyConsulting: "Theoretical recommendations left for the client's internal team to build.",
    pointAiTools: "Isolated single-task automation (e.g. email draft only).",
  },
  {
    dimension: "Human Role",
    bayesforce: "Human-in-the-Loop judgment. Systems carry the machinery; humans retain consequential control.",
    legacyConsulting: "Junior analysts manually copying data between spreadsheets.",
    pointAiTools: "Unchecked autonomous hallucination or rigid rule engines.",
  },
];

export const AntiLegacySection: React.FC<{ className?: string }> = ({
  className = "",
}) => {
  return (
    <section id="difference" className={["bf-difference-section", className].filter(Boolean).join(" ")}>
      <div className="bf-difference-section__inner">
        <div className="bf-difference-section__header">
          <Kicker variant="cobalt" icon={<Icon name="shield-check" size={16} />}>
            05. Structural Advantage
          </Kicker>
          <Heading level="h1" className="mb-4">
            Built on the Opposite Incentive Structure of Legacy Consulting
          </Heading>
          <Text variant="lead">
            Traditional firms profit by selling billable hours, expanding headcounts, and creating institutional dependency. BayesForce succeeds when your organization becomes permanently faster, leaner, and self-sufficient.
          </Text>
        </div>

        <ComparisonMatrix rows={comparisonData} />
      </div>
    </section>
  );
};
