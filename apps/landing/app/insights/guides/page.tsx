import React from "react";
import type { Metadata } from "next";
import { RoutePlaceholder } from "../../components/RoutePlaceholder";
import { INSIGHTS } from "../../data/site-data";

export const metadata: Metadata = {
  title: "Guides | Bayesforce",
  description:
    "Practical guides and technical documentation for implementing AI coworkers, data pipelines, and governance.",
};

export default function GuidesIndexPage() {
  const guides = INSIGHTS.filter((i) => i.type === "guides");

  return (
    <RoutePlaceholder
      route="/insights/guides"
      title="Implementation Guides"
      description="Practical guides and technical documentation for configuring, deploying, and maintaining enterprise AI workflows."
      subRoutes={guides.map((g) => ({
        label: g.title,
        href: `/insights/guides/${g.slug}`,
      }))}
    />
  );
}
