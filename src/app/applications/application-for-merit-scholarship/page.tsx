import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { meritScholarshipTemplate } from "@/data/scholarshipTemplate/meritScholarshipTemplate";
import { generateMetadata } from "@/metadata/metadata";
export const metadata = generateMetadata({
  title: "मेरिट आधारित छात्रवृत्ति के लिए आवेदन पत्र | आवेदन पत्र",
  description:
    "मेरिट आधारित छात्रवृत्ति के लिए आवेदन पत्र कैसे लिखें, इसकी पूरी जानकारी यहाँ मिलेगी। इस पेज पर योग्यता के आधार पर मिलने वाली छात्रवृत्ति के लिए आवेदन करने का सही प्रारूप, तैयार नमूना आवेदन पत्र, जरूरी जानकारी और लिखने के आसान सुझाव दिए गए हैं, जिससे छात्र अपना आवेदन सही और प्रभावी तरीके से कर सकें।",
  path: "/applications/application-for-merit-scholarship",
});
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage data={meritScholarshipTemplate} />
    </>
  );
}
