import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { businessMeetingInvitationTemplate } from "@/data/invitationTemplate/businessMeetingInvitationTemplate";
export const metadata = {
  title: "Business Meeting Invitation Letter | Aavedan Patra",
  description: "Formal meeting invitation letter samples for clients and colleagues.",
};
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage
        data={businessMeetingInvitationTemplate}
      />
    </>
  );
}
