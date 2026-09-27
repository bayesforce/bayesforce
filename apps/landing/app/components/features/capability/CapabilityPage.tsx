import Link from "next/link";
import type { CapabilityItem } from "@/content/catalog";
import { CAPABILITIES, WORKFLOWS, INSIGHTS, getCapabilityHref } from "@/content/catalog";
import { WORKFLOW_CATALOG_TO_ROUTE } from "@/content/businessFunctions";
import s from "./CapabilityPage.module.css";

/* ── Capability-specific overrides ─────────────────────────── */
const HEADLINES: Record<string, string> = {
  "ai-data-engineering":
    "Give intelligent systems the context your organization already has.",
  "ai-coworkers":
    "Engineer AI that executes operational work across the systems your teams already use.",
  "ai-trust-and-governance":
    "Make intelligent systems measurable, observable, and controlled in production.",
  "ai-capability":
    "Turn an AI implementation into organizational capability.",
};

const FLOW_STEPS: Record<string, { label: string; accent?: boolean }[]> = {
  "ai-data-engineering": [
    { label: "Source Systems" },
    { label: "Ingestion" },
    { label: "Normalization" },
    { label: "Context Layer", accent: true },
    { label: "AI Workflows" },
  ],
  "ai-coworkers": [
    { label: "Trigger" },
    { label: "Context" },
    { label: "Reason", accent: true },
    { label: "Validate" },
    { label: "Execute" },
    { label: "Record" },
  ],
  "ai-trust-and-governance": [
    { label: "Quality" },
    { label: "Observability" },
    { label: "Cost Control", accent: true },
    { label: "Governance" },
  ],
  "ai-capability": [
    { label: "Understand Workflow" },
    { label: "Implement & Co-Engineer", accent: true },
    { label: "Train & Transfer" },
    { label: "Measure Delta" },
  ],
};

const QUADRANT_DATA: Record<string, { label: string; desc: string }[]> = {
  "ai-trust-and-governance": [
    { label: "Quality & Evals",     desc: "Workflow-specific benchmarks, golden datasets, regression CI/CD." },
    { label: "Observability",        desc: "Distributed tracing, latency monitoring, failure alerting." },
    { label: "AI FinOps",            desc: "Token attribution, model routing, semantic caching." },
    { label: "Safety & Governance",  desc: "Permissions, PII controls, prompt injection defenses, audit logs." },
  ],
};

const FOUR_STEP_DATA: Record<string, { num: string; label: string; desc: string }[]> = {
  "ai-capability": [
    { num: "01", label: "Understand Workflow",       desc: "Study the operational process before selecting any technology." },
    { num: "02", label: "Implement & Co-Engineer",   desc: "Build the capability alongside your team in real systems." },
    { num: "03", label: "Train & Transfer",          desc: "Teach the engineering, evaluation, and operating patterns." },
    { num: "04", label: "Measure Capability Delta",  desc: "Quantify what internal teams can now build and operate independently." },
  ],
};

/* ── All-Four-Capabilities diagram data ─────────────────────── */
const ALL_FOUR = [
  {
    id: "ai-data-engineering",
    label: "DATA",
    slug: "ai-data-engineering",
    desc: "Context & information layer",
  },
  {
    id: "ai-coworkers",
    label: "EXECUTION",
    slug: "ai-coworkers",
    desc: "Operational work layer",
  },
  {
    id: "ai-trust-and-governance",
    label: "TRUST",
    slug: "ai-trust-and-governance",
    desc: "Control & governance layer",
  },
];

/* ── Props ──────────────────────────────────────────────────── */
interface Props {
  capability: CapabilityItem;
}

export function CapabilityPage({ capability }: Props) {
  const headline = HEADLINES[capability.id] ?? capability.tagline;
  const flowSteps = FLOW_STEPS[capability.id] ?? [];
  const quadrantCells = QUADRANT_DATA[capability.id];
  const fourSteps = FOUR_STEP_DATA[capability.id];
  const isQuadrant = !!quadrantCells;

  // Related workflows from catalog
  const relatedWorkflows = WORKFLOWS.filter(
    (wf) => capability.relatedWorkflows.includes(wf.slug)
  );

  // Related insights matched by slug
  const relatedInsights = INSIGHTS.filter(
    (i) => capability.relatedInsights.includes(i.slug)
  ).slice(0, 4);

  // Other capabilities (not this one)
  const otherCaps = CAPABILITIES.filter((c) => c.id !== capability.id);

  return (
    <>
      {/* 1 — Hero */}
      <header className={s.hero}>
        <div className={s.heroInner}>
          <div>
            <span className={s.eyebrow}>{capability.kicker}</span>
            <h1 className={s.heroHeadline}>{headline}</h1>
            <p className={s.heroSub}>{capability.tagline}</p>
            <div className={s.heroActions}>
              <Link href="/workflows" className={s.btnPrimary}>
                Explore Workflows →
              </Link>
              <Link href="/talk" className={s.btnSecondary}>
                Talk to Bayesforce
              </Link>
            </div>
          </div>

          {/* Architecture flow visual */}
          {flowSteps.length > 0 && (
            <div className={s.flowVisual} aria-hidden="true">
              {flowSteps.map((step, i) => (
                <div key={step.label}>
                  <div className={s.flowNode}>
                    <div className={`${s.flowBox} ${step.accent ? s.flowBoxAccent : ""}`}>
                      {step.label}
                    </div>
                  </div>
                  {i < flowSteps.length - 1 && <div className={s.flowArrow} />}
                </div>
              ))}
            </div>
          )}
        </div>
      </header>

      {/* 2 — Why This Exists */}
      <section className={`${s.section} ${s.light}`}>
        <div className={s.inner}>
          <span className={s.eyebrow}>The Problem This Solves</span>
          <h2 className={`${s.headline} ${s.headlineLg}`} style={{ maxWidth: "32rem", color: "#11151b" }}>
            Why this engineering layer exists.
          </h2>
          <div className={s.problemGrid}>
            <div>
              <p className={s.lead}>{capability.problemStatement}</p>
            </div>
            <div>
              <p className={s.body}>{capability.bayesforceApproach}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3 — Key Pillars */}
      <section className={`${s.section} ${s.raised}`}>
        <div className={s.inner}>
          <span className={s.eyebrow}>What Bayesforce Builds Here</span>
          <h2 className={`${s.headline} ${s.headlineLg}`} style={{ maxWidth: "32rem", color: "#11151b" }}>
            The engineering capabilities inside this layer.
          </h2>
          <div className={s.pillarsGrid}>
            {capability.keyPillars.map((pillar, i) => (
              <div key={pillar.title} className={s.pillarCard}>
                <div className={s.pillarNum}>{String(i + 1).padStart(2, "0")}</div>
                <strong className={s.pillarTitle}>{pillar.title}</strong>
                <p className={s.pillarDesc}>{pillar.description}</p>
                <ul className={s.pillarDetails}>
                  {pillar.details.slice(0, 3).map((d) => (
                    <li key={d} className={s.pillarDetail}>{d}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4 — Architecture Visual */}
      <section className={`${s.section} ${s.dark}`}>
        <div className={s.inner}>
          <span className={`${s.eyebrow} ${s.eyebrowMuted}`}>Architecture</span>
          <h2 className={`${s.headline} ${s.headlineLg}`} style={{ maxWidth: "28rem", color: "#f1f5f9" }}>
            How the system is engineered.
          </h2>

          {isQuadrant ? (
            /* Trust & Governance — quadrant layout */
            <div className={s.quadrant} style={{ marginBottom: "3rem" }}>
              {quadrantCells!.map((cell) => (
                <div key={cell.label} className={s.quadCell}>
                  <span className={s.quadLabel}>{cell.label}</span>
                  <span className={s.quadDesc}>{cell.desc}</span>
                </div>
              ))}
            </div>
          ) : (
            /* Other capabilities — vertical flow */
            <div className={s.archFlow} style={{ marginBottom: "3rem" }}>
              {flowSteps.map((step, i) => (
                <div key={step.label}>
                  <div className={s.archNode}>
                    <div className={`${s.archBox} ${step.accent ? s.archBoxAccent : ""}`}>
                      {step.label}
                    </div>
                  </div>
                  {i < flowSteps.length - 1 && <div className={s.archConnector} />}
                </div>
              ))}
            </div>
          )}

          {/* Architecture highlights table */}
          {capability.architectureHighlights.length > 0 && (
            <table className={s.archTable}>
              <thead>
                <tr>
                  <th className={s.archTh}>Layer</th>
                  <th className={s.archTh}>Technology</th>
                  <th className={s.archTh}>Purpose</th>
                </tr>
              </thead>
              <tbody>
                {capability.architectureHighlights.map((row) => (
                  <tr key={row.layer}>
                    <td className={s.archTd} style={{ fontWeight: 500, color: "#f1f5f9" }}>{row.layer}</td>
                    <td className={`${s.archTd} ${s.archTdMono}`}>{row.tech}</td>
                    <td className={s.archTd}>{row.purpose}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </section>

      {/* 5 — How It Works (Enablement only: 4-step model) */}
      {fourSteps && (
        <section className={`${s.section} ${s.light}`}>
          <div className={s.inner}>
            <span className={s.eyebrow}>The Transfer Model</span>
            <h2 className={`${s.headline} ${s.headlineLg}`} style={{ maxWidth: "28rem", color: "#11151b" }}>
              How capability transfer works.
            </h2>
            <div className={s.pillarsGrid}>
              {fourSteps.map((step) => (
                <div key={step.num} className={s.pillarCard}>
                  <div className={s.pillarNum}>{step.num}</div>
                  <strong className={s.pillarTitle}>{step.label}</strong>
                  <p className={s.pillarDesc}>{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 6 — Where It Applies */}
      {relatedWorkflows.length > 0 && (
        <section className={`${s.section} ${s.raised}`}>
          <div className={s.inner}>
            <span className={s.eyebrow}>Where It Applies</span>
            <h2 className={`${s.headline} ${s.headlineLg}`} style={{ maxWidth: "32rem", color: "#11151b" }}>
              Which workflows need this capability.
            </h2>
            <p className={s.body} style={{ marginBottom: "2rem", maxWidth: "38rem" }}>
              {capability.shortTitle} is not infrastructure for its own sake. It exists because specific operational workflows require it to function reliably.
            </p>
            <div className={s.workflowGrid}>
              {relatedWorkflows.map((wf) => {
                const routeSlug = WORKFLOW_CATALOG_TO_ROUTE[wf.slug] ?? wf.slug;
                return (
                  <Link
                    key={wf.slug}
                    href={`/workflows/${routeSlug}`}
                    className={s.workflowCard}
                  >
                    <span className={s.workflowName}>{wf.shortTitle}</span>
                    <span className={s.workflowArrow} aria-hidden="true">→</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* 7 — All Four Capabilities */}
      <section className={`${s.section} ${s.dark}`}>
        <div className={s.inner}>
          <span className={`${s.eyebrow} ${s.eyebrowMuted}`}>Part of One System</span>
          <h2 className={`${s.headline} ${s.headlineLg}`} style={{ maxWidth: "28rem", color: "#f1f5f9" }}>
            The four engineering layers work together.
          </h2>
          <p className={s.sub} style={{ color: "#94a3b8", maxWidth: "38rem" }}>
            No capability is a standalone service. Each one makes the others more effective inside a production workflow.
          </p>

          <div className={s.fourCapDiagram}>
            <div className={s.fourCapWorkflow}>WORKFLOW</div>
            <div style={{ width: "1px", height: "1.5rem", background: "rgba(255,255,255,0.12)", margin: "0 auto" }} aria-hidden="true" />
            <div className={s.fourCapBranch}>
              {ALL_FOUR.map((cap) => (
                <Link
                  key={cap.id}
                  href={getCapabilityHref(cap.slug)}
                  className={`${s.fourCapCell} ${cap.id === capability.id ? s.fourCapCellActive : ""}`}
                >
                  <span className={s.fourCapCellLabel}>{cap.label}</span>
                  <span className={s.fourCapCellDesc}>{cap.desc}</span>
                </Link>
              ))}
            </div>
            <div style={{ width: "1px", height: "1.5rem", background: "rgba(255,255,255,0.12)", margin: "0 auto" }} aria-hidden="true" />
            <Link href={getCapabilityHref("ai-capability")} className={s.fourCapEnablement}>
              ENABLEMENT — Organizational transfer
            </Link>
          </div>
        </div>
      </section>

      {/* 8 — Relevant Insights */}
      <section className={`${s.section} ${s.light}`}>
        <div className={s.inner}>
          <span className={s.eyebrow}>From the Bayesforce Library</span>
          <h2 className={`${s.headline} ${s.headlineLg}`} style={{ maxWidth: "28rem", color: "#11151b" }}>
            Read more about this capability.
          </h2>
          {relatedInsights.length === 0 ? (
            <p className={s.emptyState}>
              Insights for this capability are being published as deployments mature.
            </p>
          ) : (
            <div className={s.insightsGrid}>
              {relatedInsights.map((insight) => (
                <Link
                  key={insight.slug}
                  href={`/insights/${insight.type}/${insight.slug}`}
                  className={s.insightCard}
                >
                  <span className={s.insightType}>{insight.typeLabel}</span>
                  <h3 className={s.insightTitle}>{insight.title}</h3>
                  <p className={s.insightSummary}>{insight.summary}</p>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* 9 — Final CTA */}
      <section className={`${s.section} ${s.vDark}`}>
        <div className={s.inner} style={{ textAlign: "center" }}>
          <h2 className={`${s.headline} ${s.headlineXl}`} style={{ color: "#f1f5f9", maxWidth: "26rem", margin: "0 auto 1rem" }}>
            Have a workflow that needs this capability?
          </h2>
          <p style={{ color: "rgba(241,245,249,0.5)", fontSize: "1rem", lineHeight: 1.65, marginBottom: "2.25rem" }}>
            Tell us where the operational drag is. We&apos;ll determine whether this capability provides the leverage.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/talk" className={s.btnPrimary}>Talk to Bayesforce</Link>
            <Link href="/workflows" className={s.btnSecondary}>Explore Workflows</Link>
          </div>
        </div>
      </section>
    </>
  );
}
