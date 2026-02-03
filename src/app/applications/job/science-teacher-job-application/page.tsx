import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { scienceTeacherJobTemplate } from "@/data/jobTemplate/scienceTeacherJobTemplate";
import { generateMetadata } from "@/metadata/metadata";
export const metadata = generateMetadata({
  title: "विज्ञान शिक्षक नौकरी के लिए आवेदन पत्र – हिंदी प्रारूप",
  description:
    "साइंस टीचर नौकरी के लिए आवेदन पत्र का सही हिंदी फॉर्मेट। विज्ञान शिक्षक पद हेतु तैयार नमूना, उदाहरण और आवेदन लिखने के आसान सुझाव यहाँ मिलेंगे।",
  path: "/applications/job/science-teacher-job-application",
});

export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage singleTemplate data={scienceTeacherJobTemplate} />
    </>
  );
}
