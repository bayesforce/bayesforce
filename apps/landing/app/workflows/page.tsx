import React from "react";
import type { Metadata } from "next";
import { RoutePlaceholder } from "../components/RoutePlaceholder";

export const metadata: Metadata = {
  title: "Workflows | Bayesforce",
  description:
    "Explore mission-critical enterprise workflows transformed by Bayesforce AI capabilities across key functional domains.",
};

export default function WorkflowsPage() {
  return (
    <RoutePlaceholder
      route="/workflows"
      title="Operational Workflows"
      description="Explore mission-critical enterprise workflows transformed by Bayesforce AI capabilities across key functional departments."
      subRoutes={[
        { label: "Revenue Operations", href: "/workflows/revenue-ops" },
        { label: "Customer Operations", href: "/workflows/customer-ops" },
        { label: "Finance & Accounting", href: "/workflows/finance-and-accounting" },
        { label: "People Operations", href: "/workflows/people-ops" },
        { label: "Legal, Risk & Compliance", href: "/workflows/legal-risk-and-compliance" },
        { label: "Technology Operations", href: "/workflows/technology-ops" },
        { label: "Procurement & Supply Chain", href: "/workflows/procurement-and-supply" },
        { label: "Business Operations", href: "/workflows/business-ops" },
      ]}
    />
  );
}
