import React from "react";
import type { Metadata } from "next";
import { RoutePlaceholder } from "@/components/shared/RoutePlaceholder";

export const metadata: Metadata = {
  title: "Workflows | Bayesforce",
  description:
    "Eight operational workflow families where Bayesforce engineers AI into the actual work.",
};

export default function WorkflowsPage() {
  return (
    <RoutePlaceholder
      route="/workflows"
      title="Operational Workflows"
      description="Eight business functions. The same underlying problem — operational drag — applied at different points in the organization. Explore each to see where AI creates leverage."
      subRoutes={[
        { label: "Revenue Operations",             href: "/workflows/revenue-operations" },
        { label: "Customer Operations",            href: "/workflows/customer-operations" },
        { label: "Finance Operations",             href: "/workflows/finance-operations" },
        { label: "Procurement & Vendor Operations",href: "/workflows/procurement-vendor-operations" },
        { label: "Business Operations",            href: "/workflows/business-operations" },
        { label: "Technology Operations",          href: "/workflows/technology-operations" },
        { label: "Legal, Risk & Compliance",       href: "/workflows/legal-risk-compliance-operations" },
        { label: "People Operations",              href: "/workflows/people-operations" },
      ]}
    />
  );
}
