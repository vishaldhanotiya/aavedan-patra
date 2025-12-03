"use client";
import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { useLanguage } from "@/contexts/LanguageContext";
import { emergencyLoanTemplate } from "@/data/loanTemplate/emergencyLoanTemplate";

export default function Page() {
  const { language } = useLanguage();
  return (
    <>
      <PillarTemplateDetailsPage
        data={emergencyLoanTemplate}
        language={language}
      />
    </>
  );
}
