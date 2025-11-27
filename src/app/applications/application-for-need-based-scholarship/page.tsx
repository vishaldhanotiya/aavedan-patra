"use client";
import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { useLanguage } from "@/contexts/LanguageContext";
import { needBasedScholarship } from "@/data/scholarship/needBasedScholarship";

export default function Page() {
  const { lang } = useLanguage();
  return (
    <>
      <PillarTemplateDetailsPage
        data={needBasedScholarship}
        language={lang}
      />
    </>
  );
}
