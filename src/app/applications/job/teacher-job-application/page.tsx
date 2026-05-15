import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { teacherJobApplicationTemplate } from "@/data/jobTemplate/teacherJobApplicationTemplate";
import { generateMetadata } from "@/metadata/metadata";
export const metadata = generateMetadata({
  title: "शिक्षक नौकरी आवेदन पत्र – Teacher Job Application Hindi | AavedanPatra",
  description:
    "स्कूल शिक्षक पद के लिए हिंदी आवेदन पत्र। फ्रेशर और अनुभवी दोनों के लिए तैयार नमूने, सही प्रारूप और Teacher Job Application लिखने के टिप्स।",
  path: "/applications/job/teacher-job-application",
});
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage data={teacherJobApplicationTemplate} />
    </>
  );
}
