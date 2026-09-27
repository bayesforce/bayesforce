import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { BUSINESS_FUNCTIONS, FUNCTION_BY_SLUG } from "@/content/businessFunctions";
import { BusinessFunctionPage } from "@/components/features/workflow/BusinessFunctionPage";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return BUSINESS_FUNCTIONS.map((f) => ({ slug: f.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const fn = FUNCTION_BY_SLUG[slug];
  if (!fn) return {};
  return {
    title: fn.metaTitle,
    description: fn.metaDescription,
    openGraph: {
      title: fn.metaTitle,
      description: fn.metaDescription,
      type: "website",
    },
  };
}

export default async function WorkflowFunctionPage({ params }: Props) {
  const { slug } = await params;
  const fn = FUNCTION_BY_SLUG[slug];
  if (!fn) notFound();
  return <BusinessFunctionPage fn={fn} />;
}
