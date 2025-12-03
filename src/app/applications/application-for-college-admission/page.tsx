import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { collegeAdmissionTemplate } from "@/data/admissionTemplate/collegeAdmissionTemplate";
export const metadata = {
  title: "Application for college admission | Aavedan Patra",
  description: "Learn more about our aavedan patra",
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
