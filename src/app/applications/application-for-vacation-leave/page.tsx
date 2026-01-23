import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { vacationLeaveApplicationTemplate } from "@/data/leaveTemplate/vacationLeaveApplicationTemplate";
export const metadata = {
  title: "वेकशन लीव के लिए आवेदन पत्र | आवेदन पत्र",
  description:
    "ऑफिस या स्कूल के लिए उपयुक्त औपचारिक वेकेशन लीव आवेदन पत्र।",
};
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage
        data={vacationLeaveApplicationTemplate}
      />
    </>
  );
}
