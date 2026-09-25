import React from "react";
import { notFound } from "next/navigation";
import { RoutePlaceholder } from "../../../components/RoutePlaceholder";
import { INSIGHTS } from "../../../data/site-data";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return INSIGHTS.filter((i) => i.type === "guides").map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const item = INSIGHTS.find((i) => i.type === "guides" && i.slug === slug);
  if (!item) return { title: "Guide Not Found | Bayesforce" };

  return {
    title: `${item.title} | Bayesforce`,
    description: item.summary,
  };
}

export default async function GuideDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const item = INSIGHTS.find((i) => i.type === "guides" && i.slug === slug);

  if (!item) {
    notFound();
  }

  return (
    <RoutePlaceholder
      route={`/insights/guides/${slug}`}
      title={item.title}
      description={item.summary}
    />
  );
}
