import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { seminarInvitationTemplate } from "@/data/invitationTemplate/seminarInvitationTemplate";
export const metadata = {
  title: "सेमिनार निमंत्रण पत्र | आवेदन पत्र",
  description:
    "स्पष्ट भाषा के साथ औपचारिक सेमिनार निमंत्रण पत्र के टेम्पलेट।",
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
