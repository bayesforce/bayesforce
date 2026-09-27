import s from "./LegalPage.module.css";

export interface LegalSection {
  id: string;
  heading: string;
  paragraphs: string[];
}

interface LegalPageProps {
  type: string;
  title: string;
  effectiveDate: string;
  intro: string;
  sections: LegalSection[];
}

export function LegalPage({ type, title, effectiveDate, intro, sections }: LegalPageProps) {
  return (
    <div className={s.page}>
      <header className={s.header}>
        <div className={s.headerInner}>
          <span className={s.type}>{type}</span>
          <h1 className={s.title}>{title}</h1>
          <p className={s.effective}>Effective date: {effectiveDate}</p>
          <span className={s.placeholder}>
            ⚠ Legal placeholder — Replace with reviewed legal copy before publishing.
          </span>
        </div>
      </header>

      <div className={s.body}>
        <div className={s.bodyInner}>
          {/* Table of contents */}
          <nav className={s.toc} aria-label="Contents">
            <p className={s.tocTitle}>Contents</p>
            <ul className={s.tocList}>
              {sections.map((sec) => (
                <li key={sec.id}>
                  <a href={`#${sec.id}`} className={s.tocLink}>{sec.heading}</a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Article */}
          <article className={s.article}>
            <p className={s.intro}>{intro}</p>
            {sections.map((sec) => (
              <section key={sec.id} id={sec.id} className={s.section}>
                <h2 className={s.sectionHeading}>{sec.heading}</h2>
                <p className={s.legalNote}>[LEGAL PLACEHOLDER — Replace with reviewed legal copy]</p>
                {sec.paragraphs.map((para, i) => (
                  <p key={i} className={s.para}>{para}</p>
                ))}
              </section>
            ))}
          </article>
        </div>
      </div>
    </div>
  );
}
