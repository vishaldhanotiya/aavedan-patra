import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { schoolStudentLeaveApplicationTemplate } from "@/data/leaveTemplate/schoolStudentLeaveApplicationTemplate";
import { generateMetadata } from "@/metadata/metadata";
export const metadata = generateMetadata({
  title:
    "स्कूल छुट्टी आवेदन पत्र – School Leave Application Hindi",
  description:
    "प्रिंसिपल को लिखने के लिए स्कूल छुट्टी आवेदन प्रारूप। बीमारी, पारिवारिक कार्यक्रम, खेल, डॉक्टर अपॉइंटमेंट के लिए अलग टेम्पलेट।",
  path: "/applications/leave/school-leave-application-formats",
});
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage data={schoolStudentLeaveApplicationTemplate} />
    </>
  );
}
