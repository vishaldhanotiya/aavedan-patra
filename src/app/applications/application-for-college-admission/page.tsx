import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { collegeAdmissionTemplate } from "@/data/admissionTemplate/collegeAdmissionTemplate";
export const metadata = {
  title: "Application for College Admission | Aavedan Patra",
  description: "Formal application letter format for college admission with sample writing tips for students.",
};
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage
        data={collegeAdmissionTemplate}
      />
    </>
  );
}
