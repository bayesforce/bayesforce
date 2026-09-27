"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { gsap, useGSAP } from "@/lib/gsap";
import styles from "./home.module.css";
import s from "./ProofSection.module.css";
import { INSIGHTS } from "@/content/catalog";

export function ProofSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const caseStudies = INSIGHTS.filter((i) => i.type === "case-studies").slice(0, 3);

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
        gridRef.current?.children || [],
        { opacity: 0, y: 36, scale: 0.97 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.65,
          stagger: 0.12,
          ease: "power2.out",
        },
        "-=0.3"
      );
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className={`${styles.section} ${styles.light}`}>
      <div className={styles.inner}>
        <div ref={headerRef} className={s.header}>
          <span className={`${styles.kicker} ${s.kicker}`}>Proof</span>
          <h2 className={`${styles.headline} ${s.headline}`}>
            Deployment isn&apos;t the outcome.
            <br />The delta is.
          </h2>
          <p className={s.sub}>
            Production deployments with verifiable operational outcomes.
          </p>
        </div>

        <div ref={gridRef} className={s.grid}>
          {caseStudies.map((cs) => (
            <Link key={cs.slug} href={`/insights/case-studies/${cs.slug}`} className={s.card}>
              <div className={s.cardTag}>Case Study</div>
              <strong className={s.cardTitle}>{cs.title}</strong>
              <p className={s.cardSub}>{cs.subtitle}</p>
              {cs.metricsDelta && (
                <div className={s.metrics}>
                  {cs.metricsDelta.slice(0, 2).map((m) => (
                    <div key={m.label} className={s.metric}>
                      <span className={s.metricValue}>{m.value}</span>
                      <span className={s.metricLabel}>{m.label}</span>
                    </div>
                  ))}
                </div>
              )}
              <span className={s.cardCta}>Read case study →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
