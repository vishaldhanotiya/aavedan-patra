"use client";
import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { useLanguage } from "@/contexts/LanguageContext";
import { personalLoanTemplate } from "@/data/loanTemplate/personalLoanTemplate";

export default function Page() {
  const { lang } = useLanguage();
  return (
    <>
      <PillarTemplateDetailsPage
        data={personalLoanTemplate}
        language={lang}
      />
    </>
  );
}
