import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { universityAdmissionTemplate } from "@/data/admissionTemplate/universityAdmissionTemplate";
export const metadata = {
  title: "Application for University Admission | Aavedan Patra",
  description: "Formal university admission application letter with sample templates.",
};
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage
        data={universityAdmissionTemplate}
      />
    </>
  );
}
