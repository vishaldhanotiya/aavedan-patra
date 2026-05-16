import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { montessoriTeacherJobTemplate } from "@/data/jobTemplate/montessoriTeacherJobTemplate";
import { generateMetadata } from "@/metadata/metadata";
export const metadata = generateMetadata({
  title: "मोंटेसरी शिक्षक आवेदन पत्र – प्री-स्कूल, किंडरगार्टन – हिंदी प्रारूप",
  description:
    "Montessori और Nursery Teacher नौकरी के लिए आवेदन पत्र का आसान हिंदी प्रारूप। नर्सरी व मोंटेसरी टीचर पद हेतु तैयार नमूना आवेदन, उदाहरण और गाइड यहाँ उपलब्ध है।",
  path: "/applications/job/montessori-teacher-job-application",
});

export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage singleTemplate data={montessoriTeacherJobTemplate} />
    </>
  );
}
