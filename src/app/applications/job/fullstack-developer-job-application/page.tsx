import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { fullStackDeveloperJobTemplate } from "@/data/jobTemplate/fullStackDeveloperJobTemplate";
import { generateMetadata } from "@/metadata/metadata";
export const metadata = generateMetadata({
  title: "फुल स्टैक डेवलपर नौकरी के लिए आवेदन पत्र – हिंदी प्रारूप व नमूना",
  description:
    "फुल स्टैक डेवलपर नौकरी के लिए आवेदन पत्र का सही हिंदी प्रारूप यहाँ देखें। Full Stack Developer पद हेतु तैयार नमूना आवेदन पत्र, लिखने का तरीका, उदाहरण और आसान टिप्स के साथ अपना आवेदन प्रभावी बनाएं।",
  path: "/applications/job/fullstack-developer-job-application",
});
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage singleTemplate data={fullStackDeveloperJobTemplate} />
    </>
  );
}
