"use client";
import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { useLanguage } from "@/contexts/LanguageContext";
import { readmissionTemplate } from "@/data/admissionTemplate/readmissionTemplate";

export default function Page() {
  const { lang } = useLanguage();
  return (
    <>
      <PillarTemplateDetailsPage
        data={readmissionTemplate}
        language={lang}
      />
    </>
  );
}
