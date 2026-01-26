import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { collegeAdmissionTemplate } from "@/data/admissionTemplate/collegeAdmissionTemplate";
import { generateMetadata } from "@/metadata/metadata";
export const metadata = generateMetadata({
  title: "कॉलेज में प्रवेश के लिए आवेदन पत्र | आवेदन पत्र",
  description:
    "कॉलेज में प्रवेश के लिए आवेदन पत्र कैसे लिखें, इसकी पूरी जानकारी यहाँ मिलेगी। इस पेज पर छात्रों के लिए कॉलेज एडमिशन हेतु सही आवेदन पत्र का प्रारूप, तैयार नमूना आवेदन पत्र, जरूरी जानकारी और लिखने के आसान सुझाव दिए गए हैं, जिससे प्रवेश प्रक्रिया सही और आसान तरीके से पूरी हो सके।",
  path: "/applications/application-for-college-admission",
});
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage data={collegeAdmissionTemplate} />
    </>
  );
}
