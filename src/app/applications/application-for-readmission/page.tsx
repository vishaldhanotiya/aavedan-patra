import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { readmissionTemplate } from "@/data/admissionTemplate/readmissionTemplate";
export const metadata = {
  title: "Application for re admission | Aavedan Patra",
  description: "Learn more about our aavedan patra",
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
