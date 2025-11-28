"use client";
import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { useLanguage } from "@/contexts/LanguageContext";
import { neighborComplaint } from "@/data/complaint/neighborComplaint";

export default function Page() {
  const { lang } = useLanguage();
  return (
    <>
      <PillarTemplateDetailsPage
        data={neighborComplaint}
        language={lang}
      />
    </>
  );
}
