import { PillarTemplatePage } from "@/components/PillarTemplatePage";
import { casualLeaveApplicationTemplate } from "@/data/leaveTemplate/casualLeaveApplicationTemplate";
import { createMetadata } from "@/metadata/metadata";
const path = "/applications/leave/casual-leave-application-formats";
export const metadata = createMetadata({
  title:
    "कैजुअल लीव आवेदन पत्र – Casual Leave Application Hindi",
  description:
    "निजी काम, अप्रत्याशित घटना या जरूरी कार्यों के लिए कैजुअल लीव आवेदन प्रारूप। 1-3 दिनों की छुट्टी के लिए तैयार टेम्पलेट।",
  path,
});
export default function Page() {
  return <PillarTemplatePage path={path} data={casualLeaveApplicationTemplate} />;
}
