import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { transferCertificateTemplate } from "@/data/certificateTemplate/transferCertificateTemplate";
export const metadata = {
  title: "ट्रांसफर सर्टिफिकेट के लिए आवेदन पत्र | आवेदन पत्र",
  description:
    "स्कूल या कॉलेज से ट्रांसफर सर्टिफिकेट के लिए सरल आवेदन पत्र प्रारूप।",
};
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage
        data={transferCertificateTemplate}
      />
    </>
  );
}
