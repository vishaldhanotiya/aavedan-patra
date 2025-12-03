"use client";
import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { useLanguage } from "@/contexts/LanguageContext";
import { schoolAdmissionTemplate } from "@/data/admissionTemplate/schoolAdmissionTemplate";

export default function Page() {
  const { language } = useLanguage();
  return (
    <>
      <PillarTemplateDetailsPage
        data={schoolAdmissionTemplate}
        language={language}
      />
    </>
  );
}
