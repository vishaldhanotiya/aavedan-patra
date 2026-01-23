import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { managerHrOperationsSalesTemplate } from "@/data/jobTemplate/managerHrOperationsSalesTemplate";
export const metadata = {
  title: "मैनेजर पद के लिए आवेदन पत्र | आवेदन पत्र",
  description:
    "मैनेजर पद के लिए आवेदन पत्र कैसे लिखें, इसकी पूरी जानकारी यहाँ मिलेगी। इस पेज पर मैनेजर स्तर की नौकरी के लिए आवेदन करने का सही प्रारूप, तैयार नमूना आवेदन पत्र, जरूरी जानकारी और लिखने के प्रोफेशनल सुझाव दिए गए हैं, जिससे आप अपना आवेदन प्रभावी और भरोसेमंद तरीके से तैयार कर सकें।",
};
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage
        data={managerHrOperationsSalesTemplate}
      />
    </>
  );
}
