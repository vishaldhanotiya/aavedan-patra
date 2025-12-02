"use client";
import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { useLanguage } from "@/contexts/LanguageContext";
import { incomeCertificateTemplate } from "@/data/certificateTemplate/incomeCertificateTemplate";

export default function Page() {
  const { lang } = useLanguage();
  return (
    <>
      <PillarTemplateDetailsPage
        data={incomeCertificateTemplate}
        language={lang}
      />
    </>
  );
}
