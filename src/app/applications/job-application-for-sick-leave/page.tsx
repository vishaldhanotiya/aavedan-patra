"use client";
import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { useLanguage } from "@/contexts/LanguageContext";
import { sickLeaveApplicationPillar } from "@/data/sickLeaveApplicationPillar";
  
export default function Page() {
  const { lang } = useLanguage();
  return (
    <>
      <PillarTemplateDetailsPage
        data={sickLeaveApplicationPillar}
        language={lang}
      />
    </>
  );
}
