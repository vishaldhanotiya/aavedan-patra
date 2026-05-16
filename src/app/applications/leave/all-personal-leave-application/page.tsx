import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { personalLeaveApplicationTemplate } from "@/data/leaveTemplate/personalLeaveApplicationTemplate";
import { generateMetadata } from "@/metadata/metadata";
export const metadata = generateMetadata({
  title:
    "पर्सनल लीव आवेदन पत्र – Personal Leave Application Hindi | AavedanPatra",
  description:
    "ऑफिस/स्कूल में Personal Leave के लिए हिंदी आवेदन पत्र। तैयार नमूना, सही फॉर्मेट और व्यक्तिगत कारण छुट्टी आवेदन लिखने की गाइड।",
  path: "/applications/leave/all-personal-leave-application",
});
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage data={personalLeaveApplicationTemplate} />
    </>
  );
}
