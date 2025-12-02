"use client";
import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { useLanguage } from "@/contexts/LanguageContext";
import { officeAssistantApplicationData } from "@/data/officeAssistantApplicationData";

export default function Page() {
  const { lang } = useLanguage();
  return (
    <>
      <PillarTemplateDetailsPage
        data={officeAssistantApplicationData}
        language={lang}
      />
    </>
  );
}
