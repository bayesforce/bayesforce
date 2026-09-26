import type { Metadata } from "next";
import { HomeHero } from "./features/home/HomeHero";

export const metadata: Metadata = {
  title: "Bayesforce | AI Capabilities for Organizations",
  description:
    "Bayesforce builds AI capabilities directly inside organizations, turning existing systems, data, and workflows into intelligent operations.",
};

export default function HomePage() {
  return <HomeHero />;
}
