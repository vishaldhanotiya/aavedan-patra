import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { sportsScholarshipTemplate } from "@/data/scholarshipTemplate/sportsScholarshipTemplate";
export const metadata = {
  title: "Application for sports scholarship | Aavedan Patra",
  description: "Learn more about our aavedan patra",
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
