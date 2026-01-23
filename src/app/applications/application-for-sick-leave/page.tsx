import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { sickLeaveApplicationTemplate } from "@/data/leaveTemplate/sickLeaveApplicationTemplate";
export const metadata = {
  title: "सिक लीव के लिए आवेदन पत्र | आवेदन पत्र",
  description:
    "छात्रों और कर्मचारियों के लिए बीमारी अवकाश आवेदन पत्र का सही प्रारूप।",
};
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage
        data={sickLeaveApplicationTemplate}
      />
    </>
  );
}
