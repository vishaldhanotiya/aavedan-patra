import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { businessMeetingInvitationTemplate } from "@/data/invitationTemplate/businessMeetingInvitationTemplate";
export const metadata = {
  title: "बिज़नेस मीटिंग निमंत्रण पत्र | आवेदन पत्र",
  description:
    "क्लाइंट्स और सहकर्मियों के लिए औपचारिक बिज़नेस मीटिंग निमंत्रण पत्र के नमूने।",
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
