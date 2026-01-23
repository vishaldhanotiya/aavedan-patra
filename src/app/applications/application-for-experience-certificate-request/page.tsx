import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { experienceCertificateTemplate } from "@/data/certificateTemplate/experienceCertificateTemplate";
export const metadata = {
  title: "एक्सपीरियंस सर्टिफिकेट के लिए आवेदन पत्र | आवेदन पत्र",
  description:
    "नियोक्ता से एक्सपीरियंस सर्टिफिकेट प्राप्त करने के लिए सही प्रारूप और नमूना आवेदन पत्र।",
};
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage
        data={experienceCertificateTemplate}
      />
    </>
  );
}
