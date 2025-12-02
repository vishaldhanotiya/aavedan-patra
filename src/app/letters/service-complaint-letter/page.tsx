"use client";
import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { useLanguage } from "@/contexts/LanguageContext";
import { serviceComplaintTemplate } from "@/data/complaintTemplate/serviceComplaintTemplate";

export default function Page() {
  const { lang } = useLanguage();
  return (
    <>
      <PillarTemplateDetailsPage
        data={serviceComplaintTemplate}
        language={lang}
      />
    </>
  );
}
