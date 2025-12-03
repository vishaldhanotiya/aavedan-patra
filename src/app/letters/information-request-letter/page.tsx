import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { useLanguage } from "@/contexts/LanguageContext";
import { informationRequestTemplate } from "@/data/requestTemplate/informationRequestTemplate";

export default function Page() {
  const { language } = useLanguage();
  return (
    <>
      <PillarTemplateDetailsPage
        data={informationRequestTemplate}
        language={language}
      />
    </>
  );
}
