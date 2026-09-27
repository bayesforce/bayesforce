"use client";

import { useState, useRef, useEffect } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import styles from "./home.module.css";
import s from "./WorkflowInAction.module.css";

const STEPS = [
  {
    id: 1,
    phase: "Trigger",
    actor: "System",
    time: "0s",
    headline: "Invoice arrives",
    description: "A PDF invoice from a vendor lands in the accounts payable inbox. The system detects it and initiates the workflow automatically.",
    detail: "SFTP listener + SHA-256 duplicate check",
  },
  {
    id: 2,
    phase: "Extract",
    actor: "AI",
    time: "4s",
    headline: "Data extracted",
    description: "A layout-aware model parses the PDF — extracting line items, VAT numbers, banking details, and payment terms — into a validated schema.",
    detail: "Docling + Pydantic schema contract",
  },
  {
    id: 3,
    phase: "Validate",
    actor: "System",
    time: "7s",
    headline: "Matched against PO",
    description: "The extracted invoice is mathematically matched against the corresponding purchase order and warehouse receipt in the ERP.",
    detail: "3-way deterministic matching engine",
  },
  {
    id: 4,
    phase: "Detect",
    actor: "AI",
    time: "8s",
    headline: "$450 variance found",
    description: "The system detects a $450 price discrepancy exceeding the configured tolerance threshold. The invoice cannot be auto-approved.",
    detail: "Tolerance rule: ±0.5% or ±$100",
  },
  {
    id: 5,
    phase: "Escalate",
    actor: "Human",
    time: "9s",
    headline: "Review card sent",
    description: "A structured review card is delivered to the AP lead in Slack — showing the variance, the source invoice, and the matching PO side-by-side.",
    detail: "Interactive Slack approval block",
  },
  {
    id: 6,
    phase: "Resolve",
    actor: "System",
    time: "14 min",
    headline: "Approved → ERP updated",
    description: "The AP lead approves the exception with one click. The system posts the journal entry to NetSuite and logs the decision with a full audit trail.",
    detail: "Immutable audit log + ERP write-back",
  },
];

const ACTOR_COLORS: Record<string, string> = {
  System: "#94a3b8",
  AI: "#013efa",
  Human: "#10b981",
};

export function WorkflowInAction() {
  const [active, setActive] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const step = STEPS[active];

  useGSAP(
    () => {
      if (!sectionRef.current) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      tl.fromTo(
        headerRef.current?.children || [],
        { opacity: 0, y: 28 },
        { opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: "power3.out" }
      ).fromTo(
        playerRef.current,
        { opacity: 0, y: 32, scale: 0.98 },
        { opacity: 1, y: 0, scale: 1, duration: 0.65, ease: "power2.out" },
        "-=0.3"
      );
    },
    { scope: sectionRef }
  );

  // Animate panel transitions on step change
  useEffect(() => {
    if (panelRef.current) {
      gsap.fromTo(
        panelRef.current,
        { opacity: 0, y: 12 },
        { opacity: 1, y: 0, duration: 0.35, ease: "power2.out" }
      );
    }
  }, [active]);

  return (
    <section ref={sectionRef} className={`${styles.section} ${styles.raised}`}>
      <div className={styles.inner}>
        <div ref={headerRef}>
          <span className={`${styles.kicker} ${s.kicker}`}>Workflow in Action</span>
          <h2 className={`${styles.headline} ${s.headline}`}>
            From request to resolution in seconds.
          </h2>
          <p className={s.sub}>
            Invoice exception handling — a real workflow, traced end to end.
          </p>
        </div>

        <div ref={playerRef} className={s.player}>
          <div className={s.strip} role="tablist" aria-label="Workflow steps">
            {STEPS.map((st, i) => (
              <button
                key={st.id}
                role="tab"
                aria-selected={i === active}
                aria-controls={`workflow-panel-${st.id}`}
                type="button"
                className={`${s.stepBtn} ${i === active ? s.stepBtnActive : ""}`}
                onClick={() => setActive(i)}
              >
                <span className={s.stepPhase}>{st.phase}</span>
                <span className={s.stepTime}>{st.time}</span>
              </button>
            ))}
          </div>

          <div
            ref={panelRef}
            id={`workflow-panel-${step.id}`}
            role="tabpanel"
            className={s.panel}
          >
            <div className={s.panelMeta}>
              <span
                className={s.actorBadge}
                style={{ color: ACTOR_COLORS[step.actor], borderColor: `${ACTOR_COLORS[step.actor]}33` }}
              >
                {step.actor}
              </span>
              <span className={s.phaseLabel}>{step.phase}</span>
            </div>
            <h3 className={s.panelHeadline}>{step.headline}</h3>
            <p className={s.panelBody}>{step.description}</p>
            <div className={s.panelDetail}>
              <span className={s.detailLabel}>Implementation</span>
              <code className={s.detailCode}>{step.detail}</code>
            </div>

            <div className={s.navRow}>
              <button
                type="button"
                className={s.navBtn}
                onClick={() => setActive((a) => Math.max(0, a - 1))}
                disabled={active === 0}
                aria-label="Previous step"
              >
                ← Previous
              </button>
              <span className={s.navCount}>{active + 1} / {STEPS.length}</span>
              <button
                type="button"
                className={s.navBtn}
                onClick={() => setActive((a) => Math.min(STEPS.length - 1, a + 1))}
                disabled={active === STEPS.length - 1}
                aria-label="Next step"
              >
                Next →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
