"use client";
import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { useLanguage } from "@/contexts/LanguageContext";
import { collegeAdmissionTemplate } from "@/data/admissionTemplate/collegeAdmissionTemplate";

export default function Page() {
  const { language } = useLanguage();
  return (
    <>
      <PillarTemplateDetailsPage
        data={collegeAdmissionTemplate}
        language={language}
      />
    </>
  );
}
