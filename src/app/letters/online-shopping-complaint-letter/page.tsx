import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { onlineShoppingComplaintTemplate } from "@/data/complaintTemplate/onlineShoppingComplaintTemplate";
import { generateMetadata } from "@/metadata/metadata";
export const metadata = generateMetadata({
  title: "ऑनलाइन शॉपिंग शिकायत पत्र | आवेदन पत्र",
  description:
    "ऑनलाइन शॉपिंग शिकायत पत्र कैसे लिखें, इसकी पूरी जानकारी यहाँ मिलेगी। इस पेज पर खराब या डैमेज उत्पाद, देर से डिलीवरी, गलत सामान या रिफंड से जुड़ी समस्याओं के लिए प्रभावी शिकायत पत्र का सही प्रारूप, तैयार नमूने और लिखने के आसान सुझाव दिए गए हैं, जिससे आपकी शिकायत जल्दी और सही तरीके से दर्ज हो सके।",
  path: "/letters/online-shopping-complaint-letter",
});
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage data={onlineShoppingComplaintTemplate} />
    </>
  );
}
