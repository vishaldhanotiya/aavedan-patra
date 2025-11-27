"use client";
import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { useLanguage } from "@/contexts/LanguageContext";
import { bonafideCertificate } from "@/data/certificate/bonafideCertificate";

export default function Page() {
  const { lang } = useLanguage();
  return (
    <>
      <PillarTemplateDetailsPage
        data={bonafideCertificate}
        language={lang}
      />
    </>
  );
}
