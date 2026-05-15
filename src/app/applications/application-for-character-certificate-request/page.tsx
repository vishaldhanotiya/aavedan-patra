import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { characterCertificateTemplate } from "@/data/certificateTemplate/characterCertificateTemplate";
import { generateMetadata } from "@/metadata/metadata";
export const metadata = generateMetadata({
  title:  "चरित्र प्रमाण पत्र आवेदन – Character Certificate Application Hindi | AavedanPatra",
  description:
     "स्कूल, कॉलेज या नियोक्ता से Character Certificate के लिए हिंदी आवेदन पत्र। तैयार नमूना, सही फॉर्मेट और चरित्र प्रमाण पत्र आवेदन गाइड।",
  path: "/applications/certificates/character-certificate-request-application",
});
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage data={characterCertificateTemplate} />
    </>
  );
}
