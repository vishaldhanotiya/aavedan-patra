import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { qaSoftwareTesterJobTemplate } from "@/data/jobTemplate/qaSoftwareTesterJobTemplate";
import { generateMetadata } from "@/metadata/metadata";
export const metadata = generateMetadata({
  title: "QA सॉफ्टवेयर टेस्टर नौकरी के लिए आवेदन पत्र – हिंदी प्रारूप व नमूना",
  description:
    "QA सॉफ्टवेयर टेस्टर नौकरी के लिए आवेदन पत्र का सही हिंदी प्रारूप यहाँ देखें। QA Tester पद हेतु तैयार नमूना आवेदन पत्र, लिखने का तरीका, उदाहरण और आसान टिप्स के साथ अपना आवेदन प्रभावी बनाएं।",
  path: "/applications/job/qa-software-tester-job-application",
});
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage singleTemplate data={qaSoftwareTesterJobTemplate} />
    </>
  );
}
