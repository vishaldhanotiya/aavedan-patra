"use client";
import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { useLanguage } from "@/contexts/LanguageContext";
import { casteCertificate } from "@/data/certificate/casteCertificate";

export default function Page() {
  const { lang } = useLanguage();
  return (
    <>
      <PillarTemplateDetailsPage
        data={casteCertificate}
        language={lang}
      />
    </>
  );
}
