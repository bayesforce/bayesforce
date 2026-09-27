import Link from "next/link";
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
  return (
    <section className={`${styles.section} ${styles.raised}`}>
      <div className={styles.inner}>
        <div className={s.header}>
          <span className={`${styles.kicker} ${s.kicker}`}>Insights</span>
          <h2 className={`${styles.headline} ${s.headline}`}>
            We write about what we engineer.
          </h2>
          <p className={s.sub}>
            Not think-pieces about AI potential. Technical substance from production systems.
          </p>
        </div>

        <div className={s.grid}>
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
