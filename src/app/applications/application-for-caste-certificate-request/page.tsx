"use client";
import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { useLanguage } from "@/contexts/LanguageContext";
import { casteCertificateTemplate } from "@/data/certificateTemplate/casteCertificateTemplate";

export default function Page() {
  const { language } = useLanguage();
  return (
    <>
      <PillarTemplateDetailsPage
        data={casteCertificateTemplate}
        language={language}
      />
    </>
  );
}
