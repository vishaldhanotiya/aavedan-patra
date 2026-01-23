import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { privateScholarshipTemplate } from "@/data/scholarshipTemplate/privateScholarshipTemplate";
export const metadata = {
  title: "प्राइवेट स्कॉलरशिप के लिए आवेदन पत्र | आवेदन पत्र",
  description:
    "प्राइवेट स्कॉलरशिप के लिए आवेदन पत्र कैसे लिखें, इसकी पूरी जानकारी यहाँ मिलेगी। इस पेज पर प्राइवेट छात्रवृत्ति के लिए आवेदन करने का सही प्रारूप, तैयार नमूना आवेदन पत्र, जरूरी जानकारी और लिखने के आसान सुझाव दिए गए हैं, जिससे छात्र अपना आवेदन सही और प्रभावी तरीके से तैयार कर सकें।",
};
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage
        data={privateScholarshipTemplate}
      />
    </>
  );
}
