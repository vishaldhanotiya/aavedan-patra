import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { schoolStudentLeaveApplicationTemplate } from "@/data/leaveTemplate/schoolStudentLeaveApplicationTemplate";
import { createMetadata } from "@/metadata/metadata";
export const metadata = createMetadata({
  title:  "स्कूल छुट्टी आवेदन पत्र – School Leave Application Hindi", 
  description:
   "School Leave Application – बच्चे की छुट्टी के लिए हिंदी आवेदन पत्र। 1 दिन या कई दिनों की छुट्टी के तैयार नमूने, सही फॉर्मेट और गाइड।",
  path: "/applications/application-for-school-leave",
});
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage data={schoolStudentLeaveApplicationTemplate} />
    </>
  );
}
