"use client";
import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { useLanguage } from "@/contexts/LanguageContext";
import { careerChangeResignationTemplate } from "@/data/resignationTemplate/careerChangeResignationTemplate";

export default function Page() {
  const { lang } = useLanguage();
  return (
    <>
      <PillarTemplateDetailsPage
        data={careerChangeResignationTemplate}
        language={lang}
      />
    </>
  );
}
