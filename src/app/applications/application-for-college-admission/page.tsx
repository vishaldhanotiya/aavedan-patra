"use client";
import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { useLanguage } from "@/contexts/LanguageContext";
import { collegeAdmission } from "@/data/admission/collegeAdmission";

export default function Page() {
  const { lang } = useLanguage();
  return (
    <>
      <PillarTemplateDetailsPage
        data={collegeAdmission}
        language={lang}
      />
    </>
  );
}
