"use client";
import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { useLanguage } from "@/contexts/LanguageContext";
import { careerChangeResignation } from "@/data/resignation/careerChangeResignation";

export default function Page() {
  const { lang } = useLanguage();
  return (
    <>
      <PillarTemplateDetailsPage
        data={careerChangeResignation}
        language={lang}
      />
    </>
  );
}
