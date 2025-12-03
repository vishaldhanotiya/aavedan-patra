import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { guestSpeakerInvitationTemplate } from "@/data/invitationTemplate/guestSpeakerInvitationTemplate";

export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage
        data={guestSpeakerInvitationTemplate}
      />
    </>
  );
}
