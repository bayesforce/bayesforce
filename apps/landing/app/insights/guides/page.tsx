import type { Metadata } from "next";
import { INSIGHTS } from "@/content/catalog";
import { InsightListPage } from "@/components/shared/InsightListPage";

export const metadata: Metadata = {
  title: "Practitioner Guides | Bayesforce",
  description: "Technical guides on evaluation, context engineering, and production AI patterns.",
};

export default function GuidesPage() {
  const items = INSIGHTS.filter((i) => i.type === "guides");
  return (
    <InsightListPage
      type="guides"
      typeLabel="Practitioner Guides"
      headline="Technical depth without ceremony."
      description="Deep practitioner knowledge on building, evaluating, and operating production AI systems. Written for engineers and operators who need to make real decisions."
      items={items}
    />
  );
}
