import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { useLanguage } from "@/contexts/LanguageContext";
import { onlineShoppingComplaintTemplate } from "@/data/complaintTemplate/onlineShoppingComplaintTemplate";

export default function Page() {
  const { language } = useLanguage();
  return (
    <>
      <PillarTemplateDetailsPage
        data={onlineShoppingComplaintTemplate}
        language={language}
      />
    </>
  );
}
