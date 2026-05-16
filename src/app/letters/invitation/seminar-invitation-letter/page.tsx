import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { seminarInvitationTemplate } from "@/data/invitationTemplate/seminarInvitationTemplate";
import { generateMetadata } from "@/metadata/metadata";
export const metadata = generateMetadata({
  title:
    "सेमिनार निमंत्रण पत्र – संस्थान, कॉर्पोरेट",
  description:
    "शैक्षिक या पेशेवर सेमिनार में विशेषज्ञों, छात्रों या कर्मचारियों को आमंत्रित करने के लिए पत्र प्रारूप।",
  path: "/letters/invitation/seminar-invitation-letter",
});
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage
        singleTemplate
        data={seminarInvitationTemplate}
      />
    </>
  );
}
