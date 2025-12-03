"use client";
import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { useLanguage } from "@/contexts/LanguageContext";
import { bankJobApplicationPillar } from "@/data/bankJobApplicationPillar";

export default function Page() {
  const { language } = useLanguage();
  return (
    <>
      <PillarTemplateDetailsPage
        data={bankJobApplicationPillar}
        language={language}
      />
    </>
  );
}
