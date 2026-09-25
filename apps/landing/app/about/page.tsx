import React from "react";
import type { Metadata } from "next";
import { RoutePlaceholder } from "../components/RoutePlaceholder";

export const metadata: Metadata = {
  title: "About | Bayesforce",
  description:
    "We believe systems should carry more of the machinery of work so people can carry more ambition. We build sovereign AI capabilities inside organizations.",
};

export default function AboutPage() {
  return (
    <RoutePlaceholder
      route="/about"
      title="About Bayesforce"
      description="Systems should carry more of the machinery of work so people can carry more ambition. We build sovereign AI capabilities directly inside modern enterprise systems."
    />
  );
}
