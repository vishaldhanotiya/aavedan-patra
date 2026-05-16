import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { personalLeaveApplicationTemplate } from "@/data/leaveTemplate/personalLeaveApplicationTemplate";
import { createMetadata } from "@/metadata/metadata";
export const metadata = createMetadata({
  title:
    "व्यक्तिगत छुट्टी आवेदन – पारिवारिक, स्वास्थ्य, अन्य कारण",
  description:
    "पारिवारिक कार्यक्रम, अपने काम या अन्य व्यक्तिगत कारणों से छुट्टी लेने के लिए 5+ आवेदन प्रारूप।",
  path: "/applications/leave/personal-leave-application-formats",
});
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage data={personalLeaveApplicationTemplate} />
    </>
  );
}
