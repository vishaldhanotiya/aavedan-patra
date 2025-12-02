"use client";
import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { useLanguage } from "@/contexts/LanguageContext";
import { collegeAdmissionTemplate } from "@/data/admissionTemplate/collegeAdmissionTemplate";

export default function Page() {
  const { lang } = useLanguage();
  return (
    <>
      <PillarTemplateDetailsPage
        data={collegeAdmissionTemplate}
        language={lang}
      />
    </>
  );
}
