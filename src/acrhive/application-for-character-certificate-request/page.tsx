import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { characterCertificateTemplate } from "@/data/certificateTemplate/characterCertificateTemplate";
import { createMetadata } from "@/metadata/metadata";
export const metadata = createMetadata({
  title:  "चरित्र प्रमाण पत्र आवेदन – Character Certificate Application Hindi",
  description:
     "स्कूल, कॉलेज या नियोक्ता से Character Certificate के लिए हिंदी आवेदन पत्र। तैयार नमूना, सही फॉर्मेट और चरित्र प्रमाण पत्र आवेदन गाइड।",
  path: "/applications//character-certificate-request-application",
});
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage data={characterCertificateTemplate} />
    </>
  );
}
