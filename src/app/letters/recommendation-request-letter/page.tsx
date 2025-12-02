"use client";
import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { useLanguage } from "@/contexts/LanguageContext";
import { recommendationRequestTemplate } from "@/data/requestTemplate/recommendationRequestTemplate";

export default function Page() {
  const { lang } = useLanguage();
  return (
    <>
      <PillarTemplateDetailsPage
        data={recommendationRequestTemplate}
        language={lang}
      />
    </>
  );
}
