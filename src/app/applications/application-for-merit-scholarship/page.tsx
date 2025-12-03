import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { meritScholarshipTemplate } from "@/data/scholarshipTemplate/meritScholarshipTemplate";
export const metadata = {
  title: "Application for merit based scholarship | Aavedan Patra",
  description: "Learn more about our aavedan patra",
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
