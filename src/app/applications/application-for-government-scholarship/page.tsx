import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { governmentScholarshipTemplate } from "@/data/scholarshipTemplate/governmentScholarshipTemplate";
export const metadata = {
  title: "Application for government scholarship | Aavedan Patra",
  description: "Learn more about our aavedan patra",
};
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage
        data={governmentScholarshipTemplate}
      />
    </>
  );
}
