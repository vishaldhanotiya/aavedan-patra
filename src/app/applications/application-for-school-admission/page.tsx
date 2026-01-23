import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { schoolAdmissionTemplate } from "@/data/admissionTemplate/schoolAdmissionTemplate";
export const metadata = {
  title: "स्कूल में प्रवेश के लिए आवेदन पत्र | आवेदन पत्र",
  description:
    "स्कूल में प्रवेश के लिए आवेदन पत्र कैसे लिखें, इसकी पूरी जानकारी यहाँ मिलेगी। इस पेज पर अभिभावकों और छात्रों के लिए स्कूल एडमिशन हेतु सही आवेदन पत्र का प्रारूप, तैयार नमूना आवेदन पत्र, जरूरी जानकारी और लिखने के आसान सुझाव दिए गए हैं, जिससे प्रवेश प्रक्रिया सरल और सही तरीके से पूरी की जा सके।",
};
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage
        data={schoolAdmissionTemplate}
      />
    </>
  );
}
