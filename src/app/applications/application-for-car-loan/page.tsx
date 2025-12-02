"use client";
import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { useLanguage } from "@/contexts/LanguageContext";
import { carLoanTemplate } from "@/data/loanTemplate/carLoanTemplate";

export default function Page() {
  const { lang } = useLanguage();
  return (
    <>
      <PillarTemplateDetailsPage
        data={carLoanTemplate}
        language={lang}
      />
    </>
  );
}
