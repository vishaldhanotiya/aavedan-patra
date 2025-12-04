import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { needBasedScholarshipTemplate } from "@/data/scholarshipTemplate/needBasedScholarshipTemplate";
export const metadata = {
  title: "Application for Need-Based Scholarship | Aavedan Patra",
  description: "Application letter format for students applying for financial aid or need-based scholarships.",
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
