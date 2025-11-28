"use client";
import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { useLanguage } from "@/contexts/LanguageContext";
import { vacationLeaveApplicationPillar } from "@/data/vacationLeaveApplicationPillar";

export default function Page() {
  const { lang } = useLanguage();
  return (
    <>
      <PillarTemplateDetailsPage
        data={vacationLeaveApplicationPillar}
        language={lang}
      />
    </>
  );
}
