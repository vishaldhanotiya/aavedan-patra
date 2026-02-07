import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { fresherSoftwareJobTemplate } from "@/data/jobTemplate/fresherSoftwareJobTemplate";
import { generateMetadata } from "@/metadata/metadata";
export const metadata = generateMetadata({
  title: "मोबाइल डेवलपर नौकरी के लिए आवेदन पत्र – हिंदी प्रारूप व नमूना",
  description:
    "मोबाइल डेवलपर नौकरी के लिए आवेदन पत्र का सही हिंदी प्रारूप यहाँ देखें। Mobile App Developer पद हेतु तैयार नमूना आवेदन पत्र, लिखने का तरीका, उदाहरण और आसान टिप्स के साथ अपना आवेदन प्रभावी बनाएं।",
  path: "/applications/job/mobile-developer-job-application",
});
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage singleTemplate data={fresherSoftwareJobTemplate} />
    </>
  );
}
