import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { mathTeacherJobTemplate } from "@/data/jobTemplate/mathTeacherJobTemplate";
import { generateMetadata } from "@/metadata/metadata";
export const metadata = generateMetadata({
  title: "गणित शिक्षक नौकरी के लिए आवेदन पत्र – हिंदी प्रारूप व नमूना",
  description:
    "मैथ्स टीचर नौकरी के लिए आवेदन पत्र का आसान हिंदी प्रारूप। गणित शिक्षक पद हेतु तैयार नमूना आवेदन पत्र, उदाहरण और लिखने के सरल तरीके यहाँ देखें।",
  path: "/applications/job/math-teacher-job-application",
});
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage singleTemplate data={mathTeacherJobTemplate} />
    </>
  );
}
