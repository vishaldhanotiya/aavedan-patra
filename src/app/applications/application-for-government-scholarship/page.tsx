"use client";
import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { useLanguage } from "@/contexts/LanguageContext";
import { governmentScholarship } from "@/data/scholarship/governmentScholarship";

export default function Page() {
  const { lang } = useLanguage();
  return (
    <>
      <PillarTemplateDetailsPage
        data={governmentScholarship}
        language={lang}
      />
    </>
  );
}
