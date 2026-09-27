import type { Metadata } from "next";
import { INSIGHTS } from "@/content/catalog";
import { InsightListPage } from "@/components/shared/InsightListPage";

export const metadata: Metadata = {
  title: "Case Studies | Bayesforce",
  description: "Real production deployments with measurable outcomes. AI systems that operate end-to-end in organizations.",
};

export default function CaseStudiesPage() {
  const items = INSIGHTS.filter((i) => i.type === "case-studies");
  return (
    <InsightListPage
      type="case-studies"
      typeLabel="Case Studies"
      headline="Proof over promise."
      description="Production deployments. Measured deltas. Every case study documents a real workflow, a real implementation, and a verifiable operational outcome."
      items={items}
    />
  );
}
