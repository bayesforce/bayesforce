"use client";

import { useState, useId } from "react";
import Link from "next/link";
import type { WorkflowDef } from "@/content/businessFunctions";
import s from "./WorkflowExplorer.module.css";

const CAPABILITY_DISPLAY: Record<string, string> = {
  "ai-data-engineering":   "AI Data Engineering",
  "ai-coworkers":          "AI Coworkers",
  "ai-trust-and-governance": "AI Trust & Governance",
  "ai-capability":         "AI Enablement",
};

const CAPABILITY_HREF: Record<string, string> = {
  "ai-data-engineering":     "/capabilities/ai-data-engineering",
  "ai-coworkers":            "/capabilities/ai-coworkers",
  "ai-trust-and-governance": "/capabilities/ai-trust-governance",
  "ai-capability":           "/capabilities/ai-enablement",
};

const ALL_TAGS = ["Intake", "Triage", "Resolution", "Reconciliation", "Investigation", "Approval", "Coordination", "Monitoring", "Extraction", "Routing"];

interface Props {
  workflows: WorkflowDef[];
  functionSlug: string;
}

export function WorkflowExplorer({ workflows, functionSlug }: Props) {
  const baseId = useId();
  const [openSlug, setOpenSlug] = useState<string | null>(null);
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const presentTags = ALL_TAGS.filter((tag) =>
    workflows.some((w) => w.tags.includes(tag))
  );

  const visible = activeTag
    ? workflows.filter((w) => w.tags.includes(activeTag))
    : workflows;

  return (
    <section className={s.container} id="workflow-explorer" aria-label="Workflow explorer">
      {/* Filter chips */}
      {presentTags.length > 0 && (
        <div className={s.filters} role="group" aria-label="Filter workflows by type">
          <span className={s.filtersLabel} aria-hidden="true">Filter</span>
          {presentTags.map((tag) => (
            <button
              key={tag}
              type="button"
              className={`${s.chip} ${activeTag === tag ? s.chipActive : ""}`}
              onClick={() => setActiveTag(activeTag === tag ? null : tag)}
              aria-pressed={activeTag === tag}
            >
              {tag}
            </button>
          ))}
          {activeTag && (
            <button
              type="button"
              className={`${s.chip} ${s.clearChip}`}
              onClick={() => setActiveTag(null)}
              aria-label="Clear filter"
            >
              × Clear
            </button>
          )}
        </div>
      )}

      {/* Accordion list */}
      <div className={s.list} role="list">
        {visible.length === 0 && (
          <p className={s.empty} role="listitem">No workflows match this filter.</p>
        )}

        {visible.map((wf, i) => {
          const isOpen   = openSlug === wf.slug;
          const panelId  = `${baseId}-panel-${wf.slug}`;
          const triggerId = `${baseId}-trigger-${wf.slug}`;

          return (
            <div key={wf.slug} className={s.row} role="listitem">
              {/* Row trigger */}
              <button
                id={triggerId}
                type="button"
                className={`${s.rowTrigger} ${isOpen ? s.rowTriggerOpen : ""}`}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenSlug(isOpen ? null : wf.slug)}
              >
                <span className={s.rowIcon} aria-hidden="true">{isOpen ? "−" : "+"}</span>

                <span className={s.rowMain}>
                  <span className={s.rowName}>{wf.name}</span>
                  <span className={s.rowMeta}>
                    <span className={s.rowArchetype}>{wf.archetype}</span>
                    {wf.systems.slice(0, 3).map((sys, si) => (
                      <span key={sys} className={s.rowSystem}>
                        {si > 0 && <span className={s.rowSystemSep} aria-hidden="true"> · </span>}
                        {sys}
                      </span>
                    ))}
                  </span>
                </span>
              </button>

              {/* Expanded detail panel */}
              {isOpen && (
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={triggerId}
                  className={s.panel}
                >
                  <p className={s.panelDesc}>{wf.description}</p>
                  <p className={s.panelDrag}>{wf.operationalDrag}</p>

                  <div className={s.panelGrid}>
                    {/* Today's process */}
                    <div className={s.panelSection}>
                      <p className={s.panelSectionTitle}>Today's process</p>
                      <ol className={s.panelStepList}>
                        {wf.typicalSteps.map((step) => (
                          <li key={step} className={s.panelStepItem}>{step}</li>
                        ))}
                      </ol>
                    </div>

                    {/* Where AI helps */}
                    <div className={s.panelSection}>
                      <p className={s.panelSectionTitle}>Where AI helps</p>
                      <ul className={s.panelList}>
                        {wf.aiLeverage.map((item) => (
                          <li key={item} className={s.panelListItem}>{item}</li>
                        ))}
                      </ul>
                    </div>

                    {/* Human accountability */}
                    <div className={s.panelSection}>
                      <p className={s.panelSectionTitle}>Human remains accountable for</p>
                      <ul className={`${s.panelList} ${s.panelHumanBoundary}`}>
                        {wf.humanBoundaries.map((item) => (
                          <li key={item} className={s.panelListItem}>{item}</li>
                        ))}
                      </ul>
                    </div>

                    {/* Measurable outcomes */}
                    <div className={s.panelSection}>
                      <p className={s.panelSectionTitle}>Measurable outcomes</p>
                      <ul className={s.panelList}>
                        {wf.outcomes.map((item) => (
                          <li key={item} className={s.panelListItem}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Footer: systems, capabilities, links */}
                  <div className={s.panelFooter}>
                    <div className={s.panelSystems} aria-label="Systems involved">
                      {wf.systems.map((sys) => (
                        <span key={sys} className={s.panelSystemTag}>{sys}</span>
                      ))}
                    </div>

                    <div className={s.panelCapabilities} aria-label="Capabilities involved">
                      {wf.capabilities.map((cap) => (
                        <Link
                          key={cap}
                          href={CAPABILITY_HREF[cap] ?? `/capabilities/${cap}`}
                          className={s.capBadge}
                        >
                          {CAPABILITY_DISPLAY[cap] ?? cap}
                        </Link>
                      ))}
                    </div>

                    {(wf.playbookSlug || wf.caseStudySlug) && (
                      <div className={s.panelLinks}>
                        {wf.playbookSlug && (
                          <Link href={`/insights/playbooks/${wf.playbookSlug}`} className={s.panelLink}>
                            Read Playbook →
                          </Link>
                        )}
                        {wf.caseStudySlug && (
                          <Link href={`/insights/case-studies/${wf.caseStudySlug}`} className={s.panelLink}>
                            Read Case Study →
                          </Link>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
