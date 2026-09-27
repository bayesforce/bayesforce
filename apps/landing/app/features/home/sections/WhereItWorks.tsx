import Link from "next/link";
import styles from "./home.module.css";
import s from "./WhereItWorks.module.css";
import { WORKFLOWS } from "@/content/catalog";

export function WhereItWorks() {
  return (
    <section className={`${styles.section} ${styles.light}`}>
      <div className={styles.inner}>
        <div className={s.header}>
          <span className={`${styles.kicker} ${s.kicker}`}>Where It Works</span>
          <h2 className={`${styles.headline} ${s.headline}`}>
            Where operational drag becomes
            <br />operational leverage.
          </h2>
          <p className={s.sub}>
            Eight business functions. The same root problem. The same engineering approach.
          </p>
        </div>

        <div className={s.grid}>
          {WORKFLOWS.map((wf) => (
            <Link
              key={wf.slug}
              href={`/workflows/${wf.slug}`}
              className={s.card}
            >
              <div className={s.cardTop}>
                <span className={s.cardKicker}>{wf.category}</span>
                <span className={s.cardArrow} aria-hidden="true">→</span>
              </div>
              <strong className={s.cardTitle}>{wf.shortTitle}</strong>
              <p className={s.cardBody}>{wf.heroHeadline}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
