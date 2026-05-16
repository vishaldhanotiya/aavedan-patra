import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { casualTravelLeave } from "@/data/leaveTemplate/casualLeaveTravel";
import { createMetadata } from "@/metadata/metadata";
export const metadata = createMetadata({
  title:
    "यात्रा छुट्टी आवेदन – घूमने या गांव जाने के लिए",
  description:
    "यात्रा के लिए ऑफिस/स्कूल से छुट्टी का हिंदी आवेदन पत्र। कितने दिन, कारण कैसे लिखें – तैयार नमूना और Travel Leave Application गाइड।",
  path: "/applications/leave/travel-leave-application",
});
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage singleTemplate data={casualTravelLeave} />
    </>
  );
}
