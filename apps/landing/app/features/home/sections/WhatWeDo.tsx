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
  return (
    <section className={`${styles.section} ${styles.light}`}>
      <div className={styles.inner}>
        <div className={s.layout}>
          <div className={s.left}>
            <span className={`${styles.kicker} ${s.kicker}`}>What Bayesforce Builds</span>
            <h2 className={`${styles.headline} ${s.headline}`}>
              We engineer AI into the workflow itself.
            </h2>
            <p className={s.sub}>
              Not a chat layer on top of your tools. AI woven into operations — connecting data, reasoning over context, executing with controls, and proving the result with numbers.
            </p>
          </div>

          <div className={s.steps}>
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
