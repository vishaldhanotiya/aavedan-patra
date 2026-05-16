import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { migraineSickLeave } from "@/data/leaveTemplate/migraineSickLeave";
import { generateMetadata } from "@/metadata/metadata";
export const metadata = generateMetadata({
  title:"माइग्रेन बीमारी छुट्टी आवेदन – Migraine Sick Leave Application Hindi",
  description:
    "माइग्रेन के कारण ऑफिस/स्कूल से छुट्टी के लिए हिंदी आवेदन पत्र। तैयार नमूना, सही फॉर्मेट और Migraine Leave Application लिखने के टिप्स।",
  path: "/applications/leave/migraine-sick-leave-application",
});
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage singleTemplate data={migraineSickLeave} />
    </>
  );
}
