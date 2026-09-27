"use client";

import React from "react";

interface LogoProps {
  className?: string;
  size?: number;
}

/**
 * Authentic SAP Logo (Vector Trapezoid & Lettermark)
 */
export const SapLogo: React.FC<LogoProps> = ({ className, size = 36 }) => (
  <svg
    viewBox="0 0 100 50"
    width={size * 1.8}
    height={size}
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="SAP Logo"
  >
    <defs>
      <linearGradient id="sapGradient" x1="0" y1="0" x2="100" y2="50" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#008FD3" />
        <stop offset="100%" stopColor="#00508C" />
      </linearGradient>
    </defs>
    <path d="M0 0 L100 0 L82 50 L0 50 Z" fill="url(#sapGradient)" />
    {/* 'S' */}
    <path
      d="M17 33.5 C17 37.5 20.5 40 25.5 40 C30.5 40 33.5 37.5 33.5 34 C33.5 27.5 18 27 18 19 C18 14 21.5 11 27 11 C32 11 35 13.5 35.5 17 L30 17 C29.5 15 28.5 14.2 26.8 14.2 C24.8 14.2 23.2 15.2 23.2 17 C23.2 21.5 38.5 21 38.5 32 C38.5 39 33 43 25.5 43 C18 43 12 39 11.5 33.5 L17 33.5 Z"
      fill="#FFFFFF"
    />
    {/* 'A' */}
    <path
      d="M48 11 L54 11 L65 42 L59 42 L56.5 35 L45.5 35 L43 42 L37 42 L48 11 Z M51 18 L47 31 L55 31 L51 18 Z"
      fill="#FFFFFF"
    />
    {/* 'P' */}
    <path
      d="M67 11 L78 11 C83.5 11 87.5 14 87.5 19.5 C87.5 24.5 83.5 27.5 78 27.5 L73 27.5 L73 42 L67 42 L67 11 Z M73 16 L73 22.5 L77.5 22.5 C80 22.5 81.5 21.5 81.5 19.5 C81.5 17.5 80 16 77.5 16 L73 16 Z"
      fill="#FFFFFF"
    />
  </svg>
);

/**
 * Authentic Salesforce Logo (Official Cyan Cloud with Stylized 'f')
 */
export const SalesforceLogo: React.FC<LogoProps> = ({ className, size = 36 }) => (
  <svg
    viewBox="0 0 100 70"
    width={size * 1.45}
    height={size}
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Salesforce Logo"
  >
    <path
      d="M39.6 15.2 C43.2 8.4 50.4 3.8 58.6 3.8 C69.4 3.8 78.5 11.8 80.2 22.3 C86.5 23.9 91.2 29.7 91.2 36.6 C91.2 44.8 84.6 51.5 76.4 51.5 C75.5 51.5 74.6 51.4 73.7 51.2 C70.6 59.8 62.4 66 52.8 66 C43.4 66 35.3 60 32.1 51.6 C30.6 52.2 29 52.5 27.3 52.5 C17.8 52.5 10.1 44.8 10.1 35.3 C10.1 26.6 16.5 19.5 24.9 18.3 C28.1 11.2 35.3 6.3 43.6 6.3 C44.5 6.3 45.4 6.4 46.3 6.6 C43.7 9.1 41.5 12 39.6 15.2 Z"
      fill="#00A1E0"
    />
    <path
      d="M51.8 23.2 C49.2 23.2 47.6 24.6 47.3 27.2 L47.1 28.8 L44.2 28.8 L43.8 32.5 L46.7 32.5 L45.2 45.6 L49.6 45.6 L51.1 32.5 L54.6 32.5 L55.1 28.8 L51.5 28.8 L51.7 27.4 C51.8 26.3 52.3 25.8 53.4 25.8 C54.2 25.8 54.8 26 55.2 26.2 L55.8 23.4 C54.6 23.3 53.2 23.2 51.8 23.2 Z"
      fill="#FFFFFF"
    />
  </svg>
);

/**
 * Authentic PostgreSQL Logo (Official Slonik Elephant Head Vector)
 */
export const PostgresLogo: React.FC<LogoProps> = ({ className, size = 36 }) => (
  <svg
    viewBox="0 0 64 64"
    width={size}
    height={size}
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="PostgreSQL Logo"
  >
    <path
      d="M31.8 8 C18.5 8 7.8 18.7 7.8 32 C7.8 39.2 11 45.7 16 50.1 C16.5 45.3 19 41 23 38.5 C21.8 36.8 21 34.6 21 32.3 C21 26.5 25.8 21.8 31.6 21.8 C37.4 21.8 42.2 26.5 42.2 32.3 C42.2 35.8 40.5 38.9 37.8 40.8 C41.2 42.4 44.5 45.2 46.8 49 C52.5 45 56.2 38.9 56.2 32 C56.2 18.7 45.2 8 31.8 8 Z"
      fill="#336791"
    />
    <path
      d="M32 25 C28 25 25 28 25 32 C25 36 28 39 31.5 39 C33.5 39 35 41 34.5 43.5 C34 46 31 47.5 27 47 C24.5 46.7 22.5 48 22.8 50.2 C23.1 52.4 25.8 53.5 29.5 53.5 C36 53.5 40.5 49 41.5 43 C42.5 37 38.5 32 38.5 28.5 C38.5 26.5 35.5 25 32 25 Z"
      fill="#336791"
    />
    <circle cx="28" cy="29" r="2.2" fill="#FFFFFF" />
    <circle cx="28.5" cy="29" r="1.1" fill="#1A2D42" />
    <path d="M43 23 C48 26 51 32 49 39 C47.5 35 45 30 42 27 Z" fill="#244B6E" />
  </svg>
);

/**
 * Authentic Google Sheets Logo (Green Folded Doc & Spreadsheet Cells)
 */
export const GoogleSheetsLogo: React.FC<LogoProps> = ({ className, size = 36 }) => (
  <svg
    viewBox="0 0 64 64"
    width={size}
    height={size}
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Google Sheets Logo"
  >
    <path d="M14 8 C14 5.8 15.8 4 18 4 L38 4 L50 16 L50 56 C50 58.2 48.2 60 46 60 L18 60 C15.8 60 14 58.2 14 56 Z" fill="#0F9D58" />
    <path d="M38 4 L50 16 L38 16 Z" fill="#87CEAB" opacity="0.85" />
    <rect x="22" y="24" width="20" height="24" rx="2" fill="#FFFFFF" />
    <line x1="22" y1="32" x2="42" y2="32" stroke="#0F9D58" strokeWidth="2" />
    <line x1="22" y1="40" x2="42" y2="40" stroke="#0F9D58" strokeWidth="2" />
    <line x1="32" y1="24" x2="32" y2="48" stroke="#0F9D58" strokeWidth="2" />
  </svg>
);

/**
 * Authentic PDF / Adobe Document Logo (Acrobat Red & Document Badge)
 */
export const PdfLogo: React.FC<LogoProps> = ({ className, size = 36 }) => (
  <svg
    viewBox="0 0 64 64"
    width={size}
    height={size}
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="PDF Contracts Logo"
  >
    <rect x="8" y="6" width="48" height="52" rx="8" fill="#E5252A" />
    <path
      d="M20 42 C20 42 23 32 27 32 C31 32 31.5 36 34 36 C37 36 44 27 44 27 C44 27 40 43 33 43 C27 43 27 38 25 38 C23 38 20 42 20 42 Z"
      fill="#FFFFFF"
      fillOpacity="0.25"
    />
    <text
      x="32"
      y="32"
      fill="#FFFFFF"
      fontSize="13"
      fontWeight="900"
      fontFamily="sans-serif"
      textAnchor="middle"
      letterSpacing="0.06em"
    >
      PDF
    </text>
    <line x1="20" y1="40" x2="44" y2="40" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

/**
 * Authentic AWS S3 Logo (Amazon Coral/Red Bucket)
 */
export const AwsS3Logo: React.FC<LogoProps> = ({ className, size = 36 }) => (
  <svg
    viewBox="0 0 64 64"
    width={size}
    height={size}
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="AWS S3 Logo"
  >
    <defs>
      <linearGradient id="s3Grad" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#E25822" />
        <stop offset="100%" stopColor="#A82800" />
      </linearGradient>
    </defs>
    <path
      d="M12 18 C12 14 21 10 32 10 C43 10 52 14 52 18 L52 46 C52 50 43 54 32 54 C21 54 12 50 12 46 Z"
      fill="url(#s3Grad)"
    />
    <ellipse cx="32" cy="18" rx="20" ry="7" fill="#FF7F4D" />
    <path d="M12 28 C16 32 24 34 32 34 C40 34 48 32 52 28" stroke="#FFEAE2" strokeWidth="2.5" fill="none" opacity="0.8" />
    <path d="M12 38 C16 42 24 44 32 44 C40 44 48 42 52 38" stroke="#FFEAE2" strokeWidth="2.5" fill="none" opacity="0.8" />
  </svg>
);

/**
 * Authentic REST & GraphQL APIs Logo (Hex/Squircle Code & Node Connectors)
 */
export const RestApiLogo: React.FC<LogoProps> = ({ className, size = 36 }) => (
  <svg
    viewBox="0 0 64 64"
    width={size}
    height={size}
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="REST & GraphQL APIs Logo"
  >
    <defs>
      <linearGradient id="apiGrad" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#E10098" />
        <stop offset="100%" stopColor="#4F46E5" />
      </linearGradient>
    </defs>
    <rect x="8" y="8" width="48" height="48" rx="14" fill="url(#apiGrad)" />
    <path d="M22 25 L15 32 L22 39" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M42 25 L49 32 L42 39" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    <line x1="35" y1="21" x2="29" y2="43" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

/**
 * Authentic Apache Kafka / Event Streams Logo (Interconnected Event Cluster)
 */
export const KafkaLogo: React.FC<LogoProps> = ({ className, size = 36 }) => (
  <svg
    viewBox="0 0 64 64"
    width={size}
    height={size}
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Apache Kafka Logo"
  >
    <defs>
      <linearGradient id="kafkaGrad" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#231F20" />
        <stop offset="100%" stopColor="#374151" />
      </linearGradient>
    </defs>
    <circle cx="32" cy="32" r="26" fill="url(#kafkaGrad)" />
    <circle cx="22" cy="24" r="5" fill="#FFFFFF" />
    <circle cx="22" cy="40" r="5" fill="#FFFFFF" />
    <circle cx="42" cy="32" r="5" fill="#FFFFFF" />
    <line x1="22" y1="24" x2="42" y2="32" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="22" y1="40" x2="42" y2="32" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);
