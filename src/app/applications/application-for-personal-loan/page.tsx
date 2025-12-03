"use client";
import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { useLanguage } from "@/contexts/LanguageContext";
import { personalLoanTemplate } from "@/data/loanTemplate/personalLoanTemplate";

export default function Page() {
  const { language } = useLanguage();
  return (
    <>
      <PillarTemplateDetailsPage
        data={personalLoanTemplate}
        language={language}
      />
    </>
  );
}
