"use client";
import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { useLanguage } from "@/contexts/LanguageContext";
import { productComplaintTemplate } from "@/data/complaintTemplate/productComplaintTemplate";

export default function Page() {
  const { lang } = useLanguage();
  return (
    <>
      <PillarTemplateDetailsPage
        data={productComplaintTemplate}
        language={lang}
      />
    </>
  );
}
