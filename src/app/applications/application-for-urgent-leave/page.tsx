import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { urgentLeaveApplicationTemplate } from "@/data/leaveTemplate/urgentLeaveApplicationTemplate";
export const metadata = {
  title: "तत्काल अवकाश के लिए आवेदन पत्र | आवेदन पत्र",
  description:
    "आपातकालीन या अचानक परिस्थितियों के लिए तत्काल अवकाश आवेदन पत्र प्रारूप।",
};
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage
        data={urgentLeaveApplicationTemplate}
      />
    </>
  );
}
