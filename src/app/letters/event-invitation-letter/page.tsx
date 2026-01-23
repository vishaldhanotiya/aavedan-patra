import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { eventInvitationTemplate } from "@/data/invitationTemplate/eventInvitationTemplate";
export const metadata = {
  title: "कार्यक्रम निमंत्रण पत्र | आवेदन पत्र",
  description:
    "कार्यक्रम निमंत्रण पत्र कैसे लिखें, इसकी पूरी जानकारी यहाँ मिलेगी। इस पेज पर व्यक्तिगत या पेशेवर कार्यक्रमों के लिए औपचारिक और अनौपचारिक निमंत्रण पत्र का सही प्रारूप, तैयार नमूने और लिखने के आसान सुझाव दिए गए हैं, जिससे आप किसी भी कार्यक्रम के लिए आकर्षक और प्रभावी निमंत्रण पत्र तैयार कर सकें।",
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
