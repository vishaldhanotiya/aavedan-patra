"use client";
import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { useLanguage } from "@/contexts/LanguageContext";
import { shortNoticeResignation } from "@/data/resignation/shortNoticeResignation";

export default function Page() {
  const { lang } = useLanguage();
  return (
    <>
      <PillarTemplateDetailsPage
        data={shortNoticeResignation}
        language={lang}
      />
    </>
  );
}
