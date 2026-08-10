import { getTranslations } from "next-intl/server";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import DashboardPreview from "@/components/DashboardPreview";

export default async function LocalizedHomePage() {
  const t = await getTranslations("hero");

  return (
    <>
      <Navbar />

      <main className="overflow-hidden">
        <Hero
          description={t("description")}
          subDescription={t("subDescription")}
          supportedFrameworks={t("supportedFrameworks")}
        />

        <DashboardPreview />
      </main>
    </>
  );
}