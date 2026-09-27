import type { Metadata } from "next";
import { HomeHero }            from "./features/home/HomeHero";
import { OperationalDrag }     from "./features/home/sections/OperationalDrag";
import { WhatWeDo }            from "./features/home/sections/WhatWeDo";
import { WorkflowInAction }    from "./features/home/sections/WorkflowInAction";
import { WhereItWorks }        from "./features/home/sections/WhereItWorks";
import { CapabilitiesSection } from "./features/home/sections/CapabilitiesSection";
import { HowWeEngineer }       from "./features/home/sections/HowWeEngineer";
import { ProofSection }        from "./features/home/sections/ProofSection";
import { InsightsSection }     from "./features/home/sections/InsightsSection";
import { FinalCTA }            from "./features/home/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Bayesforce | AI Capabilities for Organizations",
  description:
    "We engineer AI into the workflows your teams already use. Connecting data, context, and execution so work moves with less human coordination.",
};

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <OperationalDrag />
      <WhatWeDo />
      <WorkflowInAction />
      <WhereItWorks />
      <CapabilitiesSection />
      <HowWeEngineer />
      <ProofSection />
      <InsightsSection />
      <FinalCTA />
    </>
  );
}
