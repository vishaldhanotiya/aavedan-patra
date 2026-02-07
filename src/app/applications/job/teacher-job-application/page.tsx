import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { teacherJobApplicationTemplate } from "@/data/jobTemplate/teacherJobApplicationTemplate";
import { generateMetadata } from "@/metadata/metadata";
export const metadata = generateMetadata({
  title: "शिक्षक नौकरी के लिए आवेदन पत्र | आवेदन पत्र",
  description:
    "शिक्षक नौकरी के लिए आवेदन पत्र कैसे लिखें, इसकी पूरी जानकारी यहाँ मिलेगी। इस पेज पर स्कूल शिक्षक पद के लिए आवेदन करने का सही प्रारूप, तैयार नमूना आवेदन पत्र, फ्रेशर और अनुभवी शिक्षकों के लिए उपयोगी उदाहरण और लिखने के आसान सुझाव दिए गए हैं, जिससे आप अपना आवेदन प्रभावी तरीके से तैयार कर सकें।",
  path: "/applications/job/teacher-job-application",
});
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage data={teacherJobApplicationTemplate} />
    </>
  );
}
