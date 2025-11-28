"use client";
import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { useLanguage } from "@/contexts/LanguageContext";
import { serviceComplaint } from "@/data/complaint/serviceComplaint";

export default function Page() {
  const { lang } = useLanguage();
  return (
    <>
      <PillarTemplateDetailsPage
        data={serviceComplaint}
        language={lang}
      />
    </>
  );
}
