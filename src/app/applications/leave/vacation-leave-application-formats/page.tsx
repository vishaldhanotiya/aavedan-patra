import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { vacationLeaveApplicationTemplate } from "@/data/leaveTemplate/vacationLeaveApplicationTemplate";
import { generateMetadata } from "@/metadata/metadata";
export const metadata = generateMetadata({
  title:
    "वेकेशन लीव आवेदन पत्र – Vacation Leave Application Hindi",
  description:
    "छुट्टियों के दौरान Vacation Leave के लिए ऑफिस/स्कूल आवेदन पत्र। तैयार हिंदी नमूना, सही फॉर्मेट और वेकेशन लीव लिखने की गाइड।",
  path: "/applications/leave/vacation-leave-application-formats",
});
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage data={vacationLeaveApplicationTemplate} />
    </>
  );
}
