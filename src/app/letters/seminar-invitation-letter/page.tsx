"use client";
import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { useLanguage } from "@/contexts/LanguageContext";
import { seminarInvitation } from "@/data/invitation/seminarInvitation";

export default function Page() {
  const { lang } = useLanguage();
  return (
    <>
      <PillarTemplateDetailsPage
        data={seminarInvitation}
        language={lang}
      />
    </>
  );
}
