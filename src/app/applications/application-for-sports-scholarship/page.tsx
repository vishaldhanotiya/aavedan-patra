import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { sportsScholarshipTemplate } from "@/data/scholarshipTemplate/sportsScholarshipTemplate";
export const metadata = {
  title: "Application for Sports Scholarship | Aavedan Patra",
  description: "Sports scholarship application letter format with clear and effective writing tips.",
};
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage
        data={sportsScholarshipTemplate}
      />
    </>
  );
}
