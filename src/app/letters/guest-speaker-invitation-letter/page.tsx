import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { guestSpeakerInvitationTemplate } from "@/data/invitationTemplate/guestSpeakerInvitationTemplate";
import { generateMetadata } from "@/metadata/metadata";
export const metadata = generateMetadata({
  title: "अतिथि वक्ता आमंत्रण पत्र हिंदी में – स्कूल, कॉलेज और सेमिनार प्रारूप",
  description:
    "मुख्य वक्ता या विशेषज्ञ को आमंत्रित करने का प्रोफेशनल पत्र प्रारूप। इस पेज पर स्कूल, कॉलेज, संस्थान या कार्यक्रम के लिए अतिथि वक्ताओं और विशेषज्ञों को आमंत्रित करने हेतु प्रोफेशनल निमंत्रण पत्र का सही प्रारूप, तैयार नमूने और लिखने के आसान सुझाव दिए गए हैं, जिससे आपका निमंत्रण सम्मानजनक और प्रभावी बने।",
  path: "/letters/guest-speaker-invitation-letter",
});
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage data={guestSpeakerInvitationTemplate} />
    </>
  );
}
