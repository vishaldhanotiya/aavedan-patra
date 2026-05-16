import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { transferCertificateTemplate } from "@/data/certificateTemplate/transferCertificateTemplate";
import {  } from "@/metadata/metadata";
export const metadata = ({
  title:
    "ट्रांसफर सर्टिफिकेट आवेदन – स्कूल/कॉलेज टीसी",
  description:
    "स्कूल छोड़ने पर ट्रांसफर सर्टिफिकेट (टीसी) के लिए प्रिंसिपल को आवेदन प्रारूप। नए स्कूल में प्रवेश, शहर बदलने पर आवश्यक।",
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
