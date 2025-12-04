import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { readmissionTemplate } from "@/data/admissionTemplate/readmissionTemplate";
export const metadata = {
  title: "Application for Re-Admission | Aavedan Patra",
  description: "Simple re-admission application format for school, college, or training programs.",
};
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage
        data={readmissionTemplate}
      />
    </>
  );
}
