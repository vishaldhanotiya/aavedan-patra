"use client";
import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { useLanguage } from "@/contexts/LanguageContext";
import { personalLeaveApplicationPillar } from "@/data/personalLeaveApplicationPillar";

export default function Page() {
  const { lang } = useLanguage();
  return (
    <>
      <PillarTemplateDetailsPage
        data={personalLeaveApplicationPillar}
        language={lang}
      />
    </>
  );
}
