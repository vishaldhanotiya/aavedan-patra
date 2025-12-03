import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { useLanguage } from "@/contexts/LanguageContext";
import { refundRequestTemplate } from "@/data/complaintTemplate/refundRequestTemplate";

export default function Page() {
  const { language } = useLanguage();
  return (
    <>
      <PillarTemplateDetailsPage
        data={refundRequestTemplate}
        language={language}
      />
    </>
  );
}
