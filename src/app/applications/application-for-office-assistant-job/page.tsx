"use client";
import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { useLanguage } from "@/contexts/LanguageContext";
import { officeAssistantApplicationData } from "@/data/officeAssistantApplicationData";

export default function Page() {
  const { language } = useLanguage();
  return (
    <>
      <PillarTemplateDetailsPage
        data={officeAssistantApplicationData}
        language={language}
      />
    </>
  );
}
