import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { professionalResignationTemplate } from "@/data/resignationTemplate/professionalResignationTemplate";
export const metadata = {
  title: "प्रोफेशनल इस्तीफा पत्र | आवेदन पत्र",
  description:
    "साफ़ और प्रोफेशनल भाषा में औपचारिक इस्तीफा पत्र के नमूने।",
};
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage
        data={professionalResignationTemplate}
      />
    </>
  );
}
