import type { Metadata } from "next";
import { CAPABILITIES } from "@/content/catalog";
import { CapabilityPage } from "@/components/features/capability/CapabilityPage";

export const metadata: Metadata = {
  title: "AI Data Engineering | Bayesforce",
  description:
    "Connect enterprise source systems, build AI-ready data pipelines, and engineer organizational context so intelligent systems have the information they need to operate reliably.",
  openGraph: {
    title: "AI Data Engineering | Bayesforce",
    description:
      "Connect enterprise source systems, build AI-ready data pipelines, and engineer organizational context for reliable AI workflows.",
    type: "website",
  },
};

export default function AIDataEngineeringPage() {
  const capability = CAPABILITIES.find((c) => c.id === "ai-data-engineering")!;
  return <CapabilityPage capability={capability} />;
}
