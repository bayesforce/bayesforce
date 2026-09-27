import Link from "next/link";
import styles from "./home.module.css";
import s from "./ProofSection.module.css";
import { INSIGHTS } from "@/content/catalog";

export function ProofSection() {
  const caseStudies = INSIGHTS.filter((i) => i.type === "case-studies").slice(0, 3);

  return (
    <section className={`${styles.section} ${styles.light}`}>
      <div className={styles.inner}>
        <div className={s.header}>
          <span className={`${styles.kicker} ${s.kicker}`}>Proof</span>
          <h2 className={`${styles.headline} ${s.headline}`}>
            Deployment isn&apos;t the outcome.
            <br />The delta is.
          </h2>
          <p className={s.sub}>
            Production deployments with verifiable operational outcomes.
          </p>
        </div>

        <div className={s.grid}>
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
