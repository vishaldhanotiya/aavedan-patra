import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { fresherSoftwareJobTemplate } from "@/data/jobTemplate/fresherSoftwareJobTemplate";
import { createMetadata } from "@/metadata/metadata";
export const metadata = createMetadata({
  title: "सॉफ्टवेयर इंजीनियर नौकरी के लिए आवेदन पत्र - आवेदन पत्र",
  description:
    "फ्रेशर, बैकएंड, फ्रंटएंड, फुल स्टैक, मोबाइल और QA इंजीनियरों के लिए अलग-अलग आवेदन प्रारूप। तकनीकी कौशल और प्रोजेक्ट अनुभव शामिल करें।",
  path: "/applications/job/fresher-software-engineer-job-application",
});
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage singleTemplate data={fresherSoftwareJobTemplate} />
    </>
  );
}
