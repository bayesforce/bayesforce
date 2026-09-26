import React from "react";
import type { Metadata } from "next";
import { RoutePlaceholder } from "@/components/shared/RoutePlaceholder";

export const metadata: Metadata = {
  title: "Our Capabilities | Bayesforce",
  description:
    "We build the capabilities that make AI useful inside organizations: AI Data Engineering, AI Coworkers, AI Trust & Governance, and AI Capability.",
};

export default function CapabilitiesPage() {
  return (
    <RoutePlaceholder
      route="/capabilities"
      title="Our Capabilities"
      description="We engineer production-grade AI capabilities that integrate directly with enterprise systems of record, data streams, and operational workflows."
      subRoutes={[
        { label: "AI Enablement", href: "/capabilities/ai-enablement" },
        { label: "AI Coworkers", href: "/capabilities/ai-coworkers" },
        { label: "AI Data Engineering", href: "/capabilities/ai-data-engineering" },
        { label: "AI Trust & Governance", href: "/capabilities/ai-trust-governance" },
      ]}
    />
  );
}
