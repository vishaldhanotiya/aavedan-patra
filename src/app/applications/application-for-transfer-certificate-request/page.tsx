"use client";
import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { useLanguage } from "@/contexts/LanguageContext";
import { transferCertificate } from "@/data/certificate/transferCertificate";

export default function Page() {
  const { lang } = useLanguage();
  return (
    <>
      <PillarTemplateDetailsPage
        data={transferCertificate}
        language={lang}
      />
    </>
  );
}
