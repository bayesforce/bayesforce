"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Icon } from "@bayesforce/ui";
import { InsightItem, InsightType } from "../data/site-data";

interface InsightsFilterViewProps {
  insights: InsightItem[];
}

export function InsightsFilterView({ insights }: InsightsFilterViewProps) {
  const [activeTab, setActiveTab] = useState<"all" | InsightType>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredInsights = insights.filter((item) => {
    const matchesTab = activeTab === "all" || item.type === activeTab;
    const matchesSearch =
      searchQuery === "" ||
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesTab && matchesSearch;
  });

  return (
    <section className="py-16 md:py-20 px-4 sm:px-6">
      <div className="max-w-[1240px] mx-auto">
        {/* Controls Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl bg-slate-100 border border-slate-200">
            <button
              onClick={() => setActiveTab("all")}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all ${
                activeTab === "all"
                  ? "bg-white text-slate-900 shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              All Publications ({insights.length})
            </button>
            <button
              onClick={() => setActiveTab("case-studies")}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all ${
                activeTab === "case-studies"
                  ? "bg-white text-emerald-700 shadow-sm"
                  : "text-slate-600 hover:text-emerald-700"
              }`}
            >
              Case Studies
            </button>
            <button
              onClick={() => setActiveTab("playbooks")}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all ${
                activeTab === "playbooks"
                  ? "bg-white text-[#1637F5] shadow-sm"
                  : "text-slate-600 hover:text-[#1637F5]"
              }`}
            >
              Playbooks
            </button>
            <button
              onClick={() => setActiveTab("reports")}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all ${
                activeTab === "reports"
                  ? "bg-white text-purple-700 shadow-sm"
                  : "text-slate-600 hover:text-purple-700"
              }`}
            >
              Reports
            </button>
            <button
              onClick={() => setActiveTab("guides")}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all ${
                activeTab === "guides"
                  ? "bg-white text-amber-700 shadow-sm"
                  : "text-slate-600 hover:text-amber-700"
              }`}
            >
              Guides
            </button>
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <Icon
              name="search"
              size={16}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
            />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search topics, workflows, tools..."
              className="w-full pl-10 pr-4 py-2 rounded-xl border border-slate-200 text-xs font-mono focus:outline-none focus:border-blue-500 bg-white"
            />
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredInsights.map((item) => {
            const badgeColor =
              item.type === "case-studies"
                ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                : item.type === "playbooks"
                ? "bg-blue-50 text-blue-700 border-blue-200"
                : item.type === "reports"
                ? "bg-purple-50 text-purple-700 border-purple-200"
                : "bg-amber-50 text-amber-700 border-amber-200";

            return (
              <Link
                key={item.slug}
                href={`/insights/${item.type}/${item.slug}`}
                className="p-8 rounded-3xl border border-slate-200 bg-white shadow-sm hover:shadow-xl hover:border-blue-300 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-2.5 py-1 rounded-md text-[11px] font-mono font-bold border ${badgeColor}`}>
                      {item.typeLabel}
                    </span>
                    <span className="font-mono text-xs text-slate-400">{item.readTime}</span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#1637F5] transition-colors mb-3 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs md:text-sm text-slate-600 line-clamp-3 leading-relaxed mb-6">
                    {item.summary}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {item.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-100 text-slate-600"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#1637F5]">
                  <span>Read Publication</span>
                  <Icon name="arrow-right" size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>

        {filteredInsights.length === 0 && (
          <div className="text-center py-20 bg-slate-50 rounded-3xl border border-slate-200">
            <Icon name="alert-circle" size={32} className="mx-auto text-slate-400 mb-3" />
            <h4 className="text-lg font-bold text-slate-800 mb-1">No matching publications found</h4>
            <p className="text-xs font-mono text-slate-500">
              Try resetting your search query or switching tabs.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
