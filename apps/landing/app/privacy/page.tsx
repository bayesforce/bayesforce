import type { Metadata } from "next";
import { LegalPage } from "@/components/shared/LegalPage";
import type { LegalSection } from "@/components/shared/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy | Bayesforce",
  description: "How Bayesforce collects, uses, and protects information.",
};

const SECTIONS: LegalSection[] = [
  {
    id: "what-we-collect",
    heading: "1. What We Collect",
    paragraphs: [
      "When you interact with the Bayesforce website or submit information through forms, we may collect: name, work email address, company name, role, and information you provide about operational workflows.",
      "We also collect standard usage data such as pages visited, referral sources, and device information through analytics tools.",
      "We do not collect payment information, personal identification documents, or sensitive personal data through this website.",
    ],
  },
  {
    id: "how-we-use",
    heading: "2. How We Use Information",
    paragraphs: [
      "We use information you submit to respond to workflow discovery inquiries, assess potential engagements, and follow up on application submissions.",
      "We use usage analytics to understand how the website is used and to improve the content and navigation.",
      "We do not sell, rent, or trade personal information to third parties.",
    ],
  },
  {
    id: "third-party-services",
    heading: "3. Third-Party Services",
    paragraphs: [
      "The Bayesforce website may use third-party services for hosting, analytics, and form processing. These services may collect information according to their own privacy policies.",
      "We endeavour to use only services that maintain appropriate data protection standards.",
    ],
  },
  {
    id: "data-retention",
    heading: "4. Data Retention",
    paragraphs: [
      "We retain information submitted through contact and application forms for as long as necessary to respond to the inquiry or process the application, and for a reasonable period thereafter for record-keeping purposes.",
      "If you wish to request deletion of your data, please contact us at the address below.",
    ],
  },
  {
    id: "your-rights",
    heading: "5. Your Rights",
    paragraphs: [
      "You may request access to, correction of, or deletion of personal information we hold about you.",
      "Depending on your location, you may have additional rights under applicable data protection laws, including GDPR and similar frameworks.",
      "To exercise any of these rights, please contact us using the details in Section 7.",
    ],
  },
  {
    id: "cookies",
    heading: "6. Cookies",
    paragraphs: [
      "The Bayesforce website may use cookies and similar technologies to support analytics and session management.",
      "You can control cookie settings through your browser. Disabling cookies may affect some functionality of the website.",
    ],
  },
  {
    id: "contact",
    heading: "7. Contact",
    paragraphs: [
      "If you have any questions about this Privacy Policy or how we handle your data, please contact us via the Bayesforce website.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <LegalPage
      type="Legal"
      title="Privacy Policy"
      effectiveDate="September 2026"
      intro="This Privacy Policy describes how Bayesforce collects, uses, and handles information when you visit or interact with our website. The information below is a working placeholder and will be replaced with reviewed legal copy prior to publication."
      sections={SECTIONS}
    />
  );
}
