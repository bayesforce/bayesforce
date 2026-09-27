import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { INSIGHTS } from "@/content/catalog";
import { InsightDetailPage } from "@/components/shared/InsightDetailPage";

interface Props { params: Promise<{ slug: string }>; }

export async function generateStaticParams() {
  return INSIGHTS.filter((i) => i.type === "reports").map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = INSIGHTS.find((i) => i.slug === slug && i.type === "reports");
  if (!item) return {};
  return { title: `${item.title} | Bayesforce`, description: item.summary };
}

export default async function ReportDetailPage({ params }: Props) {
  const { slug } = await params;
  const item = INSIGHTS.find((i) => i.slug === slug && i.type === "reports");
  if (!item) notFound();
  return <InsightDetailPage item={item} backHref="/insights/reports" backLabel="Research Reports" />;
}
