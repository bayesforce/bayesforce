import React from "react";
import { WorkflowDetailTemplate } from "../../components/WorkflowDetailTemplate";
import { WORKFLOWS } from "../../data/site-data";

export const metadata = {
  title: "Technology Operations AI Workflows | BayesForce",
  description:
    "Accelerate incident root-cause triage, automate AST codebase refactoring migrations, and enforce real-time LLM token FinOps governors.",
};

export default function TechnologyOpsWorkflowPage() {
  const workflow = WORKFLOWS.find((w) => w.slug === "technology-ops")!;
  return <WorkflowDetailTemplate workflow={workflow} />;
}
