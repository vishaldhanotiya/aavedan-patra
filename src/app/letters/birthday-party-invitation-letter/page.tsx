import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { birthdayInvitationTemplate } from "@/data/invitationTemplate/birthdayInvitationTemplate";
export const metadata = {
  title: "Birthday Party Invitation Letter | Aavedan Patra",
  description: "Simple and friendly birthday party invitation templates for friends and family.",
};
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage
        data={birthdayInvitationTemplate}
      />
    </>
  );
}
