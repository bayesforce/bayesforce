import React from "react";
import { WorkflowDetailTemplate } from "../../components/WorkflowDetailTemplate";
import { WORKFLOWS } from "../../data/site-data";

export const metadata = {
  title: "Legal, Risk & Compliance AI Workflows | BayesForce",
  description:
    "Automate commercial contract review, playbook-governed Word track changes redlining, and proactive obligation tracking with legal AI coworkers.",
};

export default function LegalRiskAndComplianceWorkflowPage() {
  const workflow = WORKFLOWS.find((w) => w.slug === "legal-risk-and-compliance")!;
  return <WorkflowDetailTemplate workflow={workflow} />;
}
