import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { retirementResignationTemplate } from "@/data/resignationTemplate/retirementResignationTemplate";
export const metadata = {
  title: "Retirement Resignation Letter | Aavedan Patra",
  description: "A polite retirement resignation letter format with helpful examples.",
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
