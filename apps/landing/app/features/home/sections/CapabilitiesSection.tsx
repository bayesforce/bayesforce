import Link from "next/link";
import styles from "./home.module.css";
import s from "./CapabilitiesSection.module.css";
import { CAPABILITIES, getCapabilityHref } from "@/content/catalog";

export function CapabilitiesSection() {
  return (
    <section className={`${styles.section} ${styles.raised}`}>
      <div className={styles.inner}>
        <div className={s.header}>
          <span className={`${styles.kicker} ${s.kicker}`}>Our Capabilities</span>
          <h2 className={`${styles.headline} ${s.headline}`}>
            A workflow is only as capable as the system around it.
          </h2>
          <p className={s.sub}>
            Four engineering layers that make a workflow capable of operating reliably in production.
          </p>
        </div>

        <div className={s.grid}>
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
