"use client";
import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { useLanguage } from "@/contexts/LanguageContext";
import { softwareJobApplicationTemplate } from "@/data/subcategories/softwareJobApplicationTemplate";

export default function Page() {
  const { language } = useLanguage();
  return (
    <>
      <PillarTemplateDetailsPage
        data={softwareJobApplicationTemplate}
        language={language}
      />
    </>
  );
}
