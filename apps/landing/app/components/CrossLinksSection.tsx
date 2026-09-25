import React from "react";
import Link from "next/link";
import { Heading, Text, Icon, Kicker } from "@bayesforce/ui";
import { CAPABILITIES, WORKFLOWS, INSIGHTS } from "../data/site-data";

export interface CrossLinksSectionProps {
  title?: string;
  subtitle?: string;
  capabilitySlugs?: string[];
  workflowSlugs?: string[];
  insightSlugs?: string[];
  dark?: boolean;
}

export const CrossLinksSection: React.FC<CrossLinksSectionProps> = ({
  title = "Related Capabilities, Workflows & Proof",
  subtitle = "Explore how these systems interconnect to build sovereign organizational capability.",
  capabilitySlugs = [],
  workflowSlugs = [],
  insightSlugs = [],
  dark = false,
}) => {
  const capabilities = CAPABILITIES.filter((c) => capabilitySlugs.includes(c.slug));
  const workflows = WORKFLOWS.filter((w) => workflowSlugs.includes(w.slug));
  const insights = INSIGHTS.filter((i) => insightSlugs.includes(i.slug));

  if (capabilities.length === 0 && workflows.length === 0 && insights.length === 0) {
    return null;
  }

  return (
    <section className={`py-16 md:py-20 px-4 sm:px-6 ${dark ? "bg-[#0E1015] border-t border-white/10" : "bg-slate-50/70 border-t border-slate-200"}`}>
      <div className="max-w-[1240px] mx-auto">
        <div className="mb-10 text-center max-w-2xl mx-auto">
          <Kicker variant={dark ? "dark" : "cobalt"} icon={<Icon name="layers" size={15} />}>
            Interconnected Architecture
          </Kicker>
          <Heading level="h2" dark={dark} className="mb-2">
            {title}
          </Heading>
          <Text variant="body" dark={dark} className="text-slate-500">
            {subtitle}
          </Text>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Related Capabilities */}
          {capabilities.map((cap) => (
            <Link
              key={cap.slug}
              href={`/what-we-build/${cap.slug}`}
              className={`p-6 rounded-2xl border transition-all group flex flex-col justify-between ${
                dark
                  ? "bg-[#14171F] border-white/10 hover:border-[#1637F5] hover:bg-[#1C202B]"
                  : "bg-white border-slate-200 hover:border-blue-300 hover:shadow-lg"
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#1637F5] flex items-center justify-center border border-blue-100 group-hover:bg-[#1637F5] group-hover:text-white transition-colors">
                    <Icon name={cap.icon as any} size={20} />
                  </div>
                  <span className="font-mono text-xs uppercase font-bold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 px-2 py-0.5 rounded">
                    Capability
                  </span>
                </div>
                <h3 className={`text-lg font-bold mb-2 group-hover:text-[#1637F5] transition-colors ${dark ? "text-white" : "text-slate-900"}`}>
                  {cap.shortTitle}
                </h3>
                <p className={`text-sm leading-relaxed ${dark ? "text-slate-400" : "text-slate-600"}`}>
                  {cap.tagline}
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-slate-100 dark:border-white/5 flex items-center justify-between text-xs font-bold text-[#1637F5] dark:text-blue-400">
                <span>View Capability</span>
                <Icon name="arrow-right" size={14} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}

          {/* Related Workflows */}
          {workflows.map((wf) => (
            <Link
              key={wf.slug}
              href={`/workflows/${wf.slug}`}
              className={`p-6 rounded-2xl border transition-all group flex flex-col justify-between ${
                dark
                  ? "bg-[#14171F] border-white/10 hover:border-[#1637F5] hover:bg-[#1C202B]"
                  : "bg-white border-slate-200 hover:border-blue-300 hover:shadow-lg"
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-800 flex items-center justify-center border border-slate-200 group-hover:bg-[#1637F5] group-hover:text-white transition-colors">
                    <Icon name={wf.icon as any} size={20} />
                  </div>
                  <span className="font-mono text-xs uppercase font-bold text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-white/10 px-2 py-0.5 rounded">
                    Workflow
                  </span>
                </div>
                <h3 className={`text-lg font-bold mb-2 group-hover:text-[#1637F5] transition-colors ${dark ? "text-white" : "text-slate-900"}`}>
                  {wf.shortTitle}
                </h3>
                <p className={`text-sm leading-relaxed ${dark ? "text-slate-400" : "text-slate-600"}`}>
                  {wf.summary}
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-slate-100 dark:border-white/5 flex items-center justify-between text-xs font-bold text-[#1637F5] dark:text-blue-400">
                <span>Explore Workflow</span>
                <Icon name="arrow-right" size={14} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}

          {/* Related Insights */}
          {insights.map((item) => (
            <Link
              key={item.slug}
              href={`/insights/${item.type}/${item.slug}`}
              className={`p-6 rounded-2xl border transition-all group flex flex-col justify-between ${
                dark
                  ? "bg-[#14171F] border-white/10 hover:border-[#1637F5] hover:bg-[#1C202B]"
                  : "bg-white border-slate-200 hover:border-blue-300 hover:shadow-lg"
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-100 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                    <Icon name="file-text" size={20} />
                  </div>
                  <span className="font-mono text-xs uppercase font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/30 px-2 py-0.5 rounded">
                    {item.typeLabel}
                  </span>
                </div>
                <h3 className={`text-lg font-bold mb-2 group-hover:text-[#1637F5] transition-colors line-clamp-2 ${dark ? "text-white" : "text-slate-900"}`}>
                  {item.title}
                </h3>
                <p className={`text-sm leading-relaxed line-clamp-2 ${dark ? "text-slate-400" : "text-slate-600"}`}>
                  {item.summary}
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-slate-100 dark:border-white/5 flex items-center justify-between text-xs font-bold text-emerald-600 dark:text-emerald-400">
                <span>Read Full {item.typeLabel}</span>
                <Icon name="arrow-right" size={14} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
