"use client";
import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { useLanguage } from "@/contexts/LanguageContext";
import { meritScholarshipTemplate } from "@/data/scholarshipTemplate/meritScholarshipTemplate";

export default function Page() {
  const { language } = useLanguage();
  return (
    <>
      <PillarTemplateDetailsPage
        data={meritScholarshipTemplate}
        language={language}
      />
    </>
  );
}
