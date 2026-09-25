import React from "react";
import type { Metadata } from "next";
import { RoutePlaceholder } from "../../components/RoutePlaceholder";
import { INSIGHTS } from "../../data/site-data";

export const metadata: Metadata = {
  title: "Reports | Bayesforce",
  description:
    "In-depth research and benchmark reports analyzing the state of enterprise AI adoption and operational performance.",
};

export default function ReportsIndexPage() {
  const reports = INSIGHTS.filter((i) => i.type === "reports");

  return (
    <RoutePlaceholder
      route="/insights/reports"
      title="Research Reports"
      description="In-depth research and benchmark reports analyzing the state of enterprise AI adoption, operational maturity, and digital labor performance."
      subRoutes={reports.map((r) => ({
        label: r.title,
        href: `/insights/reports/${r.slug}`,
      }))}
    />
  );
}
