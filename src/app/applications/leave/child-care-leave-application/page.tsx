import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { childCareLeave } from "@/data/leaveTemplate/childCareLeave";
import { generateMetadata } from "@/metadata/metadata";
export const metadata = generateMetadata({
  title:  "चाइल्ड केयर लीव आवेदन – बच्चे की देखभाल के लिए छुट्टी",
  description:
    "बच्चे की बीमारी, स्कूल प्रोग्राम या देखभाल के लिए अभिभावकों द्वारा छुट्टी आवेदन प्रारूप। प्रिंसिपल या मैनेजर को लिखें।",
  path: "/applications/leave/child-care-leave-application",
});
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage singleTemplate data={childCareLeave} />
    </>
  );
}
