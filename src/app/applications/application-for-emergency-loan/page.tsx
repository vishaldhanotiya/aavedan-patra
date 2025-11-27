"use client";
import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { useLanguage } from "@/contexts/LanguageContext";
import { emergencyLoan } from "@/data/loan/emergencyLoan";

export default function Page() {
  const { lang } = useLanguage();
  return (
    <>
      <PillarTemplateDetailsPage
        data={emergencyLoan}
        language={lang}
      />
    </>
  );
}
