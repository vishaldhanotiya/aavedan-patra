"use client";
import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { useLanguage } from "@/contexts/LanguageContext";
import { businessMeetingInvitation } from "@/data/invitation/businessMeetingInvitation";

export default function Page() {
  const { lang } = useLanguage();
  return (
    <>
      <PillarTemplateDetailsPage
        data={businessMeetingInvitation}
        language={lang}
      />
    </>
  );
}
