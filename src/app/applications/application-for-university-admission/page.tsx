import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { universityAdmissionTemplate } from "@/data/admissionTemplate/universityAdmissionTemplate";
import { generateMetadata } from "@/metadata/metadata";
export const metadata = generateMetadata({
  title: "विश्वविद्यालय में प्रवेश के लिए आवेदन पत्र | आवेदन पत्र",
  description:
    "विश्वविद्यालय में प्रवेश के लिए आवेदन पत्र कैसे लिखें, इसकी पूरी जानकारी यहाँ मिलेगी। इस पेज पर स्नातक, परास्नातक या अन्य पाठ्यक्रमों में विश्वविद्यालय प्रवेश के लिए सही आवेदन पत्र का प्रारूप, तैयार नमूना आवेदन पत्र, जरूरी जानकारी और लिखने के आसान सुझाव दिए गए हैं, जिससे प्रवेश प्रक्रिया सही और आसान बन सके।",
  path: "/applications/application-for-university-admission",
});
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage data={universityAdmissionTemplate} />
    </>
  );
}
