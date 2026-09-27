import type { Metadata } from "next";
import { CAPABILITIES } from "@/content/catalog";
import { CapabilityPage } from "@/components/features/capability/CapabilityPage";

export const metadata: Metadata = {
  title: "AI Enablement | Bayesforce",
  description:
    "Transfer AI engineering capability directly into your organization. We co-engineer, train, and hand over — so your team can operate, govern, and improve AI workflows without ongoing dependency.",
  openGraph: {
    title: "AI Enablement | Bayesforce",
    description:
      "Turn an AI implementation into organizational capability. We transfer the engineering knowledge, playbooks, and evaluation frameworks so your team can operate independently.",
    type: "website",
  },
};

export default function AIEnablementPage() {
  const capability = CAPABILITIES.find((c) => c.id === "ai-capability")!;
  return <CapabilityPage capability={capability} />;
}
