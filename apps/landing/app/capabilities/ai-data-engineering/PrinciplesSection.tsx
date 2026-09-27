"use client";

import React from "react";
import styles from "./PrinciplesSection.module.css";

interface Principle {
  num: string;
  title: string;
  copy: string;
}

const PRINCIPLES: Principle[] = [
  {
    num: "01",
    title: "We start with your architecture, not our favorite stack.",
    copy: "Your existing systems, cloud commitments, security policies, and operational constraints become direct inputs to our engineering, not inconveniences we ask you to replace. We start with the work that runs the business and fit technology into your enterprise rather than forcing your organization around our preferences.",
  },
  {
    num: "02",
    title: "The goal is not a successful demo.",
    copy: "A pipeline that succeeds only in a controlled demonstration is an operational liability. Production data engineering requires observable behavior, automated backpressure, controlled failure paths, and measurable quality gates. We engineer every pipeline to withstand real-world enterprise drag.",
  },
  {
    num: "03",
    title: "The capability should belong to you.",
    copy: "We build platforms your internal engineers can inspect, operate, govern, and extend. Through open standard formats, transparent infrastructure-as-code, and rigorous documentation, we transfer capability directly to your organization rather than creating permanent external dependence.",
  },
];

export const PrinciplesSection: React.FC = () => {
  return (
    <section id="principles" className={styles.section} aria-labelledby="principles-title">
      <div className={styles.inner}>
        <header className={styles.header}>
          <div className={styles.eyebrow}>
            <span>Section 5 · The Principles of Engagement</span>
          </div>

          <h2 id="principles-title" className={styles.headline}>
            Engineering built around your reality, not our preferences.
          </h2>

          <p className={styles.leadCopy}>
            Data engineering fails when vendors force customer environments into proprietary molds.
            We approach enterprise data platforms through three operational commitments.
          </p>
        </header>

        <div className={styles.principlesGrid}>
          {PRINCIPLES.map((principle) => (
            <article key={principle.num} className={styles.principleCard}>
              <div className={styles.cardHeader}>
                <span className={styles.principleNum}>PRINCIPLE {principle.num}</span>
              </div>
              <h3 className={styles.principleTitle}>{principle.title}</h3>
              <p className={styles.principleCopy}>{principle.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
