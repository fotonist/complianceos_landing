import CorporateLanding from "@/components/CorporateLanding";

export default async function LocalizedHomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return <CorporateLanding locale={locale} />;
}
