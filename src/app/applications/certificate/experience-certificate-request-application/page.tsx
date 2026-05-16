import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { experienceCertificateTemplate } from "@/data/certificateTemplate/experienceCertificateTemplate";
import { generateMetadata } from "@/metadata/metadata";
export const metadata = generateMetadata({
  title: "अनुभव प्रमाण पत्र आवेदन – Experience Certificate Application Hindi",
  description:
     "कंपनी/नियोक्ता से Experience Certificate के लिए हिंदी आवेदन पत्र। नौकरी छोड़ने के बाद सर्टिफिकेट माँगें – तैयार नमूना", 
  path: "/applications/certificate/experience-certificate-request-application",
});
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage singleTemplate data={experienceCertificateTemplate} />
    </>
  );
}
