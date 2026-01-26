import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { courseAdmissionTemplate } from "@/data/admissionTemplate/courseAdmissionTemplate";
import { generateMetadata } from "@/metadata/metadata";
export const metadata = generateMetadata({
  title: "कोर्स में प्रवेश के लिए आवेदन पत्र | आवेदन पत्र",
  description:
    "कोर्स में प्रवेश के लिए आवेदन पत्र कैसे लिखें, इसकी पूरी जानकारी यहाँ मिलेगी। इस पेज पर किसी भी कोर्स या प्रशिक्षण कार्यक्रम में प्रवेश के लिए आवेदन करने का सही प्रारूप, तैयार नमूना आवेदन पत्र, जरूरी जानकारी और लिखने के आसान सुझाव दिए गए हैं, जिससे छात्र अपना आवेदन सही और प्रभावी तरीके से तैयार कर सकें।",
  path: "/applications/application-for-course-admission",
});
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage data={courseAdmissionTemplate} />
    </>
  );
}
