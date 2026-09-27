import Link from "next/link";
import styles from "./home.module.css";
import s from "./FinalCTA.module.css";

export function FinalCTA() {
  return (
    <section className={`${styles.section} ${styles.veryDark}`}>
      <div className={styles.inner}>
        <div className={s.content}>
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
