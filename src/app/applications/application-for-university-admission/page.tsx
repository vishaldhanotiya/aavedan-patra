"use client";
import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { useLanguage } from "@/contexts/LanguageContext";
import { universityAdmissionTemplate } from "@/data/admissionTemplate/universityAdmissionTemplate";

export default function Page() {
  const { language } = useLanguage();
  return (
    <>
      <PillarTemplateDetailsPage
        data={universityAdmissionTemplate}
        language={language}
      />
    </>
  );
}
