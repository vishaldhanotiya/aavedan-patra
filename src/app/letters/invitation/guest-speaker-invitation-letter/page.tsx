import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { guestSpeakerInvitationTemplate } from "@/data/invitationTemplate/guestSpeakerInvitationTemplate";
import { generateMetadata } from "@/metadata/metadata";
export const metadata = generateMetadata({
  title: "अतिथि वक्ता आमंत्रण पत्र हिंदी में – स्कूल, कॉलेज और सेमिनार प्रारूप",
  description:
    "सेमिनार, कार्यशाला, सम्मेलन में मुख्य वक्ता के रूप में आमंत्रित करने के लिए प्रोफेसर, एक्सपर्ट, उद्योगपति को पत्र।",
  path: "/letters/invitation/guest-speaker-invitation-letter",
});
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage
        singleTemplate
        data={guestSpeakerInvitationTemplate}
      />
    </>
  );
}
