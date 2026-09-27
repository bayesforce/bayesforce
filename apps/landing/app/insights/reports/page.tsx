import type { Metadata } from "next";
import { INSIGHTS } from "@/content/catalog";
import { InsightListPage } from "@/components/shared/InsightListPage";

export const metadata: Metadata = {
  title: "Research Reports | Bayesforce",
  description: "Market analysis and worldview on enterprise AI operations.",
};

export default function ReportsPage() {
  const items = INSIGHTS.filter((i) => i.type === "reports");
  return (
    <InsightListPage
      type="reports"
      typeLabel="Research Reports"
      headline="What we&apos;re observing."
      description="Empirical analysis of enterprise AI adoption, unit economics, and structural failure modes. How organizations are shifting from chatbots to systems of action."
      items={items}
    />
  );
}
