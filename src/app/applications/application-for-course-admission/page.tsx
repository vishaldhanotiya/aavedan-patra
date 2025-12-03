import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { courseAdmissionTemplate } from "@/data/admissionTemplate/courseAdmissionTemplate";
export const metadata = {
  title: "Application for course admission | Aavedan Patra",
  description: "Learn more about our aavedan patra",
};
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage
        data={courseAdmissionTemplate}
      />
    </>
  );
}
