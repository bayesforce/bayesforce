"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { gsap, useGSAP } from "@/lib/gsap";
import styles from "./home.module.css";
import s from "./FinalCTA.module.css";

export function FinalCTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!sectionRef.current) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 82%",
          toggleActions: "play none none none",
        },
      });

      tl.fromTo(
        contentRef.current?.children || [],
        { opacity: 0, y: 24, scale: 0.98 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
          stagger: 0.1,
          ease: "back.out(1.2)",
        }
      );
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className={`${styles.section} ${styles.veryDark}`}>
      <div className={styles.inner}>
        <div ref={contentRef} className={s.content}>
          <span className={`${styles.kicker} ${s.kicker}`}>Talk to Bayesforce</span>
          <h2 className={`${styles.headline} ${s.headline}`}>
            Have a workflow worth fixing?
          </h2>
          <p className={s.sub}>
            Tell us where the friction is. We&apos;ll tell you whether AI can carry it.
          </p>
          <div className={s.actions}>
            <Link href="/workflows" className={s.primary}>
              Find Your Automation Opportunities
            </Link>
            <Link href="/talk" className={s.secondary}>
              Talk to Bayesforce →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
