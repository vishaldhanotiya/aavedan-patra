import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { businessMeetingInvitationTemplate } from "@/data/invitationTemplate/businessMeetingInvitationTemplate";
import { generateMetadata } from "@/metadata/metadata";
export const metadata = generateMetadata({
  title: "बिजनेस मीटिंग निमंत्रण पत्र हिंदी में - प्रारूप और नमूने",
  description:
    "बिजनेस मीटिंग के लिए औपचारिक निमंत्रण पत्र कैसे लिखें? इस पेज पर क्लाइंट मीटिंग, टीम मीटिंग और पार्टनर मीटिंग के लिए प्रोफेशनल हिंदी प्रारूप दिए गए हैं।",
  path: "/letters/invitation/business-meeting-invitation-letter",
});
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage
        singleTemplate
        data={businessMeetingInvitationTemplate}
      />
    </>
  );
}
