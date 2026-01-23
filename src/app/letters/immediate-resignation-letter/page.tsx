import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { immediateResignationTemplate } from "@/data/resignationTemplate/immediateResignationTemplate";
export const metadata = {
  title: "तत्काल इस्तीफा पत्र | आवेदन पत्र",
  description:
    "तत्काल इस्तीफा देने के लिए सरल और स्पष्ट इस्तीफा पत्र का प्रारूप।",
};
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage
        data={immediateResignationTemplate}
      />
    </>
  );
}
