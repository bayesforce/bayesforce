import React from "react";
import type { Metadata } from "next";
import { RoutePlaceholder } from "../../components/RoutePlaceholder";

export const metadata: Metadata = {
  title: "Business Operations | Bayesforce",
  description:
    "Bridge silos between departmental tools, unstructured documents, and cross-functional operational processes.",
};

export default function BusinessOpsPage() {
  return (
    <RoutePlaceholder
      route="/workflows/business-ops"
      title="Business Operations"
      description="Bridge silos between departmental tools, unstructured documents, and cross-functional operational processes to drive organizational leverage."
    />
  );
}
