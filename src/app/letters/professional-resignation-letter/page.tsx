"use client";
import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { useLanguage } from "@/contexts/LanguageContext";
import { professionalResignationTemplate } from "@/data/resignationTemplate/professionalResignationTemplate";

export default function Page() {
  const { language } = useLanguage();
  return (
    <>
      <PillarTemplateDetailsPage
        data={professionalResignationTemplate}
        language={language}
      />
    </>
  );
}
