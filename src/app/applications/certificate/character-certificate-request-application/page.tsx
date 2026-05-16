import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { characterCertificateTemplate } from "@/data/certificateTemplate/characterCertificateTemplate";
import {  } from "@/metadata/metadata";
export const metadata = ({
  title: "चरित्र प्रमाणपत्र आवेदन – स्कूल/कॉलेज/पुलिस",
  description:
    "शैक्षणिक संस्थान या पुलिस से चरित्र प्रमाणपत्र प्राप्त करने के लिए आवेदन प्रारूप। नौकरी, वीज़ा, उच्च शिक्षा के लिए आवश्यक।", 
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
