import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { casualLeaveApplicationTemplate } from "@/data/leaveTemplate/casualLeaveApplicationTemplate";
import { createMetadata } from "@/metadata/metadata";
export const metadata = createMetadata({
  title:
    "कैजुअल लीव आवेदन पत्र – Casual Leave Application Hindi",
  description:
    "निजी काम, अप्रत्याशित घटना या जरूरी कार्यों के लिए कैजुअल लीव आवेदन प्रारूप। 1-3 दिनों की छुट्टी के लिए तैयार टेम्पलेट।",
  path: "/applications/leave/casual-leave-application-formats",
});
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage data={casualLeaveApplicationTemplate} />
    </>
  );
}
