import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { bonafideCertificateTemplate } from "@/data/certificateTemplate/bonafideCertificateTemplate";
import { createMetadata } from "@/metadata/metadata";
export const metadata =createMetadata ({
  title:
    "बोनाफाइड सर्टिफिकेट आवेदन – शैक्षणिक प्रमाण हेतु",
  description:
    "स्कूल या कॉलेज से बोनाफाइड प्रमाणपत्र प्राप्त करने के लिए प्रिंसिपल को आवेदन प्रारूप। छात्रवृत्ति, पासपोर्ट, बैंक खाते के लिए आवश्यक।",
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
