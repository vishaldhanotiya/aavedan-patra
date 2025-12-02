"use client";
import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { useLanguage } from "@/contexts/LanguageContext";
import { birthdayInvitationTemplate } from "@/data/invitationTemplate/birthdayInvitationTemplate";

export default function Page() {
  const { lang } = useLanguage();
  return (
    <>
      <PillarTemplateDetailsPage
        data={birthdayInvitationTemplate}
        language={lang}
      />
    </>
  );
}
