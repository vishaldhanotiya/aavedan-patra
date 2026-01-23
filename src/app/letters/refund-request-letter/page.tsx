import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { refundRequestTemplate } from "@/data/complaintTemplate/refundRequestTemplate";
export const metadata = {
  title: "रिफंड हेतु अनुरोध पत्र | आवेदन पत्र",
  description:
    "रिफंड हेतु अनुरोध पत्र कैसे लिखें, इसकी पूरी जानकारी यहाँ मिलेगी। इस पेज पर उत्पाद या सेवा के लिए रिफंड माँगने का सही आवेदन पत्र प्रारूप, तैयार नमूना पत्र, जरूरी जानकारी और लिखने के आसान सुझाव दिए गए हैं, जिससे आपका रिफंड अनुरोध जल्दी और सही तरीके से प्रोसेस हो सके।",
};
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage
        data={refundRequestTemplate}
      />
    </>
  );
}
