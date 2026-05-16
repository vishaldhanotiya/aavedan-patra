import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { schoolTransferTemplate } from "@/data/admissionTemplate/schoolTransferTemplate";
import { createMetadata } from "@/metadata/metadata";
export const metadata = createMetadata({
  title: "स्कूल TC आवेदन पत्र – School Transfer Certificate Hindi",
  description:
   "स्कूल से Transfer Certificate (TC) के लिए हिंदी आवेदन पत्र। तैयार नमूना, सही फॉर्मेट और TC Application लिखने की पूरी गाइड।",
  path: "/applications/application-for-school-transfer",
});
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage data={schoolTransferTemplate} />
    </>
  );
}
