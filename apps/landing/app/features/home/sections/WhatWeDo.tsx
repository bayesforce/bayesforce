"use client";

import React, { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import styles from "./home.module.css";
import s from "./WhatWeDo.module.css";

const STEPS = [
  { num: "01", label: "Find the friction",           body: "We map the workflow, identify where information gets stuck, and measure the drag cost." },
  { num: "02", label: "Connect the data",             body: "We integrate source systems — CRM, ERP, databases, documents — into a clean AI-ready layer." },
  { num: "03", label: "Build organizational context", body: "We encode business rules, institutional knowledge, and historical records into AI memory." },
  { num: "04", label: "Engineer AI execution",        body: "We deploy a governed coworker that executes multi-step work through the tools you already use." },
  { num: "05", label: "Add human controls",           body: "We define approval boundaries, review gates, and confidence thresholds that keep humans in command." },
  { num: "06", label: "Prove the delta",              body: "We measure the operational outcome: cycle time, throughput, error rate, cost per unit of work." },
];

export function WhatWeDo() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);

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
        leftRef.current?.children || [],
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0, duration: 0.8, stagger: 0.12, ease: "power3.out" }
      ).fromTo(
        stepsRef.current?.children || [],
        { opacity: 0, y: 28 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.09,
          ease: "power2.out",
        },
        "-=0.4"
      );
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className={`${styles.section} ${styles.light}`}>
      <div className={styles.inner}>
        <div className={s.layout}>
          <div ref={leftRef} className={s.left}>
            <span className={`${styles.kicker} ${s.kicker}`}>What Bayesforce Builds</span>
            <h2 className={`${styles.headline} ${s.headline}`}>
              We engineer AI into the workflow itself.
            </h2>
            <p className={s.sub}>
              Not a chat layer on top of your tools. AI woven into operations — connecting data, reasoning over context, executing with controls, and proving the result with numbers.
            </p>
          </div>

          <div ref={stepsRef} className={s.steps}>
            {STEPS.map((step) => (
              <div key={step.num} className={s.step}>
                <span className={s.stepNum}>{step.num}</span>
                <div>
                  <strong className={s.stepLabel}>{step.label}</strong>
                  <p className={s.stepBody}>{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
