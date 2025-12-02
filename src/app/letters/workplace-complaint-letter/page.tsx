"use client";
import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { useLanguage } from "@/contexts/LanguageContext";
import { workplaceComplaint } from "@/data/complaintTemplate/workplaceComplaintTemplate";

export default function Page() {
  const { lang } = useLanguage();
  return (
    <>
      <PillarTemplateDetailsPage
        data={workplaceComplaint}
        language={lang}
      />
    </>
  );
}
