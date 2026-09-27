import type { Metadata } from "next";
import { INSIGHTS } from "@/content/catalog";
import { InsightListPage } from "@/components/shared/InsightListPage";

export const metadata: Metadata = {
  title: "Engineering Playbooks | Bayesforce",
  description: "Architectural blueprints for building specific workflow automation systems.",
};

export default function PlaybooksPage() {
  const items = INSIGHTS.filter((i) => i.type === "playbooks");
  return (
    <InsightListPage
      type="playbooks"
      typeLabel="Engineering Playbooks"
      headline="How we build, made legible."
      description="Step-by-step architectural blueprints for specific workflow automation systems. Each playbook explains the decomposition model, technology choices, and governance design."
      items={items}
    />
  );
}
