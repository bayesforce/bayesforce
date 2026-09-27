"use client";

import { useState, useId } from "react";
import { CAREER_ROLES } from "@/content/catalog";
import s from "./CareersPage.module.css";

const VALUES = [
  { title: "Curiosity",            desc: "We want to understand how the work actually moves before we attempt to improve it." },
  { title: "Craftsmanship",        desc: "We care about the quality of what we build, not just that it ships." },
  { title: "Systems thinking",     desc: "We look for the root cause, not the nearest symptom." },
  { title: "Technical depth",      desc: "We respect people who can reason about the internals of the things they work with." },
  { title: "Ownership",            desc: "We take responsibility for outcomes, not just task completion." },
  { title: "Judgment",             desc: "We trust people to make good decisions without a rule for every situation." },
  { title: "Bias toward evidence", desc: "We update our beliefs when the data says we should." },
];

const AREAS = [
  "AI Systems Engineering",
  "Applied AI",
  "Solutions Architecture",
  "Research & Evaluation",
  "Other",
];

interface AppForm {
  name: string;
  email: string;
  portfolio: string;
  area: string;
  why: string;
  whatBuild: string;
}

function RoleAccordion() {
  const [open, setOpen] = useState<string | null>(null);
  return (
    <div className={s.roles}>
      {CAREER_ROLES.map((role) => {
        const isOpen = open === role.id;
        return (
          <div key={role.id} className={s.roleRow}>
            <button
              type="button"
              className={s.roleTrigger}
              aria-expanded={isOpen}
              aria-controls={`role-body-${role.id}`}
              onClick={() => setOpen(isOpen ? null : role.id)}
            >
              <div>
                <div className={s.roleTitle}>{role.title}</div>
                <div className={s.roleMeta}>
                  <span className={s.roleMetaItem}>{role.location}</span>
                  <span className={s.roleMetaItem}>·</span>
                  <span className={s.roleMetaItem}>{role.type}</span>
                  <span className={s.roleMetaItem}>·</span>
                  <span className={s.roleMetaItem}>{role.experience}</span>
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", flexShrink: 0 }}>
                <span className={s.roleDept}>{role.department}</span>
                <span className={`${s.roleChevron} ${isOpen ? s.roleChevronOpen : ""}`} aria-hidden="true">▾</span>
              </div>
            </button>
            {isOpen && (
              <div id={`role-body-${role.id}`} className={s.roleBody}>
                <p className={s.roleDesc}>{role.summary}</p>
                {role.whatYouWillBuild.length > 0 && (
                  <div className={s.roleSection}>
                    <p className={s.roleSectionTitle}>What you will build</p>
                    <ul className={s.roleList}>
                      {role.whatYouWillBuild.map((item) => (
                        <li key={item} className={s.roleListItem}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {role.requirements.length > 0 && (
                  <div className={s.roleSection}>
                    <p className={s.roleSectionTitle}>Requirements</p>
                    <ul className={s.roleList}>
                      {role.requirements.map((req) => (
                        <li key={req} className={s.roleListItem}>{req}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

function OpenApplicationForm() {
  const [form, setForm] = useState<AppForm>({ name: "", email: "", portfolio: "", area: "", why: "", whatBuild: "" });
  const [errors, setErrors] = useState<Partial<AppForm>>({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const nameId = useId();
  const emailId = useId();
  const portfolioId = useId();
  const areaId = useId();
  const whyId = useId();
  const buildId = useId();

  function validate() {
    const e: Partial<AppForm> = {};
    if (!form.name.trim()) e.name = "Name is required.";
    if (!form.email.trim()) e.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Enter a valid email.";
    if (!form.portfolio.trim()) e.portfolio = "Portfolio or profile URL is required.";
    if (!form.why.trim()) e.why = "Tell us why Bayesforce.";
    if (!form.whatBuild.trim()) e.whatBuild = "Tell us what you would build.";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function handleSubmit(ev: React.FormEvent) {
    ev.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    try {
      await fetch("/api/careers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setSuccess(true);
    } catch {
      setSuccess(true);
    } finally {
      setSubmitting(false);
    }
  }

  if (success) {
    return (
      <div className={s.successMsg} role="status">
        <strong>We&apos;ll review your application.</strong> If your background and interests align with what we&apos;re building, we&apos;ll be in touch.
      </div>
    );
  }

  return (
    <form className={s.form} onSubmit={handleSubmit} noValidate>
      <div className={s.inputGroup}>
        <label htmlFor={nameId} className={s.label}>Name <span className={s.required} aria-hidden="true">*</span></label>
        <input id={nameId} className={s.input} type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} autoComplete="name" aria-required="true" />
        {errors.name && <p className={s.error} role="alert">{errors.name}</p>}
      </div>
      <div className={s.inputGroup}>
        <label htmlFor={emailId} className={s.label}>Email <span className={s.required} aria-hidden="true">*</span></label>
        <input id={emailId} className={s.input} type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} autoComplete="email" aria-required="true" />
        {errors.email && <p className={s.error} role="alert">{errors.email}</p>}
      </div>
      <div className={s.inputGroup}>
        <label htmlFor={portfolioId} className={s.label}>Portfolio / GitHub / LinkedIn <span className={s.required} aria-hidden="true">*</span></label>
        <input id={portfolioId} className={s.input} type="url" value={form.portfolio} onChange={(e) => setForm({ ...form, portfolio: e.target.value })} placeholder="https://" />
        {errors.portfolio && <p className={s.error} role="alert">{errors.portfolio}</p>}
      </div>
      <div className={s.inputGroup}>
        <label htmlFor={areaId} className={s.label}>Area of interest</label>
        <select id={areaId} className={s.select} value={form.area} onChange={(e) => setForm({ ...form, area: e.target.value })}>
          <option value="">Select an area…</option>
          {AREAS.map((a) => <option key={a} value={a}>{a}</option>)}
        </select>
      </div>
      <div className={s.inputGroup}>
        <label htmlFor={whyId} className={s.label}>Why Bayesforce? <span className={s.required} aria-hidden="true">*</span></label>
        <textarea id={whyId} className={s.textarea} rows={3} value={form.why} onChange={(e) => setForm({ ...form, why: e.target.value })} placeholder="What draws you to this problem space?" aria-required="true" />
        {errors.why && <p className={s.error} role="alert">{errors.why}</p>}
      </div>
      <div className={s.inputGroup}>
        <label htmlFor={buildId} className={s.label}>What would you build here? <span className={s.required} aria-hidden="true">*</span></label>
        <textarea id={buildId} className={s.textarea} rows={3} value={form.whatBuild} onChange={(e) => setForm({ ...form, whatBuild: e.target.value })} placeholder="Show us how you think about the work." aria-required="true" />
        {errors.whatBuild && <p className={s.error} role="alert">{errors.whatBuild}</p>}
      </div>
      <button type="submit" className={s.submit} disabled={submitting}>
        {submitting ? "Sending…" : "Send Application →"}
      </button>
    </form>
  );
}

export function CareersPage() {
  return (
    <>
      {/* 1 — Hero */}
      <header className={s.hero}>
        <div className={s.heroInner}>
          <span style={{ display: "inline-block", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#94a3b8", marginBottom: "1.25rem" }}>Careers</span>
          <h1 className={s.heroHeadline}>Build systems that make organizations more capable.</h1>
          <p className={s.heroSub}>We are not looking for titles. We are looking for builders who understand systems, write clean code, and believe that organizational work can be fundamentally improved.</p>
        </div>
      </header>

      {/* 2 — Values */}
      <section className={`${s.section} ${s.light}`}>
        <div className={s.inner}>
          <span style={{ display: "inline-block", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#013efa", marginBottom: "1.25rem" }}>What We Look For</span>
          <h2 style={{ fontFamily: "var(--bf-font-display)", fontSize: "clamp(1.85rem, 3vw, 2.5rem)", fontWeight: 600, letterSpacing: "-0.04em", lineHeight: 1.05, color: "#11151b", margin: "0 0 2.5rem", maxWidth: "24rem" }}>Seven things we care about.</h2>
          <div className={s.valuesGrid}>
            {VALUES.map((v) => (
              <div key={v.title} className={s.valueCard}>
                <strong className={s.valueTitle}>{v.title}</strong>
                <p className={s.valueDesc}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3 — Philosophy */}
      <section className={`${s.section} ${s.raised}`}>
        <div className={s.inner} style={{ maxWidth: "44rem" }}>
          <span style={{ display: "inline-block", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#013efa", marginBottom: "1.25rem" }}>How We Hire</span>
          <h2 style={{ fontFamily: "var(--bf-font-display)", fontSize: "clamp(1.85rem, 3vw, 2.5rem)", fontWeight: 600, letterSpacing: "-0.04em", lineHeight: 1.05, color: "#11151b", margin: "0 0 1.5rem" }}>We hire by intent, not by title.</h2>
          <p style={{ fontSize: "0.95rem", color: "#3e4555", lineHeight: 1.75, borderLeft: "3px solid #013efa", paddingLeft: "1.25rem", marginBottom: "1.25rem" }}>
            Bayesforce is at an early stage. We are not always hiring for a conventional title — we are open to exceptional builders who understand the worldview and can demonstrate value.
          </p>
          <p style={{ fontSize: "0.95rem", color: "#596172", lineHeight: 1.75 }}>
            Go through the website. Understand how we think about workflows, capabilities, and operational drag. Then tell us what you would build.
          </p>
        </div>
      </section>

      {/* 4 — Open Roles */}
      <section className={`${s.section} ${s.dark}`}>
        <div className={s.inner}>
          <span style={{ display: "inline-block", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#94a3b8", marginBottom: "1.25rem" }}>Open Roles</span>
          <h2 style={{ fontFamily: "var(--bf-font-display)", fontSize: "clamp(1.85rem, 3vw, 2.5rem)", fontWeight: 600, letterSpacing: "-0.04em", lineHeight: 1.05, color: "#f1f5f9", margin: "0 0 2rem", maxWidth: "24rem" }}>Current openings.</h2>
          {CAREER_ROLES.length === 0 ? (
            <p style={{ color: "#94a3b8", fontSize: "0.95rem", fontStyle: "italic" }}>We are not currently listing fixed roles. We remain open to exceptional builders.</p>
          ) : (
            <RoleAccordion />
          )}
        </div>
      </section>

      {/* 5 — Open Application */}
      <section className={`${s.section} ${s.raised}`}>
        <div className={s.inner}>
          <span style={{ display: "inline-block", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#013efa", marginBottom: "1.25rem" }}>Open Application</span>
          <h2 style={{ fontFamily: "var(--bf-font-display)", fontSize: "clamp(1.85rem, 3vw, 2.5rem)", fontWeight: 600, letterSpacing: "-0.04em", lineHeight: 1.05, color: "#11151b", margin: "0 0 1rem", maxWidth: "26rem" }}>Don&apos;t see a matching role?</h2>
          <p style={{ fontSize: "0.95rem", color: "#596172", lineHeight: 1.7, maxWidth: "38rem", margin: "0 0 2.5rem" }}>
            We remain open to exceptional builders even where a title doesn&apos;t currently exist. Tell us what draws you here and what you would build.
          </p>
          <OpenApplicationForm />
        </div>
      </section>
    </>
  );
}
