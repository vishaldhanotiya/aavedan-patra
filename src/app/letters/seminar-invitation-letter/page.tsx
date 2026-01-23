import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { seminarInvitationTemplate } from "@/data/invitationTemplate/seminarInvitationTemplate";
export const metadata = {
  title: "सेमिनार निमंत्रण पत्र | आवेदन पत्र",
  description:
    "सेमिनार निमंत्रण पत्र कैसे लिखें, इसकी पूरी जानकारी यहाँ मिलेगी। इस पेज पर कॉलेज, संस्थान या संगठन द्वारा आयोजित सेमिनार के लिए औपचारिक निमंत्रण पत्र का सही प्रारूप, तैयार टेम्पलेट और लिखने के आसान सुझाव दिए गए हैं, जिससे आपका निमंत्रण स्पष्ट, सम्मानजनक और प्रभावी बने।",
};

export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage
        data={seminarInvitationTemplate}
      />
    </>
  );
}
