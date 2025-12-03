import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { birthdayInvitationTemplate } from "@/data/invitationTemplate/birthdayInvitationTemplate";

export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage
        data={birthdayInvitationTemplate}
      />
    </>
  );
}
