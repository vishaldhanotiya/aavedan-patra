import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { migraineSickLeave } from "@/data/leaveTemplate/migraineSickLeave";
import { generateMetadata } from "@/metadata/metadata";
export const metadata = generateMetadata({
  title: "माइग्रेन के लिए छुट्टी का आवेदन पत्र | आवेदन कैसे लिखें",
  description:
    "माइग्रेन के कारण छुट्टी का आवेदन पत्र कैसे लिखें, इसकी पूरी जानकारी यहाँ मिलेगी। इस पेज पर ऑफिस या स्कूल के लिए माइग्रेन लीव आवेदन का सही प्रारूप, तैयार नमूना आवेदन पत्र, जरूरी जानकारी और लिखने के आसान सुझाव दिए गए हैं, जिससे आपका छुट्टी आवेदन सही और प्रभावी तरीके से तैयार हो सके।",
  path: "/applications/leave/migraine-sick-leave-application",
});
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage singleTemplate data={migraineSickLeave} />
    </>
  );
}
