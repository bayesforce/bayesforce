import Link from "next/link";
import { Icon } from "@/components/ui";
import styles from "./HomeHero.module.css";

export const HomeHero = () => (
  <section className={styles.hero} aria-labelledby="home-hero-title">
    <div className={styles.overlay} aria-hidden="true" />
    <div className={styles.content}>
      <h1 id="home-hero-title" className={styles.title}>
        Let systems carry the work,<br />
        <span className={styles.titleAccent}>so people can carry the ambition.</span>
      </h1>
      <p className={styles.description}>
        We engineer intelligent systems into the workflows your teams already use. We connect data,
        context, and execution so work moves across your organization with less human coordination.
      </p>
      <div className={styles.actions}>
        <Link href="/workflows" className={`${styles.button} ${styles.primaryButton}`}>
          Find Your Automation Opportunities
          <Icon name="arrow-right" size={17} />
        </Link>
        <Link href="/contact" className={`${styles.button} ${styles.secondaryButton}`}>
          Talk to an AI Expert
          <Icon name="arrow-up-right" size={15} />
        </Link>
      </div>
    </div>
  </section>
);
