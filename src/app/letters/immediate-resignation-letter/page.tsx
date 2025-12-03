"use client";
import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { useLanguage } from "@/contexts/LanguageContext";
import { immediateResignationTemplate } from "@/data/resignationTemplate/immediateResignationTemplate";

export default function Page() {
  const { language } = useLanguage();
  return (
    <>
      <PillarTemplateDetailsPage
        data={immediateResignationTemplate}
        language={language}
      />
    </>
  );
}
