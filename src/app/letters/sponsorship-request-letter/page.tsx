"use client";
import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { useLanguage } from "@/contexts/LanguageContext";
import { sponsorshipRequest } from "@/data/request/sponsorshipRequest";

export default function Page() {
  const { lang } = useLanguage();
  return (
    <>
      <PillarTemplateDetailsPage
        data={sponsorshipRequest}
        language={lang}
      />
    </>
  );
}
