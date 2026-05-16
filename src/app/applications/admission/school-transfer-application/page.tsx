import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { schoolTransfer } from "@/data/admissionTemplate/schoolTransfer/schoolTransfer";
import { generateMetadata } from "@/metadata/metadata";
export const metadata = generateMetadata({
  title:
    "स्कूल TC आवेदन पत्र – School Transfer Certificate Application Hindi",
  description:
    "स्कूल से ट्रांसफर सर्टिफिकेट (TC) के लिए हिंदी आवेदन पत्र। तैयार नमूना, सही फॉर्मेट और TC Application लिखने की पूरी गाइड।",
  path: "/applications/admission/school-transfer-application",
});
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage singleTemplate data={schoolTransfer} />
    </>
  );
}
