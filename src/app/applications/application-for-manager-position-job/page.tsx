"use client";
import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { useLanguage } from "@/contexts/LanguageContext";
import { managerHrOperationsSalesTemplate } from "@/data/managerHrOperationsSalesTemplate";

export default function Page() {
  const { language } = useLanguage();
  return (
    <>
      <PillarTemplateDetailsPage
        data={managerHrOperationsSalesTemplate}
        language={language}
      />
    </>
  );
}
