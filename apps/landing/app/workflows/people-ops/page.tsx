import React from "react";
import { WorkflowDetailTemplate } from "../../components/WorkflowDetailTemplate";
import { WORKFLOWS } from "../../data/site-data";

export const metadata = {
  title: "People Operations AI Workflows | BayesForce",
  description:
    "Streamline blind candidate skill screening, automated multi-system IT onboarding provisioning, and instant employee HR guidance.",
};

export default function PeopleOpsWorkflowPage() {
  const workflow = WORKFLOWS.find((w) => w.slug === "people-ops")!;
  return <WorkflowDetailTemplate workflow={workflow} />;
}
