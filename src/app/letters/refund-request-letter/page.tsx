"use client";
import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { useLanguage } from "@/contexts/LanguageContext";
import { refundRequestTemplate } from "@/data/complaintTemplate/refundRequestTemplate";

export default function Page() {
  const { lang } = useLanguage();
  return (
    <>
      <PillarTemplateDetailsPage
        data={refundRequestTemplate}
        language={lang}
      />
    </>
  );
}
