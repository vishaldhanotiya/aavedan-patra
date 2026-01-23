import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { needBasedScholarshipTemplate } from "@/data/scholarshipTemplate/needBasedScholarshipTemplate";
export const metadata = {
  title: "आवश्यकता आधारित छात्रवृत्ति के लिए आवेदन पत्र | आवेदन पत्र",
  description:
    "आवश्यकता आधारित छात्रवृत्ति के लिए आवेदन पत्र कैसे लिखें, इसकी पूरी जानकारी यहाँ मिलेगी। इस पेज पर आर्थिक सहायता के आधार पर मिलने वाली छात्रवृत्ति के लिए आवेदन करने का सही प्रारूप, तैयार नमूना आवेदन पत्र, जरूरी जानकारी और लिखने के आसान सुझाव दिए गए हैं, जिससे छात्र बिना किसी परेशानी के सही तरीके से आवेदन कर सकें।",
};
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage
        data={needBasedScholarshipTemplate}
      />
    </>
  );
}
