"use client";
import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { useLanguage } from "@/contexts/LanguageContext";
import { privateScholarshipTemplate } from "@/data/scholarshipTemplate/privateScholarshipTemplate";

export default function Page() {
  const { language } = useLanguage();
  return (
    <>
      <PillarTemplateDetailsPage
        data={privateScholarshipTemplate}
        language={language}
      />
    </>
  );
}
