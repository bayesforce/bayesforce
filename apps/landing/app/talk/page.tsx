import type { Metadata } from "next";
import { TalkPage } from "@/components/features/talk/TalkPage";

export const metadata: Metadata = {
  title: "Talk to Bayesforce | Workflow Discovery",
  description:
    "Tell us where work gets stuck, what systems are involved, and what better would look like. We'll use this context to understand the workflow before we talk.",
  openGraph: {
    title: "Talk to Bayesforce — Start with the Workflow",
    description:
      "A structured workflow discovery conversation. Not a contact form — a diagnostic to understand the operational drag before we discuss engineering it.",
    type: "website",
  },
};

export default function TalkRoutePage() {
  return <TalkPage />;
}
