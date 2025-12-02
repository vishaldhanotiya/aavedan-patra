"use client";
import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { useLanguage } from "@/contexts/LanguageContext";
import { relocationResignationTemplate } from "@/data/resignationTemplate/relocationResignationTemplate";

export default function Page() {
  const { lang } = useLanguage();
  return (
    <>
      <PillarTemplateDetailsPage
        data={relocationResignationTemplate}
        language={lang}
      />
    </>
  );
}
