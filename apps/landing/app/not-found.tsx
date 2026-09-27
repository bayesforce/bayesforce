import Link from "next/link";

export default function NotFound() {
  return (
    <main
      style={{
        minHeight: "80vh",
        background: "#080d15",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "4rem var(--bf-page-gutter)",
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: "28rem" }}>
        <span
          style={{
            fontFamily: "var(--bf-font-mono)",
            fontSize: "0.72rem",
            fontWeight: 700,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "#013efa",
            display: "block",
            marginBottom: "1.25rem",
          }}
        >
          404
        </span>
        <h1
          style={{
            fontFamily: "var(--bf-font-display)",
            fontSize: "clamp(1.75rem, 3vw, 2.25rem)",
            fontWeight: 600,
            letterSpacing: "-0.04em",
            lineHeight: 1.1,
            color: "#f1f5f9",
            margin: "0 0 1rem",
          }}
        >
          That page isn&apos;t part of the map.
        </h1>
        <p style={{ fontSize: "0.95rem", color: "#94a3b8", lineHeight: 1.65, margin: "0 0 2.5rem" }}>
          The page you&apos;re looking for doesn&apos;t exist or has moved.
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", alignItems: "center" }}>
          <Link
            href="/"
            style={{ display: "inline-flex", minHeight: "44px", alignItems: "center", padding: "0.625rem 1.5rem", background: "#013efa", color: "#fff", fontSize: "0.875rem", fontWeight: 600, borderRadius: "0.75rem", textDecoration: "none" }}
          >
            Back to Bayesforce
          </Link>
          <Link
            href="/workflows"
            style={{ fontSize: "0.875rem", color: "#94a3b8", textDecoration: "none" }}
          >
            Explore Workflows →
          </Link>
          <Link
            href="/insights/case-studies"
            style={{ fontSize: "0.875rem", color: "#94a3b8", textDecoration: "none" }}
          >
            Explore Insights →
          </Link>
        </div>
      </div>
    </main>
  );
}
