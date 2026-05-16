import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { eventInvitationTemplate } from "@/data/invitationTemplate/eventInvitationTemplate";
import { generateMetadata } from "@/metadata/metadata";
export const metadata = generateMetadata({
  title:
    "कार्यक्रम के लिए निमंत्रण पत्र हिंदी में – औपचारिक एवं अनौपचारिक नमूने",
  description:
    "किसी भी कार्यक्रम (शादी, कॉर्पोरेट मीटिंग, वर्कशॉप, सांस्कृतिक कार्यक्रम, विवाह) के लिए आकर्षक निमंत्रण पत्र का सही प्रारूप और तैयार नमूने। औपचारिक और अनौपचारिक दोनों स्टाइल में आसानी से लिखें।",
  path: "/letters/invitation/event-invitation-letter",
});
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage
        singleTemplate
        data={eventInvitationTemplate}
      />
    </>
  );
}
