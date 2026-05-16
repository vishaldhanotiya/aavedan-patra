import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { softwareJobApplicationTemplate } from "@/data/jobTemplate/softwareJobApplicationTemplate";
import { generateMetadata } from "@/metadata/metadata";
export const metadata = generateMetadata({
  title:
    "सॉफ्टवेयर इंजीनियर आवेदन पत्र – Software Engineer Job Application Hindi",
  description:
    "फ्रेशर, बैकएंड, फ्रंटएंड, फुल स्टैक, मोबाइल और QA इंजीनियरों के लिए अलग-अलग आवेदन प्रारूप। तकनीकी कौशल और प्रोजेक्ट अनुभव शामिल करें।",
  path: "/applications/job/software-engineer-job-application-formats",
});
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage data={softwareJobApplicationTemplate} />
    </>
  );
}
