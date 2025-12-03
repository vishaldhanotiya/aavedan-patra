"use client";
import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { useLanguage } from "@/contexts/LanguageContext";
import { homeLoanTemplate } from "@/data/loanTemplate/homeLoanTemplate";

export default function Page() {
  const { language } = useLanguage();
  return (
    <>
      <PillarTemplateDetailsPage
        data={homeLoanTemplate}
        language={language}
      />
    </>
  );
}
