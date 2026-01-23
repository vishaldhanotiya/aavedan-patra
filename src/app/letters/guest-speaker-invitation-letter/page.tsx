import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { guestSpeakerInvitationTemplate } from "@/data/invitationTemplate/guestSpeakerInvitationTemplate";
export const metadata = {
  title: "अतिथि वक्ता निमंत्रण पत्र | आवेदन पत्र",
  description:
    "अतिथि वक्ता निमंत्रण पत्र कैसे लिखें, इसकी पूरी जानकारी यहाँ मिलेगी। इस पेज पर स्कूल, कॉलेज, संस्थान या कार्यक्रम के लिए अतिथि वक्ताओं और विशेषज्ञों को आमंत्रित करने हेतु प्रोफेशनल निमंत्रण पत्र का सही प्रारूप, तैयार नमूने और लिखने के आसान सुझाव दिए गए हैं, जिससे आपका निमंत्रण सम्मानजनक और प्रभावी बने।",
};
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage
        data={guestSpeakerInvitationTemplate}
      />
    </>
  );
}
