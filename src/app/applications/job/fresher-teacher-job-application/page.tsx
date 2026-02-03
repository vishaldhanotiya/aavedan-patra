import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { fresherTeacherJobTemplate } from "@/data/jobTemplate/fresherTeacherJobTemplate";
import { generateMetadata } from "@/metadata/metadata";
export const metadata = generateMetadata({
  title: "फ्रेशर शिक्षक नौकरी के लिए आवेदन पत्र – हिंदी प्रारूप व नमूना",
  description:
    "फ्रेशर शिक्षक नौकरी के लिए आवेदन पत्र का सही हिंदी प्रारूप यहाँ देखें। स्कूल शिक्षक पद हेतु तैयार नमूना आवेदन पत्र, लिखने का तरीका, उदाहरण और आसान टिप्स के साथ अपना आवेदन प्रभावी बनाएं।",
  path: "/applications/job/fresher-teacher-job-application",
});

export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage singleTemplate data={fresherTeacherJobTemplate} />
    </>
  );
}
