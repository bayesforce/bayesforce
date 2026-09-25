import React from "react";
import type { Metadata } from "next";
import { RoutePlaceholder } from "../../components/RoutePlaceholder";

export const metadata: Metadata = {
  title: "AI Data Engineering | Bayesforce",
  description:
    "Modern data pipelines, semantic layers, and real-time context engines designed to turn messy enterprise data into reliable inputs for AI models.",
};

export default function AIDataEngineeringPage() {
  return (
    <RoutePlaceholder
      route="/what-we-build/ai-data-engineering"
      title="AI Data Engineering"
      description="Modern data pipelines, semantic layers, and real-time context engines designed to turn messy enterprise data into reliable inputs for AI models."
    />
  );
}
