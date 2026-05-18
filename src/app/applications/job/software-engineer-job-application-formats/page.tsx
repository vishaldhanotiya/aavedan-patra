import { PillarTemplatePage } from "@/components/PillarTemplatePage";
import { softwareJobApplicationTemplate } from "@/data/jobTemplate/softwareJobApplicationTemplate";
import { createMetadata } from "@/metadata/metadata";
const path = "/applications/job/software-engineer-job-application-formats";
export const metadata = createMetadata({
  title:
    "सॉफ्टवेयर इंजीनियर आवेदन पत्र – Software Engineer Job Application Hindi",
  description:
    "फ्रेशर, बैकएंड, फ्रंटएंड, फुल स्टैक, मोबाइल और QA इंजीनियरों के लिए अलग-अलग आवेदन प्रारूप। तकनीकी कौशल और प्रोजेक्ट अनुभव शामिल करें।",
  path,
});
export default function Page() {
  return <PillarTemplatePage path={path} data={softwareJobApplicationTemplate} />;
}
