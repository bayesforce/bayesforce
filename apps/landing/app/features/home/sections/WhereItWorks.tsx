"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { gsap, useGSAP } from "@/lib/gsap";
import styles from "./home.module.css";
import s from "./WhereItWorks.module.css";
import { WORKFLOWS } from "@/content/catalog";

export function WhereItWorks() {
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
        { opacity: 0, y: 32, scale: 0.98 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.55,
          stagger: 0.06,
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
          <span className={`${styles.kicker} ${s.kicker}`}>Where It Works</span>
          <h2 className={`${styles.headline} ${s.headline}`}>
            Where operational drag becomes
            <br />operational leverage.
          </h2>
          <p className={s.sub}>
            Eight business functions. The same root problem. The same engineering approach.
          </p>
        </div>

        <div ref={gridRef} className={s.grid}>
          {WORKFLOWS.map((wf) => (
            <Link
              key={wf.slug}
              href={`/workflows/${wf.slug}`}
              className={s.card}
            >
              <div className={s.cardTop}>
                <span className={s.cardKicker}>{wf.category}</span>
                <span className={s.cardArrow} aria-hidden="true">→</span>
              </div>
              <strong className={s.cardTitle}>{wf.shortTitle}</strong>
              <p className={s.cardBody}>{wf.heroHeadline}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
