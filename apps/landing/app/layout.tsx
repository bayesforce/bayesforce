import React from "react";
import "./globals.css";
import { Providers } from "./providers";

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3005"),
  title: "Bayesforce | AI Capabilities for Organizations",
  description:
    "Make More Happen. Bayesforce builds AI capabilities inside organizations, turning existing systems, data and workflows into intelligent operations.",
  keywords: [
    "Bayesforce",
    "AI Capabilities",
    "AI Coworkers",
    "AI Data Engineering",
    "AI Trust and Governance",
    "AI Operations",
    "Enterprise AI Workflows",
    "Thomas Bayes",
  ],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    title: "Bayesforce | Make More Happen",
    description:
      "Bayesforce builds AI capabilities inside organizations so their systems carry more of the machinery of work and their people can carry more of their ambition.",
    type: "website",
    images: [
      {
        url: "/brand/bayesforce_linkedin_banner_1584x396.png",
        width: 1584,
        height: 396,
        alt: "Bayesforce - AI Capabilities for Organizations",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bayesforce | Make More Happen",
    description:
      "Bayesforce builds AI capabilities inside organizations so their systems carry more of the machinery of work and their people can carry more of their ambition.",
    images: ["/brand/bayesforce_linkedin_banner_1584x396.png"],
  },
};

import { SiteHeader } from "./components/SiteHeader";
import { SiteFooter } from "./components/SiteFooter";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&family=Manrope:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="flex flex-col min-h-screen">
        <Providers>
          <SiteHeader />
          <div className="flex-grow">{children}</div>
          <SiteFooter />
        </Providers>
      </body>
    </html>
  );
}
