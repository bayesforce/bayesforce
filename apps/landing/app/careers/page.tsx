import React from "react";
import type { Metadata } from "next";
import { RoutePlaceholder } from "../components/RoutePlaceholder";

export const metadata: Metadata = {
  title: "Careers | Bayesforce",
  description:
    "Join our team of engineers, researchers, and systems thinkers engineering production AI capabilities and sovereign operational software.",
};

export default function CareersPage() {
  return (
    <RoutePlaceholder
      route="/careers"
      title="Careers at Bayesforce"
      description="Join our team of engineers, researchers, and systems thinkers building production-grade AI capabilities and sovereign operational software for organizations worldwide."
    />
  );
}
