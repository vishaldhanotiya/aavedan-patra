import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { researchGrantTemplate } from "@/data/scholarshipTemplate/researchGrantTemplate";
export const metadata = {
  title: "रिसर्च ग्रांट के लिए आवेदन पत्र | आवेदन पत्र",
  description:
    "रिसर्च ग्रांट के लिए आवेदन पत्र कैसे लिखें, इसकी पूरी जानकारी यहाँ मिलेगी। इस पेज पर शैक्षणिक या वैज्ञानिक परियोजनाओं के लिए रिसर्च ग्रांट प्राप्त करने हेतु सही आवेदन पत्र का प्रारूप, तैयार नमूना आवेदन पत्र, जरूरी जानकारी और लिखने के प्रोफेशनल सुझाव दिए गए हैं, जिससे शोधकर्ता अपना आवेदन सही और प्रभावी तरीके से तैयार कर सकें।",
};
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage
        data={researchGrantTemplate}
      />
    </>
  );
}
