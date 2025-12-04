import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { privateScholarshipTemplate } from "@/data/scholarshipTemplate/privateScholarshipTemplate";
export const metadata = {
  title: "Application for Private Scholarship | Aavedan Patra",
  description: "Sample application letter requesting a private scholarship with effective writing format.",
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
