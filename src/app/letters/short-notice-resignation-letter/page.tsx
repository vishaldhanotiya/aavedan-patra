import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { useLanguage } from "@/contexts/LanguageContext";
import { shortNoticeResignationTemplate } from "@/data/resignationTemplate/shortNoticeResignationTemplate";

export default function Page() {
  const { language } = useLanguage();
  return (
    <>
      <PillarTemplateDetailsPage
        data={shortNoticeResignationTemplate}
        language={language}
      />
    </>
  );
}
