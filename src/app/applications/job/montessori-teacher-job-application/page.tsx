import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { montessoriTeacherJobTemplate } from "@/data/jobTemplate/montessoriTeacherJobTemplate";
import { generateMetadata } from "@/metadata/metadata";
export const metadata = generateMetadata({
  title: "मोंटेसरी शिक्षक आवेदन पत्र – प्री-स्कूल, किंडरगार्टन – हिंदी प्रारूप",
  description:
    "प्री-स्कूल, नर्सरी और किंडरगार्टन में मोंटेसरी शिक्षक पद के लिए आवेदन प्रारूप। खेल-आधारित शिक्षण और बाल विकास पर फोकस।",
  path: "/applications/job/montessori-teacher-job-application",
});

export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage singleTemplate data={montessoriTeacherJobTemplate} />
    </>
  );
}
