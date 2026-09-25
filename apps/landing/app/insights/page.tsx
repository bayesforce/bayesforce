import React from "react";
import type { Metadata } from "next";
import { RoutePlaceholder } from "../components/RoutePlaceholder";

export const metadata: Metadata = {
  title: "Insights & Research | Bayesforce",
  description:
    "Deep dives, architectural playbooks, and research reports on deploying production-grade AI in enterprise environments.",
};

export default function InsightsPage() {
  return (
    <RoutePlaceholder
      route="/insights"
      title="Insights & Research"
      description="Deep dives, architectural playbooks, and research reports on deploying production-grade AI capabilities in enterprise environments."
      subRoutes={[
        { label: "Reports", href: "/insights/reports" },
        { label: "Case Studies", href: "/insights/case-studies" },
        { label: "Playbooks", href: "/insights/playbooks" },
        { label: "Guides", href: "/insights/guides" },
      ]}
    />
  );
}
