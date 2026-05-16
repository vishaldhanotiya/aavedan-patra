import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { schoolTransfer } from "@/data/admissionTemplate/schoolTransfer/schoolTransfer";
import {  } from "@/metadata/metadata";
export const metadata = ({
  title:
    "स्कूल ट्रांसफर आवेदन – टीसी लेने के लिए पत्र",
  description:
    "एक स्कूल से दूसरे स्कूल में ट्रांसफर सर्टिफिकेट (टीसी) प्राप्त करने के लिए प्रिंसिपल को आवेदन प्रारूप। नए शहर/स्कूल का कारण लिखें।",
  path: "/applications/admission/school-transfer-application",
});
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage singleTemplate data={schoolTransfer} />
    </>
  );
}
