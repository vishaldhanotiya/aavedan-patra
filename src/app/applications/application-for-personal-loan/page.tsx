"use client";
import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { useLanguage } from "@/contexts/LanguageContext";
import { personalLoan } from "@/data/loan/personalLoan";

export default function Page() {
  const { lang } = useLanguage();
  return (
    <>
      <PillarTemplateDetailsPage
        data={personalLoan}
        language={lang}
      />
    </>
  );
}
