import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { retirementResignationTemplate } from "@/data/resignationTemplate/retirementResignationTemplate";

export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage
        data={retirementResignationTemplate}
      />
    </>
  );
}
