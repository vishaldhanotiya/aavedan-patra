"use client";
import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { useLanguage } from "@/contexts/LanguageContext";
import { schoolStudentLeaveApplicationPillar } from "@/data/schoolStudentLeaveApplicationPillar";

export default function Page() {
  const { language } = useLanguage();
  return (
    <>
      <PillarTemplateDetailsPage
        data={schoolStudentLeaveApplicationPillar}
        language={language}
      />
    </>
  );
}
