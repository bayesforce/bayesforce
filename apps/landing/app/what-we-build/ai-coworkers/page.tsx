import React from "react";
import type { Metadata } from "next";
import { RoutePlaceholder } from "../../components/RoutePlaceholder";

export const metadata: Metadata = {
  title: "AI Coworkers | Bayesforce",
  description:
    "Autonomous, context-aware AI coworkers that execute complex multi-step workflows across your existing enterprise tools alongside human teams.",
};

export default function AICoworkersPage() {
  return (
    <RoutePlaceholder
      route="/what-we-build/ai-coworkers"
      title="AI Coworkers"
      description="Autonomous, context-aware AI coworkers that execute complex multi-step workflows across your existing enterprise tools alongside human teams."
    />
  );
}
