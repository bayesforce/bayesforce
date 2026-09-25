import React from "react";
import type { Metadata } from "next";
import { RoutePlaceholder } from "../../components/RoutePlaceholder";

export const metadata: Metadata = {
  title: "People Operations | Bayesforce",
  description:
    "Orchestrate employee onboarding, internal policy navigation, and HR service delivery with verified compliance.",
};

export default function PeopleOpsPage() {
  return (
    <RoutePlaceholder
      route="/workflows/people-ops"
      title="People Operations"
      description="Orchestrate employee onboarding, internal policy navigation, and HR service delivery with verified compliance and zero manual handoffs."
    />
  );
}
