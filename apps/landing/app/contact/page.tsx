import React from "react";
import type { Metadata } from "next";
import { RoutePlaceholder } from "../components/RoutePlaceholder";

export const metadata: Metadata = {
  title: "Contact | Bayesforce",
  description:
    "Get in touch with our team to explore how Bayesforce can build AI capabilities inside your organization.",
};

export default function ContactPage() {
  return (
    <RoutePlaceholder
      route="/contact"
      title="Contact Bayesforce"
      description="Connect with our engineering and deployment team to evaluate where AI capabilities can unlock operational leverage in your organization."
    />
  );
}
