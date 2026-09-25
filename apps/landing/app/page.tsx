import React from "react";
import type { Metadata } from "next";
import { RoutePlaceholder } from "./components/RoutePlaceholder";

export const metadata: Metadata = {
  title: "Bayesforce | AI Capabilities for Organizations",
  description:
    "Bayesforce builds AI capabilities directly inside organizations, turning existing systems, data, and workflows into intelligent operations.",
};

export default function HomePage() {
  return (
    <RoutePlaceholder
      route="/"
      title="Bayesforce"
      description="Bayesforce builds AI capabilities directly inside organizations, turning existing systems, data, and workflows into intelligent operations."
      subRoutes={[
        { label: "What We Build", href: "/what-we-build" },
        { label: "Workflows", href: "/workflows" },
        { label: "Insights", href: "/insights" },
        { label: "About", href: "/about" },
        { label: "Careers", href: "/careers" },
        { label: "Contact", href: "/contact" },
      ]}
    />
  );
}
