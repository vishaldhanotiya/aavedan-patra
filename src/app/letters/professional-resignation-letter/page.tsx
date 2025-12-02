"use client";
import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { useLanguage } from "@/contexts/LanguageContext";
import { professionalResignationTemplate } from "@/data/resignationTemplate/professionalResignationTemplate";

export default function Page() {
  const { lang } = useLanguage();
  return (
    <>
      <PillarTemplateDetailsPage
        data={professionalResignationTemplate}
        language={lang}
      />
    </>
  );
}
