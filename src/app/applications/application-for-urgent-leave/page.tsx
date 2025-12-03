"use client";
import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { useLanguage } from "@/contexts/LanguageContext";
import { urgentLeaveApplicationPillar } from "@/data/urgentLeaveApplicationPillar";

export default function Page() {
  const { language } = useLanguage();
  return (
    <>
      <PillarTemplateDetailsPage
        data={urgentLeaveApplicationPillar}
        language={language}
      />
    </>
  );
}
