import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { seminarInvitationTemplate } from "@/data/invitationTemplate/seminarInvitationTemplate";

export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage
        data={seminarInvitationTemplate}
      />
    </>
  );
}
