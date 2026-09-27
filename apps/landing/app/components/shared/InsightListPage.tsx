import Link from "next/link";
import type { InsightItem, InsightType } from "@/content/catalog";
import s from "./InsightListPage.module.css";

interface InsightListPageProps {
  type: InsightType;
  typeLabel: string;
  headline: string;
  description: string;
  items: InsightItem[];
}

const TYPE_LABELS: Record<InsightType, string> = {
  "case-studies": "Case Studies",
  "playbooks":    "Playbooks",
  "guides":       "Guides",
  "reports":      "Reports",
};

const ALL_TYPES: InsightType[] = ["case-studies", "playbooks", "guides", "reports"];

export function InsightListPage({ type, typeLabel, headline, description, items }: InsightListPageProps) {
  return (
    <div>
      <div className={s.header}>
        <div className={s.headerInner}>
          <nav className={s.typeNav} aria-label="Insights sections">
            {ALL_TYPES.map((t) => (
              <Link
                key={t}
                href={`/insights/${t}`}
                className={`${s.typeLink} ${t === type ? s.typeLinkActive : ""}`}
                aria-current={t === type ? "page" : undefined}
              >
                {TYPE_LABELS[t]}
              </Link>
            ))}
          </nav>
          <div className={s.headerText}>
            <span className={s.eyebrow}>{typeLabel}</span>
            <h1 className={s.headline}>{headline}</h1>
            <p className={s.desc}>{description}</p>
          </div>
        </div>
      </div>

      <div className={s.body}>
        <div className={s.bodyInner}>
          {items.length === 0 ? (
            <p className={s.empty}>No {typeLabel.toLowerCase()} published yet.</p>
          ) : (
            <div className={s.grid}>
              {items.map((item) => (
                <Link
                  key={item.slug}
                  href={`/insights/${type}/${item.slug}`}
                  className={s.card}
                >
                  <div className={s.cardTop}>
                    <span className={s.cardTag}>{item.typeLabel}</span>
                    <span className={s.cardTime}>{item.readTime}</span>
                  </div>
                  <h2 className={s.cardTitle}>{item.title}</h2>
                  <p className={s.cardSummary}>{item.summary}</p>

                  {item.metricsDelta && item.metricsDelta.length > 0 && (
                    <div className={s.metrics}>
                      {item.metricsDelta.slice(0, 3).map((m) => (
                        <div key={m.label} className={s.metric}>
                          <span className={s.metricValue}>{m.value}</span>
                          <span className={s.metricLabel}>{m.label}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className={s.cardFooter}>
                    <div className={s.tags}>
                      {item.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className={s.tag}>{tag}</span>
                      ))}
                    </div>
                    <span className={s.cardDate}>{item.publishedDate}</span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
