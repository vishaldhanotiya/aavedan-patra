import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { careerChangeResignationTemplate } from "@/data/resignationTemplate/careerChangeResignationTemplate";

export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage
        data={careerChangeResignationTemplate}
      />
    </>
  );
}
