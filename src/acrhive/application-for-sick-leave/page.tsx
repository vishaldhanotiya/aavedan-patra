import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { sickLeaveApplicationTemplate } from "@/data/leaveTemplate/sickLeaveApplicationTemplate";
import { generateMetadata } from "@/metadata/metadata";
export const metadata = generateMetadata({
  title: "बीमारी छुट्टी आवेदन पत्र – Sick Leave Application Hindi | AavedanPatra",
  description:
  "छात्रों और कर्मचारियों के लिए बीमारी की छुट्टी के लिए हिंदी आवेदन पत्र। 1 दिन या कई दिनों के तैयार नमूने, सही फॉर्मेट और Sick Leave गाइड।",
  path: "/applications/application-for-sick-leave",
});
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage data={sickLeaveApplicationTemplate} />
    </>
  );
}
