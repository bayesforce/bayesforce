import Link from "next/link";
import s from "./AboutPage.module.css";

const STAGES = [
  { num: "01", label: "Trigger",   desc: "An event arrives — email, API, webhook, schedule." },
  { num: "02", label: "Ingest",    desc: "Raw inputs are ingested: documents, records, signals." },
  { num: "03", label: "Understand",desc: "Classification, intent detection, entity extraction." },
  { num: "04", label: "Context",   desc: "Hybrid retrieval from vector, graph, and relational stores." },
  { num: "05", label: "Validate",  desc: "Data quality checks, duplicate detection, schema enforcement." },
  { num: "06", label: "Reason",    desc: "Probabilistic AI reasoning over retrieved context." },
  { num: "07", label: "Execute",   desc: "Deterministic tool calls and system mutations." },
  { num: "08", label: "Output",    desc: "Structured artifacts: drafts, patches, decisions, packets." },
  { num: "09", label: "Review",    desc: "Human-in-the-loop gates for consequential actions." },
  { num: "10", label: "Record",    desc: "System-of-record write-back with cryptographic audit trail." },
  { num: "11", label: "Measure",   desc: "Operational delta tracked: cycle time, throughput, cost." },
];

const PRINCIPLES = [
  {
    title: "Work Before Technology",
    desc: "We study the workflow before we select a model. If we do not understand how the work moves today, we cannot improve it reliably. Technology choice follows operational understanding.",
  },
  {
    title: "Make Technology Invisible",
    desc: "The best AI becomes part of how the work already moves. When it works properly, operators do not notice a new system — they notice the friction is gone.",
  },
  {
    title: "Earn Autonomy",
    desc: "AI earns the right to act without review through demonstrated reliability. We do not grant full autonomy upfront. We expand it as the system proves itself at each operating threshold.",
  },
  {
    title: "Prove the Delta",
    desc: "Deployment is not success. The measurable operational change is. We define what improvement looks like before we build, then we track it after. No delta, no claim.",
  },
  {
    title: "Design for Ownership",
    desc: "Every engagement ends with the client operating the capability themselves. We are not building dependency. We are building internal organizational capability that lasts after we leave.",
  },
];

const MODEL_STEPS = [
  { label: "Operational workflow",           accent: false },
  { label: "Find the friction",              accent: false },
  { label: "Connect data and context",       accent: false },
  { label: "Engineer AI execution",          accent: true  },
  { label: "Add controls and governance",    accent: false },
  { label: "Prove the delta",               accent: false },
];

const DELTA_METRICS = [
  "Cycle time", "Throughput", "Error rate",
  "Human intervention", "Cost per transaction", "Exceptions resolved",
];

export function AboutPage() {
  return (
    <>
      {/* 1 — Hero */}
      <header className={s.hero}>
        <div className={s.heroInner}>
          <h1 className={s.heroStatement}>
            Systems should carry more of the machinery of an organization so its people can carry more of its ambition.
          </h1>
          <p className={s.heroSub}>
            Bayesforce is an AI capability engineering firm. We engineer AI into the workflows organizations already operate.
          </p>
        </div>
      </header>

      {/* 2 — What Bayesforce Is */}
      <section className={`${s.section} ${s.light}`}>
        <div className={s.inner}>
          <span style={{ display: "inline-block", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#013efa", marginBottom: "1.25rem" }}>
            What We Are
          </span>
          <div className={s.categoryGrid}>
            <div>
              <h2 style={{ fontFamily: "var(--bf-font-display)", fontSize: "clamp(1.85rem, 3.5vw, 2.5rem)", fontWeight: 600, letterSpacing: "-0.04em", lineHeight: 1.05, color: "#11151b", margin: "0 0 1.25rem" }}>
                We are not an AI consultancy.
              </h2>
              <p style={{ fontSize: "0.95rem", color: "#3e4555", lineHeight: 1.75, marginBottom: "1.25rem", borderLeft: "3px solid #013efa", paddingLeft: "1.25rem" }}>
                Bayesforce is an AI capability engineering firm. The distinction matters. Consultancies advise on strategy. Engineering firms build systems that carry operational work.
              </p>
              <p style={{ fontSize: "0.95rem", color: "#596172", lineHeight: 1.75, margin: 0 }}>
                We engineer AI into the workflow itself — not as a layer on top of existing tools, but as part of how the work moves. The result is operational capacity that scales without proportional headcount.
              </p>
            </div>
            <div>
              <p style={{ fontSize: "0.8rem", fontWeight: 700, color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "1.25rem" }}>
                The Bayesforce Model
              </p>
              <div className={s.categoryModel}>
                {MODEL_STEPS.map((step, i) => (
                  <div key={step.label}>
                    <div className={s.modelStep}>
                      <div className={`${s.modelBox} ${step.accent ? s.modelBoxAccent : ""}`}>
                        {step.label}
                      </div>
                    </div>
                    {i < MODEL_STEPS.length - 1 && <div className={s.modelArrow} />}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3 — The Thesis */}
      <section className={`${s.section} ${s.dark}`}>
        <div className={s.inner}>
          <span style={{ display: "inline-block", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#94a3b8", marginBottom: "1.25rem" }}>
            The Thesis
          </span>
          <h2 style={{ fontFamily: "var(--bf-font-display)", fontSize: "clamp(1.85rem, 3.5vw, 2.5rem)", fontWeight: 600, letterSpacing: "-0.04em", lineHeight: 1.05, color: "#f1f5f9", margin: "0 0 2rem", maxWidth: "28rem" }}>
            Organizations contain operational drag.
          </h2>
          <div className={s.thesisParagraphs}>
            <p className={s.thesisP}>
              Most enterprises possess vast amounts of data, sophisticated systems, and capable teams. Yet work still moves slowly. Not because people are incapable — because information is distributed across systems that do not communicate with each other.
            </p>
            <p className={s.thesisP}>
              People spend significant working time finding information, reconciling data between systems, waiting for approvals, re-entering information that already exists somewhere, and coordinating handoffs. This is operational drag — the capacity consumed by the machinery of coordination rather than the work itself.
            </p>
            <p className={s.thesisP}>
              Operational drag is an engineering problem. The systems can be made to carry it. That is what Bayesforce engineers.
            </p>
          </div>
          <p style={{ fontSize: "0.8rem", fontWeight: 700, color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.875rem" }}>
            Where drag appears
          </p>
          <div className={s.frictionList}>
            {["Information chasing", "Reconciliation", "Waiting for approval", "Repeated handoffs", "Context switching"].map((f) => (
              <span key={f} className={s.frictionItem}>{f}</span>
            ))}
          </div>
        </div>
      </section>

      {/* 4 — Operating Principles */}
      <section className={`${s.section} ${s.raised}`}>
        <div className={s.inner}>
          <span style={{ display: "inline-block", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#013efa", marginBottom: "1.25rem" }}>
            Operating Principles
          </span>
          <h2 style={{ fontFamily: "var(--bf-font-display)", fontSize: "clamp(1.85rem, 3.5vw, 2.5rem)", fontWeight: 600, letterSpacing: "-0.04em", lineHeight: 1.05, color: "#11151b", margin: "0 0 2.5rem", maxWidth: "28rem" }}>
            How we think about the work.
          </h2>
          <div className={s.principlesGrid}>
            {PRINCIPLES.map((p, i) => (
              <div key={p.title} className={s.principle}>
                <span className={s.principleNum}>{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <strong className={s.principleTitle}>{p.title}</strong>
                  <p className={s.principleDesc}>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5 — How We Work */}
      <section className={`${s.section} ${s.dark}`}>
        <div className={s.inner}>
          <span style={{ display: "inline-block", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#94a3b8", marginBottom: "1.25rem" }}>
            The Delivery Model
          </span>
          <h2 style={{ fontFamily: "var(--bf-font-display)", fontSize: "clamp(1.85rem, 3.5vw, 2.5rem)", fontWeight: 600, letterSpacing: "-0.04em", lineHeight: 1.05, color: "#f1f5f9", margin: "0 0 1rem", maxWidth: "32rem" }}>
            Every workflow follows the same 11-stage lifecycle.
          </h2>
          <p style={{ fontSize: "1rem", color: "#94a3b8", lineHeight: 1.7, margin: "0 0 3rem", maxWidth: "40rem" }}>
            Systems that skip stages are the ones that fail in production. The lifecycle ensures that every workflow is understood before it is automated, and measured after it is deployed.
          </p>
          <div className={s.pipeline}>
            {STAGES.map((stage, i) => (
              <div key={stage.num} className={s.stage}>
                <div className={s.stageTrack}>
                  <div className={s.stageNode}>{stage.num}</div>
                  {i < STAGES.length - 1 && <div className={s.stageLine} aria-hidden="true" />}
                </div>
                <div>
                  <strong className={s.stageLabel}>{stage.label}</strong>
                  <p className={s.stageDesc}>{stage.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6 — The Standard */}
      <section className={`${s.section} ${s.light}`}>
        <div className={s.inner}>
          <span style={{ display: "inline-block", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#013efa", marginBottom: "1.25rem" }}>
            How We Measure
          </span>
          <div className={s.standardBody}>
            <h2 style={{ fontFamily: "var(--bf-font-display)", fontSize: "clamp(1.85rem, 3.5vw, 2.5rem)", fontWeight: 600, letterSpacing: "-0.04em", lineHeight: 1.05, color: "#11151b", margin: "0 0 1.5rem" }}>
              Deployment isn&apos;t the outcome. The delta is.
            </h2>
            <p className={s.standardLead}>
              Before we build anything, we define what meaningful improvement looks like and how it will be measured. After deployment, we track it.
            </p>
            <p className={s.standardP}>
              The operational delta is the change in the metrics that actually matter to the organization. Not system activity. Not model calls. The change in how efficiently the work moves.
            </p>
            <div className={s.metricsRow}>
              {DELTA_METRICS.map((m) => (
                <span key={m} className={s.metricBadge}>{m}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7 — Who We Are */}
      <section className={`${s.section} ${s.raised}`}>
        <div className={s.inner}>
          <span style={{ display: "inline-block", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#013efa", marginBottom: "1.25rem" }}>
            Team
          </span>
          <h2 style={{ fontFamily: "var(--bf-font-display)", fontSize: "clamp(1.85rem, 3.5vw, 2.5rem)", fontWeight: 600, letterSpacing: "-0.04em", lineHeight: 1.05, color: "#11151b", margin: "0 0 1rem", maxWidth: "24rem" }}>
            Bayesforce is built by engineers and operators.
          </h2>
          <p style={{ fontSize: "0.95rem", color: "#596172", lineHeight: 1.75, maxWidth: "40rem", margin: "0 0 2.5rem" }}>
            Named in honor of Thomas Bayes (1701–1761), the pioneer of probabilistic inference. We believe organizations should update how they operate based on evidence — and that the systems they use should help them do so.
          </p>
          <div className={s.teamGrid}>
            <div className={s.teamCard}>
              <div className={s.teamName}>Sagar Udasi</div>
              <div className={s.teamRole}>Principal Systems Architect</div>
              <p className={s.teamBio}>
                Building at the intersection of enterprise operations and AI engineering.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8 — Named for Bayes */}
      <section className={`${s.section} ${s.dark}`}>
        <div className={s.inner}>
          <div className={s.bayesQuote}>
            <p style={{ fontFamily: "var(--bf-font-mono)", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#013efa", marginBottom: "1.25rem" }}>
              Thomas Bayes, 1701–1761
            </p>
            <blockquote className={s.bayesStatement}>
              &ldquo;We update our beliefs based on evidence.&rdquo;
            </blockquote>
            <p className={s.bayesExplain}>
              Bayesian reasoning is the practice of forming a prior belief, observing evidence, and updating accordingly. We apply this principle to operational systems: form a hypothesis about the workflow, instrument it, and adjust based on what the data shows. The name is a commitment to that standard.
            </p>
          </div>
        </div>
      </section>

      {/* 9 — CTA */}
      <section className={s.ctaSection}>
        <div className={s.ctaInner}>
          <h2 className={s.ctaHeadline}>Have a workflow worth fixing?</h2>
          <p className={s.ctaSub}>
            Tell us where work gets stuck. We&apos;ll determine whether AI can carry it.
          </p>
          <div className={s.ctaActions}>
            <Link href="/talk" className={s.btnPrimary}>Talk to Bayesforce</Link>
            <Link href="/workflows" className={s.btnSecondary}>Explore Workflows</Link>
          </div>
        </div>
      </section>
    </>
  );
}
