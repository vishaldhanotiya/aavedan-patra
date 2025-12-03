"use client";
import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { useLanguage } from "@/contexts/LanguageContext";
import { experienceCertificateTemplate } from "@/data/certificateTemplate/experienceCertificateTemplate";

export default function Page() {
  const { language } = useLanguage();
  return (
    <>
      <PillarTemplateDetailsPage
        data={experienceCertificateTemplate}
        language={language}
      />
    </>
  );
}
