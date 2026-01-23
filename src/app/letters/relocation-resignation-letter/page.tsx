import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { relocationResignationTemplate } from "@/data/resignationTemplate/relocationResignationTemplate";
export const metadata = {
  title: "स्थानांतरण हेतु अनुरोध पत्र | आवेदन पत्र",
  description:
    "ट्रांसफर/रीलोकेशन अनुरोध के लिए प्रोफेशनल आवेदन पत्र के नमूने।",
};
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage
        data={relocationResignationTemplate}
      />
    </>
  );
}
