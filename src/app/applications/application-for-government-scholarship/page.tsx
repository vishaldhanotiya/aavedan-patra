import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { governmentScholarshipTemplate } from "@/data/scholarshipTemplate/governmentScholarshipTemplate";
export const metadata = {
  title: "सरकारी छात्रवृत्ति के लिए आवेदन पत्र | आवेदन पत्र",
  description:
    "सरकारी छात्रवृत्ति के लिए आवेदन पत्र कैसे लिखें, इसकी पूरी जानकारी यहाँ मिलेगी। इस पेज पर केंद्र और राज्य सरकार की छात्रवृत्तियों के लिए आवेदन करने का सही प्रारूप, तैयार नमूना आवेदन पत्र, जरूरी दस्तावेज़ों की जानकारी और छात्रों के लिए आसान लेखन सुझाव दिए गए हैं, जिससे आवेदन सही और बिना गलती के किया जा सके।",
};

export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage
        data={governmentScholarshipTemplate}
      />
    </>
  );
}
