import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { casualLeaveApplicationTemplate } from "@/data/leaveTemplate/casualLeaveApplicationTemplate";
import { generateMetadata } from "@/metadata/metadata";
export const metadata = generateMetadata({
  title:
    "कैजुअल लीव आवेदन पत्र – Casual Leave Application Hindi",
  description:
    "ऑफिस या स्कूल से Casual Leave के लिए हिंदी आवेदन पत्र। 1 दिन या कई दिनों की छुट्टी के तैयार नमूने, सही फॉर्मेट और लिखने की गाइड।",
  path: "/applications/application-for-casual-leave",
});
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage data={casualLeaveApplicationTemplate} />
    </>
  );
}
