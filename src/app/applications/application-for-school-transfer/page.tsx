import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { schoolTransferTemplate } from "@/data/admissionTemplate/schoolTransferTemplate";
export const metadata = {
  title: "स्कूल ट्रांसफर सर्टिफिकेट के लिए आवेदन पत्र | आवेदन पत्र",
  description:
    "स्कूल से ट्रांसफर सर्टिफिकेट (टीसी) प्राप्त करने के लिए आवेदन पत्र का प्रारूप।",
};
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage
        data={schoolTransferTemplate}
      />
    </>
  );
}
