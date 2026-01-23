import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { personalLeaveApplicationTemplate } from "@/data/leaveTemplate/personalLeaveApplicationTemplate";
export const metadata = {
  title: "पर्सनल लीव के लिए आवेदन पत्र | आवेदन पत्र",
  description:
    "ऑफिस या स्कूल में व्यक्तिगत अवकाश के लिए औपचारिक आवेदन पत्र का प्रारूप।",
};
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage
        data={personalLeaveApplicationTemplate}
      />
    </>
  );
}
