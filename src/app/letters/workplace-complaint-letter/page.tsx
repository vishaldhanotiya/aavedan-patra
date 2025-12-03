import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { useLanguage } from "@/contexts/LanguageContext";
import { workplaceComplaintTemplate } from "@/data/complaintTemplate/workplaceComplaintTemplate";

export default function Page() {
  const { language } = useLanguage();
  return (
    <>
      <PillarTemplateDetailsPage
        data={workplaceComplaintTemplate}
        language={language}
      />
    </>
  );
}
