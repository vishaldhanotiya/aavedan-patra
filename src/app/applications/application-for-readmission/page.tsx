import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { readmissionTemplate } from "@/data/admissionTemplate/readmissionTemplate";
export const metadata = {
  title: "पुनः प्रवेश के लिए आवेदन पत्र | आवेदन पत्र",
  description:
    "पुनः प्रवेश के लिए आवेदन पत्र कैसे लिखें, इसकी पूरी जानकारी यहाँ मिलेगी। इस पेज पर स्कूल, कॉलेज या किसी भी प्रशिक्षण कार्यक्रम में दोबारा प्रवेश पाने के लिए सही आवेदन पत्र का प्रारूप, तैयार नमूना आवेदन पत्र, जरूरी जानकारी और लिखने के आसान सुझाव दिए गए हैं, जिससे आप बिना किसी परेशानी के सही तरीके से आवेदन कर सकें।",
};
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage
        data={readmissionTemplate}
      />
    </>
  );
}
