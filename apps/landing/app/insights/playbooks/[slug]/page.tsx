import React from "react";
import { notFound } from "next/navigation";
import { InsightArticleTemplate } from "../../../components/InsightArticleTemplate";
import { INSIGHTS } from "../../../data/site-data";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return INSIGHTS.filter((i) => i.type === "playbooks").map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const item = INSIGHTS.find((i) => i.type === "playbooks" && i.slug === slug);
  if (!item) return { title: "Playbook Not Found | BayesForce" };

  return {
    title: `${item.title} | BayesForce Engineering Playbook`,
    description: item.summary,
  };
}

export default async function PlaybookDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const item = INSIGHTS.find((i) => i.type === "playbooks" && i.slug === slug);

  if (!item) {
    notFound();
  }

  return <InsightArticleTemplate insight={item} />;
}
