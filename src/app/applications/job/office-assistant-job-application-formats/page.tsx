import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { officeAssistantApplicationTemplate } from "@/data/jobTemplate/officeAssistantApplicationTemplate";
import {  } from "@/metadata/metadata";
export const metadata = ({
  title: "ऑफिस असिस्टेंट आवेदन – फ्रेशर, अनुभवी, डेटा एंट्री",
  description:
    "ऑफिस असिस्टेंट, डेटा एंट्री ऑपरेटर, रिसेप्शनिस्ट और प्रशासनिक सहायक के लिए 10+ आवेदन प्रारूप। हिंदी और अंग्रेजी में।",
  path: "/applications/job/office-assistant-job-application-formats",
});
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage data={officeAssistantApplicationTemplate} />
    </>
  );
}
