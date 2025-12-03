import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { relocationResignationTemplate } from "@/data/resignationTemplate/relocationResignationTemplate";

export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage
        data={relocationResignationTemplate}
      />
    </>
  );
}
