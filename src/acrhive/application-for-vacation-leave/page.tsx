import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { vacationLeaveApplicationTemplate } from "@/data/leaveTemplate/vacationLeaveApplicationTemplate";
import { createMetadata } from "@/metadata/metadata";
export const metadata = createMetadata({
  title: "वेकेशन लीव आवेदन पत्र – Vacation Leave Application Hindi",
  description: "छुट्टियों के दौरान Vacation Leave के लिए ऑफिस/स्कूल आवेदन पत्र। तैयार हिंदी नमूना, सही फॉर्मेट और वेकेशन लीव लिखने की गाइड।",
  path: "/applications/application-for-vacation-leave",
});
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage data={vacationLeaveApplicationTemplate} />
    </>
  );
}
