import type { Metadata } from "next";
import Link from "next/link";
import { CAPABILITIES, getCapabilityHref } from "@/content/catalog";

export const metadata: Metadata = {
  title: "Capabilities | Bayesforce",
  description:
    "Four engineering capabilities — AI Data Engineering, AI Coworkers, AI Trust & Governance, and AI Enablement — that together make operational workflows capable of running reliably in production.",
  openGraph: {
    title: "Capabilities | Bayesforce",
    description:
      "The four engineering layers that make AI-enabled workflows production-ready.",
    type: "website",
  },
};

export default function CapabilitiesPage() {
  return (
    <>
      {/* Hero */}
      <header style={{ background: "#11151b", padding: "6rem var(--bf-page-gutter) 5rem" }}>
        <div style={{ width: "min(var(--bf-content-width), calc(100% - var(--bf-page-gutter) * 2))", margin: "0 auto" }}>
          <span style={{ display: "inline-block", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#013efa", marginBottom: "1.25rem" }}>
            Our Capabilities
          </span>
          <h1 style={{ fontFamily: "var(--bf-font-display)", fontSize: "clamp(2.2rem, 4vw, 3.25rem)", fontWeight: 600, letterSpacing: "-0.04em", lineHeight: 1.05, color: "#f1f5f9", margin: "0 0 1.25rem", maxWidth: "30rem" }}>
            AI engineered for organizational work.
          </h1>
          <p style={{ fontSize: "clamp(1rem, 1.3vw, 1.08rem)", color: "#94a3b8", lineHeight: 1.7, maxWidth: "38rem", margin: "0 0 2.25rem" }}>
            Bayesforce engineers four complementary capabilities into operational workflows. Each one is a technical layer — not a service category. Together they make a workflow capable of operating reliably in production.
          </p>
          <Link href="/workflows" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", minHeight: "3rem", padding: "0.75rem 1.5rem", background: "#013efa", color: "#fff", fontSize: "0.875rem", fontWeight: 600, letterSpacing: "-0.01em", borderRadius: "0.75rem", textDecoration: "none" }}>
            Explore Workflows →
          </Link>
        </div>
      </header>

      {/* Capability cards */}
      <section style={{ background: "#f8fafc", padding: "5rem var(--bf-page-gutter)" }}>
        <div style={{ width: "min(var(--bf-content-width), calc(100% - var(--bf-page-gutter) * 2))", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(22rem, 1fr))", gap: "1.25rem" }}>
            {CAPABILITIES.map((cap, i) => (
              <Link
                key={cap.id}
                href={getCapabilityHref(cap.slug)}
                style={{ display: "flex", flexDirection: "column", gap: "0.75rem", padding: "1.75rem", background: "#fff", border: "1px solid #dde2ea", borderRadius: "14px", textDecoration: "none", transition: "border-color 130ms ease, box-shadow 130ms ease" }}
              >
                <div style={{ fontFamily: "var(--bf-font-mono)", fontSize: "0.65rem", letterSpacing: "0.08em", color: "#013efa" }}>
                  {String(i + 1).padStart(2, "0")}
                </div>
                <strong style={{ fontSize: "1.05rem", fontWeight: 600, color: "#11151b", letterSpacing: "-0.02em" }}>
                  {cap.shortTitle}
                </strong>
                <p style={{ fontSize: "0.82rem", fontWeight: 600, color: "#3e4555", margin: 0 }}>
                  {cap.positioning}
                </p>
                <p style={{ fontSize: "0.8rem", color: "#67707e", lineHeight: 1.55, margin: 0, flex: 1 }}>
                  {cap.tagline}
                </p>
                <span style={{ fontSize: "0.8rem", fontWeight: 600, color: "#013efa", marginTop: "0.5rem" }}>
                  Explore →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Four-pillar architecture */}
      <section style={{ background: "#11151b", padding: "5rem var(--bf-page-gutter)" }}>
        <div style={{ width: "min(var(--bf-content-width), calc(100% - var(--bf-page-gutter) * 2))", margin: "0 auto", textAlign: "center" }}>
          <span style={{ display: "inline-block", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#94a3b8", marginBottom: "1.25rem" }}>
            One Architecture
          </span>
          <h2 style={{ fontFamily: "var(--bf-font-display)", fontSize: "clamp(1.85rem, 3vw, 2.5rem)", fontWeight: 600, letterSpacing: "-0.04em", lineHeight: 1.05, color: "#f1f5f9", margin: "0 0 1rem", maxWidth: "24rem", marginLeft: "auto", marginRight: "auto" }}>
            The four capabilities form one engineering system.
          </h2>
          <p style={{ color: "#94a3b8", fontSize: "1rem", lineHeight: 1.65, maxWidth: "36rem", margin: "0 auto 3rem" }}>
            Data and context give the system information. Coworkers execute the work. Trust and governance make it reliable. Enablement transfers it to the organization.
          </p>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 0, maxWidth: "28rem", margin: "0 auto" }}>
            <div style={{ fontFamily: "var(--bf-font-mono)", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#f1f5f9", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "8px", padding: "0.625rem 2rem", marginBottom: "0.75rem" }}>
              WORKFLOW
            </div>
            <div style={{ width: "1px", height: "1.5rem", background: "rgba(255,255,255,0.12)", marginBottom: "0.75rem" }} aria-hidden="true" />
            <div style={{ display: "flex", gap: "1px", background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "10px", overflow: "hidden", width: "100%", marginBottom: "0.75rem" }}>
              {[
                { label: "DATA",      slug: "ai-data-engineering",    desc: "Context & information" },
                { label: "EXECUTION", slug: "ai-coworkers",           desc: "Operational work" },
                { label: "TRUST",     slug: "ai-trust-and-governance",desc: "Control & governance" },
              ].map((cap) => (
                <Link key={cap.slug} href={getCapabilityHref(cap.slug)} style={{ flex: 1, padding: "1rem", background: "#11151b", display: "flex", flexDirection: "column", gap: "0.25rem", textDecoration: "none" }}>
                  <span style={{ fontFamily: "var(--bf-font-mono)", fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.07em", textTransform: "uppercase", color: "#013efa" }}>{cap.label}</span>
                  <span style={{ fontSize: "0.75rem", color: "#94a3b8", lineHeight: 1.4 }}>{cap.desc}</span>
                </Link>
              ))}
            </div>
            <div style={{ width: "1px", height: "1.5rem", background: "rgba(255,255,255,0.12)", marginBottom: "0.75rem" }} aria-hidden="true" />
            <Link href={getCapabilityHref("ai-capability")} style={{ fontFamily: "var(--bf-font-mono)", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.07em", textTransform: "uppercase", color: "#94a3b8", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "8px", padding: "0.625rem 1.5rem", textDecoration: "none" }}>
              ENABLEMENT — Organizational transfer
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
