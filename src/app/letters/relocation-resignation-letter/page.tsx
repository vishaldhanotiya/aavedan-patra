import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { relocationResignationTemplate } from "@/data/resignationTemplate/relocationResignationTemplate";
export const metadata = {
  title: "Relocation Request Letter | Aavedan Patra",
  description: "Professional relocation request letter templates for transfer requests.",
};
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage
        data={relocationResignationTemplate}
      />
    </>
  );
}
