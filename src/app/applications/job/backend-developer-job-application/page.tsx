import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { backendDeveloperJobTemplate } from "@/data/jobTemplate/backendDeveloperJobTemplate";
import { generateMetadata } from "@/metadata/metadata";
export const metadata = generateMetadata({
  title: "बैकएंड डेवलपर नौकरी के लिए आवेदन पत्र – हिंदी प्रारूप व नमूना",
  description:
    "बैकएंड डेवलपर नौकरी के लिए आवेदन पत्र का सही हिंदी प्रारूप यहाँ देखें। Backend Developer पद हेतु तैयार नमूना आवेदन पत्र, लिखने का तरीका, उदाहरण और आसान टिप्स के साथ अपना आवेदन प्रभावी बनाएं।",
  path: "/applications/job/backend-developer-job-application",
});
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage  singleTemplate data={backendDeveloperJobTemplate} />
    </>
  );
}
