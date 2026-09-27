"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    if (process.env.NODE_ENV !== "production") {
      console.error("[Error boundary]", error);
    }
  }, [error]);

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
            color: "#f87171",
            display: "block",
            marginBottom: "1.25rem",
          }}
        >
          Something went wrong
        </span>
        <h1
          style={{
            fontFamily: "var(--bf-font-display)",
            fontSize: "clamp(1.5rem, 3vw, 2rem)",
            fontWeight: 600,
            letterSpacing: "-0.04em",
            lineHeight: 1.1,
            color: "#f1f5f9",
            margin: "0 0 1rem",
          }}
        >
          An unexpected error occurred.
        </h1>
        <p style={{ fontSize: "0.92rem", color: "#94a3b8", lineHeight: 1.65, margin: "0 0 2.25rem" }}>
          The page encountered a problem. You can try again or return to the homepage.
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", alignItems: "center" }}>
          <button
            type="button"
            onClick={reset}
            style={{ display: "inline-flex", minHeight: "44px", alignItems: "center", padding: "0.625rem 1.5rem", background: "#013efa", border: "none", color: "#fff", fontSize: "0.875rem", fontWeight: 600, borderRadius: "0.75rem", cursor: "pointer" }}
          >
            Try again
          </button>
          <Link
            href="/"
            style={{ fontSize: "0.875rem", color: "#94a3b8", textDecoration: "none" }}
          >
            Back to Bayesforce →
          </Link>
        </div>
      </div>
    </main>
  );
}
