import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { seminarInvitationTemplate } from "@/data/invitationTemplate/seminarInvitationTemplate";
import { generateMetadata } from "@/metadata/metadata";
export const metadata = generateMetadata({
  title: "सेमिनार निमंत्रण पत्र – Seminar Invitation Letter Hindi | AavedanPatra",
  description:
     "कॉलेज, संस्थान या संगठन के लिए Seminar Invitation Letter। प्रोफेशनल हिंदी प्रारूप, तैयार नमूना और सेमिनार आमंत्रण लिखने की गाइड।",  
  path: "/letters/seminar-invitation-letter",
});
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage singleTemplate data={seminarInvitationTemplate} />
    </>
  );
}
