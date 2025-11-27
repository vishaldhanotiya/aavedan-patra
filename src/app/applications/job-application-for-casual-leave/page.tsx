"use client";
import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { useLanguage } from "@/contexts/LanguageContext";
import { casualLeaveApplicationPillar } from "@/data/casualLeaveApplicationPillar";

export default function Page() {
  const { lang } = useLanguage();
  return (
    <>
      <PillarTemplateDetailsPage
        data={casualLeaveApplicationPillar}
        language={lang}
      />
    </>
  );
}
