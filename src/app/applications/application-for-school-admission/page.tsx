import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { schoolAdmissionTemplate } from "@/data/admissionTemplate/schoolAdmissionTemplate";
export const metadata = {
  title: "Application for School Admission | Aavedan Patra",
  description: "Formal school admission request letter with sample template for parents and students.",
};
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage
        data={schoolAdmissionTemplate}
      />
    </>
  );
}
