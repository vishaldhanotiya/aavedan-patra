"use client";
import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { useLanguage } from "@/contexts/LanguageContext";
import { transferCertificateTemplate } from "@/data/certificateTemplate/transferCertificateTemplate";

export default function Page() {
  const { lang } = useLanguage();
  return (
    <>
      <PillarTemplateDetailsPage
        data={transferCertificateTemplate}
        language={lang}
      />
    </>
  );
}
