import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { useLanguage } from "@/contexts/LanguageContext";
import { birthdayInvitationTemplate } from "@/data/invitationTemplate/birthdayInvitationTemplate";

export default function Page() {
  const { language } = useLanguage();
  return (
    <>
      <PillarTemplateDetailsPage
        data={birthdayInvitationTemplate}
        language={language}
      />
    </>
  );
}
