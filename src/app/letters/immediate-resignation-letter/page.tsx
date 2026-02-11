import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { immediateResignationTemplate } from "@/data/resignationTemplate/immediateResignationTemplate";
import { generateMetadata } from "@/metadata/metadata";
export const metadata = generateMetadata({
  title: "तत्काल इस्तीफा पत्र – बिना नोटिस प्रारूप व नमूना",
  description:
    "आपात स्थिति या अचानक करियर चेंज के लिए तत्काल इस्तीफा पत्र का प्रोफेशनल प्रारूप और नमूने। बिना नोटिस पीरियड के विनम्र और प्रभावी तरीके से इस्तीफा कैसे दें, यहाँ पूरा फॉर्मेट उपलब्ध है।",
  path: "/letters/immediate-resignation-letter",
});
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage data={immediateResignationTemplate} />
    </>
  );
}
