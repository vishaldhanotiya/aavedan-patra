"use client";
import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { useLanguage } from "@/contexts/LanguageContext";
import { courseAdmissionTemplate } from "@/data/admissionTemplate/courseAdmissionTemplate";

export default function Page() {
  const { lang } = useLanguage();
  return (
    <>
      <PillarTemplateDetailsPage
        data={courseAdmissionTemplate}
        language={lang}
      />
    </>
  );
}
