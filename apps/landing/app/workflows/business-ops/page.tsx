import React from "react";
import { WorkflowDetailTemplate } from "../../components/WorkflowDetailTemplate";
import { WORKFLOWS } from "../../data/site-data";

export const metadata = {
  title: "Business Operations AI Workflows | BayesForce",
  description:
    "Unify cross-silo execution cadence, automatically detect operational anomalies with Bayesian statistical process control, and generate daily executive briefing briefs.",
};

export default function BusinessOpsWorkflowPage() {
  const workflow = WORKFLOWS.find((w) => w.slug === "business-ops")!;
  return <WorkflowDetailTemplate workflow={workflow} />;
}
