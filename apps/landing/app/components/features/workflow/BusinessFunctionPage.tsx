import Link from "next/link";
import type { BusinessFunction } from "@/content/businessFunctions";
import { FUNCTION_BY_SLUG } from "@/content/businessFunctions";
import { INSIGHTS, CAPABILITIES, getCapabilityHref, type CapabilityItem } from "@/content/catalog";
import { WorkflowExplorer } from "./WorkflowExplorer";
import { WorkflowDragViz } from "./WorkflowDragViz";
import s from "./BusinessFunctionPage.module.css";

const AI_MECHANISMS = [
  { num: "01", label: "Extract",   desc: "Deterministic ML and structured parsing for documents, emails, and records." },
  { num: "02", label: "Retrieve",  desc: "Hybrid semantic and keyword search across organizational knowledge and history." },
  { num: "03", label: "Reason",    desc: "Probabilistic model inference for unstructured inputs and ambiguous decisions." },
  { num: "04", label: "Validate",  desc: "Deterministic business rule checking and data quality enforcement." },
  { num: "05", label: "Execute",   desc: "Governed API calls and system mutations within sandboxed, auditable boundaries." },
  { num: "06", label: "Approve",   desc: "Human review and sign-off for consequential decisions — always in the loop." },
];

/* ── Sub-components ─────────────────────────────────────────────────── */

function FunctionHero({ fn }: { fn: BusinessFunction }) {
  return (
    <section className={`${s.section} ${s.dark}`} aria-labelledby="function-title">
      <div className={s.inner}>
        <div className={s.heroLayout}>
          <div className={s.heroText}>
            <span className={`${s.kicker} ${s.kickerDark}`}>{fn.eyebrow} — {fn.name}</span>
            <h1 id="function-title" className={s.heroTitle}>{fn.title}</h1>
            <p className={s.heroDesc}>{fn.description}</p>
            <div className={s.heroActions}>
              <a href="#workflow-explorer" className={s.heroPrimary}>
                Explore workflows
              </a>
              <Link href="/talk" className={s.heroSecondary}>
                Talk to Bayesforce →
              </Link>
            </div>
          </div>

          <div className={s.heroViz}>
            <WorkflowDragViz
              manual={fn.manualFlow}
              aiAssisted={fn.aiAssistedFlow}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function OperationalDragSection({ fn }: { fn: BusinessFunction }) {
  return (
    <section className={`${s.section} ${s.dark}`} aria-labelledby="drag-headline">
      <div className={s.inner}>
        <span className={`${s.kicker} ${s.kickerDark}`}>Operational Drag</span>
        <h2 id="drag-headline" className={`${s.headline} ${s.headlineLg}`} style={{ color: "#f1f5f9", maxWidth: "32rem" }}>
          {fn.dragHeadline}
        </h2>
        <p className={`${s.sub} ${s.subDark}`}>{fn.dragIntro}</p>

        <div className={s.dragGrid}>
          {fn.dragPatterns.map((p, i) => (
            <div key={p.label} className={s.dragCard}>
              <span className={s.dragNum}>{String(i + 1).padStart(2, "0")}</span>
              <strong className={s.dragLabel}>{p.label}</strong>
              <p className={s.dragBody}>{p.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WorkflowLandscape({ fn }: { fn: BusinessFunction }) {
  return (
    <section className={`${s.section} ${s.light}`} aria-labelledby="landscape-headline">
      <div className={s.inner}>
        <div className={s.landscapeHeader}>
          <span className={`${s.kicker} ${s.kickerBlue}`}>Workflow Landscape</span>
          <h2 id="landscape-headline" className={`${s.headline} ${s.headlineLg}`} style={{ color: "#11151b" }}>
            The workflows underneath {fn.name}.
          </h2>
          <p className={`${s.sub} ${s.subLight}`} style={{ marginBottom: 0 }}>
            A business function is not one process. It is a collection of recurring workflows, each with its own friction pattern, system dependencies, and AI leverage points.
          </p>
        </div>

        <div className={s.landscapeList} role="list">
          {fn.workflows.map((wf, i) => (
            <a
              key={wf.slug}
              href="#workflow-explorer"
              className={s.landscapeRow}
              role="listitem"
              aria-label={`Explore ${wf.name} in detail`}
            >
              <span className={s.landscapeNum} aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
              <div className={s.landscapeContent}>
                <span className={s.landscapeName}>{wf.name}</span>
                <p className={s.landscapeDesc}>{wf.description}</p>
                <div className={s.landscapeMeta}>
                  <span className={s.archetypeBadge}>{wf.archetype}</span>
                  {wf.systems.slice(0, 3).map((sys) => (
                    <span key={sys} className={s.systemBadge}>{sys}</span>
                  ))}
                </div>
              </div>
              <span className={s.landscapeArrow} aria-hidden="true">→</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function AIApplicationSection({ fn }: { fn: BusinessFunction }) {
  return (
    <section className={`${s.section} ${s.raised}`} aria-labelledby="ai-app-headline">
      <div className={s.inner}>
        <span className={`${s.kicker} ${s.kickerBlue}`}>How We Apply AI</span>
        <h2 id="ai-app-headline" className={`${s.headline} ${s.headlineLg}`} style={{ color: "#11151b" }}>
          AI should carry the machinery, not replace the judgment.
        </h2>
        <p className={s.aiApplicationIntro}>{fn.aiApplicationIntro}</p>

        <div className={s.mechanismsGrid}>
          {AI_MECHANISMS.map((m) => (
            <div key={m.num} className={s.mechanismCard}>
              <span className={s.mechanismNum}>{m.num}</span>
              <strong className={s.mechanismLabel}>{m.label}</strong>
              <p className={s.mechanismDesc}>{m.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CapabilitiesSection({ fn, capData }: { fn: BusinessFunction; capData: CapabilityItem[] }) {
  return (
    <section className={`${s.section} ${s.light}`} aria-labelledby="cap-headline">
      <div className={s.inner}>
        <span className={`${s.kicker} ${s.kickerBlue}`}>Underlying Capabilities</span>
        <h2 id="cap-headline" className={`${s.headline} ${s.headlineLg}`} style={{ color: "#11151b" }}>
          Underneath the workflow is an engineering system.
        </h2>
        <p className={`${s.sub} ${s.subLight}`}>
          {fn.name} workflows draw on these Bayesforce capability layers.
        </p>

        <div className={s.capabilitiesGrid}>
          {fn.capabilities.map((cn, i) => {
            const cap = capData[i];
            if (!cap) return null;
            return (
              <Link
                key={cn.slug}
                href={getCapabilityHref(cn.slug)}
                className={s.capabilityCard}
              >
                <span className={s.capabilityCardNum}>{String(i + 1).padStart(2, "0")}</span>
                <strong className={s.capabilityCardTitle}>{cap.shortTitle}</strong>
                <p className={s.capabilityCardRelevance}>{cn.relevance}</p>
                <span className={s.capabilityCardCta}>Explore capability →</span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function MeasurementSection({ fn }: { fn: BusinessFunction }) {
  return (
    <section className={`${s.section} ${s.dark}`} aria-labelledby="metrics-headline">
      <div className={s.inner}>
        <span className={`${s.kicker} ${s.kickerDark}`}>Measurement</span>
        <h2 id="metrics-headline" className={`${s.headline} ${s.headlineLg}`} style={{ color: "#f1f5f9" }}>
          What should actually improve?
        </h2>
        <div className={s.metricsDisclaimer} role="note" aria-label="Disclaimer">
          Potential metrics — not claimed outcomes
        </div>

        <div className={s.metricsGrid}>
          {fn.metrics.map((m, i) => (
            <div key={m.label} className={s.metricCard}>
              <span className={s.metricNum}>{String(i + 1).padStart(2, "0")}</span>
              <strong className={s.metricLabel}>{m.label}</strong>
              <p className={s.metricDesc}>{m.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

type InsightItem = { slug: string; type: string; typeLabel: string; title: string; summary: string; readTime: string };

function InsightsSectionBlock({
  caseStudies,
  playbooks,
  guides,
  fnName,
}: {
  caseStudies: InsightItem[];
  playbooks: InsightItem[];
  guides: InsightItem[];
  fnName: string;
}) {
  const items = [...caseStudies, ...playbooks, ...guides].slice(0, 4);

  return (
    <section className={`${s.section} ${s.raised}`} aria-labelledby="insights-headline">
      <div className={s.inner}>
        <span className={`${s.kicker} ${s.kickerBlue}`}>Insights</span>
        <h2 id="insights-headline" className={`${s.headline} ${s.headlineLg}`} style={{ color: "#11151b" }}>
          Keep reading about {fnName.toLowerCase()}.
        </h2>

        {items.length === 0 ? (
          <p className={s.insightsEmpty}>
            Evidence from {fnName.toLowerCase()} deployments is coming as our work in this area matures.
          </p>
        ) : (
          <div className={s.insightsGrid}>
            {items.map((item) => {
              const typeSlug = item.type === "case-studies" ? "case-studies"
                : item.type === "playbooks" ? "playbooks"
                : item.type === "guides" ? "guides" : "reports";
              return (
                <Link
                  key={item.slug}
                  href={`/insights/${typeSlug}/${item.slug}`}
                  className={s.insightCard}
                >
                  <span className={s.insightType}>{item.typeLabel}</span>
                  <strong className={s.insightTitle}>{item.title}</strong>
                  <p className={s.insightSummary}>{item.summary}</p>
                  <span className={s.insightReadTime}>{item.readTime}</span>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}

function RelatedFunctionsSection({ relatedSlugs }: { relatedSlugs: string[] }) {
  const related = relatedSlugs
    .map((slug) => FUNCTION_BY_SLUG[slug])
    .filter(Boolean) as BusinessFunction[];

  if (related.length === 0) return null;

  return (
    <section className={`${s.section} ${s.light}`} aria-labelledby="related-headline">
      <div className={s.inner}>
        <span className={`${s.kicker} ${s.kickerBlue}`}>Related Functions</span>
        <h2 id="related-headline" className={`${s.headline} ${s.headlineLg}`} style={{ color: "#11151b" }}>
          Adjacent workflow families.
        </h2>
        <p className={`${s.sub} ${s.subLight}`}>
          Operational drag rarely stays inside one function. These areas often share workflow patterns and system dependencies.
        </p>

        <div className={s.relatedGrid}>
          {related.map((fn) => (
            <Link key={fn.slug} href={`/workflows/${fn.slug}`} className={s.relatedCard}>
              <div>
                <strong className={s.relatedCardName}>{fn.name}</strong>
              </div>
              <span className={s.relatedCardArrow} aria-hidden="true">→</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTASection({ fn }: { fn: BusinessFunction }) {
  return (
    <section className={`${s.section} ${s.veryDark}`} aria-labelledby="cta-headline">
      <div className={s.inner}>
        <div className={s.ctaContent}>
          <span className={`${s.kicker} ${s.kickerDark}`}>Talk to Bayesforce</span>
          <h2 id="cta-headline" className={s.ctaHeadline}>
            Have a workflow worth fixing?
          </h2>
          <p className={s.ctaBody}>
            Tell us where work gets stuck in {fn.name.toLowerCase()}, what systems are involved, and what better would look like.
          </p>
          <div className={s.ctaActions}>
            <Link href="/talk" className={s.ctaPrimary}>
              Talk to Bayesforce
            </Link>
            <Link href="/workflows" className={s.ctaSecondary}>
              Explore another function →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Main export ─────────────────────────────────────────────────────── */

export function BusinessFunctionPage({ fn }: { fn: BusinessFunction }) {
  // Derive related insights from catalog
  const related = INSIGHTS.filter((i) =>
    i.relatedWorkflows.includes(fn.catalogSlug)
  );
  const caseStudies = related.filter((i) => i.type === "case-studies");
  const playbooks   = related.filter((i) => i.type === "playbooks");
  const guides      = related.filter((i) => i.type === "guides");

  // Derive capability data, preserving fn.capabilities order
  const capData = fn.capabilities
    .map((cn) => CAPABILITIES.find((c) => c.id === cn.slug || c.slug === cn.slug))
    .filter((c): c is CapabilityItem => c !== undefined);

  return (
    <>
      <FunctionHero fn={fn} />
      <OperationalDragSection fn={fn} />
      <WorkflowLandscape fn={fn} />

      {/* Explorer section — client component wrapped in a server section */}
      <section className={`${s.section} ${s.raised}`}>
        <div className={s.inner}>
          <span className={`${s.kicker} ${s.kickerBlue}`}>Workflow Explorer</span>
          <h2 className={`${s.headline} ${s.headlineLg}`} style={{ color: "#11151b", marginBottom: "0.75rem" }}>
            Explore each workflow in detail.
          </h2>
          <p className={`${s.sub} ${s.subLight}`}>
            Select any workflow to see how work moves today, where AI can carry it, and where human judgment must remain.
          </p>
          <WorkflowExplorer workflows={fn.workflows} functionSlug={fn.slug} />
        </div>
      </section>

      <AIApplicationSection fn={fn} />
      <CapabilitiesSection fn={fn} capData={capData} />
      <MeasurementSection fn={fn} />
      <InsightsSectionBlock
        caseStudies={caseStudies}
        playbooks={playbooks}
        guides={guides}
        fnName={fn.name}
      />
      <RelatedFunctionsSection relatedSlugs={fn.relatedFunctions} />
      <FinalCTASection fn={fn} />
    </>
  );
}
