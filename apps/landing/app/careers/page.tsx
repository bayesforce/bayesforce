import type { Metadata } from "next";
import { CareersPage } from "@/components/features/careers/CareersPage";

export const metadata: Metadata = {
  title: "Careers | Bayesforce",
  description:
    "We are looking for builders who understand systems, write clean code, and believe that organizational work can be fundamentally improved. We hire by intent, not by title.",
  openGraph: {
    title: "Careers at Bayesforce — Build Systems That Matter",
    description:
      "Join a team engineering AI capabilities into operational workflows. We value curiosity, craftsmanship, and systems thinking over conventional titles.",
    type: "website",
  },
};

export default function CareersRoutePage() {
  return <CareersPage />;
}
