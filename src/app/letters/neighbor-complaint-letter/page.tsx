"use client";
import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { useLanguage } from "@/contexts/LanguageContext";
import { neighborComplaintTemplate } from "@/data/complaintTemplate/neighborComplaintTemplate";

export default function Page() {
  const { language } = useLanguage();
  return (
    <>
      <PillarTemplateDetailsPage
        data={neighborComplaintTemplate}
        language={language}
      />
    </>
  );
}
