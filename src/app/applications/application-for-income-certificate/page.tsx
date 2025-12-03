"use client";
import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { useLanguage } from "@/contexts/LanguageContext";
import { incomeCertificateTemplate } from "@/data/certificateTemplate/incomeCertificateTemplate";

export default function Page() {
  const { language } = useLanguage();
  return (
    <>
      <PillarTemplateDetailsPage
        data={incomeCertificateTemplate}
        language={language}
      />
    </>
  );
}
