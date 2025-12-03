import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { eventInvitationTemplate } from "@/data/invitationTemplate/eventInvitationTemplate";

export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage
        data={eventInvitationTemplate}
      />
    </>
  );
}
