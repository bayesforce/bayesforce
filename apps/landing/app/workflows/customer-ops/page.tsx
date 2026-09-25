import React from "react";
import { WorkflowDetailTemplate } from "../../components/WorkflowDetailTemplate";
import { WORKFLOWS } from "../../data/site-data";

export const metadata = {
  title: "Customer Operations AI Workflows | BayesForce",
  description:
    "Deliver instant resolution support desks and proactive account retention interventions with governed AI customer coworkers.",
};

export default function CustomerOpsWorkflowPage() {
  const workflow = WORKFLOWS.find((w) => w.slug === "customer-ops")!;
  return <WorkflowDetailTemplate workflow={workflow} />;
}
