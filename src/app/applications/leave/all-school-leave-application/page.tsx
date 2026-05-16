import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { schoolStudentLeaveApplicationTemplate } from "@/data/leaveTemplate/schoolStudentLeaveApplicationTemplate";
import { generateMetadata } from "@/metadata/metadata";
export const metadata = generateMetadata({
  title:
    "स्कूल छुट्टी आवेदन पत्र – School Leave Application Hindi | AavedanPatra",
  description:
    "School Leave Application – बच्चे की छुट्टी के लिए हिंदी आवेदन पत्र। 1 दिन या कई दिनों की छुट्टी के तैयार नमूने, सही फॉर्मेट और गाइड।",
  path: "/applications/leave/all-school-leave-application",
});
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage data={schoolStudentLeaveApplicationTemplate} />
    </>
  );
}
