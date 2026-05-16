import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { fresherTeacherJobTemplate } from "@/data/jobTemplate/fresherTeacherJobTemplate";
import { generateMetadata } from "@/metadata/metadata";
export const metadata = generateMetadata({
  title:"फ्रेशर शिक्षक आवेदन – बिना अनुभव के लिए",
  description: "नए स्नातक शिक्षकों के लिए आवेदन प्रारूप। इंटर्नशिप, ट्यूशन और स्वयंसेवी अनुभव को कैसे दिखाएं – उदाहरण सहित।",
  path: "/applications/job/fresher-teacher-job-application",
});

export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage singleTemplate data={fresherTeacherJobTemplate} />
    </>
  );
}
