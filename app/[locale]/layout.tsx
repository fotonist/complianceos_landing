import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { routing } from "@/i18n/routing";

const siteUrl = "https://www.complianceos.com.tr";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!routing.locales.includes(locale as "en" | "tr")) notFound();

  const isTurkish = locale === "tr";
  const canonical = isTurkish ? "/tr" : "/";

  return {
    title: {
      absolute: isTurkish
        ? "ComplianceOS | GRC ve Uyum Yönetimi Yazılımı"
        : "ComplianceOS | GRC & Compliance Management Software",
    },
    description: isTurkish
      ? "ComplianceOS ile ISO 27001 uyum süreçlerini, risk değerlendirmelerini, iç tetkikleri, kanıt yönetimini ve olgunluk değerlendirmelerini tek platformda yönetin."
      : "Manage ISO 27001 compliance, risk assessments, internal audits, evidence and maturity assessments with the ComplianceOS GRC platform.",
    alternates: {
      canonical,
      languages: { en: "/", tr: "/tr", "x-default": "/" },
    },
    openGraph: {
      type: "website",
      url: new URL(canonical, siteUrl).toString(),
      siteName: "ComplianceOS",
      title: isTurkish
        ? "ComplianceOS | GRC ve Uyum Yönetimi Yazılımı"
        : "ComplianceOS | GRC & Compliance Management Software",
      description: isTurkish
        ? "ISO 27001 uyumu, risk yönetimi, iç tetkik ve kanıt yönetimi için entegre platform."
        : "Integrated GRC software for compliance, risk management, internal audits and evidence.",
      locale: isTurkish ? "tr_TR" : "en_US",
      alternateLocale: isTurkish ? "en_US" : "tr_TR",
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as "en" | "tr")) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}
