import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { guestSpeakerInvitationTemplate } from "@/data/invitationTemplate/guestSpeakerInvitationTemplate";
export const metadata = {
  title: "अतिथि वक्ता निमंत्रण पत्र | आवेदन पत्र",
  description:
    "अतिथि वक्ताओं और विशेषज्ञों के लिए प्रोफेशनल निमंत्रण पत्र के नमूने।",
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
