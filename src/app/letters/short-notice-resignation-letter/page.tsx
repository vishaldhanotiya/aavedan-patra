import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { shortNoticeResignationTemplate } from "@/data/resignationTemplate/shortNoticeResignationTemplate";
export const metadata = {
  title: "शॉर्ट नोटिस इस्तीफा पत्र | आवेदन पत्र",
  description:
    "तत्काल परिस्थितियों के लिए प्रोफेशनल शॉर्ट नोटिस इस्तीफा पत्र के उदाहरण।",
};
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage
        data={shortNoticeResignationTemplate}
      />
    </>
  );
}
