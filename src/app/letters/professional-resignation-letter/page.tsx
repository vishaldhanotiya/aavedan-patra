import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { professionalResignationTemplate } from "@/data/resignationTemplate/professionalResignationTemplate";

export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage
        data={professionalResignationTemplate}
      />
    </>
  );
}
