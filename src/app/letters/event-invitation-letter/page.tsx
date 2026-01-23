import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { eventInvitationTemplate } from "@/data/invitationTemplate/eventInvitationTemplate";
export const metadata = {
  title: "कार्यक्रम निमंत्रण पत्र | आवेदन पत्र",
  description:
    "व्यक्तिगत या पेशेवर उपयोग के लिए औपचारिक और अनौपचारिक कार्यक्रम निमंत्रण पत्र के प्रारूप।",
};
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage
        data={eventInvitationTemplate}
      />
    </>
  );
}
