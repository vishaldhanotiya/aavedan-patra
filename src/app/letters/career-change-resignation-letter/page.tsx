"use client";
import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { useLanguage } from "@/contexts/LanguageContext";
import { careerChangeResignationTemplate } from "@/data/resignationTemplate/careerChangeResignationTemplate";

export default function Page() {
  const { language } = useLanguage();
  return (
    <>
      <PillarTemplateDetailsPage
        data={careerChangeResignationTemplate}
        language={language}
      />
    </>
  );
}
