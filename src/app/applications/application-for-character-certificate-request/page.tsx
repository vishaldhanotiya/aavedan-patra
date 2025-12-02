"use client";
import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { useLanguage } from "@/contexts/LanguageContext";
import { characterCertificateTemplate } from "@/data/certificateTemplate/characterCertificateTemplate";

export default function Page() {
  const { lang } = useLanguage();
  return (
    <>
      <PillarTemplateDetailsPage
        data={characterCertificateTemplate}
        language={lang}
      />
    </>
  );
}
