"use client";
import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { useLanguage } from "@/contexts/LanguageContext";
import { schoolTransferTemplate } from "@/data/admissionTemplate/schoolTransferTemplate";

export default function Page() {
  const { lang } = useLanguage();
  return (
    <>
      <PillarTemplateDetailsPage
        data={schoolTransferTemplate}
        language={lang}
      />
    </>
  );
}
