import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { immediateResignationTemplate } from "@/data/resignationTemplate/immediateResignationTemplate";

export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage
        data={immediateResignationTemplate}
      />
    </>
  );
}
