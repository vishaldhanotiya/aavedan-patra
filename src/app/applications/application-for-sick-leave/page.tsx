import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { sickLeaveApplicationTemplate } from "@/data/leaveTemplate/sickLeaveApplicationTemplate";
import { generateMetadata } from "@/metadata/metadata";
export const metadata = generateMetadata({
  title: "सिक लीव के लिए आवेदन पत्र | आवेदन पत्र",
  description:
    "सिक लीव के लिए आवेदन पत्र कैसे लिखें, इसकी पूरी जानकारी यहाँ मिलेगी। इस पेज पर छात्रों और कर्मचारियों के लिए बीमारी के कारण छुट्टी लेने हेतु सही आवेदन पत्र का प्रारूप, तैयार नमूना आवेदन पत्र, एक दिन या कई दिनों की छुट्टी के उदाहरण और लिखने के आसान सुझाव दिए गए हैं, जिससे आवेदन आसानी से स्वीकार हो सके।",
  path: "/applications/application-for-sick-leave",
});
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage data={sickLeaveApplicationTemplate} />
    </>
  );
}
