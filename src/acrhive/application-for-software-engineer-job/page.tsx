import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { softwareJobApplicationTemplate } from "@/data/jobTemplate/softwareJobApplicationTemplate";
import { createMetadata } from "@/metadata/metadata";
export const metadata = createMetadata({
  title:
    "सॉफ्टवेयर इंजीनियर आवेदन पत्र – Software Engineer Job Application Hindi",
  description:
    "IT कंपनी में Software Engineer पद के लिए हिंदी आवेदन पत्र। फ्रेशर और अनुभवी दोनों के लिए तैयार नमूना, सही फॉर्मेट और लिखने की गाइड।",
  path: "/applications/application-for-software-engineer-job",
});
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage data={softwareJobApplicationTemplate} />
    </>
  );
}
