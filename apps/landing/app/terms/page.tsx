import type { Metadata } from "next";
import { LegalPage } from "@/components/shared/LegalPage";
import type { LegalSection } from "@/components/shared/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Service | Bayesforce",
  description: "Terms governing your use of the Bayesforce website.",
};

const SECTIONS: LegalSection[] = [
  {
    id: "acceptance",
    heading: "1. Acceptance of Terms",
    paragraphs: [
      "By accessing and using the Bayesforce website, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the website.",
      "These terms may be updated from time to time. Continued use of the website after changes are posted constitutes acceptance of the updated terms.",
    ],
  },
  {
    id: "use-of-website",
    heading: "2. Use of the Website",
    paragraphs: [
      "You agree to use the Bayesforce website for lawful purposes only and in a manner that does not infringe the rights of others or restrict or inhibit their use of the site.",
      "You may not use automated tools to scrape, crawl, or extract content from the website without prior written consent.",
    ],
  },
  {
    id: "intellectual-property",
    heading: "3. Intellectual Property",
    paragraphs: [
      "All content on the Bayesforce website — including text, diagrams, data models, playbooks, and visual design — is the intellectual property of Bayesforce unless otherwise stated.",
      "You may not reproduce, distribute, or create derivative works from Bayesforce content without prior written permission.",
    ],
  },
  {
    id: "disclaimer",
    heading: "4. Disclaimer of Warranties",
    paragraphs: [
      "The Bayesforce website is provided on an 'as is' basis without warranties of any kind, express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement.",
      "We do not warrant that the website will be uninterrupted, error-free, or free of viruses or other harmful components.",
    ],
  },
  {
    id: "limitation-of-liability",
    heading: "5. Limitation of Liability",
    paragraphs: [
      "To the fullest extent permitted by law, Bayesforce shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of the website.",
    ],
  },
  {
    id: "third-party-links",
    heading: "6. Links to Third-Party Sites",
    paragraphs: [
      "The website may contain links to third-party websites. Bayesforce is not responsible for the content, accuracy, or practices of those sites.",
      "Linking to a third-party site does not imply endorsement.",
    ],
  },
  {
    id: "changes",
    heading: "7. Changes to These Terms",
    paragraphs: [
      "Bayesforce reserves the right to modify these Terms at any time. We will indicate the effective date of the most recent revision at the top of this page.",
      "Your continued use of the website after changes are posted constitutes acceptance of the revised Terms.",
    ],
  },
  {
    id: "contact",
    heading: "8. Contact",
    paragraphs: [
      "If you have any questions about these Terms, please contact us via the Bayesforce website.",
    ],
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      type="Legal"
      title="Terms of Service"
      effectiveDate="September 2026"
      intro="These Terms of Service govern your access to and use of the Bayesforce website. The content below is a working placeholder and will be replaced with reviewed legal copy prior to publication."
      sections={SECTIONS}
    />
  );
}
