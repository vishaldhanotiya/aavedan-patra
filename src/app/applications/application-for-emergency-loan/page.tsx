"use client";
import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { useLanguage } from "@/contexts/LanguageContext";
import { emergencyLoanTemplate } from "@/data/loanTemplate/emergencyLoanTemplate";

export default function Page() {
  const { lang } = useLanguage();
  return (
    <>
      <PillarTemplateDetailsPage
        data={emergencyLoanTemplate}
        language={lang}
      />
    </>
  );
}
