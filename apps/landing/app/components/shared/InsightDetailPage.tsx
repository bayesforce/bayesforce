import Link from "next/link";
import type { InsightItem } from "@/content/catalog";
import s from "./InsightDetailPage.module.css";

interface InsightDetailPageProps {
  item: InsightItem;
  backHref: string;
  backLabel: string;
}

export function InsightDetailPage({ item, backHref, backLabel }: InsightDetailPageProps) {
  return (
    <div>
      <div className={s.header}>
        <div className={s.headerInner}>
          <Link href={backHref} className={s.back}>← {backLabel}</Link>
          <span className={s.eyebrow}>{item.typeLabel}</span>
          <h1 className={s.headline}>{item.title}</h1>
          <p className={s.subtitle}>{item.subtitle}</p>

          <div className={s.meta}>
            <span className={s.metaItem}>{item.author.name}</span>
            <span className={s.metaDot} aria-hidden="true">·</span>
            <span className={s.metaItem}>{item.author.role}</span>
            <span className={s.metaDot} aria-hidden="true">·</span>
            <span className={s.metaItem}>{item.publishedDate}</span>
            <span className={s.metaDot} aria-hidden="true">·</span>
            <span className={s.metaItem}>{item.readTime}</span>
          </div>
        </div>
      </div>

      {item.metricsDelta && item.metricsDelta.length > 0 && (
        <div className={s.metricsBar}>
          <div className={s.metricsInner}>
            {item.metricsDelta.map((m) => (
              <div key={m.label} className={s.metric}>
                <span className={s.metricValue}>{m.value}</span>
                <span className={s.metricLabel}>{m.label}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className={s.body}>
        <div className={s.bodyInner}>
          <article className={s.article}>
            <p className={s.lead}>{item.summary}</p>

            {item.contentSections.map((section) => (
              <div key={section.heading} className={s.contentSection}>
                <h2 className={s.sectionHeading}>{section.heading}</h2>
                {section.lead && <p className={s.sectionLead}>{section.lead}</p>}
                {section.paragraphs.map((p, i) => (
                  <p key={i} className={s.para}>{p}</p>
                ))}
                {section.callout && (
                  <aside className={`${s.callout} ${s[`callout_${section.callout.type}` as keyof typeof s]}`}>
                    {section.callout.text}
                  </aside>
                )}
                {section.tableData && (
                  <div className={s.tableWrap}>
                    <table className={s.table}>
                      <thead>
                        <tr>
                          {section.tableData.headers.map((h) => (
                            <th key={h} className={s.th}>{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {section.tableData.rows.map((row, ri) => (
                          <tr key={ri}>
                            {row.map((cell, ci) => (
                              <td key={ci} className={s.td}>{cell}</td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
                {section.codeBlock && (
                  <div className={s.codeBlock}>
                    {section.codeBlock.caption && (
                      <div className={s.codeCaption}>{section.codeBlock.caption}</div>
                    )}
                    <pre className={s.pre}><code>{section.codeBlock.code}</code></pre>
                  </div>
                )}
              </div>
            ))}
          </article>

          <aside className={s.sidebar}>
            <div className={s.sideSection}>
              <h3 className={s.sideHeading}>Tags</h3>
              <div className={s.tags}>
                {item.tags.map((tag) => (
                  <span key={tag} className={s.tag}>{tag}</span>
                ))}
              </div>
            </div>

            {item.relatedCapabilities.length > 0 && (
              <div className={s.sideSection}>
                <h3 className={s.sideHeading}>Capabilities Used</h3>
                <ul className={s.relatedList}>
                  {item.relatedCapabilities.map((slug) => (
                    <li key={slug}>
                      <Link href={`/capabilities/${slug}`} className={s.relatedLink}>
                        {slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {item.relatedWorkflows.length > 0 && (
              <div className={s.sideSection}>
                <h3 className={s.sideHeading}>Related Workflows</h3>
                <ul className={s.relatedList}>
                  {item.relatedWorkflows.map((slug) => (
                    <li key={slug}>
                      <Link href={`/workflows/${slug}`} className={s.relatedLink}>
                        {slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className={s.sideCta}>
              <p className={s.sideCtaText}>Have a workflow like this?</p>
              <Link href="/talk" className={s.sideCtaBtn}>Talk to Bayesforce →</Link>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
