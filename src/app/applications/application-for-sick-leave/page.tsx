"use client";
import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { useLanguage } from "@/contexts/LanguageContext";
import { sickLeaveApplicationPillar } from "@/data/sickLeaveApplicationPillar";
  
export default function Page() {
  const { language } = useLanguage();
  return (
    <>
      <PillarTemplateDetailsPage
        data={sickLeaveApplicationPillar}
        language={language}
      />
    </>
  );
}
