import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { mathTeacherJobTemplate } from "@/data/jobTemplate/mathTeacherJobTemplate";
import { generateMetadata } from "@/metadata/metadata";
export const metadata = generateMetadata({
  title: "गणित शिक्षक आवेदन पत्र – विशेष प्रारूप, टिप्स और उदाहरण",
  description:
    "गणित शिक्षक पद के लिए हिंदी में आवेदन पत्र प्रारूप। B.Ed, अनुभव, शिक्षण पद्धति और उपलब्धियों को प्रस्तुत करने का तरीका सीखें।",
  path: "/applications/job/math-teacher-job-application",
});
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage singleTemplate data={mathTeacherJobTemplate} />
    </>
  );
}
