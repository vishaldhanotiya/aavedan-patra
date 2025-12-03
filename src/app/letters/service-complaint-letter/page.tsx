"use client";
import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { useLanguage } from "@/contexts/LanguageContext";
import { serviceComplaintTemplate } from "@/data/complaintTemplate/serviceComplaintTemplate";

export default function Page() {
  const { language } = useLanguage();
  return (
    <>
      <PillarTemplateDetailsPage
        data={serviceComplaintTemplate}
        language={language}
      />
    </>
  );
}
