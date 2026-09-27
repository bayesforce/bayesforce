"use client";

import React from "react";
import Link from "next/link";
import { Icon } from "@/components/ui";
import styles from "./ArchitectureDiagnosticSection.module.css";

interface DiagnosticStep {
  step: string;
  title: string;
  desc: string;
  focusItems: string[];
}

const STEPS: DiagnosticStep[] = [
  {
    step: "STEP 01",
    title: "Source Audit",
    desc: "Catalog current systems of record, API limits, schema fragmentation, and access topologies across the enterprise footprint.",
    focusItems: ["Schema Inspection", "CDC & Batch Latency", "API Quotas & 429 Risks"],
  },
  {
    step: "STEP 02",
    title: "Pipeline & Runtime Evaluation",
    desc: "Assess transformation bottlenecks, entity conflict rates, cloud tenancy constraints, and operational SLA adherence.",
    focusItems: ["VPC Peering Review", "Golden Record Strategy", "Buffer & Retry Dynamics"],
  },
  {
    step: "STEP 03",
    title: "Context & AI Readiness Plan",
    desc: "Map relational organizational memory, unstructured document parsing needs, and factual grounding requirements for AI workloads.",
    focusItems: ["Hybrid Retrieval Blueprint", "Multi-Modal Parsing", "Source Grounding Asserts"],
  },
];

export const ArchitectureDiagnosticSection: React.FC = () => {
  return (
    <section id="diagnostic" className={styles.section} aria-labelledby="diagnostic-title">
      <div className={styles.inner}>
        <header className={styles.header}>
          <div className={styles.eyebrow}>
            <span>Section 6 · The Architecture Diagnostic</span>
          </div>

          <h2 id="diagnostic-title" className={styles.headline}>
            Every engagement starts with your actual data estate.
          </h2>

          <p className={styles.subtext}>
            No hypothetical roadmaps or generic proposals. We begin with a structured
            architectural evaluation of your source systems, pipeline friction, and AI context requirements.
          </p>
        </header>

        {/* 3 Diagnostic Steps */}
        <div className={styles.stepsGrid}>
          {STEPS.map((s) => (
            <div key={s.step} className={styles.stepCard}>
              <div className={styles.stepHeader}>
                <span className={styles.stepPill}>{s.step}</span>
              </div>
              <h3 className={styles.stepTitle}>{s.title}</h3>
              <p className={styles.stepDesc}>{s.desc}</p>

              <div className={styles.focusList}>
                {s.focusItems.map((item) => (
                  <span key={item} className={styles.focusBadge}>
                    <Icon name="check" size={12} />
                    <span>{item}</span>
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Intake Card */}
        <div className={styles.ctaBox}>
          <div className={styles.ctaContent}>
            <h3 className={styles.ctaHeadline}>
              Ready to engineer reliable AI data infrastructure?
            </h3>
            <p className={styles.ctaSub}>
              Evaluate technical feasibility, cloud tenancy, and pipeline mechanics directly with a principal data engineer.
            </p>
          </div>

          <div className={styles.ctaAction}>
            <Link href="/talk" className={styles.primaryCtaBtn}>
              <span>Schedule an Architecture Diagnostic</span>
              <span aria-hidden="true">→</span>
            </Link>
            <p className={styles.reassuranceNote}>
              Direct engineer access • Zero sales pressure • Technical evaluation
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
