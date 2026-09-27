"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { CAPABILITIES, INSIGHTS, getCapabilityHref } from "@/content/catalog";
import { BUSINESS_FUNCTIONS, WORKFLOW_CATALOG_TO_ROUTE } from "@/content/businessFunctions";
import s from "./SearchPage.module.css";

/* ── Search index ───────────────────────────── */
interface SearchResult {
  type: "capability" | "function" | "workflow" | "insight";
  typeLabel: string;
  title: string;
  summary: string;
  href: string;
  functionName?: string;
}

function buildIndex(): SearchResult[] {
  const items: SearchResult[] = [];

  CAPABILITIES.forEach((cap) => {
    items.push({
      type: "capability",
      typeLabel: "Capability",
      title: cap.shortTitle,
      summary: `${cap.positioning} — ${cap.tagline}`,
      href: getCapabilityHref(cap.slug),
    });
  });

  BUSINESS_FUNCTIONS.forEach((fn) => {
    items.push({
      type: "function",
      typeLabel: "Business Function",
      title: fn.name,
      summary: fn.description,
      href: `/workflows/${fn.slug}`,
    });
    fn.workflows.forEach((wf) => {
      items.push({
        type: "workflow",
        typeLabel: "Workflow",
        title: wf.name,
        summary: `${wf.description} — ${wf.operationalDrag}`,
        href: `/workflows/${fn.slug}#workflow-explorer`,
        functionName: fn.name,
      });
    });
  });

  INSIGHTS.forEach((ins) => {
    items.push({
      type: "insight",
      typeLabel: ins.typeLabel,
      title: ins.title,
      summary: ins.summary,
      href: `/insights/${ins.type}/${ins.slug}`,
    });
  });

  return items;
}

function search(index: SearchResult[], q: string): SearchResult[] {
  if (!q.trim()) return [];
  const lower = q.toLowerCase();
  return index.filter(
    (item) =>
      item.title.toLowerCase().includes(lower) ||
      item.summary.toLowerCase().includes(lower) ||
      (item.functionName ?? "").toLowerCase().includes(lower)
  );
}

const ORDER: SearchResult["type"][] = ["capability", "function", "workflow", "insight"];
const GROUP_LABELS: Record<SearchResult["type"], string> = {
  capability: "Capabilities",
  function: "Business Functions",
  workflow: "Workflows",
  insight: "Insights",
};

/* ── Component ──────────────────────────────── */
export function SearchPage() {
  const router = useRouter();
  const params = useSearchParams();
  const initialQ = params.get("q") ?? "";
  const [query, setQuery] = useState(initialQ);
  const inputRef = useRef<HTMLInputElement>(null);

  const index = useMemo(() => buildIndex(), []);
  const results = useMemo(() => search(index, query), [index, query]);

  // Group results
  const grouped = useMemo(() => {
    const map: Partial<Record<SearchResult["type"], SearchResult[]>> = {};
    results.forEach((r) => {
      if (!map[r.type]) map[r.type] = [];
      map[r.type]!.push(r);
    });
    return map;
  }, [results]);

  // Sync URL
  useEffect(() => {
    const t = setTimeout(() => {
      const url = query.trim() ? `?q=${encodeURIComponent(query.trim())}` : "/search";
      router.replace(url, { scroll: false });
    }, 300);
    return () => clearTimeout(t);
  }, [query, router]);

  // Auto-focus on mount
  useEffect(() => { inputRef.current?.focus(); }, []);

  return (
    <div className={s.page}>
      <header className={s.header}>
        <div className={s.headerInner}>
          <h1 className={s.headline}>Search</h1>
          <div className={s.inputWrap}>
            <input
              ref={inputRef}
              className={s.searchInput}
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="invoices, reconciliation, customer tickets…"
              aria-label="Search Bayesforce"
              autoComplete="off"
              spellCheck={false}
            />
          </div>
        </div>
      </header>

      <div className={s.results}>
        <div className={s.resultsInner}>
          {!query.trim() ? (
            <p className={s.empty}>Start typing to search capabilities, workflows, and insights.</p>
          ) : results.length === 0 ? (
            <div>
              <p className={s.empty}>No results for &ldquo;{query}&rdquo;.</p>
              <p className={s.emptyHint}>Try: capabilities, workflows, reconciliation, invoices, contracts, customer ops</p>
            </div>
          ) : (
            ORDER.filter((type) => grouped[type]?.length).map((type) => {
              const group = grouped[type]!;
              return (
                <div key={type} className={s.group}>
                  <div className={s.groupHeader}>
                    <span className={s.groupTitle}>{GROUP_LABELS[type]}</span>
                    <span className={s.groupCount}>{group.length}</span>
                  </div>
                  <div className={s.groupCards}>
                    {group.map((item) => (
                      <Link key={item.href + item.title} href={item.href} className={s.card}>
                        <span className={s.cardType}>{item.typeLabel}</span>
                        <h2 className={s.cardTitle}>{item.title}</h2>
                        <p className={s.cardSummary}>{item.summary}</p>
                        {item.functionName && (
                          <span className={s.cardFunction}>{item.functionName}</span>
                        )}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}
