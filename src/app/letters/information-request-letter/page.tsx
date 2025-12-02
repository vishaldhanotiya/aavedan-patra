"use client";
import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { useLanguage } from "@/contexts/LanguageContext";
import { informationRequestTemplate } from "@/data/requestTemplate/informationRequestTemplate";

export default function Page() {
  const { lang } = useLanguage();
  return (
    <>
      <PillarTemplateDetailsPage
        data={informationRequestTemplate}
        language={lang}
      />
    </>
  );
}
