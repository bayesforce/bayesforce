import React from "react";
import type { Metadata } from "next";
import { RoutePlaceholder } from "@/components/shared/RoutePlaceholder";
import { INSIGHTS } from "@/content/catalog";

export const metadata: Metadata = {
  title: "Case Studies | Bayesforce",
  description:
    "Real-world accounts of how organizations deploy Bayesforce AI capabilities to transform critical workflows.",
};

export default function CaseStudiesIndexPage() {
  const caseStudies = INSIGHTS.filter((i) => i.type === "case-studies");

  return (
    <RoutePlaceholder
      route="/insights/case-studies"
      title="Case Studies"
      description="Real-world accounts and measured outcomes of how organizations deploy Bayesforce AI capabilities to transform critical workflows."
      subRoutes={caseStudies.map((cs) => ({
        label: cs.title,
        href: `/insights/case-studies/${cs.slug}`,
      }))}
    />
  );
}
