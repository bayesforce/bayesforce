"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { Icon } from "@/components/ui";
import { gsap, useGSAP } from "@/lib/gsap";
import styles from "./HomeHero.module.css";

export const HomeHero = () => {
  const containerRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const actionsRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Subtle ambient overlay pulse
      if (overlayRef.current) {
        gsap.to(overlayRef.current, {
          opacity: 0.85,
          duration: 4,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }

      // Hero Content Entrance Sequence
      tl.fromTo(
        titleRef.current,
        { opacity: 0, y: 36 },
        { opacity: 1, y: 0, duration: 1, delay: 0.1 }
      )
        .fromTo(
          descRef.current,
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, duration: 0.8 },
          "-=0.6"
        )
        .fromTo(
          actionsRef.current?.children || [],
          { opacity: 0, y: 20, scale: 0.96 },
          { opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.12, ease: "back.out(1.4)" },
          "-=0.4"
        );
    },
    { scope: containerRef }
  );

  return (
    <section ref={containerRef} className={styles.hero} aria-labelledby="home-hero-title">
      <div ref={overlayRef} className={styles.overlay} aria-hidden="true" />
      <div className={styles.content}>
        <h1 ref={titleRef} id="home-hero-title" className={styles.title}>
          Let systems carry the work,<br />
          <span className={styles.titleAccent}>so people can carry the ambition.</span>
        </h1>
        <p ref={descRef} className={styles.description}>
          We engineer intelligent systems into the workflows your teams already use. We connect data,
          context, and execution so work moves across your organization with less human coordination.
        </p>
        <div ref={actionsRef} className={styles.actions}>
          <Link href="/workflows" className={`${styles.button} ${styles.primaryButton}`}>
            Find Your Automation Opportunities
            <Icon name="arrow-right" size={17} />
          </Link>
          <Link href="/talk" className={`${styles.button} ${styles.secondaryButton}`}>
            Talk to Bayesforce
            <Icon name="arrow-up-right" size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
};
