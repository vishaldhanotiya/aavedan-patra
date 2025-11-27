"use client";
import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { useLanguage } from "@/contexts/LanguageContext";
import { incomeCertificate } from "@/data/certificate/incomeCertificate";

export default function Page() {
  const { lang } = useLanguage();
  return (
    <>
      <PillarTemplateDetailsPage
        data={incomeCertificate}
        language={lang}
      />
    </>
  );
}
