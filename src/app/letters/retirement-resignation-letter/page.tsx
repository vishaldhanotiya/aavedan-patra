import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { retirementResignationTemplate } from "@/data/resignationTemplate/retirementResignationTemplate";
export const metadata = {
  title: "सेवानिवृत्ति इस्तीफा पत्र | आवेदन पत्र",
  description:
    "उपयोगी उदाहरणों के साथ विनम्र सेवानिवृत्ति इस्तीफा पत्र का प्रारूप।",
};
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage
        data={retirementResignationTemplate}
      />
    </>
  );
}
