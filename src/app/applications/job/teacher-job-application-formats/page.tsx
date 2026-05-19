import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { PillarTemplateSchemas } from "@/components/PillarTemplateSchemas";
import { teacherJobApplicationTemplate } from "@/data/jobTemplate/teacherJobApplicationTemplate";
import { createMetadata } from "@/metadata/metadata";

const path = "/applications/job/teacher-job-application-formats";
const templateData = teacherJobApplicationTemplate;

export const metadata = createMetadata({
  title: "शिक्षक नौकरी आवेदन पत्र – Teacher Job Application Hindi",
  description:
    "फ्रेशर, अनुभवी, गणित, अंग्रेजी, विज्ञान और मोंटेसरी शिक्षक के लिए अलग-अलग 6 आवेदन प्रारूप। हिंदी में मुफ्त डाउनलोड करें।",
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
        pageMetaData={templateData.pageMetaData}
        updatedDate={templateData.updatedDate}
        breadcrumb={templateData.breadcrumb}
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
