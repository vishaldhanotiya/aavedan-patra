import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { schoolStudentLeaveApplicationTemplate } from "@/data/leaveTemplate/schoolStudentLeaveApplicationTemplate";
export const metadata = {
  title: "स्कूल अवकाश के लिए आवेदन पत्र | आवेदन पत्र",
  description:
    "छात्रों के लिए स्कूल अवकाश आवेदन पत्र का सरल और सही प्रारूप।",
};
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage
        data={schoolStudentLeaveApplicationTemplate}
      />
    </>
  );
}
