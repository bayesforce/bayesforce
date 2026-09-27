import type { Metadata } from "next";
import { CAPABILITIES } from "@/content/catalog";
import { CapabilityPage } from "@/components/features/capability/CapabilityPage";

export const metadata: Metadata = {
  title: "AI Coworkers | Bayesforce",
  description:
    "Engineer autonomous AI systems that execute multi-step operational work through the tools, APIs, and databases your teams already use — with human oversight at every consequential decision.",
  openGraph: {
    title: "AI Coworkers | Bayesforce",
    description:
      "Autonomous AI systems that execute operational work through your existing tools and systems, with governed human approval boundaries.",
    type: "website",
  },
};

export default function AICoworkersPage() {
  const capability = CAPABILITIES.find((c) => c.id === "ai-coworkers")!;
  return <CapabilityPage capability={capability} />;
}
