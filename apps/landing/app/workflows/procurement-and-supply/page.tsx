import React from "react";
import { WorkflowDetailTemplate } from "../../components/WorkflowDetailTemplate";
import { WORKFLOWS } from "../../data/site-data";

export const metadata = {
  title: "Procurement & Supply AI Workflows | BayesForce",
  description:
    "Accelerate RFQ synthesis, monitor real-time supplier disruption risks, and automate purchase order compliance with procurement AI coworkers.",
};

export default function ProcurementAndSupplyWorkflowPage() {
  const workflow = WORKFLOWS.find((w) => w.slug === "procurement-and-supply")!;
  return <WorkflowDetailTemplate workflow={workflow} />;
}
