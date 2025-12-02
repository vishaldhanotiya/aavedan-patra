"use client";
import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { useLanguage } from "@/contexts/LanguageContext";
import { meetingRequestTemplate } from "@/data/requestTemplate/meetingRequestTemplate";

export default function Page() {
  const { lang } = useLanguage();
  return (
    <>
      <PillarTemplateDetailsPage
        data={meetingRequestTemplate}
        language={lang}
      />
    </>
  );
}
