import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { eventInvitationTemplate } from "@/data/invitationTemplate/eventInvitationTemplate";
export const metadata = {
  title: "Event Invitation Letter | Aavedan Patra",
  description: "Formal and informal event invitation letter formats for personal or professional use.",
};
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage
        data={eventInvitationTemplate}
      />
    </>
  );
}
