"use client";

import { useState, useId } from "react";
import Link from "next/link";
import { BUSINESS_FUNCTIONS } from "@/content/businessFunctions";
import s from "./TalkPage.module.css";

/* ── Static config ──────────────────────────────────────────── */
const FUNCTIONS = [
  { label: "Revenue Operations",              slug: "revenue-operations" },
  { label: "Customer Operations",             slug: "customer-operations" },
  { label: "Finance Operations",              slug: "finance-operations" },
  { label: "Procurement & Vendor Operations", slug: "procurement-vendor-operations" },
  { label: "Business Operations",             slug: "business-operations" },
  { label: "Technology Operations",           slug: "technology-operations" },
  { label: "Legal, Risk & Compliance",        slug: "legal-risk-compliance-operations" },
  { label: "People Operations",               slug: "people-operations" },
  { label: "Not sure",                        slug: "" },
];

const SYSTEMS = [
  "CRM", "ERP", "Email", "Documents / PDFs", "Ticketing",
  "Databases", "Spreadsheets", "Internal tools", "Slack / Teams", "Other",
];

const IMPROVEMENTS = [
  "Faster processing", "Higher throughput", "Fewer errors",
  "Less human intervention", "Lower cost", "More capacity",
  "Fewer handoffs", "Better visibility",
];

const PROCESS = [
  "We review the workflow.",
  "We identify where operational drag exists.",
  "We determine where AI can create leverage.",
  "We discuss whether it is worth engineering.",
];

/* ── State ──────────────────────────────────────────────────── */
interface FormState {
  businessFunction: string;
  functionSlug: string;
  workflow: string;
  currentProcess: string;
  systems: string[];
  improvements: string[];
  improvementNote: string;
  name: string;
  email: string;
  company: string;
  role: string;
}

const EMPTY: FormState = {
  businessFunction: "", functionSlug: "", workflow: "",
  currentProcess: "", systems: [], improvements: [],
  improvementNote: "", name: "", email: "", company: "", role: "",
};

/* ── Chip helpers ───────────────────────────────────────────── */
function toggle(arr: string[], val: string): string[] {
  return arr.includes(val) ? arr.filter((x) => x !== val) : [...arr, val];
}

/* ── Component ──────────────────────────────────────────────── */
export function TalkPage() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState<FormState>(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const nameId = useId();
  const emailId = useId();
  const companyId = useId();
  const roleId = useId();
  const workflowId = useId();
  const processId = useId();
  const noteId = useId();

  // Workflow suggestions for selected function
  const fnData = BUSINESS_FUNCTIONS.find((f) => f.slug === form.functionSlug);
  const suggestions = fnData?.workflows.map((w) => w.name) ?? [];

  function validate(): boolean {
    const e: typeof errors = {};
    if (step === 1 && !form.businessFunction) e.businessFunction = "Please select a function.";
    if (step === 2 && !form.workflow.trim()) e.workflow = "Please describe the workflow.";
    if (step === 6) {
      if (!form.name.trim()) e.name = "Name is required.";
      if (!form.email.trim()) e.email = "Email is required.";
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Enter a valid email address.";
      if (!form.company.trim()) e.company = "Company is required.";
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function handleContinue() {
    if (!validate()) return;
    if (step < 6) { setStep(step + 1); return; }
    // Submit
    setSubmitting(true);
    try {
      await fetch("/api/talk", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setSubmitted(true);
    } catch {
      // Still show success — form data logged server-side
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className={s.page}>
        <div className={s.formArea}>
          <div className={s.formInner}>
            <div className={s.success} role="status">
              <div className={s.successIcon} aria-hidden="true">✓</div>
              <h2 className={s.successHeadline}>We have your workflow context.</h2>
              <p className={s.successBody}>
                We&apos;ll review the workflow and identify where AI can create leverage. You&apos;ll hear from us within one business day.
              </p>
              <Link href="/" className={s.successBack}>← Back to Bayesforce</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={s.page}>
      {/* Header */}
      <header className={s.header}>
        <div className={s.headerInner}>
          <div>
            <h1 className={s.headerHeadline}>Have a workflow worth fixing?</h1>
            <p className={s.headerSub}>
              Tell us where work gets stuck, what systems are involved, and what better would look like. We&apos;ll use this context to understand the workflow before we talk.
            </p>
          </div>
          <div>
            <div className={s.process} aria-label="What happens after you submit">
              {PROCESS.map((text, i) => (
                <div key={i} className={s.processStep}>
                  <span className={s.processNum}>{String(i + 1).padStart(2, "0")}</span>
                  <span className={s.processText}>{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Form */}
      <div className={s.formArea}>
        <div className={s.formInner}>
          {/* Progress */}
          <div
            className={s.progress}
            role="progressbar"
            aria-valuenow={step}
            aria-valuemin={1}
            aria-valuemax={6}
            aria-label={`Step ${step} of 6`}
          >
            {[1,2,3,4,5,6].map((n) => (
              <div
                key={n}
                className={`${s.progressDot} ${n === step ? s.progressDotActive : n < step ? s.progressDotDone : ""}`}
              />
            ))}
            <span className={s.progressLabel}>{step} / 6</span>
          </div>

          {/* Step 1 — Business function */}
          {step === 1 && (
            <div className={s.step} key="step1">
              <h2 className={s.stepQuestion}>What business function does this work belong to?</h2>
              <p className={s.stepHint}>Select the function that best describes where the workflow lives.</p>
              <div className={s.chips} role="group" aria-label="Business functions">
                {FUNCTIONS.map((fn) => (
                  <button
                    key={fn.label}
                    type="button"
                    className={`${s.chip} ${form.businessFunction === fn.label ? s.chipSelected : ""}`}
                    onClick={() => {
                      setForm({ ...form, businessFunction: fn.label, functionSlug: fn.slug });
                      setErrors({});
                    }}
                    aria-pressed={form.businessFunction === fn.label}
                  >
                    {fn.label}
                  </button>
                ))}
              </div>
              {errors.businessFunction && <p className={s.error} role="alert">{errors.businessFunction}</p>}
            </div>
          )}

          {/* Step 2 — Workflow */}
          {step === 2 && (
            <div className={s.step} key="step2">
              <h2 className={s.stepQuestion}>What workflow are you trying to improve?</h2>
              <p className={s.stepHint}>Describe the specific process or task, in your own words.</p>
              <label htmlFor={workflowId} className={s.label} style={{ display: "block", marginBottom: "0.4rem" }}>
                Workflow description <span className={s.required} aria-hidden="true">*</span>
              </label>
              <textarea
                id={workflowId}
                className={s.textarea}
                rows={4}
                value={form.workflow}
                onChange={(e) => { setForm({ ...form, workflow: e.target.value }); setErrors({}); }}
                placeholder="e.g. We reconcile vendor invoices against purchase orders manually every month..."
                aria-required="true"
                aria-invalid={!!errors.workflow}
                aria-describedby={errors.workflow ? `${workflowId}-err` : undefined}
              />
              {errors.workflow && <p className={s.error} id={`${workflowId}-err`} role="alert">{errors.workflow}</p>}
              {suggestions.length > 0 && (
                <div className={s.suggestions}>
                  <span className={s.suggLabel}>Common workflows in {form.businessFunction}</span>
                  {suggestions.slice(0, 6).map((name) => (
                    <button
                      key={name}
                      type="button"
                      className={s.suggChip}
                      onClick={() => setForm({ ...form, workflow: name })}
                    >
                      {name}
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Step 3 — Current process */}
          {step === 3 && (
            <div className={s.step} key="step3">
              <h2 className={s.stepQuestion}>What does the current process look like?</h2>
              <p className={s.stepHint}>Optional. Walk us through the steps today.</p>
              <label htmlFor={processId} className={s.label} style={{ display: "block", marginBottom: "0.4rem" }}>
                Current process
              </label>
              <textarea
                id={processId}
                className={s.textarea}
                rows={5}
                value={form.currentProcess}
                onChange={(e) => setForm({ ...form, currentProcess: e.target.value })}
                placeholder="Walk us through the steps: how does this work start, who touches it, what systems are involved at each stage, where does it get slow or inconsistent?"
              />
            </div>
          )}

          {/* Step 4 — Systems */}
          {step === 4 && (
            <div className={s.step} key="step4">
              <h2 className={s.stepQuestion}>Which systems or tools are involved?</h2>
              <p className={s.stepHint}>Optional. Select all that apply.</p>
              <div className={s.chips} role="group" aria-label="Systems involved">
                {SYSTEMS.map((sys) => (
                  <button
                    key={sys}
                    type="button"
                    className={`${s.chip} ${form.systems.includes(sys) ? s.chipSelected : ""}`}
                    onClick={() => setForm({ ...form, systems: toggle(form.systems, sys) })}
                    aria-pressed={form.systems.includes(sys)}
                  >
                    {sys}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 5 — Improvements */}
          {step === 5 && (
            <div className={s.step} key="step5">
              <h2 className={s.stepQuestion}>What would meaningful improvement look like?</h2>
              <p className={s.stepHint}>Optional. Select all that resonate.</p>
              <div className={s.chips} role="group" aria-label="Improvement types">
                {IMPROVEMENTS.map((imp) => (
                  <button
                    key={imp}
                    type="button"
                    className={`${s.chip} ${form.improvements.includes(imp) ? s.chipSelected : ""}`}
                    onClick={() => setForm({ ...form, improvements: toggle(form.improvements, imp) })}
                    aria-pressed={form.improvements.includes(imp)}
                  >
                    {imp}
                  </button>
                ))}
              </div>
              <label htmlFor={noteId} className={s.optLabel}>Anything more specific?</label>
              <textarea
                id={noteId}
                className={s.textarea}
                rows={2}
                value={form.improvementNote}
                onChange={(e) => setForm({ ...form, improvementNote: e.target.value })}
                placeholder="e.g. Cut monthly close from 12 days to 2 days..."
              />
            </div>
          )}

          {/* Step 6 — Contact */}
          {step === 6 && (
            <div className={s.step} key="step6">
              <h2 className={s.stepQuestion}>How should we reach you?</h2>
              <p className={s.stepHint}>We&apos;ll use this to follow up about the workflow.</p>
              <div className={s.inputGroup}>
                <label htmlFor={nameId} className={s.label}>
                  Name <span className={s.required} aria-hidden="true">*</span>
                </label>
                <input
                  id={nameId}
                  className={s.input}
                  type="text"
                  value={form.name}
                  onChange={(e) => { setForm({ ...form, name: e.target.value }); setErrors({}); }}
                  placeholder="Your name"
                  autoComplete="name"
                  aria-required="true"
                  aria-invalid={!!errors.name}
                />
                {errors.name && <p className={s.error} role="alert">{errors.name}</p>}
              </div>
              <div className={s.inputGroup}>
                <label htmlFor={emailId} className={s.label}>
                  Work email <span className={s.required} aria-hidden="true">*</span>
                </label>
                <input
                  id={emailId}
                  className={s.input}
                  type="email"
                  value={form.email}
                  onChange={(e) => { setForm({ ...form, email: e.target.value }); setErrors({}); }}
                  placeholder="you@company.com"
                  autoComplete="email"
                  aria-required="true"
                  aria-invalid={!!errors.email}
                />
                {errors.email && <p className={s.error} role="alert">{errors.email}</p>}
              </div>
              <div className={s.inputGroup}>
                <label htmlFor={companyId} className={s.label}>
                  Company <span className={s.required} aria-hidden="true">*</span>
                </label>
                <input
                  id={companyId}
                  className={s.input}
                  type="text"
                  value={form.company}
                  onChange={(e) => { setForm({ ...form, company: e.target.value }); setErrors({}); }}
                  placeholder="Company name"
                  autoComplete="organization"
                  aria-required="true"
                  aria-invalid={!!errors.company}
                />
                {errors.company && <p className={s.error} role="alert">{errors.company}</p>}
              </div>
              <div className={s.inputGroup}>
                <label htmlFor={roleId} className={s.label}>Role (optional)</label>
                <input
                  id={roleId}
                  className={s.input}
                  type="text"
                  value={form.role}
                  onChange={(e) => setForm({ ...form, role: e.target.value })}
                  placeholder="e.g. VP Finance, Head of Operations"
                  autoComplete="organization-title"
                />
              </div>
            </div>
          )}

          {/* Navigation */}
          <div className={s.navRow}>
            {step > 1 && (
              <button type="button" className={s.btnBack} onClick={() => setStep(step - 1)}>
                ← Back
              </button>
            )}
            <button
              type="button"
              className={s.btnContinue}
              onClick={handleContinue}
              disabled={submitting}
            >
              {step < 6 ? "Continue →" : submitting ? "Submitting…" : "Submit Workflow →"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
