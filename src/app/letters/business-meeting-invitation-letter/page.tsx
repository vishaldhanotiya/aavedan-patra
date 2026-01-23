import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { businessMeetingInvitationTemplate } from "@/data/invitationTemplate/businessMeetingInvitationTemplate";
export const metadata = {
  title: "बिज़नेस मीटिंग निमंत्रण पत्र | आवेदन पत्र",
  description:
    "बिज़नेस मीटिंग के लिए निमंत्रण पत्र कैसे लिखें, इसकी पूरी जानकारी यहाँ मिलेगी। इस पेज पर क्लाइंट्स और सहकर्मियों के लिए औपचारिक बिज़नेस मीटिंग निमंत्रण पत्र का सही प्रारूप, तैयार नमूने और लिखने के आसान व प्रोफेशनल सुझाव दिए गए हैं, जिससे आपका मीटिंग इनविटेशन स्पष्ट और प्रभावी बन सके।",
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
