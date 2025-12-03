"use client";
import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { useLanguage } from "@/contexts/LanguageContext";
import { educationLoanTemplate } from "@/data/loanTemplate/educationLoanTemplate";

export default function Page() {
  const { language } = useLanguage();
  return (
    <>
      <PillarTemplateDetailsPage
        data={educationLoanTemplate}
        language={language}
      />
    </>
  );
}
