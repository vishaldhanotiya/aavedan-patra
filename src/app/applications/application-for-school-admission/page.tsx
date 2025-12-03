import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { schoolAdmissionTemplate } from "@/data/admissionTemplate/schoolAdmissionTemplate";
export const metadata = {
  title: "Application for school admission | Aavedan Patra",
  description: "Learn more about our aavedan patra",
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
