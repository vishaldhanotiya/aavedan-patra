"use client";
import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { useLanguage } from "@/contexts/LanguageContext";
import { researchGrantTemplate } from "@/data/scholarshipTemplate/researchGrantTemplate";

export default function Page() {
  const { language } = useLanguage();
  return (
    <>
      <PillarTemplateDetailsPage
        data={researchGrantTemplate}
        language={language}
      />
    </>
  );
}
