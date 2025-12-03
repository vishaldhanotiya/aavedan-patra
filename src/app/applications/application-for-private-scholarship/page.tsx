import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { privateScholarshipTemplate } from "@/data/scholarshipTemplate/privateScholarshipTemplate";
export const metadata = {
  title: "Application for private scholarship | Aavedan Patra",
  description: "Learn more about our aavedan patra",
};
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage
        data={privateScholarshipTemplate}
      />
    </>
  );
}
