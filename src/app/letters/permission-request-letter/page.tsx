"use client";
import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { useLanguage } from "@/contexts/LanguageContext";
import { permissionRequestTemplate } from "@/data/requestTemplate/permissionRequestTemplate";

export default function Page() {
  const { language } = useLanguage();
  return (
    <>
      <PillarTemplateDetailsPage
        data={permissionRequestTemplate}
        language={language}
      />
    </>
  );
}
