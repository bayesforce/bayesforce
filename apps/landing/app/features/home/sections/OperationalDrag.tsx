"use client";

import React, { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import styles from "./home.module.css";
import s from "./OperationalDrag.module.css";

const FRICTION = [
  { num: "01", label: "Information chasing",  body: "Hours spent finding data that already exists across three disconnected systems." },
  { num: "02", label: "Manual reconciliation", body: "Two people comparing spreadsheets that diverged because nothing syncs to anything." },
  { num: "03", label: "Waiting for approval", body: "Work sits paused because a decision is stuck somewhere in an inbox." },
  { num: "04", label: "Repeated handoffs",    body: "Each team retypes what the last team already recorded in a different tool." },
  { num: "05", label: "Exception triage",     body: "One unusual line item derails the entire batch for the rest of the week." },
];

export function OperationalDrag() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const quoteRef = useRef<HTMLQuoteElement>(null);

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

      // Animate Header
      tl.fromTo(
        headerRef.current?.children || [],
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: "power3.out" }
      )
        // Stagger Friction Cards
        .fromTo(
          gridRef.current?.children || [],
          { opacity: 0, y: 36, scale: 0.97 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            stagger: 0.08,
            ease: "power2.out",
          },
          "-=0.3"
        )
        // Quote Reveal
        .fromTo(
          quoteRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
          "-=0.2"
        );
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className={`${styles.section} ${styles.dark}`}>
      <div className={styles.inner}>
        <div ref={headerRef}>
          <span className={`${styles.kicker} ${s.kicker}`}>Operational Drag</span>
          <h2 className={`${styles.headline} ${s.headline}`}>
            Your people are the most expensive
            <br />integration layer in the business.
          </h2>
          <p className={s.sub}>
            Not because they're inefficient. Because the systems around them weren't built to connect — so people became the bridge. Every hour spent as the bridge is an hour not spent on work that actually matters.
          </p>
        </div>

        <div ref={gridRef} className={s.grid}>
          {FRICTION.map((f) => (
            <div key={f.num} className={s.card}>
              <span className={s.cardNum}>{f.num}</span>
              <strong className={s.cardLabel}>{f.label}</strong>
              <p className={s.cardBody}>{f.body}</p>
            </div>
          ))}
        </div>

        <blockquote ref={quoteRef} className={s.quote}>
          "The question isn't whether to fix the workflow. It's whether you'll fix it before it costs you compounding capacity."
        </blockquote>
      </div>
    </section>
  );
}
