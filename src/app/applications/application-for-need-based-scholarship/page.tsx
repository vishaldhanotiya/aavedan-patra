import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { needBasedScholarshipTemplate } from "@/data/scholarshipTemplate/needBasedScholarshipTemplate";
export const metadata = {
  title: "Application for need baded scholarship | Aavedan Patra",
  description: "Learn more about our aavedan patra",
};
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage
        data={needBasedScholarshipTemplate}
      />
    </>
  );
}
