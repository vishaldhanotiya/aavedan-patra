import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { useLanguage } from "@/contexts/LanguageContext";
import { productComplaintTemplate } from "@/data/complaintTemplate/productComplaintTemplate";

export default function Page() {
  const { language } = useLanguage();
  return (
    <>
      <PillarTemplateDetailsPage
        data={productComplaintTemplate}
        language={language}
      />
    </>
  );
}
