import type { Metadata } from "next";
import { AIDataEngineeringHero } from "./AIDataEngineeringHero";
import { RecognitionSection } from "./RecognitionSection";
import { PipelineContinuumSection } from "./PipelineContinuumSection";
import { ReliabilityRailSection } from "./ReliabilityRailSection";
import { PrinciplesSection } from "./PrinciplesSection";
import { ArchitectureDiagnosticSection } from "./ArchitectureDiagnosticSection";

export const metadata: Metadata = {
  title: "AI Data Engineering | Bayesforce",
  description:
    "Turn fragmented enterprise data into reliable AI-ready infrastructure from source systems and cloud pipelines to enterprise context.",
  openGraph: {
    title: "AI Data Engineering | Bayesforce",
    description:
      "Turn fragmented enterprise data into reliable AI-ready infrastructure from source systems and cloud pipelines to enterprise context.",
    type: "website",
  },
};

/**
 * End-to-End Capability Page: AI Data Engineering
 * Implements the authoritative 6-section engineering specification from
 * bayesforce/docs/bayesforce/02_web_design/capabilities/ai-data-engineering.md
 */
export default function AIDataEngineeringPage() {
  return (
    <main>
      {/* Section 1: Hero Section (90vh, Matte Buttons, Seamless Obsidian Strip) */}
      <AIDataEngineeringHero />

      {/* Section 2: Recognition (The Fragmentation Reality - Scattered Brand Logos & Symptoms) */}
      <RecognitionSection />

      {/* Section 3: The 7-Stage Engineering Pipeline (Pinned Dual-Pane Architecture) */}
      <PipelineContinuumSection />

      {/* Section 4: Cross-Cutting Operating Rail (Reliability & Control) */}
      <ReliabilityRailSection />

      {/* Section 5: Why BayesForce (The Principles of Engagement) */}
      <PrinciplesSection />

      {/* Section 6: Engagement & Conversion (The Architecture Diagnostic) */}
      <ArchitectureDiagnosticSection />
    </main>
  );
}
