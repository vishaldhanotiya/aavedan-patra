import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { englishTeacherJobTemplate } from "@/data/jobTemplate/englishTeacherJobTemplate";
import { generateMetadata } from "@/metadata/metadata";
export const metadata = generateMetadata({
  title: "अंग्रेज़ी शिक्षक नौकरी के लिए आवेदन पत्र – हिंदी प्रारूप",
  description:
    "इंग्लिश टीचर नौकरी के लिए आवेदन पत्र का सही हिंदी फॉर्मेट। स्कूल अंग्रेज़ी शिक्षक पद हेतु तैयार नमूना आवेदन, उदाहरण और सरल गाइड के साथ आवेदन लिखें।",
  path: "/applications/job/english-teacher-job-application",
});
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage singleTemplate data={englishTeacherJobTemplate} />
    </>
  );
}
