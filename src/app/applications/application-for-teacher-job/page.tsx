"use client";
import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { useLanguage } from "@/contexts/LanguageContext";
import { teacherJobApplicationTemplate } from "@/data/teacherJobApplicationTemplate";

export default function Page() {
  const { language } = useLanguage();
  return (
    <>
      <PillarTemplateDetailsPage
        data={teacherJobApplicationTemplate}
        language={language}
      />
    </>
  );
}
