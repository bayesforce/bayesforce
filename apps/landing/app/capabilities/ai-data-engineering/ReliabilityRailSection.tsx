"use client";

import React from "react";
import { Icon } from "@/components/ui";
import styles from "./ReliabilityRailSection.module.css";

interface RailRow {
  stage: string;
  focus: string;
  mechanism: string;
  telemetryTag: string;
}

const RAIL_DATA: RailRow[] = [
  {
    stage: "STAGE 01: CONNECT",
    focus: "Access & Lineage",
    mechanism: "Scoped least-privilege tokens, encrypted credential vaults, and PrivateLink network boundaries establish an immutable origin audit trail.",
    telemetryTag: "Access Verified",
  },
  {
    stage: "STAGE 02: INGEST",
    focus: "Freshness & Throughput",
    mechanism: "Real-time sync SLA latency monitoring, automated backpressure throttling, and zero-drop buffers ensure pipelines absorb sudden spikes.",
    telemetryTag: "Freshness: <2s",
  },
  {
    stage: "STAGE 03: TRANSFORM",
    focus: "Quality & Validation",
    mechanism: "Pre-ingestion schema assertions, data contract unit tests, and segregated exception queues prevent malformed records from downstream pollution.",
    telemetryTag: "Assertions: 100% Pass",
  },
  {
    stage: "STAGE 04: ARCHITECT",
    focus: "Security & Tenancy (VPC)",
    mechanism: "Single-tenant execution in customer VPC boundaries, enterprise RBAC enforcement, AES-256 at rest, TLS 1.3 in transit, and customer KMS.",
    telemetryTag: "VPC Isolated",
  },
  {
    stage: "STAGE 05: STORE",
    focus: "Lineage & Auditability",
    mechanism: "Append-only transaction logs with cryptographic checksums, automated point-in-time recovery, and strict access boundaries for regulatory durability.",
    telemetryTag: "Lineage Verified",
  },
  {
    stage: "STAGE 06: SERVE",
    focus: "Observability & Latency",
    mechanism: "Sub-50ms query latency watermarks, circuit breakers, and automated API uptime monitoring ensure mission-critical applications never face silent timeouts.",
    telemetryTag: "Latency: <28ms",
  },
  {
    stage: "STAGE 07: CONTEXT",
    focus: "Traceability & Source Grounding",
    mechanism: "100% source-grounded prompt citations linking AI outputs directly to original raw records and documents; prompt assertions reject ungrounded hallucinations.",
    telemetryTag: "Grounding: 100% Cited",
  },
];

export const ReliabilityRailSection: React.FC = () => {
  return (
    <section id="reliability-rail" className={styles.section} aria-labelledby="rail-title">
      <div className={styles.inner}>
        <header className={styles.header}>
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowDot} />
            <span>Section 4 · Continuous Reliability & Control</span>
          </div>

          <h2 id="rail-title" className={styles.headline}>
            Reliability and control are built into the engineering.
          </h2>

          <p className={styles.subtext}>
            Reliability is not a monitoring dashboard you check after a failure. It is an active
            engineering standard enforced across every stage of the data pipeline: from initial
            connection access to source-grounded AI context.
          </p>
        </header>

        {/* Rail Mapping Table */}
        <div className={styles.tableWrapper}>
          <table className={styles.railTable}>
            <thead>
              <tr>
                <th className={styles.thStage}>Pipeline Stage</th>
                <th className={styles.thFocus}>Active Reliability Focus</th>
                <th className={styles.thMechanism}>Concrete Engineering Mechanism</th>
                <th className={styles.thTelemetry}>Telemetry Status</th>
              </tr>
            </thead>
            <tbody>
              {RAIL_DATA.map((row) => (
                <tr key={row.stage} className={styles.tableRow}>
                  <td className={styles.tdStage}>
                    <span className={styles.stageIndicator} />
                    <span>{row.stage}</span>
                  </td>
                  <td className={styles.tdFocus}>{row.focus}</td>
                  <td className={styles.tdMechanism}>{row.mechanism}</td>
                  <td className={styles.tdTelemetry}>
                    <span className={styles.telemetryBadge}>
                      <Icon name="check-circle" size={13} />
                      <span>{row.telemetryTag}</span>
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
