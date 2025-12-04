import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { meritScholarshipTemplate } from "@/data/scholarshipTemplate/meritScholarshipTemplate";
export const metadata = {
  title: "Application for Merit-Based Scholarship | Aavedan Patra",
  description: "Sample letter requesting a merit-based scholarship with a clear and effective format.",
};
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage
        data={meritScholarshipTemplate}
      />
    </>
  );
}
