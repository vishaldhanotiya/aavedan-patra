"use client";
import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { useLanguage } from "@/contexts/LanguageContext";
import { schoolAdmission } from "@/data/admission/schoolAdmission";

export default function Page() {
  const { lang } = useLanguage();
  return (
    <>
      <PillarTemplateDetailsPage
        data={schoolAdmission}
        language={lang}
      />
    </>
  );
}
