import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { PillarTemplateSchemas } from "@/components/PillarTemplateSchemas";
import { teacherJobApplicationTemplate } from "@/data/jobTemplate/teacherJobApplicationTemplate";
import { generateMetadata } from "@/metadata/metadata";

const path = "/applications/job/teacher-job-application-formats";
const templateData = teacherJobApplicationTemplate;

export const metadata = generateMetadata({
  title: "शिक्षक नौकरी आवेदन पत्र – Teacher Job Application Hindi",
  description:
    "स्कूल शिक्षक पद के लिए हिंदी आवेदन पत्र। फ्रेशर और अनुभवी दोनों के लिए तैयार नमूने, सही प्रारूप और Teacher Job Application लिखने के टिप्स।",
  path,
  type: "article",
});

export default function Page() {
  return (
    <>
      <PillarTemplateSchemas
        path={path}
        title={templateData.title}
        subtitle={templateData.subtitle}
        updatedDate={templateData.updatedDate}
        howToWrite={templateData.howToWrite}
        faqs={templateData.faqs}
      />
      <PillarTemplateDetailsPage
        data={templateData}
        suppressSchema
      />
    </>
  );
}
