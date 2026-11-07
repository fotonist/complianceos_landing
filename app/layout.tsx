import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist",
});

export const metadata: Metadata = {
  title: {
    default: "Compliance Intelligence OS Pro",
    template: "%s | Compliance Intelligence OS Pro",
  },
  description:
    "Enterprise GRC and compliance management platform connecting multiple standards, regulatory requirements, risks, controls, audits, evidence and maturity assessments.",
  applicationName: "Compliance Intelligence OS Pro",
  keywords: [
    "Compliance",
    "Risk Management",
    "Governance",
    "GRC",
    "ISO 27001",
    "ISO 9001",
    "Audit",
    "AI",
    "Enterprise",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geist.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}