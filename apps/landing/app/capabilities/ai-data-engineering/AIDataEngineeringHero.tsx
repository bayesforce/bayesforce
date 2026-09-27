"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { Icon } from "@/components/ui";
import { gsap, useGSAP } from "@/lib/gsap";
import styles from "./AIDataEngineeringHero.module.css";

export const AIDataEngineeringHero = () => {
  const containerRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtextRef = useRef<HTMLParagraphElement>(null);
  const actionsRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Respect prefers-reduced-motion
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (prefersReducedMotion) return;

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Hero Content Entrance Sequence
      tl.fromTo(
        headlineRef.current,
        { opacity: 0, y: 28 },
        { opacity: 1, y: 0, duration: 0.9, delay: 0.1 }
      )
        .fromTo(
          subtextRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8 },
          "-=0.6"
        )
        .fromTo(
          actionsRef.current?.children ? Array.from(actionsRef.current.children) : [],
          { opacity: 0, y: 16 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: "power3.out",
          },
          "-=0.4"
        );
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className={styles.hero}
      aria-labelledby="ai-data-engg-hero-title"
    >
      {/* Background artwork layer positioned lower */}
      <div className={styles.bgImage} aria-hidden="true" />

      {/* Gradient vignette overlay for text legibility */}
      <div className={styles.overlay} aria-hidden="true" />

      <div className={styles.content}>
        <div className={styles.textContainer}>
          <h1
            ref={headlineRef}
            id="ai-data-engg-hero-title"
            className={styles.headline}
          >
            Your AI is only as good as the data behind it.
          </h1>

          <p ref={subtextRef} className={styles.subtext}>
            Turn fragmented enterprise data into reliable AI-ready infrastructure
            from source systems and cloud pipelines to enterprise context.
          </p>

          <div ref={actionsRef} className={styles.actions}>
            <Link
              href="/talk"
              className={`${styles.button} ${styles.primaryButton}`}
            >
              <span>Transform Your Data Infrastructure</span>
              <Icon name="arrow-right" size={17} />
            </Link>

            <Link
              href="#recognition"
              className={`${styles.button} ${styles.secondaryButton}`}
            >
              <span>See How We Engineer Context</span>
              <Icon name="chevron-down" size={15} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
