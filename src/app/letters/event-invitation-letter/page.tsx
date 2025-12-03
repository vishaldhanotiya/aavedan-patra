import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { useLanguage } from "@/contexts/LanguageContext";
import { eventInvitationTemplate } from "@/data/invitationTemplate/eventInvitationTemplate";

export default function Page() {
  const { language } = useLanguage();
  return (
    <>
      <PillarTemplateDetailsPage
        data={eventInvitationTemplate}
        language={language}
      />
    </>
  );
}
