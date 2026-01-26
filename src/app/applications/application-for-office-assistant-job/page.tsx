import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { officeAssistantApplicationTemplate } from "@/data/jobTemplate/officeAssistantApplicationTemplate";
import { generateMetadata } from "@/metadata/metadata";
export const metadata = generateMetadata({
  title: "ऑफिस असिस्टेंट नौकरी के लिए आवेदन पत्र | आवेदन पत्र",
  description:
    "ऑफिस असिस्टेंट नौकरी के लिए आवेदन पत्र कैसे लिखें, इसकी पूरी जानकारी यहाँ मिलेगी। इस पेज पर ऑफिस असिस्टेंट पद के लिए आवेदन करने का सही प्रारूप, तैयार नमूना आवेदन पत्र, जरूरी जानकारी और लिखने के आसान सुझाव दिए गए हैं, जिससे आप अपना आवेदन सरल और प्रोफेशनल तरीके से तैयार कर सकें।",
  path: "/applications/application-for-office-assistant-job",
});
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage data={officeAssistantApplicationTemplate} />
    </>
  );
}
