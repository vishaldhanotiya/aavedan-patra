"use client";
import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { useLanguage } from "@/contexts/LanguageContext";
import { teacherJobApplicationPillarWithEditor } from "@/data/samplePillarTemplateWithEditor";

export default function Page() {
  const { language } = useLanguage();
  return (
    <>
      <PillarTemplateDetailsPage
        data={teacherJobApplicationPillarWithEditor}
        language={language}
      />
    </>
  );
}
