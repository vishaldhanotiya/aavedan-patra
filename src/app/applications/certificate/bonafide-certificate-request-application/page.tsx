import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { bonafideCertificateTemplate } from "@/data/certificateTemplate/bonafideCertificateTemplate";
import { generateMetadata } from "@/metadata/metadata";
export const metadata = generateMetadata({
  title:
    "बोनाफाइड सर्टिफिकेट आवेदन – Bonafide Certificate Application Hindi",
  description:
    "स्कूल/कॉलेज से बोनाफाइड सर्टिफिकेट के लिए हिंदी आवेदन पत्र। तैयार नमूना, सही फॉर्मेट और Bonafide Certificate Application लिखने की गाइड।",
  path: "/applications/certificate/bonafide-certificate-request-application",
});
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage
        singleTemplate
        data={bonafideCertificateTemplate}
      />
    </>
  );
}
