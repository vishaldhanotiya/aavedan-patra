import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { governmentScholarshipTemplate } from "@/data/scholarshipTemplate/governmentScholarshipTemplate";
export const metadata = {
  title: "Application for Government Scholarship | Aavedan Patra",
  description: "Formal application letter for government scholarship with sample writing tips for students.",
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
