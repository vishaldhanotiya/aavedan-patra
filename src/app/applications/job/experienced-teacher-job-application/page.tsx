import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { experiencedTeacherJobTemplate } from "@/data/jobTemplate/experiencedTeacherJobTemplate";
import { generateMetadata } from "@/metadata/metadata";
export const metadata = generateMetadata({
  title: "अनुभवी शिक्षक नौकरी के लिए आवेदन पत्र – हिंदी प्रारूप व उदाहरण",
  description:
    "अनुभवी शिक्षक नौकरी के लिए आवेदन पत्र का आसान हिंदी प्रारूप। अनुभव वाले शिक्षकों के लिए तैयार नमूना, उदाहरण और लिखने के जरूरी सुझाव यहाँ उपलब्ध हैं।",
  path: "/applications/job/experienced-teacher-job-application",
});
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage singleTemplate data={experiencedTeacherJobTemplate} />
    </>
  );
}
