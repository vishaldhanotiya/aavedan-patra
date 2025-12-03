"use client";
import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { useLanguage } from "@/contexts/LanguageContext";
import { softwareJobApplicationPillarWithEditor } from "@/data/subcategories/softwareJobApplicationPillarWithEditor";

export default function Page() {
  const { language } = useLanguage();
  return (
    <>
      <PillarTemplateDetailsPage
        data={softwareJobApplicationPillarWithEditor}
        language={language}
      />
    </>
  );
}
