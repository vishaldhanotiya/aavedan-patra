import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { productComplaintTemplate } from "@/data/complaintTemplate/productComplaintTemplate";
export const metadata = {
  title: "उत्पाद शिकायत पत्र | आवेदन पत्र",
  description:
    "उत्पाद शिकायत पत्र कैसे लिखें, इसकी पूरी जानकारी यहाँ मिलेगी। इस पेज पर खराब, डैमेज या गलत उत्पाद के लिए रिफंड या रिप्लेसमेंट माँगने हेतु प्रभावी शिकायत पत्र का सही प्रारूप, तैयार नमूने और लिखने के आसान सुझाव दिए गए हैं, जिससे आपकी शिकायत जल्दी और सही तरीके से हल हो सके।",
};
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage
        data={productComplaintTemplate}
      />
    </>
  );
}
