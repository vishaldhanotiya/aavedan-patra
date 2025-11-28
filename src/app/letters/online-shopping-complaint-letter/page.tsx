"use client";
import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { useLanguage } from "@/contexts/LanguageContext";
import { onlineShoppingComplaint } from "@/data/complaint/onlineShoppingComplaint";

export default function Page() {
  const { lang } = useLanguage();
  return (
    <>
      <PillarTemplateDetailsPage
        data={onlineShoppingComplaint}
        language={lang}
      />
    </>
  );
}
