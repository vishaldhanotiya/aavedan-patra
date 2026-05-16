import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { characterCertificateTemplate } from "@/data/certificateTemplate/characterCertificateTemplate";
import { generateMetadata } from "@/metadata/metadata";
export const metadata = generateMetadata({
  title: "चरित्र प्रमाण पत्र आवेदन – Character Certificate Application Hindi",
  description:
    "स्कूल/कॉलेज से Transfer Certificate (TC) के लिए हिंदी आवेदन पत्र। तैयार नमूना, सही फॉर्मेट और TC Application लिखने की पूरी गाइड।", 
  path: "/applications/certificate/character-certificate-request-application",
});
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage
        singleTemplate
        data={characterCertificateTemplate}
      />
    </>
  );
}
