import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { officeAssistantApplicationTemplate } from "@/data/jobTemplate/officeAssistantApplicationTemplate";
import { generateMetadata } from "@/metadata/metadata";
export const metadata = generateMetadata({
  title: "ऑफिस असिस्टेंट आवेदन पत्र – Office Assistant Job Application Hindi",
  description:
    "Office Assistant पद के लिए हिंदी आवेदन पत्र। तैयार नमूना, सही फॉर्मेट और ऑफिस असिस्टेंट Job Application लिखने की पूरी गाइड।",
  path: "/applications/application-for-office-assistant-job",
});
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage data={officeAssistantApplicationTemplate} />
    </>
  );
}
