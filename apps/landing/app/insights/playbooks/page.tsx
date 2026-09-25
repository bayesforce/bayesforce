import React from "react";
import type { Metadata } from "next";
import { RoutePlaceholder } from "../../components/RoutePlaceholder";
import { INSIGHTS } from "../../data/site-data";

export const metadata: Metadata = {
  title: "Playbooks | Bayesforce",
  description:
    "Engineering playbooks and operating patterns for deploying production-grade AI systems.",
};

export default function PlaybooksIndexPage() {
  const playbooks = INSIGHTS.filter((i) => i.type === "playbooks");

  return (
    <RoutePlaceholder
      route="/insights/playbooks"
      title="Engineering Playbooks"
      description="Production-grade playbooks, evaluation harnesses, and architectural patterns for deploying reliable enterprise AI capabilities."
      subRoutes={playbooks.map((pb) => ({
        label: pb.title,
        href: `/insights/playbooks/${pb.slug}`,
      }))}
    />
  );
}
