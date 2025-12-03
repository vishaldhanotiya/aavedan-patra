"use client";
import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { useLanguage } from "@/contexts/LanguageContext";
import { businessLoanTemplate } from "@/data/loanTemplate/businessLoanTemplate";

export default function Page() {
  const { language } = useLanguage();
  return (
    <>
      <PillarTemplateDetailsPage
        data={businessLoanTemplate}
        language={language}
      />
    </>
  );
}
