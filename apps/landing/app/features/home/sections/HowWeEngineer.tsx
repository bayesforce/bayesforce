"use client";

import React, { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import styles from "./home.module.css";
import s from "./HowWeEngineer.module.css";

const STAGES = [
  { num: "01", label: "Trigger",    desc: "An event arrives — email, API, webhook, schedule." },
  { num: "02", label: "Ingest",     desc: "Raw inputs are ingested: documents, records, signals." },
  { num: "03", label: "Understand", desc: "Classification, intent detection, entity extraction." },
  { num: "04", label: "Context",    desc: "Hybrid retrieval from vector, graph, and relational stores." },
  { num: "05", label: "Validate",   desc: "Data quality checks, duplicate detection, schema enforcement." },
  { num: "06", label: "Reason",     desc: "Probabilistic AI reasoning over retrieved context." },
  { num: "07", label: "Execute",    desc: "Deterministic tool calls and system mutations." },
  { num: "08", label: "Output",     desc: "Structured artifacts: drafts, patches, decisions, packets." },
  { num: "09", label: "Review",     desc: "Human-in-the-loop gates for consequential actions." },
  { num: "10", label: "Record",     desc: "System-of-record write-back with cryptographic audit trail." },
  { num: "11", label: "Measure",    desc: "Operational delta tracked: cycle time, throughput, cost." },
];

export function HowWeEngineer() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const pipelineRef = useRef<HTMLDivElement>(null);

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
        pipelineRef.current?.children || [],
        { opacity: 0, x: -24, scale: 0.97 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 0.5,
          stagger: 0.05,
          ease: "power2.out",
        },
        "-=0.3"
      );
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className={`${styles.section} ${styles.dark}`}>
      <div className={styles.inner}>
        <div ref={headerRef}>
          <span className={`${styles.kicker} ${s.kicker}`}>The Delivery Model</span>
          <h2 className={`${styles.headline} ${s.headline}`}>
            From trigger to measurable outcome.
          </h2>
          <p className={s.sub}>
            Every Bayesforce engagement follows the same 11-stage engineering lifecycle. Not because we're rigid — because workflows that skip stages are the ones that fail in production.
          </p>
        </div>

        <div ref={pipelineRef} className={s.pipeline}>
          {STAGES.map((stage, i) => (
            <div key={stage.num} className={s.stage}>
              <div className={s.stageTrack}>
                <div className={s.stageNode}>{stage.num}</div>
                {i < STAGES.length - 1 && <div className={s.stageLine} aria-hidden="true" />}
              </div>
              <div className={s.stageContent}>
                <strong className={s.stageLabel}>{stage.label}</strong>
                <p className={s.stageDesc}>{stage.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
