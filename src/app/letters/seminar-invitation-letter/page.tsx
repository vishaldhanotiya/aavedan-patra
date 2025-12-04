import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { seminarInvitationTemplate } from "@/data/invitationTemplate/seminarInvitationTemplate";
export const metadata = {
  title: "Seminar Invitation Letter | Aavedan Patra",
  description: "Formal seminar invitation letter templates with clear wording.",
};
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage
        data={seminarInvitationTemplate}
      />
    </>
  );
}
