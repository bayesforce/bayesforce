"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { gsap, useGSAP } from "@/lib/gsap";
import styles from "./home.module.css";
import s from "./CapabilitiesSection.module.css";
import { CAPABILITIES, getCapabilityHref } from "@/content/catalog";

export function CapabilitiesSection() {
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
        { opacity: 0, y: 40, scale: 0.96 },
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
          <span className={`${styles.kicker} ${s.kicker}`}>Our Capabilities</span>
          <h2 className={`${styles.headline} ${s.headline}`}>
            A workflow is only as capable as the system around it.
          </h2>
          <p className={s.sub}>
            Four engineering layers that make a workflow capable of operating reliably in production.
          </p>
        </div>

        <div ref={gridRef} className={s.grid}>
          {CAPABILITIES.map((cap, i) => (
            <Link
              key={cap.slug}
              href={getCapabilityHref(cap.slug)}
              className={s.card}
            >
              <div className={s.cardNum}>{String(i + 1).padStart(2, "0")}</div>
              <strong className={s.cardTitle}>{cap.shortTitle}</strong>
              <p className={s.cardPositioning}>{cap.positioning}</p>
              <p className={s.cardSub}>{cap.tagline}</p>
              <span className={s.cardCta}>Explore →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
