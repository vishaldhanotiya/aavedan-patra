"use client";
import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { useLanguage } from "@/contexts/LanguageContext";
import { managerHrOperationsSalesPillar } from "@/data/managerHrOperationsSalesPillar";

export default function Page() {
  const { language } = useLanguage();
  return (
    <>
      <PillarTemplateDetailsPage
        data={managerHrOperationsSalesPillar}
        language={language}
      />
    </>
  );
}
