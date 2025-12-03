import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { useLanguage } from "@/contexts/LanguageContext";
import { donationRequestTemplate } from "@/data/requestTemplate/donationRequestTemplate";

export default function Page() {
  const { language } = useLanguage();
  return (
    <>
      <PillarTemplateDetailsPage
        data={donationRequestTemplate}
        language={language}
      />
    </>
  );
}
