import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { immediateResignationTemplate } from "@/data/resignationTemplate/immediateResignationTemplate";
export const metadata = {
  title: "Immediate Resignation Letter | Aavedan Patra",
  description: "Simple immediate resignation letter format for urgent resignations.",
};
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage
        data={immediateResignationTemplate}
      />
    </>
  );
}
