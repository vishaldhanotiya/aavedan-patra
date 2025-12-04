import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { professionalResignationTemplate } from "@/data/resignationTemplate/professionalResignationTemplate";
export const metadata = {
  title: "Professional Resignation Letter | Aavedan Patra",
  description: "Formal resignation letter templates with clean and professional wording.",
};
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage
        data={professionalResignationTemplate}
      />
    </>
  );
}
