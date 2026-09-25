import React from "react";
import { WorkflowDetailTemplate } from "../../components/WorkflowDetailTemplate";
import { WORKFLOWS } from "../../data/site-data";

export const metadata = {
  title: "Finance & Accounting AI Workflows | BayesForce",
  description:
    "Automate 3-way invoice matching, month-end ledger reconciliation, and vendor dispute resolution with mathematical precision.",
};

export default function FinanceAndAccountingWorkflowPage() {
  const workflow = WORKFLOWS.find((w) => w.slug === "finance-and-accounting")!;
  return <WorkflowDetailTemplate workflow={workflow} />;
}
