import type { Metadata } from "next";
import { AboutPage } from "@/components/features/about/AboutPage";

export const metadata: Metadata = {
  title: "About | Bayesforce",
  description:
    "Bayesforce is an AI capability engineering firm. We believe systems should carry more of the machinery of an organization so its people can carry more of its ambition.",
  openGraph: {
    title: "About Bayesforce — AI Capability Engineering",
    description:
      "We engineer AI into the workflows organizations already operate. Our principles: Work Before Technology, Earn Autonomy, Prove the Delta, Design for Ownership.",
    type: "website",
  },
};

export default function AboutRoutePage() {
  return <AboutPage />;
}
