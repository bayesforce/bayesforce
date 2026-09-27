import type { Metadata } from "next";
import { CAPABILITIES } from "@/content/catalog";
import { CapabilityPage } from "@/components/features/capability/CapabilityPage";

export const metadata: Metadata = {
  title: "AI Trust & Governance | Bayesforce",
  description:
    "Make enterprise AI systems measurable, observable, and controlled in production. Workflow-specific evaluations, distributed tracing, FinOps, safety controls, and audit-grade governance.",
  openGraph: {
    title: "AI Trust & Governance | Bayesforce",
    description:
      "Evaluations, observability, FinOps, and safety governance that make AI systems reliable enough for production enterprise operations.",
    type: "website",
  },
};

export default function AITrustGovernancePage() {
  const capability = CAPABILITIES.find((c) => c.id === "ai-trust-and-governance")!;
  return <CapabilityPage capability={capability} />;
}
