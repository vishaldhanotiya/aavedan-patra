import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { guestSpeakerInvitationTemplate } from "@/data/invitationTemplate/guestSpeakerInvitationTemplate";
export const metadata = {
  title: "Guest Speaker Invitation Letter | Aavedan Patra",
  description: "Professional invitation letter templates for guest speakers and experts.",
};
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage
        data={guestSpeakerInvitationTemplate}
      />
    </>
  );
}
