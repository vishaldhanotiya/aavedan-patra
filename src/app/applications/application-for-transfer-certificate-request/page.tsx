"use client";
import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { useLanguage } from "@/contexts/LanguageContext";
import { transferCertificateTemplate } from "@/data/certificateTemplate/transferCertificateTemplate";

export default function Page() {
  const { language } = useLanguage();
  return (
    <>
      <PillarTemplateDetailsPage
        data={transferCertificateTemplate}
        language={language}
      />
    </>
  );
}
