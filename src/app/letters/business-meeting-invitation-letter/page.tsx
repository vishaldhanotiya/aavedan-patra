import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { businessMeetingInvitationTemplate } from "@/data/invitationTemplate/businessMeetingInvitationTemplate";

export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage
        data={businessMeetingInvitationTemplate}
      />
    </>
  );
}
