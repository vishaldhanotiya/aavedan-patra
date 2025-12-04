import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { careerChangeResignationTemplate } from "@/data/resignationTemplate/careerChangeResignationTemplate";
export const metadata = {
  title: "Career Change Resignation Letter | Aavedan Patra",
  description: "A polite resignation letter format for career change with clean examples.",
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
