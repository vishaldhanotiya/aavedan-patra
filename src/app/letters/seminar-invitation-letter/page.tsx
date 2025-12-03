"use client";
import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { useLanguage } from "@/contexts/LanguageContext";
import { seminarInvitationTemplate } from "@/data/invitationTemplate/seminarInvitationTemplate";

export default function Page() {
  const { language } = useLanguage();
  return (
    <>
      <PillarTemplateDetailsPage
        data={seminarInvitationTemplate}
        language={language}
      />
    </>
  );
}
