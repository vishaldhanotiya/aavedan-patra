import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { childCareLeave } from "@/data/leaveTemplate/childCareLeave";
import { generateMetadata } from "@/metadata/metadata";
export const metadata = generateMetadata({
  title: "बच्चे की देखभाल के लिए छुट्टी का आवेदन पत्र | आवेदन कैसे लिखें",
  description:
    "बच्चे की देखभाल के लिए छुट्टी का आवेदन पत्र कैसे लिखें, इसकी पूरी जानकारी यहाँ मिलेगी। इस पेज पर ऑफिस या स्कूल के लिए चाइल्ड केयर लीव आवेदन का सही प्रारूप, तैयार नमूना आवेदन पत्र, जरूरी जानकारी और लिखने के आसान सुझाव दिए गए हैं, जिससे आपका छुट्टी आवेदन सही और प्रभावी तरीके से तैयार हो सके।",
  path: "/applications/leave/child-care-leave-application",
});
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage singleTemplate data={childCareLeave} />
    </>
  );
}
