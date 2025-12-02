"use client";
import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { useLanguage } from "@/contexts/LanguageContext";
import { bonafideCertificateTemplate } from "@/data/certificateTemplate/bonafideCertificateTemplate";

export default function Page() {
  const { lang } = useLanguage();
  return (
    <>
      <PillarTemplateDetailsPage
        data={bonafideCertificateTemplate}
        language={lang}
      />
    </>
  );
}
