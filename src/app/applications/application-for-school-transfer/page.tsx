"use client";
import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { useLanguage } from "@/contexts/LanguageContext";
import { schoolTransferTemplate } from "@/data/admissionTemplate/schoolTransferTemplate";

export default function Page() {
  const { language } = useLanguage();
  return (
    <>
      <PillarTemplateDetailsPage
        data={schoolTransferTemplate}
        language={language}
      />
    </>
  );
}
