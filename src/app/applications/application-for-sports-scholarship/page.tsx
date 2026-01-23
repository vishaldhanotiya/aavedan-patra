import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { sportsScholarshipTemplate } from "@/data/scholarshipTemplate/sportsScholarshipTemplate";
export const metadata = {
  title: "स्पोर्ट्स स्कॉलरशिप के लिए आवेदन पत्र | आवेदन पत्र",
  description:
    "स्पोर्ट्स स्कॉलरशिप के लिए आवेदन पत्र कैसे लिखें, इसकी पूरी जानकारी यहाँ मिलेगी। इस पेज पर खेल के आधार पर मिलने वाली छात्रवृत्ति के लिए आवेदन करने का सही प्रारूप, तैयार नमूना आवेदन पत्र, जरूरी जानकारी और लिखने के आसान सुझाव दिए गए हैं, जिससे खिलाड़ी छात्र अपना आवेदन सही और प्रभावी तरीके से कर सकें।",
};
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage
        data={sportsScholarshipTemplate}
      />
    </>
  );
}
