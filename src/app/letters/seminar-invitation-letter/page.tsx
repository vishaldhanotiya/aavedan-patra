"use client";
import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { useLanguage } from "@/contexts/LanguageContext";
import { seminarInvitationTemplate } from "@/data/invitationTemplate/seminarInvitationTemplate";

export default function Page() {
  const { lang } = useLanguage();
  return (
    <>
      <PillarTemplateDetailsPage
        data={seminarInvitationTemplate}
        language={lang}
      />
    </>
  );
}
