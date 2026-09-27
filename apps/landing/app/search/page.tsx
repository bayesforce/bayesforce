import type { Metadata } from "next";
import { Suspense } from "react";
import { SearchPage } from "@/components/features/search/SearchPage";

export const metadata: Metadata = {
  title: "Search | Bayesforce",
  description:
    "Search capabilities, workflows, insights, and business functions across the Bayesforce content graph.",
};

export default function SearchRoutePage() {
  return (
    <Suspense fallback={<div style={{ minHeight: "60vh", background: "#11151b" }} aria-label="Loading search" />}>
      <SearchPage />
    </Suspense>
  );
}
