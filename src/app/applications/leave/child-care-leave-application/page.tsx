import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { childCareLeave } from "@/data/leaveTemplate/childCareLeave";
import { generateMetadata } from "@/metadata/metadata";
export const metadata = generateMetadata({
  title:  "बच्चे की देखभाल हेतु छुट्टी आवेदन – Child Care Leave Application Hindi",
  description:
    "बच्चे की देखभाल के लिए ऑफिस/स्कूल से छुट्टी का हिंदी आवेदन पत्र। तैयार नमूना, सही फॉर्मेट और Child Care Leave Application लिखने की गाइड।",
  path: "/applications/leave/child-care-leave-application",
});
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage singleTemplate data={childCareLeave} />
    </>
  );
}
