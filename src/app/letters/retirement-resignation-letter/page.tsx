"use client";
import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { useLanguage } from "@/contexts/LanguageContext";
import { retirementResignationTemplate } from "@/data/resignationTemplate/retirementResignationTemplate";

export default function Page() {
  const { language } = useLanguage();
  return (
    <>
      <PillarTemplateDetailsPage
        data={retirementResignationTemplate}
        language={language}
      />
    </>
  );
}
