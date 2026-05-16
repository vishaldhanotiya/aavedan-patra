import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { transferCertificateTemplate } from "@/data/certificateTemplate/transferCertificateTemplate";
import { generateMetadata } from "@/metadata/metadata";
export const metadata = generateMetadata({
  title:
    "ट्रांसफर सर्टिफिकेट आवेदन – TC Application Letter Hindi | AavedanPatra",
  description:
    "स्कूल/कॉलेज से Transfer Certificate (TC) के लिए हिंदी आवेदन पत्र। तैयार नमूना, सही फॉर्मेट और TC Application लिखने की पूरी गाइड।",
  path: "/applications/certificate/transfer-certificate-request-application",
});
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage
        singleTemplate
        data={transferCertificateTemplate}
      />
    </>
  );
}
