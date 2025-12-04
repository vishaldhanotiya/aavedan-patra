import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { courseAdmissionTemplate } from "@/data/admissionTemplate/courseAdmissionTemplate";
export const metadata = {
  title: "Application for Course Admission | Aavedan Patra",
  description: "Request letter format for seeking admission into any course or training program with sample wording.",
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
