import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { useLanguage } from "@/contexts/LanguageContext";
import { recommendationRequestTemplate } from "@/data/requestTemplate/recommendationRequestTemplate";

export default function Page() {
  const { language } = useLanguage();
  return (
    <>
      <PillarTemplateDetailsPage
        data={recommendationRequestTemplate}
        language={language}
      />
    </>
  );
}
