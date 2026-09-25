import React from "react";
import type { Metadata } from "next";
import { RoutePlaceholder } from "../../components/RoutePlaceholder";

export const metadata: Metadata = {
  title: "Finance & Accounting | Bayesforce",
  description:
    "Streamline invoice reconciliation, ledger anomalies detection, and financial reporting across enterprise ERPs.",
};

export default function FinanceAndAccountingPage() {
  return (
    <RoutePlaceholder
      route="/workflows/finance-and-accounting"
      title="Finance & Accounting"
      description="Streamline invoice reconciliation, ledger anomalies detection, and financial reporting across enterprise ERPs and accounting systems."
    />
  );
}
