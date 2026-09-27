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
  return (
    <section className={`${styles.section} ${styles.dark}`}>
      <div className={styles.inner}>
        <span className={`${styles.kicker} ${s.kicker}`}>Operational Drag</span>
        <h2 className={`${styles.headline} ${s.headline}`}>
          Your people are the most expensive
          <br />integration layer in the business.
        </h2>
        <p className={s.sub}>
          Not because they're inefficient. Because the systems around them weren't built to connect — so people became the bridge. Every hour spent as the bridge is an hour not spent on work that actually matters.
        </p>

        <div className={s.grid}>
          {FRICTION.map((f) => (
            <div key={f.num} className={s.card}>
              <span className={s.cardNum}>{f.num}</span>
              <strong className={s.cardLabel}>{f.label}</strong>
              <p className={s.cardBody}>{f.body}</p>
            </div>
          ))}
        </div>

        <blockquote className={s.quote}>
          "The question isn't whether to fix the workflow. It's whether you'll fix it before it costs you compounding capacity."
        </blockquote>
      </div>
    </section>
  );
}
