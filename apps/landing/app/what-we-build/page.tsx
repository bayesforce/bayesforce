import React from "react";
import type { Metadata } from "next";
import { RoutePlaceholder } from "../components/RoutePlaceholder";

export const metadata: Metadata = {
  title: "What We Build | Bayesforce",
  description:
    "We build the capabilities that make AI useful inside organizations: AI Data Engineering, AI Coworkers, AI Trust & Governance, and AI Capability.",
};

export default function WhatWeBuildPage() {
  return (
    <RoutePlaceholder
      route="/what-we-build"
      title="What We Build"
      description="We engineer production-grade AI capabilities that integrate directly with enterprise systems of record, data streams, and operational workflows."
      subRoutes={[
        { label: "AI Capability", href: "/what-we-build/ai-capability" },
        { label: "AI Coworkers", href: "/what-we-build/ai-coworkers" },
        { label: "AI Data Engineering", href: "/what-we-build/ai-data-engineering" },
        { label: "AI Trust & Governance", href: "/what-we-build/ai-trust-and-governance" },
      ]}
    />
  );
}
