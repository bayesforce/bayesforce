import React from "react";
import { WorkflowDetailTemplate } from "../../components/WorkflowDetailTemplate";
import { WORKFLOWS } from "../../data/site-data";

export const metadata = {
  title: "Revenue Operations AI Workflows | BayesForce",
  description:
    "Scale outbound pipeline, automate deep account research, and eliminate CRM data entry overhead with governed AI revenue coworkers.",
};

export default function RevenueOpsWorkflowPage() {
  const workflow = WORKFLOWS.find((w) => w.slug === "revenue-ops")!;
  return <WorkflowDetailTemplate workflow={workflow} />;
}
