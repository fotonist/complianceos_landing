import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { capabilities, getCapability, featurePath, site, type Locale } from "@/lib/capabilities";
import CapabilityPage from "@/components/CapabilityPage";

type Params = { locale: string; slug: string };

export function generateStaticParams() {
  return ["en", "tr"].flatMap(locale =>
    capabilities.map(capability => ({ locale, slug: capability.slug }))
  );
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { locale, slug } = await params;
  if (locale !== "en" && locale !== "tr") return {};
  const capability = getCapability(slug);
  if (!capability) return {};
  const lang = locale as Locale;
  const copy = capability[lang];
  return {
    title: `${copy.title} | ComplianceOS Pro`,
    description: copy.description,
    alternates: {
      canonical: `${site}${featurePath(lang, slug)}`,
      languages: {
        en: `${site}${featurePath("en", slug)}`,
        tr: `${site}${featurePath("tr", slug)}`
      }
    },
    openGraph: {
      title: copy.title,
      description: copy.description,
      url: `${site}${featurePath(lang, slug)}`,
      type: "website",
      locale: lang === "tr" ? "tr_TR" : "en_US"
    }
  };
}

export default async function LocalizedFeaturePage({ params }: { params: Promise<Params> }) {
  const { locale, slug } = await params;
  if (locale !== "en" && locale !== "tr") notFound();
  const capability = getCapability(slug);
  if (!capability) notFound();
  return <CapabilityPage capability={capability} locale={locale as Locale} />;
}
