"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Icon } from "@/components/ui";
import styles from "./RecognitionSection.module.css";

interface SystemNodeData {
  id: string;
  name: string;
  logoSrc: string;
  logoAlt: string;
  role: string;
  symptom: string;
  severity: "warning" | "error" | "stale";
  symptomId: string;
  // Position coordinates on desktop screen (%)
  posX: number;
  posY: number;
}

interface SymptomDetail {
  id: string;
  title: string;
  reality: string;
  bottleneck: string;
  impactedSystems: string[];
}

const SYSTEM_NODES: SystemNodeData[] = [
  {
    id: "sap-erp",
    name: "SAP ERP",
    logoSrc: "/logos/sap.svg",
    logoAlt: "SAP Official Logo",
    role: "Structured master records, financial ledgers & purchase orders",
    symptom: "Stale Sync (4d)",
    severity: "warning",
    symptomId: "stale-records",
    posX: 12,
    posY: 10,
  },
  {
    id: "postgres-db",
    name: "PostgreSQL DB",
    logoSrc: "/logos/postgresql.svg",
    logoAlt: "PostgreSQL Official Elephant Logo",
    role: "Transactional microservice tables, orders & billing states",
    symptom: "Schema Mismatch",
    severity: "warning",
    symptomId: "schema-incompatibilities",
    posX: 65,
    posY: 8,
  },
  {
    id: "pdf-contracts",
    name: "PDF Contracts",
    logoSrc: "/logos/pdf.svg",
    logoAlt: "PDF Official Document Logo",
    role: "Signed agreements, pricing schedules & technical specs",
    symptom: "Unstructured Docs",
    severity: "error",
    symptomId: "unstructured-documents",
    posX: 28,
    posY: 38,
  },
  {
    id: "salesforce-crm",
    name: "Salesforce CRM",
    logoSrc: "/logos/salesforce.svg",
    logoAlt: "Salesforce Official Cloud Logo",
    role: "Customer touchpoints, pipeline notes & contact objects",
    symptom: "Duplicate Contacts",
    severity: "error",
    symptomId: "duplicate-entries",
    posX: 84,
    posY: 34,
  },
  {
    id: "google-sheets",
    name: "Google Sheets",
    logoSrc: "/logos/google-sheets.svg",
    logoAlt: "Google Sheets Official Logo",
    role: "Departmental trackers, reconciliation models & offline CSVs",
    symptom: "Manual Version v4",
    severity: "warning",
    symptomId: "fragmented-ownership",
    posX: 10,
    posY: 68,
  },
  {
    id: "aws-s3",
    name: "AWS S3 Buckets",
    logoSrc: "/logos/aws-s3.svg",
    logoAlt: "AWS S3 Official Storage Logo",
    role: "Raw telemetry dumps, unstructured parquet & server logs",
    symptom: "Unindexed Logs",
    severity: "stale",
    symptomId: "stale-records",
    posX: 50,
    posY: 58,
  },
  {
    id: "rest-apis",
    name: "REST & GraphQL",
    logoSrc: "/logos/graphql.svg",
    logoAlt: "GraphQL and REST API Logo",
    role: "Third-party vendor webhooks, payload schemas & microservices",
    symptom: "Rate Limited / 429",
    severity: "error",
    symptomId: "disconnected-systems",
    posX: 32,
    posY: 84,
  },
  {
    id: "kafka-streams",
    name: "Kafka Streams",
    logoSrc: "/logos/kafka.svg",
    logoAlt: "Apache Kafka Official Logo",
    role: "Customer support inboxes, Slack escalations & Kafka topics",
    symptom: "Unstructured Threads",
    severity: "warning",
    symptomId: "mismatched-refresh",
    posX: 76,
    posY: 80,
  },
];

const SYMPTOMS: SymptomDetail[] = [
  {
    id: "schema-incompatibilities",
    title: "Schema Incompatibilities",
    reality: "Different tools store the same entity with contradictory field types and missing foreign keys.",
    bottleneck: "Inconsistent data contracts between source operational systems and downstream analytical models.",
    impactedSystems: ["PostgreSQL DB", "SAP ERP", "Salesforce CRM"],
  },
  {
    id: "duplicate-entries",
    title: "Duplicate & Conflicting Entries",
    reality: "The same customer or vendor exists under three distinct variations across CRM and ERP.",
    bottleneck: "Lack of unified golden entity resolution and deterministic cross-system master record reconciliation.",
    impactedSystems: ["Salesforce CRM", "SAP ERP"],
  },
  {
    id: "stale-records",
    title: "Stale & Out-of-Sync State",
    reality: "Operational decisions and AI context rely on batch records updated days or weeks ago.",
    bottleneck: "Uncoordinated batch syncs without real-time Change Data Capture (CDC) pipelines.",
    impactedSystems: ["SAP ERP", "AWS S3 Buckets"],
  },
  {
    id: "disconnected-systems",
    title: "Disconnected SaaS Silos",
    reality: "Finance cannot see support tickets; Sales cannot verify fulfillment status in production.",
    bottleneck: "Fragile point-to-point integrations that silently break whenever third-party APIs or payload structures change.",
    impactedSystems: ["REST & GraphQL", "Salesforce CRM", "PostgreSQL DB"],
  },
  {
    id: "unstructured-documents",
    title: "Unstructured Document Blobs",
    reality: "Critical commercial commitments remain trapped inside scanned PDFs, invoices, and paper contracts.",
    bottleneck: "Absence of layout-aware multi-modal document extraction and semantic vectorization pipelines.",
    impactedSystems: ["PDF Contracts", "Kafka Streams"],
  },
  {
    id: "fragmented-ownership",
    title: "Fragmented Departmental Ownership",
    reality: "Five separate business departments own five conflicting, manually calculated versions of truth.",
    bottleneck: "Governance silos and divergent spreadsheet formulas without unified data stewardship or auditability.",
    impactedSystems: ["Google Sheets", "Salesforce CRM", "SAP ERP"],
  },
  {
    id: "mismatched-refresh",
    title: "Mismatched Refresh Cycles",
    reality: "Event webhooks stream continuously while ERP financial ledgers only export once every 24 hours.",
    bottleneck: "Temporal latency mismatch between event-driven operational architectures and batch data warehouses.",
    impactedSystems: ["REST & GraphQL", "SAP ERP", "AWS S3 Buckets"],
  },
];

export const RecognitionSection: React.FC = () => {
  const [activeSymptomId, setActiveSymptomId] = useState<string>("schema-incompatibilities");

  const activeSymptom = SYMPTOMS.find((s) => s.id === activeSymptomId) ?? SYMPTOMS[0];

  const handleSymptomSelect = (symptomId: string) => {
    setActiveSymptomId(symptomId);
  };

  return (
    <section id="recognition" className={styles.section} aria-labelledby="recognition-title">
      <div className={styles.gridBackground} aria-hidden="true" />

      <div className={styles.inner}>
        {/* Section Header: Centered headline and subtext, NO eyebrow chip */}
        <header className={styles.header}>
          <h2 id="recognition-title" className={styles.headline}>
            Enterprise data rarely lives in one place.
          </h2>

          <p className={styles.thesis}>
            The challenge is not simply having more data. It is making the right data
            available, reliable, current, and meaningful when the system needs it.
          </p>
        </header>

        {/* Scattered Source System Logos Field (Directly on screen, NO boxed canvas, NO hover effects) */}
        <div className={styles.scatterField} aria-label="Scattered disconnected enterprise systems">
          {SYSTEM_NODES.map((node) => {
            const chipClass =
              node.severity === "error"
                ? styles.chipError
                : node.severity === "warning"
                ? styles.chipWarning
                : styles.chipStale;

            return (
              <div
                key={node.id}
                data-source-id={node.id}
                className={styles.logoNode}
                style={
                  {
                    "--pos-x": `${node.posX}%`,
                    "--pos-y": `${node.posY}%`,
                  } as React.CSSProperties
                }
              >
                {/* Friction Chip */}
                <div className={`${styles.frictionChip} ${chipClass}`}>
                  <span className={styles.chipPulse} />
                  <span>{node.symptom}</span>
                </div>

                {/* Clean Pebble with Brand Logo */}
                <div className={styles.logoPebble}>
                  <Image
                    src={node.logoSrc}
                    alt={node.logoAlt}
                    width={40}
                    height={40}
                    className={styles.brandLogoImg}
                    unoptimized
                  />
                </div>

                {/* System Name Pill */}
                <div className={styles.nameTag}>
                  <span>{node.name}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Symptoms Breakdown Matrix (Section 2.4) */}
        <div className={styles.symptomsContainer}>
          <div className={styles.symptomsHeader}>
            <h3 className={styles.symptomsTitle}>
              Visible Symptoms of Fragmentation
            </h3>
            <p className={styles.symptomsSubtitle}>
              When source systems operate as isolated silos, data breaks down into
              predictable technical bottlenecks across seven operational dimensions.
            </p>
          </div>

          {/* Interactive symptom tabs */}
          <div
            className={styles.symptomsTabs}
            role="tablist"
            aria-label="Symptoms of fragmentation"
          >
            {SYMPTOMS.map((symptom) => {
              const isTabActive = symptom.id === activeSymptomId;
              return (
                <button
                  key={symptom.id}
                  type="button"
                  role="tab"
                  aria-selected={isTabActive}
                  className={`${styles.symptomTab} ${
                    isTabActive ? styles.symptomTabActive : ""
                  }`}
                  onClick={() => handleSymptomSelect(symptom.id)}
                >
                  <Icon
                    name={isTabActive ? "check-circle" : "alert-circle"}
                    size={14}
                  />
                  <span>{symptom.title}</span>
                </button>
              );
            })}
          </div>

          {/* Symptom Detail Inspector Card */}
          <div className={styles.symptomDetailCard}>
            <div className={styles.detailGrid}>
              <div className={styles.detailColumn}>
                <span className={styles.detailLabel}>Operational Reality</span>
                <p className={styles.detailText}>
                  &ldquo;{activeSymptom.reality}&rdquo;
                </p>
              </div>

              <div className={styles.detailColumn}>
                <span className={styles.detailLabel}>Technical Bottleneck</span>
                <p className={styles.detailBottleneck}>
                  {activeSymptom.bottleneck}
                </p>
              </div>
            </div>

            <div className={styles.impactedSystems}>
              <span className={styles.impactedLabel}>Observed in:</span>
              {activeSymptom.impactedSystems.map((sys) => (
                <span key={sys} className={styles.impactedTag}>
                  {sys}
                </span>
              ))}
            </div>
          </div>

          {/* Architectural Conclusion Banner */}
          <div className={styles.conclusionBanner}>
            <Icon name="bolt" size={18} className={styles.conclusionIcon} />
            <p className={styles.conclusionText}>
              <strong>The Architecture Truth:</strong> Intelligent systems cannot act
              effectively on disconnected fragments. Engineering reliable AI capability
              begins by resolving these seven failure modes directly at the source
              infrastructure layer.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
