"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { gsap, useGSAP } from "@/lib/gsap";
import styles from "./home.module.css";
import s from "./InsightsSection.module.css";

const TYPES = [
  {
    type:  "Case Studies",
    href:  "/insights/case-studies",
    desc:  "Empirical proof from production deployments. Real workflows, real systems, real deltas.",
    count: "3 Published",
  },
  {
    type:  "Playbooks",
    href:  "/insights/playbooks",
    desc:  "Step-by-step architectural blueprints for building specific workflow automation systems.",
    count: "4 Published",
  },
  {
    type:  "Guides",
    href:  "/insights/guides",
    desc:  "Deep technical knowledge on evaluation, context engineering, and production AI patterns.",
    count: "3 Published",
  },
  {
    type:  "Reports",
    href:  "/insights/reports",
    desc:  "Market analysis and worldview on enterprise AI operations and the shift from chatbots to systems of action.",
    count: "3 Published",
  },
];

export function InsightsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

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
          stagger: 0.1,
          ease: "power2.out",
        },
        "-=0.3"
      );
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className={`${styles.section} ${styles.raised}`}>
      <div className={styles.inner}>
        <div ref={headerRef} className={s.header}>
          <span className={`${styles.kicker} ${s.kicker}`}>Insights</span>
          <h2 className={`${styles.headline} ${s.headline}`}>
            We write about what we engineer.
          </h2>
          <p className={s.sub}>
            Not think-pieces about AI potential. Technical substance from production systems.
          </p>
        </div>

        <div ref={gridRef} className={s.grid}>
          {TYPES.map((t) => (
            <Link key={t.type} href={t.href} className={s.card}>
              <div className={s.cardTop}>
                <strong className={s.cardType}>{t.type}</strong>
                <span className={s.cardCount}>{t.count}</span>
              </div>
              <p className={s.cardDesc}>{t.desc}</p>
              <span className={s.cardCta}>Browse {t.type} →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
