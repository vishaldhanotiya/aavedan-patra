import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { careerChangeResignationTemplate } from "@/data/resignationTemplate/careerChangeResignationTemplate";
export const metadata = {
  title: "करियर परिवर्तन हेतु इस्तीफा पत्र | आवेदन पत्र",
  description:
    "करियर बदलने के लिए विनम्र और साफ़-सुथरे उदाहरणों के साथ इस्तीफा पत्र का प्रारूप।",
};
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage
        data={careerChangeResignationTemplate}
      />
    </>
  );
}
