"use client";
import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { useLanguage } from "@/contexts/LanguageContext";
import { schoolTransferAdmission } from "@/data/admission/schoolTransfer";

export default function Page() {
  const { lang } = useLanguage();
  return (
    <>
      <PillarTemplateDetailsPage
        data={schoolTransferAdmission}
        language={lang}
      />
    </>
  );
}
